import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// v3 — Error boundary so a runtime error never blanks the whole page
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log for developers only — never surfaced to end users.
    console.error('[IPPOO] Erreur de rendu capturée :', error, info)

    // Attempt a single silent recovery: reload once so a transient error
    // (e.g. a stale chunk after a deploy) resolves itself without the user
    // ever seeing an error screen. The guard prevents a reload loop.
    try {
      if (!sessionStorage.getItem('ippoo_reloaded')) {
        sessionStorage.setItem('ippoo_reloaded', '1')
        window.location.reload()
      }
    } catch {
      /* sessionStorage unavailable — fall through to the silent fallback */
    }
  }

  render() {
    if (this.state.error) {
      // No technical details are ever shown to users. Render nothing so the
      // page stays clean; the reload attempt above handles recovery.
      return null
    }
    return this.props.children
  }
}

const container = document.getElementById('root')!

// Persist the single root across HMR updates. Vite replaces this module's
// bindings on every hot update, so keep the root on `import.meta.hot.data`
// (which survives updates) and fall back to a module-level cache otherwise.
type RootCache = { root?: ReactDOM.Root }
const cache: RootCache = import.meta.hot?.data ?? {}

if (!cache.root) {
  cache.root = ReactDOM.createRoot(container)
}
if (import.meta.hot) {
  import.meta.hot.data.root = cache.root
}

cache.root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
)

// Once the app has stayed up briefly, clear the recovery flag so a future
// transient error can attempt its own single silent reload.
window.addEventListener('load', () => {
  setTimeout(() => {
    try { sessionStorage.removeItem('ippoo_reloaded') } catch { /* ignore */ }
  }, 4000)

  // PWA : enregistrer le service worker uniquement en production (HTTPS).
  // En dev, un SW casserait le HMR de Vite — on l'évite volontairement.
  if (import.meta.env.PROD && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
      console.warn('[IPPOO] Service worker non enregistré :', err)
    })
  }
})

// Do NOT self-accept or unmount here. This file mounts the app and cannot be
// Fast-Refreshed, so let Vite do a clean full reload when it changes — that
// gives a fresh createRoot. Self-accepting would re-run this module inside the
// same page and call createRoot() twice on the same container. The data guard
// above covers any transient re-run.

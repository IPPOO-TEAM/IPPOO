import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { supabase } from '@/lib/supabase'

/* ── Admin session (env-based, no Auth0) ────────────────────── */
const ADMIN_KEY = 'ippoo_admin_session'

interface AdminSession {
  email: string
  loggedAt: number
}

interface AuthContextValue {
  /* Auth0 user */
  isAuthenticated: boolean
  isLoading: boolean
  user: ReturnType<typeof useAuth0>['user']
  loginWithGoogle: () => void
  loginWithEmail: (email: string, password: string) => Promise<void>
  signupWithEmail: (email: string, password: string) => Promise<void>
  logout: () => void
  /* Onboarding */
  isOnboarded: boolean
  setOnboarded: (v: boolean) => void
  /* Admin */
  isAdmin: boolean
  adminEmail: string | null
  adminLogin: (email: string, password: string) => boolean
  adminLogout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth0 = useAuth0()
  const [isOnboarded, setIsOnboarded] = useState(false)
  const [adminSession, setAdminSession] = useState<AdminSession | null>(() => {
    try {
      const raw = sessionStorage.getItem(ADMIN_KEY)
      return raw ? (JSON.parse(raw) as AdminSession) : null
    } catch {
      return null
    }
  })

  /* Check onboarding status when user logs in */
  useEffect(() => {
    if (!auth0.isAuthenticated || !auth0.user?.sub) return
    supabase
      .from('profiles')
      .select('id')
      .eq('auth0_id', auth0.user.sub)
      .single()
      .then(({ data }) => setIsOnboarded(!!data))
  }, [auth0.isAuthenticated, auth0.user?.sub])

  const loginWithGoogle = () =>
    auth0.loginWithRedirect({ authorizationParams: { connection: 'google-oauth2', screen_hint: 'login' } })

  const loginWithEmail = async (email: string, password: string) => {
    await auth0.loginWithRedirect({
      authorizationParams: { login_hint: email, screen_hint: 'login' },
      openUrl: async (url) => { window.location.href = url },
    })
    void password // Auth0 Universal Login handles password
  }

  const signupWithEmail = async (email: string, _password: string) => {
    await auth0.loginWithRedirect({
      authorizationParams: { login_hint: email, screen_hint: 'signup' },
    })
  }

  const handleLogout = () =>
    auth0.logout({ logoutParams: { returnTo: window.location.origin } })

  /* Admin */
  const adminLogin = (email: string, password: string): boolean => {
    const ok =
      email === (import.meta.env.VITE_ADMIN_EMAIL || '') &&
      password === (import.meta.env.VITE_ADMIN_PASSWORD || '')
    if (ok) {
      const session: AdminSession = { email, loggedAt: Date.now() }
      sessionStorage.setItem(ADMIN_KEY, JSON.stringify(session))
      setAdminSession(session)
    }
    return ok
  }

  const adminLogout = () => {
    sessionStorage.removeItem(ADMIN_KEY)
    setAdminSession(null)
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading,
      user: auth0.user,
      loginWithGoogle,
      loginWithEmail,
      signupWithEmail,
      logout: handleLogout,
      isOnboarded,
      setOnboarded: setIsOnboarded,
      isAdmin: !!adminSession,
      adminEmail: adminSession?.email ?? null,
      adminLogin,
      adminLogout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}

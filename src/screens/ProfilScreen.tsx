import { useState } from 'react'
import logo2 from '@/imports/Plan_de_travail072-1.png'

const badges = [
  { label: 'Épargnant régulier', icon: '🔥', desc: '14 semaines consécutives' },
  { label: 'Premier crédit remboursé', icon: '🏆', desc: 'Remboursé en avance' },
  { label: 'Membre tontine actif', icon: '🤝', desc: 'Aucune cotisation manquée' },
  { label: 'Score Elite', icon: '⭐', desc: 'Score > 70' },
]

const menuItems = [
  { label: 'Mes documents', icon: '📄', sub: 'CNI, justificatifs' },
  { label: 'Langue', icon: '🌍', sub: 'Français' },
  { label: 'Notifications', icon: '🔔', sub: 'Activées' },
  { label: 'Sécurité & PIN', icon: '🔒', sub: 'Dernière modification il y a 3 mois' },
  { label: 'Aide & Support', icon: '💬', sub: 'Chat, appel, FAQ' },
  { label: 'À propos d\'IPPOO', icon: '📱', sub: 'Version 1.0' },
]

export default function ProfilScreen() {
  const [editing, setEditing] = useState(false)

  return (
    <div className="min-h-full bg-[#0A0A0A] pb-6">
      {/* Header */}
      <div
        className="px-5 pt-10 pb-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1A0A00 0%, #0A0A0A 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 100% 0%, #E84500 0%, transparent 60%)' }}
        />
        <div className="relative z-10 flex items-center gap-4">
          <div className="relative">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
              style={{ background: 'linear-gradient(135deg, #E84500, #BF3800)' }}
            >
              AD
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#1DB954] rounded-full border-2 border-[#0A0A0A] flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">✓</span>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-white text-xl font-black">Aminata Diallo</h1>
            <p className="text-white/50 text-sm">Couturière · Dakar</p>
            <p className="text-white/30 text-xs mt-0.5">+221 77 123 45 67</p>
          </div>
          <button
            onClick={() => setEditing(!editing)}
            className="px-3 py-1.5 bg-white/10 text-white text-xs font-semibold rounded-xl"
          >
            Modifier
          </button>
        </div>

        {/* Score */}
        <div className="relative z-10 mt-5 bg-white/8 rounded-2xl p-4 border border-white/10">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-xl flex flex-col items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #E84500, #BF3800)', boxShadow: '0 8px 24px rgba(232,69,0,0.4)' }}
            >
              <span className="text-white font-black text-2xl leading-none">72</span>
              <span className="text-white/60 text-[9px]">/ 100</span>
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm">Score IPPOO</p>
              <p className="text-white/50 text-xs mb-2">Niveau : Argent · Prochain : Or à 80</p>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#E84500] rounded-full" style={{ width: '72%' }} />
              </div>
              <p className="text-white/30 text-[10px] mt-1">+8 points pour atteindre le niveau Or</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 space-y-5">
        {/* Stats rapides */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Membre depuis', val: 'Jan 2025', icon: '📅' },
            { label: 'Total épargné', val: '387k FCFA', icon: '💰' },
            { label: 'Crédits remboursés', val: '3', icon: '✅' },
          ].map(s => (
            <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center border border-white/8">
              <p className="text-xl mb-1">{s.icon}</p>
              <p className="text-white font-bold text-sm">{s.val}</p>
              <p className="text-white/40 text-[9px] leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div>
          <h2 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Mes badges</h2>
          <div className="grid grid-cols-2 gap-2">
            {badges.map(b => (
              <div key={b.label} className="bg-white/5 rounded-xl p-3 border border-white/8 flex items-center gap-3">
                <span className="text-2xl shrink-0">{b.icon}</span>
                <div>
                  <p className="text-white text-xs font-semibold leading-tight">{b.label}</p>
                  <p className="text-white/40 text-[10px]">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div className="space-y-1.5">
          {menuItems.map(item => (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 bg-white/4 rounded-xl px-4 py-3.5 border border-white/6
                         active:bg-white/10 transition-colors text-left"
            >
              <span className="text-xl shrink-0">{item.icon}</span>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{item.label}</p>
                <p className="text-white/40 text-xs">{item.sub}</p>
              </div>
              <span className="text-white/25 text-lg">›</span>
            </button>
          ))}
        </div>

        {/* Logo + déconnexion */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <img src={logo2} alt="IPPOO" className="h-8 object-contain opacity-40" />
          <button className="text-[#E84500] text-sm font-semibold active:opacity-70 transition-opacity">
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import HomeScreen from './HomeScreen'
import EpargneScreen from './EpargneScreen'
import CreditScreen from './CreditScreen'
import CommunauteScreen from './CommunauteScreen'
import ProfilScreen from './ProfilScreen'

type Tab = 'home' | 'epargne' | 'credit' | 'communaute' | 'profil'

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'home', label: 'Accueil', icon: '⌂' },
  { id: 'epargne', label: 'Épargne', icon: '💰' },
  { id: 'credit', label: 'Crédit', icon: '📈' },
  { id: 'communaute', label: 'Tontine', icon: '🤝' },
  { id: 'profil', label: 'Profil', icon: '👤' },
]

export default function MainApp() {
  const [active, setActive] = useState<Tab>('home')

  const screens: Record<Tab, React.ReactNode> = {
    home: <HomeScreen onNavigate={setActive} />,
    epargne: <EpargneScreen />,
    credit: <CreditScreen />,
    communaute: <CommunauteScreen />,
    profil: <ProfilScreen />,
  }

  return (
    <div className="fixed inset-0 bg-[#0A0A0A] flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto overscroll-none">
        {screens[active]}
      </div>

      {/* Bottom tab bar */}
      <div className="shrink-0 bg-[#111111] border-t border-white/8 pb-safe">
        <div className="flex">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 transition-all duration-150 relative ${
                active === t.id ? 'text-[#E84500]' : 'text-white/35'
              }`}
            >
              {active === t.id && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#E84500] rounded-full" />
              )}
              <span className="text-xl leading-none">{t.icon}</span>
              <span className="text-[10px] font-semibold">{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

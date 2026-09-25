import logo1 from '@/imports/Plan_de_travail63-1.png'

type Tab = 'home' | 'epargne' | 'credit' | 'communaute' | 'profil'

export default function HomeScreen({ onNavigate }: { onNavigate: (t: Tab) => void }) {
  const quickActions = [
    { label: 'Épargner', icon: '💰', color: '#E84500', tab: 'epargne' as Tab },
    { label: 'Demander un crédit', icon: '📈', color: '#1A6B3C', tab: 'credit' as Tab },
    { label: 'Ma tontine', icon: '🤝', color: '#1A3B6B', tab: 'communaute' as Tab },
    { label: 'Envoyer', icon: '📤', color: '#6B1A6B', tab: 'profil' as Tab },
  ]

  const transactions = [
    { label: 'Versement épargne', date: '3 août 2026', amount: '+5 000 FCFA', positive: true },
    { label: 'Remboursement crédit', date: '1 août 2026', amount: '-12 500 FCFA', positive: false },
    { label: 'Tontine — Tour #4', date: '28 juil 2026', amount: '+75 000 FCFA', positive: true },
    { label: 'Versement épargne', date: '25 juil 2026', amount: '+5 000 FCFA', positive: true },
  ]

  return (
    <div className="min-h-full flex flex-col">
      {/* Header */}
      <div
        className="relative px-5 pt-10 pb-8 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1A0800 0%, #0A0A0A 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(ellipse 120% 80% at 0% 0%, #E84500 0%, transparent 60%)' }}
        />

        <div className="relative z-10 flex items-center justify-between mb-6">
          <div>
            <p className="text-white/50 text-xs font-medium uppercase tracking-widest">Bonjour 👋</p>
            <h1 className="text-white text-xl font-bold mt-0.5">Aminata Diallo</h1>
            <p className="text-white/40 text-xs">Couturière • Dakar, Sénégal</p>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-[#E84500]/20 border border-[#E84500]/40 flex items-center justify-center">
            <span className="text-xl">🔔</span>
          </div>
        </div>

        {/* Balance card */}
        <div
          className="relative rounded-2xl p-5 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #E84500 0%, #BF3800 100%)',
            boxShadow: '0 16px 48px rgba(232,69,0,0.35)',
          }}
        >
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-15"
            style={{ background: 'white', transform: 'translate(30%, -30%)' }}
          />
          <div
            className="absolute bottom-0 left-1/2 w-48 h-12 opacity-10"
            style={{ background: 'white', borderRadius: '50%', filter: 'blur(16px)' }}
          />
          <img src={logo1} alt="IPPOO" className="h-6 object-contain mb-3 relative z-10 opacity-80" />
          <p className="text-white/70 text-xs font-medium mb-1 relative z-10">Solde total disponible</p>
          <p className="text-white text-3xl font-black tracking-tight relative z-10">287 500 <span className="text-lg font-semibold">FCFA</span></p>
          <div className="flex items-center gap-4 mt-4 relative z-10">
            <div>
              <p className="text-white/60 text-[10px] uppercase tracking-wider">Épargne</p>
              <p className="text-white font-bold text-sm">142 500 FCFA</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <p className="text-white/60 text-[10px] uppercase tracking-wider">Crédit dispo</p>
              <p className="text-white font-bold text-sm">145 000 FCFA</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <p className="text-white/60 text-[10px] uppercase tracking-wider">Tontine</p>
              <p className="text-white font-bold text-sm">75 000 FCFA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-5 pb-6 space-y-6 bg-[#0A0A0A]">
        {/* Quick actions */}
        <div>
          <h2 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Actions rapides</h2>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map(a => (
              <button
                key={a.label}
                onClick={() => onNavigate(a.tab)}
                className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${a.color}22`, border: `1.5px solid ${a.color}44` }}
                >
                  {a.icon}
                </div>
                <span className="text-white/60 text-[10px] font-medium text-center leading-tight">{a.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Progress goal */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/8">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-white font-semibold text-sm">Objectif : Machine à coudre</p>
              <p className="text-white/40 text-xs">142 500 / 250 000 FCFA</p>
            </div>
            <span className="text-[#E84500] font-black text-lg">57%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-[#E84500]"
              style={{ width: '57%', boxShadow: '0 0 12px rgba(232,69,0,0.6)' }}
            />
          </div>
          <p className="text-white/40 text-xs mt-2">Encore 107 500 FCFA — environ 22 semaines à ce rythme</p>
        </div>

        {/* Score IPPOO */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/8 flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #E84500, #BF3800)' }}
          >
            <span className="text-white font-black text-xl leading-none">72</span>
            <span className="text-white/70 text-[9px] font-medium">/ 100</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm">Score IPPOO</p>
            <p className="text-white/50 text-xs mt-0.5">Votre score de crédibilité financière</p>
            <div className="flex gap-1.5 mt-2">
              {['Fiabilité', 'Régularité', 'Engagement'].map(tag => (
                <span key={tag} className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-[#E84500]/20 text-[#E84500]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Recent transactions */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white/60 text-xs font-semibold uppercase tracking-widest">Dernières opérations</h2>
            <button className="text-[#E84500] text-xs font-semibold">Tout voir</button>
          </div>
          <div className="space-y-2">
            {transactions.map((tx, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/4 rounded-xl px-4 py-3 border border-white/6">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0 ${
                    tx.positive ? 'bg-[#1DB954]/15 text-[#1DB954]' : 'bg-[#E8002D]/15 text-[#E8002D]'
                  }`}
                >
                  {tx.positive ? '↑' : '↓'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{tx.label}</p>
                  <p className="text-white/40 text-xs">{tx.date}</p>
                </div>
                <span className={`text-sm font-bold shrink-0 ${tx.positive ? 'text-[#1DB954]' : 'text-[#E8002D]'}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'

const produits = [
  {
    nom: 'Crédit Express',
    desc: 'Réponse en 24h, sans garantie',
    max: 50000,
    taux: 3,
    duree: '1-3 mois',
    emoji: '⚡',
    couleur: '#E84500',
  },
  {
    nom: 'Crédit Développement',
    desc: 'Pour développer votre activité',
    max: 500000,
    taux: 8,
    duree: '6-24 mois',
    emoji: '🚀',
    couleur: '#1A6B3C',
  },
  {
    nom: 'Crédit Solidaire',
    desc: 'Garanti par votre groupe tontine',
    max: 200000,
    taux: 5,
    duree: '3-12 mois',
    emoji: '🤝',
    couleur: '#1A3B6B',
  },
]

export default function CreditScreen() {
  const [selected, setSelected] = useState(0)
  const [montant, setMontant] = useState(50000)
  const [duree, setDuree] = useState(3)

  const prod = produits[selected]
  const mensualite = Math.round((montant * (1 + prod.taux / 100)) / duree)
  const totalRemb = mensualite * duree

  return (
    <div className="min-h-full bg-[#0A0A0A] pb-6">
      {/* Header */}
      <div
        className="px-5 pt-10 pb-6"
        style={{ background: 'linear-gradient(160deg, #001A08 0%, #0A0A0A 100%)' }}
      >
        <p className="text-white/50 text-xs uppercase tracking-widest font-medium mb-1">Micro-crédit</p>
        <h1 className="text-white text-2xl font-black">Développez votre activité</h1>
        <p className="text-white/40 text-sm mt-1">Score IPPOO : <span className="text-[#E84500] font-bold">72 / 100</span> — Éligible ✓</p>
      </div>

      <div className="px-5 space-y-5">
        {/* Crédit actif */}
        <div
          className="rounded-2xl p-5 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1A3B6B 0%, #0D1F3C 100%)' }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5" style={{ transform: 'translate(30%, -30%)' }} />
          <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Crédit en cours</p>
          <p className="text-white text-2xl font-black">125 000 FCFA</p>
          <div className="flex items-center gap-6 mt-3">
            <div>
              <p className="text-white/40 text-[10px] uppercase">Remboursé</p>
              <p className="text-white font-bold text-sm">62 500 FCFA</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <p className="text-white/40 text-[10px] uppercase">Restant</p>
              <p className="text-white font-bold text-sm">62 500 FCFA</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <p className="text-white/40 text-[10px] uppercase">Échéance</p>
              <p className="text-white font-bold text-sm">15 oct 2026</p>
            </div>
          </div>
          <div className="h-2 bg-white/15 rounded-full overflow-hidden mt-4">
            <div className="h-full bg-white rounded-full" style={{ width: '50%' }} />
          </div>
          <p className="text-white/40 text-xs mt-1.5">Prochaine échéance : <span className="text-white/70">12 500 FCFA le 15 août</span></p>
        </div>

        {/* Simulateur */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/8">
          <h2 className="text-white font-bold text-sm mb-4">Simuler un nouveau crédit</h2>

          {/* Produits */}
          <div className="space-y-2 mb-4">
            {produits.map((p, i) => (
              <button
                key={p.nom}
                onClick={() => setSelected(i)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-150 text-left ${
                  selected === i ? 'border-2' : 'border border-white/10 bg-white/3'
                }`}
                style={selected === i ? { background: `${p.couleur}18`, borderColor: p.couleur } : {}}
              >
                <span className="text-xl shrink-0">{p.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">{p.nom}</p>
                  <p className="text-white/40 text-xs">{p.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-white/70 text-xs font-bold">Jusqu'à</p>
                  <p className="text-white font-black text-sm">{(p.max/1000).toFixed(0)}k F</p>
                  <p className="text-[10px]" style={{ color: p.couleur }}>{p.taux}% / mois</p>
                </div>
              </button>
            ))}
          </div>

          {/* Sliders */}
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-white/50 text-xs">Montant</span>
                <span className="text-white font-bold text-sm">{montant.toLocaleString()} FCFA</span>
              </div>
              <input
                type="range"
                min={5000}
                max={prod.max}
                step={5000}
                value={montant}
                onChange={e => setMontant(Number(e.target.value))}
                className="w-full accent-[#E84500]"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-white/50 text-xs">Durée</span>
                <span className="text-white font-bold text-sm">{duree} mois</span>
              </div>
              <input
                type="range"
                min={1}
                max={24}
                step={1}
                value={duree}
                onChange={e => setDuree(Number(e.target.value))}
                className="w-full accent-[#E84500]"
              />
            </div>
          </div>

          {/* Result */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-[#E84500]/15 border border-[#E84500]/30 rounded-xl p-3 text-center">
              <p className="text-[#E84500] text-[10px] uppercase tracking-wider font-semibold mb-1">Mensualité</p>
              <p className="text-white font-black text-lg">{mensualite.toLocaleString()}</p>
              <p className="text-white/40 text-[10px]">FCFA / mois</p>
            </div>
            <div className="bg-white/6 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-white/50 text-[10px] uppercase tracking-wider font-semibold mb-1">Total à rembourser</p>
              <p className="text-white font-black text-lg">{totalRemb.toLocaleString()}</p>
              <p className="text-white/40 text-[10px]">FCFA</p>
            </div>
          </div>
        </div>

        <button className="w-full py-4 rounded-2xl bg-[#E84500] text-white font-bold text-base
                           active:scale-95 transition-transform shadow-[0_8px_32px_rgba(232,69,0,0.4)]">
          Faire une demande de crédit
        </button>
      </div>
    </div>
  )
}

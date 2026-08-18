import { useState } from 'react'

const objectifs = [
  { nom: 'Machine à coudre', montant: 250000, actuel: 142500, emoji: '🧵', couleur: '#E84500' },
  { nom: 'Fonds urgence', montant: 100000, actuel: 60000, emoji: '🛡️', couleur: '#1A6B3C' },
  { nom: 'Rentrée scolaire', montant: 50000, actuel: 12000, emoji: '📚', couleur: '#1A3B6B' },
]

const periodes = ['Quotidien', 'Hebdo', 'Mensuel']

export default function EpargneScreen() {
  const [periode, setPeriode] = useState('Hebdo')
  const [montant, setMontant] = useState('')
  const [showVersement, setShowVersement] = useState(false)

  const totalEpargne = 142500
  const tauxInteret = 4.5
  const gainMensuel = Math.round(totalEpargne * tauxInteret / 100 / 12)

  return (
    <div className="min-h-full bg-[#0A0A0A] pb-6">
      {/* Header */}
      <div
        className="px-5 pt-10 pb-6"
        style={{ background: 'linear-gradient(160deg, #001A0D 0%, #0A0A0A 100%)' }}
      >
        <p className="text-white/50 text-xs uppercase tracking-widest font-medium mb-1">Mon épargne</p>
        <h1 className="text-white text-3xl font-black">142 500 <span className="text-lg font-semibold text-white/60">FCFA</span></h1>
        <p className="text-[#1DB954] text-sm font-medium mt-1">
          +{gainMensuel.toLocaleString()} FCFA / mois · Taux {tauxInteret}% / an
        </p>

        <div className="grid grid-cols-3 gap-3 mt-5">
          {[
            { label: 'Ce mois', val: '20 000 FCFA', icon: '📅' },
            { label: 'Semaines consécutives', val: '14', icon: '🔥' },
            { label: 'Intérêts gagnés', val: '5 430 FCFA', icon: '✨' },
          ].map(s => (
            <div key={s.label} className="bg-white/6 rounded-xl p-3 text-center border border-white/8">
              <p className="text-xl mb-1">{s.icon}</p>
              <p className="text-white font-bold text-sm">{s.val}</p>
              <p className="text-white/40 text-[10px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 space-y-5">
        {/* Versement rapide */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/8">
          <div className="flex items-center justify-between mb-3">
            <p className="text-white font-semibold text-sm">Versement automatique</p>
            <Toggle />
          </div>
          <div className="flex gap-2 mb-3">
            {periodes.map(p => (
              <button
                key={p}
                onClick={() => setPeriode(p)}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  periode === p ? 'bg-[#1DB954] text-white' : 'bg-white/8 text-white/50'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {[1000, 2000, 5000, 10000].map(m => (
              <button
                key={m}
                onClick={() => setMontant(String(m))}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  montant === String(m) ? 'bg-[#E84500] text-white' : 'bg-white/8 text-white/50'
                }`}
              >
                {m.toLocaleString()} F
              </button>
            ))}
          </div>
        </div>

        {/* Objectifs */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white/60 text-xs font-semibold uppercase tracking-widest">Mes objectifs</h2>
            <button className="text-[#E84500] text-xs font-semibold">+ Ajouter</button>
          </div>
          <div className="space-y-3">
            {objectifs.map(obj => {
              const pct = Math.round((obj.actuel / obj.montant) * 100)
              return (
                <div key={obj.nom} className="bg-white/5 rounded-2xl p-4 border border-white/8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{obj.emoji}</span>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">{obj.nom}</p>
                      <p className="text-white/40 text-xs">
                        {obj.actuel.toLocaleString()} / {obj.montant.toLocaleString()} FCFA
                      </p>
                    </div>
                    <span className="font-black text-lg" style={{ color: obj.couleur }}>{pct}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, background: obj.couleur, boxShadow: `0 0 10px ${obj.couleur}60` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => setShowVersement(true)}
          className="w-full py-4 rounded-2xl bg-[#E84500] text-white font-bold text-base
                     active:scale-95 transition-transform shadow-[0_8px_32px_rgba(232,69,0,0.4)]"
        >
          Faire un versement maintenant
        </button>
      </div>

      {/* Modal versement */}
      {showVersement && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowVersement(false)} />
          <div className="relative bg-[#161616] rounded-t-3xl p-6 border-t border-white/10">
            <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-5" />
            <h3 className="text-white font-bold text-lg mb-4">Nouveau versement</h3>
            <div className="bg-white/8 rounded-xl px-4 py-3 flex items-center mb-4">
              <span className="text-white/40 text-sm">FCFA</span>
              <input
                type="number"
                value={montant}
                onChange={e => setMontant(e.target.value)}
                placeholder="0"
                className="flex-1 bg-transparent text-white text-2xl font-bold text-right focus:outline-none"
              />
            </div>
            <div className="flex gap-2 mb-5">
              {[500,1000,5000,10000].map(m => (
                <button key={m} onClick={() => setMontant(String(m))}
                  className="flex-1 py-2 bg-white/8 text-white/70 text-xs font-semibold rounded-xl">
                  {m >= 1000 ? `${m/1000}k` : m}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowVersement(false)}
              className="w-full py-4 rounded-2xl bg-[#E84500] text-white font-bold
                         shadow-[0_8px_32px_rgba(232,69,0,0.4)] active:scale-95 transition-transform"
            >
              Confirmer le versement
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function Toggle() {
  const [on, setOn] = useState(true)
  return (
    <button
      onClick={() => setOn(!on)}
      className={`w-11 h-6 rounded-full transition-all duration-200 relative ${on ? 'bg-[#1DB954]' : 'bg-white/20'}`}
    >
      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-200 ${on ? 'left-5' : 'left-0.5'}`} />
    </button>
  )
}

import { useState } from 'react'

const membres = [
  { nom: 'Fatou Sow', metier: 'Vendeuse de tissus', score: 85, tour: 1, statue: 'reçu' },
  { nom: 'Moussa Diop', metier: 'Mécanicien auto', score: 78, tour: 2, statue: 'reçu' },
  { nom: 'Aissatou Ba', metier: 'Coiffeuse', score: 91, tour: 3, statue: 'reçu' },
  { nom: 'Aminata Diallo', metier: 'Couturière', score: 72, tour: 4, statue: 'reçu', moi: true },
  { nom: 'Ibrahim Ndiaye', metier: 'Chauffeur taxi', score: 68, tour: 5, statue: 'à venir' },
  { nom: 'Mariama Fall', metier: 'Marchande fruits', score: 74, tour: 6, statue: 'à venir' },
  { nom: 'Oumar Cissé', metier: 'Cordonnier', score: 80, tour: 7, statue: 'à venir' },
  { nom: 'Rokhaya Gueye', metier: 'Teinturière', score: 77, tour: 8, statue: 'à venir' },
]

const TABS = ['Ma tontine', 'Rejoindre', 'Historique']

export default function CommunauteScreen() {
  const [tab, setTab] = useState(0)

  const cotisation = 10000
  const potTotal = cotisation * membres.length
  const prochainTour = membres.find(m => m.statue === 'à venir')

  return (
    <div className="min-h-full bg-[#0A0A0A] pb-6">
      {/* Header */}
      <div
        className="px-5 pt-10 pb-6"
        style={{ background: 'linear-gradient(160deg, #0D0018 0%, #0A0A0A 100%)' }}
      >
        <p className="text-white/50 text-xs uppercase tracking-widest font-medium mb-1">Solidarité</p>
        <h1 className="text-white text-2xl font-black">Tontine numérique</h1>
        <p className="text-white/40 text-sm mt-1">Groupe « Espoir Dakar » · 8 membres</p>

        {/* Pot */}
        <div
          className="mt-4 rounded-2xl p-4 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #6B1A6B 0%, #3D0E3D 100%)' }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5" style={{ transform: 'translate(40%, -40%)' }} />
          <div className="grid grid-cols-3 gap-4 relative z-10">
            <div className="text-center">
              <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1">Pot du mois</p>
              <p className="text-white font-black text-lg">{potTotal.toLocaleString()}</p>
              <p className="text-white/50 text-[10px]">FCFA</p>
            </div>
            <div className="text-center border-x border-white/15">
              <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1">Ma cotisation</p>
              <p className="text-white font-black text-lg">{cotisation.toLocaleString()}</p>
              <p className="text-white/50 text-[10px]">FCFA / mois</p>
            </div>
            <div className="text-center">
              <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1">Mon tour</p>
              <p className="text-white font-black text-lg">#4</p>
              <p className="text-white/50 text-[10px]">sur 8</p>
            </div>
          </div>
          <div className="mt-3 relative z-10">
            <p className="text-white/40 text-xs">Prochain tirage : <span className="text-white/80 font-semibold">1er septembre 2026</span></p>
          </div>
        </div>
      </div>

      <div className="px-5 space-y-5">
        {/* Tabs */}
        <div className="flex bg-white/5 rounded-2xl p-1 gap-1">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                tab === i ? 'bg-[#E84500] text-white' : 'text-white/50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 0 && (
          <>
            {/* Prochaine cotisation */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/8 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold text-sm">Prochaine cotisation</p>
                <p className="text-white/40 text-xs">Due le 31 août 2026</p>
              </div>
              <button className="px-4 py-2 bg-[#E84500] text-white font-bold text-sm rounded-xl
                                 active:scale-95 transition-transform shadow-[0_4px_16px_rgba(232,69,0,0.4)]">
                Payer {cotisation.toLocaleString()} F
              </button>
            </div>

            {/* Membres */}
            <div>
              <h2 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">
                Membres du groupe
              </h2>
              <div className="space-y-2">
                {membres.map((m, i) => (
                  <div
                    key={m.nom}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 border transition-all ${
                      m.moi
                        ? 'bg-[#E84500]/12 border-[#E84500]/40'
                        : 'bg-white/4 border-white/6'
                    }`}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black shrink-0 text-white"
                      style={{
                        background: m.statue === 'reçu'
                          ? 'linear-gradient(135deg, #1DB954, #0F8C3A)'
                          : m.moi ? '#E84500' : '#333',
                      }}
                    >
                      #{m.tour}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-white text-sm font-semibold truncate">{m.nom}</p>
                        {m.moi && (
                          <span className="text-[9px] font-bold bg-[#E84500] text-white px-1.5 py-0.5 rounded-full">
                            MOI
                          </span>
                        )}
                      </div>
                      <p className="text-white/40 text-xs">{m.metier}</p>
                    </div>
                    <div className="text-right shrink-0">
                      {m.statue === 'reçu' ? (
                        <span className="text-[#1DB954] text-xs font-bold">✓ Reçu</span>
                      ) : (
                        <span className="text-white/40 text-xs">À venir</span>
                      )}
                      <p className="text-white/30 text-[10px]">Score {m.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === 1 && (
          <div className="space-y-3">
            <p className="text-white/50 text-sm">Rejoignez un groupe tontine ou créez le vôtre :</p>
            {[
              { nom: 'Groupe Liberté', membres: 6, cotis: 5000, places: 2 },
              { nom: 'Tontine Femmes Entrepreneurs', membres: 10, cotis: 10000, places: 3 },
              { nom: 'Solidarité Artisans', membres: 8, cotis: 15000, places: 1 },
            ].map(g => (
              <div key={g.nom} className="bg-white/5 rounded-2xl p-4 border border-white/8 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{g.nom}</p>
                  <p className="text-white/40 text-xs">{g.membres} membres · {g.cotis.toLocaleString()} FCFA / mois</p>
                  <p className="text-[#E84500] text-xs font-semibold">{g.places} place{g.places > 1 ? 's' : ''} disponible{g.places > 1 ? 's' : ''}</p>
                </div>
                <button className="px-4 py-2 bg-white/10 text-white font-semibold text-xs rounded-xl">
                  Rejoindre
                </button>
              </div>
            ))}
            <button className="w-full py-4 rounded-2xl border-2 border-dashed border-[#E84500]/40 text-[#E84500] font-bold text-sm
                               active:scale-95 transition-transform">
              + Créer mon groupe
            </button>
          </div>
        )}

        {tab === 2 && (
          <div className="space-y-2">
            {[
              { action: 'Tour #4 reçu — Aminata', date: '1 août 2026', montant: '+80 000 FCFA', ok: true },
              { action: 'Cotisation payée', date: '28 juil 2026', montant: '-10 000 FCFA', ok: false },
              { action: 'Tour #3 reçu — Aissatou', date: '1 juil 2026', montant: '80 000 FCFA distribués', ok: true },
              { action: 'Cotisation payée', date: '28 juin 2026', montant: '-10 000 FCFA', ok: false },
            ].map((h, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/4 rounded-xl px-4 py-3 border border-white/6">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 ${
                  h.ok ? 'bg-[#1DB954]/15 text-[#1DB954]' : 'bg-[#E84500]/15 text-[#E84500]'
                }`}>
                  {h.ok ? '↑' : '↓'}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{h.action}</p>
                  <p className="text-white/40 text-xs">{h.date}</p>
                </div>
                <span className={`text-sm font-bold ${h.ok ? 'text-[#1DB954]' : 'text-[#E84500]'}`}>{h.montant}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

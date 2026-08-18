import { useState } from 'react'
import logo2 from '@/imports/Plan_de_travail072-1.png'

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [phone, setPhone] = useState('')
  const [pin, setPin] = useState('')
  const [name, setName] = useState('')
  const [metier, setMetier] = useState('')
  const [step, setStep] = useState(1)

  const metiers = [
    'Vendeur ambulant', 'Artisan', 'Mécanicien', 'Couturière',
    'Coiffeur/Coiffeuse', 'Chauffeur', 'Agriculteur', 'Commerçant(e)',
    'Pêcheur', 'Autre',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (tab === 'register' && step === 1) { setStep(2); return }
    onLogin()
  }

  return (
    <div className="fixed inset-0 bg-[#0A0A0A] flex flex-col overflow-hidden">
      {/* Top hero */}
      <div
        className="flex flex-col items-center justify-center pt-12 pb-8 px-6 relative"
        style={{ background: 'linear-gradient(180deg, #1A0A00 0%, #0A0A0A 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 0%, #E84500 0%, transparent 70%)' }}
        />
        <img src={logo2} alt="IPPOO" className="w-44 object-contain relative z-10" />
        <p className="text-white/50 text-xs font-medium tracking-widest uppercase mt-2 relative z-10">
          Inclusion • Protection • Opportunité
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex mx-6 mb-6 bg-white/5 rounded-2xl p-1">
        {(['login', 'register'] as const).map(t => (
          <button
            key={t}
            onClick={() => { setTab(t); setStep(1) }}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
              tab === t
                ? 'bg-[#E84500] text-white shadow-lg'
                : 'text-white/50'
            }`}
          >
            {t === 'login' ? 'Se connecter' : "S'inscrire"}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 px-6 flex flex-col gap-4">
        {tab === 'login' && (
          <>
            <Input label="Numéro de téléphone" type="tel" value={phone}
              onChange={setPhone} placeholder="+221 XX XXX XX XX" />
            <PinInput label="Code PIN" value={pin} onChange={setPin} />
            <button
              type="button"
              className="text-[#E84500] text-sm font-medium text-right -mt-2"
            >
              PIN oublié ?
            </button>
          </>
        )}

        {tab === 'register' && step === 1 && (
          <>
            <Input label="Nom complet" value={name} onChange={setName} placeholder="Ex: Aminata Diallo" />
            <Input label="Numéro de téléphone" type="tel" value={phone}
              onChange={setPhone} placeholder="+221 XX XXX XX XX" />
            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Métier</label>
              <div className="grid grid-cols-2 gap-2">
                {metiers.map(m => (
                  <button
                    key={m} type="button"
                    onClick={() => setMetier(m)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all duration-150 ${
                      metier === m
                        ? 'bg-[#E84500] text-white'
                        : 'bg-white/8 text-white/70 hover:bg-white/15'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === 'register' && step === 2 && (
          <>
            <div className="text-center mb-2">
              <p className="text-white font-semibold">Créez votre PIN secret</p>
              <p className="text-white/50 text-xs mt-1">6 chiffres — ne le partagez jamais</p>
            </div>
            <PinInput label="Nouveau PIN (6 chiffres)" value={pin} onChange={setPin} />
          </>
        )}

        <button
          type="submit"
          className="mt-auto mb-4 w-full py-4 bg-[#E84500] text-white font-bold text-base rounded-2xl
                     active:scale-95 transition-transform shadow-[0_8px_32px_rgba(232,69,0,0.4)]"
        >
          {tab === 'login'
            ? 'Connexion'
            : step === 1 ? 'Continuer →' : 'Créer mon compte'}
        </button>
      </form>
    </div>
  )
}

function Input({
  label, value, onChange, placeholder, type = 'text'
}: {
  label: string; value: string; onChange: (v: string) => void
  placeholder?: string; type?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-white/8 border border-white/10 rounded-xl px-4 py-3.5 text-white
                   placeholder:text-white/25 text-sm focus:outline-none focus:border-[#E84500]
                   transition-colors"
      />
    </div>
  )
}

function PinInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">{label}</label>
      <div className="flex gap-3 justify-center">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-150 ${
              i < value.length
                ? 'border-[#E84500] bg-[#E84500]/20'
                : 'border-white/20 bg-white/5'
            }`}
          >
            {i < value.length && <div className="w-2.5 h-2.5 rounded-full bg-[#E84500]" />}
          </div>
        ))}
      </div>
      {/* Hidden real input for keyboard */}
      <input
        type="password"
        inputMode="numeric"
        maxLength={6}
        value={value}
        onChange={e => onChange(e.target.value.replace(/\D/g, '').slice(0, 6))}
        className="opacity-0 absolute h-0 w-0"
        autoComplete="off"
      />
      {/* NumPad visible */}
      <Numpad value={value} onChange={onChange} />
    </div>
  )
}

function Numpad({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const keys = ['1','2','3','4','5','6','7','8','9','','0','⌫']
  return (
    <div className="grid grid-cols-3 gap-2 mt-2">
      {keys.map((k, i) => (
        <button
          key={i} type="button"
          onClick={() => {
            if (!k) return
            if (k === '⌫') onChange(value.slice(0, -1))
            else if (value.length < 6) onChange(value + k)
          }}
          className={`h-12 rounded-xl font-semibold text-lg transition-all duration-100
            active:scale-90 ${
            k ? 'bg-white/8 text-white hover:bg-white/15' : ''
          }`}
        >
          {k}
        </button>
      ))}
    </div>
  )
}

import { useState } from 'react'
import { Lock, Mail, Shield, ArrowLeft } from 'lucide-react'
import logo from '@/imports/Logo_Noir_sur_Blanc-1.png'

export function AdminLoginPage({
  onLogin, onBack,
}: {
  onLogin: (email: string, password: string) => boolean
  onBack: () => void
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 600)) // prevent brute-force timing
    const ok = onLogin(email, password)
    if (!ok) {
      setError('Identifiants administrateur invalides.')
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: 'linear-gradient(160deg, #0F0A1E 0%, #1A0530 50%, #0A1020 100%)' }}>
      {/* Back */}
      <button onClick={onBack}
        className="absolute top-4 left-4 flex items-center gap-1.5 text-white/40 text-[12px] font-semibold hover:text-white/70 transition-colors">
        <ArrowLeft size={14} /> Retour au site
      </button>

      {/* Background glows */}
      <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#FF2D7A' }} />
      <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#7C3AED' }} />

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src={logo} alt="IPPOO" className="h-12 w-auto object-contain mx-auto mb-3 brightness-0 invert opacity-80" />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
            style={{ background: 'rgba(255,45,122,0.15)', border: '1px solid rgba(255,45,122,0.3)' }}>
            <Shield size={12} className="text-[#FF2D7A]" />
            <span className="text-[#FF2D7A] text-[10px] font-black uppercase tracking-widest">Accès Administrateur</span>
          </div>
          <h1 className="text-white font-black text-[24px]">Espace Admin</h1>
          <p className="text-white/40 text-[13px] mt-1">IPPOO — APTDC-Z-UP/TDO/LIMITED</p>
        </div>

        {/* Card */}
        <div className="rounded-3xl p-6 backdrop-blur-xl"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          {error && (
            <div className="px-4 py-3 rounded-2xl text-[13px] font-medium text-[#FF6B6B] mb-4"
              style={{ background: 'rgba(225,6,0,0.15)', border: '1px solid rgba(225,6,0,0.3)' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1.5 block">
                Email Admin
              </label>
              <div className="relative">
                <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="admin@ippoo.com" required
                  className="w-full pl-10 pr-4 py-3 rounded-2xl text-[14px] outline-none text-white placeholder:text-white/20"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(255,45,122,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1.5 block">
                Mot de passe
              </label>
              <div className="relative">
                <Lock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••" required
                  className="w-full pl-10 pr-4 py-3 rounded-2xl text-[14px] outline-none text-white placeholder:text-white/20"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(255,45,122,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
              </div>
            </div>

            <button type="submit" disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-[14px] text-white transition-all hover:opacity-90 active:scale-[0.98] mt-1"
              style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)', boxShadow: '0 4px 20px rgba(225,6,0,0.4)' }}>
              <Shield size={15} />
              {submitting ? 'Vérification…' : 'Accéder au panneau'}
            </button>
          </form>
        </div>

        <p className="text-center text-white/20 text-[11px] mt-6">
          Accès réservé aux administrateurs APTDC-Z-UP/TDO/LIMITED
        </p>
      </div>
    </div>
  )
}

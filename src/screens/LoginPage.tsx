import { useState } from 'react'
import { ArrowLeft, Eye, EyeOff, Mail, Lock, LogIn, ShieldCheck } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import logo from '@/imports/Logo_Noir_sur_Blanc-1.png'

export function LoginPage({ onBack, onGoRegister }: { onBack: () => void; onGoRegister: () => void }) {
  const { loginWithRedirect, isLoading } = useAuth0()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) { setError('Veuillez remplir tous les champs.'); return }
    setError('')
    setSubmitting(true)
    try {
      sessionStorage.setItem('ippoo_post_auth', '1')
      await loginWithRedirect({
        authorizationParams: { login_hint: email, screen_hint: 'login' },
      })
    } catch {
      setError('Connexion échouée. Vérifiez vos identifiants.')
      setSubmitting(false)
    }
  }

  const handleGoogle = () => {
    sessionStorage.setItem('ippoo_post_auth', '1')
    loginWithRedirect({ authorizationParams: { connection: 'google-oauth2', screen_hint: 'login' } })
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#FFF8F2' }}>
      {/* Header band */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E10600 0%, #FF2D7A 60%, #FF72E2 100%)', minHeight: 240 }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, white 0%, transparent 60%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)' }} />
        <div className="relative z-10 px-5 pt-5 pb-16 max-w-md mx-auto w-full">
          <button onClick={onBack} className="flex items-center gap-1.5 text-white/75 text-[12px] font-semibold mb-8 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Retour
          </button>
          <img src={logo} alt="IPPOO" className="h-9 w-auto object-contain mb-5 brightness-0 invert" />
          <h1 className="text-white font-black text-[30px] leading-[1.1]">Bon retour</h1>
          <p className="text-white/70 text-[13px] mt-1.5">Connectez-vous à votre espace IPPOO</p>
        </div>
      </div>

      {/* Card overlapping the band */}
      <div className="px-5 -mt-10 max-w-md mx-auto w-full flex-1 pb-10">
        <div className="rounded-3xl bg-white p-5" style={{ border: '1px solid #F3E8D8', boxShadow: '0 12px 40px rgba(225,6,0,0.10)' }}>
          {/* Google CTA */}
          <button onClick={handleGoogle} disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl font-semibold text-[14px] transition-all hover:shadow-md active:scale-[0.99]"
            style={{ background: 'white', border: '1.5px solid #E5E7EB', color: '#111827' }}>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuer avec Google
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[#F3E8D8]" />
            <span className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">ou par email</span>
            <div className="flex-1 h-px bg-[#F3E8D8]" />
          </div>

          <form onSubmit={handleEmail} className="flex flex-col gap-4">
            {error && (
              <div className="px-4 py-3 rounded-2xl text-[13px] font-medium text-[#E10600]"
                style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                {error}
              </div>
            )}

            <div>
              <label className="text-[11px] font-black uppercase tracking-wider text-[#6B7280] mb-1.5 block">Email</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="vous@exemple.com" required
                  className="w-full pl-10 pr-4 py-3.5 rounded-2xl text-[14px] outline-none transition-all"
                  style={{ background: '#FFFCFA', border: '1.5px solid #F3E8D8', color: '#111827' }}
                  onFocus={e => (e.target.style.borderColor = '#FF2D7A')}
                  onBlur={e => (e.target.style.borderColor = '#F3E8D8')} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[11px] font-black uppercase tracking-wider text-[#6B7280]">Mot de passe</label>
                <button type="button" onClick={handleGoogle} className="text-[11px] font-semibold text-[#FF2D7A] hover:underline">Mot de passe oublié ?</button>
              </div>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                <input type={showPwd ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••" required
                  className="w-full pl-10 pr-11 py-3.5 rounded-2xl text-[14px] outline-none transition-all"
                  style={{ background: '#FFFCFA', border: '1.5px solid #F3E8D8', color: '#111827' }}
                  onFocus={e => (e.target.style.borderColor = '#FF2D7A')}
                  onBlur={e => (e.target.style.borderColor = '#F3E8D8')} />
                <button type="button" onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151]">
                  {showPwd ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={submitting || isLoading}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-[14px] text-white transition-all hover:opacity-90 active:scale-[0.98] mt-1 disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)', boxShadow: '0 8px 24px rgba(225,6,0,0.30)' }}>
              <LogIn size={16} />
              {submitting ? 'Connexion…' : 'Se connecter'}
            </button>
          </form>

          <p className="text-center text-[13px] text-[#6B7280] mt-5">
            Pas encore membre ?{' '}
            <button onClick={onGoRegister} className="font-bold text-[#FF2D7A] hover:underline">
              Créer un compte
            </button>
          </p>
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-5 text-[11px] text-[#9CA3AF]">
          <ShieldCheck size={12} className="text-[#16A34A]" />
          Connexion sécurisée · Propriété de APTDC-Z-UP/TDO/LIMITED
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState, type ComponentType } from 'react'
import {
  Search, Bell, LogOut, ArrowUpRight, ChevronRight,
  User, Users, Settings, CreditCard, ClipboardList,
  Headphones, MessageCircle, Phone, Wallet, Globe, LifeBuoy,
} from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { supabase } from '@/lib/supabase'
import logoWhite from '@/imports/Logo_Blanc_Transparent-1.png'

interface Platform {
  id: number
  name: string
  tag: string
  color: string
  url: string
  LIcon: IconType
}

interface Props {
  platforms: Platform[]
  onNavigate: (page: string) => void
  onLogout: () => void
  onHome: () => void
}

type IconType = ComponentType<{ size?: number; className?: string; strokeWidth?: number; style?: React.CSSProperties }>

const ACCOUNT_ITEMS: {
  key: string; label: string; desc: string; page: string;
  Icon: IconType; color: string; bg: string
}[] = [
  { key: 'profil', label: 'Mon profil', desc: 'Identité, activité, localisation', page: 'moncompte', Icon: User, color: '#FF2D7A', bg: '#FFF0F6' },
  { key: 'souscription', label: 'Ma souscription', desc: 'Formule & renouvellement', page: 'souscriptions', Icon: CreditCard, color: '#7C3AED', bg: '#F5F3FF' },
  { key: 'parrainage', label: 'Parrainage', desc: 'Invitez et gagnez des bonus', page: 'parrainage', Icon: Users, color: '#16A34A', bg: '#ECFDF5' },
  { key: 'kaash', label: 'Portefeuille KAASH', desc: 'Solde, transferts, paiements', page: 'kaash', Icon: Wallet, color: '#0891B2', bg: '#ECFEFF' },
  { key: 'fiches', label: 'Fiches de suivi', desc: 'Vos dossiers & accompagnement', page: 'fiches', Icon: ClipboardList, color: '#D4AF37', bg: '#FEFCE8' },
  { key: 'parametres', label: 'Paramètres', desc: 'Compte, sécurité, notifications', page: 'parametres', Icon: Settings, color: '#6B7280', bg: '#F3F4F6' },
]

const SUPPORT = [
  { label: 'WhatsApp', desc: 'Réponse rapide', Icon: MessageCircle, color: '#25D366', href: 'https://wa.me/2290141521092' },
  { label: 'Appeler', desc: '+229 01 41 52 10 92', Icon: Phone, color: '#FF2D7A', href: 'tel:+2290141521092' },
  { label: 'Doléances', desc: 'Ouvrir un ticket', Icon: LifeBuoy, color: '#7C3AED', page: 'doleances' },
]

export default function MemberDashboard({ platforms, onNavigate, onLogout, onHome }: Props) {
  const { user } = useAuth0()
  const [prenom, setPrenom] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!user?.sub) return
    supabase
      .from('profiles')
      .select('prenom')
      .eq('auth0_id', user.sub)
      .single()
      .then(({ data }) => { const p = (data as { prenom?: string } | null)?.prenom; if (p) setPrenom(p) })
  }, [user?.sub])

  const greeting = (() => {
    const h = new Date().getHours()
    if (h < 12) return 'Bonjour'
    if (h < 18) return 'Bon après-midi'
    return 'Bonsoir'
  })()

  const name = prenom || (user?.given_name as string) || (user?.name as string)?.split(' ')[0] || (user?.email as string)?.split('@')[0] || 'Membre'

  const shown = query.trim()
    ? platforms.filter(p => (p.name + ' ' + p.tag).toLowerCase().includes(query.trim().toLowerCase()))
    : platforms

  return (
    <div className="min-h-screen" style={{ background: '#FFF8F2' }}>
      {/* ── Header band ── */}
      <div className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #FF2D7A 62%, #FF72E2 100%)' }}>
        <div className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'radial-gradient(circle at 18% 20%, white 0%, transparent 55%), radial-gradient(circle at 90% 0%, white 0%, transparent 45%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-5 pt-6 pb-20">
          <div className="flex items-center justify-between mb-7">
            <button onClick={onHome} className="shrink-0">
              <img src={logoWhite} alt="IPPOO" className="h-9 w-auto object-contain" />
            </button>
            <div className="flex items-center gap-2">
              <button className="relative w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.14)' }} aria-label="Notifications">
                <Bell size={17} className="text-white" />
                <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-[#FFE600] ring-2 ring-[#B4318E]" />
              </button>
              <button onClick={onLogout}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.14)' }} aria-label="Se déconnecter">
                <LogOut size={16} className="text-white" />
              </button>
            </div>
          </div>

          <p className="text-white/70 text-[13px] font-semibold">{greeting},</p>
          <h1 className="text-white font-black text-[28px] leading-tight capitalize">{name} 👋</h1>
          <p className="text-white/75 text-[13px] mt-1.5">Bienvenue dans votre espace IPPOO — vos 21 plateformes réunies.</p>

          {/* Search */}
          <div className="mt-5 relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Rechercher un espace…"
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-[14px] outline-none bg-white"
              style={{ boxShadow: '0 8px 24px rgba(124,58,237,0.22)', color: '#111827' }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 -mt-10 pb-16 relative z-10">
        {/* ── Quick stats ── */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { v: '21', l: 'Espaces', c: '#FF2D7A' },
            { v: 'Active', l: 'Souscription', c: '#16A34A' },
            { v: '0 FCFA', l: 'Solde KAASH', c: '#7C3AED' },
          ].map(st => (
            <div key={st.l} className="rounded-2xl bg-white p-3.5 text-center"
              style={{ border: '1px solid #F3E8D8', boxShadow: '0 6px 18px rgba(124,58,237,0.06)' }}>
              <p className="font-black text-[17px] leading-none" style={{ color: st.c }}>{st.v}</p>
              <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider mt-1.5">{st.l}</p>
            </div>
          ))}
        </div>

        {/* ── 21 Espaces ── */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-black text-[19px] text-[#111827]">Vos espaces</h2>
          <span className="text-[12px] font-semibold text-[#9CA3AF]">{shown.length} plateformes</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {shown.map(p => (
            <a key={p.id} href={p.url && p.url !== '#' ? p.url : undefined}
              target={p.url && p.url !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
              className="group relative rounded-3xl bg-white p-4 flex flex-col gap-3 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ border: '1px solid #F3E8D8', boxShadow: '0 6px 18px rgba(17,24,39,0.05)' }}>
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: p.color + '1F' }}>
                  <span style={{ color: p.color }}><p.LIcon size={20} strokeWidth={2} /></span>
                </div>
                <ArrowUpRight size={16} className="text-[#D1D5DB] group-hover:text-[#FF2D7A] transition-colors" />
              </div>
              <div>
                <p className="font-black text-[13px] leading-tight text-[#111827]">{p.name}</p>
                <p className="text-[11px] font-semibold mt-0.5" style={{ color: p.color }}>{p.tag}</p>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-1 rounded-b-3xl opacity-70"
                style={{ background: p.color }} />
            </a>
          ))}
          {shown.length === 0 && (
            <p className="col-span-full text-center text-[13px] text-[#9CA3AF] py-8">
              Aucun espace ne correspond à « {query} ».
            </p>
          )}
        </div>

        {/* ── Compte & paramètres ── */}
        <h2 className="font-black text-[19px] text-[#111827] mb-4">Compte &amp; paramètres</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {ACCOUNT_ITEMS.map(it => (
            <button key={it.key} onClick={() => onNavigate(it.page)}
              className="flex items-center gap-3.5 rounded-2xl bg-white p-4 text-left transition-all hover:-translate-y-0.5 active:scale-[0.99]"
              style={{ border: '1px solid #F3E8D8', boxShadow: '0 6px 18px rgba(17,24,39,0.04)' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: it.bg }}>
                <it.Icon size={19} style={{ color: it.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[14px] text-[#111827]">{it.label}</p>
                <p className="text-[12px] text-[#9CA3AF] truncate">{it.desc}</p>
              </div>
              <ChevronRight size={17} className="text-[#D1D5DB] shrink-0" />
            </button>
          ))}
        </div>

        {/* ── Support rapide ── */}
        <div className="rounded-3xl p-5 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #111827 0%, #312A4E 100%)' }}>
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #FF2D7A 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <Headphones size={18} className="text-[#FFE600]" />
              <h2 className="font-black text-[17px] text-white">Support & accompagnement</h2>
            </div>
            <p className="text-white/60 text-[12px] mb-4">Nos équipes terrain vous répondent sous 24h.</p>
            <div className="grid grid-cols-3 gap-2.5">
              {SUPPORT.map(s => {
                const inner = (
                  <>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ background: s.color + '26' }}>
                      <s.Icon size={18} style={{ color: s.color }} />
                    </div>
                    <p className="font-bold text-[12px] text-white leading-tight">{s.label}</p>
                    <p className="text-[10px] text-white/50 mt-0.5 leading-tight">{s.desc}</p>
                  </>
                )
                const cls = 'flex flex-col items-center text-center rounded-2xl p-3 transition-colors hover:bg-white/10'
                const style = { background: 'rgba(255,255,255,0.06)' }
                return s.href
                  ? <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>{inner}</a>
                  : <button key={s.label} onClick={() => s.page && onNavigate(s.page)} className={cls} style={style}>{inner}</button>
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-8 text-[11px] text-[#9CA3AF]">
          <Globe size={12} className="text-[#16A34A]" />
          IPPOO · Propriété de APTDC-Z-UP/TDO/LIMITED
        </div>
      </div>
    </div>
  )
}

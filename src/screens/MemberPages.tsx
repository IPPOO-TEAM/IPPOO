import { useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft, ClipboardList, FileText, CreditCard, MessageSquareWarning,
  Check, Clock, CircleDot, ChevronRight, RefreshCw, Inbox,
  Settings, Bell, Globe, Shield, LogOut, User, Lock, Trash2, HelpCircle,
} from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { supabase } from '@/lib/supabase'

/* ══════════════════════════════════════════════════════════════
   Types de fiches unifiées (dossiers de suivi du membre)
══════════════════════════════════════════════════════════════ */
type FicheKind = 'doleance' | 'souscription'
interface Fiche {
  id: string
  kind: FicheKind
  titre: string
  sousTitre: string
  statut: string
  statutColor: string
  date: string
}

const STATUT_META: Record<string, { label: string; color: string }> = {
  nouvelle: { label: 'Nouvelle', color: '#0891B2' },
  en_cours: { label: 'En cours', color: '#D4AF37' },
  resolue: { label: 'Résolue', color: '#16A34A' },
  fermee: { label: 'Fermée', color: '#6B7280' },
  active: { label: 'Active', color: '#16A34A' },
  pending: { label: 'En attente', color: '#D4AF37' },
  cancelled: { label: 'Annulée', color: '#E10600' },
  expired: { label: 'Expirée', color: '#6B7280' },
}

const fmtDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })
  } catch { return '' }
}

/* ══════════════════════════════════════════════════════════════
   FICHES DE SUIVI
══════════════════════════════════════════════════════════════ */
export function FichesSuiviPage({ onBack, onNavigate }: { onBack: () => void; onNavigate: (p: string) => void }) {
  const { user } = useAuth0()
  const [fiches, setFiches] = useState<Fiche[]>([])
  const [loading, setLoading] = useState(true)

  const load = useMemo(() => async () => {
    if (!user?.sub) { setLoading(false); return }
    setLoading(true)
    const [dol, subs] = await Promise.all([
      supabase.from('doleances').select('id,sujet,message,statut,created_at').eq('user_id', user.sub).order('created_at', { ascending: false }),
      supabase.from('subscriptions').select('id,espace,plan,status,started_at').eq('user_id', user.sub).order('started_at', { ascending: false }),
    ])
    const list: Fiche[] = []
    for (const d of (dol.data ?? []) as { id: string; sujet: string; statut: string; created_at: string }[]) {
      const m = STATUT_META[d.statut] ?? { label: d.statut, color: '#6B7280' }
      list.push({ id: 'd' + d.id, kind: 'doleance', titre: d.sujet || 'Doléance', sousTitre: 'Doléance / réclamation', statut: m.label, statutColor: m.color, date: d.created_at })
    }
    for (const s of (subs.data ?? []) as { id: string; espace: string; plan: string; status: string; started_at: string }[]) {
      const m = STATUT_META[s.status] ?? { label: s.status, color: '#6B7280' }
      list.push({ id: 's' + s.id, kind: 'souscription', titre: `Souscription ${s.espace}`, sousTitre: `Formule ${s.plan}`, statut: m.label, statutColor: m.color, date: s.started_at })
    }
    list.sort((a, b) => (a.date < b.date ? 1 : -1))
    setFiches(list)
    setLoading(false)
  }, [user?.sub])

  useEffect(() => { void load() }, [load])

  const openCount = fiches.filter(f => ['Nouvelle', 'En cours', 'En attente'].includes(f.statut)).length
  const doneCount = fiches.filter(f => ['Résolue', 'Active'].includes(f.statut)).length

  /* Parcours d'accompagnement — dérivé de l'état réel du membre */
  const journey = [
    { label: 'Compte créé', done: true },
    { label: 'Profil complété', done: true },
    { label: 'Première souscription', done: fiches.some(f => f.kind === 'souscription') },
    { label: 'Accompagnement terrain', done: doneCount > 0 },
  ]

  return (
    <div className="min-h-screen" style={{ background: '#FFF8F2' }}>
      {/* Header */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 60%, #F3D77E 100%)' }}>
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'radial-gradient(circle at 15% 20%, white 0%, transparent 55%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-5 pt-6 pb-16">
          <button onClick={onBack} className="flex items-center gap-1.5 text-white/80 text-[12px] font-semibold mb-6 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Mon espace
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <ClipboardList size={22} className="text-white" />
            </div>
            <div>
              <h1 className="text-white font-black text-[24px] leading-tight">Fiches de suivi</h1>
              <p className="text-white/75 text-[12px]">Vos dossiers &amp; votre accompagnement IPPOO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 -mt-9 pb-16 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { v: fiches.length, l: 'Dossiers', c: '#111827' },
            { v: openCount, l: 'En cours', c: '#D4AF37' },
            { v: doneCount, l: 'Aboutis', c: '#16A34A' },
          ].map(st => (
            <div key={st.l} className="rounded-2xl bg-white p-3.5 text-center" style={{ border: '1px solid #F3E8D8', boxShadow: '0 6px 18px rgba(184,134,11,0.06)' }}>
              <p className="font-black text-[19px] leading-none" style={{ color: st.c }}>{st.v}</p>
              <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider mt-1.5">{st.l}</p>
            </div>
          ))}
        </div>

        {/* Parcours */}
        <div className="rounded-3xl bg-white p-5 mb-8" style={{ border: '1px solid #F3E8D8', boxShadow: '0 6px 18px rgba(17,24,39,0.04)' }}>
          <h2 className="font-black text-[15px] text-[#111827] mb-4">Votre parcours d'accompagnement</h2>
          <div className="flex flex-col gap-0">
            {journey.map((j, i) => (
              <div key={j.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: j.done ? '#16A34A' : '#F3E8D8' }}>
                    {j.done ? <Check size={14} className="text-white" strokeWidth={3} /> : <CircleDot size={13} className="text-[#9CA3AF]" />}
                  </div>
                  {i < journey.length - 1 && <div className="w-0.5 h-6" style={{ background: j.done ? '#16A34A' : '#F3E8D8' }} />}
                </div>
                <span className={`text-[13px] pb-6 ${j.done ? 'font-semibold text-[#111827]' : 'text-[#9CA3AF]'}`} style={{ paddingBottom: i < journey.length - 1 ? 24 : 0 }}>{j.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dossiers */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-black text-[17px] text-[#111827]">Vos dossiers</h2>
          <button onClick={() => void load()} className="flex items-center gap-1.5 text-[12px] font-semibold text-[#B8860B] hover:underline">
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} /> Actualiser
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col gap-3">
            {[0, 1, 2].map(i => <div key={i} className="h-[76px] rounded-2xl bg-white animate-pulse" style={{ border: '1px solid #F3E8D8' }} />)}
          </div>
        ) : fiches.length === 0 ? (
          <div className="rounded-3xl bg-white p-8 text-center" style={{ border: '1px dashed #E7D9BF' }}>
            <div className="w-14 h-14 rounded-2xl bg-[#FEFCE8] flex items-center justify-center mx-auto mb-4">
              <Inbox size={26} className="text-[#D4AF37]" />
            </div>
            <h3 className="font-black text-[16px] text-[#111827] mb-1.5">Aucun dossier pour le moment</h3>
            <p className="text-[13px] text-[#9CA3AF] leading-relaxed mb-5 max-w-xs mx-auto">
              Vos souscriptions et vos demandes d'accompagnement apparaîtront ici avec leur statut de traitement.
            </p>
            <div className="flex flex-col gap-2.5 max-w-xs mx-auto">
              <button onClick={() => onNavigate('souscriptions')} className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #B8860B, #D4AF37)' }}>
                <CreditCard size={15} /> Souscrire à un service
              </button>
              <button onClick={() => onNavigate('doleances')} className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-bold text-[#374151]" style={{ background: '#F3F4F6' }}>
                <MessageSquareWarning size={15} /> Ouvrir une doléance
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {fiches.map(f => (
              <div key={f.id} className="flex items-center gap-3.5 rounded-2xl bg-white p-4" style={{ border: '1px solid #F3E8D8', boxShadow: '0 6px 18px rgba(17,24,39,0.04)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: f.kind === 'souscription' ? '#F5F3FF' : '#FEF2F2' }}>
                  {f.kind === 'souscription' ? <CreditCard size={19} className="text-[#7C3AED]" /> : <FileText size={19} className="text-[#E10600]" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[14px] text-[#111827] truncate">{f.titre}</p>
                  <p className="text-[12px] text-[#9CA3AF] flex items-center gap-1.5">
                    {f.sousTitre} <span className="text-[#D1D5DB]">·</span> <Clock size={10} /> {fmtDate(f.date)}
                  </p>
                </div>
                <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wide"
                  style={{ background: f.statutColor + '18', color: f.statutColor }}>{f.statut}</span>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => onNavigate('doleances')} className="w-full mt-6 flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #B8860B, #D4AF37)', boxShadow: '0 8px 24px rgba(184,134,11,0.28)' }}>
          <MessageSquareWarning size={16} /> Nouvelle demande d'accompagnement
        </button>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   PARAMÈTRES
══════════════════════════════════════════════════════════════ */
const PREF_KEY = 'ippoo_member_prefs'
interface Prefs { notifPush: boolean; notifEmail: boolean; notifPromo: boolean; langue: string }
const DEFAULT_PREFS: Prefs = { notifPush: true, notifEmail: true, notifPromo: false, langue: 'fr' }

export function ParametresPage({ onBack, onNavigate, onLogout }: { onBack: () => void; onNavigate: (p: string) => void; onLogout: () => void }) {
  const { user } = useAuth0()
  const [profil, setProfil] = useState<{ nom?: string; prenom?: string; telephone?: string } | null>(null)
  const [prefs, setPrefs] = useState<Prefs>(() => {
    try { return { ...DEFAULT_PREFS, ...JSON.parse(localStorage.getItem(PREF_KEY) || '{}') } } catch { return DEFAULT_PREFS }
  })

  useEffect(() => {
    if (!user?.sub) return
    supabase.from('profiles').select('nom,prenom,telephone').eq('auth0_id', user.sub).single()
      .then(({ data }) => { if (data) setProfil(data as { nom?: string; prenom?: string; telephone?: string }) })
  }, [user?.sub])

  const setPref = (patch: Partial<Prefs>) => {
    setPrefs(prev => {
      const next = { ...prev, ...patch }
      try { localStorage.setItem(PREF_KEY, JSON.stringify(next)) } catch { /* ignore */ }
      return next
    })
  }

  const fullName = profil ? `${profil.prenom ?? ''} ${profil.nom ?? ''}`.trim() : (user?.name as string) || 'Membre IPPOO'
  const initials = (fullName || 'IP').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()

  return (
    <div className="min-h-screen" style={{ background: '#FFF8F2' }}>
      {/* Header */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #374151 0%, #6B7280 100%)' }}>
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at 85% 15%, white 0%, transparent 50%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-5 pt-6 pb-16">
          <button onClick={onBack} className="flex items-center gap-1.5 text-white/80 text-[12px] font-semibold mb-6 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Mon espace
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Settings size={22} className="text-white" />
            </div>
            <div>
              <h1 className="text-white font-black text-[24px] leading-tight">Paramètres</h1>
              <p className="text-white/75 text-[12px]">Compte, notifications, sécurité</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 -mt-9 pb-16 relative z-10 flex flex-col gap-6">
        {/* Profil */}
        <div className="rounded-3xl bg-white p-5" style={{ border: '1px solid #F3E8D8', boxShadow: '0 6px 18px rgba(17,24,39,0.05)' }}>
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-[18px] shrink-0" style={{ background: 'linear-gradient(135deg, #FF2D7A, #7C3AED)' }}>
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-[16px] text-[#111827] truncate">{fullName}</p>
              <p className="text-[12px] text-[#9CA3AF] truncate">{user?.email as string}</p>
              {profil?.telephone && <p className="text-[12px] text-[#9CA3AF]">{profil.telephone}</p>}
            </div>
          </div>
          <button onClick={() => onNavigate('moncompte')} className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-bold text-[#374151]" style={{ background: '#F3F4F6' }}>
            <User size={15} /> Modifier mon profil
          </button>
        </div>

        {/* Notifications */}
        <Section title="Notifications" Icon={Bell} color="#FF2D7A">
          <Toggle label="Notifications push" desc="Alertes en temps réel sur cet appareil" value={prefs.notifPush} onChange={v => setPref({ notifPush: v })} />
          <Toggle label="E-mails" desc="Récapitulatifs et suivi de vos dossiers" value={prefs.notifEmail} onChange={v => setPref({ notifEmail: v })} />
          <Toggle label="Offres & promotions" desc="Bons plans des 21 espaces" value={prefs.notifPromo} onChange={v => setPref({ notifPromo: v })} last />
        </Section>

        {/* Préférences */}
        <Section title="Préférences" Icon={Globe} color="#0891B2">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold text-[14px] text-[#111827]">Langue</p>
              <p className="text-[12px] text-[#9CA3AF]">Langue de l'interface</p>
            </div>
            <select value={prefs.langue} onChange={e => setPref({ langue: e.target.value })}
              className="px-3 py-2 rounded-xl text-[13px] font-semibold outline-none" style={{ background: '#F3F4F6', color: '#111827' }}>
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-[#F3E8D8]">
            <div>
              <p className="font-semibold text-[14px] text-[#111827]">Devise</p>
              <p className="text-[12px] text-[#9CA3AF]">Affichage des montants</p>
            </div>
            <span className="px-3 py-2 rounded-xl text-[13px] font-semibold" style={{ background: '#F3F4F6', color: '#6B7280' }}>FCFA (XOF)</span>
          </div>
        </Section>

        {/* Sécurité & confidentialité */}
        <Section title="Sécurité & confidentialité" Icon={Shield} color="#16A34A">
          <Row label="Mot de passe" desc="Géré via connexion sécurisée" Icon={Lock} onClick={onLogout} />
          <Row label="Politique de confidentialité" desc="Comment vos données sont protégées" Icon={FileText} onClick={() => onNavigate('privacy')} />
          <Row label="Conditions d'utilisation" desc="CGU de l'écosystème IPPOO" Icon={FileText} onClick={() => onNavigate('cgu')} last />
        </Section>

        {/* Support */}
        <Section title="Aide & support" Icon={HelpCircle} color="#7C3AED">
          <Row label="Centre d'aide (FAQ)" desc="Questions fréquentes" Icon={HelpCircle} onClick={() => onNavigate('faq')} />
          <Row label="Nous contacter" desc="Support & accompagnement" Icon={MessageSquareWarning} onClick={() => onNavigate('contact')} last />
        </Section>

        {/* Déconnexion + danger */}
        <button onClick={onLogout} className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #374151, #1F2937)' }}>
          <LogOut size={16} /> Se déconnecter
        </button>
        <a href="https://wa.me/2290141521092?text=Je%20souhaite%20supprimer%20mon%20compte%20IPPOO" target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold" style={{ background: '#FEF2F2', color: '#E10600', border: '1px solid #FECACA' }}>
          <Trash2 size={14} /> Demander la suppression du compte
        </a>

        <p className="text-center text-[11px] text-[#9CA3AF]">
          IPPOO · Propriété de APTDC-Z-UP/TDO/LIMITED
        </p>
      </div>
    </div>
  )
}

/* ── Petits composants UI ─────────────────────────────────────── */
function Section({ title, Icon, color, children }: { title: string; Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>; color: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-white p-5" style={{ border: '1px solid #F3E8D8', boxShadow: '0 6px 18px rgba(17,24,39,0.04)' }}>
      <div className="flex items-center gap-2 mb-2">
        <Icon size={16} style={{ color }} />
        <h2 className="font-black text-[14px] text-[#111827]">{title}</h2>
      </div>
      {children}
    </div>
  )
}

function Toggle({ label, desc, value, onChange, last }: { label: string; desc: string; value: boolean; onChange: (v: boolean) => void; last?: boolean }) {
  return (
    <div className={`flex items-center justify-between py-3 ${last ? '' : 'border-b border-[#F3E8D8]'}`}>
      <div className="pr-4">
        <p className="font-semibold text-[14px] text-[#111827]">{label}</p>
        <p className="text-[12px] text-[#9CA3AF]">{desc}</p>
      </div>
      <button onClick={() => onChange(!value)} aria-label={label}
        className="w-12 h-7 rounded-full shrink-0 transition-colors relative"
        style={{ background: value ? '#16A34A' : '#E5E7EB' }}>
        <span className="absolute top-1 w-5 h-5 rounded-full bg-white transition-all" style={{ left: value ? 26 : 4, boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
      </button>
    </div>
  )
}

function Row({ label, desc, Icon, onClick, last }: { label: string; desc: string; Icon: React.ComponentType<{ size?: number; className?: string }>; onClick: () => void; last?: boolean }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-3 py-3 text-left ${last ? '' : 'border-b border-[#F3E8D8]'}`}>
      <Icon size={17} className="text-[#9CA3AF] shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[14px] text-[#111827]">{label}</p>
        <p className="text-[12px] text-[#9CA3AF] truncate">{desc}</p>
      </div>
      <ChevronRight size={16} className="text-[#D1D5DB] shrink-0" />
    </button>
  )
}

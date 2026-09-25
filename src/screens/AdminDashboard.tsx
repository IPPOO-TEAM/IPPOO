import { useState, useEffect } from 'react'
import {
  Users, BarChart2, Shield, LogOut, Search, Bell, Settings,
  TrendingUp, CheckCircle, Clock, XCircle, RefreshCw,
  ChevronRight, Download, Filter, Eye, Trash2, Mail,
  Phone, MapPin, Briefcase, Star, Globe, Layers,
  UserCheck, AlertTriangle, Activity, DollarSign,
} from 'lucide-react'
import { supabase } from '@/lib/supabase'
import logo from '@/imports/Logo_Noir_sur_Blanc-1.png'

const ESPACES_NAMES: Record<string, string> = {
  assurance: 'ASSURANCE', finances: 'FINANCES & CRÉDIT', kapital: 'KAPITAL INVEST',
  aagro: 'AAGRO', socialfakt: 'SOCIAL FAKT', market: 'MARKET', comit: 'COMIT',
  shuup: 'SHUUP', kraaft: 'KRAAFT', healthy: 'HEALTHY PAGE', fashion: 'FASHION',
  events: 'EVENTS', works: 'WORKS & JOBS', diazz: 'DIAZZ-IPPOO', triip: 'TRIIP',
  kaash: 'KAASH', broks: "BROK'IN-VESTS", markettraker: 'MARKET TRAKER',
  kooka: 'KOOKA', kooki: 'KOOKI', goods: "THE GOOD'S DEEL",
}

interface User { id: string; auth0_id: string; email: string; created_at: string; is_onboarded: boolean; role: string }
interface Profile { id: string; auth0_id: string; nom: string; prenom: string; telephone: string | null; pays: string | null; ville: string | null; domaines: string[]; profession: string | null; created_at: string }
interface Sub { id: string; user_id: string; espace: string; plan: string; status: string; started_at: string }

type TabKey = 'overview' | 'users' | 'profiles' | 'subscriptions' | 'espaces' | 'settings'

const NAV: { id: TabKey; label: string; Icon: React.ComponentType<{size?:number;className?:string}> }[] = [
  { id: 'overview', label: 'Vue d\'ensemble', Icon: BarChart2 },
  { id: 'users', label: 'Utilisateurs', Icon: Users },
  { id: 'profiles', label: 'Profils', Icon: UserCheck },
  { id: 'subscriptions', label: 'Souscriptions', Icon: Star },
  { id: 'espaces', label: 'Espaces', Icon: Layers },
  { id: 'settings', label: 'Paramètres', Icon: Settings },
]

export function AdminDashboard({ adminEmail, onLogout }: { adminEmail: string; onLogout: () => void }) {
  const [tab, setTab] = useState<TabKey>('overview')
  const [users, setUsers] = useState<User[]>([])
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [subs, setSubs] = useState<Sub[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [navOpen, setNavOpen] = useState(false)

  const load = async () => {
    setLoading(true)
    const [u, p, s] = await Promise.all([
      supabase.from('users').select('*').order('created_at', { ascending: false }).limit(100),
      supabase.from('profiles').select('*').order('created_at', { ascending: false }).limit(100),
      supabase.from('subscriptions').select('*').order('started_at', { ascending: false }).limit(100),
    ])
    if (u.data) setUsers(u.data as User[])
    if (p.data) setProfiles(p.data as Profile[])
    if (s.data) setSubs(s.data as Sub[])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const onboardedCount = users.filter(u => u.is_onboarded).length
  const activeSubs = subs.filter(s => s.status === 'active').length
  const espacesCounts = subs.reduce<Record<string, number>>((acc, s) => {
    acc[s.espace] = (acc[s.espace] || 0) + 1
    return acc
  }, {})

  const filteredUsers = users.filter(u =>
    !search || u.email.toLowerCase().includes(search.toLowerCase())
  )
  const filteredProfiles = profiles.filter(p =>
    !search || `${p.nom} ${p.prenom}`.toLowerCase().includes(search.toLowerCase()) || (p.ville || '').toLowerCase().includes(search.toLowerCase())
  )

  const STAT_CARDS = [
    { label: 'Utilisateurs', value: users.length, Icon: Users, color: '#FF2D7A', sub: `${onboardedCount} profils complets` },
    { label: 'Souscriptions actives', value: activeSubs, Icon: Star, color: '#16A34A', sub: `${subs.length} total` },
    { label: 'Taux d\'onboarding', value: users.length ? `${Math.round(onboardedCount / users.length * 100)}%` : '–', Icon: Activity, color: '#7C3AED', sub: 'Profils complétés' },
    { label: 'Espaces couverts', value: Object.keys(espacesCounts).length, Icon: Layers, color: '#0891B2', sub: 'Sur 21 disponibles' },
  ]

  return (
    <div className="min-h-screen flex" style={{ background: '#0F1117' }}>
      {/* ── Sidebar ── */}
      <aside className={`fixed inset-y-0 left-0 z-40 flex flex-col transition-all duration-300 ${navOpen ? 'w-64' : 'w-16'} lg:w-64`}
        style={{ background: 'rgba(255,255,255,0.04)', borderRight: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center gap-3 px-4 h-16 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <img src={logo} alt="IPPOO" className="h-8 w-auto brightness-0 invert shrink-0" />
          <div className={`overflow-hidden transition-all ${navOpen ? 'max-w-xs' : 'max-w-0'} lg:max-w-xs`}>
            <p className="text-white font-black text-[13px] leading-none whitespace-nowrap">IPPOO Admin</p>
            <p className="text-white/30 text-[10px] mt-0.5 whitespace-nowrap">APTDC-Z-UP/TDO/LIMITED</p>
          </div>
          <button onClick={() => setNavOpen(!navOpen)} className="lg:hidden ml-auto text-white/30 hover:text-white/70">
            <ChevronRight size={16} className={`transition-transform ${navOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <nav className="flex-1 px-2 py-3 flex flex-col gap-1 overflow-y-auto">
          {NAV.map(item => (
            <button key={item.id} onClick={() => { setTab(item.id); setNavOpen(false) }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-all text-left ${tab === item.id ? 'text-white' : 'text-white/40 hover:text-white/70 hover:bg-white/5'}`}
              style={tab === item.id ? { background: 'linear-gradient(135deg, rgba(255,45,122,0.2), rgba(225,6,0,0.2))', color: '#FF2D7A' } : {}}>
              <item.Icon size={16} className="shrink-0" />
              <span className={`overflow-hidden transition-all whitespace-nowrap ${navOpen ? 'max-w-xs' : 'max-w-0'} lg:max-w-xs`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="px-2 py-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className={`flex items-center gap-2 px-3 py-2 mb-2 ${navOpen ? '' : 'justify-center'} lg:justify-start`}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)' }}>
              <Shield size={12} className="text-white" />
            </div>
            <div className={`overflow-hidden transition-all ${navOpen ? 'max-w-xs' : 'max-w-0'} lg:max-w-xs`}>
              <p className="text-white text-[11px] font-semibold whitespace-nowrap truncate" style={{ maxWidth: 140 }}>{adminEmail}</p>
              <p className="text-white/30 text-[9px] whitespace-nowrap">Super Admin</p>
            </div>
          </div>
          <button onClick={onLogout}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-[12px] font-semibold text-[#FF6B6B] hover:bg-red-500/10 transition-all w-full">
            <LogOut size={14} className="shrink-0" />
            <span className={`overflow-hidden transition-all whitespace-nowrap ${navOpen ? 'max-w-xs' : 'max-w-0'} lg:max-w-xs`}>
              Déconnexion
            </span>
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 pl-16 lg:pl-64 min-h-screen flex flex-col">
        {/* Topbar */}
        <div className="sticky top-0 z-30 flex items-center gap-3 px-4 lg:px-6 h-16"
          style={{ background: 'rgba(15,17,23,0.95)', borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)' }}>
          <button onClick={() => setNavOpen(!navOpen)} className="lg:hidden text-white/40 hover:text-white/70">
            <Layers size={18} />
          </button>
          <h1 className="font-black text-white text-[16px] flex-1">{NAV.find(n => n.id === tab)?.label}</h1>
          <button onClick={load} className="p-2 rounded-xl text-white/30 hover:text-white/70 hover:bg-white/5 transition-all">
            <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
          </button>
          <button className="p-2 rounded-xl text-white/30 hover:text-white/70 hover:bg-white/5">
            <Bell size={15} />
          </button>
        </div>

        <div className="flex-1 px-4 lg:px-6 py-6">
          {/* ── Overview ── */}
          {tab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {STAT_CARDS.map(card => (
                  <div key={card.label} className="rounded-2xl p-4"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: `${card.color}22` }}>
                        <card.Icon size={16} style={{ color: card.color }} />
                      </div>
                      <TrendingUp size={12} className="text-white/20 mt-1" />
                    </div>
                    <p className="text-white font-black text-[24px] leading-none">{card.value}</p>
                    <p className="text-white/40 text-[11px] mt-1 font-semibold">{card.label}</p>
                    <p className="text-white/25 text-[10px] mt-0.5">{card.sub}</p>
                  </div>
                ))}
              </div>

              {/* Recent users */}
              <div className="rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                  <h3 className="text-white font-bold text-[14px]">Derniers inscrits</h3>
                  <button onClick={() => setTab('users')} className="text-[#FF2D7A] text-[12px] font-semibold flex items-center gap-1">
                    Voir tout <ChevronRight size={12} />
                  </button>
                </div>
                <div className="divide-y divide-white/5">
                  {users.slice(0, 5).map(u => (
                    <div key={u.id} className="flex items-center gap-3 px-5 py-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-[12px]"
                        style={{ background: 'linear-gradient(135deg, #FF2D7A, #7C3AED)' }}>
                        {u.email[0].toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-[13px] font-semibold truncate">{u.email}</p>
                        <p className="text-white/30 text-[11px]">{new Date(u.created_at).toLocaleDateString('fr-FR')}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-[10px] font-bold ${u.is_onboarded ? 'text-[#16A34A]' : 'text-[#D4AF37]'}`}
                        style={{ background: u.is_onboarded ? 'rgba(22,163,74,0.15)' : 'rgba(212,175,55,0.15)' }}>
                        {u.is_onboarded ? 'Complet' : 'En attente'}
                      </div>
                    </div>
                  ))}
                  {users.length === 0 && !loading && (
                    <div className="px-5 py-8 text-center text-white/20 text-[13px]">Aucun utilisateur pour l'instant</div>
                  )}
                </div>
              </div>

              {/* Espaces distribution */}
              {Object.keys(espacesCounts).length > 0 && (
                <div className="rounded-2xl p-5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <h3 className="text-white font-bold text-[14px] mb-4">Distribution par Espaces</h3>
                  <div className="space-y-2">
                    {Object.entries(espacesCounts).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([espace, count]) => (
                      <div key={espace} className="flex items-center gap-3">
                        <span className="text-white/50 text-[12px] w-28 shrink-0 truncate">{ESPACES_NAMES[espace] || espace}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${(count / Math.max(...Object.values(espacesCounts))) * 100}%`, background: 'linear-gradient(90deg, #FF2D7A, #7C3AED)' }} />
                        </div>
                        <span className="text-white/30 text-[11px] w-8 text-right">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Users ── */}
          {tab === 'users' && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                  <input value={search} onChange={e => setSearch(e.target.value)}
                    placeholder="Rechercher par email…"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-[13px] outline-none text-white placeholder:text-white/20"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }} />
                </div>
                <button className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-[12px] font-semibold text-white/50 hover:text-white/80 transition-all"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Filter size={13} /> Filtrer
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="grid text-white/30 text-[10px] font-black uppercase tracking-wider px-5 py-3 border-b"
                  style={{ gridTemplateColumns: '1fr 1fr auto auto', borderColor: 'rgba(255,255,255,0.06)' }}>
                  <span>Email</span><span>Inscrit le</span><span>Rôle</span><span>Statut</span>
                </div>
                {filteredUsers.map(u => (
                  <div key={u.id} className="grid items-center gap-4 px-5 py-3.5 border-b hover:bg-white/[0.02] transition-colors"
                    style={{ gridTemplateColumns: '1fr 1fr auto auto', borderColor: 'rgba(255,255,255,0.04)' }}>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-white text-[11px] font-bold"
                        style={{ background: 'linear-gradient(135deg, #FF2D7A44, #7C3AED44)' }}>
                        {u.email[0].toUpperCase()}
                      </div>
                      <span className="text-white text-[13px] truncate">{u.email}</span>
                    </div>
                    <span className="text-white/40 text-[12px]">{new Date(u.created_at).toLocaleDateString('fr-FR')}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold capitalize"
                      style={{ background: 'rgba(8,145,178,0.2)', color: '#38BDF8' }}>{u.role}</span>
                    <div className="flex items-center gap-1">
                      {u.is_onboarded
                        ? <CheckCircle size={14} className="text-[#16A34A]" />
                        : <Clock size={14} className="text-[#D4AF37]" />}
                    </div>
                  </div>
                ))}
                {filteredUsers.length === 0 && (
                  <div className="px-5 py-10 text-center text-white/20 text-[13px]">
                    {loading ? 'Chargement…' : 'Aucun utilisateur trouvé'}
                  </div>
                )}
              </div>

              <p className="text-white/20 text-[11px] text-right">{filteredUsers.length} utilisateur(s)</p>
            </div>
          )}

          {/* ── Profiles ── */}
          {tab === 'profiles' && (
            <div className="space-y-4">
              <div className="relative">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                <input value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Rechercher un profil…"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-[13px] outline-none text-white placeholder:text-white/20"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProfiles.map(p => (
                  <div key={p.id} className="rounded-2xl p-4"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-[14px]"
                        style={{ background: 'linear-gradient(135deg, #FF2D7A, #7C3AED)' }}>
                        {p.nom?.[0]}{p.prenom?.[0]}
                      </div>
                      <div>
                        <p className="text-white font-bold text-[14px]">{p.prenom} {p.nom}</p>
                        <p className="text-white/30 text-[11px]">{p.profession || 'Profession N/A'}</p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {p.telephone && (
                        <div className="flex items-center gap-2 text-white/40 text-[12px]">
                          <Phone size={11} /> {p.telephone}
                        </div>
                      )}
                      {p.ville && (
                        <div className="flex items-center gap-2 text-white/40 text-[12px]">
                          <MapPin size={11} /> {p.ville}{p.pays ? `, ${p.pays}` : ''}
                        </div>
                      )}
                      {p.domaines?.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {p.domaines.slice(0, 2).map(d => (
                            <span key={d} className="px-2 py-0.5 rounded-full text-[10px] text-[#FF2D7A]"
                              style={{ background: 'rgba(255,45,122,0.15)' }}>
                              {d.split('&')[0].trim()}
                            </span>
                          ))}
                          {p.domaines.length > 2 && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] text-white/30"
                              style={{ background: 'rgba(255,255,255,0.06)' }}>
                              +{p.domaines.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {filteredProfiles.length === 0 && (
                  <div className="col-span-3 py-10 text-center text-white/20 text-[13px]">
                    {loading ? 'Chargement…' : 'Aucun profil trouvé'}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── Subscriptions ── */}
          {tab === 'subscriptions' && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: 'Actives', count: subs.filter(s => s.status === 'active').length, color: '#16A34A', Icon: CheckCircle },
                  { label: 'En attente', count: subs.filter(s => s.status === 'pending').length, color: '#D4AF37', Icon: Clock },
                  { label: 'Annulées', count: subs.filter(s => s.status === 'cancelled').length, color: '#E10600', Icon: XCircle },
                ].map(c => (
                  <div key={c.label} className="rounded-2xl p-3 text-center"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <c.Icon size={16} style={{ color: c.color }} className="mx-auto mb-1" />
                    <p className="text-white font-black text-[20px]">{c.count}</p>
                    <p className="text-white/30 text-[10px]">{c.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                {subs.map(s => (
                  <div key={s.id} className="flex items-center gap-4 px-5 py-3.5 border-b hover:bg-white/[0.02]"
                    style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-[13px] font-semibold">{ESPACES_NAMES[s.espace] || s.espace}</p>
                      <p className="text-white/30 text-[11px]">{s.plan} · {new Date(s.started_at).toLocaleDateString('fr-FR')}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      s.status === 'active' ? 'text-[#16A34A]' :
                      s.status === 'pending' ? 'text-[#D4AF37]' : 'text-[#E10600]'
                    }`} style={{ background: s.status === 'active' ? 'rgba(22,163,74,0.15)' : s.status === 'pending' ? 'rgba(212,175,55,0.15)' : 'rgba(225,6,0,0.15)' }}>
                      {s.status}
                    </span>
                  </div>
                ))}
                {subs.length === 0 && (
                  <div className="py-10 text-center text-white/20 text-[13px]">
                    {loading ? 'Chargement…' : 'Aucune souscription'}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── Espaces ── */}
          {tab === 'espaces' && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(ESPACES_NAMES).map(([code, name]) => (
                <div key={code} className="rounded-2xl p-4 flex items-center justify-between"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div>
                    <p className="text-white font-bold text-[13px]">{name}</p>
                    <p className="text-white/30 text-[11px] mt-0.5">{espacesCounts[code] || 0} souscription(s)</p>
                  </div>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: espacesCounts[code] ? 'rgba(22,163,74,0.2)' : 'rgba(255,255,255,0.06)' }}>
                    {espacesCounts[code]
                      ? <CheckCircle size={14} className="text-[#16A34A]" />
                      : <Globe size={14} className="text-white/20" />}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Settings ── */}
          {tab === 'settings' && (
            <div className="max-w-lg space-y-4">
              <div className="rounded-2xl p-5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 className="text-white font-bold text-[15px] mb-1">Compte administrateur</h3>
                <p className="text-white/40 text-[13px] mb-4">{adminEmail}</p>
                <div className="space-y-2 text-[12px] text-white/30">
                  <div className="flex items-center gap-2"><Shield size={12} className="text-[#FF2D7A]" /> Accès : Super Admin</div>
                  <div className="flex items-center gap-2"><Globe size={12} /> Plateforme : IPPOO — APTDC-Z-UP/TDO/LIMITED</div>
                  <div className="flex items-center gap-2"><Activity size={12} /> Session active depuis cette fenêtre uniquement</div>
                </div>
              </div>

              <div className="rounded-2xl p-5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 className="text-white font-bold text-[14px] mb-3">Variables d'environnement requises</h3>
                <div className="space-y-2">
                  {['VITE_ADMIN_EMAIL', 'VITE_ADMIN_PASSWORD', 'VITE_AUTH0_DOMAIN', 'VITE_AUTH0_CLIENT_ID', 'VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY'].map(k => (
                    <div key={k} className="flex items-center justify-between">
                      <code className="text-[11px] text-[#38BDF8]">{k}</code>
                      <span className={`text-[10px] font-bold ${import.meta.env[k] ? 'text-[#16A34A]' : 'text-[#E10600]'}`}>
                        {import.meta.env[k] ? '✓ Défini' : '✗ Manquant'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={onLogout}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl font-bold text-[13px] text-[#FF6B6B] transition-all hover:bg-red-500/10 w-full"
                style={{ background: 'rgba(225,6,0,0.1)', border: '1px solid rgba(225,6,0,0.2)' }}>
                <LogOut size={15} /> Déconnexion du panneau d'administration
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

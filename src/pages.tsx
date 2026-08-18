import { useState } from 'react'
import { IpHL, Ip } from '@/hl'
import imgBV1 from '@img/photo_7_2026-08-06_12-41-14.jpg'
import imgBV2 from '@img/photo_18_2026-08-06_12-41-14.jpg'
import imgBV3 from '@img/photo_23_2026-08-06_12-41-14.jpg'
import imgBV4 from '@img/photo_25_2026-08-06_12-41-14.jpg'
import imgBV5 from '@img/photo_21_2026-08-06_12-41-14.jpg'
import imgBV6 from '@img/photo_5_2026-08-06_12-41-14.jpg'
import imgAfcWorkJobs     from '@/imports/Capture_d__cran_2026-08-06_104946.png'
import imgAfcBienEtre     from '@/imports/Capture_d__cran_2026-08-06_105007.png'
import imgAfcShopFood     from '@/imports/Capture_d__cran_2026-08-06_105119.png'
import imgAfcSocialFact   from '@/imports/Capture_d__cran_2026-08-06_105220.png'
import imgAfcFinance      from '@/imports/Capture_d__cran_2026-08-06_105719.png'
import imgAfcFashionBizz2 from '@/imports/Capture_d__cran_2026-08-06_105833.png'
import imgH1  from '@img/photo_44_2026-08-06_12-41-14.jpg'
import imgH2  from '@img/photo_42_2026-08-06_12-41-14.jpg'
import imgH3  from '@img/photo_32_2026-08-06_12-41-14.jpg'
import imgH4  from '@img/photo_13_2026-08-06_12-41-14.jpg'
import imgH5  from '@img/photo_31_2026-08-06_12-41-14.jpg'
import imgH6  from '@img/photo_43_2026-08-06_12-41-14.jpg'
import imgH7  from '@img/photo_45_2026-08-06_12-41-14.jpg'
import imgH8  from '@img/photo_39_2026-08-06_12-41-14.jpg'
import imgH9  from '@img/photo_40_2026-08-06_12-41-14.jpg'
import imgH10 from '@img/photo_30_2026-08-06_12-41-14.jpg'
import imgH11 from '@img/photo_41_2026-08-06_12-41-14.jpg'
import imgH12 from '@img/photo_22_2026-08-06_12-41-14.jpg'
import imgH13 from '@img/photo_33_2026-08-06_12-41-14.jpg'
import imgH14 from '@img/photo_38_2026-08-06_12-41-14.jpg'
import imgH15 from '@img/photo_34_2026-08-06_12-41-14.jpg'
import imgH16 from '@img/photo_35_2026-08-06_12-41-14.jpg'
import imgH17 from '@img/photo_36_2026-08-06_12-41-14.jpg'
import imgH18 from '@img/photo_37_2026-08-06_12-41-14.jpg'
import imgGroupBenef from '@img/photo_24_2026-08-06_12-41-14.jpg'
import imgHlDossier    from '@/imports/Accueil1/e5749c6029bf086acfe11e76ce9fdfbc417a76ce.png'
import imgHlProfessio  from '@/imports/Accueil1/0e8b6d9375d66f3401cedd53f4022bfb6ad2a1b5.png'
import imgHlTeleconsult from '@/imports/Accueil1/d211b443e2a220d3e800a007d7f967834d6d65f8.png'
import imgHlFamille    from '@/imports/Accueil1/fc5eaad2989eb934d250bbdf3f7ff17a10732dba.png'
import imgHlCouverture from '@/imports/Accueil1/f573712b0cba3b86a473fa6a7b8727a4fd3a596c.png'
import imgHlEntreprise from '@/imports/Accueil1/ea4c670e7d43e08f9611618eba1bac94417d26d8.png'
import {
  ArrowRight, ArrowLeft, ChevronDown, Check, Users, Shield, Zap, TrendingUp,
  Star, Gift, Phone, Mail, Globe, Briefcase, BookOpen, Heart,
  Target, Award, Layers, MessageCircle, Info, Leaf, Cpu, Wallet,
  FileText, Lock, AlertCircle, ChevronRight, Headphones, Play, CreditCard,
  Building2, BarChart3, Handshake, Lightbulb, Clock, DollarSign, Network,
  Newspaper, Calendar, Tag, Eye, ThumbsUp, Share2,
  MapPin, Stethoscope, Pill, Activity, UserPlus, LogIn,
  PiggyBank, BarChart2, Coins, TreePine, ShoppingCart, Truck,
  Home, Camera, Coffee, Shirt, Music, Sparkles,
  Bell, Search, Smartphone, Video, Baby, Settings,
  BadgeCheck,
} from 'lucide-react'

/* ── Shared layout shell for annex pages ──────────────────────── */
export function PageShell({ title, sub, color, gradient, heroImage, children, onBack, heroChildren }: {
  title: string; sub: string; color: string; gradient?: string; heroImage?: string;
  children: React.ReactNode; onBack: () => void; heroChildren?: React.ReactNode;
}) {
  const bg = gradient || `linear-gradient(150deg, ${color} 0%, ${color}BB 40%, #FFE600 100%)`
  return (
    <div className="min-h-screen" style={{ background: '#FFF8F2', paddingBottom: '80px' }}>
      {/* ── HERO ── */}
      <div className="relative overflow-hidden" style={{ background: heroImage ? undefined : bg, paddingTop: '68px' }}>
        {heroImage && (
          <>
            <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.72) 100%)' }} />
          </>
        )}
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 100%)' }} />
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, white, transparent)' }} />
        <div className="absolute bottom-0 -left-10 w-40 h-40 rounded-full pointer-events-none opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, white, transparent)' }} />
        <div className="relative z-10 px-4 pt-3 pb-8">
          <button onClick={onBack}
            className="flex items-center gap-1.5 text-[12px] font-semibold mb-5 transition-opacity hover:opacity-100"
            style={{ color: 'rgba(255,255,255,0.65)' }}>
            <ArrowLeft size={14} /> Retour
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.12em] text-white"><Ip /></span>
          </div>
          <h1 className="text-[32px] font-black text-white leading-tight mb-3"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            {title}
          </h1>
          <p className="text-white/65 text-[14px] leading-relaxed mb-5">{sub}</p>
          {heroChildren}
        </div>
      </div>
      {children}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE ADHÉSION
══════════════════════════════════════════════════════════════ */
export function AdhesionPage({ onBack }: { onBack: () => void }) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const PLANS = [
    {
      id: "base", name: "Offre de Base", price: "750 FCFA", period: "/jour · 31 jours",
      color: "#FF2D7A", sub: "Porte d'entrée obligatoire - accès aux couvertures essentielles",
      badge: "Obligatoire",
      features: [
        "Assistance administrative incluse",
        "Assistance juridique incluse",
        "Assistance comptable et fiscale",
        "Assurance santé de base (médecine générale)",
        "Carte de membre IPPOO officielle",
        "Accès à l'écosystème des 21 espaces",
        "+ 1 500 FCFA frais de délivrance carte",
      ],
      cta: "Souscrire à l'offre de base",
    },
    {
      id: "complementaire", name: "Couverture Complémentaire", price: "350 FCFA", period: "/jour · par couverture",
      color: "#7C3AED", sub: "À ajouter librement après l'offre de base",
      features: [
        "Assurance marchandises",
        "Assurance habitation",
        "Assurance éducation",
        "Assurance transport",
        "Assurance matériels et outillage",
        "Assurance automobile",
        "Toute autre couverture IPPOO disponible",
      ],
      cta: "Ajouter une couverture",
    },
  ]

  const STEPS = [
    { n: "01", title: "Créez votre compte", desc: "Renseignez votre profil en 2 minutes. Producteur, artisan, commerçant, étudiant ou entrepreneur...", color: "#FF2D7A", time: "2 min" },
    { n: "02", title: "Choisissez votre formule", desc: "Sélectionnez la formule adaptée à votre profil et votre secteur. Changement possible à tout moment...", color: "#2563EB", time: "1 min" },
    { n: "03", title: "Accès à vos espaces", desc: "Connexion immédiate à tous vos espaces sélectionnés, depuis votre mobile ou tablette...", color: "#16A34A", time: "Immédiat" },
    { n: "04", title: "Grandissez avec IPPOO", desc: "Bénéficiez des formations, du réseau, du parrainage et des services financiers de l'écosystème.", color: "#D4AF37", time: "Continu" },
  ]

  return (
    <PageShell
      title="Rejoindre IPPOO"
      sub="Choisissez la formule qui correspond à votre activité et rejoignez des milliers d'acteurs de l'économie populaire africaine."
      color="#FF2D7A"
      heroImage={imgH1}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["750 FCFA", "Base/jour"], ["21", "Espaces"], ["7 membres", "Groupement"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#FF2D7A', boxShadow: '0 6px 24px rgba(255,45,122,0.45)' }}>
            <Phone size={15} /> Adherer maintenant
          </a>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      }
    >
      <div className="px-4 py-6 space-y-4">
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Nos formules d'adhésion</h2>
        {PLANS.map(plan => (
          <div key={plan.id}
            className="rounded-3xl overflow-hidden cursor-pointer transition-all duration-200"
            style={{
              border: selectedPlan === plan.id ? `2px solid ${plan.color}` : '2px solid transparent',
              boxShadow: selectedPlan === plan.id ? `0 8px 32px ${plan.color}30` : '0 2px 12px rgba(0,0,0,0.05)',
            }}
            onClick={() => setSelectedPlan(plan.id)}>
            <div className="p-5 relative" style={{ background: selectedPlan === plan.id ? `${plan.color}10` : 'white' }}>
              {plan.badge && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                  style={{ background: plan.color }}>
                  {plan.badge}
                </div>
              )}
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: `${plan.color}18` }}>
                  <Star size={18} style={{ color: plan.color }} />
                </div>
                <div>
                  <p className="font-black text-[18px] text-[#111827]">{plan.name}</p>
                  <p className="text-[#6B7280] text-[12px]">{plan.sub}</p>
                </div>
              </div>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="font-black text-[32px]" style={{ color: plan.color }}>{plan.price}</span>
                <span className="text-[#9CA3AF] text-[13px]">{plan.period}</span>
              </div>
            </div>
            <div className="px-5 pb-5 bg-white space-y-2.5">
              {plan.features.map(f => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${plan.color}18` }}>
                    <Check size={11} style={{ color: plan.color }} />
                  </div>
                  <span className="text-[#374151] text-[13px]">{f}</span>
                </div>
              ))}
              <a href={plan.id === 'business' ? "mailto:ippooz.up.2@gmail.com" : "tel:+2290141521092"}
                className="mt-4 flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold transition-all"
                style={{
                  background: selectedPlan === plan.id ? plan.color : `${plan.color}15`,
                  color: selectedPlan === plan.id ? 'white' : plan.color,
                }}
                onClick={e => e.stopPropagation()}>
                {plan.cta} <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-8" style={{ background: '#F9FAFB' }}>
        <h2 className="text-[20px] font-black text-[#111827] mb-5"><IpHL text="Comment rejoindre IPPOO ?" /></h2>
        <div className="space-y-4">
          {STEPS.map((step, i) => (
            <div key={step.n} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 font-black text-[13px] text-white"
                  style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}AA)` }}>
                  {step.n}
                </div>
                {i < STEPS.length - 1 && <div className="w-0.5 flex-1 mt-2" style={{ background: `${step.color}30` }} />}
              </div>
              <div className="pb-4 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-black text-[15px] text-[#111827]">{step.title}</p>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                    style={{ background: step.color }}>
                    {step.time}
                  </span>
                </div>
                <p className="text-[#6B7280] text-[13px] leading-relaxed"><IpHL text={step.desc} color={step.color} /></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Formule d'accompagnement ── */}
      <div className="px-4 py-8" style={{ background: '#FFFBF0' }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#FFE60022' }}>
            <Star size={14} className="text-[#FF2D7A]" />
          </div>
          <span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">Votre adhésion</span>
        </div>
        <h2 className="text-[20px] font-black text-[#111827] mb-3 leading-tight">Choisissez votre formule d'accompagnement</h2>
        <p className="text-[#6B7280] text-[13px] leading-relaxed mb-5">
          <IpHL text="Chez IPPOO, chaque adhésion s'effectue à travers une formule d'accompagnement, conçue pour répondre aux besoins et aux objectifs de chacun. Vous choisissez simplement la formule qui vous convient, ainsi que les modalités de paiement qui vous sont les plus adaptées. Dès votre souscription, vous bénéficiez d'un accompagnement personnalisé et d'un ensemble d'avantages exclusifs tout au long de votre parcours au sein de notre écosystème." />
        </p>
        <div className="rounded-3xl overflow-hidden" style={{ border: '2px solid #FFE600', background: 'linear-gradient(135deg, #111827, #1F2937)' }}>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(255,230,0,0.15)' }}>
                <CreditCard size={22} className="text-[#FFE600]" />
              </div>
              <div>
                <p className="text-white font-black text-[16px]">Carte de membre <Ip /></p>
                <p className="text-white/50 text-[12px]">Incluse dans toute souscription</p>
              </div>
            </div>
            <p className="text-white/70 text-[13px] leading-relaxed mb-4">
              <IpHL text="Votre adhésion vous donne droit à une carte de membre IPPOO, véritable clé d'accès à l'ensemble de nos services et privilèges. Cette carte vous permet de bénéficier d'avantages commerciaux, d'une identification officielle au sein de notre réseau, ainsi que de nombreux avantages auprès de nos partenaires." color="#FFE600" />
            </p>
            <div className="space-y-2">
              {[
                "Reconnue dans nos enseignes et supermarchés partenaires",
                "Valable dans nos boutiques affiliées et franchisés",
                "Acceptée dans nos cercles d'activités commerciales",
                "Avantages auprès de nos partenaires sponsors",
              ].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#FFE60025' }}>
                    <Check size={9} className="text-[#FFE600]" />
                  </div>
                  <span className="text-white/65 text-[12px] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 pb-5">
            <a href="tel:+2290141521092"
              className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-[#111827]"
              style={{ background: '#FFE600', boxShadow: '0 6px 20px rgba(255,230,0,0.35)' }}>
              <Phone size={15} /> Souscrire maintenant
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 py-8">
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Avantages membres <Ip /></h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { Icon: Shield, title: "Couverture assurance", color: "#FF2D7A", bg: "#FFF0F7" },
            { Icon: TrendingUp, title: "Accès au crédit", color: "#16A34A", bg: "#ECFDF5" },
            { Icon: BookOpen, title: "Formations incluses", color: "#2563EB", bg: "#EFF6FF" },
            { Icon: Users, title: "Réseau solidaire", color: "#7C3AED", bg: "#F5F3FF" },
            { Icon: Wallet, title: "Portefeuille IPPOO-KAASH", color: "#D4AF37", bg: "#FFFBEB" },
            { Icon: Gift, title: "Bonus parrainage", color: "#E10600", bg: "#FEF2F2" },
          ].map(({ Icon, title, color, bg }) => (
            <div key={title} className="rounded-2xl p-4 flex flex-col gap-2" style={{ background: bg, border: `1px solid ${color}20` }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}18` }}>
                <Icon size={16} style={{ color }} />
              </div>
              <p className="font-bold text-[13px] text-[#111827] leading-tight">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-8">
        <div className="rounded-3xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)' }}>
          <Gift size={32} className="text-white mx-auto mb-3" />
          <h3 className="text-white font-black text-[20px] mb-2">Cadeau de bienvenue</h3>
          <p className="text-white/70 text-[13px] mb-4">Cadeaux et avantages exclusifs offerts à chaque nouvel adhérent.</p>
          <a href="tel:+2290141521092"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[14px] font-bold text-[#E10600]"
            style={{ background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
            <Phone size={15} /> Appeler le +229 01 41 52 10 92
          </a>
        </div>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE PARRAINAGE
══════════════════════════════════════════════════════════════ */
export function ParrainagePage({ onBack }: { onBack: () => void }) {
  const GAINS = [
    { level: "Filleul direct", gain: "500 FCFA", Icon: Users, color: "#FF2D7A", desc: "Par chaque filleul actif que vous parrainez directement..." },
    { level: "Filleul niveau 2", gain: "200 FCFA", Icon: Globe, color: "#2563EB", desc: "Quand votre filleul parraine a son tour un nouveau membre..." },
    { level: "Groupement actif", gain: "2 000 FCFA", Icon: Layers, color: "#16A34A", desc: "Bonus pour chaque groupement constitué grâce à votre réseau..." },
    { level: "Pack Business", gain: "5 000 FCFA", Icon: Award, color: "#D4AF37", desc: "Pour chaque souscription Business apportée par vos filleuls..." },
  ]

  const ETAPES = [
    { n: "01", title: "Obtenez votre code", desc: "Votre code parrain personnel est généré automatiquement lors de votre adhésion...", color: "#FF2D7A" },
    { n: "02", title: "Partagez votre lien", desc: "Partagez sur WhatsApp, Facebook, TikTok ou directement à vos contacts...", color: "#2563EB" },
    { n: "03", title: "Votre filleul s'inscrit", desc: "Il utilise votre code lors de son inscription. Vous êtes automatiquement crédité...", color: "#16A34A" },
    { n: "04", title: "Recevez vos gains", desc: "Les gains s'accumulent dans votre portefeuille IPPOO-KAASH, retirables à tout moment.", color: "#D4AF37" },
  ]

  return (
    <PageShell
      title="Programme Parrainage"
      sub="Invitez votre réseau et gagnez sur chaque adhésion. Construisez votre réseau IPPOO et générez des revenus passifs durables."
      color="#D4AF37"
      heroImage={imgH2}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["50 000 FCFA", "Gains/mois max"], ["1 200+", "Parrains actifs"], ["3", "Niveaux de gains"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#D4AF37', boxShadow: '0 6px 24px rgba(212,175,55,0.45)' }}>
            <Phone size={15} /> Activer mon code parrain
          </a>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      }
    >
      <div className="px-4 py-6">
        <div className="rounded-3xl overflow-hidden"
          style={{ background: '#FFE600', padding: '24px' }}>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={14} className="text-[#111827]" />
            <span className="text-[#111827] text-[11px] font-bold uppercase tracking-widest">Gains potentiels</span>
          </div>
          <p className="text-[#111827] font-black text-[32px] leading-none mb-1">
            {"Jusqu'a"} <span style={{ color: '#D4AF37' }}>50 000 FCFA</span>
          </p>
          <p className="text-[#374151] text-[13px]">par mois pour les parrains les plus actifs du réseau</p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[["Parrains actifs", "1 200+"], ["Gains verses", "12M FCFA"], ["Niveau max", "3 paliers"]].map(([l, v]) => (
              <div key={l} className="rounded-2xl p-3 text-center" style={{ background: 'rgba(0,0,0,0.07)' }}>
                <p className="text-[#111827] font-black text-[16px]">{v}</p>
                <p className="text-[#374151] text-[10px] mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Grille de rémunération</h2>
        <div className="space-y-3">
          {GAINS.map(g => (
            <div key={g.level} className="flex items-center gap-4 p-4 rounded-2xl bg-white"
              style={{ border: `1px solid ${g.color}20`, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: `${g.color}15` }}>
                <g.Icon size={20} style={{ color: g.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[14px] text-[#111827]">{g.level}</p>
                <p className="text-[#6B7280] text-[11px] leading-snug mt-0.5">{g.desc}</p>
              </div>
              <div className="shrink-0 font-black text-[16px]" style={{ color: g.color }}>+{g.gain}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-6" style={{ background: '#F9FAFB' }}>
        <h2 className="text-[20px] font-black text-[#111827] mb-5">Comment ça fonctionne ?</h2>
        <div className="space-y-4">
          {ETAPES.map((step, i) => (
            <div key={step.n} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 font-black text-[13px] text-white"
                  style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}AA)` }}>
                  {step.n}
                </div>
                {i < ETAPES.length - 1 && <div className="w-0.5 flex-1 mt-2" style={{ background: `${step.color}30` }} />}
              </div>
              <div className="pb-4 flex-1">
                <p className="font-black text-[15px] text-[#111827] mb-1">{step.title}</p>
                <p className="text-[#6B7280] text-[13px] leading-relaxed"><IpHL text={step.desc} color={step.color} /></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-6">
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Règles du programme</h2>
        <div className="space-y-3">
          {[
            "Les gains sont crédités dans les 48h suivant l'activation du filleul.",
            "Un filleul doit avoir souscrit une formule payante pour générer des gains.",
            "Les gains sont retirables dès 2 500 FCFA cumulés via IPPOO-KAASH.",
            "Le programme de parrainage est réservé aux membres <Ip /> actifs.",
            "Toute tentative de fraude entraine la suspension du compte.",
          ].map((r, i) => (
            <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white"
              style={{ border: '1px solid #F3F4F6' }}>
              <Info size={14} className="text-[#D4AF37] mt-0.5 shrink-0" />
              <p className="text-[#374151] text-[13px] leading-relaxed">{r}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-8">
        <a href="tel:+2290141521092"
          className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white"
          style={{ background: 'linear-gradient(135deg, #D4AF37, #FF2D7A)', boxShadow: '0 8px 24px rgba(212,175,55,0.4)' }}>
          <Phone size={16} /> Rejoindre et activer mon code parrain
        </a>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE IPPOO BUSINESS
══════════════════════════════════════════════════════════════ */
export function BusinessPage({ onBack }: { onBack: () => void }) {
  const SOLUTIONS = [
    { Icon: Building2, title: "Compte Entreprise", desc: "Espace dédié aux PME, coopératives et associations avec tableau de bord multi-utilisateurs et gestion centralisée...", color: "#7C3AED" },
    { Icon: BarChart3, title: "Intelligence Marché", desc: "Accès à MARKET TRAKER : données temps réel sur les prix, tendances et opportunités sur vos marchés cibles...", color: "#2563EB" },
    { Icon: Handshake, title: "Partenariats Stratégiques", desc: "Intégration avec nos 21 espaces pour capter de nouveaux clients, fournisseurs et partenaires commerciaux...", color: "#16A34A" },
    { Icon: Lightbulb, title: "Formations Entreprise", desc: "Modules sur mesure pour vos équipes : gestion, digital, marketing local, qualité et traçabilité produit...", color: "#FF2D7A" },
    { Icon: Globe, title: "Visibilité Marché", desc: "Corner dédié sur IPPOO MARKET et SHUUP avec référencement prioritaire dans votre secteur...", color: "#D4AF37" },
    { Icon: Shield, title: "Assurance Entreprise", desc: "Couverture adaptée aux TPE/PME : multirisque professionnelle, responsabilité civile et assurance flotte...", color: "#E10600" },
  ]

  const SECTEURS = [
    "Commerce et Distribution", "Agriculture et Agroalimentaire", "Artisanat et Création",
    "BTP et Construction", "Transport et Logistique", "Santé et Bien-être",
    "Éducation et Formation", "Technologie et Services numériques",
  ]

  return (
    <PageShell
      title="IPPOO Business"
      sub="Solutions dédiées aux entreprises, PME, coopératives et organisations souhaitant intégrer l'écosystème IPPOO à leur développement."
      color="#7C3AED"
      heroImage={imgH3}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["350+", "Entreprises"], ["12", "Pays africains"], ["48h", "Onboarding"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="mailto:ippooz.up.2@gmail.com"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#7C3AED', boxShadow: '0 6px 24px rgba(124,58,237,0.45)' }}>
            <Mail size={15} /> Demander une demo
          </a>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <Phone size={14} /> +229 01 41 52 10 92
          </a>
        </div>
      }
    >
      <div className="px-4 py-6">
        <div className="rounded-3xl p-5" style={{ background: 'linear-gradient(135deg, #7C3AED15, #2563EB10)', border: '1px solid #7C3AED20' }}>
          <p className="text-[#374151] text-[14px] leading-relaxed">
            <IpHL text="IPPOO Business accompagne les entreprises formelles et informelles dans leur structuration, leur mise en réseau et leur accès aux marchés africains. Notre offre B2B s'adapte à chaque secteur et chaque stade de développement." color="#7C3AED" />
          </p>
        </div>
      </div>

      <div className="px-4 py-4">
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Nos solutions Business</h2>
        <div className="space-y-3">
          {SOLUTIONS.map(s => (
            <div key={s.title} className="flex items-start gap-4 p-4 rounded-2xl bg-white"
              style={{ border: `1px solid ${s.color}20`, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: `${s.color}15` }}>
                <s.Icon size={20} style={{ color: s.color }} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[14px] text-[#111827] mb-1">{s.title}</p>
                <p className="text-[#6B7280] text-[12px] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-6" style={{ background: '#F9FAFB' }}>
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Secteurs couverts</h2>
        <div className="flex flex-wrap gap-2">
          {SECTEURS.map(s => (
            <span key={s} className="px-3 py-2 rounded-xl text-[12px] font-semibold"
              style={{ background: '#7C3AED15', color: '#7C3AED', border: '1px solid #7C3AED25' }}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 py-6">
        <h2 className="text-[20px] font-black text-[#111827] mb-4"><IpHL text="IPPOO Business en chiffres" color="#7C3AED" /></h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { v: "350+", l: "Entreprises partenaires", c: "#7C3AED" },
            { v: "12", l: "Pays d'implantation", c: "#2563EB" },
            { v: "98%", l: "Satisfaction client B2B", c: "#16A34A" },
            { v: "48h", l: "Délai d'intégration", c: "#FF2D7A" },
          ].map(({ v, l, c }) => (
            <div key={l} className="rounded-2xl p-4 text-center bg-white"
              style={{ border: `1px solid ${c}20` }}>
              <p className="font-black text-[26px]" style={{ color: c }}>{v}</p>
              <p className="text-[#6B7280] text-[11px] mt-1 leading-snug">{l}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-8 space-y-3">
        <a href="mailto:ippooz.up.2@gmail.com"
          className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white"
          style={{ background: 'linear-gradient(135deg, #7C3AED, #2563EB)', boxShadow: '0 8px 24px rgba(124,58,237,0.4)' }}>
          <Mail size={16} /> Demander une demo Business
        </a>
        <a href="tel:+2290141521092"
          className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-semibold text-[#7C3AED]"
          style={{ background: '#7C3AED15', border: '2px solid #7C3AED30' }}>
          <Phone size={15} /> +229 01 41 52 10 92
        </a>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE FAQ
══════════════════════════════════════════════════════════════ */
export function FAQPage({ onBack }: { onBack: () => void }) {
  const [openQ, setOpenQ] = useState<string | null>(null)

  const CATEGORIES = [
    {
      cat: "Adhésion et compte", color: "#FF2D7A",
      items: [
        { q: "Comment créer mon compte IPPOO ?", a: "Vous pouvez créer votre compte en appelant le +229 01 41 52 10 92 ou en envoyant un email à ippooz.up.2@gmail.com. Notre équipe terrain vous accompagne dans votre inscription et la configuration de votre profil." },
        { q: "Quels documents sont nécessaires pour l'adhésion ?", a: "Pour une inscription simple : une pièce d'identité valide et un numéro de téléphone actif. Pour les formules Pro et Business : en plus des documents ci-dessus, une description de votre activité et votre adresse professionnelle." },
        { q: "Puis-je changer de formule après mon inscription ?", a: "Oui, vous pouvez upgrader ou downgrader votre formule à tout moment depuis votre espace membre ou en contactant notre équipe support. Le changement prend effet dans les 24h." },
        { q: "L'adhésion est-elle payante ?", a: "Oui, toute adhésion s'effectue à travers une formule d'accompagnement. L'offre de base est fixée à 750 FCFA par jour pendant 31 jours, plus 1 500 FCFA de frais de délivrance de la carte membre. Des couvertures complémentaires peuvent être ajoutées à 350 FCFA par jour chacune. La formule Business est à 8 000 FCFA/mois pour les entreprises et groupements." },
      ],
    },
    {
      cat: "Espaces et services", color: "#2563EB",
      items: [
        { q: "Combien d'espaces sont disponibles ?", a: "IPPOO propose actuellement 21 espaces thematiques : KRAAFT, ASSURANCE, WORKS, COMYTEE, KAASH, AAGRO, FASHION, MARKET, SHUUP, TRIIP, FINANCES, DIAZZ-IPPOO, BROK'IN-VESTS, CAPITAL-INVEST, MARKET TRAKER, KOOKA, KOOKI, SOCIAL FAKTS, EVENTS, HEALTHY PAGE et THE GOOD'S DEEL." },
        { q: "Comment accéder aux espaces depuis mon mobile ?", a: "Chaque espace est accessible via un lien URL dédié depuis votre navigateur mobile. Aucune application n'est requise. Nos plateformes sont optimisées pour mobile et fonctionnent même avec une connexion lente." },
        { q: "Quels espaces sont déjà disponibles ?", a: "Les espaces ASSURANCE, AAGRO, MARKET, SHUUP, KRAAFT, HEALTHY PAGE, WORKS, SOCIAL FAKTS, COMYTEE, EVENTS, DIAZZ-IPPOO, TRIIP, FINANCES, CAPITAL-INVEST, BROK'IN-VESTS, MARKET TRAKER, KOOKA et KOOKI sont opérationnels. Les espaces KAASH et THE GOOD'S DEEL sont en cours de déploiement." },
      ],
    },
    {
      cat: "Paiements et finances", color: "#16A34A",
      items: [
        { q: "Quels modes de paiement acceptez-vous ?", a: "Nous acceptons Mobile Money (MTN, Moov, Airtel), virement bancaire et paiement en espèces via nos points partenaires à Parakou et Cotonou. D'autres modes de paiement sont en cours d'intégration." },
        { q: "Comment fonctionne le portefeuille IPPOO-KAASH ?", a: "IPPOO-KAASH est le portefeuille numérique intégré à l'écosystème IPPOO. Il permet de recevoir, envoyer et dépenser de l'argent, de payer vos abonnements et de retirer vos gains de parrainage. Le compte KAASH est disponible pour tous les membres Pro et Business." },
        { q: "Mes données financières sont-elles sécurisées ?", a: "Oui. Toutes les transactions sont chiffrées selon les standards de sécurité bancaire. Nous ne stockons jamais vos codes PIN ni vos données bancaires sensibles. Un système d'alerte en temps réel vous protège contre toute activité suspecte." },
      ],
    },
    {
      cat: "Assurance et protection", color: "#E10600",
      items: [
        { q: "Comment souscrire à une assurance via IPPOO ?", a: "Rendez-vous sur l'espace ASSURANCE à l'adresse insurance.aptdc-zup2.com, choisissez votre formule (santé, automobile, agricole, professionnelle) et complétez le formulaire en ligne. Notre équipe vous contacte sous 24h pour finaliser votre contrat." },
        { q: "Quels types d'assurance sont disponibles ?", a: "IPPOO ASSURANCE couvre : santé individuelle et familiale, assurance automobile, habitation, voyage, agricole, scolaire et responsabilité professionnelle. Des formules micro-assurance accessibles à partir de 500 FCFA/mois sont disponibles." },
        { q: "Comment déclarer un sinistre ?", a: "En cas de sinistre, contactez immédiatement notre support au +229 01 41 52 10 92 ou via WhatsApp. Un agent IPPOO vous accompagne dans votre déclaration et le suivi de votre dossier jusqu'au remboursement." },
      ],
    },
    {
      cat: "Formations", color: "#7C3AED",
      items: [
        { q: "Les formations IPPOO sont-elles incluses ?", a: "Les formations de base sont incluses dans toutes les formules d'adhésion. Les modules avancés (e-commerce, gestion, certification) sont proposés à des tarifs préférentiels pour les membres. Des sessions spéciales sont régulièrement organisées pour les membres actifs." },
        { q: "Comment s'inscrire à une formation ?", a: "Contactez notre équipe par téléphone ou email pour vous inscrire. Un calendrier des formations est envoyé chaque mois à tous les membres actifs. Les formations se déroulent en présentiel à Parakou et en ligne via notre espace formation." },
        { q: "Les formations sont-elles disponibles en langues locales ?", a: "Oui. Nos formateurs maîtrisent le français, le fon, le bariba et d'autres langues locales du Bénin. Les supports pédagogiques sont adaptés au niveau de chaque participant." },
      ],
    },
  ]

  return (
    <PageShell
      title="Questions fréquentes"
      sub="Retrouvez les réponses aux questions les plus posées sur l'écosystème IPPOO, nos services et notre programme d'adhésion."
      color="#FF2D7A"
      heroImage={imgH4}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["5", "Categories"], ["20+", "Questions"], ["24h", "Support"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#FF2D7A', boxShadow: '0 6px 24px rgba(255,45,122,0.45)' }}>
            <MessageCircle size={15} /> Support WhatsApp
          </a>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <Phone size={14} /> +229 01 41 52 10 92
          </a>
        </div>
      }
    >
      <div className="px-4 py-6 space-y-6">
        {CATEGORIES.map(cat => (
          <div key={cat.cat}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-5 rounded-full" style={{ background: cat.color }} />
              <h2 className="text-[16px] font-black text-[#111827]">{cat.cat}</h2>
            </div>
            <div className="space-y-2">
              {cat.items.map((item, i) => {
                const key = `${cat.cat}-${i}`
                const isOpen = openQ === key
                return (
                  <div key={key} className="rounded-2xl overflow-hidden"
                    style={{ border: isOpen ? `2px solid ${cat.color}30` : '2px solid transparent', background: isOpen ? 'white' : '#FAFAFA' }}>
                    <button
                      className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left min-h-[56px]"
                      onClick={() => setOpenQ(isOpen ? null : key)}>
                      <p className="font-semibold text-[14px] text-[#111827] leading-snug flex-1">{item.q}</p>
                      <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        style={{ background: isOpen ? cat.color : '#F3F4F6', color: isOpen ? 'white' : '#6B7280' }}>
                        <ChevronDown size={14} />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <div className="h-px mb-3" style={{ background: `linear-gradient(90deg, ${cat.color}50, transparent)` }} />
                        <p className="text-[#374151] text-[13px] leading-relaxed"><IpHL text={item.a} /></p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ── Additional FAQ: Adhésion et formules ── */}
      <div className="px-4 pb-2 space-y-6">
        {[
          {
            cat: "Questions sur l'adhésion et les formules", color: "#FF2D7A",
            items: [
              { q: "Qu'est-ce qu'une formule d'accompagnement IPPOO ?", a: "La formule d'accompagnement est votre porte d'entrée dans l'écosystème IPPOO. Elle comprend l'assistance administrative, juridique et comptable, une assurance santé de base, ainsi que votre carte de membre officielle. Elle vous donne accès aux 21 espaces thématiques de la plateforme." },
              { q: "Qu'est-ce qu'une couverture complémentaire ?", a: "Les couvertures complémentaires sont des protections supplémentaires que vous pouvez activer librement selon vos besoins : assurance marchandises, habitation, éducation, transport, matériels ou automobile. Chaque couverture est souscrite séparément après l'adhésion à l'offre de base." },
              { q: "Qu'est-ce que la période de carence ?", a: "La période de carence est un délai de 6 mois à partir de votre adhésion, pendant lequel votre couverture est active mais certaines prestations spécifiques ne sont pas encore déclenchables. Ce délai est standard dans les produits d'assurance et permet d'équilibrer la mutualisation du risque." },
              { q: "Peut-on adhérer à IPPOO sans être entrepreneur ?", a: "Oui. IPPOO est ouvert à tous : salariés, étudiants, demandeurs d'emploi, retraités, femmes au foyer, membres de la diaspora. L'écosystème est conçu pour accompagner chaque profil de vie, pas seulement les entrepreneurs." },
              { q: "Comment fonctionne le parrainage ?", a: "Chaque membre IPPOO peut parrainer d'autres personnes et bénéficier de commissions et avantages liés aux adhésions générées. Le parrainage est l'un des piliers de la croissance de la communauté IPPOO." },
            ],
          },
          {
            cat: "Questions sur les groupements", color: "#16A34A",
            items: [
              { q: "Qu'est-ce qu'un groupement IPPOO ?", a: "Un groupement IPPOO est un collectif de 7 membres minimum, organisé autour d'un secteur d'activité commun ou d'un intérêt partagé. Il permet de mutualiser les ressources, de bénéficier de la force du collectif et d'accéder à des couvertures solidaires." },
              { q: "Comment créer un groupement ?", a: "Contactez IPPOO par téléphone ou WhatsApp avec les informations de votre groupe. Un conseiller vous guidera dans la constitution du dossier, la désignation du responsable et la mise en place des premières couvertures collectives." },
              { q: "Quels sont les avantages d'un groupement ?", a: "Les membres d'un groupement bénéficient d'une mutualisation des cotisations, d'un accès simplifié aux couvertures santé, d'un accompagnement collectif, de formations dédiées et d'un réseau de solidarité en cas de coup dur." },
            ],
          },
        ].map(cat => (
          <div key={cat.cat}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-5 rounded-full" style={{ background: cat.color }} />
              <h2 className="text-[16px] font-black text-[#111827]">{cat.cat}</h2>
            </div>
            <div className="space-y-2">
              {cat.items.map((item, i) => {
                const key = `extra-${cat.cat}-${i}`
                const isOpen = openQ === key
                return (
                  <div key={key} className="rounded-2xl overflow-hidden"
                    style={{ border: isOpen ? `2px solid ${cat.color}30` : '2px solid transparent', background: isOpen ? 'white' : '#FAFAFA' }}>
                    <button
                      className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left min-h-[56px]"
                      onClick={() => setOpenQ(isOpen ? null : key)}>
                      <p className="font-semibold text-[14px] text-[#111827] leading-snug flex-1">{item.q}</p>
                      <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        style={{ background: isOpen ? cat.color : '#F3F4F6', color: isOpen ? 'white' : '#6B7280' }}>
                        <ChevronDown size={14} />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <div className="h-px mb-3" style={{ background: `linear-gradient(90deg, ${cat.color}50, transparent)` }} />
                        <p className="text-[#374151] text-[13px] leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 pb-8">
        <div className="rounded-3xl p-5 text-center" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
          <MessageCircle size={24} className="text-[#FF2D7A] mx-auto mb-2" />
          <p className="font-bold text-[15px] text-[#111827] mb-1">Vous n'avez pas trouvé votre réponse ?</p>
          <p className="text-[#6B7280] text-[13px] mb-4">Notre équipe est disponible 7j/7 pour vous répondre.</p>
          <div className="flex flex-col gap-2">
            <a href="tel:+2290141521092"
              className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[14px] font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)' }}>
              <Phone size={14} /> Appeler le support
            </a>
            <a href="https://wa.me/2290141521092"
              className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[14px] font-semibold"
              style={{ background: '#25D36615', color: '#25D366', border: '1.5px solid #25D36630' }}>
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE ACTUALITÉS
══════════════════════════════════════════════════════════════ */
export function ActualitesPage({ onBack }: { onBack: () => void }) {
  const [activeTag, setActiveTag] = useState("Tous")
  const [sharedId, setSharedId] = useState<number | null>(null)

  const handleShare = async (news: { title: string; excerpt: string }, idx: number) => {
    const text = `${news.title}\n\n${<IpHL text={news.excerpt} />}\n\nVia IPPOO`
    if (typeof navigator !== 'undefined' && navigator.share) {
      try { await navigator.share({ title: news.title, text }) } catch {}
    } else {
      try { await navigator.clipboard.writeText(text) } catch {}
    }
    setSharedId(idx)
    setTimeout(() => setSharedId(null), 2000)
  }

  const TAGS = ["Tous", "Écosystème", "Santé", "Agriculture", "Formation", "Communauté", "Partenariat"]

  const NEWS = [
    {
      tag: "Écosystème", date: "Juillet 2026", readTime: "3 min",
      title: "IPPOO lance officiellement ses solutions de transport et logistique avec IPPOO TRIIP",
      excerpt: "L'espace IPPOO TRIIP, dédié à la mobilité, au transport de personnes et au transport de marchandises, est désormais pleinement opérationnel. Il permet aux membres de réserver des courses, d'organiser des livraisons, de trouver des partenaires logistiques et de bénéficier du covoiturage communautaire. IPPOO TRIIP s'inscrit dans la vision d'un écosystème qui simplifie chaque aspect de la vie économique de ses membres. Les professionnels du transport peuvent également s'y inscrire pour élargir leur clientèle.",
      color: "#2563EB", views: 1840, likes: 563,
    },
    {
      tag: "Santé", date: "Août 2026", readTime: "4 min",
      title: "IPPOO Healthy Page : votre dossier médical numérique maintenant disponible pour tous les membres",
      excerpt: "IPPOO Healthy Page franchit une nouvelle étape avec la mise en service du dossier médical numérique pour tous les membres actifs. Chaque adhérent peut désormais stocker, gérer et partager ses informations de santé en toute sécurité. Le service inclut également la prise de rendez-vous en ligne et un annuaire de professionnels de santé partenaires. La téléconsultation reste accessible depuis l'application mobile.",
      color: "#E10600", views: 2290, likes: 781,
    },
    {
      tag: "Agriculture", date: "Juillet 2026", readTime: "3 min",
      title: "IPPOO AGRO renforce ses partenariats avec les groupements agricoles du Borgou",
      excerpt: "Dans le cadre de son déploiement au Bénin, IPPOO AGRO intensifie ses collaborations avec les groupements d'agriculteurs, d'éleveurs et de transformateurs de la région du Borgou. Des sessions de formation terrain ont été organisées à Parakou sur les bonnes pratiques de gestion agricole, l'accès aux intrants et la commercialisation des productions. Ces actions s'inscrivent dans la mission d'IPPOO d'accompagner le secteur primaire africain vers plus d'organisation et de compétitivité.",
      color: "#16A34A", views: 1580, likes: 512,
    },
    {
      tag: "Formation", date: "Août 2026", readTime: "3 min",
      title: "Prochaines formations IPPOO : inscriptions ouvertes pour les sessions d'août et septembre 2026",
      excerpt: "IPPOO organise plusieurs sessions de formation en août et septembre 2026 à Parakou et dans d'autres villes. Les thématiques couvertes comprennent la comptabilité simplifiée pour commerçants, la gestion agricole, le marketing digital pour artisans et une session Forum avec des ateliers intensifs. Les formations sont ouvertes aux membres et non-membres, avec des places limitées. Inscriptions via WhatsApp ou par téléphone.",
      color: "#7C3AED", views: 1120, likes: 349,
    },
    {
      tag: "Communauté", date: "Juillet 2026", readTime: "4 min",
      title: "Les groupements IPPOO : plus de 500 collectifs organisés à travers l'Afrique",
      excerpt: "Les groupements IPPOO continuent de se multiplier, permettant à des milliers de personnes de bénéficier de la force du collectif pour accéder à des couvertures, des financements et des formations. Ces collectifs rassemblent agriculteurs, artisans, commerçants, femmes entrepreneures et acteurs de l'informel autour d'objectifs communs. IPPOO accompagne chaque groupement dans sa structuration, sa gouvernance et le développement de ses activités. Rejoignez un groupement existant ou créez le vôtre.",
      color: "#FF2D7A", views: 3010, likes: 1087,
    },
    {
      tag: "Partenariat", date: "Août 2026", readTime: "2 min",
      title: "IPPOO ouvre ses espaces Marketplace et Comptoir aux entreprises partenaires",
      excerpt: "L'espace Marketplace IPPOO et le comptoir BROK'IN-VESTS sont désormais ouverts aux partenariats avec des entreprises, grossistes, distributeurs et importateurs. Ces espaces permettent d'accéder à un réseau de commerçants, de producteurs et d'acheteurs au sein de l'écosystème IPPOO. Les entreprises intéressées peuvent soumettre leur dossier de partenariat directement via email ou WhatsApp. Des conditions préférentielles sont proposées pour les membres actifs.",
      color: "#D4AF37", views: 890, likes: 267,
    },
  ]

  const filtered = activeTag === "Tous" ? NEWS : NEWS.filter(n => n.tag === activeTag)

  return (
    <PageShell
      title="Actualités IPPOO"
      sub="Les dernières nouvelles de l'écosystème IPPOO : nouveaux espaces, formations, partenariats et événements à ne pas manquer."
      color="#2563EB"
      heroImage={imgH5}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["Quotidien", "Actu"], ["7", "Pays couverts"], ["100%", "Verifie"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#2563EB', boxShadow: '0 6px 24px rgba(37,99,235,0.45)' }}>
            <MessageCircle size={15} /> {"S'abonner aux alertes"}
          </a>
          <a href="https://socialfakts.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <Globe size={14} /> SOCIAL FAKTS
          </a>
        </div>
      }
    >
      {/* Mobile-only Social Fact banner */}
      <div className="md:hidden w-full">
        <img src={imgAfcSocialFact} alt="IPPOO Social Fact" className="w-full h-auto block" />
        <div className="px-5 py-5" style={{ background:'#050a1a' }}>
          <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color:'#60A5FA' }}><IpHL text="IPPOO Social Fact" color="#60A5FA" /></span>
          <h2 className="text-white font-black text-[22px] leading-tight mb-2">
            L'actualite qui<br /><span style={{ color:'#60A5FA' }}>fait bouger l'Afrique.</span>
          </h2>
          <p className="text-white/65 text-[13px] leading-relaxed mb-4">
            <IpHL text="Entrepreneurs, artisans, novateurs : chaque réussite locale mérite d'être connue et partagée. IPPOO donne la visibilité que vous méritez." color="#60A5FA" />
          </p>
          <a href="https://socialfakt.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-[13px] font-bold text-white"
            style={{ background:'linear-gradient(135deg, #2563EB, #7C3AED)', boxShadow:'0 6px 20px rgba(37,99,235,0.4)' }}>
            Rejoindre Social Fakts <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {TAGS.map(tag => (
            <button key={tag}
              onClick={() => setActiveTag(tag)}
              className="shrink-0 px-4 py-2 rounded-xl text-[12px] font-bold transition-all"
              style={activeTag === tag
                ? { background: '#FF2D7A', color: 'white' }
                : { background: '#F3F4F6', color: '#6B7280' }}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-2 space-y-4">
        {filtered.map((news, i) => (
          <article key={i} className="rounded-3xl overflow-hidden bg-white"
            style={{ border: '1px solid #F3F4F6', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
            <div className="h-1.5" style={{ background: news.color }} />
            <div className="p-5">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                  style={{ background: news.color }}>
                  {news.tag}
                </span>
                <div className="flex items-center gap-3 text-[11px] text-[#9CA3AF]">
                  <span className="flex items-center gap-1"><Calendar size={10} /> {news.date}</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {news.readTime}</span>
                </div>
              </div>
              <h3 className="font-black text-[16px] text-[#111827] leading-snug mb-2"><IpHL text={news.title} /></h3>
              <p className="text-[#6B7280] text-[13px] leading-relaxed mb-4"><IpHL text={news.excerpt} /></p>
              <a href="#" onClick={e => e.preventDefault()}
                className="flex items-center gap-1.5 mb-4 text-[13px] font-bold"
                style={{ color: news.color }}>
                Lire la suite <ArrowRight size={13} />
              </a>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-[12px] text-[#9CA3AF]">
                  <span className="flex items-center gap-1"><Eye size={12} /> {news.views.toLocaleString()}</span>
                  <span className="flex items-center gap-1"><ThumbsUp size={12} /> {news.likes.toLocaleString()}</span>
                </div>
                <button onClick={() => handleShare(news, i)} className="flex items-center gap-1.5 text-[12px] font-semibold transition-all" style={{ color: sharedId === i ? '#16A34A' : news.color }}>
                  <Share2 size={12} /> {sharedId === i ? 'Copie !' : 'Partager'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="px-4 py-8">
        <div className="rounded-3xl p-5" style={{ background: '#FFE600' }}>
          <Newspaper size={24} className="text-[#FF2D7A] mb-3" />
          <h3 className="text-[#111827] font-black text-[18px] mb-2">Restez informé</h3>
          <p className="text-[#374151] text-[13px] mb-4"><IpHL text="Recevez les actualités IPPOO directement sur WhatsApp ou par email." /></p>
          <a href="https://wa.me/2290141521092"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
            style={{ background: '#25D366' }}>
            <MessageCircle size={15} /> S'abonner sur WhatsApp
          </a>
        </div>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE DOLÉANCES
══════════════════════════════════════════════════════════════ */
export function DoleancesPage({ onBack }: { onBack: () => void }) {
  const [type, setType] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <PageShell
      title="Doléances et Réclamations"
      sub="Signalez un problème, exprimez une insatisfaction ou soumettez une demande d'amélioration. Chaque doléance est traitée sous 48h."
      color="#E10600"
      heroImage={imgH6}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["48h", "Traitement"], ["94%", "Resolues"], ["100%", "Confidentiel"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="mailto:ippooz.up.2@gmail.com"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#E10600', boxShadow: '0 6px 24px rgba(225,6,0,0.45)' }}>
            <Mail size={15} /> Soumettre une doleance
          </a>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      }
    >
      <div className="px-4 py-6">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { Icon: Clock, v: "48h", l: "Delai de reponse", c: "#FF2D7A" },
            { Icon: Shield, v: "100%", l: "Confidentialité", c: "#2563EB" },
            { Icon: Check, v: "94%", l: "Résolution", c: "#16A34A" },
          ].map(({ Icon, v, l, c }) => (
            <div key={l} className="rounded-2xl p-3 text-center bg-white"
              style={{ border: `1px solid ${c}20` }}>
              <Icon size={16} style={{ color: c }} className="mx-auto mb-1" />
              <p className="font-black text-[16px]" style={{ color: c }}>{v}</p>
              <p className="text-[#9CA3AF] text-[9px] mt-0.5 leading-snug">{l}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl p-5 bg-white" style={{ border: '1px solid #F3E8D8', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
          <h2 className="text-[18px] font-black text-[#111827] mb-1">Soumettre une doléance</h2>
          <p className="text-[#9CA3AF] text-[13px] mb-5">Traitement garanti sous 48h ouvrables.</p>

          {!sent ? (
            <div className="space-y-4">
              <div>
                <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Type de doléance</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Probleme technique", "Reclamation", "Suggestion", "Autre"].map(t => (
                    <button key={t}
                      onClick={() => setType(t)}
                      className="px-3 py-2.5 rounded-xl text-[12px] font-semibold text-left transition-all"
                      style={type === t
                        ? { background: '#E10600', color: 'white' }
                        : { background: '#F9FAFB', color: '#6B7280', border: '1.5px solid transparent' }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              {[
                { label: "Nom et Prenom", ph: "Votre nom complet" },
                { label: "Telephone / Email", ph: "+229 xx xx xx xx ou email@exemple.com" },
                { label: "Espace concerne", ph: "Ex: ASSURANCE, MARKET, KAASH..." },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-[#374151] text-[12px] font-bold mb-1.5">{f.label}</label>
                  <input placeholder={f.ph}
                    className="w-full px-4 py-3.5 rounded-2xl text-[14px] text-[#111827] border border-[#E5E7EB] focus:outline-none focus:border-[#E10600] focus:ring-2 focus:ring-[#E10600]/20 transition-all min-h-[52px] placeholder:text-[#D1D5DB]" />
                </div>
              ))}
              <div>
                <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Description detaillee</label>
                <textarea rows={4} placeholder="Decrivez precisement votre probleme ou suggestion..."
                  className="w-full px-4 py-3.5 rounded-2xl text-[14px] text-[#111827] border border-[#E5E7EB] focus:outline-none focus:border-[#E10600] focus:ring-2 focus:ring-[#E10600]/20 resize-none transition-all placeholder:text-[#D1D5DB]" />
              </div>
              <button
                onClick={() => setSent(true)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #E10600, #FF2D7A)', boxShadow: '0 8px 24px rgba(225,6,0,0.3)' }}>
                Envoyer ma doléance <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4"
                style={{ background: '#ECFDF5' }}>
                <Check size={32} className="text-[#16A34A]" />
              </div>
              <h3 className="font-black text-[20px] text-[#111827] mb-2">Doléance reçue !</h3>
              <p className="text-[#6B7280] text-[14px] leading-relaxed">
                Votre doléance a bien été enregistrée. Notre équipe vous contactera sous 48h ouvrables pour vous apporter une réponse.
              </p>
            </div>
          )}
        </div>

        <div className="mt-5 rounded-2xl p-4" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
          <div className="flex items-start gap-3">
            <AlertCircle size={18} className="text-[#E10600] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[14px] text-[#991B1B] mb-1">Urgence ou sinistre ?</p>
              <p className="text-[#7F1D1D] text-[12px] leading-relaxed">
                Pour tout sinistre urgent ou situation d'urgence, appelez directement notre ligne dédiée disponible 7j/7.
              </p>
              <a href="tel:+2290141521092" className="mt-2 inline-flex items-center gap-1.5 text-[#E10600] text-[13px] font-bold">
                <Phone size={13} /> +229 01 41 52 10 92
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE MENTIONS LÉGALES
══════════════════════════════════════════════════════════════ */
export function MentionsLegalesPage({ onBack }: { onBack: () => void }) {
  const SECTIONS = [
    {
      title: "Editeur du site",
      content: "La présente plateforme est la propriété exclusive de APTDC-Z-UP · TDO · LIMITED.\n\nMarque IPPOO déposée et détenue par APTDC-Z-UP · TDO · LIMITED.\nSiège social : Parakou, Borgou, République du Bénin.\nResponsable éditorial : Direction APTDC-Z-UP · TDO · LIMITED.\nContact : ippooz.up.2@gmail.com - Tél : +229 01 41 52 10 92.",
    },
    {
      title: "Objet de la plateforme",
      content: "IPPOO est une plateforme numérique africaine d'économie populaire regroupant 21 espaces thématiques interconnectés couvrant les domaines de la finance, du commerce, de la santé, de l'emploi, de l'agriculture, des services et du bien-être.\n\nL'objectif est d'accompagner les acteurs du secteur informel africain dans leur développement économique, leur accès aux marchés et leur protection sociale.",
    },
    {
      title: "Propriete intellectuelle",
      content: "L'ensemble du contenu de cette plateforme (textes, graphiques, logos, images, vidéos, bases de données) est la propriété exclusive de APTDC-Z-UP · TDO · LIMITED, sauf mention contraire explicite.\n\nToute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de APTDC-Z-UP · TDO · LIMITED.",
    },
    {
      title: "Limitation de responsabilite",
      content: "IPPOO s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ses plateformes. Toutefois, IPPOO ne peut garantir l'exactitude, la complétude ou l'actualité des informations publiées.\n\nIPPOO ne pourra être tenu responsable de tout dommage, direct ou indirect, résultant de l'utilisation ou de l'impossibilité d'utiliser les services proposés sur la plateforme.",
    },
    {
      title: "Droit applicable",
      content: "Les présentes mentions légales sont soumises au droit de la République du Bénin. En cas de litige, les juridictions béninoises seront compétentes.\n\nPour tout recours ou réclamation, les utilisateurs peuvent d'abord tenter une résolution amiable en contactant l'équipe IPPOO à ippooz.up.2@gmail.com.",
    },
  ]

  return (
    <PageShell
      title="Mentions Légales"
      sub="Informations légales relatives à la plateforme IPPOO et à l'entité Z-UP.2 qui l'édite."
      color="#374151"
      heroImage={imgH7}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["RCCM", "Enregistré"], ["Parakou", "Siège"], ["Bénin", "Juridiction"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="mailto:ippooz.up.2@gmail.com"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
            style={{ background: '#374151', boxShadow: '0 6px 24px rgba(55,65,81,0.45)' }}>
            <Mail size={15} /> Contact juridique
          </a>
        </div>
      }
    >
      <div className="px-4 py-6 space-y-5">
        {SECTIONS.map((section, i) => (
          <div key={i} className="rounded-2xl overflow-hidden bg-white"
            style={{ border: '1px solid #F3F4F6' }}>
            <div className="px-4 py-3 border-b border-[#F3F4F6]"
              style={{ background: '#F9FAFB' }}>
              <h2 className="font-black text-[14px] text-[#111827]">{section.title}</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[#374151] text-[13px] leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          </div>
        ))}
        <p className="text-[#9CA3AF] text-[11px] text-center pb-4">
          Dernière mise à jour : Août 2026. © 2026 <Ip /> - APTDC-Z-UP · TDO · LIMITED
        </p>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE POLITIQUE DE CONFIDENTIALITÉ
══════════════════════════════════════════════════════════════ */
export function PolitiqueConfidentialitePage({ onBack }: { onBack: () => void }) {
  const SECTIONS = [
    {
      title: "Donnees collectees",
      content: "Dans le cadre de l'utilisation de nos services, IPPOO peut collecter :\n- Données d'identification : nom, prénom, téléphone, email.\n- Données professionnelles : secteur d'activité, localisation, type d'activité.\n- Données de navigation : adresses IP, historique de navigation sur nos plateformes.\n- Données financières : transactions effectuées via KAASH (chiffrées et sécurisées).",
    },
    {
      title: "Finalite du traitement",
      content: "Les données collectées sont utilisées aux fins suivantes :\n- Gestion de votre compte et de votre adhésion IPPOO.\n- Fourniture des services de l'écosystème (assurance, formation, marketplace).\n- Envoi de notifications et actualités (avec votre consentement).\n- Amélioration de nos services et personnalisation de votre expérience.\n- Respect de nos obligations légales et contractuelles.",
    },
    {
      title: "Duree de conservation",
      content: "Vos données sont conservées pendant la durée de votre adhésion active et pendant 3 ans après la clôture de votre compte, conformément aux obligations légales en vigueur en République du Bénin.\n\nLes données financières sont conservées pendant 5 ans pour des raisons légales et fiscales.",
    },
    {
      title: "Vos droits",
      content: "Conformément à la réglementation applicable, vous disposez des droits suivants :\n- Droit d'accès à vos données personnelles.\n- Droit de rectification des données inexactes.\n- Droit à l'effacement sous conditions.\n- Droit d'opposition au traitement de vos données.\n- Droit à la portabilité de vos données.\n\nPour exercer ces droits, contactez-nous à : ippooz.up.2@gmail.com",
    },
    {
      title: "Securite des donnees",
      content: "IPPOO met en place des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction.\n\nToutes les données sensibles sont chiffrées selon les standards de sécurité en vigueur. L'accès à vos données est strictement limité aux personnels autorisés.",
    },
    {
      title: "Cookies et traceurs",
      content: "Notre plateforme utilise des cookies techniques nécessaires au bon fonctionnement des services. Ces cookies ne permettent pas d'identifier personnellement les utilisateurs.\n\nVous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités de la plateforme.",
    },
  ]

  return (
    <PageShell
      title="Politique de Confidentialité"
      sub="Comment IPPOO collecte, utilise et protège vos données personnelles dans le respect de votre vie privée."
      color="#2563EB"
      heroImage={imgH8}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["RGPD", "Conforme"], ["0", "Revente données"], ["Chiffré", "Stockage"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="mailto:ippooz.up.2@gmail.com"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
            style={{ background: '#2563EB', boxShadow: '0 6px 24px rgba(37,99,235,0.45)' }}>
            <Mail size={15} /> Contact DPO
          </a>
        </div>
      }
    >
      <div className="px-4 py-6">
        <div className="rounded-2xl p-4 mb-5" style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}>
          <div className="flex items-start gap-3">
            <Lock size={18} className="text-[#2563EB] shrink-0 mt-0.5" />
            <p className="text-[#1D4ED8] text-[13px] leading-relaxed">
              La protection de vos données personnelles est une priorité pour <Ip />. Cette politique décrit nos pratiques en matière de traitement des données conformément à la réglementation en vigueur en République du Bénin.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {SECTIONS.map((section, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white"
              style={{ border: '1px solid #F3F4F6' }}>
              <div className="px-4 py-3 border-b border-[#F3F4F6] flex items-center gap-2"
                style={{ background: '#EFF6FF' }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                  style={{ background: '#2563EB' }}>
                  {i + 1}
                </div>
                <h2 className="font-black text-[14px] text-[#1D4ED8]">{section.title}</h2>
              </div>
              <div className="px-4 py-4">
                <p className="text-[#374151] text-[13px] leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl p-4" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
          <p className="font-bold text-[14px] text-[#111827] mb-1">Contact DPO</p>
          <p className="text-[#6B7280] text-[13px] mb-3">Pour toute question relative à vos données personnelles :</p>
          <a href="mailto:ippooz.up.2@gmail.com"
            className="flex items-center gap-2 text-[#2563EB] text-[13px] font-bold">
            <Mail size={14} /> ippooz.up.2@gmail.com
          </a>
        </div>

        <p className="text-[#9CA3AF] text-[11px] text-center mt-5 pb-4">
          Dernière mise à jour : Août 2026. © 2026 <Ip /> - APTDC-Z-UP · TDO · LIMITED
        </p>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE CGU
══════════════════════════════════════════════════════════════ */
export function CGUPage({ onBack }: { onBack: () => void }) {
  const SECTIONS = [
    {
      title: "Acceptation des conditions",
      content: "En accédant et en utilisant les services de la plateforme IPPOO, vous acceptez sans réserve les présentes Conditions Générales d'Utilisation (CGU). Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.\n\nCes CGU peuvent être modifiées à tout moment. Les modifications entrent en vigueur dès leur publication sur la plateforme.",
    },
    {
      title: "Acces aux services",
      content: "L'accès aux services IPPOO est réservé aux personnes physiques majeures (18 ans et plus) et aux personnes morales régulièrement constituées. L'inscription et la création d'un compte sont nécessaires pour accéder à la plupart des services.\n\nVous êtes responsable de la confidentialité de vos identifiants de connexion. Toute utilisation de vos identifiants est réputée effectuée par vous.",
    },
    {
      title: "Obligations des membres",
      content: "En tant que membre IPPOO, vous vous engagez à :\n- Fournir des informations exactes et à jour lors de votre inscription.\n- Ne pas utiliser la plateforme à des fins illicites ou contraires aux bonnes mœurs.\n- Respecter les droits des autres utilisateurs et tiers.\n- Ne pas tenter de perturber ou d'accéder frauduleusement à nos systèmes.\n- Respecter la propriété intellectuelle d'IPPOO et des tiers.",
    },
    {
      title: "Services et tarifications",
      content: "Les services IPPOO sont proposés selon les formules décrites sur la plateforme (Essentiel, Pro, Business). Les tarifs sont libellés en FCFA et peuvent être modifiés sous préavis d'un mois.\n\nLes abonnements sont renouvelés automatiquement sauf résiliation expresse. La résiliation peut être effectuée à tout moment avec effet au terme de la période en cours.",
    },
    {
      title: "Propriete des contenus",
      content: "Les contenus que vous publiez sur la plateforme IPPOO (photos, textes, avis, descriptions produits) restent votre propriété. En les publiant, vous accordez à IPPOO une licence non exclusive et gratuite pour les afficher sur ses plateformes.\n\nVous garantissez que les contenus publiés ne violent aucun droit de tiers.",
    },
    {
      title: "Suspension et resiliation",
      content: "IPPOO se réserve le droit de suspendre ou de résilier votre accès en cas de :\n- Violation des présentes CGU.\n- Non-paiement des abonnements dus.\n- Comportement frauduleux ou abusif.\n- Décision de justice ou injonction administrative.\n\nEn cas de résiliation pour faute, aucun remboursement ne sera effectué.",
    },
    {
      title: "Reglement des litiges",
      content: "En cas de litige relatif à l'utilisation de nos services, nous vous invitons à contacter notre équipe en premier lieu pour une résolution amiable à l'adresse ippooz.up.2@gmail.com.\n\nÀ défaut de résolution amiable dans un délai de 30 jours, le litige sera soumis aux juridictions compétentes de la République du Bénin.",
    },
  ]

  return (
    <PageShell
      title="Conditions Générales d'Utilisation"
      sub="Les règles qui régissent l'utilisation de la plateforme IPPOO et les droits et obligations de chaque membre."
      color="#374151"
      heroImage={imgH9}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["Équitable", "Conditions"], ["Transparent", "Tarifs"], ["Libre", "Résiliation"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="mailto:ippooz.up.2@gmail.com"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
            style={{ background: '#374151', boxShadow: '0 6px 24px rgba(55,65,81,0.45)' }}>
            <Mail size={15} /> Une question ?
          </a>
        </div>
      }
    >
      <div className="px-4 py-6">
        <div className="rounded-2xl p-4 mb-5" style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}>
          <div className="flex items-start gap-3">
            <FileText size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
            <p className="text-[#78350F] text-[13px] leading-relaxed">
              Ces conditions régissent votre utilisation de la plateforme <Ip />. En vous inscrivant, vous acceptez l'intégralité de ces termes. Lisez-les attentivement.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {SECTIONS.map((section, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white"
              style={{ border: '1px solid #F3F4F6' }}>
              <div className="px-4 py-3 border-b border-[#F3F4F6] flex items-center gap-2"
                style={{ background: '#FFFBEB' }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                  style={{ background: '#D4AF37' }}>
                  {i + 1}
                </div>
                <h2 className="font-black text-[14px] text-[#78350F]">{section.title}</h2>
              </div>
              <div className="px-4 py-4">
                <p className="text-[#374151] text-[13px] leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#9CA3AF] text-[11px] text-center mt-5 pb-4">
          Dernière mise à jour : Août 2026. © 2026 <Ip /> - APTDC-Z-UP · TDO · LIMITED
        </p>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE À PROPOS
══════════════════════════════════════════════════════════════ */
export function AProposPage({ onBack }: { onBack: () => void }) {
  const VALEURS = [
    { Icon: Heart, title: "Humanité", desc: "Chaque acteur informel est un partenaire valorisé, pas un simple bénéficiaire...", color: "#FF2D7A" },
    { Icon: Users, title: "Solidarité", desc: "L'écosystème IPPOO repose sur l'entraide, le parrainage et la mutualisation.", color: "#16A34A" },
    { Icon: Globe, title: "Inclusion", desc: "Aucune barrière d'accès : chaque acteur peut rejoindre et grandir.", color: "#2563EB" },
    { Icon: TrendingUp, title: "Impact", desc: "Des résultats concrets, mesurables et durables pour les communautés africaines...", color: "#D4AF37" },
    { Icon: Shield, title: "Intégrité", desc: "Transparence totale dans la gestion, les services et les relations membres...", color: "#7C3AED" },
    { Icon: Zap, title: "Innovation", desc: "Technologie accessible au service de l'informel : mobile-first, simple, efficace.", color: "#E10600" },
  ]
  const ESPACES = [
    { name: "IPPOO ASSURANCE", color: "#FF2D7A" },
    { name: "IPPOO FINANCE CREDIT", color: "#16A34A" },
    { name: "IPPOO CAPITAL-INVEST", color: "#2563EB" },
    { name: "IPPOO AGRO", color: "#D4AF37" },
    { name: "IPPOO SOCIAL FAKT", color: "#7C3AED" },
    { name: "IPPOO MARKET", color: "#E10600" },
    { name: "IPPOO COMITY", color: "#FF2D7A" },
    { name: "IPPOO SHUUP", color: "#16A34A" },
    { name: "IPPOO-KRAAFT", color: "#2563EB" },
    { name: "HEALTHY PAGE", color: "#D4AF37" },
    { name: "IPPOO FASHION", color: "#7C3AED" },
    { name: "IPPOO EVENTS", color: "#E10600" },
    { name: "IPPOO WORKS", color: "#FF2D7A" },
    { name: "DIAZZ-IPPOO", color: "#16A34A" },
    { name: "IPPOO TRIIP", color: "#2563EB" },
    { name: "IPPOO KAASH", color: "#D4AF37" },
    { name: "BROK'IN-VESTS", color: "#7C3AED" },
    { name: "MARKET TRAKER", color: "#E10600" },
    { name: "KOOKA", color: "#FF2D7A" },
    { name: "KOOKI", color: "#16A34A" },
    { name: "THE GOOD'S DEEL", color: "#2563EB" },
  ]
  const APPROCHE = [
    { Icon: Layers, title: "Reconstituer", desc: "Valoriser les actifs existants, les savoir-faire et les réseaux informels...", color: "#FF2D7A" },
    { Icon: Network, title: "Connecter", desc: "Créer des passerelles entre production, transformation, distribution et services...", color: "#16A34A" },
    { Icon: TrendingUp, title: "Développer", desc: "Accompagner chaque acteur avec des outils modernes, formations et financements...", color: "#2563EB" },
  ]
  return (
    <PageShell title="À Propos d'IPPOO" sub="Découvrez la mission, les valeurs et les ambitions de l'entité qui structure l'économie populaire africaine." color="#FF2D7A" heroImage={imgH10} onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["21", "Espaces"], ["Afrique", "Présence"], ["Bénin", "Siège"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[16px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#FF2D7A', boxShadow: '0 6px 24px rgba(255,45,122,0.45)' }}>
            <Phone size={15} /> Nous rejoindre
          </a>
          <a href="mailto:ippooz.up.2@gmail.com"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <Mail size={14} /> Nous contacter
          </a>
        </div>
      }
    >
      {/* ── Section 1 : Qui sommes-nous ── */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-2 mb-3"><Info size={14} className="text-[#FF2D7A]" /><span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">Qui sommes-nous</span></div>
        <h2 className="text-[#111827] font-black text-[21px] leading-tight mb-4">Qui sommes-nous ?</h2>
        <p className="text-[#374151] text-[13px] leading-relaxed mb-3">
          <IpHL text="IPPOO est une marque propriété de APTDC-Z-UP · TDO · LIMITED, organisation africaine d'économie populaire fondée à Parakou, au Borgou, République du Bénin." />
        </p>
        <p className="text-[#374151] text-[13px] leading-relaxed">
          <IpHL text="IPPOO a été fondé à travers Z-UP.2 avec une ambition claire : reconstituer, valoriser et renforcer les actifs du secteur informel et des très petites entreprises afin de construire à leurs côtés de nouveaux modèles de développement adaptés à leurs réalités." />
        </p>
      </div>

      {/* ── Section 2 : Notre mission ── */}
      <div className="px-4 py-6" style={{ background: "#F9FAFB" }}>
        <div className="rounded-3xl overflow-hidden" style={{ background: '#FFE600', padding: "24px" }}>
          <div className="flex items-center gap-2 mb-3"><Target size={14} className="text-[#FF2D7A]" /><span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">Notre Mission</span></div>
          <h2 className="text-[#111827] font-black text-[20px] leading-tight mb-3">Un écosystème numérique complet pour chaque acteur informel.</h2>
          <p className="text-[#374151] text-[13px] leading-relaxed">
            <IpHL text="Offrir à chaque acteur informel - entrepreneur, artisan, commerçant, agriculteur, producteur, travailleur indépendant - un écosystème numérique complet, accessible et solidaire couvrant tous les besoins de son activité quotidienne et de son développement." />
          </p>
        </div>
      </div>

      {/* ── Section 3 : Notre vision ── */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-2 mb-4"><Sparkles size={14} className="text-[#FF2D7A]" /><span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">Notre Vision</span></div>
        <div className="rounded-2xl p-5" style={{ background: "#FFF0F7", borderLeft: "4px solid #FF2D7A" }}>
          <p className="text-[#111827] text-[15px] font-semibold leading-relaxed italic">
            "Transformer la force de l'informel en un moteur organisé, connecté et durable de développement - particulièrement en Afrique, où l'entrepreneuriat populaire constitue l'une des plus grandes sources de création de valeur."
          </p>
        </div>
      </div>

      {/* ── Section 4 : Notre approche ── */}
      <div className="px-4 py-6" style={{ background: "#F9FAFB" }}>
        <div className="flex items-center gap-2 mb-4"><Lightbulb size={14} className="text-[#FF2D7A]" /><span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">Notre Approche</span></div>
        <h2 className="text-[#111827] font-black text-[20px] leading-tight mb-4">Trois piliers fondamentaux</h2>
        <div className="space-y-3">
          {APPROCHE.map(({ Icon, title, desc, color }) => (
            <div key={title} className="flex gap-4 p-4 rounded-2xl bg-white" style={{ border: `1px solid ${color}20` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}><Icon size={18} style={{ color }} /></div>
              <div>
                <p className="font-black text-[14px] text-[#111827] mb-1">{title}</p>
                <p className="text-[#6B7280] text-[12px] leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 5 : L'écosystème - 21 espaces ── */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-2 mb-2"><Layers size={14} className="text-[#FF2D7A]" /><span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">L'Écosystème</span></div>
        <h2 className="text-[#111827] font-black text-[20px] leading-tight mb-1">21 espaces thématiques</h2>
        <p className="text-[#6B7280] text-[12px] mb-4">21 espaces thématiques couvrant tous les secteurs de l'économie populaire</p>
        <div className="flex flex-wrap gap-2">
          {ESPACES.map(({ name, color }) => (
            <span key={name} className="px-3 py-1.5 rounded-full text-[11px] font-bold" style={{ background: `${color}12`, color, border: `1px solid ${color}30` }}>{name}</span>
          ))}
        </div>
      </div>

      {/* ── Section 6 : Valeurs ── */}
      <div className="px-4 py-6" style={{ background: "#F9FAFB" }}>
        <div className="flex items-center gap-2 mb-4"><Star size={14} className="text-[#FF2D7A]" /><span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">Nos Valeurs</span></div>
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Nos valeurs fondatrices</h2>
        <div className="grid grid-cols-2 gap-3">
          {VALEURS.map(({ Icon, title, desc, color }) => (
            <div key={title} className="rounded-2xl p-4 bg-white flex flex-col gap-2" style={{ border: `1px solid ${color}20` }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}15` }}><Icon size={16} style={{ color }} /></div>
              <p className="font-black text-[13px] text-[#111827]">{title}</p>
              <p className="text-[#6B7280] text-[11px] leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 7 : Notre présence ── */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-2 mb-4"><MapPin size={14} className="text-[#FF2D7A]" /><span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">Notre Présence</span></div>
        <div className="rounded-3xl overflow-hidden mb-4" style={{ height: 180 }}>
          <img src={imgHlEntreprise} alt="Présence IPPOO en Afrique" className="w-full h-full object-cover object-center" />
        </div>
        <p className="text-[#374151] text-[13px] leading-relaxed mb-4">
          <IpHL text="IPPOO intervient dans l'ensemble des secteurs de l'économie populaire africaine, depuis Parakou, au Bénin, avec une ambition continentale." />
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Secteur primaire", sub: "Agriculture · Élevage", color: "#16A34A" },
            { label: "Secteur secondaire", sub: "Artisanat · Transformation", color: "#D4AF37" },
            { label: "Secteur tertiaire", sub: "Services · Commerce · Numérique", color: "#2563EB" },
          ].map(({ label, sub, color }) => (
            <div key={label} className="flex-1 min-w-[140px] rounded-2xl p-3" style={{ background: `${color}10`, border: `1px solid ${color}25` }}>
              <p className="font-black text-[12px]" style={{ color }}>{label}</p>
              <p className="text-[#6B7280] text-[10px] mt-0.5 leading-snug">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 8 : Coordonnées ── */}
      <div className="px-4 py-6" style={{ background: "#F9FAFB" }}>
        <div className="flex items-center gap-2 mb-4"><Phone size={14} className="text-[#FF2D7A]" /><span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">Coordonnées</span></div>
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Nous contacter</h2>
        <div className="space-y-3">
          {[
            { Icon: MapPin, label: "Siège social", val: "Parakou, Borgou, République du Bénin", color: "#FF2D7A" },
            { Icon: Phone, label: "Téléphone / WhatsApp", val: "+229 01 41 52 10 92", color: "#16A34A" },
            { Icon: Mail, label: "Email", val: "ippooz.up.2@gmail.com", color: "#2563EB" },
          ].map(({ Icon, label, val, color }) => (
            <div key={label} className="flex items-center gap-4 p-4 rounded-2xl bg-white" style={{ border: `1px solid ${color}20` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}><Icon size={18} style={{ color }} /></div>
              <div><p className="text-[#9CA3AF] text-[11px] font-semibold">{label}</p><p className="text-[#111827] font-bold text-[14px] mt-0.5">{val}</p></div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-8">
        <a href="tel:+2290141521092" className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white" style={{ background: "linear-gradient(135deg, #FF2D7A, #E10600)", boxShadow: "0 8px 24px rgba(255,45,122,0.4)" }}><Phone size={16} /> Nous contacter</a>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE FORMATION & PROGRAMMES
══════════════════════════════════════════════════════════════ */
export function ProgrammesPage({ onBack }: { onBack: () => void }) {
  const [openModule, setOpenModule] = useState<number | null>(null)
  const MODULES = [
    { id: 1, title: "Formation Initiale", niveau: "Débutant", duree: "3 jours", color: "#FF2D7A", Icon: BookOpen, themes: ["Comptabilité simplifiée", "Gestion des stocks", "Techniques de vente", "Fidélisation client"], desc: "Module fondamental destiné aux acteurs qui débutent. Contenu pratique, adapté à chaque secteur d'activité." },
    { id: 2, title: "Recyclage Professionnel", niveau: "Intermédiaire", duree: "5 jours", color: "#2563EB", Icon: Award, themes: ["Modernisation des pratiques", "Rentabilité", "Diversification de l'offre", "Outils numériques"], desc: "Pour les artisans, commerçants et agriculteurs expérimentés souhaitant moderniser leurs pratiques..." },
    { id: 3, title: "Perfectionnement Avancé", niveau: "Avancé", duree: "7 jours", color: "#16A34A", Icon: Target, themes: ["E-commerce", "Marketing digital", "Gestion équipe", "Qualité et certification"], desc: "Pour les entrepreneurs en croissance : développez vos compétences en digital, management et qualité..." },
    { id: 4, title: "Formation Sectorielle", niveau: "Spécialiste", duree: "Variable", color: "#D4AF37", Icon: Zap, themes: ["Agriculture", "Artisanat", "Commerce", "Services"], desc: "Modules adaptés à chaque secteur avec des formateurs experts terrain. Contenu certifiant..." },
    { id: 5, title: "Formation Numérique", niveau: "Tous niveaux", duree: "2 jours", color: "#7C3AED", Icon: Cpu, themes: ["Smartphone", "Plateformes IPPOO", "Paiement mobile", "Réseaux sociaux"], desc: "Pour tous les membres souhaitant maîtriser les outils numériques de l'écosystème IPPOO." },
  ]
  const PROCHAINES = [
    { date: "15 Août 2026", titre: "Comptabilité pour commerçants", lieu: "Parakou Centre", places: 25, color: "#FF2D7A" },
    { date: "22 Août 2026", titre: "Marketing digital pour artisans", lieu: "En ligne", places: 40, color: "#2563EB" },
    { date: "1er Sept 2026", titre: "Gestion agricole", lieu: "Natitingou", places: 30, color: "#16A34A" },
    { date: "15 Sept 2026", titre: "Forum IPPOO - Ateliers intensifs", lieu: "Parakou", places: 200, color: "#D4AF37" },
  ]
  return (
    <PageShell title="Formation & Programmes" sub="Montez en compétences avec les programmes IPPOO conçus pour les acteurs de l'économie informelle africaine." color="#16A34A" heroImage={imgH11} onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["500+", "Formes"], ["5", "Modules"], ["94%", "Satisfaction"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#16A34A', boxShadow: '0 6px 24px rgba(22,163,74,0.45)' }}>
            <MessageCircle size={15} /> {"S'inscrire a une formation"}
          </a>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <Phone size={14} /> +229 01 41 52 10 92
          </a>
        </div>
      }
    >
      <div className="px-4 py-6">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[{ v: "500+", l: "Formes", c: "#FF2D7A" }, { v: "5", l: "Modules", c: "#16A34A" }, { v: "94%", l: "Satisfaction", c: "#2563EB" }].map(({ v, l, c }) => (
            <div key={l} className="rounded-2xl p-3 text-center bg-white" style={{ border: `1px solid ${c}20` }}><p className="font-black text-[22px]" style={{ color: c }}>{v}</p><p className="text-[#6B7280] text-[10px] mt-0.5">{l}</p></div>
          ))}
        </div>
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Nos modules de formation</h2>
        <div className="space-y-3">
          {MODULES.map((mod) => {
            const isOpen = openModule === mod.id
            return (
              <div key={mod.id} className="rounded-3xl overflow-hidden" style={{ border: isOpen ? `2px solid ${mod.color}40` : "1px solid transparent", background: isOpen ? "white" : "#FAFAFA" }}>
                <button className="w-full flex items-center gap-4 p-4 text-left" onClick={() => setOpenModule(isOpen ? null : mod.id)}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${mod.color}18` }}><mod.Icon size={20} style={{ color: mod.color }} /></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-[14px] text-[#111827]">{mod.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: mod.color }}>{mod.niveau}</span>
                      <span className="text-[11px] text-[#9CA3AF] flex items-center gap-1"><Clock size={9} />{mod.duree}</span>
                    </div>
                  </div>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen ? "rotate-180" : ""}`} style={{ background: isOpen ? mod.color : "#F3F4F6", color: isOpen ? "white" : "#6B7280" }}><ChevronDown size={14} /></div>
                </button>
                {isOpen && (
                  <div className="px-4 pb-5">
                    <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${mod.color}50, transparent)` }} />
                    <p className="text-[#374151] text-[13px] leading-relaxed mb-3">{mod.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">{mod.themes.map(t => (<span key={t} className="px-3 py-1.5 rounded-xl text-[11px] font-semibold" style={{ background: `${mod.color}12`, color: mod.color, border: `1px solid ${mod.color}20` }}>{t}</span>))}</div>
                    <a href="tel:+2290141521092" className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-bold text-white" style={{ background: `linear-gradient(135deg, ${mod.color}, ${mod.color}CC)` }}><Phone size={13} /> S'inscrire</a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <div className="px-4 py-6" style={{ background: "#F9FAFB" }}>
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Prochaines formations</h2>
        <div className="space-y-3">
          {PROCHAINES.map((f, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white" style={{ border: `1px solid ${f.color}20` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${f.color}18` }}><Calendar size={20} style={{ color: f.color }} /></div>
              <div className="flex-1">
                <p className="font-bold text-[13px] text-[#111827] mb-1">{f.titre}</p>
                <div className="flex items-center gap-3 text-[11px] text-[#9CA3AF]">
                  <span className="flex items-center gap-1"><Calendar size={10} />{f.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={10} />{f.lieu}</span>
                </div>
              </div>
              <div className="shrink-0 text-right"><p className="font-black text-[15px]" style={{ color: f.color }}>{f.places}</p><p className="text-[10px] text-[#9CA3AF]">places</p></div>
            </div>
          ))}
        </div>
      </div>
      {/* ── Domaines de formation ── */}
      <div className="px-4 py-8" style={{ background: "#fff" }}>
        <h2 className="text-[20px] font-black text-[#111827] mb-5">Nos domaines de formation</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { Icon: BookOpen, color: "#FF2D7A", bg: "#FFF0F7", title: "Gestion d'entreprise", desc: "Comptabilité simplifiée, gestion stocks, pilotage financier et conformité fiscale..." },
            { Icon: TrendingUp, color: "#16A34A", bg: "#ECFDF5", title: "Commerce & Ventes", desc: "Techniques de vente, négociation, fidélisation client et développement commercial..." },
            { Icon: Leaf, color: "#16A34A", bg: "#ECFDF5", title: "Agriculture & Agroalimentaire", desc: "Bonnes pratiques agricoles, transformation, valorisation et commercialisation des produits..." },
            { Icon: Cpu, color: "#7C3AED", bg: "#F5F3FF", title: "Artisanat & Métiers", desc: "Organisation de l'atelier, devis, gestion des commandes, développement de marque artisanale." },
            { Icon: Smartphone, color: "#0891B2", bg: "#ECFEFF", title: "Numérique & Outils", desc: "Maîtrise du smartphone, plateformes IPPOO, paiement mobile et outils de gestion..." },
            { Icon: Globe, color: "#E10600", bg: "#FEF2F2", title: "Commerce international", desc: "Export, import, normes douanières, incoterms et opportunités de marché régional..." },
            { Icon: Shield, color: "#D4AF37", bg: "#FFFBEB", title: "Protection & Assurance", desc: "Couvertures disponibles, droits des membres, prévention des risques et sinistres..." },
            { Icon: Users, color: "#FF2D7A", bg: "#FFF0F7", title: "Leadership & Communauté", desc: "Animation de groupement, parrainage, médiation et gouvernance coopérative..." },
          ].map(({ Icon, color, bg, title, desc }) => (
            <div key={title} className="rounded-2xl p-4 flex flex-col gap-2" style={{ background: bg, border: `1px solid ${color}20` }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}18` }}>
                <Icon size={16} style={{ color }} />
              </div>
              <p className="font-bold text-[13px] text-[#111827] leading-tight">{title}</p>
              <p className="text-[#6B7280] text-[11px] leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Comment s'inscrire ── */}
      <div className="px-4 py-8" style={{ background: "#F9FAFB" }}>
        <h2 className="text-[20px] font-black text-[#111827] mb-5">{"Comment s'inscrire"}</h2>
        <div className="space-y-4">
          {[
            { n: "01", color: "#FF2D7A", title: "Contactez-nous", desc: "Contactez-nous par téléphone ou WhatsApp pour identifier la formation adaptée à votre profil..." },
            { n: "02", color: "#16A34A", title: "Confirmez votre inscription", desc: "Confirmez votre inscription et rejoignez le groupe de votre ville ou en ligne..." },
            { n: "03", color: "#2563EB", title: "Participez et certifiez-vous", desc: "Participez à la formation et obtenez votre attestation IPPOO reconnue dans l'écosystème." },
          ].map((step, i, arr) => (
            <div key={step.n} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 font-black text-[13px] text-white"
                  style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}AA)` }}>
                  {step.n}
                </div>
                {i < arr.length - 1 && <div className="w-0.5 flex-1 mt-2" style={{ background: `${step.color}30` }} />}
              </div>
              <div className="pb-4 flex-1">
                <p className="font-black text-[15px] text-[#111827] mb-1">{step.title}</p>
                <p className="text-[#6B7280] text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <a href="tel:+2290141521092" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white" style={{ background: "linear-gradient(135deg, #16A34A, #059669)" }}>
            <Phone size={15} /> Appeler pour s'inscrire
          </a>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-semibold" style={{ background: "#25D36615", color: "#25D366", border: "1.5px solid #25D36630" }}>
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      </div>

      {/* ── Certifications ── */}
      <div className="px-4 py-8">
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Certifications et reconnaissance</h2>
        <div className="space-y-3">
          {[
            { Icon: Award, color: "#D4AF37", text: "Attestations de formation IPPOO délivrées aux participants à l'issue de chaque module." },
            { Icon: Star, color: "#FF2D7A", text: "Formations reconnues au sein de l'écosystème pour accéder à des offres et services préférentiels." },
            { Icon: Target, color: "#16A34A", text: "Formateurs certifiés issus du terrain, experts dans leur domaine et dans leur secteur d'activité." },
          ].map(({ Icon, color, text }) => (
            <div key={text} className="flex items-start gap-3 p-4 rounded-2xl bg-white" style={{ border: `1px solid ${color}20`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}18` }}>
                <Icon size={16} style={{ color }} />
              </div>
              <p className="text-[#374151] text-[13px] leading-relaxed flex-1">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-8 space-y-3">
        <a href="tel:+2290141521092" className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white" style={{ background: "linear-gradient(135deg, #16A34A, #059669)", boxShadow: "0 8px 24px rgba(22,163,74,0.4)" }}><Phone size={16} /> S'inscrire a une formation</a>
        <a href="https://wa.me/2290141521092" className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-semibold" style={{ background: "#25D36615", color: "#25D366", border: "1.5px solid #25D36630" }}><MessageCircle size={15} /> WhatsApp</a>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE SANTÉ
══════════════════════════════════════════════════════════════ */
export function SantePage({ onBack }: { onBack: () => void }) {
  return (
    <PageShell
      title="Santé & Bien-être"
      sub="Prenez le contrôle de votre santé grâce à une plateforme sanitaire intelligente, accessible et pensée pour vous."
      color="#E10600"
      heroImage={imgH12}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["Disponible", "Téléconsultation"], ["7j/7", "Accès soins"], ["Famille", "Espace dédié"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="https://healthypage.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: "#E10600", boxShadow: "0 6px 24px rgba(225,6,0,0.45)" }}>
            <Heart size={15} /> {"Créer mon espace santé"}
          </a>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid #FFE600" }}>
            <Phone size={14} /> Souscrire
          </a>
        </div>
      }
    >

      {/* ── SECTION 1 : DOSSIER MÉDICAL NUMÉRIQUE ────────────────── */}
      <div style={{ background: "#EEF2FF" }}>
        <div style={{ height: "220px", overflow: "hidden" }}>
          <img src={imgHlDossier} alt="Dossier médical numérique IPPOO" className="w-full h-full object-cover object-top" />
        </div>
        <div className="px-5 pt-6 pb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#2563EB" }}>Dossier médical numérique</span>
          <h2 className="text-[22px] font-black text-[#111827] leading-tight mt-1 mb-2">
            Centralisez vos informations médicales en un seul endroit
          </h2>
          <p className="text-[#6B7280] text-[13px] leading-relaxed mb-5">
            Votre dossier médical numérique <Ip /> vous permet de stocker, gérer et partager vos informations de santé en toute sécurité. Ordonnances, résultats, vaccinations et prescriptions : tout est disponible à portée de main, à tout moment.
          </p>
          <div className="space-y-2.5 mb-6">
            {[
              { Icon: FileText, text: "Stockage sécurisé de vos ordonnances, résultats et comptes-rendus médicaux" },
              { Icon: Share2, text: "Partage instantané avec un médecin ou un professionnel de santé de votre choix" },
              { Icon: Bell, text: "Rappels automatiques pour vos rendez-vous, vaccins et renouvellements de traitement" },
              { Icon: Lock, text: "Données chiffrées et accessibles uniquement par vous et les professionnels autorisés" },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-start gap-3 bg-white rounded-2xl px-4 py-3" style={{ border: "1px solid #DBEAFE" }}>
                <Icon size={16} style={{ color: "#2563EB" }} className="shrink-0 mt-0.5" />
                <p className="text-[#374151] text-[12px] leading-snug">{text}</p>
              </div>
            ))}
          </div>
          <a href="https://healthypage.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
            style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", boxShadow: "0 6px 20px rgba(37,99,235,0.4)" }}>
            <FileText size={15} /> {"Créer mon dossier médical"}
          </a>
        </div>
      </div>

      {/* ── SECTION 2 : ACCÈS PROFESSIONNELS ─────────────────────── */}
      <div style={{ background: "#F0FDF4" }}>
        <div style={{ height: "220px", overflow: "hidden" }}>
          <img src={imgHlProfessio} alt="Professionnels de santé IPPOO" className="w-full h-full object-cover object-center" />
        </div>
        <div className="px-5 pt-6 pb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#16A34A" }}>Accès professionnels de santé</span>
          <h2 className="text-[22px] font-black text-[#111827] leading-tight mt-1 mb-2">
            Trouvez le professionnel de santé dont vous avez besoin
          </h2>
          <p className="text-[#6B7280] text-[13px] leading-relaxed mb-5">
            Grâce à notre annuaire géolocalisé, trouvez rapidement un médecin généraliste, un spécialiste, un pharmacien, un prestataire de soins à domicile ou tout autre professionnel de santé proche de chez vous.
          </p>
          <div className="space-y-2.5 mb-6">
            {[
              { Icon: Search, text: "Recherche géolocalisée par spécialité et disponibilité" },
              { Icon: Star, text: "Avis et évaluations d'autres patients <Ip /> pour faire le bon choix" },
              { Icon: Calendar, text: "Prise de rendez-vous en ligne directement depuis votre espace santé" },
              { Icon: MapPin, text: "Accès aux structures sanitaires publiques et privées partenaires de votre région" },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-start gap-3 bg-white rounded-2xl px-4 py-3" style={{ border: "1px solid #DCFCE7" }}>
                <Icon size={16} style={{ color: "#16A34A" }} className="shrink-0 mt-0.5" />
                <p className="text-[#374151] text-[12px] leading-snug">{text}</p>
              </div>
            ))}
          </div>
          <a href="https://healthypage.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
            style={{ background: "linear-gradient(135deg, #16A34A, #059669)", boxShadow: "0 6px 20px rgba(22,163,74,0.4)" }}>
            <Search size={15} /> Trouver un professionnel
          </a>
        </div>
      </div>

      {/* ── SECTION 3 : TÉLÉCONSULTATION ─────────────────────────── */}
      <div style={{ background: "#FFF1F2" }}>
        <div style={{ height: "220px", overflow: "hidden" }}>
          <img src={imgHlTeleconsult} alt="Téléconsultation IPPOO Healthy" className="w-full h-full object-cover object-top" />
        </div>
        <div className="px-5 pt-6 pb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#FF2D7A" }}>Téléconsultation</span>
          <h2 className="text-[22px] font-black text-[#111827] leading-tight mt-1 mb-2">
            Consultez un médecin sans vous déplacer
          </h2>
          <p className="text-[#6B7280] text-[13px] leading-relaxed mb-5">
            Notre service de téléconsultation vous met en relation avec des médecins qualifiés par chat, appel vocal ou vidéo. Obtenez un avis médical, une ordonnance ou un suivi depuis votre domicile, en toute confidentialité.
          </p>
          <div className="space-y-2.5 mb-6">
            {[
              { Icon: Smartphone, text: "Consultation par chat, appel vocal ou vidéo depuis votre mobile ou tablette" },
              { Icon: FileText, text: "Ordonnances numériques et certificats médicaux délivrés directement dans votre dossier" },
              { Icon: Clock, text: "Disponible tous les jours pour un accès aux soins simplifié et sans attente" },
              { Icon: Shield, text: "Confidentialité totale de vos échanges et informations partagées avec le médecin" },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-start gap-3 bg-white rounded-2xl px-4 py-3" style={{ border: "1px solid #FECDD3" }}>
                <Icon size={16} style={{ color: "#FF2D7A" }} className="shrink-0 mt-0.5" />
                <p className="text-[#374151] text-[12px] leading-snug">{text}</p>
              </div>
            ))}
          </div>
          <a href="https://healthypage.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
            style={{ background: "linear-gradient(135deg, #FF2D7A, #E10600)", boxShadow: "0 6px 20px rgba(255,45,122,0.4)" }}>
            <Smartphone size={15} /> Lancer une consultation
          </a>
        </div>
      </div>

      {/* ── SECTION 4 : ESPACE FAMILLE ───────────────────────────── */}
      <div style={{ background: "#F5F3FF" }}>
        <div style={{ height: "220px", overflow: "hidden" }}>
          <img src={imgHlFamille} alt="Espace famille IPPOO Healthy" className="w-full h-full object-cover object-center" />
        </div>
        <div className="px-5 pt-6 pb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#7C3AED" }}>Espace famille</span>
          <h2 className="text-[22px] font-black text-[#111827] leading-tight mt-1 mb-2">
            {"Gérez la santé de toute votre famille"}
          </h2>
          <p className="text-[#6B7280] text-[13px] leading-relaxed mb-5">
            {"L'espace famille <Ip /> vous permet de gérer la santé de l'ensemble des membres de votre foyer depuis un seul compte. Chaque membre dispose de son propre dossier médical, de ses rappels personnalisés et de son historique de soins."}
          </p>
          <div className="space-y-2.5 mb-6">
            {[
              { Icon: Users, text: "Profils séparés pour chaque membre de la famille, gérés depuis un seul espace" },
              { Icon: Baby, text: "Suivi dédié pour les enfants : croissance, vaccinations et visites médicales" },
              { Icon: Heart, text: "Suivi de la grossesse et accompagnement postnatal pour les mères" },
              { Icon: Bell, text: "Rappels médicaments et rendez-vous centralisés pour toute la famille" },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-start gap-3 bg-white rounded-2xl px-4 py-3" style={{ border: "1px solid #EDE9FE" }}>
                <Icon size={16} style={{ color: "#7C3AED" }} className="shrink-0 mt-0.5" />
                <p className="text-[#374151] text-[12px] leading-snug">{text}</p>
              </div>
            ))}
          </div>
          <a href="https://healthypage.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
            style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)", boxShadow: "0 6px 20px rgba(124,58,237,0.4)" }}>
            <Users size={15} /> {"Créer mon espace famille"}
          </a>
        </div>
      </div>

      {/* ── SECTION 5 : COUVERTURE SANTÉ ─────────────────────────── */}
      <div style={{ background: "#F0FDF4" }}>
        <div style={{ height: "220px", overflow: "hidden" }}>
          <img src={imgHlCouverture} alt="Couverture santé IPPOO" className="w-full h-full object-cover object-center" />
        </div>
        <div className="px-5 pt-6 pb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#059669" }}>Couverture santé</span>
          <h2 className="text-[22px] font-black text-[#111827] leading-tight mt-1 mb-2">
            Une couverture santé accessible à tous
          </h2>
          <p className="text-[#6B7280] text-[13px] leading-relaxed mb-5">
            Nos couvertures santé sont conçues pour les travailleurs informels, les familles modestes et les zones rurales. Via la mutualisation solidaire au sein de groupements, chaque membre bénéficie d'une protection réelle et abordable.
          </p>
          <div className="space-y-2.5 mb-6">
            {[
              { Icon: Shield, text: "Couverture santé conçue pour les travailleurs informels et les familles modestes" },
              { Icon: Users, text: "Mutualisation solidaire via groupements : le collectif amplifie la protection de chacun" },
              { Icon: Pill, text: "Prise en charge des consultations, médicaments et soins courants" },
              { Icon: Heart, text: "Suivi de grossesse, soins maternels et pédiatrie inclus selon la formule" },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-start gap-3 bg-white rounded-2xl px-4 py-3" style={{ border: "1px solid #BBF7D0" }}>
                <Icon size={16} style={{ color: "#059669" }} className="shrink-0 mt-0.5" />
                <p className="text-[#374151] text-[12px] leading-snug">{text}</p>
              </div>
            ))}
          </div>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
            style={{ background: "linear-gradient(135deg, #059669, #16A34A)", boxShadow: "0 6px 20px rgba(5,150,105,0.4)" }}>
            <Shield size={15} /> {"Découvrir mes protections santé"}
          </a>
        </div>
      </div>

      {/* ── COMMENT ÇA FONCTIONNE ─────────────────────────────────── */}
      <div className="px-5 py-8" style={{ background: "#111827" }}>
        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#FF2D7A" }}>Comment ça fonctionne</span>
        <h2 className="text-white font-black text-[22px] leading-tight mt-1 mb-6">
          3 étapes pour prendre le contrôle de votre santé
        </h2>
        <div className="space-y-0">
          {[
            { step: 1, title: "Créez votre espace santé", desc: "Inscrivez-vous, renseignez votre profil et créez les profils de votre famille. Votre dossier médical numérique est immédiatement activé...", color: "#FF2D7A", Icon: UserPlus },
            { step: 2, title: "Choisissez vos services", desc: "Sélectionnez la téléconsultation, l'accès aux professionnels, le suivi famille ou la couverture complémentaire selon vos besoins.", color: "#D4AF37", Icon: Settings },
            { step: 3, title: "Accédez aux soins au quotidien", desc: "Consultez des médecins en ligne, prenez rendez-vous, gérez vos dossiers et suivez vos traitements depuis votre espace santé...", color: "#16A34A", Icon: Heart },
          ].map(({ step, title, desc, color, Icon }, i, arr) => (
            <div key={step} className="flex gap-4">
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: `${color}22`, border: `2px solid ${color}55` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                {i < arr.length - 1 && <div className="w-0.5 flex-1 mt-2 mb-2" style={{ background: `${color}40` }} />}
              </div>
              <div className="pb-6 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color }}>{"0" + step}</span>
                </div>
                <p className="text-white font-bold text-[15px] leading-snug mb-1">{title}</p>
                <p className="text-white/55 text-[12px] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION ENTREPRISE / ORGANISATION ───────────────────── */}
      <div style={{ background: "#ffffff" }}>
        <div style={{ height: "220px", overflow: "hidden" }}>
          <img src={imgHlEntreprise} alt="IPPOO Healthy Page partenaire entreprise" className="w-full h-full object-cover object-center" />
        </div>
        <div className="px-5 pt-6 pb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#E10600" }}>Entreprises & Organisations</span>
          <h2 className="text-[22px] font-black text-[#111827] leading-tight mt-1 mb-2">
            {"Protégez vos équipes et vos membres"}
          </h2>
          <p className="text-[#6B7280] text-[13px] leading-relaxed mb-5">
            {"Vous gérez une entreprise, une association ou un groupement communautaire ? <Ip /> Healthy Page propose des solutions collectives pour protéger vos équipes, gérer leurs dossiers santé et accéder à un programme partenaire dédié."}
          </p>
          <div className="space-y-2.5 mb-6">
            {[
              { Icon: Briefcase, text: "Solutions collectives pour entreprises, associations et groupements communautaires" },
              { Icon: Users, text: "Gestion centralisée des dossiers de santé de l'ensemble de vos équipes" },
              { Icon: TrendingUp, text: "Tableaux de bord et suivi de la santé globale de vos collaborateurs" },
              { Icon: Handshake, text: "Programme partenaire avec accompagnement dédié et avantages exclusifs" },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-start gap-3 bg-white rounded-2xl px-4 py-3" style={{ border: "1px solid #FEE2E2" }}>
                <Icon size={16} style={{ color: "#E10600" }} className="shrink-0 mt-0.5" />
                <p className="text-[#374151] text-[12px] leading-snug">{text}</p>
              </div>
            ))}
          </div>
          <a href="mailto:ippooz.up.2@gmail.com"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
            style={{ background: "linear-gradient(135deg, #E10600, #FF2D7A)", boxShadow: "0 6px 20px rgba(225,6,0,0.4)" }}>
            <Handshake size={15} /> Devenir partenaire Healthy Page
          </a>
        </div>
      </div>

      {/* ── BIEN-ÊTRE BANNER (mobile) ─────────────────────────────── */}
      <div className="w-full">
        <img src={imgAfcBienEtre} alt="IPPOO Santé et Bien-être" className="w-full h-auto block" />
        <div className="px-5 py-5" style={{ background: "#0f0015" }}>
          <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "#F9A8D4" }}>Santé & Bien-être</span>
          <h2 className="text-white font-black text-[22px] leading-tight mb-2">
            Votre santé,<br /><span style={{ color: "#F9A8D4" }}>votre pouvoir.</span>
          </h2>
          <p className="text-white/65 text-[13px] leading-relaxed mb-4">
            {"Avec <Ip /> Healthy Page, vous n'êtes plus spectateur de votre santé. Vous la pilotez, la protégez et la partagez avec ceux que vous aimez. Rejoignez des milliers de personnes qui ont choisi de prendre le contrôle."}
          </p>
          <a href="https://healthypage.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-[13px] font-bold text-white"
            style={{ background: "linear-gradient(135deg, #E10600, #FF2D7A)", boxShadow: "0 6px 20px rgba(225,6,0,0.4)" }}>
            Accéder à Healthy Page <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <div className="px-4 pb-10 pt-6 space-y-3">
        <a href="https://healthypage.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white"
          style={{ background: "linear-gradient(135deg, #E10600, #FF2D7A)", boxShadow: "0 8px 24px rgba(225,6,0,0.35)" }}>
          <Heart size={16} /> {"Créer mon espace santé"}
        </a>
        <a href="tel:+2290141521092"
          className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-semibold text-[#E10600]"
          style={{ background: "#E1060010", border: "2px solid #E1060030" }}>
          <Phone size={15} /> {"Souscrire à la couverture santé"}
        </a>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE GROUPEMENTS
══════════════════════════════════════════════════════════════ */
export function GroupementsPage({ onBack }: { onBack: () => void }) {
  const TYPES = [
    { Icon: Leaf, title: "Groupements Agricoles", desc: "Producteurs, eleveurs et cooperatives pour la mise en commun des ressources...", color: "#16A34A", count: "120+" },
    { Icon: Cpu, title: "Groupements Artisanaux", desc: "Artisans et créateurs mutualisant savoir-faire et clientèle...", color: "#FF2D7A", count: "85+" },
    { Icon: ShoppingCart, title: "Groupements Commerçants", desc: "Achats groupés et négociation collective pour les distributeurs...", color: "#D4AF37", count: "140+" },
    { Icon: Briefcase, title: "Groupements Professionnels", desc: "Prestataires et consultants partageant missions, outils et formations...", color: "#2563EB", count: "60+" },
    { Icon: Heart, title: "Groupements Santé", desc: "Fonds solidaires pour la couverture médicale communautaire...", color: "#E10600", count: "45+" },
    { Icon: Users, title: "Groupements Femmes", desc: "Réseaux féminins dédiés à l'entrepreneuriat et la finance solidaire.", color: "#7C3AED", count: "95+" },
  ]
  return (
    <PageShell title="Nos Groupements" sub="Rejoignez ou créez un groupement IPPOO et bénéficiez de la force collective pour développer votre activité." color="#16A34A" heroImage={imgH13} onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["500+", "Groupements"], ["7", "Pays"], ["7", "Membres/groupe"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#16A34A', boxShadow: '0 6px 24px rgba(22,163,74,0.45)' }}>
            <Phone size={15} /> Creer mon groupement
          </a>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <MessageCircle size={14} /> Rejoindre un groupement
          </a>
        </div>
      }
    >
      <div className="px-4 py-6">
        <div className="rounded-3xl p-5 mb-5" style={{ background: "linear-gradient(135deg, #111827, #1F2937)" }}>
          <p className="text-white font-black text-[30px] leading-none mb-1">500+ <span style={{ color: "#16A34A" }}>groupements</span></p>
          <p className="text-white/50 text-[13px] mb-4"><IpHL text="actifs dans l'écosystème IPPOO" color="#16A34A" /></p>
          <div className="grid grid-cols-3 gap-3">
            {[["8 700+", "Membres"], ["7", "Pays"], ["94%", "Satisfaits"]].map(([v, l]) => (
              <div key={l} className="rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.07)" }}><p className="text-white font-black text-[16px]">{v}</p><p className="text-white/40 text-[10px] mt-0.5">{l}</p></div>
            ))}
          </div>
        </div>
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Types de groupements</h2>
        <div className="space-y-3">
          {TYPES.map(({ Icon, title, desc, color, count }) => (
            <div key={title} className="flex items-start gap-4 p-4 rounded-2xl bg-white" style={{ border: `1px solid ${color}20` }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}><Icon size={20} style={{ color }} /></div>
              <div className="flex-1"><div className="flex items-center justify-between mb-1"><p className="font-bold text-[14px] text-[#111827]">{title}</p><span className="font-black text-[13px]" style={{ color }}>{count}</span></div><p className="text-[#6B7280] text-[12px] leading-relaxed">{desc}</p></div>
            </div>
          ))}
        </div>
      </div>
      {/* ── La force du collectif ── */}
      <div className="relative overflow-hidden">
        <img src={imgGroupBenef} alt="La force du collectif IPPOO Groupements" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background:'linear-gradient(170deg, rgba(0,0,0,0.9) 0%, rgba(10,40,20,0.85) 60%, rgba(22,163,74,0.15) 100%)' }} />
        <div className="relative z-10 px-5 py-9">
          <div className="flex items-center gap-2 mb-3">
            <Users size={13} className="text-[#4ADE80]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#4ADE80]">La force du collectif</span>
          </div>
          <h2 className="text-white font-black text-[22px] leading-tight mb-3">
            <IpHL text="Les Groupements IPPOO : la force du collectif au service de votre réussite." color="#4ADE80" />
          </h2>
          <p className="text-white/70 text-[13px] leading-relaxed mb-5">
            <IpHL text="Les Groupements IPPOO rassemblent personnes, familles, entrepreneurs, commerçants, producteurs et professionnels autour d'un objectif commun : avancer ensemble, mutualiser les ressources et créer davantage d'opportunités." color="#4ADE80" />
          </p>
          <div className="space-y-2.5 mb-5">
            {[
              { Icon: Network,  t:"Développez votre réseau", d:"Clients, fournisseurs, partenaires, investisseurs : chaque membre enrichit votre réseau de contacts et renforce votre visibilité." },
              { Icon: Wallet,   t:"Mutualisez vos achats", d:"Achats groupés, prix négociés, coûts de transport réduits. Plus les volumes sont importants, plus les économies sont significatives." },
              { Icon: TrendingUp, t:"Accélérez votre développement", d:"Partage de compétences, ressources, équipements et informations stratégiques. Chacun progresse grâce à la force de la communauté." },
              { Icon: Building2, t:"Accédez aux financements", d:"La dynamique collective renforce la crédibilité des projets et facilite l'accès aux solutions de crédit et d'investissement." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex items-start gap-3 rounded-2xl p-3" style={{ background:'rgba(255,255,255,0.08)' }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background:'rgba(74,222,128,0.15)' }}>
                  <Icon size={14} className="text-[#4ADE80]" />
                </div>
                <div>
                  <p className="text-white font-bold text-[12px]">{t}</p>
                  <p className="text-white/55 text-[11px] mt-0.5 leading-snug">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="tel:+2290141521092"
            className="btn-pop flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-[#111827]"
            style={{ background:'#4ADE80', boxShadow:'0 8px 24px rgba(74,222,128,0.35)' }}>
            <Users size={15} /> Créer mon groupement
          </a>
        </div>
      </div>

      {/* Mobile-only Shop & Troc food banner */}
      <div className="md:hidden w-full">
        <img src={imgAfcShopFood} alt="IPPOO Shop et Troc Alimentation" className="w-full h-auto block" />
        <div className="px-5 py-5" style={{ background:'#031a07' }}>
          <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color:'#86EFAC' }}>Shop & Troc</span>
          <h2 className="text-white font-black text-[22px] leading-tight mb-2">
            Achetez malin,<br /><span style={{ color:'#86EFAC' }}>économisez mieux.</span>
          </h2>
          <p className="text-white/65 text-[13px] leading-relaxed mb-4">
            Produits frais, plats cuisinés et aliments conditionnés de qualité à prix accessibles. Manger mieux tout en contrôlant votre budget quotidien.
          </p>
          <a href="https://market.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-[13px] font-bold text-white"
            style={{ background:'linear-gradient(135deg, #16A34A, #059669)', boxShadow:'0 6px 20px rgba(22,163,74,0.4)' }}>
            Explorer le Market <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* ── Modalités de création ── */}
      <div className="px-4 py-8" style={{ background: '#F0FDF4' }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#16A34A20' }}>
            <Award size={14} className="text-[#16A34A]" />
          </div>
          <span className="text-[#16A34A] text-[11px] font-bold uppercase tracking-widest">Comment créer votre groupement</span>
        </div>
        <h2 className="text-[20px] font-black text-[#111827] mb-3 leading-tight">Modalités de création d'un groupement</h2>
        <div className="space-y-4 mb-6">
          <p className="text-[#374151] text-[13px] leading-relaxed">
            <IpHL text="Créer un groupement, c'est devenir le moteur d'une communauté économique. Dès la création de votre premier groupement, vous obtenez automatiquement le statut de parrain de ce groupement. Toutes les personnes que vous invitez et qui rejoignent votre groupement deviennent vos filleuls." color="#16A34A" />
          </p>
          <p className="text-[#374151] text-[13px] leading-relaxed">
            Votre mission est de développer votre réseau en parrainant au moins <strong className="text-[#16A34A]">7 nouveaux membres par semaine</strong>. Chacun de vos filleuls est invité à suivre le même principe en parrainant à son tour 7 nouvelles personnes chaque semaine. Ce mécanisme permet au groupement de grandir durablement, de renforcer la solidarité entre les membres et de multiplier les opportunités pour tous.
          </p>
          <div className="rounded-2xl p-4" style={{ background: 'white', border: '1px solid #16A34A20' }}>
            <p className="text-[#16A34A] font-bold text-[13px] mb-1">Dynamique continue</p>
            <p className="text-[#6B7280] text-[12px] leading-relaxed">Le développement du groupement est une dynamique qui se renouvelle chaque semaine afin d'assurer son expansion et sa pérennité - pas un objectif ponctuel limité à un mois.</p>
          </div>
        </div>

        <h3 className="text-[17px] font-black text-[#111827] mb-3">Groupements par métier</h3>
        <p className="text-[#6B7280] text-[13px] mb-3">Chaque groupement est constitué autour d'une activité précise. Exemples :</p>
        <div className="grid grid-cols-2 gap-2 mb-6">
          {[
            "Vendeuses de gari","Vendeuses de tomates","Commerçants","Revendeurs",
            "Artisans","Agriculteurs","Éleveurs","Pêcheurs",
            "Transformateurs","Restaurateurs","Couturiers & Stylistes","Coiffeurs & Esthéticiens",
            "Conducteurs & Transporteurs","Prestataires de services","Entrepreneurs","Étudiants",
          ].map(m => (
            <div key={m} className="rounded-xl px-3 py-2 flex items-center gap-2" style={{ background: '#16A34A0D', border: '1px solid #16A34A18' }}>
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#16A34A' }} />
              <span className="text-[#374151] text-[11px] font-medium leading-tight"><Ip /> - {m}</span>
            </div>
          ))}
        </div>

        <h3 className="text-[17px] font-black text-[#111827] mb-3">Passez à l'action</h3>
        <div className="space-y-3 mb-6">
          {[
            { n: "01", text: "Créez votre groupement dès aujourd'hui." },
            { n: "02", text: "Invitez au moins 7 nouveaux membres chaque semaine." },
            { n: "03", text: "Développez votre réseau professionnel." },
            { n: "04", text: "Renforcez votre pouvoir économique grâce à votre communauté." },
          ].map(({ n, text }) => (
            <div key={n} className="flex items-start gap-3 p-3 rounded-2xl" style={{ background: 'white', border: '1px solid #16A34A15' }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-black text-[12px] text-white" style={{ background: '#16A34A' }}>{n}</div>
              <p className="text-[#374151] text-[13px] leading-snug pt-1">{text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl p-5" style={{ background: "linear-gradient(135deg, #16A34A, #059669)" }}>
          <Users size={24} className="text-white mb-3" />
          <h3 className="text-white font-black text-[18px] mb-2">Créer votre groupement</h3>
          <p className="text-white/70 text-[12px] mb-4">Contactez notre équipe terrain pour démarrer. Activation sous 48h.</p>
          <div className="flex flex-col gap-2">
            <a href="tel:+2290141521092" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold" style={{ background: "white", color: "#16A34A" }}><Phone size={15} /> Créer mon groupement</a>
            <a href="https://wa.me/2290141521092" className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white" style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid #FFE600' }}><MessageCircle size={13} /> Rejoindre via WhatsApp</a>
          </div>
        </div>
      </div>

      {/* ── Comment fonctionne un groupement IPPOO ── */}
      <div className="px-4 py-8" style={{ background: 'white' }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#16A34A20' }}>
            <Info size={14} className="text-[#16A34A]" />
          </div>
          <span className="text-[#16A34A] text-[11px] font-bold uppercase tracking-widest">Fonctionnement</span>
        </div>
        <h2 className="text-[20px] font-black text-[#111827] mb-3 leading-tight">Comment fonctionne un groupement <Ip /></h2>
        <p className="text-[#6B7280] text-[13px] leading-relaxed mb-5">
          {"Un groupement <Ip /> est un collectif solidaire d'au moins 7 membres qui mutualisent leurs ressources, partagent les risques et accèdent ensemble à des couvertures et services adaptés à leurs activités."}
        </p>
        <div className="space-y-4">
          {[
            { n: "01", title: "Réunissez vos membres", desc: "Réunissez au moins 7 membres autour d'un secteur ou d'un intérêt commun (agriculture, commerce, artisanat, santé, femmes, jeunes...)", color: "#16A34A" },
            { n: "02", title: "Désignez un responsable", desc: "Désignez un responsable de groupement chargé de la coordination et des relations avec IPPOO...", color: "#FF2D7A" },
            { n: "03", title: "Souscrivez ensemble", desc: "Souscrivez ensemble à l'offre de base et choisissez vos couvertures complémentaires collectives", color: "#7C3AED" },
            { n: "04", title: "Bénéficiez du collectif", desc: "Bénéficiez de la force du collectif : formations, accompagnement, réseau et mutualisation...", color: "#D4AF37" },
          ].map((step, i, arr) => (
            <div key={step.n} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 font-black text-[13px] text-white"
                  style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}AA)` }}>
                  {step.n}
                </div>
                {i < arr.length - 1 && <div className="w-0.5 flex-1 mt-2" style={{ background: `${step.color}30` }} />}
              </div>
              <div className="pb-4 flex-1">
                <p className="font-black text-[15px] text-[#111827] mb-1">{step.title}</p>
                <p className="text-[#6B7280] text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Avantages du groupement ── */}
      <div className="px-4 py-8" style={{ background: '#F9FAFB' }}>
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Avantages du groupement</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { Icon: Target, title: "Mutualisation des risques", desc: "Les cotisations du collectif financent la protection de chaque membre...", color: "#FF2D7A" },
            { Icon: Network, title: "Réseau solidaire", desc: "Accès à un réseau d'acheteurs, fournisseurs et partenaires commerciaux", color: "#16A34A" },
            { Icon: BookOpen, title: "Formations dédiées", desc: "Accès prioritaire aux formations terrain et ateliers spécialisés IPPOO...", color: "#7C3AED" },
            { Icon: TrendingUp, title: "Levier financier", desc: "Accès facilité au crédit collectif, aux achats groupés et aux financements...", color: "#D4AF37" },
          ].map(({ Icon, title, desc, color }) => (
            <div key={title} className="rounded-2xl p-4 flex flex-col gap-2 bg-white" style={{ border: `1px solid ${color}20` }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}18` }}>
                <Icon size={16} style={{ color }} />
              </div>
              <p className="font-bold text-[13px] text-[#111827] leading-tight">{title}</p>
              <p className="text-[#6B7280] text-[11px] leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 16 types de groupements IPPOO ── */}
      <div className="py-8" style={{ background: 'white' }}>
        <div className="px-4 mb-4">
          <h2 className="text-[20px] font-black text-[#111827]">Les 16 types de groupements <Ip /></h2>
        </div>
        <div className="flex gap-2 overflow-x-auto px-4 pb-2" style={{ scrollbarWidth: 'none', scrollSnapType: 'x mandatory' }}>
          {[
            { label: "Agricoles", color: "#16A34A" },
            { label: "Artisanaux", color: "#FF2D7A" },
            { label: "Commerçants", color: "#D4AF37" },
            { label: "Professionnels", color: "#2563EB" },
            { label: "Santé", color: "#E10600" },
            { label: "Femmes", color: "#7C3AED" },
            { label: "Jeunes", color: "#0891B2" },
            { label: "Étudiants", color: "#FF2D7A" },
            { label: "Diaspora", color: "#16A34A" },
            { label: "Ruraux", color: "#D4AF37" },
            { label: "Éducation", color: "#7C3AED" },
            { label: "Culture & Sport", color: "#E10600" },
            { label: "Transport", color: "#2563EB" },
            { label: "Immobilier", color: "#D4AF37" },
            { label: "Numérique", color: "#0891B2" },
            { label: "Mixtes", color: "#FF2D7A" },
          ].map(({ label, color }) => (
            <span key={label} className="shrink-0 px-4 py-2 rounded-full text-[12px] font-bold text-white"
              style={{ background: color, scrollSnapAlign: 'start' }}>
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Parrainage et création ── */}
      <div className="px-4 py-8" style={{ background: '#111827' }}>
        <div className="flex items-center gap-2 mb-4">
          <Users size={14} className="text-[#4ADE80]" />
          <span className="text-[#4ADE80] text-[11px] font-bold uppercase tracking-widest">Parrainage & Création</span>
        </div>
        <h2 className="text-white font-black text-[20px] leading-tight mb-3">Créez votre groupement <Ip /></h2>
        <div className="space-y-3 mb-5">
          {[
            "Réunir 7 membres minimum autour d'un secteur ou intérêt commun",
            "Désigner un responsable de groupement",
            "Contacter IPPOO pour démarrer la procédure d'activation",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#16A34A25' }}>
                <Check size={10} className="text-[#4ADE80]" />
              </div>
              <p className="text-white/70 text-[13px] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-4 mb-5" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <Gift size={16} className="text-[#D4AF37] mb-2" />
          <p className="text-white font-bold text-[13px] mb-1">Avantages parrain fondateur</p>
          <p className="text-white/55 text-[12px] leading-relaxed">
            {"Chaque parrain qui crée un groupement bénéficie d'avantages exclusifs dans l'écosystème <Ip /> : bonus de parrainage majoré, accès prioritaire aux formations et distinction parrain fondateur."}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-[#111827]"
            style={{ background: '#4ADE80', boxShadow: '0 6px 20px rgba(74,222,128,0.35)' }}>
            <Phone size={15} /> Créer mon groupement
          </a>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[13px] font-semibold text-white"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #4ADE8040' }}>
            <MessageCircle size={14} /> Rejoindre un groupement existant
          </a>
        </div>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE INVESTISSEMENT
══════════════════════════════════════════════════════════════ */
export function InvestissementPage({ onBack }: { onBack: () => void }) {
  return (
    <PageShell
      title="Investissement & Épargne"
      sub="IPPOO CAPITAL-INVEST : mobilisez des capitaux, investissez dans des projets locaux et accédez aux financements adaptés à l'économie africaine."
      color="#D4AF37"
      heroImage={imgH14}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["Capital", "Disponible"], ["Réseau", "Investisseurs"], ["Projets", "Soutenus"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="https://capitalinvest.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#D4AF37', boxShadow: '0 6px 24px rgba(212,175,55,0.45)' }}>
            <TrendingUp size={15} /> CAPITAL-INVEST
          </a>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <Phone size={14} /> Parler à un conseiller
          </a>
        </div>
      }
    >
      {/* ── IPPOO CAPITAL-INVEST présentation ── */}
      <div className="px-4 py-6">
        <div className="rounded-3xl p-5 mb-5" style={{ background: "linear-gradient(135deg, #111827, #1F2937)" }}>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={14} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest"><Ip /> CAPITAL-INVEST</span>
          </div>
          <p className="text-white font-black text-[20px] leading-tight mb-3">
            {"Faites travailler votre argent pour vous et votre communauté."}
          </p>
          <p className="text-white/60 text-[13px] leading-relaxed">
            {"<Ip /> CAPITAL-INVEST est l'espace dédié à la mobilisation de capitaux et à l'investissement. Il met en relation investisseurs, entreprises et porteurs de projets pour favoriser le financement, le développement et la croissance des initiatives économiques populaires."}
          </p>
        </div>

        {/* 4 solution cards 2×2 */}
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Nos solutions d'investissement</h2>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { Icon: PiggyBank, title: "Épargne collective", desc: "Constituez une épargne solidaire avec votre groupement pour financer vos projets et faire face aux imprévus...", color: "#FF2D7A" },
            { Icon: Coins, title: "Micro-investissement", desc: "Investissez dans des projets locaux identifiés et validés par l'écosystème IPPOO avec des montants accessibles", color: "#16A34A" },
            { Icon: BarChart3, title: "Bourse communautaire", desc: "Accédez à la plateforme de cotation communautaire et d'investissement solidaire pour l'informel", color: "#7C3AED" },
            { Icon: TrendingUp, title: "Financement de projets", desc: "Soumettez votre projet, accédez au réseau d'investisseurs et de bailleurs partenaires d'IPPOO", color: "#D4AF37" },
          ].map(({ Icon, title, desc, color }) => (
            <div key={title} className="rounded-2xl p-4 flex flex-col gap-2 bg-white" style={{ border: `1px solid ${color}20` }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}18` }}>
                <Icon size={16} style={{ color }} />
              </div>
              <p className="font-bold text-[13px] text-[#111827] leading-tight">{title}</p>
              <p className="text-[#6B7280] text-[11px] leading-snug">{desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-2">
          {[
            { v: "1.2Md FCFA", l: "Investis à ce jour", c: "#D4AF37" },
            { v: "350+", l: "Projets financés", c: "#FF2D7A" },
            { v: "12%", l: "Rendement moyen", c: "#16A34A" },
            { v: "98%", l: "Taux de remboursement", c: "#2563EB" },
          ].map(({ v, l, c }) => (
            <div key={l} className="rounded-2xl p-4 text-center bg-white" style={{ border: `1px solid ${c}20` }}>
              <p className="font-black text-[18px]" style={{ color: c }}>{v}</p>
              <p className="text-[#6B7280] text-[11px] mt-1 leading-snug">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── IPPOO FINANCE CREDIT ── */}
      <div className="px-4 py-8" style={{ background: '#F9FAFB' }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#0891B220' }}>
            <CreditCard size={14} className="text-[#0891B2]" />
          </div>
          <span className="text-[#0891B2] text-[11px] font-bold uppercase tracking-widest"><Ip /> FINANCE CREDIT</span>
        </div>
        <h2 className="text-[20px] font-black text-[#111827] mb-3 leading-tight">Accès au crédit et au microfinancement</h2>
        <p className="text-[#6B7280] text-[13px] leading-relaxed mb-5">
          {"<Ip /> FINANCE CREDIT facilite l'accès au crédit, au microfinancement, aux prêts personnels et professionnels et aux services de paiement. Ces solutions sont conçues pour les acteurs informels qui n'ont pas accès aux financements bancaires traditionnels."}
        </p>
        <div className="space-y-2.5">
          {[
            "Crédit agricole pour les producteurs et coopératives",
            "Financement de marchandises et de stocks",
            "Acquisition d'équipements professionnels",
            "Financement d'activités économiques génératrices de revenus",
            "Paiement échelonné et différé pour les investissements",
            "Microfinancement adapté aux très petites structures",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white" style={{ border: '1px solid #0891B215' }}>
              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#0891B218' }}>
                <Check size={10} style={{ color: '#0891B2' }} />
              </div>
              <p className="text-[#374151] text-[13px] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Qui peut bénéficier ── */}
      <div className="px-4 py-8" style={{ background: 'white' }}>
        <h2 className="text-[20px] font-black text-[#111827] mb-4">{"Qui peut bénéficier des solutions d'investissement ?"}</h2>
        <div className="space-y-3">
          {[
            { Icon: Briefcase, title: "Entrepreneurs et PME", desc: "Développez votre activité, accédez à des capitaux et structurez votre financement...", color: "#D4AF37" },
            { Icon: Leaf, title: "Agriculteurs et coopératives", desc: "Crédit agricole, équipements, intrants et financement de campagne...", color: "#16A34A" },
            { Icon: Users, title: "Groupements solidaires", desc: "Épargne collective, financement commun et accès au crédit groupé...", color: "#FF2D7A" },
            { Icon: Lightbulb, title: "Porteurs de projets", desc: "Soumettez votre projet à notre réseau d'investisseurs et de bailleurs partenaires", color: "#7C3AED" },
          ].map(({ Icon, title, desc, color }) => (
            <div key={title} className="flex items-start gap-4 p-4 rounded-2xl bg-white" style={{ border: `1px solid ${color}20`, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
                <Icon size={20} style={{ color }} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[14px] text-[#111827] mb-1">{title}</p>
                <p className="text-[#6B7280] text-[12px] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-only Finance banner */}
      <div className="md:hidden w-full">
        <img src={imgAfcFinance} alt="IPPOO Finance Credit et Assurance" className="w-full h-auto block" />
        <div className="px-5 py-5" style={{ background: '#0a0f00' }}>
          <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: '#FDE68A' }}>Finance & Sécurité</span>
          <h2 className="text-white font-black text-[22px] leading-tight mb-2">
            Avancez en sécurité,<br /><span style={{ color: '#FDE68A' }}>protégez votre avenir.</span>
          </h2>
          <p className="text-white/65 text-[13px] leading-relaxed mb-4">
            <IpHL text="Crédit, micro-assurance, épargne et fonds de solidarité - IPPOO vous offre une solution complète pour sécuriser vos activités et développer vos projets en confiance." color="#D4AF37" />
          </p>
          <a href="https://kapital.aptdc-zup2.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-[13px] font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #FF2D7A)', boxShadow: '0 6px 20px rgba(212,175,55,0.4)' }}>
            Accéder à <strong style={{color:'#FFE600',fontWeight:900}}>IPPOO-CAPITAL-INVEST</strong> <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="px-4 pb-8 pt-6 space-y-3">
        <a href="mailto:ippooz.up.2@gmail.com"
          className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white"
          style={{ background: "linear-gradient(135deg, #D4AF37, #FF2D7A)", boxShadow: "0 8px 24px rgba(212,175,55,0.4)" }}>
          <Mail size={16} /> Soumettre mon projet
        </a>
        <a href="tel:+2290141521092"
          className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-semibold text-[#D4AF37]"
          style={{ background: "#D4AF3710", border: "2px solid #D4AF3725" }}>
          <Phone size={15} /> Contacter un conseiller
        </a>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE EMPLOI & WORKS
══════════════════════════════════════════════════════════════ */
export function EmploiPage({ onBack }: { onBack: () => void }) {
  const OFFRES = [
    { poste: "Responsable Commercial Terrain", entreprise: "IPPOO MARKET", lieu: "Parakou", type: "CDI", color: "#3B45D0" },
    { poste: "Technicien Agronome", entreprise: "IPPOO AAGRO", lieu: "Natitingou", type: "CDD", color: "#16A34A" },
    { poste: "Agent Assurance Terrain", entreprise: "IPPOO ASSURANCE", lieu: "Cotonou", type: "Commission", color: "#FF2D7A" },
    { poste: "Couturière / Styliste", entreprise: "IPPOO FASHION", lieu: "Parakou", type: "Freelance", color: "#D4AF37" },
    { poste: "Développeur Mobile Junior", entreprise: "Z-UP.2 Digital", lieu: "En ligne", type: "Stage", color: "#7C3AED" },
  ]
  return (
    <PageShell
      title="Emploi & Opportunités"
      sub="IPPOO WORKS connecte employeurs, recruteurs, freelances, artisans et demandeurs d'emploi pour faciliter le recrutement et développer les carrières."
      color="#3B45D0"
      heroImage={imgH15}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["Opportunités", "Emploi"], ["Réseau", "Recruteurs"], ["Secteurs", "Couverts"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="https://works.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#3B45D0', boxShadow: '0 6px 24px rgba(59,69,208,0.45)' }}>
            <Briefcase size={15} /> Accéder à <strong style={{color:'#FFE600',fontWeight:900}}>IPPOO-WORKS</strong>
          </a>
          <a href="mailto:ippooz.up.2@gmail.com"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <Mail size={14} /> Déposer ma candidature
          </a>
        </div>
      }
    >
      {/* Mobile-only Work & Jobs banner */}
      <div className="md:hidden w-full">
        <img src={imgAfcWorkJobs} alt="IPPOO Work et Jobs" className="w-full h-auto block" />
        <div className="px-5 py-5" style={{ background: '#05000f' }}>
          <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: '#FF2D7A' }}><IpHL text="IPPOO Works" color="#FF2D7A" /></span>
          <h2 className="text-white font-black text-[22px] leading-tight mb-2">
            Construisez votre<br /><span style={{ color: '#FF2D7A' }}>réseau de compétences.</span>
          </h2>
          <p className="text-white/65 text-[13px] leading-relaxed mb-4">
            <IpHL text="Mettez en valeur vos savoir-faire, obtenez plus d'impact et accédez aux meilleures opportunités. IPPOO WORKS, ensemble pour une bonne dynamique." color="#3B45D0" />
          </p>
          <a href="https://works.aptdc-zup2.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-[13px] font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #3B45D0, #7C3AED)', boxShadow: '0 6px 20px rgba(59,69,208,0.4)' }}>
            Rejoindre <strong style={{color:'#FFE600',fontWeight:900}}>IPPOO-WORKS</strong> <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* ── Présentation IPPOO WORKS ── */}
      <div className="px-4 py-6">
        <div className="rounded-3xl p-5 mb-5" style={{ background: "linear-gradient(135deg, #111827, #1F2937)" }}>
          <div className="flex items-center gap-2 mb-3">
            <Briefcase size={14} className="text-[#818CF8]" />
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{color:"#3B82F6"}}><strong style={{fontWeight:900}}>IPPOO-WORKS</strong></span>
          </div>
          <p className="text-white font-black text-[18px] leading-tight mb-3">La plateforme de l'emploi et des compétences</p>
          <p className="text-white/60 text-[13px] leading-relaxed">
            {"<Ip /> WORKS met en relation employeurs, entreprises, recruteurs, travailleurs indépendants, artisans et demandeurs d'emploi afin de faciliter le recrutement, les missions et le développement des carrières. Que vous cherchiez un emploi, une mission, un prestataire ou un talent, IPPOO WORKS est votre espace."}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { v: "3 200+", l: "Candidats inscrits", c: "#3B45D0" },
            { v: "420+", l: "Offres actives", c: "#FF2D7A" },
            { v: "85%", l: "Taux de placement", c: "#16A34A" },
            { v: "48h", l: "Mise en relation", c: "#D4AF37" },
          ].map(({ v, l, c }) => (
            <div key={l} className="rounded-2xl p-4 text-center bg-white" style={{ border: `1px solid ${c}20` }}>
              <p className="font-black text-[22px]" style={{ color: c }}>{v}</p>
              <p className="text-[#6B7280] text-[11px] mt-1 leading-snug">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Pour qui ? ── */}
      <div className="px-4 py-8" style={{ background: '#F9FAFB' }}>
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Pour qui ?</h2>
        <div className="space-y-3">
          {[
            {
              Icon: Users,
              title: "Demandeurs d'emploi",
              desc: "Multipliez vos chances avec notre réseau de recruteurs, accédez aux offres d'emploi, aux missions temporaires, aux petits emplois et aux opportunités de freelance. Votre profil IPPOO vous distingue.",
              color: "#3B45D0",
            },
            {
              Icon: Building2,
              title: "Employeurs et recruteurs",
              desc: "Trouvez rapidement des candidats qualifiés dans votre secteur. Publiez vos offres, filtrez les profils, contactez directement les talents disponibles dans votre région...",
              color: "#FF2D7A",
            },
            {
              Icon: Briefcase,
              title: "Freelances et prestataires",
              desc: "Développez votre clientèle, trouvez de nouvelles missions, sécurisez vos prestations et bénéficiez d'outils professionnels adaptés à votre activité indépendante.",
              color: "#16A34A",
            },
          ].map(({ Icon, title, desc, color }) => (
            <div key={title} className="flex items-start gap-4 p-4 rounded-2xl bg-white" style={{ border: `1px solid ${color}20`, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
                <Icon size={20} style={{ color }} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[14px] text-[#111827] mb-1">{title}</p>
                <p className="text-[#6B7280] text-[12px] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Offres récentes ── */}
      <div className="px-4 py-6" style={{ background: 'white' }}>
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Offres récentes</h2>
        <div className="space-y-3 mb-4">
          {OFFRES.map((o, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white" style={{ border: `1px solid ${o.color}20` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${o.color}18` }}>
                <Briefcase size={16} style={{ color: o.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[13px] text-[#111827] truncate">{o.poste}</p>
                <p className="text-[#6B7280] text-[11px] mt-0.5"><IpHL text={o.entreprise} color={o.color} /> - {o.lieu}</p>
              </div>
              <span className="shrink-0 text-[10px] font-bold px-2.5 py-1.5 rounded-xl text-white" style={{ background: o.color }}>{o.type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Secteurs couverts ── */}
      <div className="px-4 py-8" style={{ background: '#F9FAFB' }}>
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Secteurs couverts</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Agriculture & Élevage", "Artisanat & Métiers", "Commerce & Distribution",
            "BTP & Construction", "Transport & Logistique", "Numérique & Tech",
            "Santé & Social", "Finance & Comptabilité", "Éducation & Formation",
            "Hôtellerie & Restauration", "Communication & Médias",
            "Services aux entreprises", "Industrie & Manufacture", "Sécurité & Gardiennage",
          ].map(s => (
            <span key={s} className="px-3 py-2 rounded-xl text-[12px] font-semibold"
              style={{ background: '#3B45D015', color: '#3B45D0', border: '1px solid #3B45D025' }}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* ── IPPOO KRAAFT ── */}
      <div className="px-4 py-8" style={{ background: 'white' }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#FF2D7A20' }}>
            <Sparkles size={14} className="text-[#FF2D7A]" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest" style={{color:"#FF12CF"}}><strong style={{fontWeight:900}}>IPPOO-KRAAFT</strong></span>
        </div>
        <h2 className="text-[20px] font-black text-[#111827] mb-3 leading-tight">Valorisez votre savoir-faire</h2>
        <p className="text-[#6B7280] text-[13px] leading-relaxed mb-5">
          <><strong style={{color:"#FF12CF",fontWeight:900}}>IPPOO-KRAAFT</strong> valorise les artisans et prestataires de services. Elle facilite la mise en relation entre clients et professionnels qualifiés, tout en valorisant leur savoir-faire et expertise. Que vous soyez électricien, plombier, couturier, photographe, développeur ou consultant, votre profil <strong style={{color:"#FF12CF",fontWeight:900}}>IPPOO-KRAAFT</strong> vous permet de trouver des clients au sein de l'écosystème.</>

        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { Icon: Camera, label: "Photographes", color: "#FF2D7A" },
            { Icon: Settings, label: "Techniciens", color: "#3B45D0" },
            { Icon: Shirt, label: "Couturiers", color: "#7C3AED" },
            { Icon: Smartphone, label: "Développeurs", color: "#16A34A" },
            { Icon: Coffee, label: "Restaurateurs", color: "#D4AF37" },
            { Icon: Music, label: "Artistes", color: "#E10600" },
          ].map(({ Icon, label, color }) => (
            <div key={label} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: `${color}10`, border: `1px solid ${color}20` }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${color}20` }}>
                <Icon size={14} style={{ color }} />
              </div>
              <p className="font-semibold text-[13px] text-[#374151]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-only Fashion Bizz banner */}
      <div className="md:hidden w-full">
        <img src={imgAfcFashionBizz2} alt="IPPOO Fashion Bizz" className="w-full h-auto block" />
        <div className="px-5 py-5" style={{ background: '#0d0010' }}>
          <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: '#FF2D7A' }}>Fashion Bizz</span>
          <h2 className="text-white font-black text-[22px] leading-tight mb-2">
            Le style africain<br />à votre <span style={{ color: '#FF2D7A' }}>portée.</span>
          </h2>
          <p className="text-white/65 text-[13px] leading-relaxed mb-4">
            <IpHL text="IPPOO Fashion Bizz est l'espace où style, créativité et opportunités se rencontrent. Créateurs, vendeurs, passionnés de mode - donnez vie à votre univers." color="#FF2D7A" />
          </p>
          <a href="https://fashion.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-[13px] font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #FF2D7A, #7C3AED)', boxShadow: '0 6px 20px rgba(255,45,122,0.4)' }}>
            Explorer IPPOO-FASHION <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="px-4 pb-8 pt-6 space-y-3">
        <a href="mailto:ippooz.up.2@gmail.com"
          className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white"
          style={{ background: "linear-gradient(135deg, #3B45D0, #7C3AED)", boxShadow: "0 8px 24px rgba(59,69,208,0.4)" }}>
          <Mail size={16} /> Publier une offre / trouver un emploi
        </a>
        <a href="tel:+2290141521092"
          className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-semibold text-[#3B45D0]"
          style={{ background: "#3B45D010", border: "2px solid #3B45D025" }}>
          <Phone size={15} /> Nous contacter
        </a>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE MON COMPTE
══════════════════════════════════════════════════════════════ */
export function MonComptePage({ onBack, onNavigate }: { onBack: () => void; onNavigate?: (page: string) => void }) {
  const MENU = [
    { Icon: UserPlus, label: "Créer mon compte", desc: "Rejoignez l'écosystème IPPOO", color: "#FF2D7A", action: "adhesion" },
    { Icon: LogIn, label: "Accéder à mes espaces", desc: "Connectez-vous à vos plateformes actives...", color: "#2563EB", href: "https://socialfakt.ippoo-aptdc.com" },
    { Icon: Shield, label: "Mes assurances", desc: "Gérer vos contrats et souscriptions...", color: "#E10600", href: "https://insurance.aptdc-zup2.com" },
    { Icon: Wallet, label: "Mon portefeuille IPPOO-KAASH", desc: "Consulter votre solde et vos transactions...", color: "#16A34A", action: "kaash" },
    { Icon: TrendingUp, label: "Mes investissements", desc: "Suivre vos placements CAPITAL-INVEST...", color: "#D4AF37", href: "https://kapital.aptdc-zup2.com" },
    { Icon: Users, label: "Mon groupement", desc: "Gérer votre groupement et ses membres...", color: "#7C3AED", action: "groupements" },
    { Icon: Gift, label: "Mes parrainages", desc: "Suivre vos gains et vos filleuls", color: "#FF6B35", action: "parrainage" },
    { Icon: BookOpen, label: "Mes formations", desc: "Inscriptions et certificats obtenus...", color: "#0891B2", action: "programmes" },
  ]
  return (
    <PageShell title="Mon Espace Membre" sub="Gérez votre compte, vos services et vos avantages depuis un seul endroit." color="#FF2D7A" heroImage={imgH16} onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["Gratuit", "Accès"], ["21", "Espaces"], ["Sécurisé", "Compte"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#FF2D7A', boxShadow: '0 6px 24px rgba(255,45,122,0.45)' }}>
            <Phone size={15} /> Se connecter
          </a>
          {onNavigate ? (
            <button onClick={() => onNavigate('adhesion')}
              className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70 w-full"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
              <UserPlus size={14} /> {"M'inscrire"}
            </button>
          ) : (
            <a href="tel:+2290141521092"
              className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
              <UserPlus size={14} /> {"M'inscrire"}
            </a>
          )}
        </div>
      }
    >
      <div className="px-4 py-5">
        <div className="rounded-3xl p-5 mb-5" style={{ background: "linear-gradient(135deg, #FF2D7A, #E10600)" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center"><Users size={28} className="text-white" /></div>
            <div><p className="text-white font-black text-[18px]">Membre <Ip /></p><p className="text-white/65 text-[13px]">Connectez-vous pour accéder à votre espace</p></div>
          </div>
          <div className="flex gap-3">
            <a href="tel:+2290141521092" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-bold" style={{ background: "white", color: "#E10600" }}><Phone size={13} /> Se connecter</a>
            <button onClick={() => onNavigate?.("adhesion")} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-bold text-white" style={{ background: "rgba(255,255,255,0.2)", border: "1.5px solid #FFE600" }}><UserPlus size={13} /> M'inscrire</button>
          </div>
        </div>
        <h2 className="text-[18px] font-black text-[#111827] mb-3">Mes services</h2>
        <div className="space-y-2.5">
          {MENU.map(({ Icon, label, desc, color, action, href }) => (
            <div key={label} className="flex items-center gap-4 p-4 rounded-2xl bg-white cursor-pointer" style={{ border: `1px solid ${color}20`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              onClick={() => { if (action && onNavigate) onNavigate(action); else if (href && href !== "#") window.open(href, "_blank") }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}><Icon size={20} style={{ color }} /></div>
              <div className="flex-1 min-w-0"><p className="font-bold text-[14px] text-[#111827]">{label}</p><p className="text-[#9CA3AF] text-[11px] mt-0.5">{desc}</p></div>
              <ChevronRight size={15} className="text-[#D1D5DB] shrink-0" />
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 pb-8">
        <div className="rounded-3xl p-5 text-center" style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
          <Headphones size={24} className="text-[#FF2D7A] mx-auto mb-2" />
          <p className="font-bold text-[15px] text-[#111827] mb-1">Besoin d'aide ?</p>
          <p className="text-[#6B7280] text-[13px] mb-4">Notre équipe support est disponible 7j/7</p>
          <a href="https://wa.me/2290141521092" className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[14px] font-bold text-white" style={{ background: "#25D366" }}><MessageCircle size={14} /> Contacter le support</a>
        </div>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE SOUSCRIPTIONS
══════════════════════════════════════════════════════════════ */
export function SouscriptionsPage({ onBack }: { onBack: () => void }) {
  const CATS = [
    { category: "Assurance", Icon: Shield, color: "#FF72E2", items: [{ name: "Micro-assurance Santé", price: "500 FCFA/mois", url: "https://insurance.aptdc-zup2.com" }, { name: "Assurance Automobile", price: "À partir de 15 000 FCFA/an", url: "https://insurance.aptdc-zup2.com" }, { name: "Assurance Agricole", price: "1 200 FCFA/mois", url: "https://insurance.aptdc-zup2.com" }, { name: "Assurance Professionnelle", price: "Sur devis", url: "https://insurance.aptdc-zup2.com" }] },
    { category: "Finance", Icon: TrendingUp, color: "#16A34A", items: [{ name: "Épargne CAPITAL-INVEST", price: "À partir de 5 000 FCFA", url: "https://kapital.aptdc-zup2.com" }, { name: "Microcrédit Productif", price: "Taux négociés", url: "https://financial.aptdc-zup2.com" }, { name: "Portefeuille IPPOO-KAASH", price: "Pré-inscription ouverte", url: "https://wa.me/2290141521092?text=Je%20souhaite%20pre-m'inscrire%20pour%20KAASH" }] },
    { category: "Commerce", Icon: ShoppingCart, color: "#E9DB64", items: [{ name: "Corner MARKET", price: "2 000 FCFA/mois", url: "https://market.ippoo-aptdc.com" }, { name: "Boutique SHUUP", price: "3 500 FCFA/mois", url: "https://shuup.ippoo-aptdc.com" }, { name: "Vitrine KRAAFT", price: "1 500 FCFA/mois", url: "https://kraaft.ippoo-aptdc.com" }] },
    { category: "Adhésion", Icon: Star, color: "#FF2D7A", items: [{ name: "Offre de base (obligatoire)", price: "750 FCFA/jour · 31j + 1 500 FCFA carte", url: "tel:+2290141521092" }, { name: "Couverture complémentaire", price: "350 FCFA/jour · par couverture", url: "tel:+2290141521092" }] },
  ]
  return (
    <PageShell title="Souscriptions & Tarifs" sub="Tous les produits et services IPPOO disponibles à la souscription, avec leurs tarifs et conditions d'accès." color="#FF2D7A" heroImage={imgH17} onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["21", "Services"], ["750 FCFA", "Base/jour"], ["350 FCFA", "Compl./jour"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#FF2D7A', boxShadow: '0 6px 24px rgba(255,45,122,0.45)' }}>
            <Phone size={15} /> Souscrire maintenant
          </a>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      }
    >
      <div className="px-4 py-6 space-y-6">
        {CATS.map(({ category, Icon, color, items }) => (
          <div key={category}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${color}20` }}><Icon size={16} style={{ color }} /></div>
              <h2 className="text-[16px] font-black text-[#111827]">{category}</h2>
            </div>
            <div className="space-y-2">
              {items.map(({ name, price, url }) => (
                <a key={name} href={url} target={url.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white" style={{ border: `1px solid ${color}20` }}>
                  <div><p className="font-bold text-[14px] text-[#111827]">{name}</p><p className="font-black text-[13px] mt-0.5" style={{ color }}>{price}</p></div>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${color}15` }}><ArrowRight size={14} style={{ color }} /></div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* ── Fonctionnement des souscriptions ── */}
      <div className="px-4 py-8" style={{ background: '#FFFBF0' }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#FF2D7A15' }}>
            <Info size={14} className="text-[#FF2D7A]" />
          </div>
          <span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">Comment ça fonctionne</span>
        </div>
        <h2 className="text-[20px] font-black text-[#111827] mb-4 leading-tight">Fonctionnement des souscriptions aux couvertures <Ip /></h2>

        <div className="space-y-4 mb-6">
          <p className="text-[#374151] text-[13px] leading-relaxed">
            <IpHL text="Le système de souscription aux couvertures IPPOO repose sur un principe de cotisation journalière, permettant à chaque adhérent de bénéficier progressivement d'un ensemble de services d'assistance et d'assurance. L'offre de base constitue la porte d'entrée obligatoire pour tous les nouveaux souscripteurs." color="#FF2D7A" />
          </p>

          <div className="rounded-2xl p-4" style={{ background: 'white', border: '2px solid #FF2D7A20' }}>
            <p className="text-[#FF2D7A] font-black text-[14px] mb-2">Offre de base obligatoire</p>
            <p className="text-[#374151] text-[13px] leading-relaxed mb-3">
              <strong className="text-[#111827]">750 FCFA/jour × 31 jours</strong> + <strong className="text-[#111827]">1 500 FCFA</strong> (frais de délivrance de la carte d'adhésion et frais de gestion administrative).
            </p>
            <div className="space-y-1.5">
              {["Assistance administrative", "Assistance juridique", "Assistance comptable et fiscale", "Assurance sanitaire de base (médecine générale, maladies courantes)"].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={11} className="text-[#FF2D7A] shrink-0" />
                  <span className="text-[#374151] text-[12px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-4" style={{ background: 'white', border: '2px solid #7C3AED20' }}>
            <p className="text-[#7C3AED] font-black text-[14px] mb-2">Couvertures complémentaires</p>
            <p className="text-[#374151] text-[13px] leading-relaxed mb-3">
              Après validation de l'offre de base, chaque adhérent peut ajouter une ou plusieurs protections : <strong className="text-[#111827]">350 FCFA/jour × 31 jours par couverture</strong>.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Marchandises","Habitation","Éducation","Transport","Matériels & outillage","Automobile"].map(c => (
                <span key={c} className="px-2.5 py-1 rounded-full text-[11px] font-semibold" style={{ background: '#7C3AED12', color: '#7C3AED' }}>{c}</span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-4" style={{ background: 'white', border: '1px solid #D4AF3730' }}>
            <p className="text-[#D4AF37] font-black text-[13px] mb-1">Délai de carence - 6 mois</p>
            <p className="text-[#6B7280] text-[12px] leading-relaxed">Les couvertures deviennent pleinement actives après <strong className="text-[#111827]">6 mois de cotisation continue</strong>. Ce délai garantit l'équilibre financier du fonds de solidarité.</p>
          </div>

          <div className="rounded-2xl p-4" style={{ background: 'white', border: '1px solid #16A34A30' }}>
            <p className="text-[#16A34A] font-black text-[13px] mb-1">Groupement solidaire obligatoire</p>
            <p className="text-[#6B7280] text-[12px] leading-relaxed">Toute adhésion est rattachée à un groupement de <strong className="text-[#111827]">7 membres</strong>. Chaque membre s'engage à parrainer 7 nouveaux adhérents par semaine pour renforcer le fonds de solidarité.</p>
          </div>
        </div>

        <h3 className="text-[17px] font-black text-[#111827] mb-3">Conditions générales - Résumé</h3>
        <div className="space-y-3">
          {[
            { n: "1", t: "Principe général", c: "#FF2D7A", d: "Système de protection solidaire associant services d'assistance, assurances et mécanisme de cotisation évolutive. L'offre de base est la condition préalable à toute couverture." },
            { n: "2", t: "Maintien des droits", c: "#2563EB", d: "Le bénéfice des couvertures est conditionné au paiement régulier des cotisations. Tout retard ou interruption peut entraîner la suspension temporaire des garanties." },
            { n: "3", t: "Philosophie du programme", c: "#16A34A", d: "Solidarité, responsabilité individuelle, engagement communautaire et mutualisation des ressources. Chaque cotisation contribue à la protection personnelle et au fonds collectif de solidarité de l'écosystème IPPOO." },
          ].map(({ n, t, c, d }) => (
            <div key={n} className="rounded-2xl p-4 flex gap-3" style={{ background: 'white', border: `1px solid ${c}18` }}>
              <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 font-black text-[12px] text-white" style={{ background: c }}>{n}</div>
              <div><p className="font-bold text-[13px] text-[#111827] mb-0.5">{t}</p><p className="text-[#6B7280] text-[12px] leading-relaxed">{d}</p></div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-8">
        <div className="rounded-3xl p-5" style={{ background: "linear-gradient(135deg, #111827, #1F2937)" }}>
          <p className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest mb-2">Offre groupement</p>
          <h3 className="text-white font-black text-[18px] mb-2">Tarifs collectifs disponibles</h3>
          <p className="text-white/55 text-[13px] mb-4">Pour les groupements de 7 membres et plus, des conditions adaptées sont disponibles.</p>
          <a href="tel:+2290141521092" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold" style={{ background: "white", color: "#111827" }}><Phone size={14} /> Demander un devis groupement</a>
        </div>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE KAASH - Portefeuille numérique
══════════════════════════════════════════════════════════════ */
export function KaashPage({ onBack }: { onBack: () => void }) {
  const FONCTIONNALITES = [
    { Icon: Wallet, title: "Portefeuille numérique intégré", desc: "Recevez, envoyez, conservez et dépensez votre argent depuis votre mobile. IPPOO-KAASH est le cœur financier de l'écosystème IPPOO : un compte unique connecté à tous vos espaces.", color: "#16A34A" },
    { Icon: Coins, title: "Transferts instantanes", desc: "Transferez de l'argent a tout membre IPPOO en quelques secondes. Aucun frais pour les transferts internes, tarifs competitifs pour les envois externes et vers la diaspora.", color: "#2563EB" },
    { Icon: ShoppingCart, title: "Paiement sur tous les espaces", desc: "Payez vos achats sur IPPOO MARKET, SHUUP, KRAAFT et tous les espaces directement depuis KAASH. Un seul solde, un seul clic, zero friction...", color: "#FF2D7A" },
    { Icon: TrendingUp, title: "Encaissement et revenus", desc: "Recevez les paiements de vos clients, vos gains de parrainage, vos remboursements assurance et vos revenus IPPOO-WORKS directement dans votre portefeuille IPPOO-KAASH...", color: "#D4AF37" },
    { Icon: Shield, title: "Sécurité bancaire", desc: "Chiffrement de bout en bout, authentification biométrique, alertes en temps réel et plafonds personnalisables. Votre argent est protégé comme dans une banque...", color: "#7C3AED" },
    { Icon: Globe, title: "Connexion Mobile Money", desc: "Compatible MTN Mobile Money, Moov Money et Airtel Money. Rechargez et retirez depuis n'importe quel point partenaire ou directement via votre operateur.", color: "#E10600" },
  ]
  const USAGES = [
    { scenario: "Payer votre abonnement IPPOO", Icon: Star, color: "#FF2D7A" },
    { scenario: "Recevoir vos gains de parrainage", Icon: Gift, color: "#D4AF37" },
    { scenario: "Acheter sur IPPOO MARKET", Icon: ShoppingCart, color: "#16A34A" },
    { scenario: "Payer votre micro-assurance", Icon: Shield, color: "#E10600" },
    { scenario: "Envoyer de l'argent a un proche", Icon: Users, color: "#2563EB" },
    { scenario: "Recevoir un virement de la diaspora", Icon: Globe, color: "#7C3AED" },
    { scenario: "Encaisser vos ventes IPPOO-KRAAFT", Icon: Briefcase, color: "#FF2D7A" },
    { scenario: "Retirer en cash via Mobile Money", Icon: Coins, color: "#16A34A" },
  ]
  const ETAPES = [
    { n: "01", title: "Pré-inscrivez-vous", desc: "Renseignez votre numéro de téléphone et votre profil IPPOO. La pré-inscription prend moins d'une minute.", color: "#FF2D7A", time: "1 min" },
    { n: "02", title: "Validation KYC simplifiée", desc: "Vérifiez votre identité avec une pièce d'identité valide. Processus simplifié, adapté aux acteurs de l'informel.", color: "#2563EB", time: "24h" },
    { n: "03", title: "Activation du portefeuille", desc: "Votre compte IPPOO-KAASH est activé. Rechargez-le via Mobile Money ou en espèces chez un point partenaire IPPOO...", color: "#16A34A", time: "Immédiat" },
    { n: "04", title: "Utilisez KAASH partout", desc: "Payez, envoyez, recevez et retirez sur tous les espaces IPPOO et chez les commercants partenaires...", color: "#D4AF37", time: "Continu" },
  ]
  return (
    <PageShell title="KAASH - Portefeuille IPPOO" sub="Le portefeuille numérique intégré à l'écosystème IPPOO. Payez, recevez, transférez et gérez vos finances depuis votre mobile." color="#16A34A" heroImage={imgH18} onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["0 FCFA", "Frais"], ["Instantané", "Transfert"], ["100%", "Sécurisé"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white mb-2"
            style={{ background: '#16A34A', boxShadow: '0 6px 24px rgba(22,163,74,0.45)' }}>
            <MessageCircle size={15} /> {"Pre-inscription WhatsApp"}
          </a>
          <a href="tel:+2290141521092"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <Phone size={14} /> +229 01 41 52 10 92
          </a>
        </div>
      }
    >
      <div className="px-4 py-6">
        <div className="rounded-3xl overflow-hidden relative" style={{ background: "linear-gradient(145deg, #111827, #1F2937)", minHeight: "200px" }}>
          <div className="relative z-10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #16A34A, #059669)" }}>
                <Wallet size={28} className="text-white" />
              </div>
              <div>
                <p className="text-white font-black text-[24px] leading-none">KAASH</p>
                <p className="text-white/50 text-[12px] mt-0.5">Portefeuille numérique <Ip /></p>
              </div>
            </div>
            <p className="text-white/70 text-[14px] leading-relaxed mb-5">IPPOO-KAASH est le portefeuille numérique au cœur de l'écosystème <Ip />. Il permet de gérer toutes vos finances en un seul endroit : paiements, transferts, encaissements et retraits.</p>
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[["0 FCFA", "Frais internes"], ["Instant", "Transferts"], ["100%", "Sécurisé"]].map(([v, l]) => (
                <div key={l} className="rounded-2xl p-3 text-center" style={{ background: "rgba(255,255,255,0.07)" }}>
                  <p className="text-white font-black text-[15px]">{v}</p>
                  <p className="text-white/40 text-[10px] mt-0.5">{l}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl px-4 py-3 flex items-center gap-3" style={{ background: "rgba(22,163,74,0.2)", border: "1px solid rgba(22,163,74,0.3)" }}>
              <div className="w-2 h-2 rounded-full bg-[#4ADE80] shrink-0" />
              <p className="text-[#4ADE80] text-[12px] font-bold">Déploiement en cours - Pré-inscription disponible</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-4">
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Ce que IPPOO-KAASH vous offre</h2>
        <div className="space-y-3">
          {FONCTIONNALITES.map(({ Icon, title, desc, color }) => (
            <div key={title} className="flex items-start gap-4 p-4 rounded-2xl bg-white" style={{ border: `1px solid ${color}20` }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}><Icon size={20} style={{ color }} /></div>
              <div><p className="font-bold text-[14px] text-[#111827] mb-1">{title}</p><p className="text-[#6B7280] text-[12px] leading-relaxed"><IpHL text={desc} color={color} /></p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-6" style={{ background: "#F9FAFB" }}>
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Cas d'usage quotidiens</h2>
        <div className="grid grid-cols-2 gap-2.5">
          {USAGES.map(({ scenario, Icon, color }) => (
            <div key={scenario} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white" style={{ border: `1px solid ${color}18` }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}><Icon size={14} style={{ color }} /></div>
              <p className="text-[12px] font-semibold text-[#374151] leading-snug"><IpHL text={scenario} color={color} /></p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-6">
        <h2 className="text-[20px] font-black text-[#111827] mb-5">Comment ouvrir votre IPPOO-KAASH ?</h2>
        <div className="space-y-4">
          {ETAPES.map((step, i) => (
            <div key={step.n} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 font-black text-[13px] text-white" style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)` }}>{step.n}</div>
                {i < ETAPES.length - 1 && <div className="w-0.5 flex-1 mt-2" style={{ background: `${step.color}30` }} />}
              </div>
              <div className="pb-4 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-black text-[15px] text-[#111827]">{step.title}</p>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ background: step.color }}>{step.time}</span>
                </div>
                <p className="text-[#6B7280] text-[13px] leading-relaxed"><IpHL text={step.desc} color={step.color} /></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-6" style={{ background: "linear-gradient(135deg, #111827, #1F2937)" }}>
        <div className="flex items-center gap-2 mb-4"><Shield size={16} className="text-[#16A34A]" /><span className="text-[#16A34A] text-[11px] font-bold uppercase tracking-widest">Sécurité</span></div>
        <h3 className="text-white font-black text-[20px] mb-3 leading-tight">Votre argent protege comme dans une banque.</h3>
        <div className="space-y-2.5">
          {["Chiffrement AES-256 de toutes les transactions", "Authentification a deux facteurs (2FA) obligatoire", "Alertes SMS et push sur chaque mouvement", "Plafonds de transaction personnalisables", "Gel immediat du compte sur demande", "Conformite aux normes BCEAO"].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-2xl" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(22,163,74,0.25)" }}><Check size={12} className="text-[#4ADE80]" /></div>
              <p className="text-white/75 text-[13px]">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-6">
        <h2 className="text-[20px] font-black text-[#111827] mb-4">Operateurs compatibles</h2>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[{ name: "MTN MoMo", color: "#FFCC00", bg: "#FFFBEB" }, { name: "Moov Money", color: "#0056A6", bg: "#EFF6FF" }, { name: "Airtel Money", color: "#E10600", bg: "#FEF2F2" }].map(({ name, color, bg }) => (
            <div key={name} className="rounded-2xl p-4 text-center" style={{ background: bg, border: `1px solid ${color}25` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ background: `${color}20` }}><Coins size={18} style={{ color }} /></div>
              <p className="font-bold text-[11px] text-[#111827]">{name}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-4" style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
          <p className="text-[#16A34A] text-[13px] font-semibold leading-relaxed">D'autres opérateurs seront progressivement intégrés au déploiement de KAASH dans les pays partenaires d'<Ip />.</p>
        </div>
      </div>
      <div className="px-4 pb-8 space-y-3">
        <a href="https://wa.me/2290141521092?text=Je%20souhaite%20me%20pre-inscrire%20pour%20KAASH" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white" style={{ background: "linear-gradient(135deg, #16A34A, #059669)", boxShadow: "0 8px 24px rgba(22,163,74,0.4)" }}><MessageCircle size={16} /> Pré-m'inscrire sur WhatsApp</a>
        <a href="tel:+2290141521092" className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-semibold text-[#16A34A]" style={{ background: "#16A34A10", border: "2px solid #16A34A25" }}><Phone size={15} /> Appeler le +229 01 41 52 10 92</a>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE BOURSE DES VALEURS IPPOO
══════════════════════════════════════════════════════════════ */
export function BourseValeurPage({ onBack }: { onBack: () => void }) {
  const GOLD = '#D4AF37'
  const PINK = '#FF12CF'
  const [formData, setFormData] = useState({
    nom: '', entreprise: '', profil: '', secteur: '', ville: '', tel: '', email: '', objet: '', message: '', consent: false,
  })
  const [sent, setSent] = useState(false)

  const STEPS = [
    { n: '01', title: 'Inscription', desc: "L'acteur économique ou le groupement crée son profil et renseigne les informations essentielles concernant son activité.", color: '#D4AF37' },
    { n: '02', title: 'Collecte des données', desc: "Les informations relatives à l'activité sont collectées : ancienneté, régularité, volume d'activité, production, clientèle...", color: '#FF12CF' },
    { n: '03', title: 'Vérification', desc: "Les informations déclarées peuvent être contrôlées par les équipes ou agents habilités d'IPPOO selon les procédures établies.", color: '#16A34A' },
    { n: '04', title: 'Évaluation', desc: "Les données disponibles sont analysées afin d'établir un profil de performance économique et professionnelle.", color: '#0891B2' },
    { n: '05', title: 'Cotation', desc: "L'acteur reçoit une cotation de fiabilité IPPOO correspondant à son niveau de maturité, régularité et confiance établi.", color: '#7C3AED' },
    { n: '06', title: 'Accès aux opportunités', desc: "En fonction de son profil, l'acteur peut être orienté vers financement, assurance, équipements, formation, marchés ou partenariats.", color: '#E10600' },
  ]

  const US = (id: string, w = 480, h = 280) =>
    `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=85`

  const PROFILS = [
    { label: 'Artisans', desc: 'Menuisiers, couturiers, mécaniciens, soudeurs, coiffeurs et autres professionnels de l\'artisanat...', Icon: Cpu, color: '#FF12CF',
      img: US('photo-1687422810663-c316494f725a') },
    { label: 'Commerçants', desc: 'Les commerçants peuvent documenter leur activité, régularité et évolution pour développer leur visibilité...', Icon: ShoppingCart, color: '#D4AF37',
      img: US('photo-1687422809654-579d81c29d32') },
    { label: 'Producteurs', desc: 'Agriculteurs, éleveurs, pêcheurs peuvent valoriser leur capacité de production et leur potentiel de développement...', Icon: Leaf, color: '#16A34A',
      img: US('photo-1509099381441-ea3c0cf98b94') },
    { label: 'Prestataires', desc: 'Les professionnels indépendants peuvent présenter leur activité, expérience et historique de performance...', Icon: Briefcase, color: '#0891B2',
      img: US('photo-1563132337-f159f484226c') },
    { label: 'Transporteurs', desc: 'Les acteurs du transport peuvent intégrer leurs données d\'activité, régularité et niveau de fiabilité...', Icon: Truck, color: '#7C3AED',
      img: US('photo-1546388556-40e4b23d8392') },
    { label: 'Groupements', desc: 'Les organisations collectives peuvent être évaluées en tant que valeurs économiques collectives...', Icon: Users, color: '#E10600',
      img: US('photo-1637997840862-9aafaf835eed') },
  ]

  const CRITERIA = [
    "Stabilité de l'activité", "Régularité des revenus", "Volume de production ou services",
    "Ancienneté de l'activité", "Satisfaction de la clientèle", "Historique IPPOO",
    "Engagement en formation", "Régularité des contributions", "Qualité de la gestion",
    "Organisation du groupement", "Capacité de production", "Progression de l'activité",
    "Impact économique ou social",
  ]

  const OPPORTUNITIES = [
    { label: 'Microfinancement', desc: 'Des solutions de financement adaptées aux besoins des petites activités économiques.', Icon: Coins, color: '#D4AF37' },
    { label: 'Équipements', desc: 'Des possibilités de financement ou crédit pour l\'acquisition de machines, outils et matériels professionnels.', Icon: Cpu, color: '#FF12CF' },
    { label: 'Assurance', desc: 'Des programmes de protection et d\'assurance adaptés aux réalités des travailleurs du secteur informel.', Icon: Shield, color: '#0891B2' },
    { label: 'Accompagnement', desc: 'Des services permettant d\'améliorer la gestion, l\'organisation et la performance de l\'activité.', Icon: Handshake, color: '#16A34A' },
    { label: 'Marchés & Débouchés', desc: 'Une mise en relation avec des acheteurs, distributeurs, entreprises et autres acteurs économiques.', Icon: Globe, color: '#7C3AED' },
    { label: 'Partenariats', desc: 'Des possibilités de collaboration avec des institutions, investisseurs et structures de développement.', Icon: Network, color: '#E10600' },
  ]

  const IMPACTS = [
    { label: 'Visibilité économique', desc: 'Rendre visibles les activités qui participent quotidiennement à la création de richesse.', Icon: Eye, color: '#D4AF37' },
    { label: 'Confiance', desc: 'Créer des profils économiques reposant sur des informations structurées et vérifiées.', Icon: BadgeCheck, color: '#FF12CF' },
    { label: 'Inclusion financière', desc: 'Faciliter l\'orientation des acteurs vers les solutions financières et d\'accompagnement adaptées.', Icon: Wallet, color: '#16A34A' },
    { label: 'Développement local', desc: 'Encourager les investissements et partenariats au sein des économies locales.', Icon: TreePine, color: '#0891B2' },
    { label: 'Professionnalisation', desc: 'Accompagner progressivement les acteurs vers de meilleures pratiques de gestion.', Icon: Award, color: '#7C3AED' },
    { label: 'Création d\'opportunités', desc: 'Connecter les acteurs économiques avec des marchés, partenaires et programmes d\'appui.', Icon: Sparkles, color: '#E10600' },
  ]

  return (
    <PageShell
      title="Bourse des Valeurs IPPOO"
      sub="Valoriser l'économie informelle. Rendre visible la richesse locale."
      color="#D4AF37"
      gradient="linear-gradient(150deg, #0B0B14 0%, #1a1400 50%, #D4AF3744 100%)"
      heroImage={imgH17}
      onBack={onBack}
      heroChildren={
        <div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["Profils", "Acteurs valorisés"], ["Cotation", "IPPOO fiabilité"], ["100%", "Accompagnement"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(8px)', border: '1px solid rgba(212,175,55,0.25)' }}>
                <p className="text-white font-black text-[15px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide leading-snug">{l}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <a href="#bourse-form"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[13px] font-bold text-white min-h-[48px]"
              style={{ background: `linear-gradient(135deg, ${GOLD}, #B8860B)`, boxShadow: `0 6px 24px ${GOLD}55` }}>
              <TrendingUp size={14} /> Devenir une valeur
            </a>
            <a href="#bourse-form"
              className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-[13px] font-semibold text-white"
              style={{ background: 'rgba(255,255,255,0.1)', border: `1px solid ${GOLD}44` }}>
              <MessageCircle size={14} /> Contact
            </a>
          </div>
        </div>
      }
    >

      {/* ── INTRODUCTION ── */}
      <div className="px-4 py-7" style={{ background: '#FFF8F2' }}>
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
          <TrendingUp size={12} style={{ color: GOLD }} />
          <span className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: GOLD }}>Présentation</span>
          <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
        </div>
        <p className="text-[15px] leading-relaxed text-[#374151] mb-4">
          La <strong style={{ color: GOLD }}>Bourse des Valeurs <Ip /></strong> est une plateforme dédiée à la valorisation économique du secteur informel. Elle constitue l'un des projets les plus structurants de la vision globale d'<Ip /> en matière d'inclusion économique, de professionnalisation et d'accès aux opportunités.
        </p>
        <p className="text-[14px] leading-relaxed text-[#6B7280]">
          Son objectif : <strong style={{ color: GOLD }}>transformer les activités informelles en valeurs économiques visibles, mesurables et valorisables.</strong>
        </p>
        <div className="mt-5 rounded-2xl overflow-hidden relative" style={{ border: `1px solid ${GOLD}22` }}>
          <img
            src="https://images.unsplash.com/photo-1734255026082-82fdc81991f0?w=800&h=420&fit=crop&auto=format&q=85"
            alt="Groupement autour du marché, économie informelle"
            className="w-full h-[210px] object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)' }} />
          <div className="absolute bottom-0 inset-x-0 p-4">
            <p className="text-white/80 text-[11px] font-semibold leading-snug">Acteurs de l'économie informelle — marchés et groupements locaux</p>
          </div>
        </div>
      </div>

      {/* ── VISION (dark) ── */}
      <div className="px-4 py-8 relative overflow-hidden" style={{ background: '#0B0B14' }}>
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${GOLD}22, transparent)` }} />
        <div className="absolute bottom-0 -left-10 w-44 h-44 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${PINK}18, transparent)` }} />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px w-8" style={{ background: GOLD }} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: GOLD }}>Notre Vision</span>
          </div>
          <h2 className="font-black text-white leading-tight mb-4" style={{ fontSize: 'clamp(22px,6vw,30px)' }}>
            De l'invisibilité<br /><span style={{ color: GOLD }}>à la valorisation</span>
          </h2>
          <p className="text-white/65 text-[13px] leading-relaxed mb-4">
            Le secteur informel représente une part essentielle de l'activité économique et sociale. Il regroupe des millions d'acteurs qui produisent, transforment, vendent, transportent et fournissent des services au quotidien.
          </p>
          <p className="text-white/65 text-[13px] leading-relaxed mb-5">
            <IpHL text="IPPOO souhaite contribuer à changer cette situation. La Bourse des Valeurs permet de documenter, vérifier et valoriser progressivement la performance réelle d'une activité, même lorsque celle-ci ne dispose pas encore de tous les outils de gestion d'une entreprise formalisée." color={GOLD} />
          </p>
          <div className="rounded-2xl p-4 mb-5" style={{ background: `${GOLD}15`, border: `1px solid ${GOLD}30` }}>
            <p className="font-black text-[13px] leading-relaxed" style={{ color: GOLD }}>
              "Une bourse communautaire de valorisation et d'appui, dans laquelle la valeur économique repose sur l'activité réelle, la régularité, la fiabilité, la progression et l'impact."
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1509099342178-e323b1717dba?w=800&h=380&fit=crop&auto=format&q=85"
              alt="Productrice agricole, économie informelle africaine"
              className="w-full h-[190px] object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)' }} />
            <div className="absolute bottom-3 left-4 right-4">
              <p className="text-white font-semibold text-[12px] leading-snug">
                Derrière chaque activité, une richesse réelle et un potentiel à valoriser...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── COMMENT ÇA MARCHE ── */}
      <div className="px-4 py-8" style={{ background: '#FFF8F2' }}>
        <div className="flex items-center gap-2 mb-6">
          <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
          <span className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: GOLD }}>Fonctionnement</span>
          <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
        </div>
        <h2 className="text-[22px] font-black text-[#111827] mb-4">Un parcours simple,<br />progressif et vérifiable...</h2>
        <div className="relative rounded-2xl overflow-hidden mb-6">
          <img
            src="https://images.unsplash.com/photo-1687422808289-e721259c9eb4?w=800&h=340&fit=crop&auto=format&q=85"
            alt="Artisan couturier africain au travail"
            className="w-full h-[170px] object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.35) 0%, rgba(0,0,0,0.55) 100%)' }} />
          <div className="absolute inset-0 flex flex-col justify-center px-5">
            <p className="text-white font-black text-[16px] leading-tight mb-1">6 étapes vers la valorisation</p>
            <p className="text-white/70 text-[12px]">De l'inscription à l'accès aux opportunités...</p>
          </div>
        </div>
        <div className="space-y-3">
          {STEPS.map((step) => (
            <div key={step.n} className="flex gap-3 rounded-2xl p-4"
              style={{ background: 'white', border: `1px solid ${step.color}18`, boxShadow: `0 2px 12px rgba(0,0,0,0.04)` }}>
              <div className="shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center font-black text-[11px] text-white"
                style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}AA)`, boxShadow: `0 4px 12px ${step.color}44` }}>
                {step.n}
              </div>
              <div>
                <p className="font-bold text-[14px] text-[#111827] mb-0.5">{step.title}</p>
                <p className="text-[#6B7280] text-[12px] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── QUI PEUT ÊTRE UNE VALEUR ── */}
      <div className="py-8 px-4" style={{ background: 'white' }}>
        <div className="flex items-center gap-2 mb-2">
          <Users size={14} style={{ color: GOLD }} />
          <span className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: GOLD }}>Éligibilité</span>
        </div>
        <h2 className="text-[22px] font-black text-[#111827] mb-1">Qui peut être<br />une valeur <Ip /> ?</h2>
        <p className="text-[#6B7280] text-[13px] mb-5">La Bourse des Valeurs est ouverte à différents profils économiques.</p>
        <div className="grid grid-cols-2 gap-3">
          {PROFILS.map(({ label, desc, Icon: LIcon, color, img }) => (
            <div key={label} className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${color}25`, boxShadow: `0 4px 16px ${color}10` }}>
              <div className="relative h-[110px] overflow-hidden">
                <img src={img} alt={label} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.55) 100%)` }} />
                <div className="absolute bottom-2 left-2.5">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: color, boxShadow: `0 2px 8px ${color}66` }}>
                    <LIcon size={14} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-3" style={{ background: `${color}06` }}>
                <p className="font-black text-[13px] text-[#111827] mb-1">{label}</p>
                <p className="text-[#9CA3AF] text-[11px] leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LA COTATION IPPOO ── */}
      <div className="px-4 py-8 relative overflow-hidden" style={{ background: '#0B0B14' }}>
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${GOLD}1A, transparent)` }} />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px w-8" style={{ background: GOLD }} />
            <span className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: GOLD }}>Cotation</span>
          </div>
          <h2 className="font-black text-white leading-tight mb-2" style={{ fontSize: '22px' }}>
            Un nouveau langage de<br /><span style={{ color: GOLD }}>confiance économique</span>
          </h2>
          <p className="text-white/60 text-[13px] leading-relaxed mb-6">
            La <strong style={{ color: GOLD }}>cotation <Ip /></strong> constitue un indicateur synthétique représentant le niveau de fiabilité et de maturité économique d'un acteur ou d'un groupement.
          </p>

          {/* Sample profile card */}
          <div className="rounded-3xl overflow-hidden mb-6" style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${GOLD}30` }}>
            {/* Portrait photo header */}
            <div className="relative h-[130px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563132337-f159f484226c?w=800&h=400&fit=crop&auto=format&q=85&crop=top"
                alt="Entrepreneur africaine — profil coté"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)' }} />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: GOLD }}>Exemple de profil</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white flex items-center gap-1" style={{ background: '#16A34A' }}>
                  <Check size={8} /> Profil vérifié
                </span>
              </div>
            </div>
            <div className="px-4 pt-3 pb-3" style={{ background: `linear-gradient(135deg, ${GOLD}18, ${GOLD}06)` }}>
              <div className="flex items-end gap-3">
                <div>
                  <p className="font-black text-[48px] leading-none" style={{ color: GOLD }}>82</p>
                  <p className="text-white/40 text-[11px]">/ 100</p>
                </div>
                <div className="pb-1">
                  <p className="text-white font-bold text-[16px] leading-tight">Très fiable</p>
                  <p className="text-white/50 text-[11px]">Score de fiabilité IPPOO</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 grid grid-cols-2 gap-2">
              {[["Activité", "Transformation agroalim."], ["Ancienneté", "6 ans"], ["Zone", "Cotonou"], ["Statut", "Vérifié ✓"]].map(([k, v]) => (
                <div key={k} className="rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <p className="text-white/35 text-[10px] uppercase tracking-wide">{k}</p>
                  <p className="text-white text-[12px] font-semibold mt-0.5">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-white/50 text-[12px] mb-3 uppercase tracking-wider font-bold">La cotation peut prendre en compte...</p>
          <div className="space-y-1.5">
            {CRITERIA.map((c) => (
              <div key={c} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: `${GOLD}25`, border: `1px solid ${GOLD}40` }}>
                  <Check size={9} style={{ color: GOLD }} />
                </div>
                <p className="text-white/65 text-[12px]">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OPPORTUNITÉS ── */}
      <div className="px-4 py-8" style={{ background: '#FFF8F2' }}>
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={14} style={{ color: GOLD }} />
          <span className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: GOLD }}>Débouchés</span>
        </div>
        <h2 className="text-[22px] font-black text-[#111827] mb-1">Transformer la visibilité<br />en opportunités...</h2>
        <p className="text-[#6B7280] text-[13px] mb-5">Selon leur profil, les membres peuvent être orientés vers différentes solutions.</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {OPPORTUNITIES.map(({ label, desc, Icon: LIcon, color }) => (
            <div key={label} className="rounded-2xl p-4"
              style={{ background: 'white', border: `1px solid ${color}18`, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${color}15` }}>
                <LIcon size={17} style={{ color }} />
              </div>
              <p className="font-black text-[13px] text-[#111827] mb-1">{label}</p>
              <p className="text-[#9CA3AF] text-[11px] leading-snug">{desc}</p>
            </div>
          ))}
        </div>
        {/* Bouton KAPITAL-INVEST */}
        <a
          href="https://kapital.aptdc-zup2.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 px-4 py-4 rounded-2xl mb-4"
          style={{ background: 'linear-gradient(135deg, #0B0B14 0%, #1a1400 100%)', border: `1.5px solid ${GOLD}55`, boxShadow: `0 6px 24px ${GOLD}22` }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `linear-gradient(135deg, ${GOLD}, #B8860B)`, boxShadow: `0 4px 12px ${GOLD}55` }}>
              <TrendingUp size={18} className="text-black" />
            </div>
            <div>
              <p className="font-black text-white text-[13px] leading-tight">
                <strong style={{ color: GOLD }}>IPPOO-KAPITAL INVEST</strong>
              </p>
              <p className="text-white/50 text-[11px] mt-0.5">Épargne · Investissement · Financement</p>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0 px-3 py-1.5 rounded-full"
            style={{ background: GOLD }}>
            <span className="text-[10px] font-black text-black uppercase tracking-wide">Visiter</span>
            <ArrowRight size={11} className="text-black" />
          </div>
        </a>
        <div className="rounded-2xl p-4" style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30` }}>
          <p className="text-[12px] leading-relaxed" style={{ color: '#6B7280' }}>
            <strong style={{ color: GOLD }}>Note :</strong> La cotation ne garantit pas l'obtention automatique d'un financement. Elle constitue un élément d'appréciation permettant de faciliter l'orientation vers les dispositifs appropriés.
          </p>
        </div>
      </div>

      {/* ── LA BOURSE DES OPPORTUNITÉS ── */}
      <div className="px-4 py-7" style={{ background: 'white' }}>
        <div className="relative rounded-3xl overflow-hidden mb-5">
          <img
            src="https://images.unsplash.com/photo-1677594332964-b1199e6e7928?w=800&h=420&fit=crop&auto=format&q=85"
            alt="Réseau de partenaires et acteurs économiques"
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)' }} />
          <div className="absolute inset-0 p-5 flex flex-col justify-end">
            <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: GOLD }}>Bourse des Opportunités</p>
            <h3 className="text-white font-black text-[18px] leading-tight">Des besoins transformés<br />en projets...</h3>
          </div>
        </div>
        <p className="text-[#374151] text-[13px] leading-relaxed mb-3">Un acteur peut y présenter un besoin de financement, un projet d'expansion, un besoin d'équipement, une capacité de production à valoriser, une recherche de débouchés ou de partenaire...</p>
        <div className="grid grid-cols-2 gap-2">
          {["Besoin de financement","Projet d'expansion","Recherche de partenaire","Capacité de production","Mise en relation","Accompagnement"].map(item => (
            <div key={item} className="flex items-center gap-2 rounded-xl px-3 py-2.5"
              style={{ background: '#FFF8F2', border: `1px solid ${GOLD}20` }}>
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: GOLD }} />
              <p className="text-[11px] font-semibold text-[#374151]">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── IMPACT ── */}
      <div className="px-4 py-8" style={{ background: '#0B0B14' }}>
        <div className="flex items-center gap-2 mb-5">
          <div className="h-px w-8" style={{ background: GOLD }} />
          <span className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: GOLD }}>Notre Impact</span>
        </div>
        <h2 className="font-black text-white text-[22px] leading-tight mb-6">
          Rendre la richesse<br /><span style={{ color: GOLD }}>locale visible...</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {IMPACTS.map(({ label, desc, Icon: LIcon, color }) => (
            <div key={label} className="rounded-2xl p-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${color}20` }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${color}20` }}>
                <LIcon size={17} style={{ color }} />
              </div>
              <p className="font-black text-[12px] text-white mb-1">{label}</p>
              <p className="text-white/40 text-[11px] leading-snug">{desc}</p>
            </div>
          ))}
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1755705152670-0cfe7829fd0e?w=900&h=600&fit=crop&auto=format&q=85"
            alt="Communauté d'acteurs économiques, secteur informel africain"
            className="w-full object-cover object-center"
            style={{ height: 'clamp(220px, 55vw, 320px)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 60%)' }} />
          <div className="absolute bottom-0 inset-x-0 p-4">
            <p className="text-white font-black text-[15px] leading-tight mb-1" style={{ color: GOLD }}>
              La richesse existe déjà.
            </p>
            <p className="text-white/70 text-[12px]">Nous contribuons à la rendre visible et valorisée...</p>
          </div>
        </div>
      </div>

      {/* ── PROGRESSION ── */}
      <div className="px-4 py-8" style={{ background: '#FFF8F2' }}>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={14} style={{ color: GOLD }} />
          <span className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: GOLD }}>De l'informel à la formalisation</span>
        </div>
        <h2 className="text-[20px] font-black text-[#111827] mb-3">Une progression par étapes...</h2>
        <div className="flex items-center gap-1 flex-wrap mb-5">
          {["Identifier","Documenter","Évaluer","Améliorer","Structurer","Formaliser"].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-1">
              <span className="px-3 py-1.5 rounded-full text-[11px] font-bold"
                style={{ background: i === arr.length - 1 ? GOLD : `${GOLD}18`, color: i === arr.length - 1 ? '#111827' : GOLD }}>
                {step}
              </span>
              {i < arr.length - 1 && <span style={{ color: GOLD, fontSize: '10px' }}>→</span>}
            </div>
          ))}
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1575303093127-18b3c4ef8c41?w=900&h=700&fit=crop&auto=format&q=85"
            alt="Commerçante de produits agricoles au marché local"
            className="w-full object-cover object-center"
            style={{ height: 'clamp(240px, 60vw, 340px)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)' }} />
          <div className="absolute bottom-0 inset-x-0 p-4">
            <p className="text-white text-[12px] font-semibold leading-snug">Une professionnalisation progressive et adaptée à la réalité de chaque acteur...</p>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="px-4 py-8 relative overflow-hidden" style={{ background: `linear-gradient(150deg, ${GOLD} 0%, #B8860B 100%)` }}>
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <div className="relative z-10">
          <h2 className="font-black text-[#111827] text-[24px] leading-tight mb-3">
            Devenez une<br />valeur cotée <Ip />
          </h2>
          <p className="text-[#111827]/70 text-[13px] leading-relaxed mb-6">
            Artisan, commerçant, producteur, transporteur, prestataire, coopérative ou groupement professionnel ? Commencez à construire votre profil économique dès aujourd'hui...
          </p>
          <div className="space-y-2">
            <a href="https://wa.me/2290141521092?text=Je%20souhaite%20rejoindre%20la%20Bourse%20des%20Valeurs%20IPPOO" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white"
              style={{ background: '#111827', boxShadow: '0 8px 24px rgba(0,0,0,0.35)' }}>
              <MessageCircle size={16} /> Demander mon inscription
            </a>
            <a href="tel:+2290141521092"
              className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-semibold"
              style={{ background: 'rgba(0,0,0,0.12)', color: '#111827' }}>
              <Phone size={14} /> Appeler le +229 01 41 52 92
            </a>
          </div>
        </div>
      </div>

      {/* ── FORMULAIRE ── */}
      <div id="bourse-form" className="px-4 py-8" style={{ background: 'white' }}>
        <div className="flex items-center gap-2 mb-2">
          <FileText size={14} style={{ color: GOLD }} />
          <span className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: GOLD }}>Contact</span>
        </div>
        <h2 className="text-[20px] font-black text-[#111827] mb-1">Parlons de votre activité<br />ou de votre projet...</h2>
        <p className="text-[#6B7280] text-[13px] mb-5">Rejoindre la Bourse, faire évaluer votre activité, rechercher un financement ou proposer un partenariat...</p>
        {sent ? (
          <div className="rounded-2xl p-6 text-center" style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30` }}>
            <Check size={32} className="mx-auto mb-3" style={{ color: GOLD }} />
            <p className="font-black text-[16px] text-[#111827] mb-1">Demande envoyée !</p>
            <p className="text-[#6B7280] text-[13px]">Notre équipe analysera votre demande et vous recontactera prochainement.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {[
              { key: 'nom', label: 'Nom et prénom', type: 'text', placeholder: 'Votre nom complet' },
              { key: 'entreprise', label: "Entreprise ou groupement", type: 'text', placeholder: 'Nom de votre structure' },
              { key: 'secteur', label: "Secteur d'activité", type: 'text', placeholder: 'Ex: Agroalimentaire, Artisanat...' },
              { key: 'ville', label: "Ville / zone d'activité", type: 'text', placeholder: 'Ex: Parakou, Cotonou...' },
              { key: 'tel', label: 'Téléphone / WhatsApp', type: 'tel', placeholder: '+229 XX XX XX XX' },
              { key: 'email', label: 'Adresse e-mail', type: 'email', placeholder: 'votre@email.com' },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label className="block text-[12px] font-bold text-[#374151] mb-1.5">{label}</label>
                <input type={type} placeholder={placeholder} value={(formData as any)[key]}
                  onChange={e => setFormData(p => ({ ...p, [key]: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-[14px] text-[#111827] outline-none transition-all"
                  style={{ background: '#F9FAFB', border: `1.5px solid #E5E7EB` }}
                  onFocus={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.boxShadow = `0 0 0 3px ${GOLD}20` }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.boxShadow = 'none' }}
                />
              </div>
            ))}
            <div>
              <label className="block text-[12px] font-bold text-[#374151] mb-1.5">Type de profil</label>
              <select value={formData.profil} onChange={e => setFormData(p => ({ ...p, profil: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl text-[14px] text-[#111827] outline-none"
                style={{ background: '#F9FAFB', border: '1.5px solid #E5E7EB' }}>
                <option value="">Sélectionner...</option>
                {["Artisan","Commerçant","Producteur","Transporteur","Prestataire de services","Groupement / Coopérative","Institution","Investisseur","Partenaire","Autre"].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-[#374151] mb-1.5">Objet de votre demande</label>
              <select value={formData.objet} onChange={e => setFormData(p => ({ ...p, objet: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl text-[14px] text-[#111827] outline-none"
                style={{ background: '#F9FAFB', border: '1.5px solid #E5E7EB' }}>
                <option value="">Sélectionner...</option>
                {["Inscription à la Bourse des Valeurs","Demande de cotation","Demande de financement","Recherche d'équipement","Recherche de partenaire","Proposition d'investissement","Demande de formation","Assurance","Mise en relation commerciale","Autre"].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-[#374151] mb-1.5">Votre message</label>
              <textarea rows={4} placeholder="Décrivez brièvement votre activité, votre projet ou votre besoin..."
                value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl text-[14px] text-[#111827] outline-none resize-none"
                style={{ background: '#F9FAFB', border: '1.5px solid #E5E7EB' }}
                onFocus={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.boxShadow = `0 0 0 3px ${GOLD}20` }}
                onBlur={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.boxShadow = 'none' }}
              />
            </div>
            <label className="flex items-start gap-3">
              <input type="checkbox" checked={formData.consent} onChange={e => setFormData(p => ({ ...p, consent: e.target.checked }))}
                className="mt-0.5 w-4 h-4 shrink-0 rounded" style={{ accentColor: GOLD }} />
              <span className="text-[12px] text-[#6B7280] leading-relaxed">J'accepte d'être recontacté par l'équipe <strong style={{ color: '#FF2D7A', fontWeight: 900 }}>IPPOO</strong> concernant ma demande.</span>
            </label>
            <button
              onClick={() => { if (formData.nom && formData.tel && formData.consent) setSent(true) }}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white mt-2"
              style={{ background: `linear-gradient(135deg, ${GOLD}, #B8860B)`, boxShadow: `0 8px 24px ${GOLD}44`, opacity: formData.consent ? 1 : 0.6 }}>
              <ArrowRight size={16} /> Envoyer ma demande
            </button>
          </div>
        )}
      </div>

      {/* ── MANIFESTE FINAL ── */}
      <div className="px-4 py-8" style={{ background: '#0B0B14' }}>
        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-widest mb-6" style={{ color: GOLD }}>Bourse des Valeurs <strong style={{ color: '#FF2D7A', fontWeight: 900 }}>IPPOO</strong></p>
          {["Identifier les valeurs.", "Mesurer les performances.", "Créer la confiance.", "Faciliter les connexions.", "Accompagner la croissance."].map((line) => (
            <p key={line} className="font-black text-[16px] leading-snug mb-1 text-white">{line}</p>
          ))}
          <div className="h-px my-6" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
          <p className="font-black text-[18px]" style={{ color: GOLD }}>
            "La valeur existe déjà.<br />Nous contribuons à la rendre visible."
          </p>
          <p className="text-white/30 text-[11px] mt-4">Propriété de <strong className="text-white/50">APTDC-Z-UP/TDO/LIMITED</strong></p>
        </div>
      </div>

    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE CONTACT — Brevo transactionnel
══════════════════════════════════════════════════════════════ */
const BREVO_KEY = import.meta.env.VITE_BREVO_API_KEY as string

async function brevoSendEmail(payload: object) {
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': BREVO_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`Brevo SMTP error ${res.status}`)
}

async function brevoCreateContact(payload: object) {
  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: { 'api-key': BREVO_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok && res.status !== 204) {
    const body = await res.json().catch(() => ({}))
    if ((body as any)?.code !== 'duplicate_parameter') throw new Error(`Brevo contacts error ${res.status}`)
  }
}

export function ContactPage({ onBack }: { onBack: () => void }) {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', sujet: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.nom || !form.email || !form.message) return
    setStatus('loading')
    setErrMsg('')
    try {
      await brevoSendEmail({
        sender: { name: 'IPPOO Platform', email: 'ippooz.up.2@gmail.com' },
        to: [{ email: 'ippooz.up.2@gmail.com', name: 'Équipe IPPOO' }],
        replyTo: { email: form.email, name: form.nom },
        subject: `[IPPOO Contact] ${form.sujet || 'Nouvelle demande de contact'}`,
        htmlContent: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#FFF8F2;border-radius:12px;">
            <h2 style="color:#FF2D7A;margin-bottom:16px;">Nouveau message de contact — <strong>IPPOO</strong></h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;width:130px;">Nom :</td><td style="padding:8px 0;font-weight:bold;">${form.nom}</td></tr>
              <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;">Email :</td><td style="padding:8px 0;">${form.email}</td></tr>
              <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;">Téléphone :</td><td style="padding:8px 0;">${form.telephone || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;">Sujet :</td><td style="padding:8px 0;">${form.sujet || '—'}</td></tr>
            </table>
            <div style="margin-top:16px;padding:16px;background:white;border-radius:8px;border-left:4px solid #FF2D7A;">
              <p style="margin:0;color:#374151;line-height:1.7;">${form.message.replace(/\n/g, '<br/>')}</p>
            </div>
            <p style="margin-top:20px;font-size:11px;color:#9CA3AF;">Propriété de APTDC-Z-UP/TDO/LIMITED</p>
          </div>`,
      })
      await brevoSendEmail({
        sender: { name: 'IPPOO Platform', email: 'ippooz.up.2@gmail.com' },
        to: [{ email: form.email, name: form.nom }],
        subject: 'IPPOO — Votre message a bien été reçu',
        htmlContent: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#FFF8F2;border-radius:12px;">
            <h2 style="color:#FF2D7A;">Merci, ${form.nom} !</h2>
            <p style="color:#374151;line-height:1.7;">Nous avons bien reçu votre message et notre équipe vous recontactera sous <strong>24h ouvrables</strong>.</p>
            <p style="color:#374151;line-height:1.7;">En attendant, rejoignez notre communauté ou explorez les 21 espaces de l'écosystème <strong style="color:#FF2D7A;">IPPOO</strong>...</p>
            <div style="margin-top:24px;padding:16px;background:white;border-radius:8px;">
              <p style="margin:0 0 8px;font-size:12px;color:#9CA3AF;text-transform:uppercase;letter-spacing:.1em;">Votre message</p>
              <p style="margin:0;color:#374151;font-size:14px;">${form.message.substring(0, 200)}${form.message.length > 200 ? '...' : ''}</p>
            </div>
            <p style="margin-top:24px;font-size:11px;color:#9CA3AF;">Propriété de APTDC-Z-UP/TDO/LIMITED · ippooz.up.2@gmail.com · +229 01 41 52 10 92</p>
          </div>`,
      })
      setStatus('success')
    } catch (err: any) {
      setErrMsg(err.message || 'Une erreur est survenue.')
      setStatus('error')
    }
  }

  const SUJETS = ['Adhésion & Inscription', 'Support technique', 'Partenariat', 'Presse & Médias', 'Investissement', 'Doléance', 'Autre']
  const inputCls = "w-full px-4 py-3.5 rounded-2xl text-[14px] text-[#111827] border border-[#E5E7EB] focus:outline-none focus:border-[#FF2D7A] focus:ring-2 focus:ring-[#FF2D7A]/20 transition-all min-h-[52px] placeholder:text-[#D1D5DB] bg-white"

  return (
    <PageShell
      title="Contactez IPPOO"
      sub="Notre équipe vous répond sous 24h. Que ce soit pour une adhésion, un partenariat ou une question technique, nous sommes là pour vous accompagner..."
      color="#FF2D7A"
      heroImage={imgH5}
      onBack={onBack}
      heroChildren={
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[["24h", "Réponse"], ["7j/7", "Disponible"], ["100%", "Gratuit"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="tel:+2290141521092" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white" style={{ background: '#FF2D7A', boxShadow: '0 6px 24px rgba(255,45,122,0.45)' }}>
            <Phone size={15} /> Appeler maintenant
          </a>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-semibold text-white/70" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid #FFE600' }}>
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      }
    >
      <div className="px-4 py-6 space-y-5">

        {/* Canaux de contact */}
        <div className="grid grid-cols-1 gap-3">
          {[
            { Icon: Phone, label: 'Téléphone', val: '+229 01 41 52 10 92', href: 'tel:+2290141521092', color: '#FF2D7A', bg: '#FFF0F5' },
            { Icon: Mail, label: 'Email', val: 'ippooz.up.2@gmail.com', href: 'mailto:ippooz.up.2@gmail.com', color: '#2563EB', bg: '#EBF3FF' },
            { Icon: MapPin, label: 'Adresse', val: 'Parakou, Bénin — Afrique de l\'Ouest', href: '#', color: '#16A34A', bg: '#ECFDF5' },
          ].map(({ Icon, label, val, href, color, bg }) => (
            <a key={label} href={href} className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:scale-[1.01]" style={{ background: bg, border: `1px solid ${color}20` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}18` }}>
                <Icon size={18} style={{ color }} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide" style={{ color }}>{label}</p>
                <p className="text-[#111827] font-semibold text-[13px]">{val}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Formulaire */}
        <div className="rounded-3xl p-5 bg-white" style={{ border: '1px solid #F3E8D8', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
          <h2 className="text-[18px] font-black text-[#111827] mb-1">Envoyer un message</h2>
          <p className="text-[#9CA3AF] text-[13px] mb-5">Nous vous répondons sous 24h ouvrables.</p>

          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4" style={{ background: '#ECFDF5' }}>
                <Check size={32} className="text-[#16A34A]" />
              </div>
              <h3 className="font-black text-[20px] text-[#111827] mb-2">Message envoyé !</h3>
              <p className="text-[#6B7280] text-[14px] leading-relaxed mb-5">
                Votre message a bien été reçu. Un email de confirmation vous a été envoyé et notre équipe vous recontactera sous 24h...
              </p>
              <button onClick={() => setStatus('idle')} className="px-6 py-3 rounded-2xl text-[14px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)' }}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Nom complet *</label>
                  <input required value={form.nom} onChange={set('nom')} placeholder="Votre nom" className={inputCls} />
                </div>
                <div>
                  <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Email *</label>
                  <input required type="email" value={form.email} onChange={set('email')} placeholder="contact@exemple.com" className={inputCls} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Téléphone</label>
                  <input value={form.telephone} onChange={set('telephone')} placeholder="+229 xx xx xx xx" className={inputCls} />
                </div>
                <div>
                  <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Sujet</label>
                  <select value={form.sujet} onChange={set('sujet')} className={inputCls + ' appearance-none'}>
                    <option value="">Choisir...</option>
                    {SUJETS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Message *</label>
                <textarea required rows={5} value={form.message} onChange={set('message')} placeholder="Décrivez votre demande en détail..."
                  className="w-full px-4 py-3.5 rounded-2xl text-[14px] text-[#111827] border border-[#E5E7EB] focus:outline-none focus:border-[#FF2D7A] focus:ring-2 focus:ring-[#FF2D7A]/20 resize-none transition-all placeholder:text-[#D1D5DB] bg-white" />
              </div>
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl text-[13px] text-[#991B1B]" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                  <AlertCircle size={14} className="shrink-0" />
                  <span>Erreur d'envoi : {errMsg} — Veuillez réessayer ou nous appeler...</span>
                </div>
              )}
              <button type="submit" disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white transition-opacity disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)', boxShadow: '0 8px 24px rgba(255,45,122,0.3)' }}>
                {status === 'loading' ? (
                  <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Envoi en cours...</>
                ) : (
                  <>Envoyer le message <ArrowRight size={16} /></>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Réseaux sociaux */}
        <div className="rounded-2xl p-4" style={{ background: '#F7FEE7', border: '1px solid #BBF7D0' }}>
          <p className="text-[13px] font-bold text-[#15803D] mb-3">Rejoignez-nous sur les réseaux</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: 'WhatsApp', href: 'https://wa.me/2290141521092', color: '#25D366', bg: '#ECFDF5' },
              { name: 'Facebook', href: 'https://facebook.com/ippoo.aptdc', color: '#1877F2', bg: '#EBF3FF' },
              { name: 'Instagram', href: 'https://instagram.com/ippoo.aptdc', color: '#C13584', bg: '#FFF0F5' },
              { name: 'TikTok', href: 'https://tiktok.com/@ippoo.aptdc', color: '#010101', bg: '#F5F5F5' },
              { name: 'LinkedIn', href: 'https://linkedin.com/company/ippoo-aptdc', color: '#0A66C2', bg: '#EBF4FF' },
              { name: 'X', href: 'https://x.com/ippoo_aptdc', color: '#000', bg: '#F5F5F5' },
            ].map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center py-2.5 rounded-xl text-[12px] font-bold transition-all hover:scale-105"
                style={{ background: s.bg, color: s.color, border: `1px solid ${s.color}20` }}>
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-[10px] text-[#9CA3AF]">Propriété de <strong>APTDC-Z-UP/TDO/LIMITED</strong></p>
      </div>
    </PageShell>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE INSCRIPTION — Brevo contacts + email confirmation
══════════════════════════════════════════════════════════════ */
export function InscriptionPage({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', telephone: '',
    ville: '', pays: 'Bénin', secteur: '', profil: '',
    offre: 'base', accepte: false,
  })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value }))

  const SECTEURS = ['Agriculture & Élevage', 'Commerce & Vente', 'Artisanat & Métiers', 'Transport & Logistique', 'Santé & Bien-être', 'Mode & Textile', 'Technologie & Digital', 'Finance & Assurance', 'Restauration & Alimentation', 'Éducation & Formation', 'Événementiel & Culture', 'Autre']
  const PROFILS = ['Producteur·trice', 'Transformateur·trice', 'Distributeur·trice', 'Prestataire de services', 'Artisan·e', 'Entrepreneur·se', 'Étudiant·e', 'Salarié·e', 'Autre']
  const PAYS = ['Bénin', 'Togo', 'Côte d\'Ivoire', 'Sénégal', 'Mali', 'Burkina Faso', 'Niger', 'Cameroun', 'Ghana', 'Nigeria', 'France', 'Autre']

  const inputCls = "w-full px-4 py-3.5 rounded-2xl text-[14px] text-[#111827] border border-[#E5E7EB] focus:outline-none focus:border-[#FF2D7A] focus:ring-2 focus:ring-[#FF2D7A]/20 transition-all min-h-[52px] placeholder:text-[#D1D5DB] bg-white"
  const selectCls = inputCls + ' appearance-none cursor-pointer'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.accepte) return
    setStatus('loading')
    setErrMsg('')
    try {
      await brevoCreateContact({
        email: form.email,
        firstName: form.prenom,
        lastName: form.nom,
        attributes: {
          SMS: form.telephone,
          VILLE: form.ville,
          PAYS: form.pays,
          SECTEUR: form.secteur,
          PROFIL: form.profil,
          OFFRE: form.offre,
          SOURCE: 'IPPOO Web Platform',
        },
        listIds: [2],
        updateEnabled: true,
      })
      await brevoSendEmail({
        sender: { name: 'IPPOO Platform', email: 'ippooz.up.2@gmail.com' },
        to: [{ email: form.email, name: `${form.prenom} ${form.nom}` }],
        subject: 'Bienvenue dans l\'écosystème IPPOO ! 🎉',
        htmlContent: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:0;background:#FFF8F2;">
            <div style="background:linear-gradient(135deg,#FF2D7A,#E10600);padding:32px 24px;border-radius:12px 12px 0 0;text-align:center;">
              <h1 style="color:white;margin:0;font-size:28px;font-weight:900;">Bienvenue dans <strong>IPPOO</strong> !</h1>
              <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">L'économie populaire africaine, réinventée.</p>
            </div>
            <div style="padding:28px 24px;background:white;">
              <p style="color:#374151;font-size:16px;line-height:1.7;">Bonjour <strong>${form.prenom}</strong>,</p>
              <p style="color:#374151;font-size:14px;line-height:1.7;">Votre inscription à l'écosystème <strong style="color:#FF2D7A;">IPPOO</strong> a bien été enregistrée. Notre équipe va prendre contact avec vous très prochainement pour finaliser votre adhésion...</p>
              <div style="margin:20px 0;padding:16px;background:#FFF8F2;border-radius:10px;border-left:4px solid #FF2D7A;">
                <table style="width:100%;">
                  <tr><td style="color:#6B7280;font-size:12px;padding:4px 0;width:120px;">Offre choisie :</td><td style="font-weight:bold;color:#111827;font-size:13px;">${form.offre === 'base' ? 'Offre de Base — 750 FCFA/jour' : 'Couverture Complémentaire'}</td></tr>
                  <tr><td style="color:#6B7280;font-size:12px;padding:4px 0;">Secteur :</td><td style="color:#111827;font-size:13px;">${form.secteur}</td></tr>
                  <tr><td style="color:#6B7280;font-size:12px;padding:4px 0;">Profil :</td><td style="color:#111827;font-size:13px;">${form.profil}</td></tr>
                  <tr><td style="color:#6B7280;font-size:12px;padding:4px 0;">Ville :</td><td style="color:#111827;font-size:13px;">${form.ville}, ${form.pays}</td></tr>
                </table>
              </div>
              <p style="color:#374151;font-size:14px;line-height:1.7;">En attendant, n'hésitez pas à nous contacter via :</p>
              <p style="color:#374151;font-size:14px;"><strong>📞</strong> +229 01 41 52 10 92 &nbsp;|&nbsp; <strong>📧</strong> ippooz.up.2@gmail.com</p>
            </div>
            <div style="padding:20px 24px;background:#FFF8F2;border-radius:0 0 12px 12px;text-align:center;">
              <p style="font-size:11px;color:#9CA3AF;margin:0;">Propriété de APTDC-Z-UP/TDO/LIMITED · Parakou, Bénin</p>
            </div>
          </div>`,
      })
      await brevoSendEmail({
        sender: { name: 'IPPOO Platform', email: 'ippooz.up.2@gmail.com' },
        to: [{ email: 'ippooz.up.2@gmail.com', name: 'Équipe IPPOO' }],
        subject: `[IPPOO Inscription] ${form.prenom} ${form.nom} — ${form.secteur}`,
        htmlContent: `<div style="font-family:Arial,sans-serif;padding:20px;"><h2 style="color:#FF2D7A;">Nouvelle inscription <strong>IPPOO</strong></h2><table style="border-collapse:collapse;width:100%;"><tr><td style="padding:8px;background:#F9FAFB;font-weight:bold;">Nom</td><td style="padding:8px;">${form.prenom} ${form.nom}</td></tr><tr><td style="padding:8px;background:#F9FAFB;font-weight:bold;">Email</td><td style="padding:8px;">${form.email}</td></tr><tr><td style="padding:8px;background:#F9FAFB;font-weight:bold;">Téléphone</td><td style="padding:8px;">${form.telephone}</td></tr><tr><td style="padding:8px;background:#F9FAFB;font-weight:bold;">Ville</td><td style="padding:8px;">${form.ville}, ${form.pays}</td></tr><tr><td style="padding:8px;background:#F9FAFB;font-weight:bold;">Secteur</td><td style="padding:8px;">${form.secteur}</td></tr><tr><td style="padding:8px;background:#F9FAFB;font-weight:bold;">Profil</td><td style="padding:8px;">${form.profil}</td></tr><tr><td style="padding:8px;background:#F9FAFB;font-weight:bold;">Offre</td><td style="padding:8px;">${form.offre}</td></tr></table></div>`,
      })
      setStatus('success')
    } catch (err: any) {
      setErrMsg(err.message || 'Erreur inconnue.')
      setStatus('error')
    }
  }

  const STEPS_LABELS = ['Identité', 'Localisation', 'Activité', 'Offre']

  return (
    <PageShell
      title="Rejoindre IPPOO"
      sub="Inscrivez-vous à l'écosystème IPPOO et accédez à 21 espaces thématiques dédiés à l'économie populaire africaine..."
      color="#FF2D7A"
      heroImage={imgH1}
      onBack={onBack}
      heroChildren={
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[["750 FCFA", "Base/jour"], ["21", "Espaces"], ["Gratuit", "Inscription"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl py-3 px-2 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <p className="text-white font-black text-[18px] leading-none">{v}</p>
                <p className="text-white/55 text-[10px] mt-0.5 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
          <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white" style={{ background: '#FF2D7A', boxShadow: '0 6px 24px rgba(255,45,122,0.45)' }}>
            <MessageCircle size={15} /> WhatsApp IPPOO
          </a>
        </div>
      }
    >
      <div className="px-4 py-6">

        {status === 'success' ? (
          <div className="rounded-3xl p-6 bg-white text-center" style={{ border: '1px solid #BBF7D0', boxShadow: '0 8px 32px rgba(22,163,74,0.12)' }}>
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-5" style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)' }}>
              <Check size={36} className="text-white" />
            </div>
            <h3 className="font-black text-[22px] text-[#111827] mb-2">Inscription réussie !</h3>
            <p className="text-[#6B7280] text-[14px] leading-relaxed mb-2">
              Bienvenue dans l'écosystème <strong className="text-[#FF2D7A]">IPPOO</strong>, {form.prenom} !
            </p>
            <p className="text-[#6B7280] text-[14px] leading-relaxed mb-6">
              Un email de confirmation a été envoyé à <strong>{form.email}</strong>. Notre équipe vous contactera sous 24h pour finaliser votre adhésion...
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a href="tel:+2290141521092" className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)' }}>
                <Phone size={14} /> Nous appeler
              </a>
              <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-bold" style={{ background: '#E7FBF0', color: '#15803D', border: '1px solid #BBF7D0' }}>
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Stepper */}
            <div className="flex items-center gap-1.5 mb-6">
              {STEPS_LABELS.map((label, i) => (
                <div key={label} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-black transition-all"
                      style={step > i + 1 ? { background: '#16A34A', color: 'white' } : step === i + 1 ? { background: '#FF2D7A', color: 'white', boxShadow: '0 0 0 4px rgba(255,45,122,0.2)' } : { background: '#F3F4F6', color: '#9CA3AF' }}>
                      {step > i + 1 ? <Check size={14} /> : i + 1}
                    </div>
                    <span className="text-[9px] font-bold mt-1 uppercase tracking-wide" style={{ color: step === i + 1 ? '#FF2D7A' : '#9CA3AF' }}>{label}</span>
                  </div>
                  {i < STEPS_LABELS.length - 1 && (
                    <div className="h-px flex-1 mx-1 mb-4" style={{ background: step > i + 1 ? '#16A34A' : '#E5E7EB' }} />
                  )}
                </div>
              ))}
            </div>

            {/* Étape 1 — Identité */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-[18px] font-black text-[#111827]">Votre identité</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Prénom *</label>
                    <input required value={form.prenom} onChange={set('prenom')} placeholder="Prénom" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Nom *</label>
                    <input required value={form.nom} onChange={set('nom')} placeholder="Nom de famille" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Adresse email *</label>
                  <input required type="email" value={form.email} onChange={set('email')} placeholder="votre@email.com" className={inputCls} />
                </div>
                <div>
                  <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Téléphone *</label>
                  <input required value={form.telephone} onChange={set('telephone')} placeholder="+229 xx xx xx xx" className={inputCls} />
                </div>
                <button type="button" onClick={() => { if (!form.prenom || !form.email || !form.telephone) return; setStep(2) }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)', boxShadow: '0 6px 20px rgba(255,45,122,0.3)' }}>
                  Continuer <ArrowRight size={16} />
                </button>
              </div>
            )}

            {/* Étape 2 — Localisation */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-[18px] font-black text-[#111827]">Votre localisation</h2>
                <div>
                  <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Ville / Commune *</label>
                  <input required value={form.ville} onChange={set('ville')} placeholder="Ex: Parakou, Cotonou, Abidjan..." className={inputCls} />
                </div>
                <div>
                  <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Pays *</label>
                  <select required value={form.pays} onChange={set('pays')} className={selectCls}>
                    {PAYS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button type="button" onClick={() => setStep(1)}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[14px] font-bold text-[#6B7280]"
                    style={{ background: '#F3F4F6' }}>
                    <ArrowLeft size={15} /> Retour
                  </button>
                  <button type="button" onClick={() => { if (!form.ville) return; setStep(3) }}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[14px] font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)' }}>
                    Continuer <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {/* Étape 3 — Activité */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-[18px] font-black text-[#111827]">Votre activité</h2>
                <div>
                  <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Secteur d'activité *</label>
                  <select required value={form.secteur} onChange={set('secteur')} className={selectCls}>
                    <option value="">Choisissez votre secteur...</option>
                    {SECTEURS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Profil *</label>
                  <select required value={form.profil} onChange={set('profil')} className={selectCls}>
                    <option value="">Choisissez votre profil...</option>
                    {PROFILS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button type="button" onClick={() => setStep(2)}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[14px] font-bold text-[#6B7280]"
                    style={{ background: '#F3F4F6' }}>
                    <ArrowLeft size={15} /> Retour
                  </button>
                  <button type="button" onClick={() => { if (!form.secteur || !form.profil) return; setStep(4) }}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[14px] font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)' }}>
                    Continuer <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {/* Étape 4 — Offre & validation */}
            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-[18px] font-black text-[#111827]">Choisissez votre offre</h2>
                {[
                  { id: 'base', name: 'Offre de Base', price: '750 FCFA/jour', color: '#FF2D7A', desc: 'Accès aux 21 espaces, assistance admin, juridique, comptable, assurance santé de base et carte de membre...' },
                  { id: 'complementaire', name: 'Couverture Complémentaire', price: '+ 350 FCFA/jour', color: '#7C3AED', desc: 'Assurance marchandises, habitation, éducation, transport, matériels et automobile en complément de l\'offre de base...' },
                ].map(o => (
                  <button key={o.id} type="button" onClick={() => setForm(p => ({ ...p, offre: o.id }))}
                    className="w-full p-4 rounded-2xl text-left transition-all"
                    style={form.offre === o.id ? { border: `2px solid ${o.color}`, background: `${o.color}08`, boxShadow: `0 4px 20px ${o.color}25` } : { border: '2px solid #E5E7EB', background: 'white' }}>
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <p className="font-black text-[14px]" style={{ color: form.offre === o.id ? o.color : '#111827' }}>{o.name}</p>
                        <p className="text-[12px] font-bold" style={{ color: o.color }}>{o.price}</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5" style={form.offre === o.id ? { borderColor: o.color, background: o.color } : { borderColor: '#D1D5DB' }}>
                        {form.offre === o.id && <Check size={11} className="text-white" />}
                      </div>
                    </div>
                    <p className="text-[12px] text-[#6B7280] leading-relaxed">{o.desc}</p>
                  </button>
                ))}

                <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl" style={{ background: '#FFF8F2', border: '1px solid #F3E8D8' }}>
                  <input type="checkbox" checked={form.accepte} onChange={set('accepte')} className="mt-0.5 w-4 h-4 accent-[#FF2D7A] shrink-0" />
                  <span className="text-[12px] text-[#374151] leading-relaxed">
                    J'accepte les <strong className="text-[#FF2D7A]">Conditions Générales d'Utilisation</strong> et la <strong className="text-[#FF2D7A]">Politique de Confidentialité</strong> de <strong>IPPOO</strong>. Je confirme que les informations fournies sont exactes...
                  </span>
                </label>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl text-[13px] text-[#991B1B]" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                    <AlertCircle size={14} className="shrink-0" />
                    <span>Erreur : {errMsg} — Vérifiez votre connexion ou contactez-nous...</span>
                  </div>
                )}

                <div className="grid grid-cols-5 gap-3">
                  <button type="button" onClick={() => setStep(3)} className="col-span-2 flex items-center justify-center gap-2 py-4 rounded-2xl text-[14px] font-bold text-[#6B7280]" style={{ background: '#F3F4F6' }}>
                    <ArrowLeft size={15} /> Retour
                  </button>
                  <button type="submit" disabled={!form.accepte || status === 'loading'}
                    className="col-span-3 flex items-center justify-center gap-2 py-4 rounded-2xl text-[14px] font-bold text-white transition-opacity disabled:opacity-50"
                    style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)', boxShadow: '0 8px 24px rgba(255,45,122,0.3)' }}>
                    {status === 'loading' ? (
                      <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Inscription...</>
                    ) : (
                      <>S'inscrire <ArrowRight size={15} /></>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}

        <p className="text-center text-[10px] text-[#9CA3AF] mt-4">Propriété de <strong>APTDC-Z-UP/TDO/LIMITED</strong></p>
      </div>
    </PageShell>
  )
}

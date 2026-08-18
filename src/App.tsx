import { useState, useEffect, useCallback, useRef } from 'react'
import {
 ArrowRight, ChevronDown, Menu, X, Phone, Mail, MapPin,
 ExternalLink, Users, TrendingUp, Shield, Zap, Star,
 ShoppingCart, Heart, Briefcase, Globe, Layers, Target,
 Check, ChevronRight, Play, Headphones,
 Truck, Leaf, Camera, Cpu, Home, Coffee,
 BookOpen, Award, Wallet, MessageCircle,
 Gift, Flame, Info, Bell, BadgeCheck, UserPlus,
 Package, Network, Handshake, Sparkles,
} from 'lucide-react'
import logo from '@/imports/Logo_Noir_sur_Blanc-1.png'
import logoWhite from '@/imports/Logo_Blanc_Transparent-1.png'
import { IpHL, Ip } from '@/hl'
import {
 AdhesionPage, ParrainagePage, BusinessPage, FAQPage,
 ActualitesPage, DoleancesPage, MentionsLegalesPage,
 PolitiqueConfidentialitePage, CGUPage,
 AProposPage, ProgrammesPage, SantePage, GroupementsPage,
 InvestissementPage, EmploiPage, MonComptePage, SouscriptionsPage,
 KaashPage, BourseValeurPage, ContactPage, InscriptionPage,
} from '@/pages'

type PageKey = 'home' | 'adhesion' | 'parrainage' | 'business' | 'faq' | 'actualites' | 'doleances' | 'mentions' | 'privacy' | 'cgu' | 'apropos' | 'programmes' | 'sante' | 'groupements' | 'investissement' | 'emploi' | 'moncompte' | 'souscriptions' | 'kaash' | 'bourse' | 'contact' | 'inscription'

/* Clés de pages valides pour le routage par hash (#/page) — permet au retour
 navigateur et au rafraîchissement de restaurer la bonne page (pas l'accueil). */
const PAGE_KEYS: PageKey[] = ['home','adhesion','parrainage','business','faq','actualites','doleances','mentions','privacy','cgu','apropos','programmes','sante','groupements','investissement','emploi','moncompte','souscriptions','kaash','bourse','contact','inscription']
const pageFromHash = (): PageKey => {
 if (typeof window === 'undefined') return 'home'
 const h = decodeURIComponent(window.location.hash.replace(/^#\/?/, '')).trim()
 return (PAGE_KEYS as string[]).includes(h) ? (h as PageKey) : 'home'
}

/* ── Local images from Accueil1 ──────────────────────────────── */
import imgW2 from '@/imports/Accueil1/37408e997030cf7612e4163b0ef972dc4e8c7e3d.png'
import imgW3 from '@/imports/Accueil1/cd45bbfed11bf6c048220fffd8a1d07794a3d608.png'
import imgW4 from '@/imports/Accueil1/31115c479f2c2b11333d8d208d6a04121c747409.png'
import imgW5 from '@/imports/Accueil1/ef88540d049749340eb86497b238ee12a58aa26e.png'
import imgW6 from '@/imports/Accueil1/65504b25aeb4530c93323c2420cde81590dbfbf2.png'
import imgW7 from '@/imports/Accueil1/32558abc38677b62682644da1b9b1e2744619c63.png'
import imgDigitalDuo from '@/imports/Accueil1/76280f0d0670e349c23f871c61c73b8e75656fb2.png'
import imgMobileMarket from '@/imports/Accueil1/d211b443e2a220d3e800a007d7f967834d6d65f8.png'
import imgPortrait from '@/imports/Accueil1/6a83907931f85c4a342ddcd9541805693bc5c888.png'
import imgMarketOutdoor from '@/imports/Accueil1/0a3eabbb293b23814cd93b4012963fdbdb44b597.png'
import imgCattle from '@/imports/Accueil1/87d7d0897fb577b6551eb63d874e1e3189d01a42.png'
import imgMarketBig from '@/imports/Accueil1/f60199bbcdccf37adfac86f08ac2adb82d6d726a.png'
import imgCommunityBw from '@/imports/Accueil1/c0a967b641cc913e4bc205910f1a8de262964ece.png'
import imgFruitMarket from '@/imports/Accueil1/61dd7fc551a2268410e5dcd5d453a9f719fa40ca.png'
import imgWomenDuo from '@/imports/Accueil1/493ca0da5d281f3fd7a2e97228f414b9a35c5cda.png'
import imgFashionColor from '@/imports/Accueil1/fda5685d31446035bdc482787755bffda408191c.png'
import imgTechWoman from '@/imports/Accueil1/e5749c6029bf086acfe11e76ce9fdfbc417a76ce.png'
import imgHerbs from '@/imports/Accueil1/f573712b0cba3b86a473fa6a7b8727a4fd3a596c.png'
import imgMarketWoman from '@/imports/Accueil1/16725a580cd9009e541a8863a25c97c1876188b3.png'
import imgShopkeeper from '@/imports/Accueil1/ba803398078bf4459eaa5acd7a169b5e83164325.png'
import imgGifts from '@/imports/Accueil1/02c1141ecf676fd76a158fed6833f1b382a7cc01.png'
import imgTeaField from '@/imports/Accueil1/e355419ae2a9711a31b27e6444fa231db915b2e7.png'
import imgFruitCarry from '@/imports/Accueil1/4872336d9d47796ae4ce285047bae441aca6ac58.png'
import imgFarming from '@/imports/Accueil1/be2c758a943a6834adb3e8a0cf714c8bdd60e19c.png'
import imgDoctor from '@/imports/Accueil1/0e8b6d9375d66f3401cedd53f4022bfb6ad2a1b5.png'
import imgVegMarket from '@/imports/Accueil1/7f8bee8026046712ca8f9ed937fec84d9fe6c235.png'
import imgTeamJoy from '@/imports/Accueil1/ea4c670e7d43e08f9611618eba1bac94417d26d8.png'
import imgWomenLaugh from '@/imports/Accueil1/fc5eaad2989eb934d250bbdf3f7ff17a10732dba.png'
import imgSewing from '@/imports/Accueil1/16d429f254d5e81848340f7af60ff096263d9dd2.png'
import imgPainting from '@/imports/Accueil1/cbbd8d0b88a5d9f4f1f821a8ae86f0ca3175f74f.png'
import imgAfricanTextile from '@/imports/Accueil1/44222f44c25f3b4b08bdd777cd7dc9364ff9954f.png'
import imgMint from '@/imports/Accueil1/8dc670ebaf0f8547a1c4340c736212802ebded40.png'
import imgAfcWorkJobs from '@/imports/Capture_d__cran_2026-08-06_104946.png'
import imgAfcBienEtre from '@/imports/Capture_d__cran_2026-08-06_105007.png'
import imgAfcShopFood from '@/imports/Capture_d__cran_2026-08-06_105119.png'
import imgAfcShopFashion from '@/imports/Capture_d__cran_2026-08-06_105156.png'
import imgAfcSocialFact from '@/imports/Capture_d__cran_2026-08-06_105220.png'
import imgAfcAgroAlim from '@/imports/Capture_d__cran_2026-08-06_105237.png'
import imgAfcFashionBizz from '@/imports/Capture_d__cran_2026-08-06_105604.png'
import imgAfcFinance from '@/imports/Capture_d__cran_2026-08-06_105719.png'
import imgAfcFashionBizz2 from '@/imports/Capture_d__cran_2026-08-06_105833.png'
import imgEAssurance1 from '@img/photo_25_2026-08-06_12-41-14.jpg'
import imgEAssurance2 from '@img/photo_21_2026-08-06_12-41-14.jpg'
import imgEFinances1 from '@img/photo_36_2026-08-06_12-41-14.jpg'
import imgEFinances2 from '@img/photo_37_2026-08-06_12-41-14.jpg'
import imgECapital1 from '@img/photo_35_2026-08-06_12-41-14.jpg'
import imgECapital2 from '@img/photo_38_2026-08-06_12-41-14.jpg'
import imgEAagro1 from '@img/photo_2_2026-08-06_12-41-14.jpg'
import imgEAagro2 from '@img/photo_10_2026-08-06_12-41-14.jpg'
import imgESocialF1 from '@img/photo_30_2026-08-06_12-41-14.jpg'
import imgESocialF2 from '@img/photo_31_2026-08-06_12-41-14.jpg'
import imgEMarket1 from '@img/photo_5_2026-08-06_12-41-14.jpg'
import imgEMarket2 from '@img/photo_12_2026-08-06_12-41-14.jpg'
import imgEComytee1 from '@img/photo_41_2026-08-06_12-41-14.jpg'
import imgEComytee2 from '@img/photo_42_2026-08-06_12-41-14.jpg'
import imgEShuup1 from '@img/photo_4_2026-08-06_12-41-14.jpg'
import imgEShuup2 from '@img/photo_28_2026-08-06_12-41-14.jpg'
import imgEKraaft1 from '@img/photo_3_2026-08-06_12-41-14.jpg'
import imgEKraaft2 from '@img/photo_1_2026-08-06_12-41-14.jpg'
import imgEHealthy1 from '@img/photo_16_2026-08-06_12-41-14.jpg'
import imgEHealthy2 from '@img/photo_22_2026-08-06_12-41-14.jpg'
import imgEFashion1 from '@img/photo_15_2026-08-06_12-41-14.jpg'
import imgEEvents1 from '@img/photo_26_2026-08-06_12-41-14.jpg'
import imgEEvents2 from '@img/photo_29_2026-08-06_12-41-14.jpg'
import imgEWorks1 from '@img/photo_32_2026-08-06_12-41-14.jpg'
import imgEWorks2 from '@img/photo_39_2026-08-06_12-41-14.jpg'
import imgEDiazz1 from '@img/photo_27_2026-08-06_12-41-14.jpg'
import imgEDiazz2 from '@img/photo_20_2026-08-06_12-41-14.jpg'
import imgETriip1 from '@img/photo_17_2026-08-06_12-41-14.jpg'
import imgETriip2 from '@img/photo_19_2026-08-06_12-41-14.jpg'
import imgEKaash from '@img/photo_8_2026-08-06_12-41-14.jpg'
import imgEBroks1 from '@img/photo_43_2026-08-06_12-41-14.jpg'
import imgEBroks2 from '@img/photo_45_2026-08-06_12-41-14.jpg'
import imgEMTreker1 from '@img/photo_13_2026-08-06_12-41-14.jpg'
import imgEMTreker2 from '@img/photo_40_2026-08-06_12-41-14.jpg'
import imgEKooka1 from '@img/photo_9_2026-08-06_12-41-14.jpg'
import imgEKooka2 from '@img/photo_33_2026-08-06_12-41-14.jpg'
import imgEKooki1 from '@img/photo_6_2026-08-06_12-41-14.jpg'
import imgEKooki2 from '@img/photo_11_2026-08-06_12-41-14.jpg'
import imgEGoods1 from '@img/photo_34_2026-08-06_12-41-14.jpg'
import imgEGoods2 from '@img/photo_14_2026-08-06_12-41-14.jpg'
import imgTransport from '@img/photo_7_2026-08-06_12-41-14.jpg'
import imgMarketplace from '@img/photo_18_2026-08-06_12-41-14.jpg'
import imgPartnership from '@img/photo_23_2026-08-06_12-41-14.jpg'
import imgGroupBenef from '@img/photo_24_2026-08-06_12-41-14.jpg'

/* ── Unsplash helper ─────────────────────────────────────────── */
const U = (id: string, w = 800, h = 600) =>
 `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=82`

/* ── Luminance check for CTA text contrast ───────────────────── */
function ctaTextColor(hex: string): string {
 const r = parseInt(hex.slice(1,3),16)/255, g = parseInt(hex.slice(3,5),16)/255, b = parseInt(hex.slice(5,7),16)/255
 const lum = 0.2126*r + 0.7152*g + 0.0722*b
 return lum > 0.45 ? '#111827' : '#ffffff'
}

/* ── Gradient generator ──────────────────────────────────────── */
function mkGrad(color: string, style: number): string {
 const s = style % 6
 if (s === 0) return `linear-gradient(160deg, ${color}EE 0%, ${color}66 40%, rgba(0,0,0,0.88) 100%)`
 if (s === 1) return `linear-gradient(200deg, rgba(0,0,0,0.88) 0%, ${color}AA 55%, ${color}33 100%)`
 if (s === 2) return `linear-gradient(135deg, ${color}CC 0%, rgba(10,8,4,0.92) 100%)`
 if (s === 3) return `linear-gradient(0deg, rgba(0,0,0,0.93) 0%, ${color}88 55%, rgba(0,0,0,0.08) 100%)`
 if (s === 4) return `linear-gradient(90deg, rgba(0,0,0,0.92) 0%, ${color}77 55%, ${color}22 100%)`
 return `linear-gradient(315deg, ${color}CC 0%, rgba(4,6,16,0.92) 75%)`
}

/* ── Hero slides ─────────────────────────────────────────────── */
const SLIDES = [
 {
 img: imgW4, pos: 'center',
 badge: "Plateforme N°1 de l'informel",
 title: ['La première entité', "qui accompagne l'informel,", 'main dans la main.'],
 sub: "IPPOO, la première entité qui accompagne les actifs du secteur informel, main dans la main : 21 espaces thématiques pour financer, connecter et faire grandir chaque acteur en Afrique...",
 cta: 'Découvrir nos espaces', ctaHref: '#espaces', accent: '#FF2D7A',
 ctaBg: 'linear-gradient(135deg, #FF2D7A, #E10600)',
 grad: 'linear-gradient(160deg, rgba(15,10,5,0.15) 0%, rgba(10,6,2,0.88) 100%)',
 },
 {
 img: imgFashionColor, pos: 'center top',
 badge: 'Culture et Identité africaine',
 title: ['Style,', 'héritage,', 'modernité.'],
 sub: "IPPOO FASHION met en lumière le savoir-faire et la créativité africaine. Mode, artisanat, culture : un écosystème entier à votre service.",
 cta: 'Explorer IPPOO-FASHION', ctaHref: '#espaces', accent: '#D4AF37',
 ctaBg: 'linear-gradient(135deg, #D4AF37, #B8860B)',
 grad: 'linear-gradient(160deg, rgba(20,5,12,0.12) 0%, rgba(15,4,9,0.90) 100%)',
 },
 {
 img: imgTeaField, pos: 'center',
 badge: 'Agriculture et Écosystème',
 title: ['La terre,', 'source de', 'prospérité.'],
 sub: "IPPOO AAGRO connecte producteurs, transformateurs et marchés locaux. Valorisez vos récoltes, accès aux financements et groupements solidaires.",
 cta: 'Explorer IPPOO-AAGRO', ctaHref: '#espaces', accent: '#16A34A',
 ctaBg: 'linear-gradient(135deg, #16A34A, #059669)',
 grad: 'linear-gradient(160deg, rgba(3,12,3,0.15) 0%, rgba(3,10,2,0.92) 100%)',
 },
 {
 img: imgMarketBig, pos: 'center',
 badge: 'Commerce et Marches africains',
 title: ['Vendez,', 'achetez,', 'prospérez.'],
 sub: "IPPOO MARKET : des milliers de produits locaux en un seul espace. Créez votre corner virtuel, atteignez vos clients partout en Afrique.",
 cta: 'Accéder au Market', ctaHref: '#espaces', accent: '#7C3AED',
 ctaBg: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
 grad: 'linear-gradient(160deg, rgba(15,8,0,0.16) 0%, rgba(12,6,0,0.92) 100%)',
 },
]

/* ── Flash ticker items ───────────────────────────────────────── */
const FLASH_ITEMS = [
 { Icon: Flame, text: "NOUVEAU : Souscription IPPOO ASSURANCE disponible !" },
 { Icon: Gift, text: "Offre de bienvenue : Cadeaux exclusifs pour chaque adhésion" },
 { Icon: Bell, text: "Formation IPPOO : Inscriptions ouvertes pour le prochain cycle" },
 { Icon: TrendingUp,text: "Bonus membres : Gagnez sur chaque parrainage dans votre réseau" },
 { Icon: ShoppingCart, text: "IPPOO MARKET : Des milliers de produits locaux disponibles" },
 { Icon: Heart, text: "Healthy Page : Accès aux soins depuis votre mobile" },
 { Icon: Cpu, text: "IPPOO-KRAAFT : Valorisez votre artisanat et rejoignez la plateforme" },
 { Icon: Wallet, text: "IPPOO-KAASH : Transfert d'argent rapide et sécurisé partout en Afrique" },
]

/* ── Promo banners ───────────────────────────────────────────── */
const BANNERS = [
 {
 bg: '#E0F7FA', titleColor: '#0369A1', accent: '#0891B2',
 icon: Shield, title: 'IPPOO ASSURANCE',
 sub: "Protégez votre activité avec une micro-assurance accessible, sans conditions complexes.",
 cta: 'Souscrire maintenant', url: 'https://insurance.aptdc-zup2.com',
 img: imgW2,
 },
 {
 bg: '#DCFCE7', titleColor: '#15803D', accent: '#16A34A',
 icon: Leaf, title: 'IPPOO AAGRO',
 sub: 'Valorisez vos produits agricoles, accédez aux marchés locaux et régionaux facilement.',
 cta: 'Explorer la plateforme', url: 'https://aagro.ippoo-aptdc.com',
 img: imgW3,
 },
 {
 bg: '#F7FEE7', titleColor: '#4D7C0F', accent: '#84CC16',
 icon: TrendingUp, title: 'CAPITAL-INVEST',
 sub: 'Investissez intelligemment, accès aux bourses, cagnotte, épargne et fonds de solidarité.',
 cta: 'Commencer à investir', url: 'https://kapital.aptdc-zup2.com',
 img: imgW5,
 },
 {
 bg: '#F3E8FF', titleColor: '#6D28D9', accent: '#7C3AED',
 icon: ShoppingCart, title: 'IPPOO MARKET',
 sub: "Des millions de produits locaux en un seul espace : achat, vente et espace corner virtuel.",
 cta: 'Accéder au marché', url: 'https://market.ippoo-aptdc.com',
 img: imgMarketBig,
 },
]

/* ── Categories ──────────────────────────────────────────────── */
const CAT_CARDS = [
 { id: 'finance', label: 'Finance', sub: '5 espaces', Icon: TrendingUp, color: '#0891B2', pastel: '#E0F7FA', grad: 'linear-gradient(145deg, #0891B2 0%, #2563EB 100%)' },
 { id: 'commerce', label: 'Commerce', sub: '7 espaces', Icon: ShoppingCart, color: '#16A34A', pastel: '#DCFCE7', grad: 'linear-gradient(145deg, #16A34A 0%, #059669 100%)' },
 { id: 'social', label: 'Social', sub: '3 espaces', Icon: Users, color: '#7C3AED', pastel: '#F3E8FF', grad: 'linear-gradient(145deg, #7C3AED 0%, #2563EB 100%)' },
 { id: 'services', label: 'Services', sub: '2 espaces', Icon: Truck, color: '#FF2D7A', pastel: '#FFF0F5', grad: 'linear-gradient(145deg, #FF2D7A 0%, #D4AF37 100%)' },
 { id: 'sante', label: 'Santé', sub: '1 espace', Icon: Heart, color: '#059669', pastel: '#DCFCE7', grad: 'linear-gradient(145deg, #059669 0%, #0891B2 100%)' },
 { id: 'lifestyle', label: 'Lifestyle', sub: '3 espaces', Icon: Star, color: '#84CC16', pastel: '#F7FEE7', grad: 'linear-gradient(145deg, #84CC16 0%, #16A34A 100%)' },
]

/* ── Platforms ───────────────────────────────────────────────── */
const PLATFORMS = [
 { id:1, name:'ASSURANCE', tag:'Assurance', cat:'finance', color:'#FF72E2', url:'https://insurance.aptdc-zup2.com', LIcon:Shield,
 img:imgEAssurance1, img2:imgEAssurance2, gradStyle:0,
 desc:"IPPOO-ASSURANCE est l'espace dédié aux solutions d'assurance et d'assistance. Il permet aux particuliers, professionnels et entreprises de souscrire, gérer et suivre leurs contrats d'assurance (santé, automobile, habitation, voyage, agricole, scolaire, professionnelle), tout en donnant accès à des services d'assistance, de prévention et de gestion des sinistres..." },
 { id:2, name:'FINANCES & CRÉDIT', tag:'Credit', cat:'finance', color:'#8DC5B0', url:'https://financial.aptdc-zup2.com', LIcon:TrendingUp,
 img:imgEFinances1, img2:imgEFinances2, gradStyle:1,
 desc:"IPPOO-FINANCES & CRÉDIT est la plateforme dédiée aux services financiers et aux solutions de financement. Elle facilite l'accès au crédit, au microfinancement, aux prêts personnels et professionnels, au financement d'activités économiques ainsi qu'aux services de paiement et de gestion financière..." },
 { id:3, name:'KAPITAL INVEST', tag:'Investissement', cat:'finance', color:'#7EDBFF', url:'https://kapital.aptdc-zup2.com', LIcon:Target,
 img:imgECapital1, img2:imgECapital2, gradStyle:2,
 desc:"IPPOO-KAPITAL INVEST est l'espace consacré à l'investissement et à la mobilisation de capitaux. Il met en relation les investisseurs, les entreprises et les porteurs de projets afin de favoriser le financement, le développement et la croissance des initiatives économiques africaines..." },
 { id:4, name:'AAGRO', tag:'Agriculture', cat:'commerce', color:'#469643', url:'https://aagro.ippoo-aptdc.com', LIcon:Leaf,
 img:imgEAagro1, img2:imgEAagro2, gradStyle:3,
 desc:"IPPOO-AAGRO est la plateforme numérique de l'agriculture et de l'agroalimentaire. Elle accompagne l'ensemble de la chaîne de valeur agricole en connectant producteurs, coopératives, transformateurs, distributeurs, fournisseurs d'intrants, acheteurs et institutions autour de solutions de production, de commercialisation et de financement..." },
 { id:5, name:'SOCIAL FAKT', tag:'Reseau social', cat:'social', color:'#7ED1AA', url:'https://socialfakt.ippoo-aptdc.com', LIcon:Globe,
 img:imgESocialF1, img2:imgESocialF2, gradStyle:4,
 desc:"IPPOO-SOCIAL FAKT est le réseau social communautaire de l'écosystème. Il favorise le partage d'informations, d'expériences, d'actualités, de contenus et d'initiatives citoyennes tout en privilégiant la diffusion d'informations fiables, vérifiées et utiles aux communautés africaines..." },
 { id:6, name:'MARKET', tag:'Marketplace', cat:'commerce', color:'#E9DB64', url:'https://market.ippoo-aptdc.com', LIcon:ShoppingCart,
 img:imgEMarket1, img2:imgEMarket2, gradStyle:5,
 desc:"IPPOO-MARKET est le grand marché numérique de l'écosystème. Il permet aux particuliers, commerçants, entreprises et producteurs d'acheter, de vendre et de distribuer une très large gamme de produits dans un environnement sécurisé, connecté aux autres services..." },
 { id:7, name:'COMIT', tag:'Comites', cat:'social', color:'#7E85E0', url:'https://comyt.ippoo-aptdc.com', LIcon:Users,
 img:imgEComytee1, img2:imgEComytee2, gradStyle:0,
 desc:"IPPOO-COMIT est la plateforme dédiée aux comités d'entreprise, associations professionnelles et organisations internes. Elle centralise la gestion des adhérents, des avantages sociaux, des cotisations, des activités, des événements et des services proposés aux membres afin de renforcer la vie collective et le bien-être au sein des organisations..." },
 { id:8, name:'SHUUP', tag:'Boutiques', cat:'commerce', color:'#DB7EFF', url:'https://shuup.ippoo-aptdc.com', LIcon:Home,
 img:imgEShuup1, img2:imgEShuup2, gradStyle:1,
 desc:"IPPOO-SHUUP est l'espace permettant à chaque commerçant, marque ou entreprise de créer et d'administrer sa propre boutique en ligne. Il offre tous les outils nécessaires pour gérer les catalogues, les commandes, les paiements, les livraisons, les promotions et la relation client..." },
 { id:9, name:'KRAAFT', tag:'Artisanat', cat:'services', color:'#FF12CF', url:'https://kraaft.ippoo-aptdc.com', LIcon:Cpu,
 img:imgEKraaft1, img2:imgEKraaft2, gradStyle:2,
 desc:"IPPOO-KRAAFT est la plateforme des métiers, des artisans et des prestataires de services. Elle facilite la mise en relation entre les clients et les professionnels qualifiés dans tous les secteurs d'activité, tout en valorisant leur savoir-faire et leur expertise artisanale..." },
 { id:10, name:'HEALTHY PAGE', tag:'Sante', cat:'sante', color:'#FF4949', url:'https://healthypage-aptdc.com', LIcon:Heart,
 img:imgEHealthy1, img2:imgEHealthy2, gradStyle:3,
 desc:"L'espace entièrement consacré à la santé, au bien-être et à la prévention. Il rassemble les établissements de santé, les professionnels médicaux, les pharmacies, les laboratoires, les services de téléconsultation ainsi que des contenus et services favorisant une meilleure qualité de vie..." },
 { id:11, name:'FASHION', tag:'Mode', cat:'lifestyle', color:'#C3E5EE', url:'https://fashion.ippoo-aptdc.com', LIcon:Star,
 img:imgEFashion1, img2:imgEShuup2, gradStyle:4,
 desc:"IPPOO-FASHION est la plateforme spécialisée dans la mode, le textile, les accessoires, les cosmétiques et les créations vestimentaires. Elle met en avant les créateurs, les marques, les stylistes et les commerçants tout en offrant une expérience d'achat adaptée aux tendances africaines et internationales..." },
 { id:12, name:'EVENTS', tag:'Evenements', cat:'lifestyle', color:'#D4D19C', url:'https://events.ippoo-aptdc.com', LIcon:Camera,
 img:imgEEvents1, img2:imgEEvents2, gradStyle:5,
 desc:"IPPOO-EVENTS est l'espace dédié à la création, à l'organisation, à la promotion et à la gestion d'événements privés, professionnels, culturels, sportifs et institutionnels. Il facilite la réservation, la billetterie, les inscriptions et la coordination de l'ensemble des activités liées aux événements..." },
 { id:13, name:'WORKS & JOBS', tag:'Emploi', cat:'services', color:'#3B45D0', url:'https://works.aptdc-zup2.com', LIcon:Briefcase,
 img:imgEWorks1, img2:imgEWorks2, gradStyle:0,
 desc:"IPPOO-WORKS & JOBS est la plateforme de l'emploi, des compétences et des prestations professionnelles. Elle met en relation employeurs, entreprises, recruteurs, travailleurs indépendants, artisans et demandeurs d'emploi afin de faciliter le recrutement, les missions et le développement des carrières..." },
 { id:14, name:'DIAZZ-IPPOO', tag:'Diaspora', cat:'social', color:'#FF7EE5', url:'https://diazz.ippoo-aptdc.com', LIcon:Headphones,
 img:imgEDiazz1, img2:imgEDiazz2, gradStyle:1,
 desc:"DIAZZ-IPPOO est l'espace conçu spécialement pour la diaspora africaine. Il regroupe l'ensemble des services permettant aux ressortissants vivant à l'étranger de rester connectés à leur pays d'origine, de soutenir leurs proches, d'investir, de consommer et d'accéder à des services financiers, administratifs, immobiliers et commerciaux..." },
 { id:15, name:'TRIIP', tag:'Mobilite', cat:'lifestyle', color:'#FF857D', url:'https://triip.aptdc-zup2.com', LIcon:Truck,
 img:imgETriip1, img2:imgETriip2, gradStyle:2,
 desc:"IPPOO-TRIIP est la plateforme intégrée de mobilité, de transport et de logistique. Elle rassemble toutes les solutions permettant de faciliter les déplacements quotidiens : transport urbain, covoiturage, livraison, transport de colis, réservation de voyages, location de véhicules et services de mobilité nationale et internationale..." },
 { id:16, name:'KAASH', tag:'Portefeuille', cat:'finance', color:'#A4C08A', url:'#', LIcon:Wallet,
 img:imgEKaash, gradStyle:3,
 desc:"IPPOO-KAASH est le portefeuille numérique de l'écosystème. Il permet de recevoir, envoyer, conserver, transférer et dépenser de l'argent, d'effectuer des paiements, d'encaisser des revenus, de gérer ses finances personnelles et professionnelles et d'accéder aux services financiers intégrés..." },
 { id:17, name:"BROK'IN-VESTS", tag:'Commerce B2B', cat:'finance', color:'#A9A4D8', url:'https://broks.ippoo-aptdc.com', LIcon:TrendingUp,
 img:imgEBroks1, img2:imgEBroks2, gradStyle:4,
 desc:"IPPOO-BROK'IN-VESTS est le comptoir commercial de l'écosystème. Cette plateforme est dédiée à la production, à la transformation, à l'approvisionnement, au stockage, au négoce et à la distribution de biens. Elle facilite les échanges entre producteurs, industriels, grossistes, distributeurs, importateurs et exportateurs..." },
 { id:18, name:'MARKET TRAKER', tag:'Intelligence', cat:'commerce', color:'#857F9E', url:'https://markettraker.ippoo-aptdc.com', LIcon:Target,
 img:imgEMTreker1, img2:imgEMTreker2, gradStyle:5,
 desc:"La plateforme d'intelligence économique et d'analyse des marchés. Elle collecte, analyse et restitue des données sur les prix, les tendances, la demande, l'offre, la concurrence et les opportunités commerciales afin d'aider les particuliers, les entreprises et les investisseurs à prendre des décisions éclairées et stratégiques au quotidien..." },
 { id:19, name:'KOOKA', tag:'Qualite', cat:'commerce', color:'#7ED1BB', url:'https://kooka.ippoo-aptdc.com', LIcon:BadgeCheck,
 img:imgEKooka1, img2:imgEKooka2, gradStyle:0,
 desc:"La plateforme de contrôle des normes de qualité. Elle permet d'évaluer, d'inspecter, de certifier et de contrôler la conformité des produits, des services, des processus et des unités de production selon les normes de qualité, de sécurité, d'hygiène et les exigences réglementaires applicables..." },
 { id:20, name:'KOOKI', tag:'Tracabilite', cat:'commerce', color:'#F3F29E', url:'https://kooki.ippoo-aptdc.com', LIcon:Layers,
 img:imgEKooki1, img2:imgEKooki2, gradStyle:1,
 desc:"La plateforme de traçabilité des normes et de la qualité des produits. Elle assure le suivi complet des produits tout au long de leur cycle de vie, depuis leurs productions jusqu'au consommateur final, en enregistrant leurs origines, leurs contrôles qualité, leurs certifications et toutes les informations garantissant leur authenticité et leur conformité, pour une aisance de consommation..." },
 { id:26, name:"THE GOOD'S DEEL", tag:'Bons Plans', cat:'commerce', color:'#FFE600', url:'#', LIcon:Gift,
 img:imgEGoods1, img2:imgEGoods2, gradStyle:1,
 desc:"La plateforme des opportunités commerciales et des avantages consommateurs. Elle centralise les promotions, ventes privées, offres exclusives, achats groupés, programmes de fidélité, déstockages, bonnes affaires et autres mécanismes permettant aux consommateurs et aux entreprises de réaliser des économies tout en dynamisant les ventes..." },
]

/* ── Insights ────────────────────────────────────────────────── */
const INSIGHTS = [
 { id:'a', title:'Nos Ambitions', sub:'Structurer et valoriser l\'informel', color:'#FF2D7A', img:imgMarketBig, pos:'center',
 body:`Notre ambition est de constituer **un réseau solide d'acteurs organisés** en sous-groupements sectoriels dynamiques. Une communauté économique intersectorielle au service du développement de l'informel en Afrique.\n\nApproche **progressive, inclusive et durable** : chaque acteur part de sa réalité et grandit à son rythme avec le soutien de l'écosystème IPPOO.` },
 { id:'b', title:'Valeurs Ajoutees', sub:'Ce qui fait la difference IPPOO', color:'#16A34A', img:imgShopkeeper, pos:'center top',
 body:`Notre différenciation repose sur une **approche terrain et participative** avec co-construction des solutions.\n\n**Accès simplifié** via plateformes mobiles intuitives conçues pour l'informel.\n\n**Dimension humaine** : chaque acteur informel est un partenaire valorisé, pas seulement un bénéficiaire.` },
 { id:'c', title:'Presence sur les Marches', sub:'Masse et niches', color:'#E10600', img:imgMarketOutdoor, pos:'center',
 body:`Les acteurs informels contribuent à hauteur de **50 à 80% du PIB** dans certains pays africains et emploient plus de **90% de la main-d'œuvre active**.\n\nIPPOO les relie aux **marchés locaux, régionaux et internationaux** en simplifiant l'accès aux opportunités de vente, d'achat et de production.` },
 { id:'d', title:'Besoins et Fragilités', sub:'Défis réels, solutions concrètes', color:'#7C3AED', img:imgCommunityBw, pos:'center',
 body:`**Besoins prioritaires :** Financement adapté, équipements, formations pratiques, protection sociale.\n\n**Fragilités :** Revenus irréguliers, faible capital, isolement collectif, faible accès aux marchés structurés.\n\nIPPOO répond avec une offre intégrée : assurance, crédit, formation, réseau et accompagnement terrain.` },
 { id:'e', title:'Roles dans la Societe', sub:"Piliers de l'economie populaire", color:'#FF2D7A', img:imgWomenDuo, pos:'center top',
 body:`Le secteur informel assure la **sécurité alimentaire**, maintient les **équilibres sociaux** et emploie plus de **90% de la main-d'œuvre** dans les pays en développement.\n\nIPPOO renforce ce rôle essentiel en structurant les groupements, en facilitant la formation et en créant des ponts vers les marchés formels.` },
 { id:'f', title:'Pourquoi Rester Informel ?', sub:'Comprendre pour mieux accompagner', color:'#0891B2', img:imgCattle, pos:'center',
 body:`IPPOO ne cherche pas à formaliser de force. Notre approche : accompagnement **concret, souple et progressif** pour mieux gérer et développer les activités.\n\nNous respectons la réalité de chaque acteur et proposons des services **simples, souples et utiles immédiatement**, sans formalisation contraignante.` },
]

/* ── Profils ─────────────────────────────────────────────────── */
const PROFILS = [
 { num:'01', label:'Producteurs', desc:'Agriculteurs, éleveurs et transformateurs locaux', Icon:Leaf, color:'#16A34A', pastel:'#ECFDF5', border:'#BBF7D0', page:'groupements' as PageKey },
 { num:'02', label:'Transformateurs', desc:'Unite de transformation alimentaire et artisanale', Icon:Cpu, color:'#FF2D7A', pastel:'#FFF3E6', border:'#FDE68A', page:'groupements' as PageKey },
 { num:'03', label:'Distributeurs', desc:'Commercants, revendeurs et marketeurs locaux', Icon:Truck, color:'#E10600', pastel:'#FEF2F2', border:'#FECACA', page:'emploi' as PageKey },
 { num:'04', label:'Prestataires', desc:'Services, freelances et consultants independants', Icon:Briefcase, color:'#7C3AED', pastel:'#F5F3FF', border:'#DDD6FE', page:'emploi' as PageKey },
 { num:'05', label:'Artisans', desc:'Createurs, artisans et savoir-faire traditionnels', Icon:Star, color:'#8B5CF6', pastel:'#F5F3FF', border:'#DDD6FE', page:'groupements' as PageKey },
 { num:'06', label:'Novateurs', desc:'Jeunes entrepreneurs, étudiants et technologistes', Icon:Zap, color:'#0891B2', pastel:'#ECFEFF', border:'#A5F3FC', page:'programmes' as PageKey },
]

/* ── Social media ────────────────────────────────────────────── */
function SocialIcon({ name }: { name: string }) {
 if (name === 'WhatsApp') return (
 <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
 </svg>
 )
 if (name === 'Facebook') return (
 <svg viewBox="0 0 24 24" fill="#1877F2" className="w-5 h-5">
 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
 </svg>
 )
 if (name === 'TikTok') return (
 <svg viewBox="0 0 24 24" fill="#010101" className="w-5 h-5">
 <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
 </svg>
 )
 if (name === 'Instagram') return (
 <svg viewBox="0 0 24 24" fill="#C13584" className="w-5 h-5">
 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
 </svg>
 )
 if (name === 'LinkedIn') return (
 <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-5 h-5">
 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
 </svg>
 )
 if (name === 'X') return (
 <svg viewBox="0 0 24 24" fill="#000000" className="w-5 h-5">
 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.629 5.905-5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
 </svg>
 )
 return null
}

const SOCIAL = [
 { label:'WhatsApp', href:'https://wa.me/2290141521092', bg:'#E7FBF0' },
 { label:'Facebook', href:'https://facebook.com/ippoo.aptdc', bg:'#EBF3FF' },
 { label:'TikTok', href:'https://tiktok.com/@ippoo.aptdc', bg:'#F0F0F0' },
 { label:'Instagram',href:'https://instagram.com/ippoo.aptdc', bg:'#FFF0F5' },
 { label:'LinkedIn', href:'https://linkedin.com/company/ippoo-aptdc', bg:'#EBF4FF' },
 { label:'X', href:'https://x.com/ippoo_aptdc', bg:'#F5F5F5' },
]

/* ── Scroll reveal ───────────────────────────────────────────── */
function useReveal() {
 useEffect(() => {
 let io: IntersectionObserver

 const init = () => {
 io?.disconnect()
 io = new IntersectionObserver(
 es => es.forEach(e => {
 if (e.isIntersecting) {
 e.target.classList.add('show')
 io.unobserve(e.target)
 }
 }),
 { threshold: 0, rootMargin: '0px 0px 120px 0px' }
 )
 document.querySelectorAll('[data-r]').forEach(el => {
 if (el.classList.contains('show')) return
 const rect = el.getBoundingClientRect()
 if (rect.top < window.innerHeight + 120) {
 el.classList.add('show')
 } else {
 io.observe(el)
 }
 })
 }

 init()
 // Re-init after page navigation without changing dep-array size
 const onPageChange = () => requestAnimationFrame(init)
 window.addEventListener('ippoo:pagechange', onPageChange)
 return () => { io?.disconnect(); window.removeEventListener('ippoo:pagechange', onPageChange) }
 }, []) // always [] - never changes size
}

/* ── Rich text renderer ──────────────────────────────────────── */
function RT({ text, color }: { text: string; color: string }) {
 return (
 <div className="space-y-2 text-[14px] leading-[1.75] text-[#374151]">
 {text.split('\n').map((line, i) => {
 if (!line.trim()) return null
 const parts = line.split(/\*\*(.*?)\*\*/g)
 return <p key={i}>{parts.map((p, j) => j % 2 === 1
 ? <strong key={j} style={{ color }} className="font-semibold">{p}</strong>
 : <IpHL key={j} text={p} color={color} />)}</p>
 })}
 </div>
 )
}

/* ── Gradient Pill (stats) ───────────────────────────────────── */
function GradPill({ icon: Icon, label, value, grad }: { icon: any; label: string; value: string; grad: string }) {
 return (
 <div className="flex items-center justify-between rounded-2xl px-4 py-3.5" style={{ background: grad }}>
 <div>
 <p className="text-white text-[11px] font-semibold uppercase tracking-wider">{label}</p>
 <p className="text-white font-black text-[20px] leading-none mt-0.5">{value}</p>
 </div>
 <Icon size={32} className="text-white/20" />
 </div>
 )
}

/* ── Numbered Badge ──────────────────────────────────────────── */
function Badge({ n, color }: { n: string; color: string }) {
 return (
 <div className="relative flex items-center justify-center shrink-0" style={{ width:44, height:44 }}>
 <div className="absolute inset-0 rounded-2xl rotate-12 opacity-20" style={{ background: color }} />
 <div className="absolute inset-0.5 rounded-xl -rotate-6 opacity-30" style={{ background: color }} />
 <div className="relative w-9 h-9 rounded-xl flex items-center justify-center"
 style={{ background:`linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`, boxShadow:`0 4px 12px ${color}55` }}>
 <span className="text-white font-black text-[11px] tracking-wider">{n}</span>
 </div>
 </div>
 )
}

/* ── Animated stat counter ───────────────────────────────────── */
function StatCounter({ target, suffix, label, Icon, color }: {
 target: number; suffix: string; label: string;
 Icon: React.ComponentType<{size?:number;className?:string;style?:React.CSSProperties}>; color: string
}) {
 const [count, setCount] = useState(0)
 const ref = useRef<HTMLDivElement>(null)
 useEffect(() => {
 const el = ref.current
 if (!el) return
 const io = new IntersectionObserver(([entry]) => {
 if (!entry.isIntersecting) return
 io.disconnect()
 const dur = 1600
 const start = performance.now()
 const tick = (now: number) => {
 const progress = Math.min((now - start) / dur, 1)
 const ease = 1 - Math.pow(1 - progress, 3)
 setCount(Math.floor(ease * target))
 if (progress < 1) requestAnimationFrame(tick)
 else setCount(target)
 }
 requestAnimationFrame(tick)
 }, { threshold: 0.4 })
 io.observe(el)
 return () => io.disconnect()
 }, [target])
 return (
 <div ref={ref} className="rounded-3xl p-5 flex flex-col gap-2"
 style={{ background:'rgba(0,0,0,0.07)', border:'1px solid rgba(0,0,0,0.1)' }}>
 <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
 style={{ background:`${color}22` }}>
 <Icon size={18} style={{ color }} />
 </div>
 <p className="font-black leading-none" style={{ fontSize:'clamp(28px,7vw,40px)', color }}>
 {count.toLocaleString('fr-FR')}{suffix}
 </p>
 <p className="text-[#374151] text-[12px] font-medium leading-tight">{label}</p>
 </div>
 )
}

/* ── Bottom nav items ────────────────────────────────────────── */
const BOTTOM_NAV = [
 { id:'home', label:'Accueil', Icon:Home, href:'#', page: null as PageKey | null },
 { id:'espaces', label:'Espaces', Icon:Layers, href:'#espaces', page: null as PageKey | null },
 { id:'moncompte', label:'Mon Espace',Icon:Users, href:'', page: 'moncompte' as PageKey },
 { id:'adhesion', label:'Rejoindre', Icon:UserPlus, href:'', page: 'adhesion' as PageKey },
]

/* ── Toast type ──────────────────────────────────────────────── */
type Toast = { id:string; msg:string; kind:'gift'|'promo'|'info'|'alert'; exiting?:boolean }

/* ── Emergency contacts ──────────────────────────────────────── */
const EMERGENCY = [
 { label:'Support IPPOO', LIcon:Headphones, href:'tel:+2290141521092', color:'#FF2D7A' },
 { label:'Email IPPOO', LIcon:Mail, href:'mailto:ippooz.up.2@gmail.com', color:'#2563EB' },
 { label:'WhatsApp', LIcon:MessageCircle, href:'https://wa.me/2290141521092', color:'#25D366' },
 { label:'SAMU', LIcon:Phone, href:'tel:18', color:'#E10600' },
 { label:'Pompiers', LIcon:Flame, href:'tel:18', color:'#FF4500' },
 { label:'Police', LIcon:Shield, href:'tel:117', color:'#1D4ED8' },
]

/* ══════════════════════════════════════════════════════════════
 MAIN APP
══════════════════════════════════════════════════════════════ */
export default function App() {
 const [scrolled, setScrolled] = useState(false)
 const [menuOpen, setMenuOpen] = useState(false)
 const [slide, setSlide] = useState(0)
 const [activeCat, setActiveCat] = useState('all')
 const [openInsight, setOpenInsight] = useState<string | null>(null)
 const [form, setForm] = useState({ nom:'', email:'', msg:'' })
 const [currentPage, setCurrentPage] = useState<PageKey>(pageFromHash)
 const [toasts, setToasts] = useState<Toast[]>([])
 const [emergencyOpen, setEmergencyOpen] = useState(false)
 const [formSent, setFormSent] = useState(false)
 /* Nombre de navigations avant empilées dans l'historique de la session :
  permet à goBack() de savoir s'il peut revenir en arrière sans quitter le site. */
 const inAppDepth = useRef(0)

 const dispatch = () => window.dispatchEvent(new CustomEvent('ippoo:pagechange'))

 /* Navigation avant : mémorise la position de scroll de la page courante sur
  l'entrée d'historique actuelle, puis empile une nouvelle entrée #/page. */
 const goPage = (p: PageKey) => {
 setMenuOpen(false)
 if (p === currentPage) { window.scrollTo({ top: 0, behavior: 'instant' }); return }
 window.history.replaceState({ page: currentPage, scrollY: window.scrollY }, '')
 window.history.pushState({ page: p, scrollY: 0 }, '', p === 'home' ? '#/' : '#/' + p)
 inAppDepth.current += 1
 setCurrentPage(p)
 window.scrollTo({ top: 0, behavior: 'instant' })
 dispatch()
 }
 const goHome = () => goPage('home')
 /* Retour : revient au point précédent exact (page + scroll) via l'historique.
  Si aucune navigation interne n'a eu lieu (accès direct / rafraîchissement),
  on rejoint l'accueil plutôt que de quitter le site. */
 const goBack = () => {
 if (inAppDepth.current > 0) window.history.back()
 else goPage('home')
 }

 useReveal()

 useEffect(() => {
 const fn = () => setScrolled(window.scrollY > 56)
 fn()
 window.addEventListener('scroll', fn, { passive: true })
 return () => window.removeEventListener('scroll', fn)
 }, [])

 useEffect(() => {
 const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 5500)
 return () => clearInterval(t)
 }, [])

 /* Routage historique : retour/avancer du navigateur restaurent la page et la
  position de scroll précédentes. Le rafraîchissement conserve la page courante
  (état initialisé depuis le hash). */
 useEffect(() => {
 const prev = window.history.scrollRestoration
 try { window.history.scrollRestoration = 'manual' } catch {}
 // Normalise l'entrée d'historique initiale (utile aux liens profonds/refresh).
 const initial = pageFromHash()
 window.history.replaceState({ page: initial, scrollY: 0 }, '', initial === 'home' ? (window.location.hash || '#/') : '#/' + initial)
 window.scrollTo({ top: 0, behavior: 'instant' })

 const onPop = (e: PopStateEvent) => {
 const p = pageFromHash()
 const y = e.state && typeof e.state.scrollY === 'number' ? e.state.scrollY : 0
 setMenuOpen(false)
 setCurrentPage(p)
 dispatch()
 // Restaure le scroll après le rendu de la page cible.
 requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo({ top: y, behavior: 'instant' })))
 }
 window.addEventListener('popstate', onPop)
 return () => {
 window.removeEventListener('popstate', onPop)
 try { window.history.scrollRestoration = prev } catch {}
 }
 }, [])


 /* Scheduled smart notifications */
 const addToast = useCallback((msg: string, kind: Toast['kind']) => {
 const id = Math.random().toString(36).slice(2)
 setToasts(p => [...p, { id, msg, kind }])
 setTimeout(() => {
 setToasts(p => p.map(t => t.id === id ? { ...t, exiting:true } : t))
 setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 380)
 }, 5500)
 }, [])

 useEffect(() => {
 const t1 = setTimeout(() => addToast('Cadeau de bienvenue disponible pour les nouveaux membres !', 'gift'), 7000)
 const t2 = setTimeout(() => addToast('Promo : Souscription IPPOO-ASSURANCE offerte ce mois-ci !', 'promo'), 18000)
 const t3 = setTimeout(() => addToast('Bonus : Gagnez sur chaque parrainage accepte', 'info'), 35000)
 const t4 = setTimeout(() => addToast('Jeu concours : Participez et gagnez des credits IPPOO !', 'alert'), 50000)
 return () => [t1,t2,t3,t4].forEach(clearTimeout)
 }, [addToast])

 const filtered = activeCat === 'all' ? PLATFORMS : PLATFORMS.filter(p => p.cat === activeCat)
 const s = SLIDES[slide % SLIDES.length]

 const NAV_LINKS: Array<{ label: string; href?: string; page?: PageKey }> = [
 { label:'Accueil', href:'#' },
 { label:'À propos', page:'apropos' },
 { label:'Espaces', href:'#espaces' },
 { label:'Formation', page:'programmes' },
 { label:'Santé', page:'sante' },
 { label:'Bourse', page:'bourse' },
 { label:'Actualités', page:'actualites' },
 { label:'Contact', page:'contact' },
 { label:'Inscription', page:'inscription' },
 ]

 /* ── Annex page routing ─────────────────────────────────────── */
 const subPage: React.ReactNode | null = (() => {
 if (currentPage === 'adhesion') return <AdhesionPage onBack={goBack} />
 if (currentPage === 'parrainage') return <ParrainagePage onBack={goBack} />
 if (currentPage === 'business') return <BusinessPage onBack={goBack} />
 if (currentPage === 'faq') return <FAQPage onBack={goBack} />
 if (currentPage === 'actualites') return <ActualitesPage onBack={goBack} />
 if (currentPage === 'doleances') return <DoleancesPage onBack={goBack} />
 if (currentPage === 'mentions') return <MentionsLegalesPage onBack={goBack} />
 if (currentPage === 'privacy') return <PolitiqueConfidentialitePage onBack={goBack} />
 if (currentPage === 'cgu') return <CGUPage onBack={goBack} />
 if (currentPage === 'apropos') return <AProposPage onBack={goBack} />
 if (currentPage === 'programmes') return <ProgrammesPage onBack={goBack} />
 if (currentPage === 'sante') return <SantePage onBack={goBack} />
 if (currentPage === 'groupements') return <GroupementsPage onBack={goBack} />
 if (currentPage === 'investissement') return <InvestissementPage onBack={goBack} />
 if (currentPage === 'emploi') return <EmploiPage onBack={goBack} />
 if (currentPage === 'moncompte') return <MonComptePage onBack={goBack} onNavigate={p => goPage(p as PageKey)} />
 if (currentPage === 'souscriptions') return <SouscriptionsPage onBack={goBack} />
 if (currentPage === 'kaash') return <KaashPage onBack={goBack} />
 if (currentPage === 'bourse') return <BourseValeurPage onBack={goBack} />
 if (currentPage === 'contact') return <ContactPage onBack={goBack} />
 if (currentPage === 'inscription') return <InscriptionPage onBack={goBack} />
 return null
 })()

 if (subPage) return (
 <div className="min-h-screen overflow-x-hidden" style={{ background:'#FFF8F2' }}>
 {/* ── Header fixe sur toutes les pages ── */}
 <header className="fixed inset-x-0 top-0 z-50 header-up">
 <div className="flex items-center justify-between px-4 h-[72px] max-w-screen-xl mx-auto">
 <button onClick={goHome} className="shrink-0">
 <img src={logo} alt="IPPOO" className="h-[58px] w-auto object-contain" />
 </button>
 <nav className="hidden lg:flex items-center gap-1">
 {NAV_LINKS.map(l => (
 l.page
 ? <button key={l.label} onClick={() => goPage(l.page!)}
 className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-colors text-[#374151] hover:text-[#FF2D7A] hover:bg-[#FFF3E6] ${currentPage === l.page ? 'text-[#FF2D7A] bg-[#FFF3E6]' : ''}`}>
 {l.label}
 </button>
 : <button key={l.label} onClick={goHome}
 className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-colors ${scrolled ? 'text-[#374151] hover:text-[#FF2D7A] hover:bg-[#FFF3E6]' : 'text-white hover:text-white hover:bg-white/10'}`}>
 {l.label}
 </button>
 ))}
 </nav>
 <div className="flex items-center gap-2">
 <button onClick={() => goPage('adhesion')}
 className="btn-pop flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[13px] font-bold text-white"
 style={{ background:'linear-gradient(135deg, #FF2D7A 0%, #E10600 100%)', boxShadow:'0 4px 16px rgba(225,6,0,0.4)' }}>
 Rejoindre <ArrowRight size={13} />
 </button>
 <button onClick={() => setMenuOpen(!menuOpen)}
 className="lg:hidden p-2.5 rounded-xl text-[#111827] bg-[#F3E8D8] transition-colors">
 {menuOpen ? <X size={20} /> : <Menu size={20} />}
 </button>
 </div>
 </div>
 {/* Mobile menu */}
 <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[85vh]' : 'max-h-0'}`}
 style={{ background:'#FFF8F2', borderTop: menuOpen ? '1px solid #F3E8D8' : 'none' }}>
 <nav className="px-4 py-3 flex flex-col gap-0.5 max-h-[78vh] overflow-y-auto">
 {NAV_LINKS.map(l => (
 <button key={l.label}
 onClick={() => { if (l.page) goPage(l.page); else goHome(); setMenuOpen(false) }}
 className={`flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-medium text-left w-full transition-colors min-h-[44px] ${currentPage === l.page ? 'bg-[#FFF3E6] text-[#FF2D7A]' : 'text-[#111827] hover:bg-[#FFF3E6] hover:text-[#FF2D7A]'}`}>
 {l.label} <ChevronRight size={15} className="text-[#D1D5DB]" />
 </button>
 ))}
 <div className="pt-3 pb-1 border-t border-[#F3E8D8] mt-2">
 <button onClick={() => { goPage('adhesion'); setMenuOpen(false) }}
 className="btn-pop w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[15px] font-bold text-white"
 style={{ background:'linear-gradient(135deg, #FF2D7A, #E10600)', boxShadow:'0 4px 16px rgba(225,6,0,0.4)' }}>
 Rejoindre <Ip /> <ArrowRight size={15} />
 </button>
 </div>
 </nav>
 </div>
 </header>
 {subPage}
 {/* ── Bouton flottant d'urgence (aussi présent sur les sous-pages) ── */}
 <div className="fixed right-4 bottom-24 lg:bottom-6 z-[990]">
 {emergencyOpen && (
 <div className="absolute bottom-16 right-0 flex flex-col gap-2 mb-2">
 {EMERGENCY.map((e, i) => (
 <a key={e.label} href={e.href}
 target={e.href.startsWith('http') ? '_blank' : undefined}
 rel="noopener noreferrer"
 className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl shadow-xl btn-pop text-white font-bold text-[13px] whitespace-nowrap"
 style={{ background: e.color, boxShadow:`0 4px 20px ${e.color}66`,
 animationDelay:`${i*0.04}s`, animation:'toastIn 0.35s cubic-bezier(0.16,1,0.3,1) both' }}>
 <e.LIcon size={15} className="shrink-0" />
 {e.label}
 </a>
 ))}
 </div>
 )}
 <button onClick={() => setEmergencyOpen(!emergencyOpen)}
 className="emerg-pulse w-14 h-14 rounded-full flex items-center justify-center shadow-2xl btn-pop"
 style={{ background: emergencyOpen ? 'linear-gradient(135deg, #374151, #111827)' : 'linear-gradient(135deg, #E10600, #FF4500)',
 boxShadow: emergencyOpen ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(225,6,0,0.5)' }}>
 {emergencyOpen ? <X size={22} className="text-white" /> : <Phone size={22} className="text-white" />}
 </button>
 {!emergencyOpen && (
 <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center badge-bounce"
 style={{ background:'#FF2D7A', fontSize:'9px', fontWeight:'black', color:'white', border:'2px solid white' }}>
 !
 </div>
 )}
 </div>
 {/* ── Bottom nav ── */}
 <nav className="fixed bottom-0 inset-x-0 z-50 lg:hidden"
 style={{ background:'rgba(255,248,242,0.96)', backdropFilter:'blur(20px)', borderTop:'1px solid #F3E8D8', boxShadow:'0 -4px 24px rgba(0,0,0,0.08)' }}>
 <div className="grid grid-cols-4 px-2 py-2">
 {BOTTOM_NAV.map(tab => {
 const isActive = tab.page ? currentPage === tab.page : false
 return (
 <button key={tab.id} onClick={() => { if (tab.page) goPage(tab.page); else goHome() }}
 className="flex flex-col items-center gap-1 py-1.5 rounded-2xl transition-all btn-pop min-h-[52px] justify-center relative w-full">
 {isActive && <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-2xl" style={{ background:'linear-gradient(135deg, #FF2D7A, #E10600)', opacity:0.12 }} />}
 <div className="relative z-10 w-6 h-6 flex items-center justify-center">
 <tab.Icon size={20} style={{ color: isActive ? '#E10600' : '#9CA3AF' }} strokeWidth={isActive ? 2.5 : 1.8} />
 </div>
 <span className="text-[10px] font-bold relative z-10 leading-none" style={{ color: isActive ? '#E10600' : '#9CA3AF' }}>{tab.label}</span>
 </button>
 )
 })}
 </div>
 <div style={{ height:'env(safe-area-inset-bottom, 0px)' }} />
 </nav>
 </div>
 )

 return (
 <div className="min-h-screen overflow-x-hidden" style={{ background:'#FFF8F2', paddingBottom:'80px' }}>

 {/* ══════════ HEADER ══════════ */}
 <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'header-up' : 'bg-transparent'}`}>
 <div className="flex items-center justify-between px-4 h-[60px] max-w-screen-xl mx-auto">
 <a href="#" className="shrink-0">
 <img src={scrolled ? logo : logoWhite} alt="IPPOO" className="h-[55px] w-auto object-contain transition-all duration-300" />
 </a>

 {/* Desktop nav */}
 <nav className="hidden lg:flex items-center gap-1">
 {NAV_LINKS.map(l => (
 l.page
 ? <button key={l.label} onClick={() => goPage(l.page!)}
 className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-colors ${scrolled ? 'text-[#374151] hover:text-[#FF2D7A] hover:bg-[#FFF3E6]' : 'text-white hover:text-white hover:bg-white/10'}`}>
 {l.label}
 </button>
 : <a key={l.href} href={l.href}
 className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-colors ${scrolled ? 'text-[#374151] hover:text-[#FF2D7A] hover:bg-[#FFF3E6]' : 'text-white hover:text-white hover:bg-white/10'}`}>
 {l.label}
 </a>
 ))}
 </nav>

 <div className="flex items-center gap-2">
 <button onClick={() => goPage('adhesion')}
 className="btn-pop flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[13px] font-bold text-white"
 style={{ background:'linear-gradient(135deg, #FF2D7A 0%, #E10600 100%)', boxShadow:'0 4px 16px rgba(225,6,0,0.4)' }}>
 Rejoindre <ArrowRight size={13} />
 </button>
 <button onClick={() => setMenuOpen(!menuOpen)}
 className={`lg:hidden p-2.5 rounded-xl transition-colors ${scrolled ? 'text-[#111827] bg-[#F3E8D8]' : 'text-white bg-white/15'}`}>
 {menuOpen ? <X size={20} /> : <Menu size={20} />}
 </button>
 </div>
 </div>

 {/* Mobile menu */}
 <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[85vh]' : 'max-h-0'}`}
 style={{ background:'#FFF8F2', borderTop: menuOpen ? '1px solid #F3E8D8' : 'none' }}>
 <nav className="px-4 py-3 flex flex-col gap-0.5 max-h-[78vh] overflow-y-auto">
 {/* Sections principales */}
 <p className="px-4 pt-2 pb-1 text-[10px] font-black uppercase tracking-widest text-[#9CA3AF]">Principal</p>
 {NAV_LINKS.map(l => (
 l.page
 ? <button key={l.label} onClick={() => goPage(l.page!)}
 className="flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-medium text-[#111827] hover:bg-[#FFF3E6] hover:text-[#FF2D7A] transition-colors min-h-[44px] w-full text-left">
 {l.label} <ChevronRight size={15} className="text-[#D1D5DB]" />
 </button>
 : <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
 className="flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-medium text-[#111827] hover:bg-[#FFF3E6] hover:text-[#FF2D7A] transition-colors min-h-[44px]">
 {l.label} <ChevronRight size={15} className="text-[#D1D5DB]" />
 </a>
 ))}
 {/* Espace Membre */}
 <div className="h-px bg-[#F3E8D8] mx-4 my-1.5" />
 <p className="px-4 pb-1 text-[10px] font-black uppercase tracking-widest text-[#9CA3AF]">Mon compte</p>
 {([
 { label: 'Mon Espace', page: 'moncompte' },
 { label: 'Adhésion', page: 'adhesion' },
 { label: 'Souscriptions', page: 'souscriptions' },
 { label: 'Parrainage', page: 'parrainage' },
 { label: 'KAASH', page: 'kaash' },
 { label: 'IPPOO Business', page: 'business' },
 ] as Array<{label:string;page:PageKey}>).map(l => (
 <button key={l.label} onClick={() => goPage(l.page)}
 className="flex items-center justify-between px-4 py-2.5 rounded-2xl text-[14px] font-medium text-[#374151] hover:bg-[#FFF3E6] hover:text-[#FF2D7A] transition-colors min-h-[42px] w-full text-left">
 {l.label} <ChevronRight size={13} className="text-[#E5E7EB]" />
 </button>
 ))}
 {/* Services */}
 <div className="h-px bg-[#F3E8D8] mx-4 my-1.5" />
 <p className="px-4 pb-1 text-[10px] font-black uppercase tracking-widest text-[#9CA3AF]">Services</p>
 {([
 { label: 'Groupements', page: 'groupements' },
 { label: 'Investissement', page: 'investissement' },
 { label: 'Emploi & Works', page: 'emploi' },
 { label: 'Doléances', page: 'doleances' },
 { label: 'Bourse des Valeurs', page: 'bourse' },
 { label: 'Contact', page: 'contact' },
 { label: 'Inscription', page: 'inscription' },
 { label: 'FAQ', page: 'faq' },
 ] as Array<{label:string;page:PageKey}>).map(l => (
 <button key={l.label} onClick={() => goPage(l.page)}
 className="flex items-center justify-between px-4 py-2.5 rounded-2xl text-[14px] font-medium text-[#374151] hover:bg-[#FFF3E6] hover:text-[#FF2D7A] transition-colors min-h-[42px] w-full text-left">
 {l.label} <ChevronRight size={13} className="text-[#E5E7EB]" />
 </button>
 ))}
 <div className="h-px bg-[#F3E8D8] mx-4 my-1" />
 <a href="tel:+2290141521092"
 className="flex items-center gap-2 px-4 py-3 text-[13px] text-[#6B7280]">
 <Phone size={14} /> +229 01 41 52 10 92
 </a>
 <a href="mailto:ippooz.up.2@gmail.com"
 className="flex items-center gap-2 px-4 py-3 text-[13px] text-[#6B7280]">
 <Mail size={14} /> ippooz.up.2@gmail.com
 </a>
 </nav>
 </div>
 </header>

 {/* ══════════ HERO SLIDER ══════════ */}
 <section className="relative flex flex-col overflow-hidden" style={{ minHeight:'100svh' }}>

 {/* ── Full-bleed background image per slide ── */}
 {SLIDES.map((sl, i) => (
 <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i===slide?'opacity-100':'opacity-0'}`}>
 <img src={sl.img} alt="" className="absolute inset-0 w-full h-full object-cover"
 style={{ objectPosition: sl.pos, animation: i===slide ? 'heroKenBurns 8s ease-out forwards' : 'none' }} />
 {/* Base per-slide gradient */}
 <div className="absolute inset-0" style={{ background: sl.grad }} />
 {/* Universal legibility overlay - dark vignette bottom-heavy */}
 <div className="absolute inset-0" style={{
 background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 45%, rgba(0,0,0,0.10) 75%, rgba(0,0,0,0) 100%)'
 }} />
 </div>
 ))}

 {/* Top scrim for header legibility */}
 <div className="absolute inset-x-0 top-0 h-36 z-10 pointer-events-none"
 style={{ background:'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%)' }} />

 {/* ── Text content ── */}
 <div className="relative z-20 flex flex-col flex-1 justify-end max-w-screen-xl mx-auto w-full">
 <div className="px-4 pb-4">

 {/* Title */}
 <h1 key={slide+'h'} className="mb-3">
 {s.title.map((w, i) => (
 <span key={i} className="overflow-hidden block">
 <span className="w-in font-black text-white leading-[1.0]"
 style={{ fontSize:'clamp(32px,9vw,64px)', animationDelay:`${i*0.1}s`,
 textShadow:'0 2px 24px rgba(0,0,0,0.5)' }}>{w}</span>
 </span>
 ))}
 </h1>

 <p className="text-white text-[13px] leading-relaxed mb-5 max-w-[80%]"><IpHL text={s.sub} /></p>

 {/* CTAs */}
 <div className="flex gap-3 flex-wrap mb-5">
 <a href={s.ctaHref}
 className="btn-pop flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[14px] font-bold text-white min-h-[48px]"
 style={{ background: s.ctaBg, boxShadow:`0 8px 24px ${s.accent}55` }}>
 {s.cta} <ArrowRight size={14} />
 </a>
 <a href="#about"
 className="btn-pop flex items-center gap-2 px-5 py-3.5 rounded-2xl text-[14px] font-semibold text-white min-h-[48px]"
 style={{ background:'rgba(255,255,255,0.12)', border:'1px solid #FFE600', backdropFilter:'blur(10px)' }}>
 <Play size={14} /> Notre mission
 </a>
 </div>

 {/* Slide dots */}
 <div className="flex items-center gap-2">
 {SLIDES.map((_, i) => (
 <button key={i} onClick={() => setSlide(i)} className="p-1.5 -m-1">
 <span className="rounded-full block transition-all duration-300"
 style={{ width:i===slide?'24px':'5px', height:'5px', background:i===slide?s.accent:'rgba(255,255,255,0.3)' }} />
 </button>
 ))}
 </div>
 </div>

 {/* Stats band */}
 <div className="grid grid-cols-3"
 style={{ background:'rgba(0,0,0,0.6)', backdropFilter:'blur(20px)', borderTop:'1px solid rgba(255,255,255,0.07)' }}>
 {[
 { Icon:Layers, val:'21', label:'Espaces actifs' },
 { Icon:Globe, val:'Afrique', label:'Presence continentale' },
 { Icon:Shield, val:'100%', label:'Accompagnement' },
 ].map(({ Icon, val, label }, i) => (
 <div key={i} className="flex flex-col items-center py-3.5"
 style={{ borderRight: i<2?'1px solid rgba(255,255,255,0.08)':'none' }}>
 <Icon size={11} className="text-white/30 mb-0.5" />
 <p className="text-[18px] font-black text-white leading-none">{val}</p>
 <p className="text-white/40 text-[9px] uppercase tracking-wide text-center px-1 mt-0.5">{label}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ══════════ SLOGAN / MISSION FONDATRICE ══════════ */}
 <section className="relative overflow-hidden" style={{ background:'#0B0B14' }}>
 {/* Geometric accent blobs */}
 <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
 style={{ background:'radial-gradient(circle, rgba(255,45,122,0.18) 0%, transparent 70%)' }} />
 <div className="absolute -bottom-16 -right-10 w-64 h-64 rounded-full pointer-events-none"
 style={{ background:'radial-gradient(circle, rgba(212,175,55,0.14) 0%, transparent 70%)' }} />
 {/* Thin ruled lines for texture */}
 <div className="absolute inset-0 pointer-events-none" style={{
 backgroundImage:'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 56px)',
 }} />

 <div className="relative z-10 px-5 pt-10 pb-2">
 {/* Eyebrow */}
 <div className="flex items-center gap-2 mb-6">
 <div className="h-px flex-1" style={{ background:'linear-gradient(90deg, #D4AF37, transparent)' }} />
 <Sparkles size={12} style={{ color:'#D4AF37' }} />
 <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color:'#D4AF37' }}>Notre mission fondatrice</span>
 <Sparkles size={12} style={{ color:'#D4AF37' }} />
 <div className="h-px flex-1" style={{ background:'linear-gradient(90deg, transparent, #D4AF37)' }} />
 </div>

 {/* Main statement */}
 <div className="mb-6">
 <p className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-2">APTDC-Z-UP · TDO · LIMITED</p>
 <h2 className="font-black leading-[1.1] mb-0" style={{ fontSize:'28px', color:'white' }}>
 Reconstituer,{' '}
 <span style={{ color:'#FF2D7A' }}>valoriser</span>{' '}
 et renforcer<br />les actifs de{' '}
 <span style={{
 background:'linear-gradient(90deg, #D4AF37, #FF8C00)',
 WebkitBackgroundClip:'text',
 WebkitTextFillColor:'transparent',
 }}>l'informel.</span>
 </h2>
 </div>

 {/* Pull quote */}
 <div className="relative mb-7 pl-4">
 <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full" style={{ background:'linear-gradient(to bottom, #FF2D7A, #D4AF37)' }} />
 <p className="text-white text-[13px] leading-relaxed italic">
 "Transformer la force de l'informel en un moteur organisé, connecté et durable de développement - particulièrement en Afrique, où l'entrepreneuriat populaire constitue l'une des plus grandes sources de création de valeur."
 </p>
 </div>
 </div>

 {/* Body text accordioned into a clean card */}
 <div className="mx-4 mb-8 rounded-3xl overflow-hidden" style={{ border:'1px solid rgba(255,255,255,0.07)' }}>
 {[
 {
 heading:"Une ambition née d'un constat",
 body:"IPPOO a été fondé à travers Z-UP.2 pour répondre à une contradiction : des acteurs de l'informel qui représentent une force économique majeure, mais restent éloignés des outils, des solutions financières et des opportunités indispensables à leur croissance.",
 color:"#FF2D7A",
 Icon: Target,
 },
 {
 heading:"Une plateforme pensée pour eux",
 body:"Nous accompagnons entrepreneurs, artisans, commerçants et producteurs avec des solutions conçues autour de leurs réalités : accompagnement personnalisé, accès à des experts, formations, opportunités commerciales, services financiers et intelligence artificielle.",
 color:"#D4AF37",
 Icon: Zap,
 },
 {
 heading:"Réduire le fossé numérique",
 body:"Armés de méthodes éprouvées, de technologies de pointe et d'IA, nous souhaitons réduire le fossé entre l'économie traditionnelle et les nouveaux modèles économiques numériques, afin que chaque entrepreneur puisse mieux structurer, performer et prospérer.",
 color:"#16A34A",
 Icon: Globe,
 },
 ].map(({ heading, body, color, Icon }, i) => (
 <div key={heading} className="px-5 py-5 flex gap-4"
 style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none', background: i % 2 === 0 ? 'rgba(255,255,255,0.025)' : 'transparent' }}>
 <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
 style={{ background:`${color}18`, border:`1px solid ${color}30` }}>
 <Icon size={15} style={{ color }} />
 </div>
 <div>
 <p className="font-black text-[14px] mb-1" style={{ color }}>{heading}</p>
 <p className="text-white text-[12px] leading-relaxed">{body}</p>
 </div>
 </div>
 ))}
 </div>

 {/* Bottom kicker */}
 <div className="px-5 pb-10">
 <div className="flex items-center justify-between">
 <div>
 <p className="text-white/25 text-[10px] uppercase tracking-widest">Fondé par</p>
 <p className="text-white font-bold text-[13px]">APTDC-Z-UP · TDO · LIMITED</p>
 </div>
 <button onClick={() => goPage('adhesion')}
 className="btn-pop flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[12px] font-bold text-[#0B0B14]"
 style={{ background:'linear-gradient(135deg, #D4AF37, #FF8C00)' }}>
 Nous rejoindre <ArrowRight size={13} />
 </button>
 </div>
 </div>
 </section>

 {/* ══════════ MARQUEE ══════════ */}
 <div className="overflow-hidden py-3 border-y border-[#F3E8D8]"
 style={{ background:'linear-gradient(90deg, #FF2D7A 0%, #E10600 50%, #FF2D7A 100%)' }}>
 <div className="flex whitespace-nowrap mq-run select-none">
 {Array(4).fill(PLATFORMS).flat().map((p, i) => (
 <span key={i} className="mx-5 flex items-center gap-2 text-[12px] font-bold text-white">
 <p.LIcon size={14} className="shrink-0" />
 <IpHL text={p.name} />
 </span>
 ))}
 </div>
 </div>

 {/* ══════════ GREETING CARD ══════════ */}
 <section className="px-4 pt-6 pb-2">
 <div className="mb-4">
 <p className="text-[#9CA3AF] text-[13px] font-medium">Bienvenue sur</p>
 <h2 className="text-[24px] font-black text-[#111827] leading-tight"><Ip /> <span className="grad-text-warm">Ecosysteme</span></h2>
 </div>

 <div className="relative overflow-hidden rounded-3xl mb-2"
 style={{ background:'linear-gradient(145deg, #FFF3E6 0%, #FFE4C8 100%)', minHeight:'160px', border:'1px solid #FDE8D0' }}>
 <div className="relative z-10 p-5 pr-[145px]">
 <p className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest mb-1.5">Offre de bienvenue</p>
 <h3 className="text-[#111827] font-black text-[17px] leading-tight mb-2">
 Adhérez et accédez aux 21 espaces avec votre formule
 </h3>
 <ul className="space-y-0.5 mb-4">
 {["Accompagnement terrain dédié","Réseau solidaire en expansion","Couverture et protection sociale"].map(t => (
 <li key={t} className="flex items-center gap-1.5 text-[11px] text-[#6B7280]">
 <div className="w-1.5 h-1.5 rounded-full bg-[#FF2D7A] shrink-0" />
 {t}
 </li>
 ))}
 </ul>
 <button onClick={() => goPage('adhesion')}
 className="btn-pop inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-[13px] font-bold text-white min-h-[42px]"
 style={{ background:'linear-gradient(135deg, #FF2D7A, #E10600)', boxShadow:'0 4px 16px rgba(225,6,0,0.4)' }}>
 S'inscrire maintenant <ArrowRight size={13} />
 </button>
 </div>
 <div className="absolute right-0 bottom-0 w-[135px] h-full overflow-hidden">
 <img src={imgDigitalDuo} alt="" className="absolute bottom-0 right-0 h-full w-full object-cover"
 style={{ objectPosition:'top center' }} />
 <div className="absolute inset-0" style={{ background:'linear-gradient(90deg, #FFE4C8 0%, transparent 45%)' }} />
 </div>
 <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-20"
 style={{ background:'radial-gradient(circle, #FF2D7A, transparent)' }} />
 </div>
 </section>

 {/* ══════════ AFFICHE 1 - pleine largeur ══════════ */}
 <section className="relative overflow-hidden" style={{ minHeight:'420px' }}>
 <img src={imgFashionColor} alt="Mode et culture africaine" className="absolute inset-0 w-full h-full object-cover object-top" />
 {/* Global dark veil for base legibility */}
 <div className="absolute inset-0" style={{ background:'rgba(0,0,0,0.28)' }} />
 {/* Bottom-heavy gradient for text zone */}
 <div className="absolute inset-0" style={{ background:'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0) 100%)' }} />
 <div className="relative z-10 h-full flex flex-col justify-end p-6" style={{ minHeight:'420px' }}>
 <div className="flex items-center gap-2 mb-3">
 <Star size={12} className="text-[#D4AF37]" />
 <span className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest">Culture et Identité</span>
 </div>
 <h2 className="text-white font-black text-[28px] leading-tight mb-2">
 L'<span className="africa-anim">Afrique</span> dans toute<br />sa <span style={{ color:'#FF2D7A' }}>splendeur</span>
 </h2>
 <p className="text-white text-[14px] leading-relaxed mb-5 max-w-sm">
 <IpHL text="IPPOO valorise le savoir-faire, la créativité et le talent des acteurs de l'économie populaire africaine. Mode, artisanat, gastronomie, culture : chaque création trouve sa plateforme." />
 </p>
 <a href="#espaces"
 className="btn-pop self-start inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[14px] font-bold min-h-[48px]"
 style={{ background:'linear-gradient(135deg, #FF2D7A, #E10600)', color:'white', boxShadow:'0 8px 24px rgba(225,6,0,0.4)' }}>
 Découvrir nos espaces <ArrowRight size={15} />
 </a>
 </div>
 </section>

 {/* ══════════ PROMO BANNERS ══════════ */}
 <section className="py-8 overflow-hidden">
 <div className="px-4 mb-4 flex items-center justify-between">
 <h2 className="text-[18px] font-black text-[#111827]">Offres <span className="grad-text-warm">à la une</span></h2>
 <button onClick={() => goPage('souscriptions')} className="text-[13px] font-semibold text-[#FF2D7A] flex items-center gap-1">
 Tout voir <ChevronRight size={14} />
 </button>
 </div>
 <div className="flex gap-3 px-4 overflow-x-auto snap-x snap-mandatory pb-2" style={{ scrollbarWidth:'none' }}>
 {BANNERS.map((b, i) => (
 <div key={i} className="snap-start shrink-0 w-[88vw] max-w-[360px] rounded-3xl overflow-hidden flex"
 style={{ background: b.bg, minHeight:'130px', boxShadow:`0 6px 24px ${b.accent}22` }}>
 <div className="flex-1 p-5 flex flex-col justify-between">
 <div>
 <div className="w-9 h-9 rounded-2xl flex items-center justify-center mb-3"
 style={{ background:`${b.accent}20` }}>
 <b.icon size={18} style={{ color: b.accent }} />
 </div>
 <h3 className="font-black text-[16px] leading-tight mb-1" style={{ color: b.titleColor }}><IpHL text={b.title} color={b.titleColor} /></h3>
 <p className="text-[12px] leading-snug text-[#374151]">{b.sub}</p>
 </div>
 <a href={b.url} target="_blank" rel="noopener noreferrer"
 className="btn-pop inline-flex items-center gap-1.5 mt-3 px-4 py-2.5 rounded-2xl text-[12px] font-bold min-h-[40px]"
 style={{ background: b.accent, color:'white', boxShadow:`0 4px 14px ${b.accent}55` }}>
 {b.cta} <ArrowRight size={12} />
 </a>
 </div>
 <div className="w-[120px] shrink-0 relative overflow-hidden">
 <img src={b.img} alt={b.title} className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:`linear-gradient(90deg, ${b.bg} 0%, transparent 40%)` }} />
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* ══════════ AFFICHE AGRO - mobile only ══════════ */}
 <section className="md:hidden w-full">
 <img src={imgAfcAgroAlim} alt="IPPOO Agro-Alimentaire" className="w-full h-auto block" />
 <div className="px-5 py-5" style={{ background:'#FFE600' }}>
 <div className="flex items-center gap-2 mb-2">
 <Leaf size={12} className="text-[#16A34A]" />
 <span className="text-[#16A34A] text-[10px] font-bold uppercase tracking-widest">Agro-Alimentaire</span>
 </div>
 <h2 className="text-[#111827] font-black text-[22px] leading-tight mb-2">
 Produisons mieux,<br /><span style={{ color:'#16A34A' }}>nourrissons mieux.</span>
 </h2>
 <p className="text-[#374151] text-[13px] leading-relaxed mb-4">
 <IpHL text="IPPOO AAGRO accompagne toute la chaîne alimentaire, du champ à l'assiette. Valorisez vos récoltes, accès aux marchés locaux et financement solidaire." color="#16A34A" />
 </p>
 <a href="https://aagro.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
 className="btn-pop inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-[13px] font-bold text-white"
 style={{ background:'linear-gradient(135deg, #16A34A, #059669)', boxShadow:'0 6px 20px rgba(22,163,74,0.4)' }}>
 Explorer <strong style={{color:'#FFE600',fontWeight:900}}>IPPOO-AAGRO</strong> <ArrowRight size={14} />
 </a>
 </div>
 </section>

 {/* ══════════ ABOUT - même design que Marketplace ══════════ */}
 <section id="about" className="relative overflow-hidden">
 <img src={imgTeamJoy} alt="Notre mission IPPOO" className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(170deg, rgba(0,0,0,0.90) 0%, rgba(10,25,50,0.84) 55%, rgba(124,58,237,0.18) 100%)' }} />
 <div className="relative z-10 px-5 py-10">

 {/* Eyebrow */}
 <div className="flex items-center gap-2 mb-3">
 <Target size={13} style={{ color:'#FF2D7A' }} />
 <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color:'#FF2D7A' }}>Notre Mission · APTDC-Z-UP.2</span>
 </div>

 {/* Titre */}
 <h2 className="text-white font-black text-[26px] leading-tight mb-3">
 Structurer, professionnaliser<br /><span style={{ color:'#FF2D7A' }}>et valoriser l'informel africain.</span>
 </h2>

 {/* Description */}
 <p className="text-white text-[13px] leading-relaxed mb-5">
 <IpHL text="IPPOO est le programme dédié à la couverture et à l'accompagnement des actifs du secteur informel africain. Finance, assurance, formation, emploi, santé et bien-être : une vision intégrée, un écosystème complet." color="#FF2D7A" />
 </p>

 {/* Feature list - même pattern glassmorphique */}
 <div className="space-y-2.5 mb-6">
 {[
 { Icon: Shield, t:"Inclusion financière", d:"Crédit, épargne, cagnotte et fonds de solidarité accessibles à tous les acteurs de l'informel." },
 { Icon: Heart, t:"Protection sociale", d:"Couverture santé, maternité et prévoyance vieillesse adaptées aux travailleurs informels." },
 { Icon: Cpu, t:"Technologie & Intelligence Artificielle", d:"Outils numériques de pointe, IA et coaching terrain pour structurer et faire croître chaque activité." },
 { Icon: Globe, t:"Connexion aux marchés", d:"Réseaux locaux, régionaux et internationaux via la diaspora, le numérique et les partenariats institutionnels." },
 ].map(({ Icon, t, d }) => (
 <div key={t} className="flex items-start gap-3 rounded-2xl p-3"
 style={{ background:'rgba(255,255,255,0.08)', backdropFilter:'blur(8px)' }}>
 <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
 style={{ background:'rgba(255,45,122,0.18)' }}>
 <Icon size={15} style={{ color:'#FF2D7A' }} />
 </div>
 <div>
 <p className="text-white font-bold text-[13px] leading-tight">{t}</p>
 <p className="text-white text-[11px] mt-0.5 leading-snug">{d}</p>
 </div>
 </div>
 ))}
 </div>

 {/* CTA */}
 <button onClick={() => goPage('adhesion')}
 className="btn-pop inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[14px] font-bold text-white"
 style={{ background:'#FF2D7A', boxShadow:'0 8px 24px rgba(255,45,122,0.38)' }}>
 Rejoindre <Ip /> <ArrowRight size={15} />
 </button>
 </div>
 </section>

 {/* ══════════ AFFICHE FASHION BIZZ - mobile only ══════════ */}
 <section className="md:hidden w-full">
 <img src={imgAfcFashionBizz} alt="IPPOO Fashion Bizz" className="w-full h-auto block" />
 <div className="px-5 py-5" style={{ background:'#FFE600' }}>
 <div className="flex items-center gap-2 mb-2">
 <Star size={12} style={{ color:'#FF2D7A' }} />
 <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color:'#FF2D7A' }}>Fashion & Style</span>
 </div>
 <h2 className="text-[#111827] font-black text-[22px] leading-tight mb-2">
 Tendances, qualité<br />et <span style={{ color:'#FF2D7A' }}>créativité africaine.</span>
 </h2>
 <p className="text-[#374151] text-[13px] leading-relaxed mb-4">
 <IpHL text="IPPOO Fashion Bizz est l'univers où style, créativité et opportunités se rencontrent. Créateurs, vendeurs et passionnés de mode - rejoignez la dynamique." color="#FF2D7A" />
 </p>
 <a href="https://fashion.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
 className="btn-pop inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-[13px] font-bold text-white"
 style={{ background:'linear-gradient(135deg, #FF2D7A, #7C3AED)', boxShadow:'0 6px 20px rgba(255,45,122,0.4)' }}>
 Découvrir <strong style={{color:'#FFE600',fontWeight:900}}>IPPOO-FASHION</strong> <ArrowRight size={14} />
 </a>
 </div>
 </section>

 {/* ══════════ IPPOO MISSION ══════════ */}
 <section id="programmes" className="py-12 px-4" style={{ background:'#FFE600' }}>
 <div className="flex items-center gap-2 mb-2" data-r="drop">
 <Award size={14} className="text-[#16A34A]" />
 <span className="text-[#16A34A] text-[11px] font-bold uppercase tracking-widest"><IpHL text="Programmes IPPOO" color="#16A34A" /></span>
 </div>
 <h2 className="text-[26px] font-black text-[#111827] mb-2 leading-tight" data-r="blur" data-d="2">
 Micro-assurance, formation<br /><span className="grad-text">et groupements</span>
 </h2>
 <p className="text-[#374151] text-[14px] leading-relaxed mb-6" data-r="fade" data-d="3">
 Dans le secteur informel, les risques sont omniprésents et les ressources limitées. Nos produits de micro-assurance sont conçus comme des boucliers sur mesure : accessibles, flexibles et adaptés aux réalités quotidiennes des artisans, commerçants, agriculteurs et transporteurs.
 </p>

 {/* Bento grid missions */}
 <div className="grid grid-cols-2 gap-3 mb-6">
 {[
 { Icon:Shield, title:'Micro-Assurance', desc:"Santé, marchandises, retraite, maternité et responsabilité civile. Souscription en quelques minutes.", color:'#E10600', bg:'linear-gradient(145deg, #E10600, #FF4500)', img: imgFarming, pos:'center' },
 { Icon:BookOpen, title:'Formation et Recyclage', desc:"Comptabilité simplifiée, vente, marketing digital et alphabétisation fonctionnelle en langues locales.", color:'#16A34A', bg:'linear-gradient(145deg, #16A34A, #059669)', img: imgVegMarket, pos:'center' },
 { Icon:Users, title:'Groupements Solidaires', desc:"Structurez votre activité en groupement sectoriel : agriculteurs, artisans, commerçants, transporteurs.", color:'#0891B2', bg:'linear-gradient(145deg, #0891B2, #2563EB)', img: imgCommunityBw, pos:'center' },
 { Icon:TrendingUp, title:'Bourse de Valeurs', desc:"Plateforme de cotation communautaire, investissement solidaire et accès au crédit pour l'informel.", color:'#D4AF37', bg:'linear-gradient(145deg, #D4AF37, #FF2D7A)', img: imgTechWoman, pos:'center top' },
 ].map((item, i) => (
 <div key={item.title}
 className="rounded-3xl relative overflow-hidden"
 style={{ minHeight:'160px' }}
 data-r="zoom" data-d={`${i+1}`}>
 <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover"
 style={{ objectPosition: item.pos }} />
 <div className="absolute inset-0" style={{ background:`linear-gradient(160deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.65) 100%)` }} />
 <div className="absolute inset-0" style={{ background:`${item.color}33` }} />
 <div className="relative z-10 p-4 flex flex-col justify-end" style={{ minHeight:'160px' }}>
 <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-2"
 style={{ background:'rgba(255,255,255,0.25)', backdropFilter:'blur(8px)' }}>
 <item.Icon size={15} className="text-white" />
 </div>
 <p className="text-white font-black text-[14px] leading-tight" style={{ textShadow:'0 1px 4px rgba(0,0,0,0.8)' }}>{item.title}</p>
 <p className="text-white text-[11px] mt-1 leading-snug" style={{ textShadow:'0 1px 3px rgba(0,0,0,0.7)' }}>{item.desc}</p>
 </div>
 </div>
 ))}
 </div>

 {/* CTA programmes */}
 <div className="mt-4 text-center" data-r="fade">
 <button onClick={() => goPage('programmes')}
 className="btn-pop inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[14px] font-bold text-white min-h-[48px]"
 style={{ background:'linear-gradient(135deg, #16A34A, #059669)', boxShadow:'0 8px 24px rgba(22,163,74,0.35)' }}>
 <BookOpen size={16} /> Voir tous les programmes
 </button>
 </div>

 {/* Bonus/Gifts highlight */}
 <div className="neon-border rounded-3xl overflow-hidden relative mt-4" style={{ minHeight:'140px', background:'#FFE600' }}data-r="fade-up">
 <div className="relative z-10 flex items-center gap-4 p-5">
 <div className="w-24 h-24 shrink-0 relative">
 <img src={imgGifts} alt="Bonus" className="w-full h-full object-contain float" />
 </div>
 <div>
 <p className="text-[11px] font-bold uppercase tracking-wider mb-1 grad-text-cool">Bonus et avantages</p>
 <h3 className="font-black text-[18px] leading-tight grad-text">Gain, promo et bons plans membres</h3>
 <p className="text-[#111827] text-[12px] mt-1">Cadeaux de bienvenue, reduction sur les services et acces prioritaire aux formations exclusives.</p>
 <a href="#contact"
 className="btn-pop inline-flex items-center gap-1.5 mt-3 px-4 py-2 rounded-xl text-[12px] font-bold text-white min-h-[38px]"
 style={{ background:'linear-gradient(135deg, #2563EB, #0891B2)', boxShadow:'0 4px 14px rgba(37,99,235,0.4)' }}>
 En profiter <ArrowRight size={12} />
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* ══════════ PROFILS ══════════ */}
 <section className="py-10 px-4" style={{ background:'#FFE600' }}>
 <div className="flex items-center gap-2 mb-2" data-r="drop">
 <Layers size={14} className="text-[#111827]" />
 <span className="text-[#111827] text-[11px] font-bold uppercase tracking-widest">Chez <Ip /></span>
 </div>
 <h2 className="text-[26px] font-black text-[#111827] mb-2 leading-tight" data-r="blur" data-d="2">
 6 profils d'acteurs<br /><span className="grad-text">de l'informel</span>
 </h2>
 <p className="text-[#374151] text-[13px] mb-6 leading-relaxed" data-r="fade" data-d="3">
 {<IpHL text="Étudiants, diaspora, producteurs, artisans, novateurs : chaque acteur de l'économie populaire a sa place dans l'écosystème IPPOO. Positionnement clair, services adaptés et accompagnement sur mesure." />}
 </p>
 <div className="grid grid-cols-2 gap-3">
 {PROFILS.map((p, i) => (
 <div key={p.num} className="rounded-3xl p-4 flex flex-col gap-2.5"
 data-r="pop" data-d={`${(i%4)+1}`}
 style={{ background: p.pastel, border:`1px solid ${p.border}` }}>
 <div className="flex items-start justify-between">
 <div className="w-11 h-11 rounded-2xl flex items-center justify-center float-fast"
 style={{ background:`${p.color}18`, animationDelay:`${i*0.3}s` }}>
 <p.Icon size={20} style={{ color: p.color }} />
 </div>
 <Badge n={p.num} color={p.color} />
 </div>
 <p className="font-black text-[15px] text-[#111827] leading-tight">{p.label}</p>
 <p className="text-[#6B7280] text-[11px] leading-snug"><IpHL text={p.desc} color={p.color} /></p>
 <button onClick={() => goPage(p.page)}
 className="flex items-center gap-1 text-[12px] font-bold mt-auto pt-1 hover:gap-2 transition-all"
 style={{ color: p.color }}>
 Découvrir <ArrowRight size={12} />
 </button>
 </div>
 ))}
 </div>
 </section>

 {/* ══════════ AFFICHE 2 - pleine largeur ══════════ */}
 <section className="relative overflow-hidden" style={{ minHeight:'380px' }}>
 <img src={imgTeaField} alt="Agriculture et groupements" className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(0deg, rgba(3,30,6,0.94) 0%, rgba(3,30,6,0.52) 50%, transparent 100%)' }} />
 <div className="relative z-10 h-full flex flex-col justify-end p-6 pb-8" style={{ minHeight:'380px' }}>
 <div className="flex items-center gap-2 mb-3">
 <Leaf size={12} className="text-[#86EFAC]" />
 <span className="text-[16px] font-black uppercase tracking-widest" style={{ color:'#FF2D7A', textShadow:'0 2px 6px rgba(0,0,0,0.5)' }}>Agriculture et Production</span>
 </div>
 <h2 className="text-white font-black text-[26px] leading-tight mb-3" style={{ textShadow:'0 2px 8px rgba(0,0,0,0.8)' }}>
 Valorisez vos produits<br />et rejoignez un <span style={{ color:'#16A34A', textShadow:'0 2px 8px rgba(0,0,0,0.8)' }}>groupement</span>
 </h2>
 <p className="text-white text-[14px] leading-relaxed mb-5 max-w-sm" style={{ textShadow:'0 1px 6px rgba(0,0,0,0.7)' }}>
 Mutualisation des ressources, accès au marché, <strong style={{ color:'#FF2D7A', fontWeight:900 }}>formation</strong> et <strong style={{ color:'#16A34A', fontWeight:900 }}>couverture</strong> assurance : rejoignez un <strong style={{ color:'#FFE600', fontWeight:900 }}>groupement</strong> <strong style={{ color:'#FFE600', fontWeight:900 }}>IPPOO</strong> et transformez votre activité agricole en source de prospérité durable.
 </p>
 <div className="flex gap-3">
 <a href="https://aagro.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
 className="btn-pop inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[14px] font-bold min-h-[48px]"
 style={{ background:'linear-gradient(135deg, #16A34A, #059669)', color:'white', boxShadow:'0 8px 24px rgba(22,163,74,0.4)' }}>
 Accéder à <strong style={{color:'#FFE600',fontWeight:900}}>IPPOO-AAGRO</strong> <ArrowRight size={15} />
 </a>
 <a href="#contact"
 className="btn-pop inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-[14px] font-semibold text-white min-h-[48px]"
 style={{ border:'2px solid #FFE600' }}>
 Rejoindre
 </a>
 </div>
 </div>
 </section>

 {/* ══════════ ESPACES ══════════ */}
 <section id="espaces" className="py-12" style={{ background:'#FFF8F2' }}>
 <div className="px-4 mb-6">
 <div className="flex items-center gap-2 mb-2" data-r="drop">
 <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:'#FFF3E6' }}>
 <Layers size={14} className="text-[#FF2D7A]" />
 </div>
 <span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">L'écosystème <Ip /></span>
 </div>
 <h2 className="text-[26px] font-black text-[#111827] mb-1 leading-tight" data-r="blur" data-d="2">
 21 espaces,<br /><span className="grad-text-warm">une seule vision.</span>
 </h2>
 <p className="text-[#6B7280] text-[13px] leading-relaxed mb-6" data-r="fade" data-d="3">
 Finance, commerce, santé, emploi, artisanat, divertissement : chaque espace a été conçu pour répondre à un besoin réel de l'acteur informel africain. Tout l'écosystème en un.
 </p>

 {/* Category grid */}
 <div className="grid grid-cols-2 gap-3 mb-6">
 {/* "Tout voir" full-width */}
 <button onClick={() => { setActiveCat('all'); document.getElementById('espaces-list')?.scrollIntoView({ behavior:'smooth', block:'nearest' }) }}
 className="col-span-2 rounded-3xl px-5 py-4 flex items-center gap-4 btn-pop transition-all"
 style={activeCat==='all'
 ? { background:'linear-gradient(145deg, #FF2D7A 0%, #7C3AED 100%)', boxShadow:'0 6px 20px rgba(255,45,122,0.35)' }
 : { background:'#FFF0F5', border:'2px solid #FF2D7A40' }}>
 <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
 style={{ background: activeCat==='all' ? 'rgba(255,255,255,0.2)' : '#FF2D7A18' }}>
 <Layers size={18} style={{ color: activeCat==='all' ? 'white' : '#FF2D7A' }} />
 </div>
 <div className="text-left flex-1">
 <p className="font-black text-[15px]" style={{ color: activeCat==='all' ? 'white' : '#FF2D7A' }}>Tout voir</p>
 <p className="text-[12px]" style={{ color: activeCat==='all' ? 'rgba(255,255,255,0.7)' : '#FF2D7A99' }}>{PLATFORMS.length} espaces actifs</p>
 </div>
 {activeCat==='all' && <div className="w-2 h-2 rounded-full bg-white pulse-badge" />}
 </button>

 {CAT_CARDS.map((cat, i) => {
 const isActive = activeCat === cat.id
 return (
 <button key={cat.id}
 onClick={() => {
 setActiveCat(cat.id)
 setTimeout(() => document.getElementById('espaces-list')?.scrollIntoView({ behavior:'smooth', block:'start' }), 80)
 }}
 className="rounded-3xl p-4 flex flex-col justify-between btn-pop relative overflow-hidden transition-all"
 style={isActive
 ? { background: cat.grad, boxShadow:`0 8px 28px ${cat.color}55`, minHeight:'108px' }
 : { background: cat.pastel, border:`2px solid ${cat.color}40`, minHeight:'108px' }}
 data-r="left" data-d={`${(i%4)+1}`}>

 {/* Icon badge */}
 <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-2"
 style={{ background: isActive ? 'rgba(255,255,255,0.22)' : `${cat.color}20` }}>
 <cat.Icon size={16} style={{ color: isActive ? 'white' : cat.color }} />
 </div>

 {/* Label */}
 <div className="text-left">
 <div className="w-5 h-0.5 rounded-full mb-1.5"
 style={{ background: isActive ? 'rgba(255,255,255,0.5)' : `${cat.color}60` }} />
 <p className="font-black text-[15px]"
 style={{ color: isActive ? 'white' : cat.color }}>{cat.label}</p>
 <p className="text-[11px] mt-0.5 font-semibold"
 style={{ color: isActive ? 'rgba(255,255,255,0.65)' : `${cat.color}AA` }}>{cat.sub}</p>
 </div>

 {/* Ghost icon */}
 <div className="absolute -bottom-2 -right-2 pointer-events-none"
 style={{ opacity: isActive ? 0.18 : 0.12 }}>
 <cat.Icon size={54} style={{ color: isActive ? 'white' : cat.color }} />
 </div>

 {/* Active dot */}
 {isActive && (
 <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/70 pulse-badge" />
 )}
 </button>
 )
 })}
 </div>
 </div>

 {/* Platform blocks */}
 <div id="espaces-list" className="flex flex-col gap-6 px-4 scroll-mt-20">
 {filtered.map((p, i) => (
 <div key={p.id} className="rounded-3xl overflow-hidden pcard"
 data-r="right" data-d={`${(i%4)+1}`}
 style={{ boxShadow:'0 4px 32px rgba(0,0,0,0.10)' }}>
 {/* Full-bleed image with overlay */}
 <div className="relative overflow-hidden" style={{ height:'220px' }}>
 {'img2' in p && p.img2 ? (
 <div className="absolute inset-0 grid grid-cols-2 gap-0.5 bg-gray-200">
 <img src={p.img} alt="" className="w-full h-full object-cover" loading="lazy" />
 <img src={p.img2} alt="" className="w-full h-full object-cover" loading="lazy" />
 </div>
 ) : (
 <img
 src={p.img} alt={p.name}
 className="absolute inset-0 w-full h-full object-cover object-center"
 loading="lazy"
 style={{ transform:'scale(1.02)' }}
 />
 )}
 {/* gradient: transparent at top → platform color at bottom */}
 <div className="absolute inset-0" style={{
 background: `linear-gradient(to bottom, transparent 0%, transparent 35%, ${p.color}CC 75%, ${p.color} 100%)`
 }} />
 {/* icon + tag top-left */}
 <div className="absolute top-4 left-4 flex items-center gap-2.5">
 <div className="w-10 h-10 rounded-xl flex items-center justify-center"
 style={{ background:'rgba(255,255,255,0.18)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.35)' }}>
 <p.LIcon size={20} className="text-white" />
 </div>
 <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white"
 style={{ background:'rgba(0,0,0,0.28)', backdropFilter:'blur(8px)', letterSpacing:'0.04em' }}>
 {p.tag}
 </span>
 </div>
 {/* platform name bottom-left */}
 <div className="absolute bottom-4 left-5 right-5">
 <h3 className="text-white font-black text-[28px] leading-tight drop-shadow-md"
 style={{ textShadow:'0 2px 12px rgba(0,0,0,0.3)' }}>
 {p.name}
 </h3>
 </div>
 </div>
 {/* Description + CTA */}
 <div className="bg-white px-5 pt-4 pb-5">
 <p className="text-[#374151] text-[13.5px] leading-relaxed mb-4"><IpHL text={p.desc} color={p.color} /></p>
 {p.id === 16
 ? <button onClick={() => goPage('kaash')}
 className="btn-pop inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold"
 style={{ background: p.color, color: ctaTextColor(p.color), boxShadow: `0 4px 14px ${p.color}55` }}>
 <Wallet size={14} /> Découvrir <strong style={{color:'#FFE600',fontWeight:900}}>IPPOO-KAASH</strong>
 </button>
 : <a
 href={p.url !== '#' ? p.url : undefined}
 target={p.url !== '#' ? '_blank' : undefined}
 rel="noopener noreferrer"
 onClick={e => { if (p.url==='#') e.preventDefault() }}
 className="btn-pop inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold"
 style={{ background: p.color, color: ctaTextColor(p.color), boxShadow: `0 4px 14px ${p.color}55` }}>
 {p.url !== '#' ? <><ExternalLink size={14} /> Accéder à la plateforme</> : <><Zap size={13} /> Bientôt disponible</>}
 </a>
 }
 </div>
 </div>
 ))}
 </div>

 <div className="px-4 mt-8 text-center" data-r="fade">
 <a href="#contact"
 className="btn-pop inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[15px] font-bold min-h-[52px]"
 style={{ background:'#FFE600', color:'#111827', boxShadow:'0 8px 24px rgba(0,0,0,0.2)' }}>
 <Users size={16} /> Rejoindre l'écosystème <Ip />
 </a>
 </div>
 </section>

 {/* ══════════ AFFICHE SHOP & TROC - mobile only ══════════ */}
 <section className="md:hidden w-full">
 <img src={imgAfcShopFashion} alt="IPPOO Shop et Troc Mode" className="w-full h-auto block" />
 <div className="px-5 py-5" style={{ background:'#FFE600' }}>
 <div className="flex items-center gap-2 mb-2">
 <ShoppingCart size={12} style={{ color:'#FF2D7A' }} />
 <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color:'#FF2D7A' }}>Shop & Troc</span>
 </div>
 <h2 className="text-[#111827] font-black text-[22px] leading-tight mb-2">
 Renouvelez votre<br /><span style={{ color:'#FF2D7A' }}>garde-robe africaine.</span>
 </h2>
 <p className="text-[#374151] text-[13px] leading-relaxed mb-4">
 Achetez, vendez, échangez des tenues, tissus et accessoires africains au meilleur prix. Qualité accessible, style garanti.
 </p>
 <a href="https://market.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
 className="btn-pop inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-[13px] font-bold text-white"
 style={{ background:'linear-gradient(135deg, #FF2D7A, #E10600)', boxShadow:'0 6px 20px rgba(255,45,122,0.4)' }}>
 Accéder au Market <ArrowRight size={14} />
 </a>
 </div>
 </section>

 {/* ══════════ MARKETPLACE & COMPTOIR ══════════ */}
 <section className="relative overflow-hidden">
 <img src={imgMarketplace} alt="Marketplace et Comptoir IPPOO" className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(170deg, rgba(0,0,0,0.88) 0%, rgba(20,60,10,0.82) 55%, rgba(212,175,55,0.18) 100%)' }} />
 <div className="relative z-10 px-5 py-10">
 <div className="flex items-center gap-2 mb-3">
 <ShoppingCart size={13} className="text-[#FFE600]" />
 <span className="text-[#FFE600] text-[11px] font-bold uppercase tracking-widest">Marketplace & Comptoir</span>
 </div>
 <h2 className="text-white font-black text-[26px] leading-tight mb-3">
 Vendez plus, achetez mieux<br /><span style={{ color:'#FFE600' }}>et développez votre activité.</span>
 </h2>
 <p className="text-white text-[13px] leading-relaxed mb-5">
 <IpHL text="Avec les espaces Marketplace et Comptoir IPPOO, vous intégrez une chaîne commerciale complète qui relie producteurs, transformateurs, distributeurs, grossistes, détaillants et consommateurs au sein d'un même écosystème." color="#FFE600" />
 </p>
 <div className="space-y-2.5 mb-6">
 {[
 { Icon: Package, t:"Approvisionnement fiable", d:"Accédez à un vaste réseau de fournisseurs sélectionnés. Matières premières, produits finis et équipements au meilleur rapport qualité-prix." },
 { Icon: TrendingUp, t:"Valorisez votre production", d:"Commerçants, agriculteurs, artisans : commercialisez auprès d'un large réseau d'acheteurs et de distributeurs." },
 { Icon: Globe, t:"Distribuez plus largement", d:"Grossistes, semi-grossistes, détaillants, franchises et plateformes numériques. Touchez davantage de clients sans construire seul votre réseau." },
 { Icon: Wallet, t:"Achetez au meilleur coût", d:"Achats groupés, prix négociés, transport optimisé. Plus les volumes sont importants, plus les économies sont significatives." },
 ].map(({ Icon, t, d }) => (
 <div key={t} className="flex items-start gap-3 rounded-2xl p-3" style={{ background:'rgba(255,255,255,0.08)', backdropFilter:'blur(8px)' }}>
 <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background:'rgba(255,230,0,0.18)' }}>
 <Icon size={15} className="text-[#FFE600]" />
 </div>
 <div>
 <p className="text-white font-bold text-[13px] leading-tight">{t}</p>
 <p className="text-white text-[11px] mt-0.5 leading-snug">{d}</p>
 </div>
 </div>
 ))}
 </div>
 <a href="#espaces" className="btn-pop inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[14px] font-bold text-[#111827]"
 style={{ background:'#FFE600', boxShadow:'0 8px 24px rgba(255,230,0,0.35)' }}>
 Explorer le Market <ArrowRight size={15} />
 </a>
 </div>
 </section>

 {/* ══════════ COMMENT CA MARCHE ══════════ */}
 <section className="px-4 py-10" style={{ background:'#F9FAFB' }}>
 <div className="flex items-center gap-2 mb-2" data-r="drop">
 <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:'#ECFDF5' }}>
 <Check size={14} className="text-[#16A34A]" />
 </div>
 <span className="text-[#16A34A] text-[11px] font-bold uppercase tracking-widest">Simple et Rapide</span>
 </div>
 <h2 className="text-[24px] font-black text-[#111827] mb-6 leading-tight" data-r="blur" data-d="2">
 Comment ca <span className="grad-text-cool">marche ?</span>
 </h2>

 <div className="space-y-4">
 {[
 { step:'01', title:'Créez votre compte', time:'2 min', desc:"Renseignez votre profil en 2 minutes sur IPPOO. Producteur, artisan, commerçant ou étudiant : votre positionnement est clé.", color:'#FF2D7A', bg:'#FFF0F7' },
 { step:'02', title:'Choisissez vos espaces', time:'5 min', desc:"Sélectionnez les plateformes qui correspondent à votre activité parmi nos 21 espaces. Accès immédiat et accompagnement personnalisé par nos équipes terrain.", color:'#2563EB', bg:'#EFF6FF' },
 { step:'03', title:'Accès aux services', time:'Immédiat', desc:"Connectez-vous à tous les outils, réseaux et services de l'écosystème IPPOO : assurance, crédit, formation, marché et communauté solidaire.", color:'#FF2D7A', bg:'#FFF3E6' },
 { step:'04', title:'Développez votre activité','time':'Continu',desc:"Grandissez avec la communauté, accès au financement, parrainage, gain sur placements et valorisez vos produits sur les marchés locaux et internationaux.", color:'#16A34A', bg:'#ECFDF5' },
 ].map((item, i) => (
 <div key={item.step}
 className="rounded-3xl bg-white p-4"
 style={{ border:'2px dashed #E5E7EB', boxShadow:'0 2px 8px rgba(0,0,0,0.04)' }}
 data-r="flip" data-d={`${i+1}`}>
 <div className="flex items-center justify-between mb-3">
 <div className="flex items-center gap-3">
 <Badge n={item.step} color={item.color} />
 <span className="text-[11px] font-black uppercase tracking-widest text-[#9CA3AF]">ETAPE {item.step}</span>
 </div>
 <span className="px-2.5 py-1 rounded-full text-[11px] font-bold"
 style={{ background:`${item.color}15`, color: item.color }}>{item.time}</span>
 </div>
 <div className="rounded-2xl px-4 py-3.5 flex items-start gap-3"
 style={{ background: item.bg, borderLeft:`3px solid ${item.color}` }}>
 <div>
 <p className="font-black text-[15px] leading-tight" style={{ color: item.color }}>{item.title}</p>
 <p className="text-[#6B7280] text-[13px] mt-1 leading-snug"><IpHL text={item.desc} color={item.color} /></p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* ══════════ PROMO FLASH STRIP ══════════ */}
 <div className="overflow-hidden py-3 grad-strip">
 <div className="flex whitespace-nowrap mq-fast select-none">
 {Array(4).fill([
 { Icon: Flame, text: 'PROMO DU JOUR : Assurance sans dossier' },
 { Icon: Gift, text: 'CADEAU : Formule offerte a la 1ere inscription' },
 { Icon: Wallet, text: 'BONUS : 10% de cashback sur IPPOO-KAASH' },
 { Icon: Bell, text: 'NOUVEAU : Application IPPOO disponible' },
 { Icon: Globe, text: 'RÉSEAU : Rejoignez la communauté africaine' },
 ]).flat().map((item, i) => (
 <span key={i} className="mx-8 flex items-center gap-2 text-[12px] font-black text-white shrink-0">
 <item.Icon size={13} className="shrink-0" />
 <IpHL text={item.text} />
 </span>
 ))}
 </div>
 </div>

 {/* ══════════ SANTE ET BIEN-ETRE ══════════ */}
 <section id="sante" className="py-12 px-4" style={{ background:'#FFF8F2' }}>
 <div className="flex items-center gap-2 mb-2" data-r="drop">
 <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:'#FFF0F7' }}>
 <Heart size={14} className="text-[#FF2D7A]" />
 </div>
 <span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">Healthy Page</span>
 </div>
 <h2 className="text-[26px] font-black text-[#111827] mb-2 leading-tight" data-r="blur" data-d="2">
 Santé et Bien-Être<br /><span style={{ color:'#FF2D7A', fontStyle:'italic' }}>Communautaire</span>
 </h2>
 <p className="text-[#6B7280] text-[14px] leading-relaxed mb-6" data-r="fade" data-d="3">
 <IpHL text="IPPOO Healthy Page répond à une réalité partagée dans de nombreuses zones rurales et urbaines : l'accès difficile aux soins. Notre programme intégré propose proximité, continuité, prévention, solidarité et numérique au service de votre santé." color="#E10600" />
 </p>

 {/* Bento sante */}
 <div className="grid grid-cols-2 gap-3 mb-5">
 {/* Grand bloc image */}
 <div className="col-span-2 rounded-3xl overflow-hidden relative" style={{ minHeight:'200px' }} data-r="zoom">
 <img src={imgDoctor} alt="Sante communautaire" className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(0deg, rgba(180,5,0,0.96) 0%, rgba(180,5,0,0.5) 50%, transparent 100%)' }} />
 <div className="relative z-10 p-5 flex flex-col justify-end" style={{ minHeight:'200px' }}>
 <p className="text-white text-[11px] font-bold uppercase tracking-wider mb-1">Couverture sante</p>
 <h3 className="text-white font-black text-[22px] leading-tight">
 Soins accessibles a tous, <span style={{ color:'#FCA5A5' }}>partout.</span>
 </h3>
 <p className="text-white text-[13px] mt-1">Consultation, suivi, téléconsultation et parrainage sanitaire communautaire.</p>
 </div>
 </div>

 {/* Tiles 2x2 */}
 {[
 { Icon:MessageCircle, title:'Téléconsultation', desc:'En visio, vocal ou chat avec des médecins partenaires.', color:'#FF2D7A', bg:'#FFF0F7' },
 { Icon:BookOpen, title:'Carnet de Santé', desc:'Dossier numérique : historique, résultats, vaccins, constantes.', color:'#0891B2', bg:'#ECFEFF' },
 { Icon:Leaf, title:'Pharmacopée', desc:'Médecine traditionnelle africaine encadrée et certifiée.', color:'#16A34A', bg:'#ECFDF5' },
 { Icon:Users, title:'Parrainage Santé', desc:'Financement croisé : diaspora, clubs et fonds solidaire.', color:'#7C3AED', bg:'#F5F3FF' },
 ].map((item, i) => (
 <div key={item.title}
 className="rounded-3xl p-4 flex flex-col gap-2"
 style={{ background: item.bg, border:`1px solid ${item.color}22` }}
 data-r="spin-in" data-d={`${i+1}`}>
 <div className="w-9 h-9 rounded-xl flex items-center justify-center"
 style={{ background:`${item.color}18` }}>
 <item.Icon size={16} style={{ color: item.color }} />
 </div>
 <p className="font-black text-[13px] text-[#111827] leading-tight">{item.title}</p>
 <p className="text-[#6B7280] text-[11px] leading-snug"><IpHL text={item.desc} color={item.color} /></p>
 </div>
 ))}
 </div>

 {/* Publics prioritaires */}
 <h3 className="text-[18px] font-black text-[#111827] mb-3"data-r="left-sm">Publics cibles</h3>
 <div className="space-y-2.5"data-r="right-sm" data-d="2">
 {[
 { label:'Femmes enceintes et mères', desc:'Suivi prénatal, postnatal, vaccination et nutrition maternelle.', color:'#FF2D7A' },
 { label:"Travailleurs de l'informel", desc:'Consultations en horaires étendus, médicaments à coût maîtrisé, dossier portable.', color:'#FF2D7A' },
 { label:'Étudiants', desc:'Tarifs adaptés, parcours préventif renforcé et suivi psychique discret.', color:'#2563EB' },
 { label:'Diaspora', desc:'Contribution au fonds transnational, suivi des bénéficiaires désignés à distance.', color:'#16A34A' },
 { label:'Zones rurales', desc:'Unités mobiles, tests rapides, médiateurs communautaires et transport solidaire.', color:'#7C3AED' },
 ].map((item, i) => (
 <div key={item.label} className="flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-white"
 style={{ border:'1px solid #F3F4F6', boxShadow:'0 1px 8px rgba(0,0,0,0.04)' }}>
 <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: item.color }} />
 <div>
 <p className="font-bold text-[14px] text-[#111827]" style={{ color: item.color }}>{item.label}</p>
 <p className="text-[#6B7280] text-[12px] mt-0.5">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>

 {/* Herbs image highlight */}
 <div className="mt-5 rounded-3xl overflow-hidden relative" style={{ minHeight:'130px' }} data-r="zoom">
 <div className="absolute inset-0" style={{ background:'linear-gradient(135deg, #ECFDF5, #D1FAE5)' }} />
 <div className="absolute right-0 top-0 h-full w-[55%] opacity-20 pointer-events-none overflow-hidden">
 <img src={imgHerbs} alt="" className="w-full h-full object-cover object-center" />
 </div>
 <div className="relative z-10 flex items-center gap-4 p-5">
 <div className="w-20 h-20 shrink-0 relative">
 <img src={imgMint} alt="Pharmacopee africaine" className="w-full h-full object-contain float-slow" />
 </div>
 <div>
 <p className="text-[#16A34A] text-[11px] font-bold uppercase tracking-wider mb-1">Medecine africaine</p>
 <h3 className="text-[#111827] font-black text-[16px] leading-tight">Pharmacopée africaine encadrée</h3>
 <p className="text-[#6B7280] text-[12px] mt-1 leading-snug">Plantes médicinales avec monographies, formation croisée et pharmacovigilance intégrée.</p>
 </div>
 </div>
 </div>

 <div className="mt-5 text-center" data-r="fade">
 <a href="https://healthypage-aptdc.com" target="_blank" rel="noopener noreferrer"
 className="btn-pop inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[15px] font-bold min-h-[52px]"
 style={{ background:'linear-gradient(135deg, #FF2D7A, #E10600)', color:'white', boxShadow:'0 8px 24px rgba(225,6,0,0.3)' }}>
 <Heart size={16} /> Accéder à Healthy Page
 </a>
 </div>
 </section>

 {/* ══════════ STATS ANIMÉES ══════════ */}
 <section className="px-4 py-10" style={{ background:'#FFE600' }}>
 <div className="flex items-center gap-2 mb-2" data-r="drop">
 <TrendingUp size={14} className="text-[#111827]" />
 <span className="text-[#111827] text-[11px] font-bold uppercase tracking-widest"><IpHL text="IPPOO en chiffres" /></span>
 </div>
 <h2 className="text-[#111827] font-black text-[22px] mb-6" data-r="blur" data-d="2">
 Des resultats <span className="grad-text">concrets</span>
 </h2>
 <div className="grid grid-cols-2 gap-3">
 <StatCounter target={120} suffix="+" label="Groupements actifs" Icon={Users} color="#FF2D7A" />
 <StatCounter target={5200} suffix="+" label="Visites par mois" Icon={Globe} color="#16A34A" />
 <StatCounter target={3400} suffix="+" label="Inscriptions enregistrees" Icon={BadgeCheck} color="#D4AF37" />
 <StatCounter target={8700} suffix="+" label="Personnes couvertes" Icon={Shield} color="#2563EB" />
 <StatCounter target={94} suffix="%" label="Taux de satisfaction" Icon={Heart} color="#7C3AED" />
 <StatCounter target={21} suffix="" label="Espaces thématiques" Icon={Layers} color="#0891B2" />
 </div>
 </section>

 {/* ══════════ FEATURE CARDS - photo_8 dark style ══════════ */}
 <section className="py-8 px-4" style={{ background:'#0C0F14' }}>
 <div className="flex items-center gap-2 mb-2" data-r="drop">
 <ExternalLink size={13} className="text-[#D4AF37]" />
 <span className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest">Services phares</span>
 </div>
 <h2 className="text-[22px] font-black text-white mb-5 leading-tight" data-r="blur" data-d="2">
 4 espaces à découvrir<br /><span className="grad-text">maintenant</span>
 </h2>
 <div className="grid grid-cols-2 gap-3">
 {[
 { name:'ASSURANCE', tag:'Protection financiere', tint:'#1A2535', img:imgMobileMarket, url:'https://insurance.aptdc-zup2.com' },
 { name:'AAGRO', tag:'Agriculture locale', tint:'#142218', img:imgFarming, url:'https://aagro.ippoo-aptdc.com' },
 { name:'KRAAFT', tag:'Artisanat et creation', tint:'#251810', img:imgPainting, url:'https://kraaft.ippoo-aptdc.com' },
 { name:'HEALTHY PAGE', tag:'Santé et bien-être', tint:'#1A1030', img:imgMarketWoman, url:'https://healthypage-aptdc.com' },
 ].map((item, i) => (
 <a key={item.name}
 href={item.url} target="_blank" rel="noopener noreferrer"
 className="rounded-3xl relative overflow-hidden btn-pop block"
 style={{ background: item.tint, minHeight:'148px', boxShadow:'0 4px 20px rgba(0,0,0,0.5)' }}
 data-r="zoom" data-d={`${i+1}`}>
 <div className="absolute inset-y-0 right-0 w-[58%] overflow-hidden rounded-r-3xl">
 <img src={item.img} alt={item.name}
 className="w-full h-full object-cover object-center"
 style={{ filter:'brightness(0.82) saturate(1.1)' }} />
 </div>
 <div className="absolute inset-0 pointer-events-none"
 style={{ background:`linear-gradient(90deg, ${item.tint} 42%, ${item.tint}BB 58%, transparent 100%)` }} />
 <div className="relative z-10 p-4 flex flex-col justify-end" style={{ minHeight:'148px' }}>
 <p className="text-white font-black text-[14px] leading-tight drop-shadow-sm">{item.name}</p>
 <p className="text-white/45 text-[10px] font-medium mt-0.5">{item.tag}</p>
 <div className="flex items-center gap-1 mt-2 text-[11px] font-bold" style={{ color:'rgba(255,255,255,0.55)' }}>
 <ExternalLink size={10} /> ACCEDER
 </div>
 </div>
 </a>
 ))}
 </div>

 {/* CTA banner */}
 <div className="mt-4 rounded-3xl overflow-hidden relative" style={{ minHeight:'150px' }} data-r="zoom">
 <img src={imgPortrait} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(135deg, rgba(10,6,0,0.96) 0%, rgba(20,10,0,0.82) 55%, rgba(212,175,55,0.2) 100%)' }} />
 <div className="relative z-10 p-5 flex items-center justify-between gap-4">
 <div>
 <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider mb-1">Offre exclusive</p>
 <h3 className="text-white font-black text-[18px] leading-tight"><IpHL text="Adhérez à IPPOO" color="#D4AF37" /></h3>
 <p className="text-white text-[12px] mt-0.5">Cadeaux et avantages membres inclus.</p>
 </div>
 <a href="#contact"
 className="btn-pop shrink-0 inline-flex items-center gap-1.5 px-5 py-3 rounded-2xl text-[13px] font-bold min-h-[44px]"
 style={{ background:'linear-gradient(135deg, #D4AF37, #FF2D7A)', color:'white', boxShadow:'0 4px 16px rgba(212,175,55,0.5)' }}>
 Rejoindre <ArrowRight size={13} />
 </a>
 </div>
 </div>
 </section>

 {/* ══════════ FORMATION ET GROUPEMENTS ══════════ */}
 <section className="px-4 py-10" style={{ background:'linear-gradient(160deg, #ECFDF5 0%, #F0FDF4 50%, #FFF8F2 100%)' }}>
 <div className="flex items-center gap-2 mb-2" data-r="drop">
 <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:'#ECFDF5' }}>
 <BookOpen size={14} className="text-[#16A34A]" />
 </div>
 <span className="text-[#16A34A] text-[11px] font-bold uppercase tracking-widest">Compétences et Réseau</span>
 </div>
 <h2 className="text-[24px] font-black text-[#111827] mb-3 leading-tight" data-r="blur" data-d="2">
 Formation, recyclage<br /><span className="grad-text-cool">et perfectionnement</span>
 </h2>

 {/* Big image block */}
 <div className="rounded-3xl overflow-hidden relative mb-4" style={{ minHeight:'180px' }} data-r="zoom">
 <img src={imgSewing} alt="Formation IPPOO" className="absolute inset-0 w-full h-full object-cover object-top" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(0deg, rgba(15,110,50,0.96) 0%, rgba(15,110,50,0.5) 55%, transparent 100%)' }} />
 <div className="relative z-10 p-5 flex flex-col justify-end" style={{ minHeight:'180px' }}>
 <h3 className="text-white font-black text-[20px] leading-tight">
 La formation comme levier de <span style={{ color:'#BBF7D0' }}>productivité</span>
 </h3>
 <p className="text-white text-[13px] mt-1">Ateliers pratiques, coaching terrain et modules mobiles en langues locales.</p>
 </div>
 </div>

 <p className="text-[#6B7280] text-[14px] leading-relaxed mb-5"data-r="pop" data-d="2">
 Notre programme de formations est un pilier central de notre engagement pour la montée en compétence des acteurs du secteur informel. Il vise à offrir à chacun, quel que soit son métier ou son niveau de scolarisation, des apprentissages utiles, concrets et immédiatement applicables pour consolider son activité, améliorer sa productivité et renforcer sa compétitivité.
 </p>

 <div className="grid grid-cols-1 gap-3"data-r="blur-sm" data-d="3">
 {[
 { n:'01', title:'Formation initiale et de base', desc:"Comptabilité simplifiée, gestion des stocks, techniques de vente et fidélisation client pour consolider votre activité.", color:'#FF2D7A', Icon:BookOpen },
 { n:'02', title:'Recyclage professionnel', desc:"Pour artisans, commerçants et agriculteurs expérimentés : modernisez vos acquis, augmentez la rentabilité et diversifiez votre offre.", color:'#2563EB', Icon:Award },
 { n:'03', title:'Perfectionnement avancé', desc:"E-commerce, marketing digital, gestion d'équipe, qualité et certification : franchissez un cap dans votre développement.", color:'#FF2D7A', Icon:Zap },
 { n:'04', title:'Alphabétisation fonctionnelle', desc:"Lecture, écriture et calcul comme outils d'autonomie économique, en langues locales avec supports visuels et audio.", color:'#16A34A', Icon:Globe },
 ].map((item, i) => (
 <div key={item.n} className="flex items-start gap-4 p-4 rounded-3xl bg-white"
 style={{ border:'1px solid #F3F4F6', boxShadow:'0 2px 10px rgba(0,0,0,0.05)' }}
 data-r="pop" data-d={`${i+1}`}>
 <Badge n={item.n} color={item.color} />
 <div className="flex-1">
 <p className="font-black text-[15px] text-[#111827] leading-tight" style={{ color: item.color }}>{item.title}</p>
 <p className="text-[#6B7280] text-[13px] mt-1.5 leading-snug"><IpHL text={item.desc} color={item.color} /></p>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* ══════════ AFFICHE 3 - Tissu africain pleine largeur ══════════ */}
 <section className="relative overflow-hidden" style={{ minHeight:'360px' }}>
 <img src={imgAfricanTextile} alt="Heritage et creation africaine" className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(0deg, rgba(12,8,0,0.95) 0%, rgba(50,25,0,0.6) 50%, transparent 100%)' }} />
 <div className="relative z-10 h-full flex flex-col justify-end p-6 pb-10" style={{ minHeight:'360px' }}>
 <div className="flex items-center gap-2 mb-3">
 <Star size={12} className="text-[#D4AF37]" />
 <span className="text-[22px] font-bold uppercase tracking-widest" style={{ color:'#FFE600', WebkitTextStroke:'1.5px #111827', paintOrder:'stroke fill' }}>Heritage et Creation</span>
 </div>
 <h2 className="text-white font-black text-[27px] leading-tight mb-3">
 Valorisez chaque<br />savoir-faire <span style={{ color:'#FFE600' }}>africain</span>
 </h2>
 <p className="text-white text-[14px] leading-relaxed mb-6 max-w-sm">
 Tissage, broderie, batik, sculpture, poterie : IPPOO KRAAFT met en lumière les <strong style={{ color:'#FFE600', fontWeight:900 }}>artisans</strong> et créateurs qui perpétuent le génie créatif <strong style={{ color:'#FFE600', fontWeight:900 }}>africain</strong>. Accès aux marchés locaux, nationaux et de la diaspora.
 </p>
 <a href="https://kraaft.ippoo-aptdc.com" target="_blank" rel="noopener noreferrer"
 className="btn-pop self-start inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[14px] font-bold min-h-[48px]"
 style={{ background:'linear-gradient(135deg, #D4AF37, #FF2D7A)', color:'white', boxShadow:'0 8px 24px rgba(212,175,55,0.45)' }}>
 Rejoindre <strong style={{color:'#FFE600',fontWeight:900}}>IPPOO-KRAAFT</strong> <ArrowRight size={15} />
 </a>
 </div>
 </section>

 {/* ══════════ TEMOIGNAGES COMMUNAUTE ══════════ */}
 <section className="px-4 py-10" style={{ background:'linear-gradient(160deg, #ECFEFF 0%, #F0F9FF 50%, #FFF8F2 100%)' }}>
 <div className="flex items-center gap-2 mb-2" data-r="drop">
 <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:'#FFF3E6' }}>
 <Heart size={14} className="text-[#FF2D7A]" />
 </div>
 <span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">Ils temoignent</span>
 </div>
 <h2 className="text-[24px] font-black text-[#111827] mb-5 leading-tight" data-r="blur" data-d="2">
 La communaute<br /><span className="grad-text-warm">prend la parole</span>
 </h2>
 <div className="rounded-3xl overflow-hidden relative mb-4" style={{ minHeight:'220px' }} data-r="zoom">
 <img src={imgShopkeeper} alt="Communaute IPPOO" className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(0deg, rgba(10,14,24,0.94) 0%, rgba(10,14,24,0.4) 60%, transparent 100%)' }} />
 <div className="relative z-10 p-5 flex flex-col justify-end" style={{ minHeight:'220px' }}>
 <blockquote className="text-white font-black text-[18px] italic leading-snug mb-2">
 <IpHL text="IPPOO a changé ma façon de voir mon activité. Aujourd'hui j'ai une assurance, un réseau et des clients." />
 </blockquote>
 <p className="text-white text-[12px] font-semibold"><IpHL text="Membre IPPOO, Cotonou" color="#FF2D7A" /></p>
 </div>
 </div>
 <div className="grid grid-cols-3 gap-3"data-r="bounce-in" data-d="3">
 {[
 { stat:'98%', label:'Satisfaction membres', color:'#FF2D7A' },
 { stat:'+500', label:'Groupements actifs', color:'#16A34A' },
 { stat:'24h', label:'Réponse équipe', color:'#2563EB' },
 ].map(({ stat, label, color }) => (
 <div key={stat} className="rounded-2xl p-4 text-center"
 style={{ background:'white', border:`1px solid ${color}22`, boxShadow:`0 2px 12px ${color}10` }}>
 <p className="font-black text-[22px]" style={{ color }}>{stat}</p>
 <p className="text-[10px] text-[#6B7280] mt-0.5 leading-snug">{label}</p>
 </div>
 ))}
 </div>
 </section>

 {/* ══════════ INSIGHTS ══════════ */}
 <section className="py-12 px-4" style={{ background:'#FFE600' }}>
 <div className="flex items-center gap-2 mb-2" data-r="drop">
 <Target size={14} className="text-[#FF2D7A]" />
 <span className="text-[#FF2D7A] text-[11px] font-bold uppercase tracking-widest">Comprendre l'informel</span>
 </div>
 <h2 className="text-[26px] font-black text-[#111827] mb-6 leading-tight" data-r="blur" data-d="2">
 Profils, besoins<br />et <span className="grad-text">perspectives</span>
 </h2>
 <div className="space-y-3">
 {INSIGHTS.map((item, idx) => {
 const isOpen = openInsight === item.id
 return (
 <div key={item.id} className="rounded-3xl overflow-hidden"
 style={{ background: isOpen ? 'white' : 'rgba(0,0,0,0.06)', border: isOpen ? `2px solid ${item.color}33` : '1px solid transparent' }}
 data-r="zoom" data-d={`${(idx%3)+1}`}>
 <button onClick={() => setOpenInsight(isOpen ? null : item.id)}
 className="w-full flex items-center gap-3 p-4 min-h-[64px] text-left">
 <div className="relative w-12 h-10 rounded-2xl overflow-hidden shrink-0">
 <img src={item.img} alt="" className="w-full h-full object-cover"
 style={{ objectPosition: item.pos }} />
 <div className="absolute inset-0" style={{ background:`${item.color}55` }} />
 </div>
 <div className="flex-1 min-w-0">
 <p className="font-bold text-[14px] leading-tight text-[#111827]">{item.title}</p>
 <p className={`text-[11px] mt-0.5 ${isOpen ? 'text-[#6B7280]' : 'text-[#374151]'}`}>{item.sub}</p>
 </div>
 <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen?'rotate-180':''}`}
 style={{ background: isOpen ? item.color : 'rgba(0,0,0,0.12)', color: isOpen ? 'white' : '#111827' }}>
 <ChevronDown size={15} />
 </div>
 </button>
 <div className={`acc-body ${isOpen?'open':''}`}>
 <div className="px-4 pb-5">
 <div className="h-px mb-4" style={{ background:`linear-gradient(90deg, ${item.color}, transparent)` }} />
 <RT text={item.body} color={item.color} />
 <div className="relative rounded-2xl overflow-hidden h-36 mt-4">
 <img src={item.img} alt={item.title} className="w-full h-full object-cover"
 style={{ objectPosition: item.pos }} />
 <div className="absolute inset-0" style={{ background:`linear-gradient(160deg, ${item.color}55 0%, transparent 60%)` }} />
 </div>
 </div>
 </div>
 </div>
 )
 })}
 </div>
 </section>

 {/* ══════════ PROMO FLASH STRIP 2 ══════════ */}
 <div className="overflow-hidden py-2.5"
 style={{ background:'#FFE600', borderTop:'1px solid rgba(0,0,0,0.1)' }}>
 <div className="flex whitespace-nowrap mq-run select-none">
 {Array(4).fill([
 { Icon: Zap, text: "BON PLAN : Parrainez et gagnez sur chaque adhésion" },
 { Icon: Bell, text: "INFO : Formations incluses dans votre formule IPPOO" },
 { Icon: TrendingUp, text: "ÉPARGNE : Constituez votre fonds de solidarité" },
 { Icon: Award, text: "BONUS : Points cadeaux cumules sur tous vos achats" },
 { Icon: Target, text: "OBJECTIF : Valoriser chaque acteur de l'informel" },
 ]).flat().map((item, i) => (
 <span key={i} className="mx-8 flex items-center gap-2 text-[11px] font-bold shrink-0"
 style={{ color: ['#FF2D7A','#D4AF37','#16A34A','#FF2D7A','#7C3AED'][i%5] }}>
 <item.Icon size={12} className="shrink-0" />
 <IpHL text={item.text} />
 </span>
 ))}
 </div>
 </div>

 {/* ══════════ AMBITIONS + VALEURS ══════════ */}
 <section className="px-4 py-10" style={{ background:'#FFF8F2' }}>
 <div className="rounded-3xl overflow-hidden mb-4"data-r="scale" style={{ boxShadow:'0 8px 32px rgba(22,163,74,0.25)' }}>
 <div className="relative h-52">
 <img src={imgFruitMarket} alt="Ambitions IPPOO" className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(0deg, rgba(10,60,25,0.95) 0%, rgba(10,60,25,0.7) 50%, rgba(0,0,0,0.2) 100%)' }} />
 <div className="relative z-10 p-6 flex flex-col justify-end h-full">
 <p className="text-white text-[11px] font-bold uppercase tracking-wider mb-1">Nos Ambitions</p>
 <h3 className="text-white font-black text-[24px] leading-tight">
 Structurer l'informel<br /><span style={{ color:'#A7F3D0' }}>pour l'Afrique.</span>
 </h3>
 <p className="text-white text-[13px] mt-2">Un réseau solide d'acteurs organisés et autonomes dans leur développement.</p>
 </div>
 </div>
 <div className="p-5 grid grid-cols-2 gap-3" style={{ background:'linear-gradient(135deg, #16A34A, #059669)' }}>
 {[['21','Espaces actifs'],['100%','Accompagnement']].map(([n,l]) => (
 <div key={n} className="rounded-2xl p-4" style={{ background:'rgba(255,255,255,0.15)', border:'1px solid rgba(255,255,255,0.2)' }}>
 <p className="text-white font-black text-[24px]">{n}</p>
 <p className="text-white text-[11px] mt-0.5">{l}</p>
 </div>
 ))}
 </div>
 </div>

 <h3 className="text-[20px] font-black text-[#111827] mb-4"data-r="fade-up">
 Ce qui fait la difference <span className="grad-text-warm">IPPOO</span>
 </h3>
 <div className="grid grid-cols-1 gap-3">
 {[
 { Icon:Users, text:"Écoute active et co-construction avec les acteurs du terrain pour des solutions réellement adaptées", color:'#FF2D7A' },
 { Icon:Globe, text:"Accès simplifié via plateformes mobiles intuitives et accessibles sans connexion haut débit", color:'#16A34A' },
 { Icon:Heart, text:"Dimension humaine : chaque acteur de l'informel est un partenaire valorisé, pas un bénéficiaire", color:'#FF2D7A' },
 { Icon:TrendingUp, text:"Connexion aux opportunités : IA, micro-finance, e-commerce local, épargne et investissement", color:'#7C3AED' },
 ].map(({ Icon, text, color }, i) => (
 <div key={text} className="flex items-center gap-4 px-5 py-4 rounded-3xl bg-white"
 style={{ border:'1px solid #F3F4F6', boxShadow:'0 2px 12px rgba(0,0,0,0.05)' }}
 data-r="pop" data-d={`${i+1}`}>
 <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
 style={{ background:`${color}15` }}>
 <Icon size={19} style={{ color }} />
 </div>
 <p className="text-[14px] font-semibold text-[#374151] leading-snug">{text}</p>
 </div>
 ))}
 </div>
 </section>

 {/* ══════════ ESPACES EN VEDETTE ══════════ */}
 <section className="py-8" style={{ background:'#FFE600' }}>
 <div className="px-4 mb-5 flex items-center justify-between">
 <div>
 <div className="flex items-center gap-2 mb-1">
 <Camera size={14} className="text-[#111827]" />
 <span className="text-[#111827] text-[11px] font-bold uppercase tracking-widest">Selection</span>
 </div>
 <h2 className="text-[20px] font-black text-[#111827]">Espaces <span className="grad-text">en vedette</span></h2>
 </div>
 <a href="#espaces" className="text-[12px] font-bold text-[#374151] flex items-center gap-1">
 Tout voir <ChevronRight size={13} />
 </a>
 </div>

 <div className="px-4 grid grid-cols-2 gap-3">
 {PLATFORMS.slice(0,6).map((p, i) => (
 <a key={p.id} href={p.url!=='#'?p.url:'#'} target={p.url!=='#'?'_blank':undefined}
 rel="noopener noreferrer" onClick={e => { if(p.url==='#') e.preventDefault() }}
 className="rounded-3xl relative overflow-hidden btn-pop block"
 style={{ background:'#131820', minHeight: i===2?'160px':'140px', boxShadow:`0 6px 20px ${p.color}30` }}
 data-r="left" data-d={`${(i%4)+1}`}>
 <div className="absolute inset-y-0 right-0 w-[56%] overflow-hidden rounded-r-3xl">
 <img src={p.img} alt={p.name}
 className="w-full h-full object-cover object-center"
 style={{ filter:'brightness(0.75) saturate(1.05)' }} />
 </div>
 <div className="absolute inset-0 pointer-events-none"
 style={{ background:`linear-gradient(90deg, #131820 42%, rgba(19,24,32,0.85) 58%, transparent 100%)` }} />
 <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full blur-2xl opacity-40 pointer-events-none"
 style={{ background: p.color }} />
 <div className="relative z-10 p-4 flex flex-col justify-end" style={{ minHeight:'inherit' }}>
 <div className="w-5 h-0.5 rounded-full mb-1.5" style={{ background: p.color }} />
 <p className="text-white font-black text-[13px] leading-tight">{p.name}</p>
 <p className="text-white/45 text-[10px] mt-0.5">{p.tag}</p>
 <div className="flex items-center gap-1 mt-1.5 text-[10px] font-bold" style={{ color: p.color }}>
 <ExternalLink size={9} /> ACCEDER
 </div>
 </div>
 </a>
 ))}
 </div>

 <div className="flex gap-3 px-4 mt-4 overflow-x-auto pb-1" style={{ scrollbarWidth:'none' }}>
 {PLATFORMS.slice(6,14).map((p, i) => (
 <a key={p.id} href={p.url!=='#'?p.url:'#'} target={p.url!=='#'?'_blank':undefined}
 rel="noopener noreferrer" onClick={e => { if(p.url==='#') e.preventDefault() }}
 className="snap-start shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl btn-pop"
 style={{ background:`${p.color}15`, border:`2px solid ${p.color}`, minWidth:'160px', boxShadow:`0 4px 16px ${p.color}30` }}>
 <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
 style={{ background:`${p.color}30`, border:`1.5px solid ${p.color}` }}>
 <p.LIcon size={18} style={{ color: p.color }} />
 </div>
 <div>
 <p className="font-black text-[13px] leading-tight" style={{ color: p.color }}>{p.name}</p>
 <p className="text-[#111827] text-[10px] font-semibold mt-0.5">{p.tag}</p>
 </div>
 </a>
 ))}
 </div>
 </section>

 {/* ══════════ CTA ══════════ */}
 <section className="relative overflow-hidden px-4 py-12">
 <div className="absolute inset-0">
 <img src={imgFruitCarry} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(160deg, rgba(225,6,0,0.93) 0%, rgba(255,45,122,0.9) 50%, rgba(124,58,237,0.92) 100%)' }} />
 </div>
 <div className="relative z-10 max-w-screen-xl mx-auto">
 <div className="flex items-center gap-2 mb-3"data-r="left-sm">
 <Briefcase size={14} className="text-white" />
 <span className="text-white text-[11px] font-bold uppercase tracking-widest">Abonnements et Formules</span>
 </div>
 <h2 className="text-[28px] font-black text-white leading-tight mb-4" data-r="blur" data-d="2">
 Maximisez votre impact dans la <strong style={{ color:'#FFE600', fontWeight:900 }}>communaute IPPOO</strong>
 </h2>
 <ul className="space-y-3 mb-7"data-r="right-sm" data-d="3">
 {[
 ['Formules sur mesure','Comparez nos options selon votre secteur, votre profil et votre positionnement.'],
 ['Offres exclusives','Tarifs promotionnels, bonus, bons plans et packs groupements avec gain partage.'],
 ['Privilèges abonnés','Accès prioritaire aux formations, outils IA, épargne et investissement.'],
 ].map(([bold, text]) => (
 <li key={bold} className="flex items-start gap-3">
 <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
 style={{ background:'rgba(255,255,255,0.25)' }}>
 <Check size={12} className="text-white" />
 </div>
 <p className="text-white text-[14px]"><strong className="text-white">{bold} :</strong> {text}</p>
 </li>
 ))}
 </ul>
 <div className="flex flex-col gap-3"data-r="pop" data-d="4">
 <a href="#contact"
 className="btn-pop flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold min-h-[52px]"
 style={{ background:'white', color:'#E10600', boxShadow:'0 8px 24px rgba(0,0,0,0.2)' }}>
 Demander une formule <ArrowRight size={16} />
 </a>
 <a href="#espaces"
 className="btn-pop flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-semibold text-white min-h-[52px]"
 style={{ border:'2px solid #FFE600' }}>
 Voir les plateformes
 </a>
 </div>
 </div>
 </section>

 {/* ══════════ TRANSPORT & LOGISTIQUE ══════════ */}
 <section className="relative overflow-hidden">
 <img src={imgTransport} alt="Transport et Logistique IPPOO" className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(165deg, rgba(0,0,0,0.91) 0%, rgba(5,20,50,0.84) 60%, rgba(8,145,178,0.15) 100%)' }} />
 <div className="relative z-10 px-5 py-10">
 <div className="flex items-center gap-2 mb-3">
 <Truck size={13} className="text-[#0891B2]" />
 <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color:'#0891B2' }}>Transport & Logistique</span>
 </div>
 <h2 className="text-white font-black text-[26px] leading-tight mb-3">
 Déplacez-vous, transportez<br /><span style={{ color:'#0891B2' }}>et livrez en toute simplicité.</span>
 </h2>
 <p className="text-white text-[13px] leading-relaxed mb-5">
 <IpHL text="Les solutions Transport, Logistique et Covoiturage IPPOO sont conçues pour faciliter la mobilité des personnes, le transport des marchandises et l'organisation des livraisons, tout en réduisant les coûts et en améliorant l'efficacité." color="#0891B2" />
 </p>
 <div className="grid grid-cols-2 gap-2.5 mb-6">
 {[
 { Icon: Truck, t:"Transport mutualisé", d:"Répartissez les frais entre expéditeurs pour un service plus économique." },
 { Icon: Globe, t:"Expéditions partout", d:"Réseau de partenaires pour vos acheminements locaux, nationaux et internationaux." },
 { Icon: Users, t:"Covoiturage communautaire", d:"Partagez vos trajets avec d'autres membres IPPOO." },
 { Icon: Shield, t:"Fiable et sécurisé", d:"Partenaires de confiance, réservations simplifiées et garanties de service." },
 ].map(({ Icon, t, d }) => (
 <div key={t} className="rounded-2xl p-3" style={{ background:'rgba(255,255,255,0.07)', backdropFilter:'blur(6px)' }}>
 <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-2" style={{ background:'rgba(8,145,178,0.2)' }}>
 <Icon size={14} style={{ color:'#0891B2' }} />
 </div>
 <p className="text-white font-bold text-[12px] leading-tight mb-0.5">{t}</p>
 <p className="text-white text-[10px] leading-snug">{d}</p>
 </div>
 ))}
 </div>
 <div className="flex gap-3">
 <a href="#contact" className="btn-pop flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
 style={{ background:'#0891B2', boxShadow:'0 8px 24px rgba(8,145,178,0.4)' }}>
 Accéder à <strong style={{color:'#FFE600',fontWeight:900}}>IPPOO-TRIIP</strong> <ArrowRight size={15} />
 </a>
 <a href="https://wa.me/2290141521092" target="_blank" rel="noopener noreferrer"
 className="btn-pop flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-[14px] font-semibold text-white"
 style={{ background:'rgba(255,255,255,0.12)', border:'1px solid #FFE600' }}>
 <MessageCircle size={15} />
 </a>
 </div>
 </div>
 </section>

 {/* ══════════ PARTNERSHIP OFFER ══════════ */}
 <section className="relative overflow-hidden">
 <img src={imgPartnership} alt="Votre partenaire de réussite IPPOO" className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(155deg, rgba(255,45,122,0.92) 0%, rgba(124,58,237,0.88) 55%, rgba(0,0,0,0.82) 100%)' }} />
 <div className="relative z-10 px-5 py-10">
 <div className="flex items-center gap-2 mb-3">
 <Handshake size={13} className="text-white" />
 <span className="text-white text-[11px] font-bold uppercase tracking-widest">Votre partenaire de réussite</span>
 </div>
 <h2 className="text-white font-black text-[26px] leading-tight mb-3">
 Bien plus qu'un abonnement :<br /><span className="text-[#FFE600]">un écosystème pour vous.</span>
 </h2>
 <p className="text-white text-[13px] leading-relaxed mb-5">
 Rejoindre <strong style={{ color:'#FFE600', fontWeight:900 }}>IPPOO</strong>, c'est intégrer un écosystème conçu pour vous <strong style={{ color:'#FFE600', fontWeight:700 }}>accompagner</strong> à chaque étape de votre vie personnelle, professionnelle et entrepreneuriale. Grâce à nos formules d'<strong style={{ color:'#FFE600', fontWeight:700 }}>accompagnement</strong>, vous accédez à un ensemble de services, d'avantages et de solutions pensés pour vous aider à grandir, entreprendre et sécuriser votre avenir.
 </p>
 <div className="grid grid-cols-2 gap-2 mb-6">
 {[
 "Entrepreneurs & commerçants","Agriculteurs","Étudiants & jeunes",
 "Femmes & mères","Demandeurs d'emploi","Freelances & experts",
 "Acteurs de l'informel","Familles & élèves",
 ].map(p => (
 <div key={p} className="flex items-center gap-2 rounded-xl px-3 py-2" style={{ background:'rgba(255,255,255,0.08)', border:'1.5px solid #FFE600' }}>
 <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#FFE600]" />
 <span className="text-white text-[11px] font-medium">{p}</span>
 </div>
 ))}
 </div>
 <div className="space-y-2.5 mb-6">
 {[
 { Icon: TrendingUp, t:"Développez votre activité", d:"Structuration, ventes, gestion financière et mise en conformité." },
 { Icon: Network, t:"Réseau d'affaires puissant", d:"Producteurs, fournisseurs, distributeurs et partenaires commerciaux." },
 { Icon: Shield, t:"Protégez votre avenir", d:"Assurances, assistances et couvertures pour votre santé, famille et activité." },
 ].map(({ Icon, t, d }) => (
 <div key={t} className="flex items-start gap-3">
 <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background:'rgba(255,230,0,0.2)' }}>
 <Icon size={15} className="text-[#FFE600]" />
 </div>
 <div>
 <p className="text-white font-bold text-[13px]">{t}</p>
 <p className="text-white text-[11px]">{d}</p>
 </div>
 </div>
 ))}
 </div>
 <a href="#contact" className="btn-pop w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-[#111827]"
 style={{ background:'#FFE600', boxShadow:'0 8px 28px rgba(0,0,0,0.3)' }}>
 Demander un accompagnement <ArrowRight size={16} />
 </a>
 </div>
 </section>

 {/* ══════════ SECTEUR PRIMAIRE ══════════ */}
 <section className="relative overflow-hidden">
 <img src={imgFarming} alt="IPPOO secteur primaire - Agriculture et ressources" className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(165deg, rgba(5,60,10,0.95) 0%, rgba(22,163,74,0.82) 60%, rgba(0,0,0,0.5) 100%)' }} />
 <div className="relative z-10 px-5 py-10">
 <div className="flex items-center gap-2 mb-3">
 <Leaf size={13} style={{ color:'#86EFAC' }} />
 <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color:'#86EFAC' }}>Secteur primaire</span>
 </div>
 <h2 className="text-white font-black text-[24px] leading-tight mb-3">
 <IpHL text="IPPOO dans le secteur primaire : produire, valoriser et organiser les ressources" color="#86EFAC" />
 </h2>
 <p className="text-white text-[13px] leading-relaxed mb-5">
 Le secteur primaire constitue la base de nombreuses économies. <Ip /> accompagne les acteurs de l'agriculture, de l'élevage, de la pêche, de l'exploitation des ressources naturelles et des activités rurales afin de les aider à mieux produire, mieux vendre et développer durablement leurs activités.
 </p>
 <div className="space-y-2 mb-6">
 {[
 "Accès aux marchés pour les producteurs",
 "Approvisionnement en intrants et équipements",
 "Structuration des groupements et coopératives",
 "Valorisation des produits locaux",
 "Mise en relation producteurs, transformateurs, distributeurs et consommateurs",
 "Accès aux solutions d'accompagnement, d'assurance et de financement",
 ].map(item => (
 <div key={item} className="flex items-start gap-2.5">
 <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background:'rgba(134,239,172,0.2)' }}>
 <Check size={10} style={{ color:'#86EFAC' }} />
 </div>
 <p className="text-white text-[12px] leading-snug">{item}</p>
 </div>
 ))}
 </div>
 <button onClick={() => goPage('groupements')}
 className="btn-pop w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
 style={{ background:'rgba(22,163,74,0.8)', border:'1.5px solid rgba(134,239,172,0.5)', backdropFilter:'blur(8px)' }}>
 <Leaf size={15} /> Rejoindre un groupement agricole
 </button>
 </div>
 </section>

 {/* ══════════ SECTEUR SECONDAIRE ══════════ */}
 <section className="relative overflow-hidden">
 <img src={imgSewing} alt="IPPOO secteur secondaire - Transformation et fabrication" className="absolute inset-0 w-full h-full object-cover object-top" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(165deg, rgba(20,10,0,0.97) 0%, rgba(60,40,0,0.92) 55%, rgba(0,0,0,0.85) 100%)' }} />
 <div className="relative z-10 px-5 py-10">
 <div className="flex items-center gap-2 mb-3">
 <Cpu size={13} style={{ color:'#FFE600' }} />
 <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color:'#FFE600' }}>Secteur secondaire</span>
 </div>
 <h2 className="font-black text-[24px] leading-tight mb-3" style={{ color:'#FFE600' }}>
 <strong style={{ color:'#FF2D7A' }}>IPPOO</strong> dans le secteur secondaire : <span className="grad-text">transformer, fabriquer et industrialiser</span>
 </h2>
 <p className="text-white text-[13px] leading-relaxed mb-5">
 Le secteur secondaire représente la transformation des matières premières, la fabrication et la création de valeur ajoutée. <strong style={{ color:'#FFE600', fontWeight:900 }}>IPPOO</strong> accompagne artisans, industriels, transformateurs et entreprises pour favoriser une économie où les ressources produites localement peuvent être transformées, consommées et exportées avec plus de valeur.
 </p>
 <div className="grid grid-cols-2 gap-2.5 mb-6">
 {[
 { Icon:Cpu, t:"Artisanat & manufacture", d:"Production artisanale, savoir-faire local et fabrication de produits à valeur ajoutée." },
 { Icon:Package, t:"Transformation agro-alim", d:"Valorisation des ressources agricoles par la transformation et la conservation." },
 { Icon:ShoppingCart,t:"Commercialisation", d:"Accès aux marchés locaux, nationaux et à l'export pour les produits transformés." },
 { Icon:TrendingUp, t:"Accompagnement entrepreneur",d:"Structuration, branding, accès aux fournisseurs, équipements et financement." },
 ].map(({ Icon, t, d }) => (
 <div key={t} className="rounded-2xl p-3" style={{ background:'rgba(255,230,0,0.10)', backdropFilter:'blur(6px)', border:'1.5px solid #FFE600' }}>
 <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-2" style={{ background:'rgba(255,230,0,0.2)' }}>
 <Icon size={14} style={{ color:'#FFE600' }} />
 </div>
 <p className="font-bold text-[12px] leading-tight mb-0.5" style={{ color:'#FFE600' }}>{t}</p>
 <p className="text-white text-[10px] leading-snug">{d}</p>
 </div>
 ))}
 </div>
 <button onClick={() => goPage('kaash')}
 className="btn-pop w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold"
 style={{ background:'#FFE600', color:'#111827', boxShadow:'0 8px 24px rgba(255,230,0,0.35)' }}>
 <Briefcase size={15} /> Développer mon activité <ArrowRight size={15} />
 </button>
 </div>
 </section>

 {/* ══════════ SECTEUR TERTIAIRE ══════════ */}
 <section className="relative overflow-hidden">
 <img src={imgMobileMarket} alt="IPPOO secteur tertiaire - Services et numérique" className="absolute inset-0 w-full h-full object-cover object-top" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(165deg, rgba(8,100,178,0.95) 0%, rgba(124,58,237,0.82) 60%, rgba(0,0,0,0.55) 100%)' }} />
 <div className="relative z-10 px-5 py-10">
 <div className="flex items-center gap-2 mb-3">
 <Globe size={13} style={{ color:'#BAE6FD' }} />
 <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color:'#FFE600' }}>Secteur tertiaire</span>
 </div>
 <h2 className="text-white font-black text-[24px] leading-tight mb-3">
 <strong style={{ color:'#FFE600', fontWeight:900 }}>IPPOO</strong> dans le <strong style={{ color:'#FFE600', fontWeight:900 }}>secteur tertiaire</strong> : connecter, servir et développer les services
 </h2>
 <p className="text-white text-[13px] leading-relaxed mb-5">
 Le <strong style={{ color:'#FFE600', fontWeight:700 }}>secteur tertiaire</strong> regroupe l'ensemble des activités de services. <strong style={{ color:'#FFE600', fontWeight:900 }}>IPPOO</strong> y développe un ensemble de solutions numériques et physiques permettant de simplifier les échanges et d'améliorer l'accès aux services pour tous.
 </p>
 <div className="flex flex-wrap gap-2 mb-6">
 {[
 "Commerce & Marketplace","Services financiers","Assurance & Assistance",
 "Formation","Transport & Logistique","Emploi","Tourisme","Immobilier",
 "Communication","Services numériques",
 ].map(tag => (
 <span key={tag} className="px-3 py-1.5 rounded-xl text-[11px] font-semibold text-white"
 style={{ background:'rgba(255,255,255,0.12)', border:'1px solid rgba(186,230,253,0.3)' }}>
 {tag}
 </span>
 ))}
 </div>
 <button onClick={() => goPage('home')}
 className="btn-pop w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white"
 style={{ background:'rgba(8,145,178,0.8)', border:'1.5px solid rgba(186,230,253,0.4)', backdropFilter:'blur(8px)' }}>
 <Globe size={15} /> Explorer les 21 espaces <Ip />
 </button>
 </div>
 </section>

 {/* ══════════ CHAÎNE DE VALEUR INTÉGRÉE ══════════ */}
 <section className="px-5 py-10" style={{ background:'#111827' }}>
 <div className="flex items-center gap-2 mb-3">
 <Network size={13} style={{ color:'#FF2D7A' }} />
 <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color:'#FF2D7A' }}>Une approche intégrée</span>
 </div>
 <h2 className="text-white font-black text-[22px] leading-tight mb-3">
 De la production jusqu'au consommateur final
 </h2>
 <p className="text-white text-[13px] leading-relaxed mb-6">
 La force d'<Ip /> réside dans sa capacité à connecter toute la chaîne de valeur : du producteur au consommateur final, en passant par la transformation, la distribution et les services.
 </p>
 <div className="relative mb-8">
 <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background:'linear-gradient(to bottom, #FF2D7A, #16A34A, #0891B2, #D4AF37)' }} />
 <div className="space-y-6 pl-10">
 {[
 { step:"Production", desc:"Agriculteurs, éleveurs, pêcheurs, extracteurs de ressources naturelles.", color:"#16A34A" },
 { step:"Transformation", desc:"Artisans, industriels, agroalimentaire, fabricants et créateurs de valeur ajoutée.", color:"#D4AF37" },
 { step:"Distribution", desc:"Commerçants, marketplace, réseaux de distribution locaux et nationaux.", color:"#FF2D7A" },
 { step:"Services", desc:"Financement, assurance, transport, formation, santé et services numériques.", color:"#0891B2" },
 { step:"Financement", desc:"Crédit, épargne, investissement communautaire et solutions de paiement adaptées.", color:"#7C3AED" },
 { step:"Développement", desc:"Accompagnement stratégique, croissance durable et intégration économique.", color:"#FF8C00" },
 ].map(({ step, desc, color }) => (
 <div key={step} className="relative">
 <div className="absolute -left-[26px] top-0.5 w-4 h-4 rounded-full flex items-center justify-center"
 style={{ background:color, border:'2px solid #111827' }} />
 <p className="font-bold text-[14px] text-white mb-0.5">{step}</p>
 <p className="text-white text-[12px] leading-snug">{desc}</p>
 </div>
 ))}
 </div>
 </div>
 <div className="rounded-2xl p-4" style={{ background:'#FFE600', border:'1px solid #D4AF37' }}>
 <p className="text-[#111827] text-[13px] leading-relaxed font-semibold">
 Un producteur peut trouver des partenaires, un transformateur peut développer son activité, un commerçant peut accéder à de nouveaux marchés, et un consommateur peut bénéficier de services adaptés - dans un même environnement.
 </p>
 </div>
 </section>

 {/* ══════════ ÉCOSYSTÈME ÉCONOMIQUE COMPLET ══════════ */}
 <section className="relative overflow-hidden">
 <img src={imgW7} alt="IPPOO - Écosystème économique complet" className="absolute inset-0 w-full h-full object-cover object-center" />
 <div className="absolute inset-0" style={{ background:'linear-gradient(160deg, rgba(255,45,122,0.92) 0%, rgba(225,6,0,0.85) 40%, rgba(17,24,39,0.9) 100%)' }} />
 <div className="relative z-10 px-5 py-10">
 <div className="flex items-center gap-2 mb-3">
 <Globe size={13} className="text-white" />
 <span className="text-[#FFE600] text-[11px] font-bold uppercase tracking-widest">Écosystème <strong style={{ color:'#FFE600' }}>IPPOO</strong></span>
 </div>
 <h2 className="font-black text-[24px] leading-tight mb-3" style={{ color:'#FFE600' }}>
 IPPOO : <span className="grad-text-cool">un écosystème économique complet pour chaque acteur</span>
 </h2>
 <p className="text-white text-[13px] leading-relaxed mb-6">
 En intervenant dans tous les secteurs d'activité, <strong style={{ color:'#FFE600', fontWeight:900 }}>IPPOO</strong> ambitionne de devenir une infrastructure économique permettant de créer des opportunités, renforcer les entreprises, accompagner les entrepreneurs et faciliter l'accès aux services essentiels.
 </p>
 <p className="text-white text-[13px] leading-relaxed mb-8">
 Avec <strong style={{ color:'#FFE600', fontWeight:900 }}>IPPOO</strong>, chaque <strong style={{ color:'#FFE600', fontWeight:700 }}>acteur</strong> trouve un espace pour produire, entreprendre, échanger, évoluer et participer à la construction d'une économie plus connectée - particulièrement en Afrique, où l'entrepreneuriat populaire constitue l'une des plus grandes sources de création de valeur.
 </p>
 <div className="space-y-3">
 <button onClick={() => goPage('adhesion')}
 className="btn-pop w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-[#E10600]"
 style={{ background:'white', boxShadow:'0 8px 28px rgba(0,0,0,0.25)' }}>
 <ArrowRight size={16} /> Rejoindre <Ip /> maintenant
 </button>
 <button onClick={() => goPage('souscriptions')}
 className="btn-pop w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-semibold text-white"
 style={{ border:'2px solid #FFE600' }}>
 Découvrir toutes nos solutions
 </button>
 </div>
 </div>
 </section>

 {/* ══════════ CONTACT ══════════ */}
 <section id="contact" className="px-4 py-12" style={{ background:'linear-gradient(160deg, #FEF2F2 0%, #FFF8F2 50%, #FFF3E6 100%)' }}>
 <div className="flex items-center gap-2 mb-2" data-r="drop">
 <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:'#FEF2F2' }}>
 <Phone size={14} className="text-[#E10600]" />
 </div>
 <span className="text-[#E10600] text-[11px] font-bold uppercase tracking-widest">Nous Contacter</span>
 </div>
 <h2 className="text-[26px] font-black text-[#111827] mb-2 leading-tight" data-r="blur" data-d="2">
 Faites-vous<br /><span className="grad-text">entendre.</span>
 </h2>
 <p className="text-[#6B7280] text-[14px] leading-relaxed mb-6" data-r="fade" data-d="3">
 <IpHL text="Notre équipe vous recontacte sous 24h pour vous accompagner dans votre adhésion, votre positionnement et votre accès aux 21 espaces de l'écosystème IPPOO." />
 </p>

 <div className="space-y-3 mb-7">
 {[
 { Icon:Phone, val:'+229 01 41 52 10 92', label:'Appeler IPPOO', href:'tel:+2290141521092', grad:'linear-gradient(135deg, #E10600, #FF4500)' },
 { Icon:Mail, val:'ippooz.up.2@gmail.com', label:'Écrire par email', href:'mailto:ippooz.up.2@gmail.com', grad:'linear-gradient(135deg, #16A34A, #059669)' },
 { Icon:MapPin, val:'Parakou, Borgou, Benin', label:'Notre siege', href:'https://maps.google.com/?q=Parakou,Borgou,Benin', grad:'linear-gradient(135deg, #FF2D7A, #D4AF37)' },
 ].map(({ Icon, val, label, href, grad }) => (
 <a key={label} href={href} className="flex items-center gap-4 rounded-2xl px-4 py-3.5 btn-pop"
 style={{ background: grad }}data-r="blur-sm">
 <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
 style={{ background:'rgba(255,255,255,0.2)' }}>
 <Icon size={18} className="text-white" />
 </div>
 <div>
 <p className="text-white text-[11px] font-semibold">{label}</p>
 <p className="text-white font-bold text-[14px] mt-0.5">{val}</p>
 </div>
 </a>
 ))}
 </div>

 <div className="rounded-3xl p-6 bg-white" style={{ border:'1px solid #F3E8D8', boxShadow:'0 4px 24px rgba(0,0,0,0.06)' }}data-r="bounce-in">
 <h3 className="text-[18px] font-black text-[#111827] mb-1">Demande d'accompagnement</h3>
 <p className="text-[#9CA3AF] text-[13px] mb-5">Notre équipe vous recontacte sous 24h.</p>
 <div className="space-y-4">
 {[
 { label:'Nom et Prenoms', key:'nom', ph:'Ex : Ibrahim Konate', type:'text' },
 { label:'Email', key:'email', ph:'contact@exemple.com', type:'email' },
 ].map(f => (
 <div key={f.key}>
 <label className="block text-[#374151] text-[12px] font-bold mb-1.5">{f.label}</label>
 <input type={f.type} placeholder={f.ph}
 value={(form as any)[f.key]}
 onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
 className="w-full px-4 py-3.5 rounded-2xl text-[14px] text-[#111827] border border-[#E5E7EB] focus:outline-none focus:border-[#FF2D7A] focus:ring-2 focus:ring-[#FF2D7A]/20 transition-all min-h-[52px] placeholder:text-[#D1D5DB]" />
 </div>
 ))}
 <div>
 <label className="block text-[#374151] text-[12px] font-bold mb-1.5">Votre message</label>
 <textarea rows={4} placeholder="Decrivez votre activite, vos besoins et votre cible..."
 value={form.msg}
 onChange={e => setForm(p => ({ ...p, msg: e.target.value }))}
 className="w-full px-4 py-3.5 rounded-2xl text-[14px] text-[#111827] border border-[#E5E7EB] focus:outline-none focus:border-[#FF2D7A] focus:ring-2 focus:ring-[#FF2D7A]/20 resize-none transition-all placeholder:text-[#D1D5DB]" />
 </div>
 <button
 onClick={e => { e.preventDefault(); setFormSent(true); addToast('Demande envoyée ! Nous vous recontactons sous 24h.', 'info') }}
 className="btn-pop w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-bold text-white min-h-[52px]"
 style={{ background: formSent ? 'linear-gradient(135deg, #16A34A, #059669)' : 'linear-gradient(135deg, #FF2D7A 0%, #E10600 100%)', boxShadow:'0 8px 24px rgba(225,6,0,0.3)' }}>
 {formSent ? <><Check size={16} /> Demande envoyée !</> : <>Envoyer ma demande <ArrowRight size={16} /></>}
 </button>
 </div>
 </div>
 </section>

 {/* ══════════ FOOTER ══════════ */}
 <footer style={{ background:'#FFE600' }}>
 <div className="h-1.5" style={{ background:'linear-gradient(90deg, #E10600, #FF2D7A, #D4AF37, #16A34A, #FF2D7A, #7C3AED)' }} />
 <div className="px-4 py-12 max-w-screen-xl mx-auto">
 <img src={logo} alt="IPPOO" className="h-[60px] object-contain mb-5" />
 <p className="text-[#374151] text-[13px] leading-relaxed mb-6 max-w-xs">
 L'entité N°1 accompagnant les actifs de l'informel en Afrique. Plateforme intégrée, services concrets, impact durable.
 </p>

 {/* Social media */}
 <div className="mb-7">
 <p className="text-[#374151] text-[11px] font-bold uppercase tracking-widest mb-3">Nos Réseaux</p>
 <div className="flex gap-2 flex-wrap">
 {SOCIAL.map(s => (
 <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
 className="flex items-center gap-2 px-3 py-2 rounded-2xl btn-pop"
 style={{ background: s.bg, border:'1px solid transparent' }}>
 <SocialIcon name={s.label} />
 <span className="text-[#374151] text-[11px] font-medium">{s.label}</span>
 </a>
 ))}
 </div>
 <a href="mailto:ippooz.up.2@gmail.com"
 className="flex items-center gap-2 mt-3 text-[#374151] text-[12px] hover:text-[#111827] transition-colors">
 <Mail size={13} /> ippooz.up.2@gmail.com
 </a>
 </div>

 <div className="grid grid-cols-2 gap-6 mb-8">
 <div>
 <p className="text-[#111827] text-[11px] font-bold uppercase tracking-widest mb-4">Découvrir</p>
 <div className="space-y-2.5">
 {[{l:'Accueil',h:'#'},{l:'Nos Espaces',h:'#espaces'},{l:'Contact',h:'#contact'}].map(link => (
 <a key={link.l} href={link.h} className="block text-[13px] text-[#374151] hover:text-[#111827] transition-colors">{link.l}</a>
 ))}
 {([
 {l:'À Propos',p:'apropos'},{l:'Formation',p:'programmes'},{l:'Santé',p:'sante'},
 {l:'Groupements',p:'groupements'},{l:'Emploi',p:'emploi'},{l:'Actualités',p:'actualites'},{l:'FAQ',p:'faq'},
 ] as Array<{l:string;p:PageKey}>).map(link => (
 <button key={link.l} onClick={() => goPage(link.p)} className="block text-[13px] text-[#374151] hover:text-[#111827] transition-colors text-left w-full">{link.l}</button>
 ))}
 </div>
 </div>
 <div>
 <p className="text-[#111827] text-[11px] font-bold uppercase tracking-widest mb-4">Espace Membre</p>
 <div className="space-y-2.5">
 {([
 {l:'Mon Espace',p:'moncompte'},{l:'Adhésion',p:'adhesion'},{l:'Souscriptions',p:'souscriptions'},
 {l:'Parrainage',p:'parrainage'},{l:'Investissement',p:'investissement'},
 {l:'KAASH',p:'kaash'},{l:'IPPOO Business',p:'business'},{l:'Doléances',p:'doleances'},
 ] as Array<{l:string;p:PageKey}>).map(link => (
 <button key={link.l} onClick={() => goPage(link.p)} className="block text-[13px] text-[#374151] hover:text-[#111827] transition-colors text-left w-full">{link.l}</button>
 ))}
 </div>
 </div>
 </div>

 {/* Legal links */}
 <div className="flex flex-wrap gap-4 mb-5">
 {([
 {l:'Mentions Légales',p:'mentions'},{l:'Politique de Confidentialité',p:'privacy'},{l:'CGU',p:'cgu'},
 ] as Array<{l:string;p:PageKey}>).map(link => (
 <button key={link.l} onClick={() => goPage(link.p)} className="text-[11px] text-[#374151] hover:text-[#111827] transition-colors">{link.l}</button>
 ))}
 </div>

 <div className="border-t border-[#111827]/20 pt-6 space-y-1.5">
 <p className="text-[#111827] text-[13px] font-black text-center tracking-wide">APTDC-Z-UP · TDO · LIMITED</p>
 <p className="text-[#374151] text-[11px] text-center">Propriétaire exclusif de la marque et de l'écosystème <Ip /></p>
 <p className="text-[#6B7280] text-[10px] text-center">© 2026 <Ip /> - Tous droits réservés · Parakou, Borgou, Bénin</p>
 </div>
 </div>
 </footer>

 {/* ══════════ TOAST NOTIFICATIONS ══════════ */}
 <div className="fixed top-4 right-3 left-3 z-[999] flex flex-col gap-2 pointer-events-none" style={{ maxWidth:'360px', marginLeft:'auto', marginRight:'auto' }}>
 {toasts.map(t => {
 const ICONS: Record<string, { accent:string; label:string }> = {
 gift: { accent:'#D4AF37', label:'Cadeau' },
 promo: { accent:'#E10600', label:'Promo' },
 info: { accent:'#16A34A', label:'Info' },
 alert: { accent:'#7C3AED', label:'Jeu' },
 }
 const LICONS: Record<string, typeof Gift> = { gift:Gift, promo:Flame, info:Info, alert:Award }
 const m = ICONS[t.kind]
 const LI = LICONS[t.kind]
 return (
 <div key={t.id} className={`pointer-events-auto ${t.exiting ? 'toast-exit' : 'toast-enter'}`}>
 <div className="flex items-center gap-3 rounded-2xl overflow-hidden"
 style={{ background:'white', boxShadow:'0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)', border:'1px solid rgba(0,0,0,0.06)' }}>
 <div className="w-1 self-stretch shrink-0" style={{ background: m.accent }} />
 <div className="shrink-0 py-3 pl-1">
 <LI size={20} style={{ color: m.accent }} />
 </div>
 <div className="flex-1 py-3 pr-1 min-w-0">
 <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: m.accent }}>{m.label}</p>
 <p className="text-[#111827] font-semibold text-[13px] leading-snug">{t.msg}</p>
 </div>
 <button onClick={() => setToasts(p => p.filter(x => x.id !== t.id))}
 className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-2"
 style={{ background:'#F3F4F6' }}>
 <X size={13} className="text-[#6B7280]" />
 </button>
 </div>
 </div>
 )
 })}
 </div>


 {/* ══════════ FLOATING EMERGENCY BUTTON ══════════ */}
 <div className="fixed right-4 bottom-24 lg:bottom-6 z-[990]">
 {/* Expanded menu */}
 {emergencyOpen && (
 <div className="absolute bottom-16 right-0 flex flex-col gap-2 mb-2">
 {EMERGENCY.map((e, i) => (
 <a key={e.label} href={e.href}
 target={e.href.startsWith('http') ? '_blank' : undefined}
 rel="noopener noreferrer"
 className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl shadow-xl btn-pop text-white font-bold text-[13px] whitespace-nowrap"
 style={{ background: e.color, boxShadow:`0 4px 20px ${e.color}66`,
 animationDelay:`${i*0.04}s`, animation:'toastIn 0.35s cubic-bezier(0.16,1,0.3,1) both' }}>
 <e.LIcon size={15} className="shrink-0" />
 {e.label}
 </a>
 ))}
 </div>
 )}
 <button onClick={() => setEmergencyOpen(!emergencyOpen)}
 className="emerg-pulse w-14 h-14 rounded-full flex items-center justify-center shadow-2xl btn-pop"
 style={{ background: emergencyOpen ? 'linear-gradient(135deg, #374151, #111827)' : 'linear-gradient(135deg, #E10600, #FF4500)',
 boxShadow: emergencyOpen ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(225,6,0,0.5)' }}>
 {emergencyOpen ? <X size={22} className="text-white" /> : <Phone size={22} className="text-white" />}
 </button>
 {!emergencyOpen && (
 <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center badge-bounce"
 style={{ background:'#FF2D7A', fontSize:'9px', fontWeight:'black', color:'white', border:'2px solid white' }}>
 !
 </div>
 )}
 </div>

 {/* ══════════ BOTTOM NAV BAR (mobile uniquement) ══════════ */}
 <nav className="fixed bottom-0 inset-x-0 z-50 lg:hidden"
 style={{
 background: 'rgba(255,248,242,0.96)',
 backdropFilter: 'blur(20px)',
 borderTop: '1px solid #F3E8D8',
 boxShadow: '0 -4px 24px rgba(0,0,0,0.08)',
 }}>
 <div className="grid grid-cols-4 px-2 py-2">
 {BOTTOM_NAV.map(tab => {
 const isActive = tab.page ? currentPage === tab.page : false
 const handleClick = () => {
 if (tab.page) goPage(tab.page)
 }
 const Wrapper = tab.page ? 'button' : 'a'
 return (
 <Wrapper key={tab.id}
 {...(tab.page ? { onClick: handleClick } : { href: tab.href })}
 className="flex flex-col items-center gap-1 py-1.5 rounded-2xl transition-all btn-pop min-h-[52px] justify-center relative w-full">
 {isActive && (
 <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-2xl"
 style={{ background: 'linear-gradient(135deg, #FF2D7A, #E10600)', opacity: 0.12 }} />
 )}
 <div className="relative z-10 w-6 h-6 flex items-center justify-center">
 <tab.Icon size={20} style={{ color: isActive ? '#E10600' : '#9CA3AF' }}
 strokeWidth={isActive ? 2.5 : 1.8} />
 </div>
 <span className="text-[10px] font-bold relative z-10 leading-none"
 style={{ color: isActive ? '#E10600' : '#9CA3AF' }}>
 {tab.label}
 </span>
 </Wrapper>
 )
 })}
 </div>
 <div style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
 </nav>
 </div>
 )
}

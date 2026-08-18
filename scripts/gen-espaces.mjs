// Génère des pages statiques indexables (une par espace IPPOO) dans public/espaces/.
// Chaque page est crawlable dans le HTML brut : <title>, meta description, canonical,
// H1, contenu et JSON-LD dédiés. Régénérer avec : node scripts/gen-espaces.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(ROOT, "public/espaces");
const BASE = "https://ippoo-aptdc.com";
const LASTMOD = "2026-08-18";

const SPACES = [
  { slug: "assurance", name: "IPPOO-ASSURANCE", cat: "Assurance et assistance", url: "https://insurance.aptdc-zup2.com",
    desc: "IPPOO-ASSURANCE est l'espace dédié aux solutions d'assurance et d'assistance. Il permet aux particuliers, professionnels et entreprises de souscrire, gérer et suivre leurs contrats d'assurance (santé, automobile, habitation, voyage, agricole, scolaire, professionnelle), tout en donnant accès à des services d'assistance, de prévention et de gestion des sinistres." },
  { slug: "finances-credit", name: "IPPOO-FINANCES & CRÉDIT", cat: "Services financiers et crédit", url: "https://financial.aptdc-zup2.com",
    desc: "IPPOO-FINANCES & CRÉDIT est la plateforme dédiée aux services financiers et aux solutions de financement. Elle facilite l'accès au crédit, au microfinancement, aux prêts personnels et professionnels, au financement d'activités économiques ainsi qu'aux services de paiement et de gestion financière." },
  { slug: "kapital-invest", name: "IPPOO-KAPITAL INVEST", cat: "Investissement et capitaux", url: "https://kapital.aptdc-zup2.com",
    desc: "IPPOO-KAPITAL INVEST est l'espace consacré à l'investissement et à la mobilisation de capitaux. Il met en relation les investisseurs, les entreprises et les porteurs de projets afin de favoriser le financement, le développement et la croissance des initiatives économiques africaines." },
  { slug: "aagro", name: "IPPOO-AAGRO", cat: "Agriculture et agroalimentaire", url: "https://aagro.ippoo-aptdc.com",
    desc: "IPPOO-AAGRO est la plateforme numérique de l'agriculture et de l'agroalimentaire. Elle accompagne l'ensemble de la chaîne de valeur agricole en connectant producteurs, coopératives, transformateurs, distributeurs, fournisseurs d'intrants, acheteurs et institutions autour de solutions de production, de commercialisation et de financement." },
  { slug: "social-fakt", name: "IPPOO-SOCIAL FAKT", cat: "Réseau social communautaire", url: "https://socialfakt.ippoo-aptdc.com",
    desc: "IPPOO-SOCIAL FAKT est le réseau social communautaire de l'écosystème. Il favorise le partage d'informations, d'expériences, d'actualités, de contenus et d'initiatives citoyennes tout en privilégiant la diffusion d'informations fiables, vérifiées et utiles aux communautés africaines." },
  { slug: "market", name: "IPPOO-MARKET", cat: "Marché numérique", url: "https://market.ippoo-aptdc.com",
    desc: "IPPOO-MARKET est le grand marché numérique de l'écosystème. Il permet aux particuliers, commerçants, entreprises et producteurs d'acheter, de vendre et de distribuer une très large gamme de produits dans un environnement sécurisé, connecté aux autres services." },
  { slug: "comit", name: "IPPOO-COMIT", cat: "Comités et organisations", url: "https://comyt.ippoo-aptdc.com",
    desc: "IPPOO-COMIT est la plateforme dédiée aux comités d'entreprise, associations professionnelles et organisations internes. Elle centralise la gestion des adhérents, des avantages sociaux, des cotisations, des activités, des événements et des services proposés aux membres afin de renforcer la vie collective et le bien-être au sein des organisations." },
  { slug: "shuup", name: "IPPOO-SHUUP", cat: "Boutiques en ligne", url: "https://shuup.ippoo-aptdc.com",
    desc: "IPPOO-SHUUP est l'espace permettant à chaque commerçant, marque ou entreprise de créer et d'administrer sa propre boutique en ligne. Il offre tous les outils nécessaires pour gérer les catalogues, les commandes, les paiements, les livraisons, les promotions et la relation client." },
  { slug: "kraaft", name: "IPPOO-KRAAFT", cat: "Métiers et artisanat", url: "https://kraaft.ippoo-aptdc.com",
    desc: "IPPOO-KRAAFT est la plateforme des métiers, des artisans et des prestataires de services. Elle facilite la mise en relation entre les clients et les professionnels qualifiés dans tous les secteurs d'activité, tout en valorisant leur savoir-faire et leur expertise artisanale." },
  { slug: "healthy-page", name: "IPPOO-HEALTHY PAGE", cat: "Santé et bien-être", url: "https://healthypage-aptdc.com",
    desc: "IPPOO-HEALTHY PAGE est l'espace entièrement consacré à la santé, au bien-être et à la prévention. Il rassemble les établissements de santé, les professionnels médicaux, les pharmacies, les laboratoires, les services de téléconsultation ainsi que des contenus et services favorisant une meilleure qualité de vie." },
  { slug: "fashion", name: "IPPOO-FASHION", cat: "Mode et textile", url: "https://fashion.ippoo-aptdc.com",
    desc: "IPPOO-FASHION est la plateforme spécialisée dans la mode, le textile, les accessoires, les cosmétiques et les créations vestimentaires. Elle met en avant les créateurs, les marques, les stylistes et les commerçants tout en offrant une expérience d'achat adaptée aux tendances africaines et internationales." },
  { slug: "events", name: "IPPOO-EVENTS", cat: "Événementiel", url: "https://events.ippoo-aptdc.com",
    desc: "IPPOO-EVENTS est l'espace dédié à la création, à l'organisation, à la promotion et à la gestion d'événements privés, professionnels, culturels, sportifs et institutionnels. Il facilite la réservation, la billetterie, les inscriptions et la coordination de l'ensemble des activités liées aux événements." },
  { slug: "works-jobs", name: "IPPOO-WORKS & JOBS", cat: "Emploi et prestations", url: "https://works.aptdc-zup2.com",
    desc: "IPPOO-WORKS & JOBS est la plateforme de l'emploi, des compétences et des prestations professionnelles. Elle met en relation employeurs, entreprises, recruteurs, travailleurs indépendants, artisans et demandeurs d'emploi afin de faciliter le recrutement, les missions et le développement des carrières." },
  { slug: "diazz", name: "DIAZZ-IPPOO", cat: "Diaspora africaine", url: "https://diazz.ippoo-aptdc.com",
    desc: "DIAZZ-IPPOO est l'espace conçu spécialement pour la diaspora africaine. Il regroupe l'ensemble des services permettant aux ressortissants vivant à l'étranger de rester connectés à leur pays d'origine, de soutenir leurs proches, d'investir, de consommer et d'accéder à des services financiers, administratifs, immobiliers et commerciaux." },
  { slug: "triip", name: "IPPOO-TRIIP", cat: "Mobilité, transport et logistique", url: "https://triip.aptdc-zup2.com",
    desc: "IPPOO-TRIIP est la plateforme intégrée de mobilité, de transport et de logistique. Elle rassemble toutes les solutions permettant de faciliter les déplacements quotidiens : transport urbain, covoiturage, livraison, transport de colis, réservation de voyages, location de véhicules et services de mobilité nationale et internationale." },
  { slug: "kaash", name: "IPPOO-KAASH", cat: "Portefeuille numérique", url: BASE + "/",
    desc: "IPPOO-KAASH est le portefeuille numérique de l'écosystème. Il permet de recevoir, envoyer, conserver, transférer et dépenser de l'argent, d'effectuer des paiements, d'encaisser des revenus, de gérer ses finances personnelles et professionnelles et d'accéder aux services financiers intégrés." },
  { slug: "brokin-vests", name: "IPPOO-BROK'IN-VESTS", cat: "Commerce B2B et négoce", url: "https://broks.ippoo-aptdc.com",
    desc: "IPPOO-BROK'IN-VESTS est le comptoir commercial de l'écosystème. Cette plateforme est dédiée à la production, à la transformation, à l'approvisionnement, au stockage, au négoce et à la distribution de biens. Elle facilite les échanges entre producteurs, industriels, grossistes, distributeurs, importateurs et exportateurs." },
  { slug: "market-traker", name: "IPPOO-MARKET TRAKER", cat: "Intelligence économique", url: "https://markettraker.ippoo-aptdc.com",
    desc: "IPPOO-MARKET TRAKER est la plateforme d'intelligence économique et d'analyse des marchés. Elle collecte, analyse et restitue des données sur les prix, les tendances, la demande, l'offre, la concurrence et les opportunités commerciales afin d'aider les particuliers, les entreprises et les investisseurs à prendre des décisions éclairées et stratégiques." },
  { slug: "kooka", name: "IPPOO-KOOKA", cat: "Contrôle qualité et normes", url: "https://kooka.ippoo-aptdc.com",
    desc: "IPPOO-KOOKA est la plateforme de contrôle des normes de qualité. Elle permet d'évaluer, d'inspecter, de certifier et de contrôler la conformité des produits, des services, des processus et des unités de production selon les normes de qualité, de sécurité, d'hygiène et les exigences réglementaires applicables." },
  { slug: "kooki", name: "IPPOO-KOOKI", cat: "Traçabilité des produits", url: "https://kooki.ippoo-aptdc.com",
    desc: "IPPOO-KOOKI est la plateforme de traçabilité des normes et de la qualité des produits. Elle assure le suivi complet des produits tout au long de leur cycle de vie, depuis leur production jusqu'au consommateur final, en enregistrant leurs origines, leurs contrôles qualité, leurs certifications et toutes les informations garantissant leur authenticité." },
  { slug: "the-goods-deel", name: "THE GOOD'S DEEL", cat: "Bons plans et avantages", url: BASE + "/",
    desc: "THE GOOD'S DEEL est la plateforme des opportunités commerciales et des avantages consommateurs. Elle centralise les promotions, ventes privées, offres exclusives, achats groupés, programmes de fidélité, déstockages, bonnes affaires et autres mécanismes permettant aux consommateurs et aux entreprises de réaliser des économies tout en dynamisant les ventes." },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function page(s) {
  const canonical = `${BASE}/espaces/${s.slug}.html`;
  const title = `${s.name} — ${s.cat} | IPPOO`;
  const metaDesc = s.desc.slice(0, 158);
  const external = s.url !== BASE + "/";
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: canonical,
    description: metaDesc,
    inLanguage: "fr",
    isPartOf: { "@type": "WebSite", name: "IPPOO", url: BASE + "/" },
    about: {
      "@type": "Service",
      name: s.name,
      category: s.cat,
      url: external ? s.url : BASE + "/",
      provider: { "@type": "Organization", name: "APTDC-Z-UP/TDO/LIMITED", url: BASE + "/" },
    },
  };
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(metaDesc)}" />
  <link rel="canonical" href="${canonical}" />
  <meta name="robots" content="index,follow" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="IPPOO" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(metaDesc)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:locale" content="fr_FR" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
  <style>
    :root{color-scheme:light}
    *{box-sizing:border-box}
    body{margin:0;font-family:'Inter',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#1f2430;background:#FFF8F2;line-height:1.65}
    .wrap{max-width:760px;margin:0 auto;padding:32px 20px 64px}
    header a{color:#FF2D7A;text-decoration:none;font-weight:600}
    .eyebrow{display:inline-block;margin:28px 0 10px;padding:5px 12px;border-radius:999px;background:#F3E8D8;color:#8a5a2b;font-size:13px;font-weight:600;letter-spacing:.02em}
    h1{font-family:'Poppins',sans-serif;font-size:34px;line-height:1.15;margin:0 0 16px;color:#111827}
    p.lead{font-size:18px;color:#374151}
    .cta{display:inline-block;margin:20px 0 8px;padding:13px 22px;border-radius:12px;background:#FF2D7A;color:#fff;font-weight:600;text-decoration:none}
    .cta.ghost{background:transparent;color:#FF2D7A;border:1px solid #FF2D7A;margin-left:8px}
    hr{border:0;border-top:1px solid #efe3d6;margin:36px 0}
    footer{font-size:14px;color:#6b7280}
    nav.spaces{margin-top:28px;font-size:14px}
    nav.spaces a{color:#8a5a2b;text-decoration:none;margin-right:12px;white-space:nowrap}
  </style>
</head>
<body>
  <div class="wrap">
    <header><a href="/">← IPPOO — Accueil</a></header>
    <span class="eyebrow">${esc(s.cat)}</span>
    <h1>${esc(s.name)}</h1>
    <p class="lead">${esc(s.desc)}</p>
    <p>
      ${external ? `<a class="cta" href="${s.url}">Accéder à ${esc(s.name)}</a>` : `<a class="cta" href="/">Découvrir sur IPPOO</a>`}
      <a class="cta ghost" href="/">Voir les 21 espaces</a>
    </p>
    <hr />
    <p><strong>IPPOO, la première entité qui accompagne les actifs du secteur informel, main dans la main.</strong> IPPOO regroupe 21 espaces thématiques au service de l'économie populaire et informelle en Afrique. Une propriété de APTDC-Z-UP/TDO/LIMITED, basée à Parakou (Bénin).</p>
    <footer>
      <p>Contact : +229 01 41 52 10 92 (téléphone / WhatsApp) — ippooz.up.2@gmail.com — <a href="/">ippoo-aptdc.com</a></p>
      <nav class="spaces">${SPACES.map((x) => `<a href="/espaces/${x.slug}.html">${esc(x.name)}</a>`).join(" ")}</nav>
    </footer>
  </div>
</body>
</html>
`;
}

function indexPage() {
  const title = "Les 21 espaces thématiques IPPOO — Économie populaire africaine";
  const metaDesc = "Découvrez les 21 espaces thématiques d'IPPOO : assurance, finance, marché, agriculture, santé, emploi, mode, mobilité et plus, au service de l'économie informelle en Afrique.";
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Les 21 espaces thématiques IPPOO",
    url: `${BASE}/espaces/`,
    itemListElement: SPACES.map((s, i) => ({
      "@type": "ListItem", position: i + 1, name: s.name, url: `${BASE}/espaces/${s.slug}.html`,
    })),
  };
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(metaDesc)}" />
  <link rel="canonical" href="${BASE}/espaces/" />
  <meta name="robots" content="index,follow" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(metaDesc)}" />
  <meta property="og:url" content="${BASE}/espaces/" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
  <style>
    body{margin:0;font-family:'Inter',system-ui,sans-serif;color:#1f2430;background:#FFF8F2;line-height:1.6}
    .wrap{max-width:840px;margin:0 auto;padding:32px 20px 64px}
    h1{font-family:'Poppins',sans-serif;color:#111827;font-size:32px}
    a{color:#FF2D7A;text-decoration:none}
    ul{list-style:none;padding:0;display:grid;gap:14px}
    li{padding:16px 18px;background:#fff;border:1px solid #efe3d6;border-radius:14px}
    li h2{margin:0 0 6px;font-size:18px;font-family:'Poppins',sans-serif;color:#111827}
    li p{margin:0;color:#4b5563;font-size:15px}
    .cat{color:#8a5a2b;font-size:13px;font-weight:600}
  </style>
</head>
<body>
  <div class="wrap">
    <p><a href="/">← IPPOO — Accueil</a></p>
    <h1>Les 21 espaces thématiques IPPOO</h1>
    <p>IPPOO, la première entité qui accompagne les actifs du secteur informel, main dans la main.</p>
    <ul>
      ${SPACES.map((s) => `<li><span class="cat">${esc(s.cat)}</span><h2><a href="/espaces/${s.slug}.html">${esc(s.name)}</a></h2><p>${esc(s.desc.slice(0, 160))}…</p></li>`).join("\n      ")}
    </ul>
  </div>
</body>
</html>
`;
}

mkdirSync(OUT, { recursive: true });
for (const s of SPACES) writeFileSync(resolve(OUT, `${s.slug}.html`), page(s));
writeFileSync(resolve(OUT, "index.html"), indexPage());

// Sitemap principal : accueil + index espaces + 21 pages espaces (toutes sur ippoo-aptdc.com)
const urls = [
  { loc: `${BASE}/`, pr: "1.0" },
  { loc: `${BASE}/espaces/`, pr: "0.9" },
  ...SPACES.map((s) => ({ loc: `${BASE}/espaces/${s.slug}.html`, pr: "0.8" })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${u.pr}</priority>\n  </url>`).join("\n")}
</urlset>
`;
writeFileSync(resolve(ROOT, "public/sitemap.xml"), sitemap);

console.log(`Généré ${SPACES.length} pages + index + sitemap.xml`);

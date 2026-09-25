// Prérendu SEO au build (équivalent SSR pour un hébergement 100 % statique).
//
// Contexte : le site est une SPA React déployée sur les assets statiques de
// Cloudflare (pas de serveur Node). Sans traitement, chaque URL renvoie le même
// index.html — donc le même <title>/description pour toutes les pages, ce qui
// empêche une indexation correcte page par page.
//
// Ce script, exécuté APRÈS `vite build`, clone dist/index.html en un fichier
// HTML par route publique (dist/<route>.html) avec SON PROPRE <head> (title,
// description, canonical, Open Graph, Twitter) et un <noscript> rédactionnel
// unique et crawlable. Cloudflare sert dist/<route>.html pour l'URL /<route>
// (html_handling par défaut), puis la SPA démarre et hydrate la bonne page.
//
// Régénéré automatiquement par `pnpm build` (voir package.json).
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = resolve(ROOT, "dist");
const TEMPLATE = resolve(DIST, "index.html");
const BASE = "https://ippoo-aptdc.com";
const OG_IMAGE = `${BASE}/og-image.png`;

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Coupe proprement sur une frontière de mot (~155 caractères, conforme SERP).
const clip = (s, max = 155) => {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:]$/, "") + "…";
};

// Une entrée par route publique de l'application (routage par chemin).
// title/desc : SEO ; h1/lead/body : contenu crawlable sans JavaScript.
const ROUTES = [
  {
    path: "adhesion",
    title: "Adhérer à IPPOO — Rejoindre les actifs de l'informel en Afrique",
    desc: "Adhérez à IPPOO, l'entité N°1 accompagnant les actifs de l'informel en Afrique : assurance, crédit, formation, mise en réseau et accompagnement de terrain.",
    h1: "Adhérer à IPPOO",
    lead: "Rejoignez l'entité N°1 accompagnant les actifs de l'informel en Afrique.",
    body: "L'adhésion à IPPOO donne accès à 21 espaces thématiques, à un accompagnement de terrain et à une offre intégrée d'assurance, de crédit, de formation et de mise en réseau au service des actifs de l'informel en Afrique.",
  },
  {
    path: "programmes",
    title: "Programmes IPPOO — Accompagnement des acteurs informels",
    desc: "Découvrez les programmes IPPOO : structuration en sous-groupements sectoriels, formation, financement et accompagnement des acteurs de l'économie informelle en Afrique.",
    h1: "Les programmes IPPOO",
    lead: "Des programmes conçus pour structurer, financer et faire grandir l'économie informelle africaine.",
    body: "IPPOO organise l'économie informelle en sous-groupements sectoriels et propose des programmes d'accompagnement, de formation et de financement adaptés à chaque métier.",
  },
  {
    path: "business",
    title: "IPPOO Business — Solutions pour entreprises et commerçants",
    desc: "IPPOO Business accompagne entreprises, commerçants et coopératives : outils de gestion, financement, mise en réseau et accès aux marchés locaux, régionaux et internationaux.",
    h1: "IPPOO Business",
    lead: "Les solutions IPPOO pour les entreprises, commerçants et coopératives.",
    body: "IPPOO Business met à disposition des outils de gestion, de financement et de mise en réseau pour connecter les entreprises aux marchés locaux, régionaux et internationaux.",
  },
  {
    path: "sante",
    title: "IPPOO Santé — Couverture et bien-être des adhérents",
    desc: "IPPOO Santé rassemble établissements de santé, professionnels médicaux, pharmacies et téléconsultation pour une meilleure couverture et un meilleur bien-être des adhérents.",
    h1: "IPPOO Santé",
    lead: "Santé, prévention et bien-être au service des actifs de l'informel.",
    body: "IPPOO Santé connecte adhérents, établissements de santé, professionnels médicaux, pharmacies, laboratoires et services de téléconsultation pour une meilleure qualité de vie.",
  },
  {
    path: "groupements",
    title: "Groupements IPPOO — Sous-groupements sectoriels",
    desc: "Les groupements IPPOO structurent l'économie informelle en sous-groupements sectoriels pour mutualiser les services, l'assurance, le crédit et l'accès aux marchés.",
    h1: "Les groupements IPPOO",
    lead: "Structurer l'économie informelle en sous-groupements sectoriels solidaires.",
    body: "Les groupements IPPOO regroupent les acteurs par secteur d'activité afin de mutualiser l'assurance, le crédit, la formation et l'accès aux marchés.",
  },
  {
    path: "investissement",
    title: "Investissement IPPOO — Financer l'économie africaine",
    desc: "IPPOO met en relation investisseurs, entreprises et porteurs de projets pour financer et faire croître les initiatives économiques des actifs de l'informel en Afrique.",
    h1: "Investir avec IPPOO",
    lead: "Mobiliser les capitaux au service des initiatives économiques africaines.",
    body: "L'espace investissement d'IPPOO connecte investisseurs, entreprises et porteurs de projets pour favoriser le financement, le développement et la croissance des initiatives africaines.",
  },
  {
    path: "emploi",
    title: "Emploi IPPOO — Recrutement, missions et compétences",
    desc: "IPPOO Emploi met en relation employeurs, recruteurs, indépendants, artisans et demandeurs d'emploi pour faciliter le recrutement, les missions et le développement des carrières.",
    h1: "Emploi et compétences",
    lead: "Connecter les talents, les employeurs et les prestataires de l'informel.",
    body: "IPPOO Emploi facilite le recrutement, les missions et le développement des carrières en reliant employeurs, recruteurs, travailleurs indépendants, artisans et demandeurs d'emploi.",
  },
  {
    path: "kaash",
    title: "IPPOO-KAASH — Portefeuille numérique",
    desc: "IPPOO-KAASH est le portefeuille numérique de l'écosystème : recevoir, envoyer, conserver et dépenser de l'argent, payer, encaisser et gérer ses finances au quotidien.",
    h1: "IPPOO-KAASH — Portefeuille numérique",
    lead: "Recevoir, envoyer, conserver et dépenser de l'argent, simplement.",
    body: "IPPOO-KAASH permet de recevoir, envoyer, conserver, transférer et dépenser de l'argent, d'effectuer des paiements, d'encaisser des revenus et de gérer ses finances personnelles et professionnelles.",
  },
  {
    path: "bourse",
    title: "Bourse IPPOO — Opportunités et intelligence de marché",
    desc: "La bourse IPPOO donne accès aux opportunités commerciales, aux tendances des marchés et à l'intelligence économique pour prendre des décisions éclairées au quotidien.",
    h1: "Bourse IPPOO",
    lead: "Opportunités, tendances et intelligence de marché pour décider mieux.",
    body: "La bourse IPPOO restitue des données sur les prix, les tendances, l'offre et la demande afin d'aider particuliers, entreprises et investisseurs à saisir les meilleures opportunités.",
  },
  {
    path: "parrainage",
    title: "Parrainage IPPOO — Inviter et être récompensé",
    desc: "Le programme de parrainage IPPOO récompense les adhérents qui invitent de nouveaux membres à rejoindre l'écosystème des actifs de l'informel en Afrique.",
    h1: "Programme de parrainage",
    lead: "Faites grandir la communauté IPPOO et soyez récompensé.",
    body: "Le programme de parrainage IPPOO récompense chaque adhérent qui invite de nouveaux membres à rejoindre les 21 espaces thématiques de l'écosystème.",
  },
  {
    path: "apropos",
    title: "À propos d'IPPOO — Notre mission et notre vision",
    desc: "IPPOO structure l'économie informelle africaine (50 à 80 % du PIB) en sous-groupements sectoriels et propose assurance, crédit, formation et accompagnement de terrain.",
    h1: "À propos d'IPPOO",
    lead: "L'entité N°1 accompagnant les actifs de l'informel en Afrique. Plateforme intégrée, services concrets, impact durable.",
    body: "IPPOO structure l'économie informelle africaine en sous-groupements sectoriels et met à disposition une offre intégrée : assurance, crédit, formation, mise en réseau et accompagnement de terrain. Une propriété de APTDC-Z-UP/TDO/LIMITED, basée à Parakou (Bénin).",
  },
  {
    path: "actualites",
    title: "Actualités IPPOO — Nouvelles de l'écosystème",
    desc: "Suivez les actualités d'IPPOO : lancements d'espaces, partenariats, événements et nouvelles des actifs de l'informel en Afrique.",
    h1: "Actualités IPPOO",
    lead: "Les dernières nouvelles de l'écosystème IPPOO.",
    body: "Retrouvez les lancements d'espaces, les partenariats, les événements et les nouvelles des actifs de l'informel en Afrique.",
  },
  {
    path: "faq",
    title: "FAQ IPPOO — Questions fréquentes",
    desc: "Toutes les réponses aux questions fréquentes sur IPPOO : adhésion, espaces thématiques, services, paiements, sécurité et accompagnement des acteurs informels.",
    h1: "Questions fréquentes",
    lead: "Vos questions sur IPPOO, l'adhésion et les 21 espaces thématiques.",
    body: "Consultez les réponses aux questions les plus fréquentes sur l'adhésion à IPPOO, les espaces thématiques, les services, les paiements, la sécurité et l'accompagnement.",
  },
  {
    path: "contact",
    title: "Contact IPPOO — Nous joindre",
    desc: "Contactez IPPOO : +229 01 41 52 10 92 (téléphone / WhatsApp), ippooz.up.2@gmail.com. Une propriété de APTDC-Z-UP/TDO/LIMITED, basée à Parakou (Bénin).",
    h1: "Contacter IPPOO",
    lead: "Une question ? L'équipe IPPOO vous répond.",
    body: "Écrivez-nous à ippooz.up.2@gmail.com ou appelez le +229 01 41 52 10 92 (téléphone / WhatsApp). IPPOO est une propriété de APTDC-Z-UP/TDO/LIMITED, basée à Parakou (Bénin).",
  },
  {
    path: "doleances",
    title: "Doléances IPPOO — Réclamations et suggestions",
    desc: "Adressez vos doléances, réclamations et suggestions à IPPOO. Chaque message est pris en compte pour améliorer les services de l'écosystème.",
    h1: "Doléances et réclamations",
    lead: "Vos réclamations et suggestions font progresser IPPOO.",
    body: "Adressez vos doléances, réclamations et suggestions à IPPOO. Chaque message est étudié pour améliorer les services de l'écosystème.",
  },
  {
    path: "mentions",
    title: "Mentions légales — IPPOO",
    desc: "Mentions légales du site IPPOO, propriété de APTDC-Z-UP/TDO/LIMITED, basée à Parakou (Bénin). Éditeur, hébergement et informations légales.",
    h1: "Mentions légales",
    lead: "Informations légales du site IPPOO.",
    body: "Le site IPPOO est édité par APTDC-Z-UP/TDO/LIMITED, basée à Parakou (Bénin). Contact : ippooz.up.2@gmail.com — +229 01 41 52 10 92.",
  },
  {
    path: "privacy",
    title: "Politique de confidentialité — IPPOO",
    desc: "Politique de confidentialité d'IPPOO : quelles données sont collectées, comment elles sont utilisées et protégées, et quels sont vos droits sur vos informations.",
    h1: "Politique de confidentialité",
    lead: "Comment IPPOO protège vos données personnelles.",
    body: "Cette politique décrit les données collectées par IPPOO, leur utilisation, leur protection et les droits dont vous disposez sur vos informations personnelles.",
  },
  {
    path: "cgu",
    title: "Conditions générales d'utilisation — IPPOO",
    desc: "Conditions générales d'utilisation du site et des services IPPOO : droits, obligations et règles d'usage de l'écosystème des actifs de l'informel en Afrique.",
    h1: "Conditions générales d'utilisation",
    lead: "Les règles d'usage du site et des services IPPOO.",
    body: "Les présentes conditions générales définissent les droits, obligations et règles d'utilisation du site et des services de l'écosystème IPPOO.",
  },
];

if (!existsSync(TEMPLATE)) {
  console.error(`[prerender] dist/index.html introuvable — lancez d'abord \`vite build\`.`);
  process.exit(1);
}
const template = readFileSync(TEMPLATE, "utf8");

// Remplace TOUTES les balises correspondant à `re` (Figma peut injecter des
// doublons de meta description/og:description depuis site.json).
const swap = (html, re, value) => html.replace(re, value);
const swapAll = (html, re, value) =>
  html.replace(new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g"), value);

function render(route) {
  const title = route.title;
  const desc = clip(route.desc);
  const canonical = `${BASE}/${route.path}`;
  let html = template;

  html = swap(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  html = swapAll(
    html,
    /(<meta\s+name="description"\s+content=")[^"]*(")/,
    `$1${esc(desc)}$2`,
  );
  html = swap(
    html,
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
    `$1${canonical}$2`,
  );
  html = swap(html, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${esc(title)}$2`);
  html = swapAll(
    html,
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
    `$1${esc(desc)}$2`,
  );
  html = swap(html, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${canonical}$2`);
  html = swap(html, /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${esc(title)}$2`);
  html = swapAll(
    html,
    /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
    `$1${esc(desc)}$2`,
  );

  // Contenu de secours crawlable et propre à la route (sans JavaScript).
  const noscript = `<noscript>
      <main>
        <h1>${esc(route.h1)}</h1>
        <p><strong>${esc(route.lead)}</strong></p>
        <p>${esc(route.body)}</p>
        <p>
          <a href="${BASE}/">Accueil IPPOO</a> ·
          <a href="${BASE}/espaces/">Les 21 espaces thématiques</a> ·
          <a href="${BASE}/adhesion">Adhérer</a> ·
          <a href="${BASE}/contact">Contact</a>
        </p>
        <p>IPPOO, l'entité N°1 accompagnant les actifs de l'informel en Afrique. Plateforme intégrée, services concrets, impact durable. Une propriété de APTDC-Z-UP/TDO/LIMITED, Parakou (Bénin).</p>
      </main>
    </noscript>`;
  html = swap(html, /<noscript>[\s\S]*?<\/noscript>/, noscript);

  return html;
}

for (const route of ROUTES) {
  writeFileSync(resolve(DIST, `${route.path}.html`), render(route));
}

console.log(`[prerender] ${ROUTES.length} pages HTML générées (une par route publique).`);

# MISSION : OPTIMISATION SEO, AI SEARCH, CRAWLERS ET PWA — IPPOO

Tu es un ingénieur senior spécialisé en :

* SEO technique
* SEO international
* JavaScript SEO
* React SEO
* PWA
* Web Performance
* Core Web Vitals
* Structured Data / Schema.org
* Google Search
* Bing Search
* AI Search
* Generative Engine Optimization (GEO)
* crawlers et agents IA
* accessibilité Web
* architecture Web
* sécurité Web
* Cloudflare
* référencement des applications Web
* indexation des applications React
* optimisation des sites pour les moteurs de recherche et systèmes d'IA

Ta mission est d'auditer puis d'améliorer complètement le site IPPOO afin qu'il soit :

1. parfaitement lisible par les moteurs de recherche ;
2. parfaitement crawlable par les robots ;
3. correctement indexable ;
4. facilement compréhensible par les moteurs d'IA ;
5. optimisé pour Google ;
6. optimisé pour Bing ;
7. optimisé pour les moteurs de recherche modernes ;
8. optimisé pour les systèmes de recherche et de réponse utilisant l'IA ;
9. compatible avec les crawlers légitimes d'OpenAI, Anthropic, Perplexity, Google, Microsoft, Meta, Apple, Amazon et autres opérateurs pertinents ;
10. techniquement conforme aux meilleures pratiques PWA ;
11. optimisé pour obtenir le meilleur niveau possible lors d'un audit PWA Builder ;
12. rapide ;
13. accessible ;
14. sécurisé ;
15. mobile-first ;
16. compréhensible par les systèmes de recherche générative ;
17. structuré pour permettre aux agents IA d'identifier clairement IPPOO comme une entité et de comprendre ses différents services et plateformes.

IMPORTANT :

NE TE LIMITE PAS À AJOUTER DES BALISES META.

Tu dois inspecter l'architecture réelle du projet et modifier le code nécessaire pour mettre en œuvre les recommandations ci-dessous.

Tu dois d'abord analyser le projet existant avant de modifier quoi que ce soit.

Ne casse aucune fonctionnalité existante.

Ne supprime aucune fonctionnalité métier existante.

Ne remplace aucune fonctionnalité existante par une simple simulation.

Toutes les fonctionnalités existantes doivent continuer à fonctionner.

Ne modifie pas inutilement le design existant.

Ne dégrade pas l'expérience utilisateur.

Ne crée pas de fausses informations pour améliorer artificiellement le SEO.

Toutes les données concernant IPPOO doivent provenir du projet ou des informations officiellement disponibles dans le projet.

---

# 1. IDENTITÉ OFFICIELLE DU SITE

L'entité principale du site est :

IPPOO

Le domaine officiel est :

https://ippoo-aptdc.com/

Le domaine canonique de référence doit être :

https://ippoo-aptdc.com/

Toutes les références SEO importantes doivent utiliser cette origine officielle.

Ne jamais remplacer ce domaine par :

* un domaine inventé ;
* un domaine de test ;
* un domaine temporaire ;
* un autre domaine IPPOO ;
* une URL localhost ;
* une URL d'environnement de développement.

Le site doit être clairement identifiable par :

* les utilisateurs ;
* Google ;
* Bing ;
* les moteurs de recherche ;
* les crawlers ;
* les systèmes d'IA ;
* les assistants IA ;
* les agents autonomes.

Utiliser les informations réelles disponibles dans le projet pour définir :

* nom officiel : IPPOO ;
* nom court : IPPOO ;
* description officielle ;
* slogan officiel lorsqu'il existe ;
* domaine officiel ;
* logo officiel ;
* favicon ;
* langue principale ;
* langues secondaires lorsqu'elles existent ;
* pays ciblés ;
* régions ciblées ;
* catégories de services ;
* organisation propriétaire ;
* coordonnées publiques ;
* réseaux sociaux officiels.

NE JAMAIS inventer une information concernant IPPOO.

Si une information manque, créer une structure facilement configurable au lieu d'inventer une valeur.

---

# 2. ENTITÉ IPPOO

Le site doit être construit afin que les moteurs de recherche et les systèmes d'IA puissent comprendre qu'IPPOO est une entité identifiable.

Ils doivent pouvoir déterminer :

* ce qu'est IPPOO ;
* ce que fait IPPOO ;
* quels services IPPOO propose ;
* quelles plateformes appartiennent à l'écosystème IPPOO ;
* à quels utilisateurs IPPOO s'adresse ;
* dans quelles zones IPPOO opère ;
* comment accéder aux services IPPOO ;
* quel est le domaine officiel d'IPPOO ;
* quelles sont les informations officielles concernant IPPOO.

Ne pas présenter plusieurs identités contradictoires.

Utiliser systématiquement :

IPPOO

comme nom principal lorsque le contenu concerne l'entité globale.

---

# 3. ÉCOSYSTÈME IPPOO

Si le projet contient plusieurs plateformes, modules, services ou applications appartenant à l'écosystème IPPOO, structurer correctement leurs relations.

Chaque plateforme ou service doit pouvoir être identifié séparément tout en étant relié à IPPOO.

Créer une architecture sémantique permettant de comprendre :

IPPOO
→ plateforme
→ service
→ fonctionnalité
→ catégorie
→ page correspondante

Ne pas mélanger artificiellement les identités des différents services.

Ne pas attribuer à IPPOO une fonctionnalité qui appartient à une autre plateforme si cela n'est pas exact.

---

# 4. SEO TECHNIQUE GLOBAL

Implémenter une architecture SEO complète.

Chaque page publique et indexable doit disposer de :

* `<title>` unique ;
* `<meta name="description">` unique ;
* `<meta name="robots" content="index, follow">` lorsque la page doit être indexée ;
* URL canonique absolue ;
* Open Graph ;
* Twitter/X Cards ;
* langue HTML correcte ;
* viewport correct ;
* favicon ;
* icônes PWA ;
* liens internes crawlables ;
* contenu textuel réellement présent dans le HTML rendu ;
* headings structurés ;
* données structurées pertinentes.

Éviter les titres génériques :

* Home
* Welcome
* Page
* App
* Untitled
* React App
* Vite App

Chaque page doit avoir un titre descriptif et pertinent.

Exemple :

IPPOO — Plateforme de services et solutions numériques

uniquement si cette formulation correspond réellement à l'activité du site.

---

# 5. STRUCTURE SÉMANTIQUE HTML

Utiliser HTML sémantique.

Privilégier :

`<header>`

`<nav>`

`<main>`

`<section>`

`<article>`

`<aside>`

`<footer>`

Chaque page doit avoir :

* exactement un `<main>` principal ;
* une hiérarchie logique H1 → H2 → H3 ;
* un H1 pertinent ;
* des paragraphes textuels compréhensibles ;
* des liens HTML classiques utilisant `href`.

Éviter de rendre les informations SEO essentielles uniquement via des composants JavaScript après chargement.

Le contenu principal doit être accessible dans le HTML rendu.

Google indique que les liens crawlables doivent être de véritables éléments HTML avec `href`, et recommande une URL distincte pour chaque contenu ou écran important d'une application JavaScript.

---

# 6. JAVASCRIPT SEO / REACT SEO

Le site peut rester une application React.

Cependant, les pages publiques importantes doivent être compréhensibles par les robots.

Pour les pages SEO importantes :

* privilégier SSR ;
* SSG ;
* pré-rendu ;
* génération statique ;
* ou une architecture équivalente lorsque techniquement possible.

Éviter un App Shell vide contenant uniquement :

`<div id="root"></div>`

sans contenu exploitable.

Le HTML initial ou rendu doit permettre d'identifier :

* le titre ;
* la description ;
* le H1 ;
* le contenu principal ;
* les liens ;
* les informations importantes ;
* les données structurées.

Ne pas dépendre exclusivement d'une requête API côté client pour afficher les informations essentielles d'une page indexable lorsque ces informations peuvent être rendues côté serveur ou pré-rendues.

Google précise que même si Googlebot exécute JavaScript, le SSR, le rendu statique ou l'hydratation peuvent améliorer les performances et la fiabilité, et que certains robots ne traitent pas JavaScript de la même manière.

---

# 7. URLS SEO

Créer des URLs :

* courtes ;
* lisibles ;
* descriptives ;
* stables ;
* en minuscules ;
* sans paramètres inutiles ;
* sans identifiants techniques lorsque possible.

Exemples :

`/about`

`/services`

`/contact`

`/blog`

`/products`

`/features`

`/pricing`

`/faq`

`/help`

`/services/service-name`

Éviter :

`/page?id=1837`

`/product?item=182736`

`/#/page`

Ne jamais utiliser les fragments `#` comme système principal de navigation SEO.

Pour une SPA React, utiliser le History API et des URLs réelles.

---

# 8. CANONICAL

Chaque page indexable doit avoir un canonical absolu.

Le domaine principal est :

https://ippoo-aptdc.com/

Exemple :

`<link rel="canonical" href="https://ippoo-aptdc.com/services" />`

Le canonical doit correspondre exactement à l'URL publique officielle de la page.

Éviter :

* plusieurs canonicals ;
* canonicals contradictoires ;
* canonical HTTP ;
* canonical vers un domaine différent ;
* canonical vers une page inexistante ;
* canonical vers une autre langue sans justification.

Les URLs du sitemap doivent correspondre aux URLs canoniques.

Google recommande également d'éviter les canonicals contradictoires ou multiples.

---

# 9. ROBOTS.TXT

Créer ou corriger :

`/robots.txt`

Le fichier doit être accessible directement à :

https://ippoo-aptdc.com/robots.txt

Le site public doit être crawlable.

Configuration de base :

User-agent: *
Allow: /

Sitemap: https://ippoo-aptdc.com/sitemap.xml

Bloquer uniquement les espaces réellement privés ou techniques lorsqu'ils existent :

* `/admin/`
* `/dashboard/`
* `/account/`
* `/login/`
* `/signup/`
* `/api/`
* `/private/`
* `/internal/`
* `/preview/`
* `/test/`

Adapter ces chemins à l'architecture réelle.

IMPORTANT :

Ne pas utiliser robots.txt comme mécanisme principal de désindexation.

Pour une page accessible mais qui ne doit pas être indexée, utiliser `noindex` ou une directive HTTP appropriée.

Google précise que robots.txt sert principalement à contrôler le crawl et ne doit pas être utilisé comme mécanisme de désindexation.

---

# 10. CRAWLERS IA

Le contenu public d'IPPOO doit être accessible aux crawlers que la stratégie de diffusion autorise.

Prendre en compte notamment :

OpenAI :

* GPTBot
* OAI-SearchBot
* ChatGPT-User

Anthropic :

* ClaudeBot
* Claude-SearchBot
* Claude-User

Perplexity :

* PerplexityBot
* Perplexity-User

Google :

* Googlebot
* Google-CloudVertexBot

Microsoft :

* Bingbot

Meta :

* Meta-ExternalAgent
* Meta-ExternalFetcher
* FacebookBot

Apple :

* Applebot

Amazon :

* Amazonbot

DuckDuckGo :

* DuckAssistBot

Mistral :

* MistralAI-User

et les crawlers légitimes pertinents identifiés ultérieurement.

IMPORTANT :

Ne jamais bloquer involontairement ces crawlers avec :

* Cloudflare WAF ;
* firewall ;
* CDN ;
* Bot Fight Mode ;
* AI Crawl Control ;
* rate limiting ;
* challenge CAPTCHA ;
* règles anti-bot ;
* géoblocage.

Vérifier les règles Cloudflare avant de déclarer le système compatible avec les crawlers IA.

Cloudflare documente notamment GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Googlebot et d'autres crawlers dans son référentiel actuel.

---

# 11. SITEMAP.XML

Créer automatiquement :

`/sitemap.xml`

URL :

https://ippoo-aptdc.com/sitemap.xml

Le sitemap doit contenir uniquement les URLs :

* publiques ;
* indexables ;
* canoniques ;
* accessibles ;
* retournant HTTP 200.

Ne jamais inclure :

* pages noindex ;
* pages privées ;
* pages administratives ;
* pages de connexion ;
* URLs redirigées ;
* URLs inexistantes ;
* doublons ;
* paramètres inutiles.

Le sitemap doit être automatiquement mis à jour lorsque de nouvelles pages publiques sont ajoutées.

Si le volume devient important, utiliser un sitemap index.

Prévoir lorsque pertinent :

* sitemap images ;
* sitemap vidéos ;
* sitemap articles ;
* sitemap produits.

Les URLs du sitemap doivent être absolues et utiliser `https://ippoo-aptdc.com/`.

---

# 12. ARCHITECTURE DES LIENS

Toutes les pages importantes doivent être accessibles par des liens HTML crawlables.

Utiliser :

`<a href="/services">Services</a>`

Éviter de rendre la navigation essentielle uniquement avec :

`onClick()`

Les pages importantes doivent être découvertes par :

* navigation principale ;
* footer ;
* pages catégories ;
* pages connexes ;
* breadcrumbs ;
* liens contextuels ;
* sitemap.

Aucune page importante ne doit être orpheline.

---

# 13. BREADCRUMBS

Ajouter des breadcrumbs sur les pages profondes.

Exemple :

Accueil
→ Services
→ Service IPPOO

Ajouter :

`BreadcrumbList`

en Schema.org lorsque pertinent.

Le breadcrumb visible et le structured data doivent représenter la même hiérarchie.

---

# 14. STRUCTURED DATA / SCHEMA.ORG

Implémenter JSON-LD.

Utiliser uniquement les types réellement pertinents.

Selon les pages :

* Organization
* WebSite
* WebPage
* BreadcrumbList
* Product
* Offer
* Service
* Article
* BlogPosting
* FAQPage lorsque réellement applicable
* ContactPage
* AboutPage
* SearchAction lorsque pertinent et réellement fonctionnel

Ne jamais ajouter de structured data mensongère.

Les données structurées doivent correspondre au contenu réellement visible.

---

# 15. ORGANIZATION SCHEMA — IPPOO

Créer un Organization Schema cohérent pour IPPOO.

Utiliser lorsque disponible :

* nom : IPPOO ;
* URL : https://ippoo-aptdc.com/ ;
* logo officiel ;
* description officielle ;
* sameAs ;
* téléphone public ;
* adresse publique ;
* email public ;
* réseaux sociaux officiels.

Utiliser des URLs absolues.

Ne jamais inventer une adresse ou un réseau social.

---

# 16. WEBSITE SCHEMA

Créer un WebSite Schema pour :

https://ippoo-aptdc.com/

Utiliser :

* nom officiel IPPOO ;
* URL officielle ;
* description réelle.

Si le site possède une recherche interne réellement fonctionnelle, implémenter correctement `SearchAction`.

Ne jamais déclarer une fonction de recherche inexistante.

---

# 17. RELATION ENTRE IPPOO ET SES SERVICES

Si IPPOO possède plusieurs modules, plateformes ou services :

les représenter correctement.

Chaque service doit avoir :

* nom ;
* description ;
* URL ;
* relation avec IPPOO ;
* contenu propre ;
* données structurées pertinentes.

Lorsqu'un service possède une page dédiée, celle-ci doit être accessible par une URL stable.

L'objectif est qu'un système IA puisse comprendre :

"IPPOO est l'entité principale."

et :

"Ce service/produit est une composante de l'écosystème IPPOO."

Ne pas créer de relations artificielles.

---

# 18. PRODUITS ET SERVICES

Pour chaque produit ou service réellement proposé :

Créer une page dédiée lorsque cela est pertinent.

Chaque page doit comporter :

* nom ;
* description ;
* avantages ;
* caractéristiques ;
* conditions ;
* prix lorsqu'il est public ;
* disponibilité lorsqu'elle est pertinente ;
* FAQ lorsqu'elle apporte une réelle valeur ;
* CTA ;
* liens vers pages associées.

Ajouter Product ou Service structured data uniquement lorsque le type correspond réellement au contenu.

---

# 19. CONTENU COMPRÉHENSIBLE PAR LES IA

Le site doit permettre à un moteur de recherche ou à un agent IA de comprendre rapidement :

* ce qu'est IPPOO ;
* ce que fait IPPOO ;
* à qui IPPOO s'adresse ;
* quels services sont proposés ;
* quelles plateformes appartiennent à IPPOO ;
* dans quels pays IPPOO est disponible ;
* comment les services fonctionnent ;
* comment accéder aux services ;
* quelles sont les conditions ;
* quelles sont les coordonnées officielles.

Chaque page importante doit répondre clairement à :

"Qu'est-ce que cette page ?"

"Qui est concerné ?"

"Quelle information apporte-t-elle ?"

"Quelle action peut effectuer l'utilisateur ?"

---

# 20. PAGE ABOUT / ENTITY SEO

Créer ou optimiser une page institutionnelle permettant de comprendre l'entité IPPOO.

Elle doit présenter les informations réelles disponibles :

* identité ;
* mission ;
* vision ;
* services ;
* produits ;
* plateformes ;
* zones géographiques ;
* public cible ;
* organisation ;
* coordonnées ;
* liens officiels.

Prévoir des sections permettant de répondre clairement à :

"Qu'est-ce qu'IPPOO ?"

"Que fait IPPOO ?"

"Quels services propose IPPOO ?"

"À qui s'adresse IPPOO ?"

"Quels sont les produits IPPOO ?"

"Quel est le site officiel d'IPPOO ?"

Le domaine officiel doit être présenté comme :

https://ippoo-aptdc.com/

---

# 21. PAGES INSTITUTIONNELLES SEO

Créer uniquement les pages réellement pertinentes.

Prévoir lorsque nécessaire :

`/about`

`/company`

`/services`

`/products`

`/features`

`/pricing`

`/faq`

`/contact`

`/blog`

`/news`

`/help`

`/support`

`/terms`

`/privacy`

`/cookies`

Ne pas créer artificiellement des pages vides uniquement pour le référencement.

---

# 22. SEO INTERNATIONAL

Si IPPOO cible plusieurs pays ou plusieurs langues :

mettre en place une architecture internationale propre.

Ne pas dupliquer mécaniquement les mêmes pages.

Si plusieurs langues existent réellement :

utiliser :

`hreflang`

avec des URLs correspondant réellement aux différentes versions.

Exemple uniquement si ces versions existent :

`/fr/`

`/en/`

`/fr/benin/`

`/en/nigeria/`

Ne pas créer des URLs de pays uniquement pour manipuler les résultats de recherche.

---

# 23. LANGUE

Déclarer correctement la langue du site.

Exemple français :

`<html lang="fr">`

Pour une version anglaise :

`<html lang="en">`

Pour plusieurs langues :

mettre en place `hreflang`.

Chaque version doit réellement être disponible dans la langue correspondante.

---

# 24. OPEN GRAPH

Chaque page publique doit disposer de :

* `og:title`
* `og:description`
* `og:url`
* `og:type`
* `og:image`
* `og:site_name`
* `og:locale`

Utiliser le domaine officiel :

https://ippoo-aptdc.com/

Créer une image Open Graph appropriée.

---

# 25. TWITTER / X CARD

Ajouter lorsque pertinent :

* `twitter:card`
* `twitter:title`
* `twitter:description`
* `twitter:image`

Utiliser :

`summary_large_image`

lorsqu'une image appropriée existe.

---

# 26. IMAGES

Toutes les images importantes doivent avoir :

* alt descriptif ;
* dimensions ;
* format optimisé ;
* lazy loading lorsqu'approprié ;
* chargement prioritaire pour les images critiques ;
* width/height afin de limiter le layout shift.

Utiliser :

* WebP ;
* AVIF ;

lorsque compatible.

Ne pas transformer une information textuelle importante en image uniquement.

---

# 27. ACCESSIBILITÉ

Optimiser le site pour les bonnes pratiques WCAG.

Vérifier :

* contraste ;
* labels ;
* navigation clavier ;
* focus ;
* aria-label lorsque nécessaire ;
* textes alternatifs ;
* boutons accessibles ;
* formulaires accessibles ;
* titres de page ;
* landmarks ;
* messages d'erreur compréhensibles.

L'accessibilité doit être intégrée à l'architecture et non ajoutée artificiellement.

---

# 28. PERFORMANCE / CORE WEB VITALS

Optimiser :

* LCP ;
* INP ;
* CLS.

Réduire :

* JavaScript inutile ;
* CSS inutile ;
* images lourdes ;
* requêtes réseau inutiles ;
* scripts tiers ;
* fonts bloquantes.

Mettre en place lorsque pertinent :

* compression ;
* cache ;
* cache immutable pour les assets versionnés ;
* lazy loading ;
* code splitting ;
* preconnect ;
* preload uniquement pour les ressources réellement critiques.

---

# 29. PWA — MANIFEST

Créer ou corriger :

`/manifest.webmanifest`

ou :

`/manifest.json`

Le manifest doit être valide.

Inclure au minimum :

* `name`
* `short_name`
* `description`
* `start_url`
* `display`
* `background_color`
* `theme_color`
* `icons`

Le nom et la description doivent correspondre à IPPOO.

Prévoir des icônes adaptées, notamment :

* 192×192 ;
* 512×512.

Utiliser `purpose: "maskable"` lorsqu'une véritable icône maskable est disponible.

Référencer correctement le manifest dans le HTML.

---

# 30. PWA — SERVICE WORKER

Créer ou corriger un véritable service worker.

Il doit :

* être enregistré correctement ;
* être accessible ;
* être servi depuis une portée cohérente ;
* fonctionner sous HTTPS ;
* mettre en cache les ressources appropriées ;
* gérer les mises à jour ;
* éviter les caches obsolètes ;
* fournir une stratégie offline cohérente ;
* ne pas casser l'application lors des mises à jour.

Prévoir des stratégies adaptées :

* Cache First ;
* Network First ;
* Stale While Revalidate ;
* fallback offline.

Ne jamais mettre en cache aveuglément des données privées.

---

# 31. PWA — OFFLINE

Créer une véritable expérience hors connexion.

Prévoir :

* page offline ;
* fallback ;
* ressources essentielles en cache ;
* message utilisateur clair.

Ne jamais afficher une page blanche hors connexion.

---

# 32. PWA — INSTALLATION

La PWA doit être installable lorsque le navigateur et la plateforme le permettent.

Vérifier :

* manifest ;
* HTTPS ;
* service worker ;
* start_url ;
* display ;
* icons ;
* scope ;
* navigation ;
* absence d'erreurs critiques.

Si un bouton "Installer IPPOO" existe :

il doit fonctionner réellement.

Ne jamais afficher un bouton d'installation fictif.

---

# 33. PWA — DISPLAY

Utiliser le mode approprié.

Par défaut, évaluer :

`display: "standalone"`

Configurer lorsque pertinent :

* theme_color ;
* background_color ;
* orientation ;
* scope ;
* start_url.

---

# 34. PWA — ICONES

Prévoir :

* favicon ;
* apple-touch-icon ;
* manifest icons ;
* 192×192 ;
* 512×512 ;
* maskable.

Vérifier que chaque fichier existe réellement.

Vérifier que chaque ressource renvoie HTTP 200.

---

# 35. PWA — SECURITY

La PWA de production doit fonctionner exclusivement en HTTPS.

Le domaine officiel doit utiliser :

https://ippoo-aptdc.com/

Configurer les redirections HTTP → HTTPS.

Éviter :

* mixed content ;
* ressources HTTP ;
* certificats invalides ;
* service worker non sécurisé.

---

# 36. PWA — SCOPE

Le scope du manifest et du service worker doit être cohérent.

Éviter qu'un service worker contrôle accidentellement :

* `/admin`
* `/api`
* pages privées ;
* ressources externes ;

sauf lorsque cela est réellement nécessaire.

---

# 37. PWA BUILDER

Optimiser le projet pour qu'un audit PWA Builder puisse détecter correctement :

* HTTPS ;
* manifest ;
* manifest valide ;
* name ;
* short_name ;
* description ;
* start_url ;
* display ;
* theme_color ;
* background_color ;
* icons ;
* icône 192×192 ;
* icône 512×512 ;
* icône maskable ;
* service worker ;
* scope ;
* installation ;
* expérience offline ;
* métadonnées ;
* bonnes pratiques PWA.

Après implémentation, effectuer une vérification réelle.

Tester notamment :

`GET /manifest.webmanifest`

`GET /sw.js`

`GET /icons/icon-192.png`

`GET /icons/icon-512.png`

`GET /robots.txt`

`GET /sitemap.xml`

Toutes les ressources doivent :

* exister ;
* retourner HTTP 200 ;
* retourner le bon Content-Type ;
* être accessibles en HTTPS.

---

# 38. PWA BUILDER — NE PAS TRICHER

Ne pas ajouter de faux fichiers uniquement pour augmenter artificiellement le score.

Si un service worker est déclaré :

il doit réellement fonctionner.

Si offline est déclaré :

une véritable expérience offline doit exister.

Si une icône est déclarée :

elle doit réellement exister.

Si une fonctionnalité d'installation est proposée :

elle doit réellement fonctionner.

---

# 39. HTTP STATUS CODES

Vérifier les codes HTTP.

Pages normales :

`200`

Redirections permanentes :

`301` ou `308`

Pages inexistantes :

`404`

Ressources définitivement supprimées :

`410` lorsque pertinent.

Éviter :

* soft 404 ;
* redirections en chaîne ;
* boucles de redirection ;
* pages importantes en 403 ;
* pages importantes en 401 ;
* réponses 429 involontaires aux crawlers.

---

# 40. PAGE 404

Créer une vraie page 404.

Elle doit :

* retourner HTTP 404 lorsque possible ;
* être compréhensible ;
* proposer un retour vers l'accueil ;
* proposer une navigation ;
* ne pas être indexée.

---

# 41. REDIRECTIONS

Forcer une version canonique du domaine.

Le domaine officiel est :

https://ippoo-aptdc.com/

La version HTTP doit rediriger vers HTTPS.

Éviter les variantes concurrentes du domaine.

Toutes les pages publiques doivent converger vers leur URL canonique.

---

# 42. SECURITY HEADERS

Configurer lorsque compatible :

* Content-Security-Policy ;
* Strict-Transport-Security ;
* X-Content-Type-Options ;
* Referrer-Policy ;
* Permissions-Policy.

Configurer avec prudence afin de ne pas casser :

* React ;
* APIs ;
* authentification ;
* analytics ;
* PWA ;
* CDN ;
* images ;
* fonts.

---

# 43. API ET DONNÉES PRIVÉES

Ne jamais exposer dans le HTML public :

* clés secrètes ;
* tokens ;
* mots de passe ;
* données personnelles ;
* informations administratives ;
* données privées des utilisateurs.

Les robots doivent pouvoir lire le contenu public sans accéder aux données privées.

---

# 44. CONTENU DYNAMIQUE

Pour chaque page publique générée dynamiquement :

* URL stable ;
* title unique ;
* description unique ;
* canonical unique ;
* structured data appropriée ;
* contenu principal accessible au crawler ;
* URL intégrée au sitemap si indexable.

---

# 45. BLOG / ACTUALITÉS

Si IPPOO possède un blog ou des actualités :

Chaque article doit avoir :

* URL propre ;
* title unique ;
* meta description ;
* H1 ;
* date de publication ;
* date de modification lorsqu'elle existe ;
* auteur lorsqu'il existe ;
* image ;
* breadcrumbs ;
* Article/BlogPosting JSON-LD ;
* canonical ;
* Open Graph ;
* liens vers articles connexes.

Architecture :

`/blog/`

`/blog/article-slug`

---

# 46. FAQ

Lorsqu'une FAQ existe réellement :

Créer une section FAQ lisible dans le HTML.

Utiliser de vraies questions et réponses.

Ajouter FAQPage structured data uniquement lorsque cela correspond réellement au contenu et aux règles applicables.

Ne pas générer artificiellement des centaines de questions pour manipuler le référencement.

---

# 47. SEO ET IA — CONTENU CITABLE

Structurer les informations importantes sous forme de réponses claires.

Exemple :

## Qu'est-ce qu'IPPOO ?

Réponse factuelle basée uniquement sur les informations officielles du projet.

## Que fait IPPOO ?

Réponse factuelle.

## À qui s'adresse IPPOO ?

Réponse factuelle.

## Quels services propose IPPOO ?

Réponse structurée.

## Dans quels pays IPPOO est-il disponible ?

Réponse basée uniquement sur les données officielles.

## Quel est le site officiel d'IPPOO ?

https://ippoo-aptdc.com/

Cette structure doit aider les systèmes de recherche et de réponse à identifier les informations importantes.

---

# 48. ENTITY CONSISTENCY

Le nom IPPOO doit rester cohérent.

Utiliser :

IPPOO

comme identité principale.

Maintenir la cohérence dans :

* title ;
* description ;
* Organization schema ;
* WebSite schema ;
* footer ;
* About ;
* Open Graph ;
* manifest ;
* réseaux sociaux ;
* sitemap ;
* pages institutionnelles.

Ne pas utiliser plusieurs noms différents pour désigner la même entité sans justification.

---

# 49. SAMEAS

Lorsque des profils officiels IPPOO existent réellement :

utiliser `sameAs`.

Exemples :

* Facebook ;
* Instagram ;
* LinkedIn ;
* X ;
* YouTube ;
* TikTok ;
* autres profils officiels.

NE JAMAIS inventer un profil.

---

# 50. SEO MOBILE

Le site doit être :

* mobile-first ;
* responsive ;
* tactile ;
* lisible ;
* sans défilement horizontal inutile ;
* performant sur réseau mobile lent.

Vérifier :

* menus ;
* boutons ;
* formulaires ;
* navigation ;
* installation PWA ;
* affichage offline.

---

# 51. JAVASCRIPT ROUTER

Si React Router ou un autre routeur SPA est utilisé :

configurer correctement les routes.

Une URL comme :

`https://ippoo-aptdc.com/services`

doit fonctionner lorsqu'elle est directement saisie dans le navigateur.

Elle ne doit pas produire une erreur serveur.

Utiliser le History API.

Ne pas utiliser :

`#/services`

comme architecture principale.

---

# 52. PRE-RENDER / SSR

Si l'application actuelle est une SPA pure :

évaluer sérieusement :

* SSR ;
* SSG ;
* prerendering ;
* génération statique ;
* architecture hybride.

Priorité aux pages publiques importantes.

Ne pas transformer inutilement les zones privées de l'application en SSR si cela n'apporte aucune valeur.

---

# 53. DONNÉES STRUCTURÉES DYNAMIQUES

Si les données sont dynamiques :

le JSON-LD doit refléter les informations réellement affichées.

Ne jamais générer :

* faux prix ;
* faux avis ;
* fausses évaluations ;
* faux horaires ;
* faux stocks ;
* faux événements ;
* fausses entreprises.

Les données structurées doivent rester cohérentes avec le contenu visible.

Google peut traiter les structured data générées en JavaScript, mais celles-ci doivent rester correctement accessibles dans le DOM rendu et être testées.

---

# 54. GOOGLE SEARCH CONSOLE

Préparer IPPOO pour Google Search Console.

Le projet doit fournir :

`/robots.txt`

`/sitemap.xml`

des URLs canoniques cohérentes.

Prévoir une documentation interne indiquant :

1. vérifier le domaine ;
2. envoyer le sitemap ;
3. utiliser URL Inspection ;
4. demander une indexation lorsque nécessaire ;
5. surveiller les erreurs d'indexation ;
6. surveiller les pages exclues ;
7. surveiller les Core Web Vitals.

---

# 55. BING WEBMASTER TOOLS

Préparer également IPPOO pour Bing Webmaster Tools.

Le sitemap doit être accessible.

Le site doit être correctement crawlable par Bingbot.

---

# 56. AI SEARCH READINESS

Optimiser IPPOO pour les moteurs de recherche utilisant l'IA.

Objectif :

permettre à des systèmes tels que :

* ChatGPT ;
* Claude ;
* Perplexity ;
* Gemini ;
* Copilot ;
* autres systèmes de recherche générative ;

de :

* découvrir le domaine ;
* comprendre IPPOO ;
* identifier IPPOO comme entité ;
* identifier les pages importantes ;
* comprendre les services ;
* comprendre les produits ;
* comprendre les différentes composantes de l'écosystème ;
* identifier les informations officielles ;
* récupérer les réponses pertinentes ;
* identifier les URLs sources ;
* distinguer les informations officielles des sources secondaires.

Ne jamais promettre une position ou une citation automatique.

Optimiser uniquement les signaux techniques, sémantiques, éditoriaux et d'autorité contrôlables.

---

# 57. FICHIER LLMS.TXT

Évaluer l'intérêt d'ajouter :

`/llms.txt`

et, si pertinent pour le projet, une structure de documentation destinée aux systèmes d'IA.

Le contenu doit être factuel et pointer vers les pages officielles importantes.

Ne jamais considérer `llms.txt` comme un remplacement de :

* robots.txt ;
* sitemap.xml ;
* SEO ;
* structured data ;
* contenu HTML ;
* architecture de liens.

Si le fichier est ajouté, il doit être maintenu automatiquement ou documenté afin d'éviter qu'il devienne obsolète.

---

# 58. CRAWLABILITY TEST

Créer un script ou une procédure permettant de tester automatiquement :

* robots.txt ;
* sitemap.xml ;
* manifest ;
* service worker ;
* canonical ;
* title ;
* description ;
* H1 ;
* HTTP status ;
* HTTPS ;
* structured data ;
* Open Graph ;
* favicon ;
* PWA icons ;
* liens internes ;
* pages 404 ;
* redirections ;
* accessibilité des ressources ;
* réponses des routes publiques.

Ce test doit être reproductible.

---

# 59. AUDIT AUTOMATIQUE

Créer un rapport final contenant :

## SEO

* title ;
* description ;
* canonical ;
* robots ;
* sitemap ;
* structured data ;
* headings ;
* links ;
* images ;
* Open Graph.

## AI CRAWLERS

* GPTBot ;
* OAI-SearchBot ;
* ChatGPT-User ;
* ClaudeBot ;
* Claude-SearchBot ;
* PerplexityBot ;
* Googlebot ;
* Bingbot ;
* autres crawlers pertinents.

## PWA

* manifest ;
* service worker ;
* HTTPS ;
* icons ;
* start_url ;
* display ;
* scope ;
* offline ;
* installability.

## PERFORMANCE

* LCP ;
* INP ;
* CLS ;
* poids JavaScript ;
* poids CSS ;
* images ;
* requêtes réseau.

---

# 60. RÈGLE ABSOLUE : NE PAS INVENTER

Ne jamais inventer :

* données d'entreprise ;
* adresses ;
* prix ;
* avis ;
* utilisateurs ;
* statistiques ;
* certifications ;
* partenaires ;
* pays de disponibilité ;
* fonctionnalités ;
* réseaux sociaux ;
* récompenses ;
* chiffres financiers.

Utiliser uniquement :

* les informations présentes dans le projet ;
* les informations officiellement fournies ;
* les informations officielles configurées par l'équipe IPPOO.

---

# 61. RÈGLE ABSOLUE : NE PAS SACRIFIER L'UX

Le SEO ne doit pas dégrader :

* vitesse ;
* design ;
* navigation ;
* sécurité ;
* expérience mobile ;
* accessibilité ;
* conversion ;
* fonctionnalités existantes.

Le contenu SEO doit être naturel et utile.

Ne pas faire de keyword stuffing.

Ne pas créer de contenu répétitif.

Ne pas masquer du texte destiné uniquement aux robots.

---

# 62. MOTS-CLÉS

Identifier automatiquement les principaux termes réellement liés à IPPOO.

Construire :

* mot-clé principal ;
* mots-clés secondaires ;
* synonymes ;
* questions utilisateurs ;
* intentions informationnelles ;
* intentions commerciales ;
* intentions navigationnelles.

Utiliser les termes naturellement dans :

* H1 ;
* H2 ;
* contenu ;
* title ;
* description ;
* URLs ;
* ancres de liens ;
* structured data lorsque pertinent.

Ne pas bourrer les pages de mots-clés.

---

# 63. DOMAINE OFFICIEL

Le domaine officiel IPPOO est :

https://ippoo-aptdc.com/

Utiliser exactement cette origine pour :

* canonical ;
* sitemap ;
* robots.txt ;
* Open Graph URL ;
* Organization URL ;
* WebSite URL ;
* manifest start_url ;
* liens institutionnels ;
* structured data ;
* URLs principales.

Exemple :

`https://ippoo-aptdc.com/`

et non :

`http://ippoo-aptdc.com/`

et non :

`https://www.ippoo-aptdc.com/`

sauf si le domaine officiel est effectivement configuré ainsi.

Ne jamais inventer une variante.

---

# 64. TEST DES RESSOURCES PRINCIPALES

Vérifier réellement :

`https://ippoo-aptdc.com/`

`https://ippoo-aptdc.com/robots.txt`

`https://ippoo-aptdc.com/sitemap.xml`

`https://ippoo-aptdc.com/manifest.webmanifest`

`https://ippoo-aptdc.com/sw.js`

ainsi que les chemins réels utilisés par le projet.

Chaque ressource doit être testée.

Ne jamais déclarer une ressource disponible sans l'avoir vérifiée.

---

# 65. TEST FINAL COMPLET

Avant de terminer :

1. analyser le projet ;
2. identifier le framework ;
3. identifier le routeur ;
4. identifier le système de build ;
5. identifier l'hébergement ;
6. identifier la configuration Cloudflare lorsqu'elle existe ;
7. identifier les routes publiques ;
8. identifier les routes privées ;
9. lancer le build production ;
10. corriger toutes les erreurs ;
11. lancer le serveur production ;
12. tester toutes les routes publiques ;
13. tester robots.txt ;
14. tester sitemap.xml ;
15. tester manifest ;
16. tester service worker ;
17. tester installation PWA ;
18. tester offline ;
19. tester canonical ;
20. tester structured data ;
21. tester Open Graph ;
22. tester les liens ;
23. tester 404 ;
24. tester HTTPS ;
25. tester les ressources statiques ;
26. vérifier les réponses HTTP ;
27. vérifier les redirections ;
28. vérifier que les crawlers autorisés ne sont pas bloqués ;
29. vérifier le rendu HTML ;
30. vérifier les métadonnées de chaque page ;
31. vérifier la cohérence de l'identité IPPOO ;
32. vérifier qu'aucune fonctionnalité existante n'a été cassée.

---

# 66. TESTS DE CRAWL

Tester au minimum l'accès aux pages publiques avec plusieurs User-Agent représentatifs :

* Googlebot ;
* Bingbot ;
* GPTBot ;
* OAI-SearchBot ;
* ClaudeBot ;
* Claude-SearchBot ;
* PerplexityBot.

Vérifier :

* HTTP status ;
* contenu HTML ;
* title ;
* description ;
* canonical ;
* H1 ;
* liens ;
* structured data ;
* absence de blocage Cloudflare ;
* absence de 403 ;
* absence de 429 involontaire.

Ne pas contourner les mécanismes de sécurité.

Le test doit uniquement vérifier que les crawlers légitimes autorisés peuvent accéder au contenu public.

---

# 67. TEST DE RENDU

Pour chaque page SEO importante :

vérifier le HTML initial.

Puis vérifier le HTML après rendu JavaScript.

Comparer :

* title ;
* description ;
* H1 ;
* contenu principal ;
* liens ;
* structured data.

Le contenu important doit rester accessible après rendu.

---

# 68. TEST DES DONNÉES STRUCTURÉES

Pour chaque type Schema.org utilisé :

* vérifier la validité JSON-LD ;
* vérifier les propriétés obligatoires ;
* vérifier les URLs ;
* vérifier la cohérence avec le contenu visible ;
* supprimer les propriétés inventées ;
* tester avec les outils de validation appropriés.

Ne pas considérer l'absence d'erreur de syntaxe comme une garantie de référencement.

---

# 69. TEST PWA

Tester :

* manifest valide ;
* icônes ;
* service worker ;
* scope ;
* start_url ;
* HTTPS ;
* installation ;
* offline ;
* cache ;
* mise à jour du service worker ;
* absence de ressources bloquées ;
* absence de cache de données privées.

Tester également l'application après une nouvelle version.

Une mise à jour du service worker ne doit pas laisser l'utilisateur avec une ancienne version incohérente.

---

# 70. RAPPORT FINAL

À la fin de l'implémentation, fournir un rapport clair.

## SEO

* éléments ajoutés ;
* éléments corrigés ;
* pages indexables ;
* sitemap ;
* robots.txt ;
* canonical ;
* structured data ;
* architecture interne.

## AI SEARCH

* crawlers autorisés ;
* contenu optimisé ;
* données d'entité ;
* pages principales ;
* accessibilité aux robots ;
* relation entre IPPOO et ses services.

## PWA

* manifest ;
* service worker ;
* offline ;
* installation ;
* icons ;
* HTTPS ;
* scope.

## PERFORMANCE

* optimisations effectuées ;
* problèmes restant à traiter.

## TESTS

Pour chaque test :

PASS

ou

FAIL

avec la raison exacte.

Ne déclarer PASS que si le test a réellement été effectué.

---

# 71. OBJECTIF FINAL

Le résultat doit être un site IPPOO :

SEO-ready

AI-search-ready

Crawler-friendly

PWA-ready

Mobile-first

Accessible

Performant

Sécurisé

Sémantiquement structuré

Techniquement propre

Le domaine officiel à renforcer est :

https://ippoo-aptdc.com/

L'objectif est que lorsqu'un utilisateur recherche :

"IPPOO"

"IPPOO plateforme"

"IPPOO services"

"site officiel IPPOO"

ou le nom d'un service réellement proposé par IPPOO,

les moteurs de recherche et les systèmes d'IA disposent de signaux techniques, sémantiques et éditoriaux suffisamment solides pour :

* découvrir le domaine ;
* identifier IPPOO ;
* comprendre son activité ;
* comprendre ses services ;
* comprendre ses plateformes ;
* identifier les pages officielles ;
* accéder aux informations publiques ;
* associer correctement les services à IPPOO ;
* présenter les informations officielles lorsque cela est pertinent.

NE PROMETS JAMAIS UNE PREMIÈRE POSITION.

NE PROMETS JAMAIS UNE CITATION AUTOMATIQUE PAR CHATGPT, CLAUDE OU PERPLEXITY.

CONSTRUIS LE SITE POUR MAXIMISER LES SIGNAUX TECHNIQUES, SÉMANTIQUES, ÉDITORIAUX, D'ACCESSIBILITÉ, DE PERFORMANCE ET D'AUTORITÉ QUI FAVORISENT LE RÉFÉRENCEMENT ET LA COMPRÉHENSION PAR LES MOTEURS DE RECHERCHE ET LES SYSTÈMES D'IA.

IMPORTANT :

AVANT DE CONSIDÉRER LA MISSION TERMINÉE, TU DOIS RÉELLEMENT TESTER LE SITE EN PRODUCTION ET FOURNIR LES RÉSULTATS DES TESTS.

NE DIS JAMAIS QU'UNE FONCTIONNALITÉ EST IMPLÉMENTÉE SI ELLE N'A PAS ÉTÉ VÉRIFIÉE.

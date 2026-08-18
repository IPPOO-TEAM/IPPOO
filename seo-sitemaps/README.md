# Sitemaps des domaines annexes IPPOO

Ces fichiers **ne sont pas servis par `ippoo-aptdc.com`** : Google refuse les URL
hors-domaine dans un sitemap. Chaque fichier doit être **déployé à la racine du
domaine concerné**, puis soumis dans sa **propre propriété Google Search Console**.

## Où déployer

| Domaine | Fichier à placer à la racine | URL finale |
|---|---|---|
| `aptdc-zup2.com` | `aptdc-zup2.com/sitemap.xml` + `robots.txt` | `https://aptdc-zup2.com/sitemap.xml` |
| `healthypage-aptdc.com` | `healthypage-aptdc.com/sitemap.xml` + `robots.txt` | `https://healthypage-aptdc.com/sitemap.xml` |

## Plateformes couvertes

**aptdc-zup2.com** (propriété de domaine → couvre tous les sous-domaines) :
- IPPOO-ASSURANCE — https://insurance.aptdc-zup2.com/
- IPPOO-FINANCES & CRÉDIT — https://financial.aptdc-zup2.com/
- IPPOO-KAPITAL INVEST — https://kapital.aptdc-zup2.com/
- IPPOO-WORKS & JOBS — https://works.aptdc-zup2.com/
- IPPOO-TRIIP — https://triip.aptdc-zup2.com/

**healthypage-aptdc.com** :
- IPPOO-HEALTHY PAGE — https://healthypage-aptdc.com/

## Procédure Google Search Console

1. Ajouter une **propriété de domaine** (ex. `aptdc-zup2.com`) et valider par
   enregistrement DNS TXT.
2. Déployer `sitemap.xml` (et `robots.txt`) à la racine du domaine.
3. Menu **Sitemaps** → saisir `sitemap.xml` → **Envoyer**.

> Le sitemap principal du site vitrine reste `ippoo-aptdc.com/sitemap.xml`
> (accueil + sous-domaines `*.ippoo-aptdc.com`).

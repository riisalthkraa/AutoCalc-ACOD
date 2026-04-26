# AutoCalc OptiDevis — Site Web officiel

Site vitrine d'**AutoCalc OptiDevis v3.5.0**, logiciel de devis et facturation pour artisans et PME du batiment.

**URL :** [autocalc-optidevis.fr](https://autocalc-optidevis.fr)

---

## Pages du site

### Pages principales
| Page | Description |
|------|-------------|
| `index.html` | Accueil — hero, fonctionnalites cles, temoignages, CTA |
| `fonctionnalites.html` | Liste detaillee des fonctionnalites (calculs auto, scanner, KPI, E-Facture) |
| `tarifs.html` | Grille tarifaire — licence a vie 300EUR, essai gratuit 60 jours |
| `comparatif.html` | Comparatif AutoCalc vs OBAT, EBP, Batappli et SaaS concurrents |
| `documentation.html` | Guide d'utilisation et tutoriels |
| `templates.html` | Templates Excel (clients, fournisseurs, catalogue materiaux) |
| `contact.html` | Formulaire de contact + FAQ |
| `changelog.html` | Historique des versions et notes de mise a jour |

### Pages secondaires
| Page | Description |
|------|-------------|
| `services.html` | Services pro RK Developpement (dev sur mesure, applications metier) |
| `qualite.html` | Qualite et tests — 140 tests automatises, score audit 75/100 |
| `ci-cd.html` | Rapports CI/CD, integration continue |

### Pages legales
| Page | Description |
|------|-------------|
| `cgv.html` | Conditions Generales de Vente |
| `mentions-legales.html` | Mentions legales |
| `politique-confidentialite.html` | Politique de confidentialite RGPD |

---

## SEO et referencement

Toutes les pages incluent :
- Meta SEO completes (title, description, keywords, robots, canonical)
- Open Graph (Facebook, LinkedIn, WhatsApp)
- Twitter/X Card
- Schema.org JSON-LD (Organization, WebSite, SoftwareApplication, Product, FAQPage, BreadcrumbList, etc.)
- Icones PWA et web manifest
- SEO local (geo tags, LocalBusiness)

Fichiers SEO a la racine :
- `sitemap.xml` — sitemap avec toutes les pages et images
- `robots.txt` — autorise les bots IA (GPTBot, ClaudeBot, PerplexityBot)
- `site.webmanifest` — support PWA

---

## Structure du projet

```
SITE AutoCalc-ACOD/
├── index.html
├── fonctionnalites.html
├── tarifs.html
├── comparatif.html
├── documentation.html
├── templates.html
├── contact.html
├── changelog.html
├── services.html
├── qualite.html
├── ci-cd.html
├── cgv.html
├── mentions-legales.html
├── politique-confidentialite.html
├── sitemap.xml
├── robots.txt
├── site.webmanifest
├── CNAME
├── netlify.toml
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png
│   ├── icon.ico
│   └── ...
└── screenshots/
    ├── accueil-vendeur-conseil.png
    ├── Nouveau Devis.png
    ├── NOUVEAU MODULE CLIENTS.png
    ├── NOUVEAU MODULE FOURNISSEURS.png
    ├── Tableau de bord Admin (Mode Admin).png
    └── ...
```

---

## Technologies

- **HTML5** semantique
- **CSS3** avec variables CSS, glassmorphism, animations
- **JavaScript ES6+**
- **Font Awesome 6.4.0**
- **Google Fonts** (Inter)
- **GitHub Pages** (hebergement)
- Domaine personnalise via `CNAME`

---

## Deploiement

Le site est deploye automatiquement via **GitHub Pages** sur la branche `main`.

Domaine : `autocalc-optidevis.fr`

---

## Auteur

**RK Developpement**
99 Rue Michel Montaigne, 33350 Castillon-la-Bataille, France
Contact : riisalthkraal@gmail.com

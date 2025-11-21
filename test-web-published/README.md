# 📊 AutoCalc OptiDevis - Tests & Documentation

Ce dossier contient tous les rapports de tests et la documentation complète d'**AutoCalc OptiDevis v3.3.0**.

---

## 📁 Structure du dossier

```
test-web-published/
├── home.html           # 🏠 Page d'accueil (accès rapide)
├── index.html          # 🧪 Rapport de tests Jest (HTML)
├── docs/               # 📚 Documentation API (à générer)
│   └── index.html      # Page d'accueil de la doc
└── README.md          # Ce fichier
```

---

## 🧪 **Rapport de Tests**

### Accès
**Fichier principal** : `home.html` (page d'accueil)
**Rapport détaillé** : `index.html`

**Ouverture** :
- Double-cliquez sur `home.html` OU
- Ouvrez avec votre navigateur (Chrome, Firefox, Edge, etc.)

### Contenu
Le rapport affiche :
- ✅ **Tests réussis** : Nombre de tests passés
- ❌ **Tests échoués** : Détails des erreurs
- 📊 **Couverture de code** : Pourcentage de code testé
- ⏱️ **Temps d'exécution** : Performance des tests
- 📝 **Logs console** : Sorties détaillées

### Test Suites
1. **cache.test.js** - Tests du système de cache (CacheKeys, TTL, invalidation)
2. **clients.test.js** - Tests de gestion des clients (validation, filtrage, types)
3. **materials.test.js** - Tests du catalogue de matériaux (92 matériaux, calculs)
4. **notification.test.js** - Tests du système de notifications (4 types, queue, sons)
5. **quotes.test.js** - Tests de gestion des devis (calculs, validité, numérotation)
6. **suppliers.test.js** - Tests de gestion des fournisseurs (validation, délais)
7. **validation.test.js** - Tests de validation (email, SIRET, phone, montants)
8. **backup.test.js** - Tests du système de sauvegarde (génération, rétention)
9. **app.integration.test.js** - Tests d'intégration (workflow complet A-Z)

---

## 📚 **Documentation API**

### Accès
**Dossier** : `docs/` (à générer avec JSDoc)

**Génération** :
```bash
# Installer JSDoc
npm install --save-dev jsdoc

# Générer la documentation
npm run docs
```

### Contenu prévu
Documentation complète du système AutoCalc OptiDevis :

#### **Core** (`app/core/`)
- `BaseModule` : Classe de base pour tous les modules
- `EventBus` : Système de communication inter-modules
- `StateManager` : Gestion de l'état global
- `UndoRedoManager` : Système annuler/refaire

#### **Modules** (`app/modules/`)
21 modules documentés :
- `AuthModule` : Authentification et permissions
- `MaterialsModule` : Gestion du catalogue de matériaux
- `SuppliersModule` : Gestion des fournisseurs
- `ClientsModule` : Gestion des clients
- `QuotesModule` : Gestion des devis
- `InvoicesModule` : Gestion des factures
- `DashboardModule` : Tableaux de bord
- `ConfigModule` : Configuration
- `QuoteBuilderModule` : Construction de devis
- `PDFModule` : Génération PDF (5 designs)
- `BackupModule` : Sauvegarde/Restauration
- `TemplatesModule` : Modèles de devis
- `ScannerModule` : Scanner codes-barres
- `FECModule` : Export comptable FEC
- `RevenueModule` : CA mensuel
- `ImportModule` : Import Excel/CSV
- Et 5 autres modules...

#### **Shared** (`app/shared/`)
- `NotificationSystem` : Système de notifications
- `DataCache` : Cache intelligent
- `ValidationSystem` : Système de validation
- `calculations.js` : Calculs financiers (HT/TTC/Marges)
- `formatters.js` : Formatage date/monnaie
- `CryptoHelper` : Chiffrement

---

## 📈 **Statistiques actuelles**

### Tests (v3.3.0)
- **Total Tests** : 33+ tests documentés
- **Test Suites** : 9 suites (8 unit + 1 integration)
- **Modules testés** : Cache, Clients, Matériaux, Notifications, Devis, Fournisseurs, Validation, Backup
- **Taux de réussite cible** : > 95%
- **Couverture cible** : > 80%

### Application
- **Version** : 3.3.0
- **Modules** : 21 modules ES6
- **Thèmes UI** : 28 thèmes (20 clairs + 8 sombres)
- **Base de données** : 92 matériaux standards
- **Fonctionnalités** : Devis, Factures, PDF, Import, Backup, Scanner

---

## 🚀 **Commandes disponibles**

### Exécuter les tests

```bash
# Tous les tests avec rapport HTML
npm test

# Tests unitaires seulement
npm run test:unit

# Tests d'intégration seulement
npm run test:integration

# Tests avec couverture détaillée
npm run test:coverage

# Mode watch (auto-reload)
npm run test:watch

# Ouvrir le dernier rapport
npm run test:report
```

### Générer la documentation

```bash
# Générer la documentation API (JSDoc)
npm run docs

# Ouvrir la documentation
start test-web-published/docs/index.html
```

---

## 🌐 **Publier sur le web**

### Option 1 : GitHub Pages
1. Poussez le dossier `test-web-published/` sur GitHub
2. Activez GitHub Pages dans Settings
3. Sélectionnez la branche et le dossier `test-web-published`
4. Accédez à `https://votre-username.github.io/autocalc/`

### Option 2 : Netlify / Vercel
1. Créez un compte sur [Netlify](https://netlify.com) ou [Vercel](https://vercel.com)
2. Glissez-déposez le dossier `test-web-published/`
3. Obtenez une URL publique instantanée

### Option 3 : Serveur local
```bash
# Installer serve globalement
npm install -g serve

# Lancer le serveur
serve test-web-published

# Ouvrir http://localhost:3000
```

---

## 📋 **Checklist avant publication**

- [x] Jest configuré pour générer dans test-web-published/
- [x] home.html créé (page d'accueil moderne)
- [x] README.md complet
- [ ] Tests exécutés et rapport généré
- [ ] Documentation JSDoc générée
- [ ] Couverture > 80%
- [ ] Tous les tests passent

---

## 🔧 **Configuration technique**

### Jest
- **Environment** : jsdom (simule le navigateur)
- **Reporter** : jest-html-reporter
- **Output** : test-web-published/index.html
- **Coverage** : tests/coverage/
- **Timeout** : 30 secondes

### Stack
- **Runtime** : Electron v38.2.1
- **Framework** : Vanilla JavaScript ES6
- **UI** : Bootstrap 5
- **Database** : LowDB (JSON)
- **PDF** : jsPDF + AutoTable
- **Tests** : Jest v30.2.0

---

## 🔗 **Liens utiles**

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [JSDoc Documentation](https://jsdoc.app/index.html)
- [Electron Testing](https://www.electronjs.org/docs/latest/tutorial/automated-testing)

---

## 📞 **Support**

Pour toute question sur les tests ou la documentation :
- **Développeur** : David VIEY
- **Email** : Riisalth@hotmail.fr
- **Version** : AutoCalc OptiDevis v3.3.0

---

## 🎯 **Nouveautés v3.3.0**

### Améliorations Tests
- ✅ Configuration Jest alignée avec CareLink et MatchPro IA
- ✅ Rapport HTML moderne dans test-web-published/
- ✅ Page d'accueil élégante (home.html)
- ✅ Structure standardisée pour publication web

### Architecture
- ✅ 21 modules ES6 indépendants
- ✅ EventBus centralisé
- ✅ StateManager global
- ✅ Pattern BaseModule

### Fonctionnalités
- ✅ Import Excel/CSV (matériaux, fournisseurs, clients)
- ✅ 28 thèmes UI (20 clairs + 8 sombres)
- ✅ 5 designs de PDF personnalisables
- ✅ Scanner codes-barres EAN13
- ✅ Backup automatique (toutes les 24h)
- ✅ Export comptable FEC

---

**Dernière mise à jour** : ${new Date().toLocaleDateString('fr-FR')}
**Version** : 3.3.0
**Créé par** : David VIEY

---

© 2025 AutoCalc OptiDevis - Tous droits réservés

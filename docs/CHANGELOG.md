# CHANGELOG - AutoCalc OptiDevis

Tous les changements notables de ce projet seront documentés dans ce fichier.

## [3.2.0] - 24 Octobre 2025

### 🎨 Corrections UI - Thèmes Sombres
**Problème résolu:** Les modals étaient illisibles dans tous les thèmes sombres (texte sombre sur fond sombre)

**Thèmes corrigés (9 thèmes):**
- ✅ Minimal Nordic (styles6.css)
- ✅ Midnight Professional (styles20.css)
- ✅ Charcoal Elite (styles21.css)
- ✅ Dark Ocean (styles22.css)
- ✅ Carbon Modern (styles23.css)
- ✅ Obsidian Purple (styles24.css)
- ✅ Forest Night (styles25.css)
- ✅ Crimson Shadow (styles26.css)
- ✅ Arctic Slate (styles27.css)

**Modifications CSS appliquées:**
- Forçage de `color: var(--text-color) !important` sur tous les éléments de texte dans `.modal-body`
- Headers de modals avec dégradés cohérents
- Inputs avec fond sombre et texte clair
- Listes et éléments interactifs avec hover states appropriés
- Support complet de tous les tags HTML (h1-h6, p, span, div, label, small, etc.)

### ✨ Nouveau Module - Import de Données

**Module ImportModule créé** (`app/modules/import/ImportModule.js` - 937 lignes)

**Fonctionnalités:**
- 📥 **Import Matériaux** - Import en masse de catalogues complets
- 📥 **Import Fournisseurs** - Import de bases fournisseurs
- 📥 **Import Clients** - Import de fichiers clients

**Formats supportés:**
- ✅ **Excel (.xlsx, .xls)** - Format Microsoft Excel
- ✅ **CSV (.csv)** - Fichiers texte délimités
- ⏳ **XML (.xml)** - Obat/Batiprix (en développement)

**Fonctionnalités avancées:**
- 🎯 **Mapping automatique de colonnes** - Détection intelligente via fuzzy matching
- 📊 **Prévisualisation avant import** - Vérification des 10 premières lignes
- ✅ **Validation pré-import** - Vérification des champs obligatoires et formats
- 📈 **Barre de progression** - Suivi en temps réel de l'import
- 📋 **Rapport d'import détaillé** - Statistiques succès/échecs avec liste des erreurs
- 🔄 **Traitement par batch** - Import progressif sans blocage de l'UI

**Mapping intelligent supporté:**

*Matériaux:*
- nom/name/designation/libelle/libellé
- reference/ref/code/référence
- type/categorie/catégorie/famille
- unite/unit/unité
- prix/price/prix_ht/prixHT/pu_ht
- tva/TVA/taxe
- fournisseur/supplier/vendeur
- stock/quantite/quantité/qty
- code_barre/barcode/ean/ean13

*Fournisseurs:*
- nom/name/raison_sociale
- contact/responsable
- email/mail/e-mail
- telephone/phone/tel/téléphone
- adresse/address/rue
- type/categorie/catégorie
- siret/siren
- delai_livraison/deliveryDelay/delai/délai

*Clients:*
- nom/name/raison_sociale
- contact/responsable
- email/mail/e-mail
- telephone/phone/tel/téléphone
- adresse/address/rue
- type/categorie/catégorie
- siret/siren

### 📄 Templates Excel - Facilitation Migration

**Nouveauté:** Export de templates Excel pré-formatés avec exemples

**Templates disponibles:**
- 📑 **Template_Materiaux_AutoCalc.xlsx**
  - 3 exemples: Brique, Ciment, Plaque plâtre
  - Colonnes optimisées pour auto-détection
  - Prix, stocks, codes-barres inclus

- 📑 **Template_Fournisseurs_AutoCalc.xlsx**
  - 3 exemples: Point P, BigMat, Leroy Merlin
  - Contacts complets avec SIRET
  - Délais de livraison configurés

- 📑 **Template_Clients_AutoCalc.xlsx**
  - 3 exemples: Entreprise, Particulier, Société
  - Types de clients variés
  - Données de contact complètes

**Utilisation:**
1. Cliquer sur "📥 Importer Catalogue/Fournisseurs/Clients"
2. Télécharger le template Excel correspondant
3. Remplacer les exemples par vos données
4. Importer le fichier via la même modal
5. Mapping automatique + validation + import

**Avantages:**
- ✅ Migration facile depuis concurrents (Obat, Batiprix)
- ✅ Format garanti compatible
- ✅ Exemples de données réalistes
- ✅ Largeur de colonnes ajustée automatiquement
- ✅ Pas de risque d'erreur de format

### 🏗️ Architecture - Intégration Modal

**Modifications UI (index.html):**
- Ajout de 3 boutons d'import dans les onglets:
  - Matériaux (ligne 501-503)
  - Fournisseurs (ligne 553-555)
  - Clients (ligne 600-602)

- Ajout modal d'import complète (lignes 2672-2764):
  - Section téléchargement templates (avec 3 boutons)
  - Section sélection fichier (drag & drop + file input)
  - Section prévisualisation (stats + mapping + tableau)
  - Section progression (barre + statut + rapport)

**Modifications Architecture (app.js):**
- Import du module (ligne 39)
- Enregistrement dans l'application (lignes 163-164)
- 18 modules chargés au total (était 17)
- Aucune modification des modules existants

**Design Pattern:**
- ✅ Architecture non-invasive (additive)
- ✅ Utilise APIs existantes (addMaterial, addSupplier, addClient)
- ✅ Extend BaseModule pattern respecté
- ✅ EventBus pour communication inter-modules
- ✅ StateManager pour gestion d'état centralisée

### 🔒 Sécurité & Validation

**Validation Import:**
- Nom obligatoire pour tous les types
- Type obligatoire pour matériaux
- Format email validé (regex)
- Format SIRET vérifié (14 chiffres)
- Prix/Stock convertis en nombres
- TVA validée (valeurs autorisées)

**Gestion Erreurs:**
- Lignes sans nom → ignorées + log
- Doublons → ignorés + log
- Format incorrect → ligne ignorée + log
- Rapport final avec liste complète des erreurs (max 20 affichées)

### 📈 Performance

**Optimisations:**
- Import par batch avec délai de 10ms entre lignes
- Pas de blocage de l'UI pendant l'import
- Progression en temps réel
- Validation avant import (évite appels API inutiles)
- Cache des données parsées (pas de re-parsing)

### 🎯 Business Impact

**Objectif stratégique:** Faciliter la migration clients depuis Obat/Batiprix

**Avantages compétitifs:**
- 📥 Import rapide et facile
- 📊 Validation intelligente
- 🎨 Templates prêts à l'emploi
- 🚀 Migration en quelques clics
- 💰 Prix attractif du logiciel
- 🏠 100% local (pas de cloud obligatoire)
- ⚡ Rapidité d'exécution
- 🧩 Modularité complète

**Prochaine étape:** Support XML Obat/Batiprix pour import direct des exports concurrents

---

## [3.1.0] - 22 Octobre 2025

### 🐛 Corrections
- Bug TVA "NaN%" corrigé pour tous les matériaux
- Affichage TVA normalisé à 100%

### ✨ Nouveautés
- 8 nouveaux thèmes sombres professionnels
- Thème Minimal Nordic amélioré
- 28 thèmes au total disponibles

### 🎨 Thèmes ajoutés
**Professionnels:**
- Midnight Professional (Indigo/violet élégant)
- Charcoal Elite (Gris avec dorures)
- Dark Ocean (Bleu océanique)
- Carbon Modern (Noir high-tech)

**Artistiques:**
- Obsidian Purple (Violet lumineux)
- Forest Night (Vert nature)
- Crimson Shadow (Rouge dramatique)
- Arctic Slate (Bleu professionnel)

---

## [3.0.0] - 15 Octobre 2025

### 🚀 Refonte Majeure - Architecture Modulaire

**Migration vers ES6:**
- Refactorisation complète de app.js (7978 → 366 lignes = 96% réduction)
- Architecture modulaire avec 17 modules indépendants
- Pattern BaseModule pour cohérence
- EventBus centralisé pour communication inter-modules
- StateManager pour gestion d'état global

**Modules créés:**
1. AuthModule - Authentification
2. MaterialsModule - Gestion catalogue
3. SuppliersModule - Gestion fournisseurs
4. ClientsModule - Gestion clients
5. QuotesModule - Gestion devis
6. InvoicesModule - Gestion factures
7. DashboardModule - Tableaux de bord
8. ConfigModule - Configuration
9. QuoteBuilderModule - Construction devis
10. PDFModule - Génération PDF
11. BackupModule - Sauvegarde/Restauration
12. TemplatesModule - Modèles de devis
13. ScannerModule - Scanner codes-barres
14. UtilitiesModule - Utilitaires
15. FECModule - Export comptable FEC
16. RevenueModule - CA mensuel
17. QuickAddModule - Ajout rapide matériaux

### ✨ Nouvelles Fonctionnalités
- Système de thèmes amélioré (20 thèmes)
- Export FEC comptable
- Scanner codes-barres intégré
- Module de sauvegarde automatique
- Dashboard administrateur vs vendeur
- Quick Add avec syntaxe naturelle

### 🔧 Améliorations Techniques
- Tests unitaires (140 tests)
- Tests d'intégration
- Audit de sécurité
- Pré-release checks automatisés
- Documentation complète

---

## [2.6.5] - Version Précédente
*Dernière version avant refonte majeure*

### Fonctionnalités
- Gestion matériaux/fournisseurs/clients
- Création devis/factures
- Export PDF
- Backup manuel
- 20 thèmes disponibles

---

## Légende

- ✨ Nouvelle fonctionnalité
- 🐛 Correction de bug
- 🔧 Amélioration technique
- 🎨 Changement UI/UX
- 🔒 Sécurité
- 📈 Performance
- 📝 Documentation
- ⏳ En développement

---

**Mainteneur:** David VIEY <Riisalth@hotmail.fr>
**License:** Propriétaire
**Dernière mise à jour:** 24 Octobre 2025

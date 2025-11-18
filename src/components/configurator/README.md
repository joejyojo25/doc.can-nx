# Infini KNX Configurator - Version 2 (Wizard)

## Structure

Cette version du configurateur utilise une approche "wizard" (assistant guidé) pour une meilleure expérience utilisateur.

### Architecture

```
components/configurator/
├── InfiniKnxWizard.tsx          # ✅ Container principal avec navigation
├── constants.ts                 # ✅ Constantes partagées (finitions, boîtiers)
├── hooks/
│   └── useConfiguratorState.ts  # ✅ State management centralisé
├── shared/
│   ├── ProgressIndicator.tsx    # ✅ Indicateur de progression visuel
│   ├── StepNavigation.tsx       # ✅ Navigation entre étapes
│   ├── RoomSelector.tsx         # ✅ Sélecteur de pièce active
│   └── ConfigPreview.tsx        # ✅ Aperçu canvas réutilisable
├── utils/
│   └── canvasUtils.ts           # ✅ Utilitaires de dessin canvas
└── steps/
    ├── Step1_ProjectInfo.tsx    # ✅ Nom projet + commentaires
    ├── Step2_RoomSetup.tsx      # ✅ Gestion des pièces
    ├── Step3_Hardware.tsx       # ✅ Boîtier, modules, boutons + preview
    ├── Step4_Finish.tsx         # ✅ Finitions Meljac, bord, fixation + preview
    ├── Step5_Engraving.tsx      # ✅ Gravures, texte, position + preview
    └── Step6_Summary.tsx        # ✅ Récap + preview toutes les pièces
```

## Étapes du Wizard

### 1. Informations du Projet ✅
- Nom du projet
- Commentaires/notes

### 2. Configuration des Pièces ✅
- Ajout/suppression de pièces
- Nom de chaque pièce
- Quantité par pièce

### 3. Matériel ✅
- Type de boîtier (EU/UK/US)
- Nombre de modules (gangs)
- Boutons par module
- Espacement entre modules

### 4. Finitions ✅
- Catégorie Meljac (bronze, laiton, cuivre, nickel, chrome, argent)
- Finition spécifique
- Type de bord (Plat/Arrondi)
- Fixation (Avec vis/Sans vis)

### 5. Gravures ✅
- Texte pour chaque bouton
- Position du texte (au-dessus/en-dessous)
- Nombre de lignes (1/2)
- Casse du texte (majuscules/minuscules/mixte)
- Raccourcis de remplissage rapide

### 6. Récapitulatif ✅
- Vue d'ensemble de toutes les configurations
- Statistiques globales du projet
- Détail par pièce avec toutes les spécifications
- Validation de configuration
- Génération du PDF (structure prête)

## État d'Avancement

✅ **Complété:**
- ✅ Structure de base du wizard
- ✅ Toutes les 6 étapes fonctionnelles
- ✅ Hook de gestion d'état centralisé
- ✅ Navigation entre étapes avec validation
- ✅ Indicateur de progression visuel
- ✅ Sélecteur de version (V1/V2)
- ✅ Sélecteur de pièce active (étapes 3-5)
- ✅ **Aperçu en temps réel** dans Steps 3, 4, 5
- ✅ **Preview de toutes les pièces** dans Step 6
- ✅ Composant ConfigPreview réutilisable
- ✅ Utilitaires canvas (plateSize, drawRoundedRect, etc.)
- ✅ **Sélection de marque** (Meljac, Legrand, Jung, Gira, Berker, Siemens)
- ✅ **Gap fixé à 0mm** (pas d'espacement entre modules)
- ✅ **Vis positionnées dans le dernier module**
- ✅ **Orientation verticale automatique** (hauteur > largeur)
- ✅ **Support complet 2 lignes** (20 caractères max)
- ✅ Constantes partagées
- ✅ Interface complète et responsive

⏳ **À Améliorer:**
- ⏳ Intégration de la génération PDF complète avec canvas
- ⏳ Sauvegarde locale (localStorage)
- ⏳ Export/Import de configuration JSON
- ⏳ Mode sombre dans le preview
- ⏳ Tutoriel interactif pour nouveaux utilisateurs
- ⏳ Animations de transition entre étapes
- ⏳ Raccourcis clavier pour navigation

## Utilisation

Le configurateur est accessible via deux versions:

1. **Version 1 - Classique**: Interface complète avec tous les contrôles visibles
2. **Version 2 - Wizard**: Assistant guidé pas à pas (cette version)

Les utilisateurs peuvent basculer entre les deux versions via le sélecteur en haut de la page.

## Avantages de la Version 2

- **Guidage**: Processus étape par étape
- **Clarté**: Une tâche à la fois
- **Validation**: Contrôle à chaque étape
- **Progression**: Indicateur visuel du progrès
- **Mobile-friendly**: Mieux adapté aux écrans tactiles

## Prochaines Étapes

1. ✅ ~~Créer `Step3_Hardware.tsx`~~
2. ✅ ~~Créer `Step4_Finish.tsx`~~
3. ✅ ~~Créer `Step5_Engraving.tsx`~~
4. ✅ ~~Créer `Step6_Summary.tsx` avec structure PDF~~
5. ⏳ Intégrer la logique PDF complète depuis V1
6. ⏳ Ajouter aperçu visuel en temps réel
7. ⏳ Implémenter la sauvegarde locale (localStorage)
8. ⏳ Ajouter export/import JSON
9. ⏳ Tests utilisateur et ajustements UX
10. ⏳ Documentation vidéo/tutoriel

## Fonctionnalités Clés Implémentées

### Step 1 - Informations du Projet
- Nom du projet avec placeholder informatif
- Commentaires multi-lignes
- Design cards avec icônes
- Conseil contextuel

### Step 2 - Configuration des Pièces
- Gestion dynamique des pièces (ajout/suppression)
- Onglets interactifs avec hover states
- Édition du nom et de la quantité
- Récapitulatif en temps réel
- Protection contre la suppression de la dernière pièce

### Step 3 - Matériel
- Sélection visuelle du type de boîtier (EU/UK/US)
- Configuration flexible du nombre de modules
- Boutons par module individuels
- Espacement ajustable entre modules
- Récapitulatif du matériel
- Conseils régionaux pour les boîtiers
- **📺 Aperçu canvas en temps réel** (500×400px)

### Step 4 - Finitions
- 6 catégories de finitions avec icônes
- Palette complète Meljac (28 finitions)
- Aperçu couleur en temps réel
- Choix du style de bord
- Fixation avec/sans vis
- Validation automatique selon le type de boîtier
- Récapitulatif des finitions
- **📺 Aperçu canvas avec finition appliquée**

### Step 5 - Gravures
- Configuration complète des textes
- Position et nombre de lignes
- Casse du texte (3 options)
- Input individuels pour chaque bouton
- Compteur de caractères (max 10)
- Raccourcis de remplissage rapide
- Effacement global
- Progression des gravures
- **📺 Aperçu canvas avec gravures en direct**

### Step 6 - Récapitulatif
- Vue d'ensemble du projet
- Statistiques globales visuelles
- Détail par pièce avec toutes les specs
- **📺 Aperçu canvas pour chaque pièce** (400×280px)
- Validation de configuration
- Statut visuel (complet/incomplet)
- Boutons d'export (Aperçu/PDF)
- Message d'aide contextuel

# 📁 Composants Partagés - Configurateur Infini KNX

Ce dossier contient les composants réutilisables utilisés dans le configurateur Infini KNX.

---

## 📋 Liste des Composants

### 1. **ConfigPreview.tsx** 🎨
**Description**: Génère l'aperçu canvas de la plaque configurée

**Props**:
- `room: RoomConfig` - Configuration de la pièce à afficher
- `width?: number` - Largeur du canvas (défaut: 600px)
- `height?: number` - Hauteur du canvas (défaut: 400px)
- `showTech?: boolean` - Afficher les dimensions techniques (défaut: true)
- `showGuides?: boolean` - Afficher les guides de positionnement (défaut: false)
- `darkMode?: boolean` - Mode sombre (défaut: false)
- `className?: string` - Classes CSS additionnelles

**Utilisation**:
```tsx
<ConfigPreview
  room={activeRoom}
  width={500}
  height={400}
  showTech={true}
  showGuides={false}
/>
```

**Fonctionnalités**:
- Rendu canvas avec résolution DPI optimisée
- Support de toutes les finitions Meljac (29 finitions)
- Affichage des vis (vissee) ou fixation magnétique
- Gravures personnalisées avec police 4mm
- Dimensions techniques en mm
- Mode vertical automatique

---

### 2. **PreviewControls.tsx** 🎛️
**Description**: Contrôles pour personnaliser l'aperçu (dimensions techniques, guides)

**Props**:
- `showTech: boolean` - État actuel de l'affichage des dimensions
- `showGuides: boolean` - État actuel de l'affichage des guides
- `onShowTechChange: (value: boolean) => void` - Callback changement dimensions
- `onShowGuidesChange: (value: boolean) => void` - Callback changement guides

**Utilisation**:
```tsx
<PreviewControls
  showTech={showTech}
  showGuides={showGuides}
  onShowTechChange={setShowTech}
  onShowGuidesChange={setShowGuides}
/>
```

---

### 3. **ProgressIndicator.tsx** 📊
**Description**: Indicateur de progression du wizard en 6 étapes

**Props**:
- `currentStep: number` - Numéro de l'étape actuelle (1-6)
- `steps: string[]` - Tableau des noms d'étapes

**Utilisation**:
```tsx
<ProgressIndicator
  currentStep={3}
  steps={[
    "Projet",
    "Pièces",
    "Matériel",
    "Finitions",
    "Gravures",
    "Résumé"
  ]}
/>
```

**Fonctionnalités**:
- Étapes complétées en vert avec checkmark
- Étape actuelle en bleu
- Étapes futures en gris
- Responsive mobile/desktop
- Animation de progression

---

### 4. **RoomSelector.tsx** 🏠
**Description**: Sélecteur et gestionnaire de pièces (rooms)

**Props**:
- `rooms: RoomConfig[]` - Liste des pièces configurées
- `activeRoomId: string` - ID de la pièce active
- `onRoomSelect: (roomId: string) => void` - Callback sélection de pièce
- `onRoomAdd: () => void` - Callback ajout de pièce
- `onRoomDelete: (roomId: string) => void` - Callback suppression de pièce
- `onRoomDuplicate: (roomId: string) => void` - Callback duplication de pièce

**Utilisation**:
```tsx
<RoomSelector
  rooms={rooms}
  activeRoomId={activeRoomId}
  onRoomSelect={setActiveRoomId}
  onRoomAdd={addRoom}
  onRoomDelete={deleteRoom}
  onRoomDuplicate={duplicateRoom}
/>
```

**Fonctionnalités**:
- Affichage de toutes les pièces en onglets
- Badge de quantité
- Actions rapides (dupliquer, supprimer)
- Bouton d'ajout de pièce
- Drag & drop pour réorganisation (futur)

---

### 5. **StepNavigation.tsx** ⏭️
**Description**: Boutons de navigation entre les étapes du wizard

**Props**:
- `currentStep: number` - Étape actuelle (1-6)
- `totalSteps: number` - Nombre total d'étapes
- `onNext: () => void` - Callback étape suivante
- `onPrevious: () => void` - Callback étape précédente
- `canGoNext?: boolean` - Validation pour passer à l'étape suivante (défaut: true)
- `canGoPrevious?: boolean` - Possibilité de revenir en arrière (défaut: true)
- `nextLabel?: string` - Texte du bouton suivant (défaut: "Suivant")
- `previousLabel?: string` - Texte du bouton précédent (défaut: "Précédent")

**Utilisation**:
```tsx
<StepNavigation
  currentStep={currentStep}
  totalSteps={6}
  onNext={handleNext}
  onPrevious={handlePrevious}
  canGoNext={isStepValid}
/>
```

**Fonctionnalités**:
- Désactivation automatique du bouton "Précédent" à l'étape 1
- Changement du bouton "Suivant" en "Terminer" à la dernière étape
- Validation conditionnelle
- Style Can-nX avec bouton vert CTA

---

### 6. **ZoomableImage.tsx** 🔍 ✨ NEW
**Description**: Image cliquable avec zoom modal pour visualiser en grand format

**Props**:
- `src: string` - URL de l'image source
- `alt: string` - Texte alternatif pour l'accessibilité
- `caption?: string` - Texte affiché en overlay en bas de l'image (optionnel)
- `className?: string` - Classes CSS additionnelles pour le conteneur (optionnel)
- `hintText?: string` - Texte d'indication de zoom (défaut: "cliquer pour agrandir")

**Utilisation**:
```tsx
<ZoomableImage
  src={finitionsChaudesImg}
  alt="Catalogue Meljac Finitions Chaudes"
  caption="Catalogue Meljac - Teintes chaudes"
/>
```

**Fonctionnalités**:
- Clic pour agrandir l'image dans une modal
- Hover effect avec animation scale et icône zoom
- Overlay avec caption et indication "cliquer pour agrandir"
- Modal responsive 95vw x 95vh
- Fermeture par ESC ou clic extérieur
- Accessibilité ARIA complète
- Scroll automatique si image très grande

**Cas d'usage**:
- Catalogues Meljac de finitions
- Photos de produits détaillées
- Schémas techniques
- Galeries d'exemples

---

## 🔧 Installation

Ces composants sont déjà intégrés dans le configurateur. Pour les utiliser dans un nouveau contexte :

```tsx
import { ConfigPreview } from './components/configurator/shared/ConfigPreview';
import { PreviewControls } from './components/configurator/shared/PreviewControls';
import { ProgressIndicator } from './components/configurator/shared/ProgressIndicator';
import { RoomSelector } from './components/configurator/shared/RoomSelector';
import { StepNavigation } from './components/configurator/shared/StepNavigation';
import { ZoomableImage } from './components/configurator/shared/ZoomableImage';
```

---

## 📦 Dépendances

### Composants shadcn/ui utilisés:
- Button
- Card
- Switch
- Label
- Badge
- Dialog (pour ZoomableImage)

### Icons Lucide React:
- Eye, EyeOff
- Ruler
- Grid
- CheckCircle
- ChevronLeft, ChevronRight
- Plus, Trash2, Copy
- ZoomIn, Maximize2 (pour ZoomableImage)

### Autres:
- motion/react (pour animations)
- TypeScript (pour le typage)

---

## 🎨 Style

Tous les composants suivent la charte graphique Can-nX :
- Couleur principale : `#0CB14B` (vert Can-nX)
- Couleur secondaire : Indigo (`indigo-600`)
- Bordures : Gray 200-300
- Ombres : Subtiles et modernes
- Transitions : 150-300ms ease

---

## 🧪 Tests

Pour tester ces composants :

1. **ConfigPreview**: Vérifier le rendu canvas avec différentes configurations
2. **PreviewControls**: Tester les switches et callbacks
3. **ProgressIndicator**: Naviguer entre les étapes
4. **RoomSelector**: Ajouter/supprimer/sélectionner des pièces
5. **StepNavigation**: Valider la navigation avec validation
6. **ZoomableImage**: Tester hover, clic, modal, keyboard (ESC)

---

## 📚 Documentation Supplémentaire

- **Architecture globale**: `/components/configurator/README.md`
- **Finitions Meljac**: `/components/configurator/MELJAC_FINISHES_OFFICIAL.md`
- **Feature Zoom**: `/components/configurator/IMAGE_ZOOM_FEATURE.md`
- **Guidelines**: `/guidelines/InfiniKnxConfigurator.md`

---

## 🚀 Roadmap

### Améliorations prévues:
- [ ] ConfigPreview: Export SVG en plus de Canvas
- [ ] RoomSelector: Drag & drop pour réorganisation
- [ ] StepNavigation: Sauvegarde automatique
- [ ] ZoomableImage: Zoom progressif (2x, 3x)
- [ ] Tous: Mode sombre complet

---

*Dernière mise à jour: 5 novembre 2025*

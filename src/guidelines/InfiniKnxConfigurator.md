# Configurateur Infini KNX

## Vue d'ensemble

Le configurateur Infini KNX est une application web interactive qui permet aux clients de personnaliser complètement leur bouton rotatif KNX avec gravures sur mesure.

## Accès

Le configurateur est accessible de deux façons:
1. **Depuis la page produit Infini KNX** : `#infinix` → Section "Configurateur" → Bouton "Ouvrir le configurateur"
2. **Accès direct** : `#infinix-configurator`

## Fonctionnalités

### 1. Configuration de la finition
- **Marque**: Meljac, Orsteel, Autre
- **Dégradé de couleur**: 7 options (Violet, Indigo, Bleu, Vert, Jaune, Orange, Rouge)
  - Aperçu en temps réel du dégradé sur la plaque

### 2. Configuration du boîtier
- **Type de boîtier**: EU, UK, US
  - Dimensions automatiquement ajustées selon le type
- **Nombre de modules**: 1 à 4 modules
- **Espacement inter-module**: 0 à 10 mm

### 3. Configuration des boutons
- **Boutons par module**: 1 ou 2 boutons rotatifs par module
- Configuration indépendante pour chaque module (M1, M2, M3, M4)

### 4. Gravures personnalisées
- **Gravure par bouton**: Maximum 18 caractères
- Organisation par module et bouton (M1-B1, M1-B2, M2-B1, etc.)
- **Taille du texte**: Ajustable de 2.4 mm à 5.2 mm

### 5. Options d'affichage
- **Mode sombre**: Bascule entre thème clair et sombre
- **Cotations techniques**: Affiche/masque les dimensions sur l'aperçu
- **Guides**: Affiche/masque les guides de positionnement

### 6. Bord de la plaque
- **Plat**: Bord carré moderne
- **Arrondi**: Bord avec coins arrondis (6mm)

## Aperçu en temps réel

### Canvas interactif
- Aperçu visuel haute résolution avec toutes les configurations
- Mise à jour en temps réel lors des modifications
- Support HiDPI/Retina pour un rendu net
- Affichage des cotations techniques optionnel

### Éléments affichés
- Plaque avec dégradé de couleur sélectionné
- Espacement entre modules (zones sombres)
- Boutons rotatifs avec positionnement précis
- Gravures sous chaque bouton
- Dimensions globales et détaillées (si activé)

## Récapitulatif de configuration

Tableau récapitulatif affichant:
- Finition (marque et dégradé)
- Type de boîtier
- Nombre de modules
- Boutons par module (ex: M1=2 · M2=1 · M3=2)
- Type de bord
- Espacement inter-module
- **Dimensions totales calculées** (largeur × hauteur × épaisseur en mm)
- Taille de gravure

## Génération PDF

### Fonctionnalités PDF (à implémenter)
- Bouton "Aperçu PDF" : Génère un aperçu du PDF avant téléchargement
- Bouton "Télécharger PDF" : Génère et télécharge le PDF de configuration

### Contenu du PDF
1. **En-tête**
   - Logo Can'nX
   - Titre "Infini KNX — Configurateur"
   
2. **Aperçu visuel**
   - Capture haute résolution du canvas avec la configuration

3. **Tableau de configuration**
   - Toutes les options sélectionnées
   - Dimensions calculées
   
4. **Tableau des gravures**
   - Liste organisée de toutes les gravures par module/bouton
   
5. **Commentaires**
   - Zone de texte libre pour notes additionnelles
   
6. **Pied de page**
   - QR code vers can-nx.com
   - Date de génération
   - Copyright Can'nX

## Formules de calcul

### Dimensions de la plaque
```typescript
width = (wPerGang × gangs) + (gap × (gangs - 1))
height = h (selon type de boîtier)
thickness = t (selon type de boîtier)
```

### Types de boîtier
- **EU**: 86mm par module × 86mm hauteur × 3mm épaisseur
- **UK**: 86mm par module × 146mm hauteur × 3mm épaisseur
- **US**: 72mm par module × 115mm hauteur × 3mm épaisseur

### Position des boutons
- **1 bouton**: Centré verticalement (50% hauteur)
- **2 boutons**: 
  - Bouton 1: 36% hauteur
  - Bouton 2: 64% hauteur

## Technologies utilisées

- **React** avec TypeScript
- **Canvas API** pour le rendu graphique
- **Motion/React** pour les animations
- **ShadCN UI** pour les composants
- **jsPDF** (à implémenter) pour la génération PDF
- **qrcode-generator** (à implémenter) pour les QR codes

## Responsive Design

- **Desktop (>1024px)**: Grille 2 colonnes (options | aperçu)
- **Mobile (<1024px)**: Colonne unique empilée

## État et gestion des données

### État principal
```typescript
{
  finBrand: string,
  gradient: string,
  boitier: "EU" | "UK" | "US",
  gangs: number,
  btnsPerGang: { [module: number]: 1 | 2 },
  gapMm: number,
  bord: "Plat" | "Arrondi",
  engravings: { [key: string]: string },
  textSizeMm: number,
  comments: string,
  showTech: boolean,
  guides: boolean,
  darkMode: boolean
}
```

### Nettoyage automatique
- Les gravures sont automatiquement nettoyées lorsque:
  - Le nombre de modules change
  - Le nombre de boutons par module change
- Les clés de gravure invalides sont supprimées

## Améliorations futures possibles

1. **Sauvegarde locale**
   - localStorage pour sauvegarder la configuration
   - Restauration automatique au retour

2. **Partage de configuration**
   - URL avec paramètres encodés
   - Import/Export JSON

3. **Bibliothèque de gravures**
   - Gravures prédéfinies communes
   - Suggestions automatiques

4. **Prévisualisation 3D**
   - Vue 3D du bouton rotatif
   - Rotation interactive

5. **Multi-langue**
   - Interface en FR/EN/DE
   - Gravures multilingues

6. **Intégration e-commerce**
   - Ajout au panier direct depuis le configurateur
   - Calcul de prix automatique

## Support et Documentation

- **Guide vidéo**: Tutoriel YouTube (à créer)
- **Documentation technique**: doc.can-nx.com
- **Support**: Via formulaire de contact Can'nX

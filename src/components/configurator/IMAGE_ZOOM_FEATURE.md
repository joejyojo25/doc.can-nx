# 🔍 Fonctionnalité de Zoom d'Image - Catalogue Meljac

**Date:** 5 novembre 2025  
**Status:** ✅ Implémenté

---

## 📋 Description

Permet aux utilisateurs de cliquer sur les images du catalogue Meljac pour les agrandir dans une modal plein écran, facilitant la consultation des détails des finitions.

---

## 🎯 Objectif

- **Améliorer l'expérience utilisateur** en permettant une meilleure visualisation des catalogues
- **Faciliter la sélection** des finitions en voyant les détails en grand format
- **Interface intuitive** avec indicateurs visuels clairs

---

## 🔧 Implémentation

### Composants Utilisés

- **Dialog** de shadcn/ui pour la modal
- **State Management** avec useState pour gérer l'image zoomée
- **Icons** Lucide React (ZoomIn, Maximize2)

### Code Principal

```typescript
// État pour gérer la modal
const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

// Image cliquable avec hover effect
<div 
  className="relative rounded-lg overflow-hidden border border-gray-200 cursor-pointer group..."
  onClick={() => setZoomedImage({
    src: FINISH_CATEGORY_INFO[activeRoom.finishCategory].image!,
    alt: `Catalogue Meljac - ${FINISH_CATEGORY_INFO[activeRoom.finishCategory].name}`
  })}
>
  {/* Image avec effet de zoom au survol */}
  <img className="w-full h-auto transition-transform group-hover:scale-105" />
  
  {/* Icône de zoom apparaissant au survol */}
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10...">
    <Maximize2 className="w-6 h-6 text-indigo-600" />
  </div>
  
  {/* Label avec indication "cliquer pour agrandir" */}
  <div className="absolute bottom-0...">
    <ZoomIn className="w-3 h-3" />
    Catalogue Meljac - {name}
    <span>(cliquer pour agrandir)</span>
  </div>
</div>

// Modal de zoom
<Dialog open={!!zoomedImage} onOpenChange={(open) => !open && setZoomedImage(null)}>
  <DialogContent className="max-w-6xl w-[95vw] max-h-[95vh]...">
    <DialogHeader>
      <DialogTitle>
        <ZoomIn /> {zoomedImage?.alt}
      </DialogTitle>
    </DialogHeader>
    <div className="overflow-auto max-h-[calc(95vh-80px)]">
      <img src={zoomedImage.src} alt={zoomedImage.alt} />
    </div>
  </DialogContent>
</Dialog>
```

---

## 🎨 Interface Utilisateur

### États Visuels

1. **État Normal**
   - Image du catalogue avec bordure grise
   - Label en bas avec texte blanc sur fond noir semi-transparent

2. **État Hover (Survol)**
   - Bordure devient indigo (`border-indigo-400`)
   - Ombre plus prononcée (`shadow-lg`)
   - Image légèrement agrandie (`scale-105`)
   - Overlay noir semi-transparent (`bg-black/10`)
   - Icône Maximize2 apparaît au centre

3. **État Modal (Zoomé)**
   - Dialog plein écran (95vw x 95vh)
   - Image en grand format avec scroll si nécessaire
   - Titre avec icône ZoomIn
   - Instructions de fermeture en bas

---

## 🔑 Indicateurs Visuels

| Élément | Indicateur | Message |
|---------|-----------|---------|
| **Curseur** | `cursor-pointer` | Indique que l'image est cliquable |
| **Texte** | "(cliquer pour agrandir)" | Instruction explicite |
| **Icône** | `<ZoomIn />` en bas | Symbole universel de zoom |
| **Hover Icon** | `<Maximize2 />` au centre | Confirmation visuelle au survol |
| **Animation** | Transition de scale | Feedback visuel interactif |

---

## 📱 Responsive

- **Desktop**: Modal 95% de la largeur/hauteur de l'écran
- **Tablet**: Même comportement avec adaptation automatique
- **Mobile**: Dialog responsive avec scroll vertical si nécessaire

---

## ⌨️ Accessibilité

- **Clavier**: ESC pour fermer la modal
- **Click Outside**: Cliquer en dehors ferme la modal
- **Alt Text**: Description complète de l'image
- **ARIA**: Dialog géré par shadcn/ui avec ARIA appropriés

---

## 📊 Catalogues Concernés

| Catégorie | Image | Affichage Zoom |
|-----------|-------|----------------|
| **Teintes chaudes** | finitionsChaudesImg | ✅ Oui |
| **Teintes froides** | finitionsFroidesImg | ✅ Oui |
| **Teintes spéciales** | null | ❌ Non (pas d'image unique) |

---

## 🧪 Tests à Effectuer

### Fonctionnels
- [ ] Clic sur image ouvre la modal
- [ ] Image s'affiche en grand format
- [ ] Clic en dehors de la modal la ferme
- [ ] ESC ferme la modal
- [ ] Plusieurs ouvertures/fermetures consécutives

### Visuels
- [ ] Hover effect fonctionne (scale, border, icon)
- [ ] Transition fluide de l'animation
- [ ] Image nette en grand format
- [ ] Scroll fonctionne si image très haute
- [ ] Responsive sur mobile/tablet

### Edge Cases
- [ ] Changement de catégorie pendant que modal ouverte
- [ ] Navigation rapide entre catégories
- [ ] Performance avec images HD

---

## 🚀 Améliorations Futures

### Court terme
- [ ] Ajouter bouton de téléchargement de l'image
- [ ] Zoom progressif (2x, 3x, 4x)
- [ ] Détection de double-clic pour zoom rapide

### Moyen terme
- [ ] Slider pour comparer plusieurs catalogues
- [ ] Annotations sur l'image pour pointer des détails
- [ ] Partage d'image par email/link

### Long terme
- [ ] Visualisation 3D des plaques avec finition
- [ ] AR (Réalité Augmentée) pour voir la finition chez soi
- [ ] Comparaison côte à côte de deux finitions

---

## 📁 Fichiers Modifiés

| Fichier | Modification |
|---------|--------------|
| `/pages/InfiniKnxConfiguratorPage.tsx` | Ajout du state, dialog et événements |

### Imports Ajoutés

```typescript
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { ZoomIn, Maximize2 } from 'lucide-react';
```

### State Ajouté

```typescript
const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);
```

---

## 💡 Notes Techniques

1. **Pourquoi Dialog au lieu de custom modal?**
   - Gestion ARIA automatique
   - Animations intégrées
   - Gestion du focus trap
   - Compatibilité avec shadcn/ui

2. **Pourquoi state avec src + alt?**
   - Flexibilité pour ajouter d'autres images zoomables
   - Séparation des préoccupations
   - Facilite l'extension future

3. **Pourquoi 95vw/95vh au lieu de 100%?**
   - Meilleure UX avec un peu d'espace autour
   - Plus facile de voir qu'il faut cliquer dehors pour fermer
   - Évite le plein écran complet qui peut être oppressant

---

## 🎓 Bonnes Pratiques Appliquées

✅ **Progressive Enhancement**: Image reste visible même sans JS  
✅ **Accessibility**: Keyboard navigation, ARIA, alt text  
✅ **Performance**: Lazy loading naturel avec Dialog  
✅ **UX**: Indicateurs clairs, feedback visuel instantané  
✅ **Mobile-First**: Responsive design intégré  
✅ **Semantic HTML**: Structure claire et logique  

---

*Document créé le 5 novembre 2025*  
*Auteur: Can-nX Technical Team*  
*Feature: Image Zoom Modal for Meljac Catalogs*

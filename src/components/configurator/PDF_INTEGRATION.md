# Intégration de la Génération PDF

## Statut Actuel

La structure de base pour la génération PDF est en place dans `Step6_Summary.tsx`, mais la logique complète de rendu canvas n'est pas encore intégrée.

## Ce qui doit être fait

### 1. Créer un service PDF réutilisable

Créer `/components/configurator/services/pdfGenerator.ts` qui contient :

```typescript
import jsPDF from 'jspdf';
import { RoomConfig } from '../hooks/useConfiguratorState';

export async function generateConfigurationPDF(
  projectName: string,
  comments: string,
  rooms: RoomConfig[],
  options?: { preview?: boolean }
): Promise<string | void> {
  // Logique de génération PDF
}
```

### 2. Migrer la logique canvas depuis Version 1

Depuis `/pages/InfiniKnxConfiguratorPage.tsx`, migrer :

#### A. Fonction `plateSize()`
```typescript
function plateSize(boitier: string, gangs: number, gapMm: number) {
  const info = BOITIERS[boitier];
  const w = gangs * info.wPerGang + (gangs - 1) * gapMm;
  const h = info.h;
  const t = info.t;
  return { w, h, t, wPerGang: info.wPerGang };
}
```

#### B. Fonction `drawRoundedRect()`
```typescript
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  // Dessine un rectangle avec coins arrondis
}
```

#### C. Fonction `generatePDF()`
Les sections importantes :
- Logo Can-nX en haut de chaque page
- En-tête avec titre et info projet
- Boucle sur chaque pièce pour générer une page
- Rendu canvas pour chaque configuration
- Dessiner la plaque avec finition
- Dessiner les espaces entre modules
- Dessiner les vis (selon configuration)
- Dessiner les boutons
- Dessiner les gravures avec positionnement
- Table des spécifications
- Page de commentaires si présents

### 3. Créer un composant Canvas de prévisualisation

Créer `/components/configurator/shared/ConfigPreview.tsx` :

```typescript
interface ConfigPreviewProps {
  room: RoomConfig;
  width?: number;
  height?: number;
  showDimensions?: boolean;
}

export function ConfigPreview({ room, width = 600, height = 400 }: ConfigPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // Utiliser la même logique de rendu que pour le PDF
    drawConfiguration(ctx, room, width, height);
  }, [room, width, height]);
  
  return <canvas ref={canvasRef} width={width} height={height} />;
}
```

### 4. Intégrer dans Step6_Summary

Remplacer le placeholder `handleGeneratePDF` :

```typescript
const handleGeneratePDF = async (preview = false) => {
  setIsGenerating(true);
  try {
    await generateConfigurationPDF(projectName, comments, rooms, { preview });
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Erreur lors de la génération du PDF');
  } finally {
    setIsGenerating(false);
  }
};
```

### 5. Ajouter un aperçu en temps réel (optionnel)

Dans les Steps 3, 4, 5, ajouter un `<ConfigPreview>` pour voir le rendu en direct :

```typescript
<div className="mt-6">
  <h3 className="text-sm font-semibold mb-2">Aperçu</h3>
  <ConfigPreview room={activeRoom} width={400} height={300} />
</div>
```

## Priorités

1. **Haute** : Migrer `generatePDF()` complet
2. **Moyenne** : Créer `ConfigPreview` réutilisable
3. **Basse** : Ajouter aperçu en temps réel dans chaque étape

## Notes Importantes

- Le canvas actuel dans V1 est dans `InfiniKnxConfiguratorPage.tsx` ligne 867+
- La génération PDF commence ligne 623+
- Les constantes `BOITIERS` et `MELJAC_FINISHES` sont déjà dans `/components/configurator/constants.ts`
- Le logo Can-nX est à `https://can-nx.com/wp-content/uploads/2022/09/logocan.png.webp`

## Exemple de Migration

### Avant (V1)
```typescript
// Dans InfiniKnxConfiguratorPage.tsx
const generatePDF = (preview: boolean) => {
  // 240 lignes de code...
}
```

### Après (V2)
```typescript
// Dans services/pdfGenerator.ts
export async function generateConfigurationPDF(...) {
  // Même logique, mais isolée et réutilisable
}

// Dans Step6_Summary.tsx
import { generateConfigurationPDF } from '../services/pdfGenerator';

const handleGeneratePDF = () => {
  await generateConfigurationPDF(projectName, comments, rooms);
};
```

## Avantages de cette approche

- ✅ Code réutilisable entre V1 et V2
- ✅ Plus facile à tester
- ✅ Séparation des responsabilités
- ✅ Maintenance simplifiée
- ✅ Possibilité d'ajouter d'autres formats d'export (JSON, CSV, etc.)

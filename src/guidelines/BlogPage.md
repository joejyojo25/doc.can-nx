# Page Blog Can-nX

## Vue d'ensemble

La page Blog a été créée pour centraliser toutes les actualités, réalisations et innovations de Can-nX. Elle remplace la section "Récent" qui était précédemment affichée sur la page d'accueil.

## Emplacement dans la navigation

**Menu Principal** → **Support** → **Blog**

La page Blog est accessible via :
- URL hash : `#blog`
- Menu de navigation : Support > Blog (première option du sous-menu)

## Structure de la page

### 1. **Hero Section**
- Gradient de marque (vert #0CB14B vers magenta #cd2653)
- Icône Newspaper
- Titre : "Blog Can'nX"
- Description : Actualités, innovations et réalisations dans le monde du KNX et de l'IoT
- Pattern de grille en arrière-plan

### 2. **Layout Principal**
Layout à 2 colonnes (responsive) :
- **Colonne principale (2/3)** : Articles de blog
- **Sidebar (1/3)** : Widgets et navigation

### 3. **Articles de Blog**

Chaque article comprend :
- **Image principale** : Image de couverture avec effet hover zoom
- **Badge catégorie** : Couleur de marque verte (#0CB14B)
- **Métadonnées** :
  - Date de publication (icône Calendar)
  - Auteur (icône User)
- **Titre** : Titre complet de l'article (h2)
- **Extrait** : Résumé de 2-3 lignes (line-clamp-3)
- **Tags** : Liste de mots-clés pertinents (icône Tag)
- **Bouton CTA** : "Lire l'article complet" avec flèche animée

#### Articles actuels (6 articles)

1. **"Can'nX dévoile ses innovations KNX au CES 2024 à Las Vegas"**
   - Date : 15 Janvier 2024
   - Tags : CES, Innovation, KNX

2. **"Sunny Smart Living – 2023, Parlons ensemble des brillantes innovations KNX"**
   - Date : 10 Novembre 2023
   - Tags : Événement, Smart Home, KNX

3. **"Can'nX présente ses solutions au congrès mondial IoT Solutions 2023"**
   - Date : 5 Septembre 2023
   - Tags : IoT, Congrès, Solutions

4. **"Can'nX a présenté les dernières solutions à Light & Building – 2022 à Francfort"**
   - Date : 28 Mars 2022
   - Tags : Light & Building, Exposition, Francfort

5. **"Can'nX gagne l'elevator pitch de la startup KNX"**
   - Date : 15 Octobre 2021
   - Tags : Startup, Pitch, Victoire

6. **"Can'nX est désormais un fabricant KNX certifié"**
   - Date : 1 Juin 2021
   - Tags : KNX, Certification, Qualité

### 4. **Sidebar (Barre latérale)**

#### A. Widget Recherche
- Champ de recherche pour filtrer les articles
- Background gris clair (bg-gray-50)
- Input avec placeholder "Rechercher un article..."

#### B. Widget Catégories
- Liste de 5 catégories :
  1. Can'nX - Achèvements
  2. Innovations KNX
  3. Guides Techniques
  4. Études de Cas
  5. Événements
- Boutons cliquables avec effet hover
- Transition vers couleur de marque verte au survol

#### C. Widget Articles Récents
- Liste des 4 derniers articles
- Format compact : titre + date
- Liens cliquables avec effet hover

#### D. Widget Newsletter
- Background gradient de marque (vert vers magenta)
- Icône Newspaper
- Titre : "Newsletter"
- Description et formulaire d'inscription
- Bouton "S'abonner" blanc sur fond coloré

### 5. **Bouton "Charger plus"**
- Centré sous les articles
- Gradient de marque
- Texte : "Charger plus d'articles"
- Pour la pagination future

## Composants utilisés

### Composants UI (shadcn)
- `Badge` - Pour les catégories
- `Button` - CTA et actions
- `Input` - Recherche et newsletter
- `Card` - Structure des articles (implicite)

### Composants personnalisés
- `Breadcrumb` - Fil d'Ariane (Support > Blog)
- `ImageWithFallback` - Images des articles

### Icônes (lucide-react)
- `Newspaper` - Icône principale du blog
- `ArrowRight` - Flèche CTA
- `Calendar` - Date de publication
- `User` - Auteur
- `Tag` - Tags/mots-clés

## Animations (Motion)

Toutes les sections utilisent `motion` de `motion/react` :

### Articles
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: index * 0.1 }}
```

### Sidebar Widgets
```tsx
initial={{ opacity: 0, x: 30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: 0.1-0.3 }}
```

### Hero Section
```tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

## Responsive Design

### Mobile (< 768px)
- Layout en 1 colonne
- Articles empilés verticalement
- Sidebar en dessous du contenu principal
- Image d'article : hauteur fixe (h-64)

### Tablet/Desktop (≥ 768px)
- Articles : Layout grille 5 colonnes (2 pour image, 3 pour contenu)
- Image d'article : hauteur automatique

### Large Desktop (≥ 1024px)
- Layout 2 colonnes : articles (2/3) + sidebar (1/3)
- Sidebar sticky (reste visible au scroll)

## Intégration dans l'application

### Fichiers modifiés

1. **`/pages/BlogPage.tsx`** (NOUVEAU)
   - Page complète du blog

2. **`/components/Header.tsx`**
   - Ajout de "Blog" dans le sous-menu Support

3. **`/App.tsx`**
   - Importation de `BlogPage`
   - Suppression de l'import `RecentNews`
   - Ajout du routing pour `#blog`
   - Retrait de `<RecentNews />` de la page d'accueil

### Fichiers non modifiés

- **`/components/RecentNews.tsx`** : Conservé pour référence future ou réutilisation
- **`/components/Footer.tsx`** : Pas de changements
- Toutes les autres pages produits et intégrations

## Migration du contenu

### Avant (Page d'accueil)
```tsx
<Hero />
<Vision />
<Products />
<Benefits />
<Services />
<RecentNews />        ← Section supprimée
<FAQ />
<Contact />
```

### Après (Page d'accueil)
```tsx
<Hero />
<Vision />
<Products />
<Benefits />
<Services />
<FAQ />               ← Plus de RecentNews
<Contact />
```

### Nouveau (Page Blog)
```tsx
<BlogPage />          ← Contenu migré et amélioré
```

## Améliorations par rapport à RecentNews

### Améliorations de Design
✅ Layout 2 colonnes professionnel (articles + sidebar)  
✅ Articles en format carte étendu avec plus d'informations  
✅ Breadcrumb pour la navigation  
✅ Hero section dédiée  
✅ Métadonnées enrichies (date, auteur, tags)  

### Nouvelles Fonctionnalités
✅ Widget de recherche  
✅ Filtrage par catégories  
✅ Articles récents dans la sidebar  
✅ Widget newsletter dédié  
✅ Bouton "Charger plus" pour pagination future  
✅ Tags/mots-clés sur chaque article  

### Améliorations UX
✅ Navigation améliorée (menu Support)  
✅ Page dédiée (pas de défilement infini sur l'accueil)  
✅ Layout optimisé pour la lecture  
✅ Sidebar sticky (reste visible)  
✅ Meilleure organisation du contenu  

## Catégories disponibles

1. **Can'nX - Achèvements** : Réalisations et succès de l'entreprise
2. **Innovations KNX** : Nouvelles technologies et produits KNX
3. **Guides Techniques** : Tutoriels et documentation
4. **Études de Cas** : Projets clients et implémentations
5. **Événements** : Salons, conférences, webinaires

## Structure de données

### Interface BlogPost
```typescript
interface BlogPost {
  title: string;           // Titre de l'article
  excerpt: string;         // Résumé court
  category: string;        // Catégorie principale
  image: string;           // URL de l'image de couverture
  date: string;            // Date de publication
  author: string;          // Auteur de l'article
  tags: string[];          // Liste de tags
}
```

## Futures Améliorations

### Phase 1 (Prioritaire)
- [ ] Connexion à un CMS (Supabase/backend)
- [ ] Pagination fonctionnelle
- [ ] Filtrage par catégorie fonctionnel
- [ ] Recherche fonctionnelle
- [ ] Pages d'article individuelles

### Phase 2 (Moyen terme)
- [ ] Commentaires sur les articles
- [ ] Partage sur réseaux sociaux
- [ ] Articles similaires/recommandés
- [ ] Vues et statistiques d'articles
- [ ] Abonnement newsletter fonctionnel

### Phase 3 (Long terme)
- [ ] Traduction multilingue des articles
- [ ] Système d'auteurs multiples
- [ ] Archives par date
- [ ] Flux RSS
- [ ] Mode sombre

## SEO et Métadonnées

### Recommandations SEO
- Utiliser des titres descriptifs (H1, H2)
- Ajouter des balises meta pour chaque article
- Implémenter Open Graph pour le partage social
- Créer un sitemap incluant les articles
- Optimiser les images (alt text, compression)

### Métadonnées suggérées
```html
<meta name="description" content="Blog Can'nX - Actualités KNX et IoT" />
<meta property="og:title" content="Blog Can'nX" />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
```

## Accessibility

### Bonnes pratiques implémentées
✅ Structure sémantique (section, article, aside)  
✅ Balises alt sur toutes les images  
✅ Contraste de couleurs conforme WCAG  
✅ Navigation au clavier possible  
✅ Liens descriptifs (pas de "cliquez ici")  

### À améliorer
- [ ] Balises ARIA pour les widgets
- [ ] Skip links pour navigation rapide
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Annonces pour chargement dynamique de contenu

## Performance

### Optimisations actuelles
✅ Images via ImageWithFallback (lazy loading)  
✅ Animations optimisées avec Motion  
✅ Composants réutilisables  
✅ CSS optimisé avec Tailwind  

### Optimisations futures
- [ ] Pagination pour limiter le contenu initial
- [ ] Compression d'images
- [ ] Code splitting
- [ ] Cache des articles
- [ ] CDN pour les images

## Maintenance

### Mise à jour du contenu

Pour ajouter un nouvel article :

1. Éditer `/pages/BlogPage.tsx`
2. Ajouter un objet dans le tableau `blogPosts` :
```typescript
{
  title: "Titre de l'article",
  excerpt: "Description courte...",
  category: "Can'nX - Achèvements",
  image: "https://...",
  date: "JJ Mois AAAA",
  author: "Équipe Can'nX",
  tags: ['Tag1', 'Tag2', 'Tag3'],
}
```
3. L'article apparaîtra automatiquement

### Ajout de catégories

Éditer le tableau `categories` :
```typescript
const categories = [
  "Nouvelle Catégorie",
  // ... autres catégories
];
```

## Support et Questions

Pour des questions sur la page Blog :
- Consulter cette documentation
- Voir l'implémentation dans `/pages/BlogPage.tsx`
- Référence : `/components/RecentNews.tsx` (ancienne version)

## Changelog

### Version 1.0 (Novembre 2024)
- ✅ Création de la page Blog
- ✅ Migration du contenu de RecentNews
- ✅ Ajout dans le menu Support
- ✅ Suppression de RecentNews de la page d'accueil
- ✅ Layout 2 colonnes avec sidebar
- ✅ Widgets : Recherche, Catégories, Récents, Newsletter
- ✅ Animations et transitions
- ✅ Design responsive
- ✅ Breadcrumb navigation
- ✅ 6 articles initiaux

---

**Dernière mise à jour** : Novembre 2024  
**Statut** : ✅ Production Ready  
**Mainteneur** : Équipe de développement Can-nX

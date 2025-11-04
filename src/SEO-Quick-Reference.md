# 🚀 SEO Quick Reference - Can-nX

## 📦 Fichiers Principaux

```
/components/SEOHead.tsx          → Composant SEO principal
/config/seoConfig.ts             → Configuration de toutes les pages
/hooks/usePageSEO.ts             → Hook pour utilisation facile
/public/robots.txt               → Directives pour crawlers
/public/sitemap.xml              → Liste de toutes les URLs
```

## 🎯 Usage Rapide

### Ajouter SEO à une nouvelle page

```tsx
// 1. Importer
import { SEOHead } from './components/SEOHead';
import { getSEOConfig } from './config/seoConfig';

// 2. Utiliser dans le composant
function MaNouvellePage() {
  return (
    <div>
      <SEOHead {...getSEOConfig('page-id')} />
      <main>{/* contenu */}</main>
    </div>
  );
}
```

### Ajouter une nouvelle configuration

```tsx
// Dans /config/seoConfig.ts, ajouter :
export const seoConfig = {
  // ... configs existantes
  'nouvelle-page': {
    title: 'Titre de la Page',
    description: 'Description SEO',
    canonical: 'https://can-nx.com/nouvelle-page',
    keywords: ['mot1', 'mot2'],
  },
};
```

## 🔑 Propriétés SEOHead

| Propriété | Type | Requis | Description |
|-----------|------|--------|-------------|
| `title` | string | ✅ | Titre de la page (< 60 car.) |
| `description` | string | ✅ | Meta description (< 160 car.) |
| `canonical` | string | ⚠️ | URL canonique absolue |
| `ogType` | string | ❌ | 'website', 'product', 'article' |
| `ogImage` | string | ❌ | URL image OG (1200x630px) |
| `keywords` | string[] | ❌ | Tableau de mots-clés |
| `lang` | string | ❌ | 'fr', 'en', 'de' (défaut: 'fr') |
| `noindex` | boolean | ❌ | Ne pas indexer (défaut: false) |
| `schema` | object | ❌ | JSON-LD Schema.org |

## 📝 Templates Rapides

### Page Produit
```tsx
<SEOHead
  title="Nom Produit - Tagline"
  description="Description courte du produit"
  canonical="https://can-nx.com/produit"
  ogType="product"
  keywords={['knx', 'produit', 'automation']}
  schema={{
    '@type': 'Product',
    name: 'Nom Produit',
    // ...
  }}
/>
```

### Article de Blog
```tsx
<SEOHead
  title="Titre Article"
  description="Résumé de l'article"
  canonical="https://can-nx.com/blog/slug"
  ogType="article"
  publishedTime="2025-01-04"
  keywords={['sujet1', 'sujet2']}
/>
```

### Page Standard
```tsx
<SEOHead
  title="Titre Page"
  description="Description page"
  canonical="https://can-nx.com/page"
  keywords={['mot1', 'mot2']}
/>
```

## 🎨 Images Open Graph

### Spécifications
- **Taille:** 1200 x 630 pixels
- **Format:** JPG ou PNG
- **Poids:** < 1 MB (idéalement < 300 KB)
- **Ratio:** 1.91:1

### Template recommandé
```
┌─────────────────────────────────┐
│  [Logo Can-nX]                  │
│                                 │
│  [Image Produit]                │
│                                 │
│  Nom du Produit                 │
│  Tagline court                  │
│                                 │
│  can-nx.com                     │
└─────────────────────────────────┘
```

## 🔍 Mots-clés par Page

### Produits
- **Kloud'nX:** routeur knx, knx iot, accès distant knx
- **Pool'nX:** piscine knx, poolcop knx, klereo knx
- **Emergy'nX:** hems knx, gestion énergie knx
- **Infini KNX:** bouton knx, commande rotative knx
- **Speak'nX:** audio knx, diffuseur knx, bluetooth knx
- **Mod'nX:** module entrées knx, interface knx

### Généraux
- KNX, IoT, domotique
- building automation
- bâtiment intelligent
- smart building

## 🧪 Tests Essentiels

### Avant chaque déploiement
```bash
# 1. Vérifier Schema.org
https://validator.schema.org/

# 2. Tester Rich Results
https://search.google.com/test/rich-results

# 3. Vérifier Open Graph
https://developers.facebook.com/tools/debug/

# 4. Performance
https://pagespeed.web.dev/
```

## ⚠️ Checklist Rapide

### Pour chaque nouvelle page
- [ ] Titre unique (< 60 caractères)
- [ ] Description unique (< 160 caractères)
- [ ] URL canonique absolue
- [ ] 3-5 mots-clés pertinents
- [ ] Image OG si page importante
- [ ] Schema.org approprié
- [ ] Test Rich Results
- [ ] Ajout au sitemap.xml

### Avant production
- [ ] Remplacer `https://can-nx.com` par vrai domaine
- [ ] Remplacer `@cannx` par vrai Twitter handle
- [ ] Créer images OG (1200x630px)
- [ ] Mettre à jour robots.txt
- [ ] Mettre à jour sitemap.xml
- [ ] Configurer Google Search Console
- [ ] Configurer Google Analytics

## 🚨 Erreurs Courantes à Éviter

### ❌ À NE PAS FAIRE
```tsx
// Titre trop long
title="Mon Super Produit Incroyable pour l'Automatisation des Bâtiments avec KNX"

// URL relative
canonical="/produit"

// Pas de description
<SEOHead title="Produit" />

// Mots-clés sur-optimisés
keywords={['knx', 'knx knx', 'meilleur knx']}
```

### ✅ À FAIRE
```tsx
// Titre concis
title="Mon Produit KNX - Automatisation Bâtiment"

// URL absolue
canonical="https://can-nx.com/produit"

// Toujours une description
<SEOHead 
  title="Produit"
  description="Description courte et pertinente"
/>

// Mots-clés naturels
keywords={['knx', 'automatisation', 'bâtiment']}
```

## 📊 Métriques à Suivre

### Hebdomadaire
- Positions sur mots-clés top 10
- Erreurs d'indexation (Search Console)
- Trafic organique

### Mensuel
- Nouveaux backlinks
- Core Web Vitals
- Taux de conversion organique
- Pages les plus visitées

### Trimestriel
- Audit SEO complet
- Analyse concurrence
- Mise à jour contenu ancien

## 🔄 Workflow SEO

### Pour nouveau contenu
1. **Recherche de mots-clés** (15 min)
   - Identifier mot-clé principal
   - 3-5 mots-clés secondaires
   
2. **Rédaction** (2-4h)
   - Titre accrocheur avec mot-clé
   - Introduction engageante
   - Structure H2/H3 claire
   - 1000-2000 mots minimum
   
3. **Optimisation technique** (30 min)
   - Configurer SEOHead
   - Ajouter Schema.org
   - Optimiser images (alt, compression)
   - Liens internes
   
4. **Validation** (15 min)
   - Test Rich Results
   - Vérifier Open Graph
   - PageSpeed test
   
5. **Publication** (15 min)
   - Publier page
   - Ajouter au sitemap
   - Soumettre à Search Console
   
6. **Promotion** (variable)
   - Partager sur réseaux sociaux
   - Newsletter si applicable
   - Contacter pour backlinks

## 💡 Tips & Astuces

### Rédaction SEO
- ✅ 1 mot-clé principal par page
- ✅ Mot-clé dans les 100 premiers mots
- ✅ Variantes et synonymes naturels
- ✅ Répondre aux questions des users
- ✅ Structure claire avec sous-titres

### Technique
- ✅ URLs courtes et descriptives
- ✅ Images < 200 KB
- ✅ Alt texts descriptifs
- ✅ Liens internes contextuels
- ✅ Mobile-first

### Contenu
- ✅ Publier régulièrement
- ✅ Mettre à jour contenu ancien
- ✅ Répondre aux commentaires
- ✅ Créer du contenu evergreen
- ✅ Études de cas et témoignages

## 📞 Aide Rapide

**Problème ?** Vérifier dans l'ordre :

1. **Erreur Schema.org**
   → Tester sur validator.schema.org
   → Vérifier la syntaxe JSON

2. **OG Image ne s'affiche pas**
   → Vérifier URL absolue
   → Taille 1200x630px
   → < 1 MB

3. **Page non indexée**
   → Vérifier robots.txt
   → Pas de balise noindex
   → Soumettre à Search Console

4. **Mauvais positionnement**
   → Analyser concurrence
   → Améliorer contenu
   → Obtenir backlinks

## 📚 Documentation Complète

- **Guide complet:** `/guidelines/SEO-Implementation.md`
- **Checklist lancement:** `/guidelines/SEO-Launch-Checklist.md`
- **Roadmap future:** `/guidelines/SEO-Future-Improvements.md`
- **Exemples code:** `/examples/SEO-Usage-Examples.tsx`
- **README principal:** `/SEO-README.md`

---

**🎯 Besoin d'aide rapide ?**
1. Consulter cette page
2. Voir exemples dans `/examples/`
3. Lire la doc complète
4. Tester avec outils Google

**Dernière mise à jour:** 4 janvier 2025

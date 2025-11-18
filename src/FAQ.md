# ❓ FAQ - Questions Fréquentes

Réponses aux questions les plus courantes sur le site Can-nX.

---

## 🚀 Démarrage

### Q: Par où commencer ?

**R:** Suivez cet ordre :
1. Lisez le [README.md](./README.md)
2. Configuration rapide : [QUICK_SETUP.md](./QUICK_SETUP.md) (5 min)
3. Ou configuration complète : [NEXT_STEPS.md](./NEXT_STEPS.md) (37 min)

### Q: Dois-je créer un compte Supabase ?

**R:** Oui, Supabase est **obligatoire** pour l'intégration Mailchimp sécurisée. Le free tier est suffisant.

### Q: Dois-je avoir un compte Mailchimp payant ?

**R:** Non, le **free tier Mailchimp** (500 contacts, 1000 emails/mois) est suffisant pour démarrer.

---

## 🔐 Sécurité

### Q: Pourquoi ne pas appeler l'API Mailchimp directement depuis le frontend ?

**R:** Pour la **sécurité** ! Si vous appelez Mailchimp directement depuis le frontend :
- ❌ Votre clé API sera visible dans le code source
- ❌ N'importe qui peut la voler et utiliser votre compte
- ❌ Risque de spam et d'abus

Avec Supabase Edge Functions :
- ✅ La clé API reste secrète côté serveur
- ✅ Sécurité maximale
- ✅ Conformité RGPD

### Q: Mes variables d'environnement sont-elles sécurisées ?

**R:** Oui, si configurées correctement :

| Variable | Où ? | Sécurisée ? | Pourquoi ? |
|----------|------|-------------|-----------|
| `VITE_SUPABASE_URL` | `.env` frontend | ✅ Oui | Clé publique |
| `VITE_SUPABASE_ANON_KEY` | `.env` frontend | ✅ Oui | Clé publique |
| `MAILCHIMP_API_KEY` | Supabase Secrets | 🔒 Très sécurisée | Jamais exposée |
| `MAILCHIMP_LIST_ID` | Supabase Secrets | 🔒 Très sécurisée | Jamais exposée |

### Q: Le fichier `.env` doit-il être commité dans Git ?

**R:** **NON, JAMAIS !** Le `.env` est dans `.gitignore`. Commitez uniquement `.env.example`.

---

## 📧 Mailchimp

### Q: Qu'est-ce qu'un "Merge Field" ?

**R:** C'est un champ personnalisé dans Mailchimp pour stocker des informations sur vos contacts (entreprise, téléphone, etc.).

### Q: Combien de Merge Fields dois-je créer ?

**R:** 7 champs personnalisés :
- COMPANY
- PHONE
- COUNTRY
- POSTAL
- PROFESSION
- PRODUCT
- MESSAGE

(FNAME et LNAME existent déjà par défaut)

### Q: Erreur "Member Exists" - c'est grave ?

**R:** Non, ce n'est **pas une erreur** ! Cela signifie que l'email existe déjà dans Mailchimp. Le système met à jour les informations.

### Q: Les tags sont appliqués automatiquement ?

**R:** Oui, chaque contact reçoit :
- `Website Contact`
- `Can-nX Lead`
- Le tag de profession (ex: `Architecte`)

### Q: Comment configurer un email de bienvenue automatique ?

**R:** Dans Mailchimp :
1. **Automations** → **Create**
2. Trigger : **Tag is added** → `Website Contact`
3. Créez votre email de bienvenue
4. Activez l'automation

---

## ☁️ Supabase

### Q: Qu'est-ce qu'une Edge Function ?

**R:** C'est une **fonction serverless** qui s'exécute sur les serveurs Supabase (comme une mini-API). Elle garde vos secrets sécurisés.

### Q: Combien coûte Supabase ?

**R:** Le **free tier** est gratuit et inclut :
- 500k Edge Function invocations/mois
- 2GB Database
- Largement suffisant pour Can-nX

### Q: Comment voir les logs de ma Edge Function ?

**R:** Deux méthodes :

**Dashboard** :
1. [Supabase Dashboard](https://supabase.com/dashboard)
2. Votre projet → **Edge Functions** → `mailchimp-subscribe` → **Logs**

**CLI** :
```bash
supabase functions logs mailchimp-subscribe --tail 50
```

### Q: Puis-je tester la Edge Function localement ?

**R:** Oui !
```bash
supabase functions serve mailchimp-subscribe
```

Puis appelez `http://localhost:54321/functions/v1/mailchimp-subscribe`

### Q: Comment redéployer après une modification ?

**R:**
```bash
supabase functions deploy mailchimp-subscribe --no-verify-jwt
```

---

## 🐛 Debugging

### Q: Le formulaire ne fonctionne pas, que faire ?

**R:** Checklist de debug :

1. **Vérifier les logs Supabase** :
   ```bash
   supabase functions logs mailchimp-subscribe --tail 50
   ```

2. **Vérifier les secrets** :
   ```bash
   supabase secrets list
   ```
   Devrait afficher : `MAILCHIMP_API_KEY`, `MAILCHIMP_DC`, `MAILCHIMP_LIST_ID`

3. **Tester avec curl** :
   ```bash
   ./scripts/test-mailchimp.sh
   ```

4. **Vérifier la console du navigateur** :
   F12 → Console → Erreurs ?

### Q: Erreur "Project not linked"

**R:**
```bash
supabase link --project-ref <votre-project-id>
```

Trouvez le Project ID dans Supabase Dashboard → Settings → General

### Q: Erreur "Missing environment variable"

**R:** Vérifiez que `.env` existe et contient :
```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

Redémarrez le serveur de dev après modification :
```bash
npm run dev
```

### Q: Erreur CORS

**R:** La Edge Function gère CORS automatiquement. Si vous avez une erreur :
1. Vérifiez que la fonction est bien déployée : `supabase functions list`
2. Vérifiez l'URL de la fonction
3. Vérifiez les logs Supabase

---

## 🚀 Déploiement

### Q: Sur quelle plateforme déployer ?

**R:** Recommandations :
1. **Vercel** ⭐ (Recommandé) - Déploiement automatique, gratuit
2. **Netlify** - Alternative excellente
3. Tout hébergeur supportant les SPA React

### Q: Comment configurer les variables d'environnement en production ?

**R:**

**Vercel** :
1. Dashboard Vercel → Votre projet → **Settings** → **Environment Variables**
2. Ajoutez :
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

**Netlify** :
1. Site settings → **Build & deploy** → **Environment variables**
2. Ajoutez les mêmes variables

### Q: Les secrets Mailchimp doivent-ils être configurés sur Vercel/Netlify ?

**R:** **NON !** Les secrets Mailchimp sont configurés **uniquement dans Supabase** :
```bash
supabase secrets set MAILCHIMP_API_KEY=xxx
```

Ils ne sont jamais dans votre code frontend.

### Q: Comment déployer sur Vercel ?

**R:**
1. Connectez votre repo GitHub à Vercel
2. Configurez les variables d'environnement
3. Déployez !

Vercel détecte automatiquement Vite et configure tout.

---

## 📊 SEO

### Q: Le site est-il optimisé SEO ?

**R:** Oui ! SEO complet :
- ✅ Meta tags dynamiques (titre, description)
- ✅ Sitemap.xml (`/public/sitemap.xml`)
- ✅ Robots.txt (`/public/robots.txt`)
- ✅ Structured data (JSON-LD)
- ✅ Open Graph (partage réseaux sociaux)

Voir : [SEO-README.md](./SEO-README.md)

### Q: Comment soumettre le site à Google ?

**R:** Suivez le guide : [guidelines/SEO-Submission-Guide.md](./guidelines/SEO-Submission-Guide.md)

Résumé :
1. [Google Search Console](https://search.google.com/search-console)
2. Ajoutez votre propriété
3. Soumettez le sitemap : `https://can-nx.com/sitemap.xml`

---

## 🎨 Design & Composants

### Q: Quelle est la couleur principale de Can-nX ?

**R:** Vert Can-nX : `#0CB14B`

Tous les boutons CTA utilisent :
```tsx
className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
```

### Q: Où trouver les composants UI ?

**R:** Dans `/components/ui/` - Composants **ShadCN UI** prêts à l'emploi :
- Button, Input, Select
- Dialog, Sheet, Drawer
- Card, Badge, Alert
- Et 30+ autres composants

### Q: Comment utiliser un composant ShadCN ?

**R:**
```tsx
import { Button } from './components/ui/button';

<Button variant="default">Click me</Button>
```

Ne créez PAS vos propres versions de ces composants.

---

## 📱 Mobile & Responsive

### Q: Le site est-il responsive ?

**R:** Oui, **mobile-first** design avec Tailwind CSS. Testé sur :
- 📱 Mobile (375px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

### Q: Comment tester le responsive en local ?

**R:**
1. Ouvrez le site : `http://localhost:5173`
2. F12 → Mode responsive (icône smartphone)
3. Testez différentes tailles

---

## 🔧 Développement

### Q: Comment ajouter une nouvelle page ?

**R:**
1. Créez le fichier dans `/pages/` : `NouveleProduitPage.tsx`
2. Importez dans `App.tsx`
3. Ajoutez la route
4. Ajoutez au `sitemap.xml` pour le SEO

### Q: Comment ajouter un nouveau produit ?

**R:** Voir le template : [guidelines/ProductPageModernizationTemplate.md](./guidelines/ProductPageModernizationTemplate.md)

### Q: Puis-je utiliser des libraries externes ?

**R:** Oui, via npm :
```bash
npm install nom-de-la-library
```

Bibliothèques recommandées dans [README.md](./README.md#stack-technique)

### Q: Comment créer un nouveau composant ?

**R:**
```tsx
// /components/MonComposant.tsx
export function MonComposant() {
  return <div>Mon composant</div>
}

// Importer dans une page
import { MonComposant } from '../components/MonComposant';
```

---

## 🌍 Multilingue

### Q: Le site supporte-t-il plusieurs langues ?

**R:** La **structure** est en place pour FR/EN/DE, mais l'implémentation complète est à venir.

### Q: Comment ajouter le support multilingue ?

**R:** À implémenter avec :
- react-i18next
- Fichiers de traduction JSON
- Sélecteur de langue dans le Header

---

## 📦 Configuration Avancée

### Q: Puis-je personnaliser Tailwind CSS ?

**R:** Oui, mais le projet utilise **Tailwind v4** sans `tailwind.config.js`. 

Personnalisation dans `/styles/globals.css` avec les tokens CSS.

### Q: Comment changer la police ?

**R:** Dans `/styles/globals.css`, modifiez :
```css
@theme {
  --font-family: 'Votre Police', sans-serif;
}
```

### Q: Puis-je ajouter Google Analytics ?

**R:** Oui, ajoutez le script dans `index.html` :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## 🆘 Support

### Q: J'ai un problème non documenté, que faire ?

**R:**

1. **Cherchez** dans la documentation :
   - [DOCS_INDEX.md](./DOCS_INDEX.md) - Index complet

2. **Vérifiez** les logs :
   - Console navigateur (F12)
   - Supabase Dashboard → Logs

3. **Contactez** Can-nX :
   - Email : contact@can-nx.com
   - Téléphone : +33 6 49 53 67 19

### Q: Où trouver de l'aide sur Supabase ?

**R:**
- [Documentation Supabase](https://supabase.com/docs)
- [Discord Supabase](https://discord.supabase.com)
- [GitHub Issues](https://github.com/supabase/supabase/issues)

### Q: Où trouver de l'aide sur Mailchimp ?

**R:**
- [Documentation Mailchimp](https://mailchimp.com/developer/)
- [Support Mailchimp](https://mailchimp.com/contact/)
- [Forum Mailchimp](https://community.mailchimp.com/)

---

## 📚 Documentation

### Q: Où est la documentation complète ?

**R:** Voir l'index : **[DOCS_INDEX.md](./DOCS_INDEX.md)**

### Q: Quel fichier lire en premier ?

**R:** Dépend de votre besoin :

| Besoin | Fichier |
|--------|---------|
| Vue d'ensemble | [README.md](./README.md) |
| Setup rapide | [QUICK_SETUP.md](./QUICK_SETUP.md) |
| Configuration complète | [NEXT_STEPS.md](./NEXT_STEPS.md) |
| Guide visuel Mailchimp | [MAILCHIMP_VISUAL_GUIDE.md](./MAILCHIMP_VISUAL_GUIDE.md) |
| Architecture technique | [ARCHITECTURE.md](./ARCHITECTURE.md) |

### Q: Y a-t-il des exemples de code ?

**R:** Oui :
- `/examples/SEO-Usage-Examples.tsx` - Exemples SEO
- Tous les composants dans `/components` sont des exemples réels

---

## 🎯 Bonnes Pratiques

### Q: Dois-je créer des branches Git ?

**R:** **Oui, fortement recommandé** :
```bash
git checkout -b feature/nouvelle-fonctionnalite
```

### Q: Comment tester avant de déployer ?

**R:**
```bash
# Build local
npm run build

# Prévisualiser le build
npm run preview

# Ouvrir http://localhost:4173
```

### Q: Dois-je commiter `node_modules/` ?

**R:** **NON !** C'est déjà dans `.gitignore`.

### Q: Quelle convention de nommage utiliser ?

**R:**
- **Composants** : `PascalCase.tsx`
- **Hooks** : `useCamelCase.ts`
- **Utils** : `camelCase.ts`
- **Config** : `configName.ts`

---

## 🚀 Performance

### Q: Comment optimiser les performances ?

**R:** Déjà optimisé :
- ✅ Code splitting automatique (Vite)
- ✅ Tree shaking
- ✅ Lazy loading des images
- ✅ Minification CSS/JS

Améliorations futures :
- [ ] PWA (Progressive Web App)
- [ ] Service Worker
- [ ] Image optimization (WebP, AVIF)

### Q: Quel est l'objectif Lighthouse ?

**R:**
- Performance : > 90
- Accessibility : > 95
- Best Practices : > 95
- SEO : 100

---

## 💡 Tips & Astuces

### Q: Comment accélérer le développement ?

**R:**
1. Utilisez les composants ShadCN existants
2. Copiez/modifiez les pages produits existantes
3. Utilisez Tailwind CSS (pas de CSS custom)
4. Hot reload activé par défaut avec Vite

### Q: Comment débugger rapidement ?

**R:**
```bash
# Terminal 1 : Logs frontend
npm run dev

# Terminal 2 : Logs Supabase
supabase functions logs mailchimp-subscribe --follow

# Navigateur : Console
F12 → Console
```

### Q: Raccourcis utiles ?

**R:**
- `Ctrl/Cmd + K` - Ouvrir la recherche (si implémentée)
- `F12` - DevTools navigateur
- `Ctrl/Cmd + Shift + R` - Hard refresh

---

## 🔮 Roadmap

### Q: Quelles sont les prochaines fonctionnalités ?

**R:** Voir [CHANGELOG.md](./CHANGELOG.md#-prochaines-versions)

Planifié :
- [ ] Multilingue complet (FR/EN/DE)
- [ ] Blog avec CMS Headless
- [ ] Espace client authentifié
- [ ] Intégration e-commerce can-nx.shop

---

**Des questions non répondues ?**

📧 contact@can-nx.com | 📞 +33 6 49 53 67 19

Ou consultez : **[DOCS_INDEX.md](./DOCS_INDEX.md)**

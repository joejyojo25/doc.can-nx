# 🏗️ Architecture Can-nX Website

Documentation de l'architecture technique du site web Can-nX.

---

## 📊 Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────┐
│                     Can-nX Website                           │
│                   (React + Tailwind CSS)                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              │
                              ▼
        ┌──────────────────────────────────────┐
        │      Frontend Components             │
        │  - Pages (25+)                       │
        │  - Components (40+)                  │
        │  - UI Library (ShadCN)               │
        │  - Animations (Motion)               │
        └──────────────────────────────────────┘
                              │
                              │
                              ▼
        ┌──────────────────────────────────────┐
        │    Contact Form Integration          │
        │  /components/Contact.tsx             │
        └──────────────────────────────────────┘
                              │
                              │
                              ▼
        ┌──────────────────────────────────────┐
        │      Supabase Client                 │
        │  /lib/supabaseClient.ts              │
        └──────────────────────────────────────┘
                              │
                              │ HTTPS
                              ▼
        ┌──────────────────────────────────────┐
        │   Supabase Edge Functions            │
        │  /supabase/functions/                │
        │  - mailchimp-subscribe               │
        └──────────────────────────────────────┘
                              │
                              │ API
                              ▼
        ┌──────────────────────────────────────┐
        │      Mailchimp Marketing API         │
        │  - Lists Management                  │
        │  - Contact Subscription              │
        │  - Tags & Segmentation               │
        └──────────────────────────────────────┘
```

---

## 🔐 Flux de données - Formulaire de Contact

### Scénario : Utilisateur soumet le formulaire

```
1. Utilisateur remplit le formulaire
   └─> /pages/ContactPage.tsx
       └─> /components/Contact.tsx
           │
           │ État local (React useState)
           │
2. Soumission du formulaire
   │
   ▼
3. Validation côté client
   │
   ▼
4. Appel à Supabase Edge Function
   │
   │  const { data, error } = await supabase.functions.invoke(
   │    'mailchimp-subscribe',
   │    { body: { email, firstName, ... } }
   │  );
   │
   ▼
5. Supabase Edge Function (Backend Serverless)
   │
   │  Location: /supabase/functions/mailchimp-subscribe/index.ts
   │
   │  - Validation des données
   │  - Récupération des secrets (MAILCHIMP_API_KEY, etc.)
   │  - Construction de la requête Mailchimp
   │
   ▼
6. Appel à l'API Mailchimp
   │
   │  POST https://us19.api.mailchimp.com/3.0/lists/{LIST_ID}/members
   │  Headers: Authorization Basic xxx
   │  Body: {
   │    email_address: "user@example.com",
   │    status: "subscribed",
   │    merge_fields: { FNAME, LNAME, COMPANY, ... },
   │    tags: ["Website Contact", "Can-nX Lead", "Architecte"]
   │  }
   │
   ▼
7. Mailchimp traite la requête
   │
   │  - Crée/met à jour le contact
   │  - Applique les tags
   │  - Déclenche les automatisations
   │
   ▼
8. Réponse retournée
   │
   │  Success (200) ou Error (4xx/5xx)
   │
   ▼
9. Edge Function retourne la réponse au client
   │
   ▼
10. Frontend affiche le toast de succès/erreur
    │
    └─> Formulaire réinitialisé (si succès)
```

---

## 🗂️ Structure des Dossiers

```
can-nx-website/
│
├── 📁 components/              # Composants React
│   ├── Contact.tsx             # Formulaire de contact (INTÉGRATION MAILCHIMP)
│   ├── Header.tsx              # En-tête
│   ├── Footer.tsx              # Pied de page
│   ├── Products.tsx            # Liste des produits
│   ├── configurator/           # Configurateur Infini KNX
│   │   ├── InfiniKnxWizard.tsx
│   │   ├── steps/              # Étapes du wizard
│   │   └── shared/             # Composants partagés
│   └── ui/                     # Composants ShadCN UI
│       ├── button.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── ...
│
├── 📁 pages/                   # Pages de l'application
│   ├── ContactPage.tsx         # Page contact
│   ├── KloudnxPage.tsx         # Page Kloud'nX
│   ├── InfiniKnxPage.tsx       # Page Infini KNX
│   └── integration/            # Pages d'intégrations
│       ├── KNXPage.tsx
│       ├── SonosPage.tsx
│       └── ...
│
├── 📁 config/                  # Fichiers de configuration
│   ├── seoConfig.ts            # Configuration SEO centralisée
│   └── mailchimpConfig.ts      # Documentation Mailchimp
│
├── 📁 lib/                     # Bibliothèques
│   └── supabaseClient.ts       # Client Supabase (NOUVEAU)
│
├── 📁 supabase/                # Supabase Edge Functions (NOUVEAU)
│   └── functions/
│       ├── mailchimp-subscribe/
│       │   └── index.ts        # Fonction Mailchimp
│       └── _shared/
│           └── cors.ts         # Configuration CORS
│
├── 📁 hooks/                   # Custom hooks
│   └── usePageSEO.ts           # Hook SEO
│
├── 📁 styles/                  # Styles globaux
│   └── globals.css             # Tailwind + styles custom
│
├── 📁 public/                  # Fichiers statiques
│   ├── robots.txt              # SEO - Instructions robots
│   └── sitemap.xml             # SEO - Plan du site
│
├── 📁 guidelines/              # Documentation
│   ├── MailchimpIntegration.md
│   ├── SEO-Implementation.md
│   └── ...
│
├── 📁 scripts/                 # Scripts utilitaires (NOUVEAU)
│   └── test-mailchimp.sh       # Test intégration Mailchimp
│
├── 📄 .env                     # Variables d'environnement (GIT IGNORED)
├── 📄 .env.example             # Template des variables (NOUVEAU)
├── 📄 .gitignore               # Fichiers ignorés par Git (NOUVEAU)
├── 📄 package.json             # Dépendances npm
└── 📄 README.md                # Documentation principale
```

---

## 🔑 Variables d'Environnement

### Frontend (Client-side)

Stockées dans `.env` et préfixées par `VITE_` :

```env
VITE_SUPABASE_URL=https://xxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

- ✅ Safe pour le client (clés publiques)
- ✅ Compilées dans le bundle à la build
- ✅ Accessibles via `import.meta.env.VITE_*`

### Backend (Supabase Secrets)

Stockées dans Supabase (JAMAIS dans le code) :

```bash
MAILCHIMP_API_KEY=xxx-us19
MAILCHIMP_LIST_ID=xxx
MAILCHIMP_DC=us19
```

- 🔒 Secrets sécurisés
- 🔒 Accessibles uniquement par les Edge Functions
- 🔒 Gérés via Supabase CLI : `supabase secrets set`

---

## 🔐 Sécurité

### Principes de sécurité implémentés

1. **Séparation Frontend/Backend**
   - ✅ Clés API sensibles JAMAIS côté client
   - ✅ Utilisation de Edge Functions (backend serverless)
   - ✅ Client Supabase utilise uniquement la clé publique `anon`

2. **CORS**
   - ✅ Headers CORS configurés dans Edge Functions
   - ✅ Autorise uniquement les origins nécessaires

3. **Validation**
   - ✅ Validation côté client (UX)
   - ✅ Validation côté serveur (Edge Function)
   - ✅ Sanitization des données

4. **Secrets Management**
   - ✅ Secrets Supabase (variables d'environnement serveur)
   - ✅ `.env` dans `.gitignore`
   - ✅ `.env.example` pour documentation

5. **HTTPS**
   - ✅ Toutes les communications chiffrées
   - ✅ Supabase utilise HTTPS par défaut
   - ✅ Mailchimp API en HTTPS

---

## 📊 Data Flow - Détails techniques

### Contact Form Submission

```typescript
// 1. Frontend (/components/Contact.tsx)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // 2. Appel à Supabase Edge Function
  const { data, error } = await supabase.functions.invoke(
    'mailchimp-subscribe',
    {
      body: {
        email: formData.email,
        firstName: formData.firstName,
        // ... autres champs
      }
    }
  );
  
  // 3. Gestion de la réponse
  if (error) {
    toast.error('Erreur');
  } else {
    toast.success('Message envoyé !');
  }
};
```

```typescript
// 4. Backend (Supabase Edge Function)
// /supabase/functions/mailchimp-subscribe/index.ts

serve(async (req) => {
  // 5. Parse request
  const formData = await req.json();
  
  // 6. Récupération des secrets
  const MAILCHIMP_API_KEY = Deno.env.get('MAILCHIMP_API_KEY');
  
  // 7. Appel à Mailchimp
  const response = await fetch(
    `https://us19.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`
      },
      body: JSON.stringify({
        email_address: formData.email,
        merge_fields: { FNAME, LNAME, ... },
        tags: ['Website Contact', 'Can-nX Lead']
      })
    }
  );
  
  // 8. Retour de la réponse
  return new Response(JSON.stringify({ success: true }));
});
```

---

## 🚀 Déploiement

### Environnements

```
┌────────────────────┐
│   Development      │  localhost:5173
│   - .env local     │  npm run dev
│   - Hot reload     │
└────────────────────┘
         │
         │ npm run build
         ▼
┌────────────────────┐
│   Production       │  https://can-nx.com
│   - Vercel/Netlify │  Auto-deploy on push
│   - Edge CDN       │  Variables d'environnement
│   - HTTPS          │  configurées
└────────────────────┘
```

### Edge Functions Deployment

```bash
# Local development
supabase functions serve mailchimp-subscribe

# Production deployment
supabase functions deploy mailchimp-subscribe --no-verify-jwt
```

---

## 🧪 Testing

### Niveaux de test

1. **Unit Tests** (à implémenter)
   - Composants individuels
   - Fonctions utilitaires

2. **Integration Tests** (à implémenter)
   - Flux complets (formulaire → Edge Function → Mailchimp)

3. **Manual Tests** (actuels)
   - Script de test : `scripts/test-mailchimp.sh`
   - Test du formulaire en local
   - Vérification dans Mailchimp

### Test Flow

```bash
# Test de l'Edge Function
./scripts/test-mailchimp.sh

# Test du formulaire (manuel)
npm run dev
# → Remplir et soumettre le formulaire
# → Vérifier dans Mailchimp

# Voir les logs
supabase functions logs mailchimp-subscribe --tail 50
```

---

## 📈 Monitoring & Analytics

### Supabase Dashboard

- **Edge Functions** → Invocations count
- **Logs** → Erreurs et succès
- **Usage** → Quotas et limites

### Mailchimp Analytics

- Contacts ajoutés
- Tags appliqués
- Taux de conversion newsletter
- Segmentation par profession

---

## 🛠️ Technologies

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Frontend Framework | React | 18 | UI Library |
| Language | TypeScript | Latest | Type Safety |
| Styling | Tailwind CSS | 4.0 | Utility-first CSS |
| UI Components | ShadCN UI | Latest | Pre-built components |
| Animations | Motion | Latest | Smooth animations |
| Icons | Lucide React | Latest | Icon library |
| Build Tool | Vite | Latest | Fast bundling |
| Backend | Supabase | Latest | Edge Functions + Auth |
| Marketing | Mailchimp | 3.0 API | Email marketing |
| Forms | React Hook Form | 7.55.0 | Form management |
| Validation | Zod | Latest | Schema validation |
| Notifications | Sonner | 2.0.3 | Toast notifications |

---

## 📊 Performance

### Optimisations implémentées

✅ **Code Splitting** - Chargement lazy des pages
✅ **Image Optimization** - WebP + lazy loading
✅ **Minification** - CSS + JS minifiés en production
✅ **CDN** - Hébergement sur Edge CDN (Vercel/Netlify)
✅ **Caching** - Headers de cache appropriés
✅ **Bundle Size** - Tree shaking automatique

### Objectifs Lighthouse

- **Performance** : > 90
- **Accessibility** : > 95
- **Best Practices** : > 95
- **SEO** : 100

---

## 🔮 Évolutions futures

### Court terme
- [ ] Tests automatisés (Jest + React Testing Library)
- [ ] CI/CD pipeline complet
- [ ] Monitoring d'erreurs (Sentry)

### Moyen terme
- [ ] Multilingue (i18n)
- [ ] Blog avec CMS Headless
- [ ] Espace client authentifié

### Long terme
- [ ] App mobile (React Native)
- [ ] Intégration e-commerce
- [ ] Dashboard analytics personnalisé

---

**Dernière mise à jour** : 7 novembre 2025

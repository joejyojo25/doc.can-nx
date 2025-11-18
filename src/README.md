# 🏠 Can-nX Website - React & Tailwind CSS

Site web professionnel B2B pour Can-nX, spécialiste des solutions d'automatisation de bâtiments KNX et IoT.

## 🚀 Démarrage Rapide

### Installation

```bash
# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env

# Configurer vos variables Supabase dans .env
# Voir la section Configuration ci-dessous
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:5173
```

### Build Production

```bash
# Créer le build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

---

## ⚙️ Configuration

### 1. Variables d'environnement

Créez un fichier `.env` à la racine :

```env
VITE_SUPABASE_URL=https://votre-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=votre_supabase_anon_key_ici
```

Obtenez ces valeurs depuis votre **Supabase Dashboard** → **Settings** → **API**

### 2. Configuration Mailchimp ✅

L'intégration Mailchimp est **100% opérationnelle** !

**🚀 Commencez ici** : [START_HERE_MAILCHIMP.md](./START_HERE_MAILCHIMP.md)  
**🔧 DNS Error Fixed** : [ERROR_FIXED.md](./ERROR_FIXED.md)

Le formulaire de contact envoie automatiquement toutes les données à votre liste Mailchimp :
- ✅ Utilise vos merge fields existants (NAME, MMERGE1-8)
- ✅ Ajoute des tags automatiques (profession, produit, etc.)
- ✅ Gère le consentement newsletter
- ✅ Sécurisé via Supabase Edge Functions
- ✅ Correction DNS automatique (extrait datacenter depuis API key)

**Il suffit de tester le formulaire une fois pour confirmer !**

📚 Docs : [MAILCHIMP_FIELD_MAPPING.md](./MAILCHIMP_FIELD_MAPPING.md) | [MAILCHIMP_TEST_GUIDE.md](./MAILCHIMP_TEST_GUIDE.md) | [MAILCHIMP_DIAGNOSTIC.md](./MAILCHIMP_DIAGNOSTIC.md)

---

## 📂 Structure du Projet

```
can-nx-website/
├── components/           # Composants React réutilisables
│   ├── configurator/     # Configurateur Infini KNX
│   ├── ui/               # Composants ShadCN UI
│   └── ...               # Autres composants
├── pages/                # Pages de l'application
│   └── integration/      # Pages d'intégrations
├── config/               # Fichiers de configuration
│   ├── mailchimpConfig.ts
│   └── seoConfig.ts
├── hooks/                # Custom React hooks
├── lib/                  # Bibliothèques et utilitaires
│   └── supabaseClient.ts
├── supabase/             # Supabase Edge Functions
│   └── functions/
│       └── mailchimp-subscribe/
├── styles/               # Styles globaux
├── public/               # Fichiers statiques
│   ├── robots.txt
│   └── sitemap.xml
└── guidelines/           # Documentation du projet
```

---

## 🎨 Stack Technique

- **Framework** : React 18 + TypeScript
- **Styling** : Tailwind CSS v4
- **UI Components** : ShadCN UI
- **Animations** : Motion (Framer Motion)
- **Icons** : Lucide React
- **Backend** : Supabase (Edge Functions)
- **Forms** : React Hook Form + Zod
- **Build** : Vite

---

## 🌟 Fonctionnalités

### ✅ Pages principales
- Page d'accueil avec hero animé
- Pages produits (Kloud'nX, Infini KNX, Pool'nX, etc.)
- Pages d'intégrations (20+ intégrations)
- Page de contact avec formulaire Mailchimp
- Blog (structure en place)

### ✅ Fonctionnalités avancées
- **Configurateur Infini KNX** : Configurateur 3D interactif avec preview en temps réel
- **SEO optimisé** : Meta tags dynamiques, sitemap, robots.txt
- **Multilingue** : Support FR/EN/DE (structure en place)
- **Responsive** : Design mobile-first
- **Animations fluides** : Motion animations sur toutes les pages
- **Formulaire de contact** : Intégration Mailchimp sécurisée

### ✅ Composants réutilisables
- 43 boutons CTA standardisés avec style vert Can-nX
- Composants de produits modulaires
- Galeries d'images interactives
- Cartes de témoignages clients
- Sections de FAQ accordéon
- Et bien plus...

---

## 📧 Intégration Mailchimp

Le formulaire de contact capture automatiquement les leads dans Mailchimp.

### Architecture

```
Frontend (Contact.tsx) 
    ↓
Supabase Edge Function (mailchimp-subscribe)
    ↓
Mailchimp API
```

### Données capturées

- Prénom / Nom
- Email
- Entreprise
- Téléphone
- Pays / Code postal
- Profession (Architecte, System Integrator, etc.)
- Produit d'intérêt
- Message
- Consentement newsletter

### Tags automatiques

Chaque contact reçoit ces tags :
- `Website Contact`
- `Can-nX Lead`
- Tag de profession (ex: `Architecte`)

### Configuration

Voir le guide complet : **[MAILCHIMP_SETUP_GUIDE.md](./MAILCHIMP_SETUP_GUIDE.md)**

---

## 🔍 SEO

### Configuration centralisée

Toutes les métadonnées SEO sont centralisées dans `/config/seoConfig.ts`.

### Fichiers SEO

- ✅ `/public/sitemap.xml` - Plan du site
- ✅ `/public/robots.txt` - Instructions pour les robots
- ✅ Meta tags optimisés pour chaque page
- ✅ Structured data (JSON-LD) pour les produits

### Documentation SEO

- [SEO-README.md](./SEO-README.md) - Guide complet
- [SEO-Quick-Reference.md](./SEO-Quick-Reference.md) - Référence rapide
- [SEO-Launch-Checklist.md](./guidelines/SEO-Launch-Checklist.md) - Checklist pré-lancement

---

## 🚀 Déploiement

### Checklist complète

Voir : **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)**

### Plateformes supportées

- **Vercel** ⭐ Recommandé
- **Netlify**
- Tout hébergeur supportant les SPA React

### Configuration Vercel

1. Connectez votre repo GitHub
2. Configurez les variables d'environnement :
   ```
   VITE_SUPABASE_URL=https://xxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGc...
   ```
3. Deploy automatique à chaque push !

---

## 🧪 Tests

### Test du formulaire Mailchimp

```bash
# Définir l'URL Supabase
export SUPABASE_URL=https://votre-project.supabase.co

# Lancer le test
chmod +x scripts/test-mailchimp.sh
./scripts/test-mailchimp.sh
```

### Tests manuels recommandés

- [ ] Navigation entre les pages
- [ ] Formulaire de contact
- [ ] Configurateur Infini KNX
- [ ] Responsive mobile
- [ ] Performance (Lighthouse > 90)

---

## 📚 Documentation

### Guides principaux

- [MAILCHIMP_SETUP_GUIDE.md](./MAILCHIMP_SETUP_GUIDE.md) - Configuration Mailchimp complète
- [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Checklist de déploiement
- [SEO-README.md](./SEO-README.md) - Guide SEO complet

### Guides techniques

- [guidelines/InfiniKnxConfigurator.md](./guidelines/InfiniKnxConfigurator.md) - Configurateur
- [guidelines/MailchimpIntegration.md](./guidelines/MailchimpIntegration.md) - Mailchimp
- [guidelines/SEO-Implementation.md](./guidelines/SEO-Implementation.md) - Implémentation SEO

### Références rapides

- [SEO-Quick-Reference.md](./SEO-Quick-Reference.md) - Référence SEO
- [guidelines/QuickLinks.md](./guidelines/QuickLinks.md) - Liens utiles

---

## 🎯 Produits Can-nX

### Solutions cloud
- **Kloud'nX** - Plateforme cloud KNX
- **Boss'nX** - Gestion centralisée
- **Chart'nX** - Analytics et reporting

### Solutions matérielles
- **Infini KNX** - Interrupteurs KNX personnalisables (6 finitions Meljac)
- **Pool'nX** - Automatisation de piscines
- **Emergy'nX** - Gestion d'énergie
- **Speak'nX** - Contrôle vocal
- **Mod'nX** - Modules KNX

### Intégrations (20+)
KNX, HomeKit, Crestron, Sonos, Shelly, Nuki, Doorbird, Hikvision, Poolcop, Evlink Pro, Lektrico, Terra AC, Modbus, Pushover, 2N, Airzone, Gude, Klereo...

---

## 🤝 Contribution

### Style de code

- **TypeScript** strict mode
- **ESLint** + **Prettier** pour le formatage
- **Tailwind CSS** pour le styling (pas de CSS custom)
- **Composants** : Privilégier les petits composants réutilisables

### CTA Buttons

Tous les boutons CTA utilisent le style standardisé vert Can-nX :

```tsx
className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
```

### Conventions de nommage

- Composants : `PascalCase.tsx`
- Hooks : `use*.ts`
- Utilitaires : `camelCase.ts`
- Config : `*Config.ts`

---

## 📞 Support

### Can-nX
- **Email** : contact@can-nx.com
- **Téléphone** : +33 6 49 53 67 19
- **Site** : https://can-nx.com

### Ressources techniques
- [Documentation Supabase](https://supabase.com/docs)
- [Documentation Mailchimp](https://mailchimp.com/developer/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [ShadCN UI](https://ui.shadcn.com/)

---

## 📝 Licence

© 2025 Can-nX. Tous droits réservés.

---

## 🎉 Changelog

### Version actuelle
- ✅ Migration complète WordPress → React
- ✅ Intégration Mailchimp sécurisée via Supabase
- ✅ Configurateur Infini KNX 3D
- ✅ SEO optimisé (sitemap, robots.txt, meta tags)
- ✅ 43 boutons CTA standardisés
- ✅ 20+ pages d'intégrations
- ✅ Design responsive mobile-first
- ✅ Animations fluides avec Motion

### À venir
- 🔄 Support multilingue complet (FR/EN/DE)
- 🔄 Blog avec CMS Headless
- 🔄 Espace client intégré
- 🔄 Boutique e-commerce can-nx.shop

---

**Made with ❤️ by Can-nX Team**

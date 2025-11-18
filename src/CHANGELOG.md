# Changelog - Can-nX Website

Toutes les modifications notables du projet sont documentées dans ce fichier.

---

## [En cours] - 2025-11-07

### ✨ Ajouté - Intégration Mailchimp Sécurisée

#### Nouveaux fichiers créés

**Supabase Edge Functions**
- `/supabase/functions/mailchimp-subscribe/index.ts` - Edge Function pour gérer les soumissions Mailchimp de manière sécurisée
- `/supabase/functions/_shared/cors.ts` - Configuration CORS partagée

**Configuration**
- `/lib/supabaseClient.ts` - Client Supabase pour le frontend
- `/.env.example` - Template des variables d'environnement
- `/.gitignore` - Protection des fichiers sensibles

**Documentation complète**
- `/NEXT_STEPS.md` - Guide pas à pas pour la configuration (37 minutes)
- `/MAILCHIMP_SETUP_GUIDE.md` - Guide complet de configuration Mailchimp
- `/SUPABASE_QUICKSTART.md` - Démarrage rapide Supabase détaillé
- `/SUPABASE_COMMANDS.md` - Référence des commandes CLI Supabase
- `/DEPLOYMENT_CHECKLIST.md` - Checklist complète de déploiement
- `/README.md` - Documentation principale mise à jour
- `/CHANGELOG.md` - Ce fichier

**Scripts utilitaires**
- `/scripts/test-mailchimp.sh` - Script de test de l'intégration Mailchimp

#### Modifications de fichiers existants

**Composants**
- `/components/Contact.tsx` - Mise à jour pour utiliser Supabase Edge Function au lieu de l'appel direct à l'API Mailchimp (plus sécurisé)

**Documentation**
- `/guidelines/MailchimpIntegration.md` - Ajout de références vers la nouvelle documentation

#### Fonctionnalités

✅ **Sécurité améliorée**
  - Clé API Mailchimp JAMAIS exposée côté client
  - Utilisation de Supabase Edge Functions (backend serverless)
  - Secrets gérés via Supabase CLI

✅ **Formulaire de contact complet**
  - Capture de 9 champs personnalisés
  - Tags automatiques appliqués (Website Contact, Can-nX Lead, Profession)
  - Gestion des erreurs robuste
  - Support newsletter opt-in

✅ **Merge Fields Mailchimp**
  - FNAME (Prénom)
  - LNAME (Nom)
  - COMPANY (Entreprise)
  - PHONE (Téléphone)
  - COUNTRY (Pays)
  - POSTAL (Code postal)
  - PROFESSION (Profession)
  - PRODUCT (Produit d'intérêt)
  - MESSAGE (Message)

✅ **Documentation exhaustive**
  - Guide de configuration en 10 étapes (~37 minutes)
  - Troubleshooting complet
  - Scripts de test fournis
  - Checklist de déploiement

#### Architecture

```
Frontend (Contact.tsx)
    ↓
Supabase Edge Function (mailchimp-subscribe)
    ↓
Mailchimp Marketing API
```

#### Variables d'environnement requises

**Frontend (dans `.env`)**
```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

**Backend (Supabase Secrets)**
```bash
MAILCHIMP_API_KEY=xxxx-us19
MAILCHIMP_LIST_ID=xxxx
MAILCHIMP_DC=us19
```

#### Commandes de déploiement

```bash
# Déployer la Edge Function
supabase functions deploy mailchimp-subscribe --no-verify-jwt

# Configurer les secrets
supabase secrets set MAILCHIMP_API_KEY=xxx
supabase secrets set MAILCHIMP_LIST_ID=xxx
supabase secrets set MAILCHIMP_DC=us19
```

#### Tests

- ✅ Script de test curl fourni (`scripts/test-mailchimp.sh`)
- ✅ Documentation de test détaillée
- ✅ Logs accessibles via Supabase Dashboard

---

## [2025-11-06] - Corrections et Optimisations SEO

### 🐛 Corrigé

- Erreur de syntaxe dans `/config/seoConfig.ts` (problèmes d'échappement d'apostrophes)
- Optimisation des métadonnées SEO de la page contact (titre 56 caractères, description 151 caractères)

### ✨ Amélioré

- Configuration SEO centralisée fonctionnelle
- Tous les fichiers SEO opérationnels

---

## [2025-11-05] - Standardisation des CTA

### ✨ Amélioré

- Standardisation de 43 boutons CTA verts sur 34 fichiers
- Style unifié : `bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30`

---

## [Antérieur] - Base du projet

### ✨ Créé

- Migration complète de WordPress + Elementor vers React + Tailwind CSS
- Structure complète du site Can-nX
- 20+ pages de produits et d'intégrations
- Configurateur Infini KNX 3D
- Système SEO complet (sitemap, robots.txt, meta tags)
- Design responsive mobile-first
- Animations avec Motion (Framer Motion)
- Composants ShadCN UI intégrés

---

## 🎯 Prochaines versions

### Planifié

- [ ] Support multilingue complet (FR/EN/DE)
- [ ] Blog avec CMS Headless (Contentful ou Sanity)
- [ ] Espace client intégré
- [ ] Intégration avec la boutique e-commerce can-nx.shop
- [ ] Système de recherche avancé
- [ ] Filtres de produits dynamiques
- [ ] Système de commentaires pour le blog
- [ ] Analytics personnalisés (dashboard Can-nX)

---

## 📊 Métriques du projet

### Fichiers
- **Total** : 100+ fichiers
- **Composants React** : 40+ composants
- **Pages** : 25+ pages
- **Documentation** : 20+ fichiers markdown

### Code
- **Langage** : TypeScript
- **Framework** : React 18
- **Styling** : Tailwind CSS v4
- **Build** : Vite

### Performance
- **Lighthouse Score** : 90+ (cible)
- **Bundle Size** : Optimisé avec code splitting
- **Images** : Lazy loading + WebP

---

## 🔗 Liens Utiles

- **Site actuel** : https://can-nx.com
- **Boutique** : https://can-nx.shop
- **Plateforme Cloud** : https://cloud.can-nx.com
- **Support** : contact@can-nx.com

---

**Maintenu par l'équipe Can-nX** | contact@can-nx.com | +33 6 49 53 67 19

# ✨ Prochaines Étapes - Configuration Mailchimp

Félicitations ! Vous avez créé votre clé API Mailchimp. 🎉

Voici **exactement** les étapes à suivre maintenant pour finaliser l'intégration.

---

## 📋 Ce qui a été fait

✅ Fichiers Supabase Edge Function créés :
  - `/supabase/functions/mailchimp-subscribe/index.ts`
  - `/supabase/functions/_shared/cors.ts`

✅ Composant Contact mis à jour :
  - `/components/Contact.tsx` - Utilise maintenant la Edge Function

✅ Client Supabase créé :
  - `/lib/supabaseClient.ts`

✅ Documentation complète créée :
  - `MAILCHIMP_SETUP_GUIDE.md` - Guide pas à pas
  - `SUPABASE_QUICKSTART.md` - Démarrage rapide Supabase
  - `DEPLOYMENT_CHECKLIST.md` - Checklist de déploiement
  - `SUPABASE_COMMANDS.md` - Référence des commandes
  - `README.md` - Documentation principale mise à jour

---

## 🚀 Étapes à Suivre (dans l'ordre)

### ✅ Étape 1 : Créer un projet Supabase (10 minutes)

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un compte / connectez-vous
3. Créez un nouveau projet "can-nx-website"
4. Attendez 2 minutes que le projet se crée

📖 **Guide détaillé** : [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md#étape-1--créer-un-projet-supabase)

---

### ✅ Étape 2 : Récupérer vos credentials Supabase (2 minutes)

1. Dans Supabase Dashboard → **Settings** → **API**
2. Copiez :
   - **Project URL** (ex: `https://xxxxxxxxxxxx.supabase.co`)
   - **anon public key** (commence par `eyJhbG...`)

📖 **Guide détaillé** : [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md#étape-2--récupérer-vos-credentials)

---

### ✅ Étape 3 : Configurer les variables d'environnement (3 minutes)

#### Local (développement)

```bash
# Copier le fichier exemple
cp .env.example .env

# Éditer .env et remplacer par vos valeurs
nano .env  # ou ouvrir avec votre éditeur préféré
```

Contenu du `.env` :

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...votre_clé_ici
```

#### Production (Vercel/Netlify)

Ajoutez les mêmes variables dans les settings de votre plateforme.

📖 **Guide détaillé** : [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md#étape-3--configurer-les-variables-denvironnement)

---

### ✅ Étape 4 : Configurer les Merge Fields Mailchimp (5 minutes)

Dans votre compte Mailchimp :

1. **Audience** → **Settings** → **Audience fields and *|MERGE|* tags**
2. Créez ces champs personnalisés :

| Tag Merge | Type | Notes |
|-----------|------|-------|
| COMPANY | Text | À créer |
| PHONE | Phone Number | À créer |
| COUNTRY | Text | À créer |
| POSTAL | Text | À créer |
| PROFESSION | Text | À créer |
| PRODUCT | Text | À créer |
| MESSAGE | Text | À créer (500 caractères) |

> **Note** : FNAME et LNAME existent déjà par défaut

📖 **Guide détaillé** : [MAILCHIMP_SETUP_GUIDE.md](./MAILCHIMP_SETUP_GUIDE.md#étape-2--configurer-les-merge-fields-dans-mailchimp)

---

### ✅ Étape 5 : Installer Supabase CLI (5 minutes)

#### macOS

```bash
brew install supabase/tap/supabase
```

#### Windows (Scoop)

```bash
scoop install supabase
```

#### Linux

```bash
curl -fsSL https://raw.githubusercontent.com/supabase/cli/main/install.sh | sh
```

#### Vérifier l'installation

```bash
supabase --version
```

📖 **Guide détaillé** : [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md#étape-4--installer-supabase-cli)

---

### ✅ Étape 6 : Se connecter et lier le projet (3 minutes)

```bash
# Se connecter à Supabase
supabase login

# Lier votre projet (remplacez par votre Project ID)
supabase link --project-ref xxxxxxxxxxxx
```

Trouvez votre **Project ID** dans Supabase Dashboard → Settings → General → Reference ID

📖 **Guide détaillé** : [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md#étape-5--se-connecter-à-supabase-cli)

---

### ✅ Étape 7 : Déployer la Edge Function (2 minutes)

```bash
supabase functions deploy mailchimp-subscribe --no-verify-jwt
```

Vous devriez voir :

```
✓ Deployed Function mailchimp-subscribe
```

📖 **Guide détaillé** : [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md#étape-7--déployer-la-edge-function-mailchimp)

---

### ✅ Étape 8 : Configurer les secrets Mailchimp (3 minutes)

Vous avez besoin de :
- ✅ **API Key** : Votre clé API créée (se termine par `-us19` ou autre DC)
- ❓ **List ID** : À récupérer dans Mailchimp → Audience → Settings → Audience name and defaults
- ❓ **Datacenter** : Les 4 derniers caractères de votre API Key (ex: `us19`)

```bash
# Remplacez par VOS vraies valeurs
supabase secrets set MAILCHIMP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us19
supabase secrets set MAILCHIMP_LIST_ID=xxxxxxxxxx
supabase secrets set MAILCHIMP_DC=us19
```

#### Vérifier que c'est bien configuré

```bash
supabase secrets list
```

Devrait afficher :

```
MAILCHIMP_API_KEY
MAILCHIMP_DC
MAILCHIMP_LIST_ID
```

📖 **Guide détaillé** : [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md#étape-8--configurer-les-secrets-mailchimp)

---

### ✅ Étape 9 : Tester l'intégration (2 minutes)

#### Option A : Test avec le script fourni

```bash
export SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
chmod +x scripts/test-mailchimp.sh
./scripts/test-mailchimp.sh
```

#### Option B : Test avec curl

```bash
curl -X POST https://xxxxxxxxxxxx.supabase.co/functions/v1/mailchimp-subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@can-nx.com",
    "firstName": "Test",
    "lastName": "Can-nX",
    "phone": "+33600000000",
    "country": "France",
    "postalCode": "75001",
    "profession": "Architecte",
    "newsletter": true
  }'
```

#### Vérifier dans Mailchimp

1. Connectez-vous à Mailchimp
2. **Audience** → **All contacts**
3. Le contact test devrait apparaître ! 🎉

📖 **Guide détaillé** : [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md#étape-9--tester-lintégration)

---

### ✅ Étape 10 : Tester le formulaire de contact (2 minutes)

1. Démarrez votre site en local :

   ```bash
   npm run dev
   ```

2. Allez sur la page de contact
3. Remplissez et soumettez le formulaire
4. Vérifiez dans Mailchimp que le contact apparaît

Si ça fonctionne → **Bravo, c'est terminé ! 🎉**

---

## 📊 Récapitulatif du temps

| Étape | Temps estimé |
|-------|--------------|
| 1. Créer projet Supabase | 10 min |
| 2. Récupérer credentials | 2 min |
| 3. Variables d'environnement | 3 min |
| 4. Merge fields Mailchimp | 5 min |
| 5. Installer CLI | 5 min |
| 6. Connecter & lier | 3 min |
| 7. Déployer fonction | 2 min |
| 8. Configurer secrets | 3 min |
| 9. Tester | 2 min |
| 10. Tester formulaire | 2 min |
| **TOTAL** | **~37 minutes** |

---

## 🎯 Checklist Finale

Une fois TOUTES les étapes complétées, cochez :

- [ ] Projet Supabase créé
- [ ] Variables d'environnement configurées (`.env` local + production)
- [ ] Merge fields créés dans Mailchimp
- [ ] Supabase CLI installé
- [ ] Projet lié (`supabase link`)
- [ ] Edge Function déployée
- [ ] Secrets Mailchimp configurés
- [ ] Test curl réussi
- [ ] Test formulaire réussi
- [ ] Contact visible dans Mailchimp

---

## 🚀 Après la configuration

Une fois que tout fonctionne :

### 1. Configurer les automatisations Mailchimp

- Email de bienvenue automatique
- Notification à votre équipe commerciale
- Campagne de nurturing

📖 Voir : [MAILCHIMP_SETUP_GUIDE.md - Configuration des Tags et Automatisations](./MAILCHIMP_SETUP_GUIDE.md#-configuration-des-tags-et-automatisations-mailchimp)

### 2. Déployer en production

```bash
npm run build
```

Puis déployez sur Vercel/Netlify (voir [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md))

### 3. Soumettre le sitemap à Google

1. [Google Search Console](https://search.google.com/search-console)
2. Ajoutez votre propriété
3. Soumettez `https://can-nx.com/sitemap.xml`

---

## 📚 Documentation Complète

- **[MAILCHIMP_SETUP_GUIDE.md](./MAILCHIMP_SETUP_GUIDE.md)** - Guide Mailchimp complet avec troubleshooting
- **[SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md)** - Guide Supabase détaillé
- **[SUPABASE_COMMANDS.md](./SUPABASE_COMMANDS.md)** - Référence des commandes CLI
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Checklist de déploiement complète
- **[README.md](./README.md)** - Documentation générale du projet

---

## 🆘 Besoin d'aide ?

### Problèmes courants

**Le formulaire ne fonctionne pas**
→ Vérifiez les logs : Supabase Dashboard → Edge Functions → mailchimp-subscribe → Logs

**Erreur 401 Unauthorized**
→ Vérifiez `MAILCHIMP_API_KEY` avec `supabase secrets list`

**Erreur 404 Not Found**
→ Vérifiez `MAILCHIMP_LIST_ID` et `MAILCHIMP_DC`

**CORS error**
→ La fonction gère CORS automatiquement. Vérifiez qu'elle est bien déployée.

### Support

- **Email** : contact@can-nx.com
- **Téléphone** : +33 6 49 53 67 19

### Ressources

- [Documentation Supabase](https://supabase.com/docs)
- [Documentation Mailchimp](https://mailchimp.com/developer/)

---

## 🎉 Félicitations !

Vous avez maintenant une intégration Mailchimp professionnelle et sécurisée ! 🚀

Chaque soumission du formulaire de contact ajoutera automatiquement le lead à votre liste Mailchimp avec toutes les informations nécessaires pour votre suivi commercial.

**Bon courage avec votre configuration !** 💪

---

**Made with ❤️ by Can-nX Team**

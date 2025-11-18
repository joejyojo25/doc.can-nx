# ⚡ Supabase Quickstart - Can-nX

Guide rapide pour configurer Supabase pour le site Can-nX.

---

## 📝 Étape 1 : Créer un projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Cliquez sur **Start your project**
3. Connectez-vous avec GitHub (recommandé)
4. Créez une nouvelle organisation si nécessaire
5. Cliquez sur **New Project**
6. Remplissez :
   - **Name** : `can-nx-website` (ou votre choix)
   - **Database Password** : Générez un mot de passe fort (sauvegardez-le !)
   - **Region** : Choisissez la plus proche (ex: Europe West pour la France)
   - **Pricing Plan** : Free tier suffit pour commencer
7. Cliquez sur **Create new project**
8. ⏳ Attendez ~2 minutes pendant la création

---

## 🔑 Étape 2 : Récupérer vos credentials

Une fois le projet créé :

1. Dans le dashboard Supabase, allez dans **Settings** (icône ⚙️ en bas à gauche)
2. Cliquez sur **API** dans le menu de gauche
3. Vous verrez :

   ```
   Project URL
   https://xxxxxxxxxxxx.supabase.co
   
   Project API keys
   - anon public : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc...
   - service_role : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc... (⚠️ NE PAS utiliser côté client)
   ```

4. Copiez uniquement :
   - **Project URL**
   - **anon public** key

---

## 💾 Étape 3 : Configurer les variables d'environnement

### Local (.env)

Créez un fichier `.env` à la racine du projet :

```bash
cp .env.example .env
```

Éditez `.env` et remplacez par vos valeurs :

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc...
```

### Production (Vercel/Netlify)

Dans les settings de votre plateforme de déploiement, ajoutez :

- `VITE_SUPABASE_URL` = votre Project URL
- `VITE_SUPABASE_ANON_KEY` = votre anon public key

---

## 🛠️ Étape 4 : Installer Supabase CLI

### macOS

```bash
brew install supabase/tap/supabase
```

### Windows (Scoop)

```bash
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

### Windows (Chocolatey)

```bash
choco install supabase
```

### Linux

```bash
curl -fsSL https://raw.githubusercontent.com/supabase/cli/main/install.sh | sh
```

### npm (toutes plateformes)

```bash
npm install -g supabase
```

### Vérifier l'installation

```bash
supabase --version
# Devrait afficher : supabase version X.X.X
```

---

## 🔐 Étape 5 : Se connecter à Supabase CLI

```bash
supabase login
```

Cela ouvrira votre navigateur pour autoriser la connexion.

---

## 🔗 Étape 6 : Lier votre projet local

### Trouver votre Project ID

1. Dans le dashboard Supabase
2. **Settings** → **General**
3. Copiez le **Reference ID** (ex: `xxxxxxxxxxxx`)

### Lier le projet

```bash
supabase link --project-ref xxxxxxxxxxxx
```

Entrez votre **Database Password** quand demandé.

Vous devriez voir :
```
✓ Linked local project to remote Supabase project
```

---

## 📦 Étape 7 : Déployer la Edge Function Mailchimp

### Vérifier que le code existe

```bash
ls -la supabase/functions/mailchimp-subscribe/
# Devrait afficher : index.ts
```

### Déployer

```bash
supabase functions deploy mailchimp-subscribe --no-verify-jwt
```

Vous devriez voir :
```
✓ Deployed Function mailchimp-subscribe
```

### Vérifier le déploiement

Dans le dashboard Supabase :
1. Allez dans **Edge Functions**
2. Vous devriez voir `mailchimp-subscribe` avec un statut ✅ Active

---

## 🔑 Étape 8 : Configurer les secrets Mailchimp

### Préparer vos credentials Mailchimp

Vous avez besoin de :
- **API Key** : `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us19`
- **List ID** : `xxxxxxxxxx`
- **Datacenter** : `us19` (ou us6, us21, etc.)

### Définir les secrets

```bash
supabase secrets set MAILCHIMP_API_KEY=votre_clé_api_complète_ici
supabase secrets set MAILCHIMP_LIST_ID=votre_list_id_ici
supabase secrets set MAILCHIMP_DC=us19
```

**Exemple concret** :
```bash
supabase secrets set MAILCHIMP_API_KEY=abc123def456ghi789jkl012mno345pqr678stu901-us19
supabase secrets set MAILCHIMP_LIST_ID=a1b2c3d4e5
supabase secrets set MAILCHIMP_DC=us19
```

### Vérifier les secrets

```bash
supabase secrets list
```

Devrait afficher :
```
MAILCHIMP_API_KEY
MAILCHIMP_DC
MAILCHIMP_LIST_ID
```

---

## ✅ Étape 9 : Tester l'intégration

### Test avec le script fourni

```bash
export SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
chmod +x scripts/test-mailchimp.sh
./scripts/test-mailchimp.sh
```

### Test manuel avec curl

```bash
curl -X POST https://xxxxxxxxxxxx.supabase.co/functions/v1/mailchimp-subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@can-nx.com",
    "firstName": "Test",
    "lastName": "User",
    "phone": "+33600000000",
    "country": "France",
    "postalCode": "75001",
    "profession": "Architecte",
    "newsletter": true
  }'
```

Si succès, vous devriez voir :
```json
{
  "success": true,
  "message": "Contact successfully added to Mailchimp"
}
```

### Vérifier dans Mailchimp

1. Connectez-vous à Mailchimp
2. **Audience** → **All contacts**
3. Vous devriez voir le nouveau contact !

---

## 🐛 Troubleshooting

### Erreur : "Project not linked"

```bash
supabase link --project-ref votre-project-id
```

### Erreur : "Missing environment variable"

Vérifiez que les secrets sont bien définis :
```bash
supabase secrets list
```

Si manquants, redéfinissez-les.

### Erreur : "CORS error"

CORS est automatiquement géré par la Edge Function. Si vous avez une erreur :
1. Vérifiez que l'URL de la fonction est correcte
2. Vérifiez que la fonction est bien déployée

### Logs de la Edge Function

Pour voir les logs en temps réel :

```bash
supabase functions serve mailchimp-subscribe
```

Ou dans le dashboard :
**Edge Functions** → **mailchimp-subscribe** → **Logs**

---

## 📊 Monitoring

### Dashboard Supabase

Surveillez :
- **Edge Functions** → Nombre d'invocations
- **Logs** → Erreurs éventuelles
- **Usage** → Quotas

### Limites Free Tier

- ✅ 500k Edge Function invocations/mois
- ✅ 2GB Database
- ✅ 1GB File Storage
- ✅ 2GB Bandwidth/mois

Largement suffisant pour un site vitrine !

---

## 🚀 Prochaines étapes

Une fois Supabase configuré :

1. ✅ Testez le formulaire de contact sur votre site
2. ✅ Configurez les automatisations Mailchimp
3. ✅ Déployez votre site en production
4. ✅ Surveillez les leads dans Mailchimp

---

## 📚 Ressources

- [Documentation Supabase](https://supabase.com/docs)
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [Supabase CLI Reference](https://supabase.com/docs/reference/cli)
- [Mailchimp Setup Guide](./MAILCHIMP_SETUP_GUIDE.md)

---

## 🎉 C'est terminé !

Votre configuration Supabase est maintenant complète. L'intégration Mailchimp est sécurisée et fonctionnelle ! 🚀

---

**Questions ?** contact@can-nx.com | +33 6 49 53 67 19

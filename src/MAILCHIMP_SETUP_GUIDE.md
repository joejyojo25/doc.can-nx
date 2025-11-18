# 🚀 Guide de Configuration Mailchimp - Can-nX

## 📋 Prérequis

Vous avez créé une clé API Mailchimp. Maintenant, suivez ces étapes pour configurer l'intégration complète.

---

## 🔑 Étape 1 : Récupérer vos Credentials Mailchimp

### 1.1 Clé API (déjà créée ✅)

Votre clé API ressemble à : `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us19`

**Important** : Notez le datacenter à la fin (ex: `us19`, `us6`, etc.)

### 1.2 Obtenir votre List ID (Audience ID)

1. Connectez-vous à [Mailchimp](https://mailchimp.com)
2. Allez dans **Audience** → **All contacts**
3. Cliquez sur **Settings** → **Audience name and defaults**
4. Trouvez et copiez votre **Audience ID**
   - Format : `xxxxxxxxxx` (environ 10 caractères)

---

## 🎯 Étape 2 : Configurer les Merge Fields dans Mailchimp

Pour capturer toutes les informations du formulaire de contact, vous devez créer des champs personnalisés dans Mailchimp :

1. Dans Mailchimp, allez dans **Audience** → **Settings** → **Audience fields and *|MERGE|* tags**
2. Créez ces champs personnalisés (s'ils n'existent pas déjà) :

| Nom du champ | Tag Merge | Type | Requis | Notes |
|--------------|-----------|------|---------|-------|
| First Name | FNAME | Text | Non | ✅ Déjà présent par défaut |
| Last Name | LNAME | Text | Non | ✅ Déjà présent par défaut |
| Company | COMPANY | Text | Non | ➕ À créer |
| Phone | PHONE | Phone Number | Non | ➕ À créer |
| Country | COUNTRY | Text | Non | ➕ À créer |
| Postal Code | POSTAL | Text | Non | ➕ À créer |
| Profession | PROFESSION | Text ou Dropdown | Non | ➕ À créer |
| Product Interest | PRODUCT | Text | Non | ➕ À créer |
| Message | MESSAGE | Text | Non | ➕ À créer (limite 500 caractères) |

### Comment créer un Merge Field :

1. Cliquez sur **Create Merge Field**
2. Remplissez :
   - **Field label** : Nom affiché (ex: "Company")
   - **Merge tag** : COMPANY (en majuscules)
   - **Field type** : Text
   - **Visibility** : Coché ✅
   - **Required** : Non coché
3. Pour le champ MESSAGE : augmentez **Max length** à 500
4. Cliquez sur **Save Merge Field**
5. Répétez pour tous les champs

---

## ☁️ Étape 3 : Déployer la Supabase Edge Function

### 3.1 Installer Supabase CLI (si pas déjà fait)

```bash
# macOS
brew install supabase/tap/supabase

# Windows (avec scoop)
scoop install supabase

# Linux
curl -fsSL https://raw.githubusercontent.com/supabase/cli/main/install.sh | sh
```

### 3.2 Se connecter à votre projet Supabase

```bash
supabase login
```

### 3.3 Lier votre projet local au projet Supabase

```bash
# Trouvez votre Project ID dans le dashboard Supabase
supabase link --project-ref <votre-project-id>
```

### 3.4 Déployer la fonction

```bash
supabase functions deploy mailchimp-subscribe --no-verify-jwt
```

---

## 🔐 Étape 4 : Configurer les Secrets Supabase

Configurez vos credentials Mailchimp en tant que secrets Supabase :

```bash
# Remplacez par vos vraies valeurs
supabase secrets set MAILCHIMP_API_KEY=votre_clé_api_ici_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us19
supabase secrets set MAILCHIMP_LIST_ID=votre_list_id_ici_xxxxxxxxxx
supabase secrets set MAILCHIMP_DC=us19
```

**Exemple concret :**
```bash
supabase secrets set MAILCHIMP_API_KEY=abc123def456ghi789jkl012mno345-us19
supabase secrets set MAILCHIMP_LIST_ID=a1b2c3d4e5
supabase secrets set MAILCHIMP_DC=us19
```

### Vérifier que les secrets sont bien configurés :

```bash
supabase secrets list
```

Vous devriez voir :
```
MAILCHIMP_API_KEY
MAILCHIMP_LIST_ID
MAILCHIMP_DC
```

---

## 🧪 Étape 5 : Tester l'Intégration

### 5.1 Obtenir l'URL de votre Edge Function

1. Allez dans le [Supabase Dashboard](https://supabase.com/dashboard)
2. Sélectionnez votre projet
3. Allez dans **Edge Functions**
4. Vous verrez `mailchimp-subscribe` avec une URL comme :
   ```
   https://<votre-project-ref>.supabase.co/functions/v1/mailchimp-subscribe
   ```

### 5.2 Test avec curl (optionnel)

```bash
curl -X POST https://<votre-project-ref>.supabase.co/functions/v1/mailchimp-subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "Test",
    "lastName": "User",
    "phone": "+33600000000",
    "country": "France",
    "postalCode": "75001",
    "profession": "Architecte",
    "newsletter": true
  }'
```

### 5.3 Test via le formulaire de contact

1. Allez sur votre site web
2. Remplissez le formulaire de contact
3. Soumettez le formulaire
4. Vérifiez dans Mailchimp → Audience → All contacts
5. Vous devriez voir le nouveau contact apparaître ! 🎉

---

## 🔍 Étape 6 : Vérifier les Logs

Si quelque chose ne fonctionne pas :

1. Allez dans **Supabase Dashboard** → **Edge Functions** → **mailchimp-subscribe**
2. Cliquez sur l'onglet **Logs**
3. Vous verrez tous les appels et erreurs éventuelles

---

## ✅ Checklist de Configuration

- [ ] Clé API Mailchimp obtenue
- [ ] List ID (Audience ID) obtenu
- [ ] Datacenter identifié (ex: us19)
- [ ] Merge fields créés dans Mailchimp (COMPANY, PHONE, COUNTRY, POSTAL, PROFESSION, PRODUCT, MESSAGE)
- [ ] Supabase CLI installé
- [ ] Projet Supabase lié localement
- [ ] Edge Function déployée (`mailchimp-subscribe`)
- [ ] Secrets Supabase configurés (MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_DC)
- [ ] Formulaire de contact testé
- [ ] Contact apparaît dans Mailchimp

---

## 🎯 Configuration des Tags et Automatisations Mailchimp

### Tags automatiques appliqués :

Chaque contact soumis via le formulaire reçoit ces tags :
- `Website Contact` - Identifie les contacts du site web
- `Can-nX Lead` - Identifie les leads Can-nX
- Le tag de profession (ex: `Architecte`, `Electrician / Installer`, etc.)

### Automatisations recommandées :

#### 1. Email de bienvenue automatique
1. Dans Mailchimp : **Automations** → **Create** → **Custom**
2. Trigger : **Tag is added** → `Website Contact`
3. Action : Envoyer un email de bienvenue
4. Contenu suggéré :
   - Remerciement pour le contact
   - Présentation rapide de Can-nX
   - Liens vers les produits principaux
   - Coordonnées de contact

#### 2. Notification interne pour l'équipe commerciale
1. Automation : **Tag is added** → `Can-nX Lead`
2. Action : **Send notification** à votre équipe
3. Permet de réagir rapidement aux nouveaux leads

#### 3. Campagne de nurturing (optionnel)
1. Créez un segment : Contacts avec tag `Can-nX Lead`
2. Créez une série d'emails sur 2-3 semaines :
   - Email 1 : Présentation des solutions Can-nX
   - Email 2 : Cas d'usage et témoignages clients
   - Email 3 : Offre spéciale ou invitation à une démo

---

## 🐛 Troubleshooting

### Erreur 401 Unauthorized
- ✅ Vérifiez que `MAILCHIMP_API_KEY` est correcte
- ✅ Vérifiez que la clé n'a pas expiré dans Mailchimp

### Erreur 404 Resource Not Found
- ✅ Vérifiez `MAILCHIMP_LIST_ID`
- ✅ Vérifiez `MAILCHIMP_DC` (datacenter)

### Erreur 400 Bad Request
- Si le message contient "Member Exists", c'est normal - l'email existe déjà
- Sinon, vérifiez que tous les merge fields sont bien configurés dans Mailchimp

### Le contact n'apparaît pas dans Mailchimp
- ✅ Vérifiez les logs de la Edge Function
- ✅ Vérifiez que la fonction s'est bien déployée
- ✅ Vérifiez les secrets avec `supabase secrets list`

### CORS errors
- L'Edge Function gère automatiquement CORS
- Si vous avez des erreurs, vérifiez que l'URL de la fonction est correcte

---

## 📞 Support

### Documentation officielle :
- [Mailchimp API Documentation](https://mailchimp.com/developer/marketing/api/)
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [Supabase CLI Reference](https://supabase.com/docs/reference/cli/introduction)

### Contacts Can-nX :
- Email : contact@can-nx.com
- Tel : +33 6 49 53 67 19

---

## 🎉 Félicitations !

Si vous avez suivi toutes les étapes, votre intégration Mailchimp est maintenant configurée et sécurisée. Chaque soumission du formulaire de contact ajoutera automatiquement le lead à votre liste Mailchimp avec toutes les informations capturées.

**Prochaines étapes recommandées :**
1. Configurez les automatisations d'email
2. Créez des segments basés sur la profession ou le produit d'intérêt
3. Suivez vos conversions dans les analytics Mailchimp
4. Testez régulièrement le formulaire pour vous assurer qu'il fonctionne

# 🎨 Guide Visuel - Configuration Mailchimp

Guide visuel pas à pas pour configurer Mailchimp avec Can-nX.

---

## 📋 Vue d'ensemble du processus

```
┌─────────────────────────────────────────────────────────────┐
│                    ÉTAPES DE CONFIGURATION                   │
└─────────────────────────────────────────────────────────────┘

1️⃣  Créer compte Mailchimp
         │
         ▼
2️⃣  Obtenir clé API
         │
         ▼
3️⃣  Obtenir List ID (Audience ID)
         │
         ▼
4️⃣  Identifier le Datacenter
         │
         ▼
5️⃣  Créer les Merge Fields
         │
         ▼
6️⃣  Configurer Supabase
         │
         ▼
7️⃣  Tester l'intégration
         │
         ▼
8️⃣  🎉 TERMINÉ !
```

---

## 1️⃣ Créer un compte Mailchimp

### Étapes

1. Allez sur [mailchimp.com](https://mailchimp.com)
2. Cliquez sur **Sign Up Free**
3. Remplissez le formulaire
4. Vérifiez votre email
5. Complétez votre profil

### Free Tier Mailchimp

```
✅ Jusqu'à 500 contacts
✅ 1 000 emails/mois
✅ 1 audience
✅ Formulaires et landing pages
✅ Templates d'emails
✅ Marketing automation basique
✅ API access
```

**Suffisant pour démarrer avec Can-nX !**

---

## 2️⃣ Obtenir la clé API Mailchimp

### Navigation

```
Mailchimp Dashboard
    │
    └─> Votre profil (en haut à droite)
        │
        └─> Account & Billing
            │
            └─> Extras
                │
                └─> API Keys
                    │
                    └─> Create A Key
```

### Ce que vous voyez

```
┌──────────────────────────────────────────────────────┐
│ API Keys                                              │
├──────────────────────────────────────────────────────┤
│                                                       │
│ [+ Create A Key]                                      │
│                                                       │
│ Your API Keys:                                        │
│                                                       │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Label: My API Key                                │ │
│ │ Key: abc123def456ghi789jkl012mno345pqr678-us19  │ │
│ │ Created: Nov 7, 2025                            │ │
│ │                                         [Delete] │ │
│ └─────────────────────────────────────────────────┘ │
│                                                       │
└──────────────────────────────────────────────────────┘
```

### Format de la clé API

```
abc123def456ghi789jkl012mno345pqr678stu901-us19
└────────────────────────────────────┬─────┘└──┬─┘
                API Key                     Datacenter (DC)
              (32-40 caractères)            (us19, us6, etc.)
```

### ⚠️ Important

- **Sauvegardez** cette clé dans un endroit sûr
- Vous ne pourrez plus la voir après
- Ne la partagez JAMAIS publiquement
- Ne la commitez JAMAIS dans Git

---

## 3️⃣ Obtenir le List ID (Audience ID)

### Navigation

```
Mailchimp Dashboard
    │
    └─> Audience
        │
        └─> All contacts
            │
            └─> Settings (roue dentée)
                │
                └─> Audience name and defaults
```

### Ce que vous voyez

```
┌──────────────────────────────────────────────────────┐
│ Audience name and defaults                            │
├──────────────────────────────────────────────────────┤
│                                                       │
│ Audience name: Can-nX Contacts                       │
│                                                       │
│ Audience ID: a1b2c3d4e5                              │
│             └────┬─────┘                              │
│                  └─> Copiez ceci !                    │
│                                                       │
│ Default from name: Can-nX                            │
│ Default from email: contact@can-nx.com               │
│                                                       │
└──────────────────────────────────────────────────────┘
```

### Format du List ID

```
a1b2c3d4e5
└────┬─────┘
     └─> ~10 caractères alphanumériques
```

---

## 4️⃣ Identifier le Datacenter

### Où le trouver ?

```
Votre clé API : abc123def456-us19
                            └──┬─┘
                               └─> Datacenter
```

### Datacenters Mailchimp courants

```
🇺🇸 us1  - US East
🇺🇸 us2  - US East
🇺🇸 us3  - US West
🇺🇸 us4  - US West
🇺🇸 us5  - US East
🇺🇸 us6  - US Central
🇺🇸 us7  - US West
...
🇺🇸 us19 - US Central (exemple)
🇺🇸 us21 - US East
```

**Votre DC** : Le code après le tiret dans votre API Key

---

## 5️⃣ Créer les Merge Fields

### Navigation

```
Mailchimp Dashboard
    │
    └─> Audience
        │
        └─> All contacts
            │
            └─> Settings
                │
                └─> Audience fields and *|MERGE|* tags
```

### Champs à créer

```
┌──────────────────────────────────────────────────────────────┐
│ Audience fields and *|MERGE|* tags                            │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│ [+ Create Merge Field]                                        │
│                                                               │
│ ┌────────────────────────────────────────────────┐           │
│ │ ✅ Email Address      │ EMAIL    │ Email       │ Required │
│ │ ✅ First Name         │ FNAME    │ Text        │ Optional │
│ │ ✅ Last Name          │ LNAME    │ Text        │ Optional │
│ │ ➕ Company            │ COMPANY  │ Text        │ Optional │  ← À créer
│ │ ➕ Phone              │ PHONE    │ Phone       │ Optional │  ← À créer
│ │ ➕ Country            │ COUNTRY  │ Text        │ Optional │  ← À créer
│ │ ➕ Postal Code        │ POSTAL   │ Text        │ Optional │  ← À créer
│ │ ➕ Profession         │ PROFESSION│ Text       │ Optional │  ← À créer
│ │ ➕ Product Interest   │ PRODUCT  │ Text        │ Optional │  ← À créer
│ │ ➕ Message            │ MESSAGE  │ Text        │ Optional │  ← À créer
│ └────────────────────────────────────────────────┘           │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### Créer un Merge Field

```
[+ Create Merge Field]
    │
    ▼
┌──────────────────────────────────────┐
│ Create a merge field                  │
├──────────────────────────────────────┤
│                                       │
│ Field label: Company                  │
│ Merge tag:   COMPANY                  │ ← MAJUSCULES !
│ Field type:  Text                     │
│                                       │
│ ☑ Show in signup form                │
│ ☐ Required                            │
│                                       │
│              [Cancel] [Save Merge]    │
└──────────────────────────────────────┘
```

### Merge Field MESSAGE (attention !)

Pour le champ MESSAGE, augmentez la limite :

```
Field label: Message
Merge tag:   MESSAGE
Field type:  Text
Max length:  500  ← Augmentez à 500 caractères
```

### Tableau récapitulatif

| Field Label | Merge Tag | Type | Max Length | Notes |
|-------------|-----------|------|------------|-------|
| First Name | FNAME | Text | 50 | ✅ Déjà présent |
| Last Name | LNAME | Text | 50 | ✅ Déjà présent |
| Company | COMPANY | Text | 100 | ➕ À créer |
| Phone | PHONE | Phone Number | - | ➕ À créer |
| Country | COUNTRY | Text | 50 | ➕ À créer |
| Postal Code | POSTAL | Text | 20 | ➕ À créer |
| Profession | PROFESSION | Text | 100 | ➕ À créer |
| Product Interest | PRODUCT | Text | 100 | ➕ À créer |
| Message | MESSAGE | Text | 500 | ➕ À créer (500 char!) |

---

## 6️⃣ Configurer Supabase

### Flux de configuration

```
Local Machine
    │
    ├─> Supabase CLI installé
    │   └─> supabase --version
    │
    ├─> Authentification
    │   └─> supabase login
    │
    ├─> Lien avec le projet cloud
    │   └─> supabase link --project-ref xxxx
    │
    ├─> Déploiement de la fonction
    │   └─> supabase functions deploy mailchimp-subscribe
    │
    └─> Configuration des secrets
        └─> supabase secrets set MAILCHIMP_API_KEY=xxx
            supabase secrets set MAILCHIMP_LIST_ID=xxx
            supabase secrets set MAILCHIMP_DC=us19
```

### Vérifications

```bash
# 1. CLI installé ?
$ supabase --version
✓ supabase version 1.x.x

# 2. Authentifié ?
$ supabase login
✓ You are now logged in

# 3. Projet lié ?
$ supabase status
✓ Project: can-nx-website (xxxxxxxxxxxx)

# 4. Fonction déployée ?
$ supabase functions list
✓ mailchimp-subscribe (active)

# 5. Secrets configurés ?
$ supabase secrets list
✓ MAILCHIMP_API_KEY
✓ MAILCHIMP_DC
✓ MAILCHIMP_LIST_ID
```

---

## 7️⃣ Tester l'intégration

### Test avec curl

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

### Réponse attendue

```json
{
  "success": true,
  "message": "Contact successfully added to Mailchimp"
}
```

### Vérification dans Mailchimp

```
Mailchimp Dashboard
    │
    └─> Audience
        │
        └─> All contacts
            │
            └─> Vous devriez voir "test@can-nx.com" ! 🎉
```

### Vue du contact dans Mailchimp

```
┌──────────────────────────────────────────────────────┐
│ test@can-nx.com                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│ Contact info:                                         │
│   Name:       Test User                              │
│   Email:      test@can-nx.com                        │
│   Company:    (empty)                                │
│   Phone:      +33600000000                           │
│   Country:    France                                 │
│   Postal:     75001                                  │
│   Profession: Architecte                             │
│                                                       │
│ Tags:                                                 │
│   🏷️ Website Contact                                 │
│   🏷️ Can-nX Lead                                     │
│   🏷️ Architecte                                      │
│                                                       │
│ Status: Subscribed ✅                                │
│                                                       │
└──────────────────────────────────────────────────────┘
```

---

## 8️⃣ Test depuis le site web

### Démarrer le site

```bash
npm run dev

🚀 Server running at http://localhost:5173
```

### Remplir le formulaire

```
┌──────────────────────────────────────────────────────┐
│              Formulaire de Contact                    │
├──────────────────────────────────────────────────────┤
│                                                       │
│ Prénom:           [Jean                    ]         │
│ Nom:              [Dupont                  ]         │
│ Entreprise:       [Can-nX                  ]         │
│ Téléphone:        [+33 6 00 00 00 00       ]         │
│ Email:            [jean@can-nx.com         ]         │
│ Pays:             [France                 ▼]         │
│ Code postal:      [75001                   ]         │
│ Je suis:          [Architecte             ▼]         │
│ Produit:          [Kloud'nX                ]         │
│ Message:          [Je souhaite plus        ]         │
│                   [d'informations...       ]         │
│                                                       │
│ ☑ Newsletter                                         │
│                                                       │
│              [📧 Envoyer le message]                 │
│                                                       │
└──────────────────────────────────────────────────────┘
```

### Soumission réussie

```
┌──────────────────────────────────────────────────────┐
│  ✅ Message envoyé !                                 │
│                                                       │
│  Nous vous répondrons dans les plus brefs délais.    │
└──────────────────────────────────────────────────────┘
```

### Vérification finale dans Mailchimp

Le contact devrait apparaître avec **toutes** les informations !

---

## 🎯 Récapitulatif des Credentials

### Ce que vous devez avoir noté

```
┌──────────────────────────────────────────────────────┐
│           CREDENTIALS MAILCHIMP                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│ API Key:        abc123def456...pqr678-us19           │
│                                                       │
│ List ID:        a1b2c3d4e5                           │
│                                                       │
│ Datacenter:     us19                                 │
│                                                       │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│           CREDENTIALS SUPABASE                        │
├──────────────────────────────────────────────────────┤
│                                                       │
│ Project URL:    https://xxxxxxxxxxxx.supabase.co     │
│                                                       │
│ Anon Key:       eyJhbGciOiJIUzI1NiIsInR5cCI...       │
│                                                       │
│ Project ID:     xxxxxxxxxxxx                         │
│                                                       │
└──────────────────────────────────────────────────────┘
```

### Où les utiliser

```
Fichier .env (Local)
├─> VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
└─> VITE_SUPABASE_ANON_KEY=eyJhbGc...

Supabase Secrets (Cloud)
├─> MAILCHIMP_API_KEY=abc123...
├─> MAILCHIMP_LIST_ID=a1b2c3d4e5
└─> MAILCHIMP_DC=us19
```

---

## 🐛 Troubleshooting Visuel

### Problème : Erreur 401 Unauthorized

```
❌ Error 401: Unauthorized
    │
    ├─> Cause possible 1: API Key incorrecte
    │   └─> Solution: Vérifier MAILCHIMP_API_KEY
    │
    └─> Cause possible 2: API Key expirée
        └─> Solution: Générer une nouvelle clé
```

### Problème : Erreur 404 Not Found

```
❌ Error 404: Resource Not Found
    │
    ├─> Cause possible 1: List ID incorrect
    │   └─> Solution: Vérifier MAILCHIMP_LIST_ID
    │
    └─> Cause possible 2: Datacenter incorrect
        └─> Solution: Vérifier MAILCHIMP_DC
```

### Problème : Erreur 400 Bad Request

```
❌ Error 400: Bad Request
    │
    ├─> Cause possible 1: Email existe déjà
    │   └─> Solution: C'est normal ! Pas une vraie erreur
    │
    ├─> Cause possible 2: Merge field manquant
    │   └─> Solution: Créer tous les merge fields dans Mailchimp
    │
    └─> Cause possible 3: Données invalides
        └─> Solution: Vérifier le format (email, téléphone, etc.)
```

### Problème : Le contact n'apparaît pas dans Mailchimp

```
❌ Contact non visible
    │
    ├─> Étape 1: Vérifier les logs Supabase
    │   └─> Dashboard > Edge Functions > mailchimp-subscribe > Logs
    │
    ├─> Étape 2: Vérifier les secrets
    │   └─> supabase secrets list
    │
    ├─> Étape 3: Re-tester avec curl
    │   └─> ./scripts/test-mailchimp.sh
    │
    └─> Étape 4: Vérifier dans Mailchimp > All contacts
        └─> Filtrer par date récente
```

---

## 🎉 Configuration Réussie !

### Checklist finale

```
✅ Compte Mailchimp créé
✅ Clé API obtenue
✅ List ID obtenu
✅ Datacenter identifié
✅ 7 Merge fields créés (COMPANY, PHONE, COUNTRY, POSTAL, PROFESSION, PRODUCT, MESSAGE)
✅ Supabase CLI installé
✅ Projet Supabase lié
✅ Edge Function déployée
✅ Secrets Supabase configurés
✅ Test curl réussi
✅ Test formulaire réussi
✅ Contact visible dans Mailchimp
```

### Prochaines étapes recommandées

```
1️⃣  Configurer les automatisations Mailchimp
    └─> Email de bienvenue
    └─> Notification équipe commerciale
    └─> Campagne de nurturing

2️⃣  Déployer en production
    └─> Vercel/Netlify
    └─> Variables d'environnement configurées

3️⃣  Monitorer les performances
    └─> Supabase Dashboard
    └─> Mailchimp Analytics
```

---

## 📚 Documentation Complète

- **[NEXT_STEPS.md](./NEXT_STEPS.md)** - Guide pas à pas textuel
- **[MAILCHIMP_SETUP_GUIDE.md](./MAILCHIMP_SETUP_GUIDE.md)** - Guide technique complet
- **[SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md)** - Guide Supabase
- **[QUICK_SETUP.md](./QUICK_SETUP.md)** - Setup rapide

---

**Bon courage ! 💪**

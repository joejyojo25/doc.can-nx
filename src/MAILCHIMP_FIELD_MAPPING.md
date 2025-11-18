# Mailchimp Field Mapping - Can-nX Contact Form

## ✅ Configuration Terminée

Votre formulaire de contact est maintenant **100% compatible** avec votre liste Mailchimp existante.

---

## 📋 Mapping des Champs

### Champs du Formulaire → Mailchimp Merge Fields

| Formulaire Contact.tsx | Mailchimp Field | Type | Notes |
|------------------------|----------------|------|-------|
| `firstName + lastName` | `NAME` | Text | Concaténés avec un espace |
| `email` | `EMAIL` | Email | Requis - champ principal |
| `company` | `MMERGE6` | Text | Company Name |
| `phone` | `MMERGE8` | Text | Phone number |
| `country` | `MMERGE1` | Text | Country |
| `profession` | `MMERGE5` | Dropdown | "I am" - voir valeurs ci-dessous |
| `postalCode` | Tags | - | Stocké en tag `Postal: xxxxx` |
| `productInterest` | Tags | - | Stocké en tag `Interest: xxxxx` |
| `message` | Tags | - | Marqué par tag `Has Message` |
| `newsletter` | `status` | - | `subscribed` ou `transactional` |

---

## 🎯 Valeurs de Profession (MMERGE5)

**Valeurs exactes acceptées par Mailchimp** :

```typescript
- "Installateur"
- "Electrician"
- "Integrateur"
- "Distributeur"
- "Developer"
- "Marketing"
- "Manufacturer"
- "other"
```

⚠️ **Important** : Ces valeurs doivent correspondre **exactement** à celles configurées dans votre audience Mailchimp.

---

## 🏷️ Tags Automatiques

Chaque contact reçoit automatiquement ces tags :

1. **Tags fixes** :
   - `Website Contact` - Tous les contacts du formulaire
   - `Can-nX Lead` - Tous les leads

2. **Tags dynamiques** :
   - Profession (ex: `Installateur`, `Developer`, etc.)
   - `Interest: [produit]` - Si productInterest est rempli
   - `Postal: [code]` - Si postalCode est rempli
   - `Has Message` - Si un message est inclus

**Exemple** : Un électricien français intéressé par Kloud'nX recevra :
```
- Website Contact
- Can-nX Lead
- Electrician
- Interest: Kloud'nX
- Postal: 75001
- Has Message
```

---

## 🔄 Statut d'Abonnement

| Cas | Statut Mailchimp | Description |
|-----|------------------|-------------|
| Checkbox newsletter ✅ cochée | `subscribed` | Contact inscrit à la newsletter |
| Checkbox newsletter ❌ non cochée | `transactional` | Contact sans newsletter |

---

## 📡 Architecture Technique

```
┌─────────────────┐
│  Contact.tsx    │
│  (Frontend)     │
└────────┬────────┘
         │
         │ POST /make-server-0ad4a4f9/mailchimp-subscribe
         ▼
┌─────────────────┐
│  Hono Server    │
│  (Supabase)     │
└────────┬────────┘
         │
         │ POST https://us17.api.mailchimp.com/3.0/lists/{listId}/members
         ▼
┌─────────────────┐
│  Mailchimp API  │
│  (List ID:      │
│  958113a82e)    │
└─────────────────┘
```

---

## ✅ Fichiers Modifiés

1. **`/supabase/functions/server/index.tsx`**
   - Route `/make-server-0ad4a4f9/mailchimp-subscribe`
   - Mapping des merge fields corrects
   - Gestion des tags

2. **`/supabase/functions/mailchimp-subscribe/index.ts`**
   - Edge Function autonome (backup)
   - Même mapping que le serveur Hono

3. **`/components/Contact.tsx`**
   - Options de profession alignées avec Mailchimp
   - Appelle le serveur Hono

---

## 🧪 Test du Formulaire

### 1. Tester en dev local

```bash
# Remplir le formulaire avec :
- Prénom : Test
- Nom : User
- Email : test@example.com
- Téléphone : +33 6 12 34 56 78
- Pays : France
- Code postal : 75001
- Je suis : Installateur
- Produit : Kloud'nX
- Message : Test d'intégration
- Newsletter : ✅
```

### 2. Vérifier dans Mailchimp

1. Aller sur https://us17.admin.mailchimp.com/lists/members
2. Chercher `test@example.com`
3. Vérifier :
   - ✅ NAME = "Test User"
   - ✅ MMERGE1 (Country) = "France"
   - ✅ MMERGE5 (I am) = "Installateur"
   - ✅ MMERGE6 (Company) = ""
   - ✅ MMERGE8 (Phone) = "+33 6 12 34 56 78"
   - ✅ Tags : Website Contact, Can-nX Lead, Installateur, Interest: Kloud'nX, Postal: 75001, Has Message
   - ✅ Status : subscribed

---

## 🔐 Variables d'Environnement Requises

Ces secrets doivent être configurés dans Supabase :

```bash
MAILCHIMP_API_KEY=xxxxxxxxxxxxxxxxxxxx-us17
MAILCHIMP_LIST_ID=958113a82e
MAILCHIMP_DC=us17
```

✅ **Statut** : Déjà configurés (confirmé par l'utilisateur)

---

## 🎉 Résultat Final

Votre formulaire de contact :
- ✅ Envoie tous les champs à Mailchimp
- ✅ Utilise vos merge fields existants (pas besoin d'en créer de nouveaux)
- ✅ Ajoute automatiquement les tags pertinents
- ✅ Gère le consentement newsletter
- ✅ Sécurisé (API key côté serveur uniquement)
- ✅ Compatible avec votre configuration Mailchimp actuelle

**Aucune configuration supplémentaire n'est nécessaire dans Mailchimp !** 🎊

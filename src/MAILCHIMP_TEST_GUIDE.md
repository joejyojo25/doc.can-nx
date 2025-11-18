# 🧪 Guide de Test - Formulaire Contact Mailchimp

## ✅ Statut : Prêt à tester !

Votre intégration Mailchimp est **complètement configurée** et prête à l'emploi.

---

## 🎯 Test Simple (Recommandé)

### 1. Remplir le formulaire de contact

Sur votre site, allez à la page **Contact** et remplissez :

```
┌─────────────────────────────────────────┐
│  Prénom : Test                          │
│  Nom : Integration                      │
│  Entreprise : Can-nX Test               │
│  Téléphone : +33 6 12 34 56 78          │
│  Email : votre-email@example.com        │
│  Pays : France                          │
│  Code postal : 75001                    │
│  Je suis : Installateur                 │
│  Produit : Kloud'nX                     │
│  Message : Test d'intégration           │
│  ☑ Newsletter                           │
└─────────────────────────────────────────┘
```

### 2. Vérifier la console du navigateur

Ouvrez **DevTools** (F12) → **Console**

Vous devriez voir :
```
Submitting to Mailchimp server: https://xxxxx.supabase.co/...
Mailchimp server response: {status: 200, result: {...}}
```

### 3. Vérifier dans Mailchimp

1. **Connexion** : https://us17.admin.mailchimp.com/
2. **Liste** : Allez dans **Audience** → **All contacts**
3. **Chercher** : Tapez votre email dans la barre de recherche

### 4. Vérifier les données

Cliquez sur le contact et vérifiez :

| Champ Mailchimp | Valeur Attendue | ✓ |
|-----------------|-----------------|---|
| Email | votre-email@example.com | ☐ |
| NAME | Test Integration | ☐ |
| MMERGE1 (Country) | France | ☐ |
| MMERGE5 (I am) | Installateur | ☐ |
| MMERGE6 (Company) | Can-nX Test | ☐ |
| MMERGE8 (Phone) | +33 6 12 34 56 78 | ☐ |
| Status | Subscribed | ☐ |

### 5. Vérifier les tags

Dans Mailchimp, onglet **Tags**, vous devriez voir :

```
✓ Website Contact
✓ Can-nX Lead
✓ Installateur
✓ Interest: Kloud'nX
✓ Postal: 75001
✓ Has Message
```

---

## 🔧 Test Avancé (curl)

Si vous voulez tester directement l'API :

```bash
# 1. Remplacer PROJECT_ID et ANON_KEY
PROJECT_ID="your-project-id"
ANON_KEY="your-anon-key"

# 2. Tester l'endpoint
curl -X POST \
  "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-0ad4a4f9/mailchimp-subscribe" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  -d '{
    "firstName": "Test",
    "lastName": "API",
    "email": "test-api@can-nx.com",
    "phone": "+33 6 00 00 00 00",
    "company": "Test Company",
    "country": "France",
    "postalCode": "75001",
    "profession": "Developer",
    "productInterest": "Infini KNX",
    "message": "Test API direct",
    "newsletter": true
  }'
```

**Réponse attendue** :
```json
{
  "success": true,
  "message": "Contact successfully added to Mailchimp",
  "data": {
    "id": "...",
    "email_address": "test-api@can-nx.com",
    "status": "subscribed"
  }
}
```

---

## ⚠️ Dépannage

### Erreur 400 : "Missing required fields"

**Cause** : Un champ requis est manquant

**Solution** : Vérifiez que ces champs sont remplis :
- firstName
- lastName
- email
- phone
- profession

### Erreur 500 : "Server configuration error"

**Cause** : Les secrets Supabase ne sont pas configurés

**Solution** : Configurez les secrets :
```bash
supabase secrets set MAILCHIMP_API_KEY=votre_clé
supabase secrets set MAILCHIMP_LIST_ID=958113a82e
supabase secrets set MAILCHIMP_DC=us17
```

### Erreur Mailchimp : "Invalid Resource"

**Cause** : La profession ne correspond pas aux valeurs Mailchimp

**Solution** : Utilisez exactement ces valeurs :
- Installateur
- Electrician
- Integrateur
- Distributeur
- Developer
- Marketing
- Manufacturer
- other

### Le contact existe déjà (400)

**Ce n'est pas une erreur !** L'intégration traite le code 400 comme un succès si le contact existe déjà.

### Toast "Message envoyé !" mais pas dans Mailchimp

**Vérifications** :
1. ✓ Vérifiez les logs du serveur Supabase
2. ✓ Vérifiez que MAILCHIMP_LIST_ID = `958113a82e`
3. ✓ Vérifiez que MAILCHIMP_DC = `us17`
4. ✓ Vérifiez l'API Key Mailchimp

---

## 📊 Logs à Vérifier

### Frontend (Console navigateur)
```javascript
Submitting to Mailchimp server: https://xxx.supabase.co/functions/v1/make-server-0ad4a4f9/mailchimp-subscribe
Mailchimp server response: {status: 200, result: {...}}
```

### Backend (Logs Supabase)

Allez sur : **Supabase Dashboard** → **Edge Functions** → **Logs**

```
Sending to Mailchimp: { email: 'test@can-nx.com', name: 'Test User', profession: 'Installateur' }
Mailchimp success: { email: 'test@can-nx.com', status: 'New contact', mailchimpStatus: 200 }
```

---

## ✅ Checklist Finale

- [ ] Formulaire se remplit correctement
- [ ] Bouton "Envoyer" affiche le loader
- [ ] Toast de succès apparaît
- [ ] Console ne montre pas d'erreurs
- [ ] Contact apparaît dans Mailchimp
- [ ] Tous les merge fields sont corrects
- [ ] Tous les tags sont présents
- [ ] Status est "subscribed" (si newsletter cochée)

---

## 🎉 Tout Fonctionne !

Si tous les tests passent, votre intégration Mailchimp est **100% opérationnelle** ! 🚀

Vous pouvez maintenant :
- ✅ Recevoir des contacts via le formulaire
- ✅ Voir toutes les informations dans Mailchimp
- ✅ Segmenter par tags (profession, produit, etc.)
- ✅ Envoyer des campagnes ciblées

**Aucune configuration supplémentaire n'est nécessaire !**

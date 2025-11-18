# 🐛 Debug Mailchimp - Guide de Dépannage

## 🎯 OBJECTIF

Si le formulaire ne fonctionne pas ou si vous avez des erreurs, suivez ce guide pour déboguer.

---

## 📊 ÉTAPE 1 : VÉRIFIER LES LOGS SUPABASE

### A. Accéder aux Logs

1. Allez sur https://supabase.com
2. Connectez-vous
3. Sélectionnez votre projet Can-nX
4. Menu gauche : **Edge Functions**
5. Cliquez sur la fonction **server**
6. Onglet **Logs**

### B. Soumettre le Formulaire

1. Gardez la page Supabase Logs ouverte
2. Dans un autre onglet, ouvrez votre site Can-nX
3. Remplissez le formulaire de contact
4. Soumettez

### C. Lire les Logs

**✅ Ce que vous DEVRIEZ voir (succès)** :

```
Extracted datacenter from API key: us17
Mailchimp URL (sanitized): https://us17.api.mailchimp.com/3.0/lists/LIST_ID/members/HASH
Sending to Mailchimp (upsert): { 
  email: 'test@example.com', 
  name: 'Jean Dupont',
  profession: 'Installateur',
  productInterest: 'Kloud'nX, Pool'nX',
  hasMessage: 'Yes'
}
Mailchimp success: {
  email: 'test@example.com',
  status: 'Contact created/updated',
  mailchimpStatus: 200,
  contactStatus: 'subscribed'
}
```

**❌ Ce que vous pourriez voir (erreur)** :

```
Mailchimp API error: {
  status: 400,
  statusText: 'Bad Request',
  response: {
    type: 'http://developer.mailchimp.com/documentation/mailchimp/guides/error-glossary/',
    title: 'Invalid Resource',
    status: 400,
    detail: 'The resource submitted could not be validated. For field-specific details, see the 'errors' array.',
    instance: '...',
    errors: [
      {
        field: 'merge_fields.MMERGE10',
        message: 'This field does not exist'
      }
    ]
  },
  email: 'test@example.com'
}
```

---

## 🔍 ÉTAPE 2 : INTERPRÉTER LES ERREURS

### Erreur : "This field does not exist" (MMERGE10 ou MMERGE11)

**Problème** : Le merge field n'existe pas dans Mailchimp

**Solution** :
1. Créez le champ dans Mailchimp (voir `/MAILCHIMP_VISUAL_SETUP.md`)
2. Attendez 1-2 minutes
3. Réessayez

---

### Erreur : "Member In Compliance State"

**Problème** : L'email a été désinscrit ou est dans un état de conformité GDPR

**Détail complet dans les logs** :
```json
{
  "title": "Member In Compliance State",
  "detail": "jean@example.com was permanently deleted and cannot be re-imported. The contact must re-subscribe to get back on the list."
}
```

**Solution** :
- **Pour test** : Utilisez un autre email
- **Pour contact réel** : Le contact doit se réabonner manuellement via un formulaire Mailchimp

---

### Erreur : "Invalid Resource" (autre que merge fields)

**Problème** : Un champ envoyé n'est pas valide

**Détail complet dans les logs** :
```json
{
  "errors": [
    {
      "field": "email_address",
      "message": "Please enter a valid email address"
    }
  ]
}
```

**Solution** :
- Vérifiez le format de l'email
- Vérifiez que tous les champs requis sont remplis

---

### Erreur : "Resource Not Found"

**Problème** : Le List ID est incorrect

**Détail complet dans les logs** :
```json
{
  "title": "Resource Not Found",
  "status": 404,
  "detail": "The requested resource could not be found."
}
```

**Solution** :
1. Vérifiez `MAILCHIMP_LIST_ID` dans Supabase Edge Functions secrets
2. Pour trouver votre List ID dans Mailchimp :
   - Audience → Settings → Audience name and defaults
   - Cherchez "Audience ID" (format: abc123def4)

---

### Erreur : "API Key Invalid"

**Problème** : L'API key est incorrecte ou expirée

**Détail complet dans les logs** :
```json
{
  "title": "API Key Invalid",
  "status": 401,
  "detail": "Your API key may be invalid, or you've attempted to access the wrong datacenter."
}
```

**Solution** :
1. Vérifiez `MAILCHIMP_API_KEY` dans Supabase Edge Functions secrets
2. Pour générer une nouvelle API key :
   - Mailchimp → Account → Extras → API keys
   - Create A Key
   - Copiez la clé COMPLÈTE (format: xxxxx-us17)

---

### Erreur : "Forgotten Email Not Subscribed"

**Problème** : L'email a été "oublié" suite à une demande GDPR

**Solution** : Même que "Member In Compliance State"

---

## 🧪 ÉTAPE 3 : TESTS DE VALIDATION

### Test 1 : Vérifier les Variables d'Environnement

Dans Supabase :
1. Edge Functions → server → Settings
2. Vérifiez que ces secrets existent :
   - `MAILCHIMP_API_KEY`
   - `MAILCHIMP_LIST_ID`
   - `MAILCHIMP_DC` (optionnel)

**Format attendu** :
```
MAILCHIMP_API_KEY = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us17
MAILCHIMP_LIST_ID = abc123def4
MAILCHIMP_DC = us17 (optionnel, extrait de l'API key)
```

---

### Test 2 : Vérifier les Merge Fields dans Mailchimp

1. Mailchimp → Audience → Settings → Audience fields
2. Vérifiez que ces champs existent :

| Field Label | Field Tag | Type | Required |
|------------|-----------|------|----------|
| Name | NAME | Text | Yes |
| Country | MMERGE1 | Text | Yes |
| Profession | MMERGE5 | Text | Yes |
| Company Name | MMERGE6 | Text | No |
| Phone Number | MMERGE8 | Phone | Yes |
| Product Interest | MMERGE10 | Text | No |
| Message | MMERGE11 | Text | No |

⚠️ **IMPORTANT** : Les tags doivent être **exactement** comme ci-dessus. Si Mailchimp a généré d'autres tags (ex: MMERGE7 au lieu de MMERGE10), notez-les.

---

### Test 3 : Tester avec un Email Nouveau

Utilisez un email qui n'a **JAMAIS** été dans votre liste Mailchimp :

```
test-nouveau-2025-11-10@example.com
```

1. Remplissez le formulaire avec cet email
2. Soumettez
3. ✅ Devrait créer un nouveau contact sans erreur
4. Vérifiez dans Mailchimp

---

### Test 4 : Tester la Mise à Jour

Utilisez le **même email** que Test 3 :

1. Changez quelques infos (ex: téléphone, entreprise)
2. Soumettez
3. ✅ Devrait mettre à jour le contact existant
4. Vérifiez dans Mailchimp qu'il n'y a PAS de doublon

---

## 🛠️ ÉTAPE 4 : CORRECTIONS AVANCÉES

### Si les tags MMERGE sont différents

Si Mailchimp a généré `MMERGE7` au lieu de `MMERGE10`, vous devez modifier le code :

**Fichier** : `/supabase/functions/server/index.tsx`

**Trouvez** (ligne ~77-83) :
```typescript
merge_fields: {
  NAME: `${formData.firstName} ${formData.lastName}`,
  MMERGE1: formData.country,
  MMERGE5: formData.profession,
  MMERGE6: formData.company || '',
  MMERGE8: formData.phone,
  MMERGE10: formData.productInterest || '', // ⬅️ CHANGEZ ICI
  MMERGE11: formData.message || '' // ⬅️ ET ICI
}
```

**Remplacez** avec vos vrais tags :
```typescript
merge_fields: {
  NAME: `${formData.firstName} ${formData.lastName}`,
  MMERGE1: formData.country,
  MMERGE5: formData.profession,
  MMERGE6: formData.company || '',
  MMERGE8: formData.phone,
  MMERGE7: formData.productInterest || '', // ⬅️ Exemple si c'est MMERGE7
  MMERGE9: formData.message || '' // ⬅️ Exemple si c'est MMERGE9
}
```

---

### Si le datacenter est incorrect

Le code extrait automatiquement le datacenter de l'API key, mais si vous avez une erreur :

**Logs** :
```
Extracted datacenter from API key: us17
```

**Vérifiez** que c'est correct :
- Si votre Mailchimp URL est `https://us21.admin.mailchimp.com/...`
- Alors le datacenter devrait être `us21`

**Si différent**, ajoutez/modifiez la variable :
```
MAILCHIMP_DC = us21
```

---

## 📊 TABLEAU DE DÉPANNAGE RAPIDE

| Symptôme | Cause Probable | Solution |
|----------|---------------|----------|
| "Invalid Resource" + field MMERGE10 | Champ n'existe pas | Créer MMERGE10 dans Mailchimp |
| "Invalid Resource" + field MMERGE11 | Champ n'existe pas | Créer MMERGE11 dans Mailchimp |
| "Member In Compliance State" | Email désinscrit/supprimé | Utiliser autre email |
| "Resource Not Found" 404 | Mauvais List ID | Vérifier MAILCHIMP_LIST_ID |
| "API Key Invalid" 401 | Mauvaise API key | Vérifier MAILCHIMP_API_KEY |
| Success mais champs vides | Tags incorrects | Vérifier tags dans Mailchimp |
| Contacts en doublon | Ancien code (POST) | Code mis à jour utilise PUT |
| Erreur réseau | Datacenter incorrect | Vérifier MAILCHIMP_DC |

---

## 📝 COMMANDES UTILES

### Vérifier les secrets Supabase (ligne de commande)

Si vous utilisez Supabase CLI :

```bash
# Lister les secrets
supabase secrets list

# Voir un secret spécifique (ne montre pas la valeur)
supabase secrets get MAILCHIMP_API_KEY
```

### Tester l'API Mailchimp directement (curl)

Pour tester si vos credentials fonctionnent :

```bash
curl -X GET \
  "https://us17.api.mailchimp.com/3.0/lists/YOUR_LIST_ID" \
  -u "anystring:YOUR_API_KEY"
```

**Remplacez** :
- `us17` par votre datacenter
- `YOUR_LIST_ID` par votre List ID
- `YOUR_API_KEY` par votre API key

**Résultat attendu** : JSON avec les infos de votre liste

---

## 🎯 CHECKLIST DE DEBUG

Avant de demander de l'aide, vérifiez :

- [ ] Les logs Supabase montrent l'erreur exacte
- [ ] Les 3 secrets existent dans Supabase (API_KEY, LIST_ID, DC)
- [ ] Les 7 merge fields existent dans Mailchimp
- [ ] Les tags des merge fields correspondent au code
- [ ] Vous avez testé avec un email complètement nouveau
- [ ] Vous avez attendu 1-2 minutes après avoir créé les champs
- [ ] Le datacenter est correct
- [ ] L'API key est au bon format (avec -us17 à la fin)

---

## 🆘 AIDE SUPPLÉMENTAIRE

### Documentation Mailchimp
- Error Glossary : https://mailchimp.com/developer/marketing/docs/errors/
- API Reference : https://mailchimp.com/developer/marketing/api/

### Fichiers de Documentation
- `/MAILCHIMP_SETUP_REQUIRED.md` - Configuration complète
- `/MAILCHIMP_QUICK_TEST.md` - Guide de test
- `/ACTIONS_REQUISES.md` - Actions rapides

### Logs Détaillés

Pour activer des logs encore plus détaillés, vous pouvez temporairement modifier `/supabase/functions/server/index.tsx` :

**Ajoutez** avant l'appel à Mailchimp (ligne ~104) :
```typescript
console.log('DEBUG - Full mailchimp data:', JSON.stringify(mailchimpData, null, 2));
```

---

## ✅ VALIDATION FINALE

Le formulaire fonctionne correctement si :

1. ✅ Les logs montrent "Mailchimp success"
2. ✅ Le contact apparaît dans Mailchimp
3. ✅ Tous les 8 merge fields sont remplis
4. ✅ Le tag "Can-nX Lead" est appliqué
5. ✅ La mise à jour fonctionne (pas de doublon)
6. ✅ L'overlay de succès s'affiche dans le formulaire

---

**Date** : 10 Novembre 2025  
**Version** : 2.0  
**Type** : Guide de dépannage technique

# 📜 HISTORIQUE DES MESSAGES MAILCHIMP

## ✅ FONCTIONNALITÉ IMPLÉMENTÉE

Le formulaire de contact Can-nX permet maintenant aux utilisateurs d'**envoyer plusieurs messages avec le même email** sans perdre l'historique.

---

## 🎯 COMMENT ÇA FONCTIONNE

### Format de stockage dans MMERGE11 :

```
[2025-11-10 14:30] Premier message : Je veux un devis pour Kloud'nX | [2025-11-10 16:45] Deuxième message : Question sur Pool'nX | [2025-11-11 09:15] Troisième message : Quand livraison?
```

### Règles :

1. **Timestamp automatique** : Chaque message reçoit `[YYYY-MM-DD HH:MM]`
2. **Séparateur** : Les messages sont séparés par ` | `
3. **Ordre** : Le **message le plus récent est en premier**
4. **Limite** : Garde les **5 derniers messages** uniquement
5. **Taille** : Respecte les limites de champ Mailchimp (~2000 caractères)

---

## 🔍 EXEMPLE DE SCÉNARIO

### Premier envoi :
```
Email: jean@entreprise.fr
Message: "Je veux un devis pour Kloud'nX"

→ MMERGE11 dans Mailchimp :
[2025-11-10 14:30] Je veux un devis pour Kloud'nX
```

### Deuxième envoi (même email) :
```
Email: jean@entreprise.fr
Message: "Question sur Pool'nX aussi"

→ MMERGE11 dans Mailchimp :
[2025-11-10 16:45] Question sur Pool'nX aussi | [2025-11-10 14:30] Je veux un devis pour Kloud'nX
```

### Troisième envoi :
```
Email: jean@entreprise.fr
Message: "Quand livraison?"

→ MMERGE11 dans Mailchimp :
[2025-11-11 09:15] Quand livraison? | [2025-11-10 16:45] Question sur Pool'nX aussi | [2025-11-10 14:30] Je veux un devis pour Kloud'nX
```

---

## 🧪 COMMENT TESTER

### Test 1 : Premier message
1. Remplir le formulaire avec `test-historique@can-nx.com`
2. Message : "Premier message de test"
3. Envoyer
4. ✅ Vérifier dans Mailchimp → MMERGE11 :
   ```
   [2025-11-10 XX:XX] Premier message de test
   ```

### Test 2 : Deuxième message (MÊME email)
1. Remplir le formulaire avec `test-historique@can-nx.com`
2. Message : "Deuxième message"
3. Envoyer
4. ✅ Vérifier dans Mailchimp → MMERGE11 :
   ```
   [2025-11-10 XX:XX] Deuxième message | [2025-11-10 XX:XX] Premier message de test
   ```

### Test 3 : Troisième message
1. Répéter avec "Troisième message"
2. ✅ Vérifier : Les 3 messages sont présents, **le plus récent en premier**

### Test 4 : Limite de 5 messages
1. Envoyer 6-7 messages avec le même email
2. ✅ Vérifier : Seulement les **5 derniers messages** sont gardés

---

## 📊 VISUALISATION DANS MAILCHIMP

Quand vous ouvrez un contact dans Mailchimp :

```
┌─────────────────────────────────────────────────────────┐
│ Contact: jean@entreprise.fr                             │
├─────────────────────────────────────────────────────────┤
│ MMERGE11 (Message History):                             │
│                                                          │
│ [2025-11-11 09:15] Quand livraison? |                   │
│ [2025-11-10 16:45] Question sur Pool'nX aussi |         │
│ [2025-11-10 14:30] Je veux un devis pour Kloud'nX       │
│                                                          │
│ ↑                                                        │
│ Plus récent en premier                                  │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠️ DÉTAILS TECHNIQUES

### Backend : `/supabase/functions/server/index.tsx`

```typescript
// 1. Récupérer l'historique existant du contact
const getResponse = await fetch(mailchimpUrl, { method: 'GET' });
const existingContact = await getResponse.json();
const existingMessageHistory = existingContact.merge_fields?.MMERGE11 || '';

// 2. Ajouter nouveau message avec timestamp
const timestamp = new Date().toISOString().slice(0, 16).replace('T', ' ');
const newMessage = `[${timestamp}] ${formData.message}`;

// 3. Combiner et limiter à 5 messages
const messages = existingMessageHistory.split(' | ').filter(m => m.trim());
messages.unshift(newMessage); // Ajouter au début
const recentMessages = messages.slice(0, 5); // Garder 5 derniers

// 4. Envoyer à Mailchimp
const messageHistoryField = recentMessages.join(' | ');
```

---

## ✅ AVANTAGES

1. **Aucun message perdu** : Historique complet dans Mailchimp
2. **Contexte B2B** : Voir l'évolution des demandes du lead
3. **Traçabilité** : Timestamps précis
4. **Performance** : Pas de base de données séparée nécessaire
5. **Simple** : Tout dans un seul champ Mailchimp

---

## ⚠️ LIMITATIONS

1. **Maximum 5 messages** : Les messages 6+ sont supprimés
2. **Taille champ** : Mailchimp limite ~2000 caractères
3. **Pas de recherche avancée** : Impossible de filtrer par message spécifique
4. **Format fixe** : Ne peut pas modifier les messages passés

---

## 🔮 AMÉLIORATIONS FUTURES

Si besoin d'historique illimité :
- Utiliser Supabase KV Store en parallèle
- Créer endpoint `/api/contact-history/:email`
- Dashboard admin pour voir tous les messages

---

## 📞 SUPPORT

Si un contact envoie plus de 5 messages, consulter les logs du serveur :
```bash
# Les logs Supabase montrent tous les messages, même supprimés
```

---

**Documentation créée le 2025-11-10**
**Version: 1.0**

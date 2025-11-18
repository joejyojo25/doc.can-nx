# 🐛 DEBUG - HISTORIQUE DES MESSAGES

## 🚨 PROBLÈME : Seul le dernier message est visible

**Symptôme** : Vous voyez seulement le message le plus récent, pas l'historique.

---

## 🔍 DIAGNOSTIC EN 3 ÉTAPES (10 min)

### ÉTAPE 1 : Vérifier les logs Supabase (2 min)

**C'est la clé pour comprendre le problème !**

#### Comment accéder aux logs :

1. **Ouvrez Supabase Dashboard** : https://supabase.com/dashboard

2. **Naviguez** :
   ```
   Votre projet
   → Edge Functions (menu gauche)
   → server (cliquez dessus)
   → Logs (onglet)
   ```

3. **Cherchez** ces lignes dans les logs :
   ```
   "Found existing contact with message history: Yes"
   ou
   "No existing contact found (new lead)"
   ```

#### 📊 Interprétation des logs :

**CAS A - Vous voyez** :
```
Found existing contact with message history: Yes
Message history: 2 total, keeping 2 most recent
Sending to Mailchimp (upsert): { messageHistory: "[2025-11-10...] Msg2 | [2025-11-10...] Msg1..." }
```

✅ **LE BACKEND FONCTIONNE !** Le problème vient de Mailchimp.

**→ Allez à ÉTAPE 2**

---

**CAS B - Vous voyez** :
```
No existing contact found (new lead)
First message from this contact
```

**POUR CHAQUE ENVOI**, même le 2ème avec le même email.

❌ **Le GET request échoue** → Le backend ne trouve jamais le contact existant

**→ Allez à ÉTAPE 3**

---

**CAS C - Vous NE voyez PAS** ces lignes :
```
(Aucun log avec "message history")
```

❌ **Backend pas déployé** ou ancienne version

**→ SOLUTION** :
```bash
# Redéployez
supabase functions deploy server --no-verify-jwt

# Attendez 60 secondes
# Réessayez
```

---

### ÉTAPE 2 : Problème Mailchimp (3 min)

**Si les logs montrent que le backend envoie l'historique correctement mais Mailchimp n'affiche qu'un message** :

#### Vérification MMERGE11 dans Mailchimp :

1. **Ouvrez Mailchimp** → Audience → Settings → Audience fields

2. **Trouvez MMERGE11** (ou "Message History")

3. **Vérifiez** :
   - [ ] **Type** : Doit être **Text** (PAS Dropdown, PAS Number)
   - [ ] **Field size** : Doit être **Large** ou **Long text** (PAS Small)
   - [ ] **Default value** : Doit être **vide**

#### 🔧 Si mauvaise configuration :

**Problème** : Type = Dropdown ou Number

**Solution** :
1. Mailchimp → Audience fields
2. Trouvez MMERGE11
3. Cliquez **Edit**
4. Changez Type → **Text**
5. Field size → **Large**
6. Sauvegardez
7. **Réessayez** votre test

---

**Problème** : Field size = Small

**Solution** :
1. Éditez MMERGE11
2. Field size → **Large** ou **Long text**
3. Sauvegardez
4. Réessayez

---

### ÉTAPE 3 : GET request échoue (5 min)

**Si logs montrent toujours "No existing contact found" même pour le 2ème message** :

#### Causes possibles :

**A) Datacenter Mailchimp incorrect**

Vérifiez dans les logs si vous voyez une erreur de datacenter.

**Solution** :
```bash
# Vérifiez votre datacenter
# Regardez votre API key Mailchimp : xxxxx-us17
# Le datacenter est après le "-"

# Mettez à jour le secret
supabase secrets set MAILCHIMP_DC=us17  # Remplacez us17 par votre DC

# Redéployez
supabase functions deploy server --no-verify-jwt
```

---

**B) Contact pas encore créé dans Mailchimp**

Vérifiez manuellement dans Mailchimp si le contact existe.

**Solution** :
1. Mailchimp → Audience → All contacts
2. Cherchez l'email du test
3. Si contact N'EXISTE PAS → C'est normal pour le 1er message
4. Envoyez un 2ème message
5. Vérifiez les logs → Devrait dire "Found existing contact"

---

**C) Erreur d'authentification Mailchimp**

Les logs montrent une erreur 401 ou 403.

**Solution** :
```bash
# Vérifiez l'API key
supabase secrets list

# Si besoin, remettez la clé
supabase secrets set MAILCHIMP_API_KEY=votre-cle-ici

# Redéployez
supabase functions deploy server --no-verify-jwt
```

---

## 🧪 TEST COMPLET AVEC LOGS (5 min)

### Faites ce test pendant que vous regardez les logs en temps réel :

1. **Ouvrez les logs Supabase** (rafraîchissement auto)

2. **Premier message** :
   ```
   Email: debug-test@votredomaine.com
   Message: "PREMIER MESSAGE TEST"
   → Envoyez
   ```

3. **Vérifiez logs** :
   ```
   ✅ Attendu: "No existing contact found (new lead)"
   ✅ Attendu: "First message from this contact"
   ```

4. **Deuxième message (MÊME EMAIL)** :
   ```
   Email: debug-test@votredomaine.com
   Message: "DEUXIEME MESSAGE TEST"
   → Envoyez
   ```

5. **Vérifiez logs** :
   ```
   ✅ Attendu: "Found existing contact with message history: Yes"
   ✅ Attendu: "Message history: 2 total, keeping 2 most recent"
   ```

6. **Vérifiez Mailchimp** :
   ```
   Contact: debug-test@votredomaine.com
   MMERGE11: [Date] DEUXIEME MESSAGE TEST | [Date] PREMIER MESSAGE TEST
   ```

---

## 📊 TABLEAU DE DIAGNOSTIC

| Symptôme | Logs Supabase | Cause | Solution |
|----------|---------------|-------|----------|
| Seul dernier message visible | "Found existing contact: Yes" + "Message history: 2 total" | Mailchimp type champ incorrect | ÉTAPE 2 : Changer MMERGE11 type → Text |
| Seul dernier message visible | Toujours "No existing contact found" | GET request échoue | ÉTAPE 3 : Vérifier datacenter/auth |
| Seul dernier message visible | Pas de logs "message history" | Backend pas déployé | Redéployer Edge Functions |
| Erreur 500 | Erreur dans logs | Erreur code backend | Copier erreur et consulter |

---

## 🔧 SOLUTION RAPIDE

**Si vous ne voulez pas déboguer, essayez ça** :

```bash
# 1. Vérifiez secrets
supabase secrets list

# 2. Vérifiez que MMERGE11 est type Text dans Mailchimp

# 3. Redéployez backend
supabase functions deploy server --no-verify-jwt

# 4. Attendez 60 secondes

# 5. Test avec email unique :
#    Envoi 1 : test-debug-1@votredomaine.com
#    Envoi 2 : test-debug-1@votredomaine.com (MÊME)

# 6. Vérifiez Mailchimp MMERGE11
```

---

## 🆘 TOUJOURS PAS RÉSOLU ?

### Collectez ces informations :

1. **Logs Supabase** (copiez les 20 dernières lignes)
2. **Type de MMERGE11** dans Mailchimp (Text ? Dropdown ?)
3. **Message d'erreur** dans Console navigateur (F12)
4. **Email de test** utilisé

### Partagez-les et on déboguera ensemble.

---

## ✅ VALIDATION FINALE

Quand tout fonctionne, vous devriez voir :

**Logs Supabase** :
```
[Premier envoi]
No existing contact found (new lead)
First message from this contact
Mailchimp success

[Deuxième envoi MÊME EMAIL]
Found existing contact with message history: Yes
Message history: 2 total, keeping 2 most recent
Sending to Mailchimp (upsert): { messageHistory: "[2025-11-10 XX:XX] Msg2 | [2025-11-10 XX:XX] Msg1..." }
Mailchimp success
```

**Mailchimp** :
```
MMERGE11: [2025-11-10 XX:XX] DEUXIEME MESSAGE TEST | [2025-11-10 XX:XX] PREMIER MESSAGE TEST
```

---

**Créé le** : 2025-11-10  
**Temps estimé** : 10 minutes max

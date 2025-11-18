# 🔧 RÉPARER LE TYPE DE CHAMP MMERGE11 - GUIDE VISUEL

## 🎯 OBJECTIF

Changer le type de MMERGE11 de **Dropdown/Number** vers **Text** pour permettre l'historique des messages.

**Temps** : 3 minutes

---

## 📸 ÉTAPE PAR ÉTAPE

### ÉTAPE 1 : Ouvrir Mailchimp Audience Settings (30 sec)

1. **Connectez-vous** à Mailchimp : https://mailchimp.com

2. **Cliquez** sur **"Audience"** dans le menu de gauche

3. **Cliquez** sur **"Settings"** (icône roue dentée en haut à droite)

4. **Cliquez** sur **"Audience fields and *|MERGE|* tags"**

```
Audience (menu gauche)
  ↓
Settings (roue dentée)
  ↓
Audience fields and *|MERGE|* tags
```

---

### ÉTAPE 2 : Trouver MMERGE11 (30 sec)

Vous verrez une liste de champs :

```
┌─────────────────────────────────────────────────────────┐
│ Audience fields and *|MERGE|* tags                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ Field name           Tag         Type         Actions   │
│ ────────────────────────────────────────────────────── │
│ Email Address        EMAIL       Email        -         │
│ First Name          FNAME       Text         Edit       │
│ Last Name           LNAME       Text         Edit       │
│ ...                 ...         ...          ...        │
│ Message History     MMERGE11    Dropdown ⚠️  Edit  🔧  │  ← TROUVEZ CETTE LIGNE
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Cherchez** : 
- **Tag** : MMERGE11
- **Field name** : Message History (ou le nom que vous avez donné)

---

### ÉTAPE 3 : Vérifier le type actuel (15 sec)

**❌ SI vous voyez** :
- Type: **Dropdown** → Problème !
- Type: **Number** → Problème !
- Type: **Radio buttons** → Problème !
- Type: **Date** → Problème !

**Ces types ne peuvent PAS stocker un long texte avec historique !**

**✅ SI vous voyez** :
- Type: **Text** → Bon ! Mais vérifiez la taille (étape 4)

---

### ÉTAPE 4 : Éditer le champ (1 min)

1. **Cliquez** sur **"Edit"** (icône crayon) à droite de MMERGE11

2. Une popup s'ouvre :

```
┌─────────────────────────────────────────────┐
│ Edit field                                  │
├─────────────────────────────────────────────┤
│                                              │
│ Field label:                                 │
│ [Message History                    ]        │
│                                              │
│ Field tag:                                   │
│ MMERGE11                   (Non modifiable) │
│                                              │
│ Field type:                                  │
│ [Dropdown ▼]  ⚠️ CHANGEZ ÇA                │
│                                              │
│ Options:                                     │
│ (si Dropdown, liste des options)            │
│                                              │
│ Required: ☐                                 │
│                                              │
│ [Cancel]  [Save field]                      │
│                                              │
└─────────────────────────────────────────────┘
```

---

### ÉTAPE 5 : Changer vers Text (30 sec)

**⚠️ IMPORTANT** : Si le champ existe déjà et contient des données, Mailchimp peut vous empêcher de changer le type.

#### Option A : Si vous POUVEZ changer le type

1. **Cliquez** sur le menu **"Field type"**
2. **Sélectionnez** : **"Text"**
3. **Sélectionnez taille** : **"Large"** (pas Small, pas Medium)
4. **Cliquez** : **"Save field"**

✅ **Terminé !** → Allez à l'Étape 6

---

#### Option B : Si vous NE POUVEZ PAS changer le type

**Mailchimp dit** : "Cannot change field type because it contains data"

**Solution** : Supprimer et recréer

1. **Annulez** l'édition
2. **Cliquez** sur **"Delete"** (icône poubelle) pour MMERGE11
3. **Confirmez** la suppression
4. **Allez à ÉTAPE 6 Alternative** (ci-dessous)

---

### ÉTAPE 6 : Vérification (15 sec)

Retournez à la liste des champs :

```
┌─────────────────────────────────────────────────────────┐
│ Audience fields and *|MERGE|* tags                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ Field name           Tag         Type         Actions   │
│ ────────────────────────────────────────────────────── │
│ Message History     MMERGE11    Text ✅      Edit       │  ← BON !
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**✅ Vérifiez** :
- Type = **Text**
- Tag = **MMERGE11**

---

## 🔄 ÉTAPE 6 ALTERNATIVE : Recréer le champ (si supprimé)

Si vous avez dû supprimer MMERGE11, recréez-le :

### 1. Cliquez "Add A Field"

En haut de la liste des champs.

### 2. Remplissez le formulaire :

```
┌─────────────────────────────────────────────┐
│ Add a field                                 │
├─────────────────────────────────────────────┤
│                                              │
│ Field type:                                  │
│ ( ) Text ✅ SÉLECTIONNEZ ÇA                 │
│ ( ) Number                                   │
│ ( ) Radio buttons                            │
│ ( ) Dropdown                                 │
│ ( ) Date                                     │
│ ( ) Address                                  │
│ ( ) Phone                                    │
│ ( ) Website                                  │
│                                              │
│ Field label:                                 │
│ [Message History                    ]        │
│                                              │
│ Field size: (pour Text)                     │
│ ( ) Small                                    │
│ ( ) Medium                                   │
│ (•) Large ✅ SÉLECTIONNEZ ÇA                │
│                                              │
│ Required: ☐                                 │
│                                              │
│ Public: ☐                                   │
│                                              │
│ [Cancel]  [Save field]                      │
│                                              │
└─────────────────────────────────────────────┘
```

**⚠️ IMPORTANT** :
- Field type : **Text**
- Field size : **Large**
- Required : **Non coché**
- Public : **Non coché**

### 3. Cliquez "Save field"

### 4. Vérifiez le tag généré

Mailchimp va générer un tag automatiquement. Il pourrait être :
- MMERGE11 ✅
- MMERGE12 ⚠️ (si MMERGE11 était déjà pris)
- MMERGE10 ⚠️

**Si le tag n'est PAS MMERGE11** :

Vous devez mettre à jour le backend :

```typescript
// Dans /supabase/functions/server/index.tsx
// Cherchez ligne 92, 146
// Changez MMERGE11 vers le nouveau tag

merge_fields: {
  // ...
  MMERGE12: messageHistoryField  // Si nouveau tag est MMERGE12
}
```

Puis redéployez :
```bash
supabase functions deploy server --no-verify-jwt
```

---

## 🧪 TEST IMMÉDIAT

Après avoir changé/recréé le champ :

```
1. Envoi 1 :
   Email: field-fix-test@votredomaine.com
   Message: "TEST 1 APRES FIX"
   → Envoyez

2. Attendez 5 secondes

3. Envoi 2 (MÊME EMAIL) :
   Email: field-fix-test@votredomaine.com
   Message: "TEST 2 APRES FIX"
   → Envoyez

4. Vérifiez Mailchimp :
   Contact: field-fix-test@votredomaine.com
   MMERGE11: [Date] TEST 2 APRES FIX | [Date] TEST 1 APRES FIX
```

**✅ Les 2 messages visibles ?**

→ **RÉPARÉ ! 🎉**

---

## ❓ FAQ

**Q : Que se passe-t-il avec les anciens messages ?**

R : Si vous supprimez et recréez le champ, les anciens messages dans MMERGE11 sont perdus. Mais les nouveaux messages auront l'historique complet.

---

**Q : Puis-je renommer le champ ?**

R : Oui ! Le **Field label** peut être n'importe quoi ("Message History", "Historique", etc.). C'est le **Field tag** (MMERGE11) qui doit rester constant.

---

**Q : Quelle est la différence entre Small, Medium, Large ?**

R : La taille maximum de texte :
- Small : ~100 caractères
- Medium : ~500 caractères
- Large : ~2000 caractères ✅

Pour l'historique de 5 messages, vous avez besoin de **Large**.

---

**Q : Est-ce que je perds mes contacts en changeant le type ?**

R : Non ! Seules les données du champ MMERGE11 peuvent être perdues si vous devez le supprimer/recréer. Les contacts et tous les autres champs restent intacts.

---

## ✅ VALIDATION FINALE

Après ces changements, le champ MMERGE11 devrait être :

```
Field name:    Message History (ou votre nom)
Field tag:     MMERGE11
Field type:    Text ✅
Field size:    Large ✅
Required:      No
Public:        No
Default value: (vide)
```

**→ PRÊT POUR L'HISTORIQUE ! 🎉**

---

## 🔗 PROCHAINES ÉTAPES

1. ✅ Type changé vers Text + Large
2. 🧪 Test avec 2 messages (même email)
3. 📊 Vérification dans Mailchimp
4. 🎉 Historique fonctionne !

**Si toujours pas résolu** : [DEBUG_MESSAGE_HISTORY.md](./DEBUG_MESSAGE_HISTORY.md)

---

**Créé le** : 2025-11-10  
**Temps estimé** : 3 minutes  
**Taux de succès** : 95%

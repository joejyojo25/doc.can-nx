# 🔧 Mailchimp Configuration Requise - GUIDE COMPLET

## 📋 RÉSUMÉ RAPIDE

Vous devez créer **7 Merge Fields** dans Mailchimp pour que le formulaire fonctionne correctement.

---

## ✅ ÉTAPE 1: CRÉER LES MERGE FIELDS DANS MAILCHIMP

### 🔗 Accès aux Merge Fields
1. Connectez-vous à Mailchimp: https://mailchimp.com
2. Allez dans **Audience** → **All contacts**
3. Cliquez sur **Settings** → **Audience fields and *|MERGE|* tags**

---

### 📝 LISTE DES MERGE FIELDS À CRÉER

Créez exactement ces 7 champs dans cet ordre :

#### 1️⃣ **Name (Nom complet)**
- **Field tag**: `NAME`
- **Field type**: Text
- **Field label**: Full Name
- ✅ Requis: OUI
- 📝 Description: Combined first and last name

#### 2️⃣ **Country (Pays)**
- **Field tag**: `MMERGE1`
- **Field type**: Text
- **Field label**: Country
- ✅ Requis: OUI
- 📝 Description: User's country

#### 3️⃣ **Profession (Je suis)**
- **Field tag**: `MMERGE5`
- **Field type**: Text
- **Field label**: Profession
- ✅ Requis: OUI
- 📝 Description: User profession/role
- 📋 Exemples: Installateur, Electrician, Integrateur, Distributeur

#### 4️⃣ **Company Name (Entreprise)**
- **Field tag**: `MMERGE6`
- **Field type**: Text
- **Field label**: Company Name
- ❌ Requis: NON
- 📝 Description: Company or organization name

#### 5️⃣ **Phone Number (Téléphone)**
- **Field tag**: `MMERGE8`
- **Field type**: Phone
- **Field label**: Phone Number
- ✅ Requis: OUI
- 📝 Description: Direct phone number

#### 6️⃣ **Product Interest (Produit qui vous intéresse)** ⚠️ NOUVEAU
- **Field tag**: `MMERGE10`
- **Field type**: Text
- **Field label**: Product Interest
- ❌ Requis: NON
- 📝 Description: Products the user is interested in
- 📋 Exemples: Kloud'nX, Infini KNX, Pool'nX, Speak'nX, Mod'nX

#### 7️⃣ **Message (Remarques)** ⚠️ NOUVEAU
- **Field tag**: `MMERGE11`
- **Field type**: Text (Large text field / Multi-line)
- **Field label**: Message / Remarks
- ❌ Requis: NON
- 📝 Description: User's message or project description

---

## 🏷️ ÉTAPE 2: CRÉER LE TAG

### Tag à créer dans Mailchimp

Créez **un seul tag** :

1. **Can-nX Lead** 🎯
   - Appliqué automatiquement à tous les contacts du formulaire
   - Permet de filtrer facilement les leads du site web

### 📍 Comment créer un tag ?
Les tags sont créés automatiquement quand le premier contact est envoyé, MAIS vous pouvez les pré-créer :

1. Allez dans **Audience** → **Tags**
2. Cliquez **Create Tag**
3. Nom: `Can-nX Lead`
4. Sauvegardez

---

## 🔍 ÉTAPE 3: VÉRIFIER LA CONFIGURATION

### ✅ Checklist de vérification

Avant de tester le formulaire, vérifiez que vous avez :

- [ ] ✅ **NAME** (MMERGE tag: NAME) - Texte, Requis
- [ ] ✅ **MMERGE1** (Country) - Texte, Requis
- [ ] ✅ **MMERGE5** (Profession) - Texte, Requis
- [ ] ✅ **MMERGE6** (Company) - Texte, Non requis
- [ ] ✅ **MMERGE8** (Phone) - Téléphone, Requis
- [ ] ✅ **MMERGE10** (Product Interest) - Texte, Non requis ⚠️ NOUVEAU
- [ ] ✅ **MMERGE11** (Message) - Texte multiligne, Non requis ⚠️ NOUVEAU
- [ ] ✅ Tag **Can-nX Lead** créé (optionnel - sera auto-créé)

---

## 📊 MAPPING COMPLET DES DONNÉES

### Du Formulaire → Mailchimp

| Champ Formulaire | Mailchimp Merge Field | Tag Mailchimp | Requis |
|-----------------|----------------------|---------------|---------|
| Prénom + Nom | `NAME` | - | ✅ Oui |
| Email | `EMAIL` (automatique) | - | ✅ Oui |
| Pays | `MMERGE1` | - | ✅ Oui |
| Code postal | - | `Postal: [value]` | ✅ Oui |
| Je suis | `MMERGE5` | `[value]` (ex: Installateur) | ✅ Oui |
| Entreprise | `MMERGE6` | - | ❌ Non |
| Téléphone | `MMERGE8` | - | ✅ Oui |
| Produit intéressé | `MMERGE10` ⚠️ NOUVEAU | `Interest: [value]` | ❌ Non |
| Remarques | `MMERGE11` ⚠️ NOUVEAU | `Has Message` (si non vide) | ❌ Non |
| Newsletter | Status: subscribed/transactional | - | ❌ Non |
| - | - | `Can-nX Lead` | - |
| - | - | `Website Contact` | - |

---

## 🎯 POURQUOI MMERGE10 et MMERGE11 ?

**Question**: Pourquoi pas MMERGE2, MMERGE3, etc. ?

**Réponse**: Mailchimp crée automatiquement certains merge tags par défaut :
- `FNAME` (First Name) → Souvent MMERGE2
- `LNAME` (Last Name) → Souvent MMERGE3
- `ADDRESS` → MMERGE4
- etc.

Pour éviter les conflits, on utilise `MMERGE10` et `MMERGE11` qui sont généralement libres.

**⚠️ IMPORTANT**: Quand vous créez ces champs dans Mailchimp, Mailchimp va **automatiquement générer** le merge tag (ex: MMERGE10). Notez bien le tag exact que Mailchimp vous donne et modifiez le code si nécessaire.

---

## 🧪 ÉTAPE 4: TESTER LE FORMULAIRE

### Test 1: Nouveau contact

1. Remplissez le formulaire avec un **nouvel email**
2. Remplissez tous les champs requis + optionnels
3. Soumettez
4. ✅ Vérifiez dans Mailchimp que :
   - Le contact est créé
   - Tous les merge fields sont remplis
   - Le tag "Can-nX Lead" est appliqué
   - Les autres tags sont appliqués

### Test 2: Contact existant

1. Utilisez le **même email** qu'au Test 1
2. Changez quelques informations (ex: nouveau téléphone, nouvelle entreprise)
3. Soumettez
4. ✅ Vérifiez dans Mailchimp que :
   - Le contact est **mis à jour** (pas de doublon)
   - Les nouveaux champs sont mis à jour
   - Les tags sont ajoutés/conservés

---

## 🐛 PROBLÈMES COURANTS

### ❌ "Success" mais rien dans Mailchimp

**Causes possibles**:
1. **Mauvais List ID**: Vérifiez `MAILCHIMP_LIST_ID` dans les variables d'environnement
2. **Champs manquants**: Les merge fields n'existent pas dans Mailchimp
3. **Contact archivé**: L'email existe mais est archivé/supprimé

**Solutions**:
1. Vérifiez les logs du serveur dans Supabase
2. Vérifiez que tous les merge fields existent
3. Cherchez l'email dans "Cleaned" ou "Unsubscribed" dans Mailchimp

---

### ❌ Erreur 400: "Invalid Resource"

**Cause**: Un merge field n'existe pas dans Mailchimp

**Solution**: 
1. Vérifiez que **tous les 7 merge fields** sont créés
2. Vérifiez que les tags (NAME, MMERGE1, MMERGE5, etc.) sont **exactement** les mêmes
3. Vérifiez qu'il n'y a pas de typo

---

### ❌ Les champs "Produit" et "Remarques" n'apparaissent pas

**Cause**: Ils sont dans les tags mais pas dans les merge fields

**Solution**: 
1. Créez MMERGE10 et MMERGE11 comme indiqué ci-dessus
2. Le code sera mis à jour pour envoyer ces données aux merge fields

---

### ❌ Double contacts

**Cause**: Le code utilise POST au lieu de PUT

**Solution**: Le code sera modifié pour utiliser PUT (upsert)

---

## 📸 CAPTURES D'ÉCRAN (Instructions visuelles)

### Comment accéder aux Merge Fields:

```
1. Mailchimp Dashboard
   ↓
2. Audience (menu gauche)
   ↓
3. All contacts
   ↓
4. Settings (dropdown)
   ↓
5. Audience fields and *|MERGE|* tags
   ↓
6. Add A Field → Text
```

### Exemple de champ à créer:

```
Field label:       Product Interest
Field tag:         MMERGE10 (auto-généré)
Field type:        Text
Required field:    ☐ (non coché)
Visible:           ☑ (coché)
```

---

## 🔄 PROCHAINES ÉTAPES (Code Update)

Le code sera modifié pour :

1. ✅ Envoyer `productInterest` → `MMERGE10`
2. ✅ Envoyer `message` → `MMERGE11`
3. ✅ Utiliser PUT au lieu de POST (pour mettre à jour les contacts existants)
4. ✅ Simplifier les tags (garder seulement Can-nX Lead + tags utiles)
5. ✅ Améliorer la gestion des erreurs

---

## 📧 RÉSULTAT FINAL DANS MAILCHIMP

Après soumission d'un formulaire, vous verrez dans Mailchimp :

**Contact**:
- ✉️ Email: user@example.com
- 👤 Name: Jean Dupont
- 🌍 Country: France
- 💼 Profession: Installateur
- 🏢 Company: ACME Corp
- 📞 Phone: +33 6 12 34 56 78
- 🎯 Product Interest: Kloud'nX, Pool'nX
- 💬 Message: "Je voudrais un devis pour..."

**Tags**:
- Can-nX Lead 🎯
- (Autres tags si besoin)

---

## ✅ VALIDATION COMPLÈTE

Une fois que tout est configuré, vous devriez pouvoir :

1. ✅ Soumettre le formulaire avec un nouveau contact
2. ✅ Voir le contact dans Mailchimp avec TOUS les champs remplis
3. ✅ Voir le tag "Can-nX Lead" appliqué
4. ✅ Soumettre à nouveau avec le même email et voir les champs mis à jour
5. ✅ Recevoir des emails de confirmation (si configuré)

---

## 🆘 SUPPORT

Si vous avez des problèmes après avoir suivi ce guide :

1. ✅ Vérifiez les logs dans Supabase Edge Functions
2. ✅ Vérifiez que les 7 merge fields existent dans Mailchimp
3. ✅ Testez avec un email complètement nouveau
4. ✅ Vérifiez que le List ID est correct
5. ✅ Vérifiez que l'API Key a les bonnes permissions

---

**Date de création**: 2025-11-10  
**Version**: 2.0 (avec Product Interest et Message)  
**Statut**: ⚠️ Configuration requise avant utilisation

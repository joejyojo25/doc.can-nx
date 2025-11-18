# 📸 Guide Visuel: Créer les Merge Fields dans Mailchimp

## 🎯 OBJECTIF

Créer **MMERGE10** (Product Interest) et **MMERGE11** (Message) dans Mailchimp.

---

## 📍 ÉTAPE 1: ACCÉDER AUX MERGE FIELDS

### Navigation :

```
┌─────────────────────────────────────────┐
│  Mailchimp Dashboard                    │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │   1. Cliquez sur "Audience"      │  │
│  │      (menu gauche)                │  │
│  │                                   │  │
│  │   2. Sélectionnez "All contacts" │  │
│  │                                   │  │
│  │   3. Cliquez "Settings"          │  │
│  │      (dropdown en haut)           │  │
│  │                                   │  │
│  │   4. "Audience fields and        │  │
│  │       *|MERGE|* tags"            │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

---

## 📝 ÉTAPE 2: CRÉER MMERGE10 (Product Interest)

### A. Cliquer sur "Add A Field"

```
┌─────────────────────────────────────────────────┐
│  Audience fields and *|MERGE|* tags             │
│                                                  │
│  [+ Add A Field]  ← CLIQUEZ ICI                 │
│                                                  │
│  Existing fields:                                │
│  • Email Address (EMAIL) - Email                │
│  • Name (NAME) - Text                           │
│  • Country (MMERGE1) - Text                     │
│  • Profession (MMERGE5) - Text                  │
│  • Company Name (MMERGE6) - Text                │
│  • Phone Number (MMERGE8) - Phone               │
│                                                  │
└─────────────────────────────────────────────────┘
```

### B. Sélectionner "Text"

```
┌────────────────────────────────┐
│  What type of field?           │
│                                 │
│  ○ Text          ← SÉLECTIONNEZ│
│  ○ Number                       │
│  ○ Radio Buttons                │
│  ○ Drop down                    │
│  ○ Date                         │
│  ○ Address                      │
│  ○ Phone                        │
│  ○ Website                      │
│  ○ Image                        │
│                                 │
│         [Continue]              │
└────────────────────────────────┘
```

### C. Remplir les détails

```
┌──────────────────────────────────────────────┐
│  Add a text field                             │
│                                               │
│  Field label: *                               │
│  ┌──────────────────────────────────────┐   │
│  │ Product Interest                     │   │ ← TAPEZ ICI
│  └──────────────────────────────────────┘   │
│                                               │
│  Field tag:                                   │
│  ┌──────────────────────────────────────┐   │
│  │ MMERGE10                             │   │ ← AUTO-GÉNÉRÉ
│  └──────────────────────────────────────┘   │
│  (This will be auto-generated)               │
│                                               │
│  Default value: (optional)                   │
│  ┌──────────────────────────────────────┐   │
│  │                                      │   │ ← LAISSEZ VIDE
│  └──────────────────────────────────────┘   │
│                                               │
│  ☐ This field is required                    │ ← NE PAS COCHER
│                                               │
│  ☑ Show in profile                           │ ← COCHER
│                                               │
│                     [Save Field]              │
└──────────────────────────────────────────────┘
```

**⚠️ IMPORTANT**: Notez le **Field tag** exact que Mailchimp génère. Il devrait être `MMERGE10`, mais s'il est différent (ex: `MMERGE7`), vous devrez modifier le code.

---

## 📝 ÉTAPE 3: CRÉER MMERGE11 (Message)

### A. Cliquer à nouveau sur "Add A Field"

### B. Sélectionner "Text" (même type)

### C. Remplir les détails

```
┌──────────────────────────────────────────────┐
│  Add a text field                             │
│                                               │
│  Field label: *                               │
│  ┌──────────────────────────────────────┐   │
│  │ Message                              │   │ ← TAPEZ ICI
│  └──────────────────────────────────────┘   │
│                                               │
│  Field tag:                                   │
│  ┌──────────────────────────────────────┐   │
│  │ MMERGE11                             │   │ ← AUTO-GÉNÉRÉ
│  └──────────────────────────────────────┘   │
│  (This will be auto-generated)               │
│                                               │
│  Default value: (optional)                   │
│  ┌──────────────────────────────────────┐   │
│  │                                      │   │ ← LAISSEZ VIDE
│  └──────────────────────────────────────┘   │
│                                               │
│  ☐ This field is required                    │ ← NE PAS COCHER
│                                               │
│  ☑ Show in profile                           │ ← COCHER
│                                               │
│                     [Save Field]              │
└──────────────────────────────────────────────┘
```

**Note**: Pour un champ multiligne, Mailchimp n'a pas de type "Textarea" spécifique. Utilisez "Text" et le texte long sera supporté automatiquement.

---

## ✅ ÉTAPE 4: VÉRIFIER LA LISTE COMPLÈTE

Après avoir créé les deux champs, votre liste devrait ressembler à ceci :

```
┌─────────────────────────────────────────────────────┐
│  Audience fields and *|MERGE|* tags                  │
│                                                       │
│  Existing fields (8 total):                          │
│                                                       │
│  ✓ Email Address                                     │
│    Tag: EMAIL                                        │
│    Type: Email                                       │
│    Required: Yes                                     │
│                                                       │
│  ✓ Name                                              │
│    Tag: NAME                                         │
│    Type: Text                                        │
│    Required: Yes                                     │
│                                                       │
│  ✓ Country                                           │
│    Tag: MMERGE1                                      │
│    Type: Text                                        │
│    Required: Yes                                     │
│                                                       │
│  ✓ Profession                                        │
│    Tag: MMERGE5                                      │
│    Type: Text                                        │
│    Required: Yes                                     │
│                                                       │
│  ✓ Company Name                                      │
│    Tag: MMERGE6                                      │
│    Type: Text                                        │
│    Required: No                                      │
│                                                       │
│  ✓ Phone Number                                      │
│    Tag: MMERGE8                                      │
│    Type: Phone                                       │
│    Required: Yes                                     │
│                                                       │
│  ✓ Product Interest                    ⚠️ NOUVEAU    │
│    Tag: MMERGE10                                     │
│    Type: Text                                        │
│    Required: No                                      │
│                                                       │
│  ✓ Message                             ⚠️ NOUVEAU    │
│    Tag: MMERGE11                                     │
│    Type: Text                                        │
│    Required: No                                      │
│                                                       │
└─────────────────────────────────────────────────────┘
```

---

## 🔍 COMMENT VÉRIFIER QU'UN CHAMP EXISTE DÉJÀ

Si vous n'êtes pas sûr si un champ existe :

1. Allez dans **Audience** → **Settings** → **Audience fields**
2. Cherchez dans la liste
3. Regardez les **tags** (MMERGE1, MMERGE5, etc.)

**Si un champ existe déjà** avec le bon tag → Ne le recréez pas !

**Si le tag est différent** (ex: PRODUCT au lieu de MMERGE10) → Vous devez modifier le code

---

## 🏷️ CRÉER LE TAG "Can-nX Lead"

Les tags sont différents des merge fields. Voici comment créer un tag :

### Option 1: Création automatique (Recommandé)

Le tag sera créé automatiquement lors de la première soumission du formulaire. **Rien à faire !**

### Option 2: Création manuelle

```
┌─────────────────────────────────────┐
│  1. Audience → Tags                 │
│                                      │
│  2. [Create Tag]                    │
│                                      │
│  3. Tag name:                       │
│     ┌──────────────────────────┐   │
│     │ Can-nX Lead              │   │
│     └──────────────────────────┘   │
│                                      │
│  4. [Save]                          │
└─────────────────────────────────────┘
```

---

## 🎯 RÉSUMÉ VISUEL: CE QUE VOUS CRÉEZ

```
AVANT (6 champs):                    APRÈS (8 champs):
─────────────────                    ─────────────────
1. EMAIL                             1. EMAIL
2. NAME                              2. NAME
3. MMERGE1 (Country)                 3. MMERGE1 (Country)
4. MMERGE5 (Profession)              4. MMERGE5 (Profession)
5. MMERGE6 (Company)                 5. MMERGE6 (Company)
6. MMERGE8 (Phone)                   6. MMERGE8 (Phone)
                                     7. MMERGE10 (Product) ⚠️ NOUVEAU
                                     8. MMERGE11 (Message) ⚠️ NOUVEAU
```

---

## ⚠️ ERREURS COURANTES

### ❌ Erreur: "Field tag already in use"

**Cause**: Vous essayez de créer un merge tag qui existe déjà

**Solution**: 
1. Vérifiez la liste des champs existants
2. Utilisez un autre tag (ex: MMERGE12, MMERGE13)
3. Modifiez le code pour utiliser le bon tag

---

### ❌ Erreur: "Invalid Resource" lors du test

**Cause**: Le merge tag dans le code ne correspond pas à celui dans Mailchimp

**Solution**:
1. Notez le tag exact généré par Mailchimp (ex: MMERGE10)
2. Vérifiez que le code utilise exactement le même tag
3. Si différent, modifiez le fichier `/supabase/functions/server/index.tsx`

---

### ❌ Le champ n'apparaît pas dans le profil du contact

**Cause**: "Show in profile" n'est pas coché

**Solution**:
1. Retournez dans **Audience fields**
2. Cliquez sur le champ
3. Cochez "Show in profile"
4. Sauvegardez

---

## 📱 SUR MOBILE / TABLETTE

L'interface Mailchimp est la même sur mobile, mais :
- Le menu peut être dans un hamburger (☰)
- Les dropdowns peuvent s'afficher différemment
- Scrollez pour voir tous les champs

**Recommandation**: Utilisez un ordinateur pour plus de confort

---

## ✅ VALIDATION FINALE

Avant de tester le formulaire, vérifiez que :

- [ ] ✅ Vous avez créé MMERGE10 (Product Interest)
- [ ] ✅ Vous avez créé MMERGE11 (Message)
- [ ] ✅ Les deux champs ont "Show in profile" coché
- [ ] ✅ Les deux champs sont NON requis
- [ ] ✅ Vous avez noté les tags exacts générés par Mailchimp
- [ ] ✅ Si les tags sont différents de MMERGE10/MMERGE11, vous avez prévu de modifier le code

---

## 🎓 POUR LES DÉBUTANTS

Si c'est la première fois que vous utilisez Mailchimp :

1. **Ne paniquez pas !** L'interface peut sembler compliquée mais elle est logique
2. **Prenez votre temps** pour trouver chaque menu
3. **Lisez les tooltips** (info bubbles) dans Mailchimp - ils sont utiles
4. **Sauvegardez fréquemment** - Mailchimp sauvegarde automatiquement mais c'est une bonne habitude
5. **Ne supprimez pas** les champs existants - vous pourriez casser l'intégration

---

## 🆘 BESOIN D'AIDE ?

Si vous êtes bloqué :

1. ✅ Relisez ce guide étape par étape
2. ✅ Vérifiez que vous êtes dans la bonne Audience
3. ✅ Vérifiez que vous avez les permissions admin dans Mailchimp
4. ✅ Essayez de vous déconnecter/reconnecter de Mailchimp
5. ✅ Consultez la documentation Mailchimp : https://mailchimp.com/help/manage-audience-signup-form-fields/

---

## 🎉 PROCHAINE ÉTAPE

Une fois les champs créés → Testez le formulaire !

Voir `/MAILCHIMP_QUICK_TEST.md` pour les tests

---

**Temps estimé**: 5-10 minutes  
**Difficulté**: ⭐⭐☆☆☆ (Facile)  
**Prérequis**: Accès admin à Mailchimp  
**Date**: 2025-11-10

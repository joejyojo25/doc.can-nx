# 🧪 Test Rapide Mailchimp - Guide de Vérification

## ⚡ AVANT DE TESTER

### ✅ Checklist Pré-Test

Assurez-vous que vous avez créé dans Mailchimp :

- [ ] **MMERGE10** (Product Interest) - Texte, Non requis
- [ ] **MMERGE11** (Message) - Texte multiligne, Non requis

**Si vous n'avez pas encore créé ces champs** → Voir `/MAILCHIMP_SETUP_REQUIRED.md`

---

## 🎯 TEST 1: NOUVEAU CONTACT

### Étapes :

1. **Ouvrez le formulaire de contact** sur votre site
2. **Remplissez TOUS les champs** :
   ```
   Prénom: Jean
   Nom: Dupont
   Entreprise: Test Corp
   Téléphone: +33 6 12 34 56 78
   Email: test-nouveau-2025@example.com
   Pays: France
   Code postal: 75001
   Je suis: Installateur
   Produit intéressé: Kloud'nX, Pool'nX
   Remarques: Ceci est un message de test pour vérifier le formulaire
   ☑ Newsletter: Oui
   ```

3. **Soumettez le formulaire**

4. **Vérifiez le message de succès** :
   - ✅ Overlay vert avec checkmark
   - ✅ Toast "Demande bien reçue !"

5. **Vérifiez dans Mailchimp** :
   - Allez dans **Audience** → **All contacts**
   - Cherchez `test-nouveau-2025@example.com`
   - Cliquez sur le contact
   
6. **Vérifiez que TOUS les champs sont remplis** :
   - ✅ Email: test-nouveau-2025@example.com
   - ✅ Name: Jean Dupont
   - ✅ Country (MMERGE1): France
   - ✅ Profession (MMERGE5): Installateur
   - ✅ Company (MMERGE6): Test Corp
   - ✅ Phone (MMERGE8): +33 6 12 34 56 78
   - ✅ Product Interest (MMERGE10): Kloud'nX, Pool'nX ⚠️ **NOUVEAU**
   - ✅ Message (MMERGE11): Ceci est un message de test... ⚠️ **NOUVEAU**

7. **Vérifiez les tags** :
   - ✅ Tag "Can-nX Lead" est appliqué

---

## 🔄 TEST 2: MISE À JOUR D'UN CONTACT EXISTANT

### Étapes :

1. **Utilisez le MÊME email** que le Test 1
2. **Changez quelques informations** :
   ```
   Prénom: Jean (même)
   Nom: Dupont (même)
   Entreprise: New Company Inc. ⬅️ CHANGÉ
   Téléphone: +33 6 99 88 77 66 ⬅️ CHANGÉ
   Email: test-nouveau-2025@example.com (même)
   Pays: Suisse ⬅️ CHANGÉ
   Code postal: 1201 ⬅️ CHANGÉ
   Je suis: Integrateur ⬅️ CHANGÉ
   Produit intéressé: Infini KNX, Speak'nX ⬅️ CHANGÉ
   Remarques: Message mis à jour avec nouvelles infos ⬅️ CHANGÉ
   ☑ Newsletter: Oui
   ```

3. **Soumettez le formulaire**

4. **Vérifiez dans Mailchimp** :
   - Allez dans **Audience** → **All contacts**
   - Cherchez `test-nouveau-2025@example.com`
   - **⚠️ IL NE DOIT Y AVOIR QU'UN SEUL CONTACT** (pas de doublon)
   
5. **Vérifiez que les champs sont MIS À JOUR** :
   - ✅ Email: test-nouveau-2025@example.com (inchangé)
   - ✅ Name: Jean Dupont (inchangé)
   - ✅ Country (MMERGE1): **Suisse** ⬅️ MIS À JOUR
   - ✅ Profession (MMERGE5): **Integrateur** ⬅️ MIS À JOUR
   - ✅ Company (MMERGE6): **New Company Inc.** ⬅️ MIS À JOUR
   - ✅ Phone (MMERGE8): **+33 6 99 88 77 66** ⬅️ MIS À JOUR
   - ✅ Product Interest (MMERGE10): **Infini KNX, Speak'nX** ⬅️ MIS À JOUR
   - ✅ Message (MMERGE11): **Message mis à jour...** ⬅️ MIS À JOUR

6. **Vérifiez les tags** :
   - ✅ Tag "Can-nX Lead" toujours présent

---

## 🐛 SI VOUS VOYEZ UNE ERREUR

### Erreur: "Invalid Resource"

**Problème**: Les merge fields MMERGE10 ou MMERGE11 n'existent pas dans Mailchimp

**Solution**:
1. Allez dans Mailchimp → Audience → Settings → Audience fields
2. Créez les champs manquants (voir `/MAILCHIMP_SETUP_REQUIRED.md`)
3. Attendez 1-2 minutes
4. Réessayez

---

### Erreur: "Member In Compliance State"

**Problème**: L'email a été désinscrit ou est dans un état de conformité

**Solution**:
1. Cherchez l'email dans Mailchimp (section "Unsubscribed" ou "Cleaned")
2. Si trouvé, réabonnez manuellement ou utilisez un autre email pour tester
3. Pour les vrais clients, contactez le support Mailchimp

---

### Success mais champs vides dans Mailchimp

**Problème**: Les merge tags ne correspondent pas

**Solution**:
1. Vérifiez que les tags sont exactement:
   - `NAME` (pas NAME1 ou autre)
   - `MMERGE1` (pas COUNTRY)
   - `MMERGE5` (pas PROFESSION)
   - `MMERGE6` (pas COMPANY)
   - `MMERGE8` (pas PHONE)
   - `MMERGE10` (pas PRODUCT)
   - `MMERGE11` (pas MESSAGE)

2. Si les tags sont différents, notez les vrais tags et modifiez le code

---

## 📊 VÉRIFICATION DES LOGS

### Dans Supabase (pour debug)

1. Allez sur https://supabase.com
2. Ouvrez votre projet
3. Allez dans **Edge Functions** → **server**
4. Cliquez sur **Logs**
5. Soumettez le formulaire
6. Regardez les logs en temps réel

**Ce que vous devriez voir** :
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
  ...
}
```

**Si vous voyez une erreur** :
```
Mailchimp API error: {
  status: 400,
  response: { ... }
}
```
→ Copiez l'erreur complète et cherchez-la dans ce guide ou Google

---

## ✅ TEST RÉUSSI SI...

Vous avez réussi si :

1. ✅ Le formulaire se soumet sans erreur
2. ✅ Le message de succès s'affiche
3. ✅ Le contact apparaît dans Mailchimp
4. ✅ **Tous les 8 merge fields** sont remplis (NAME + 7 MMERGE)
5. ✅ Le tag "Can-nX Lead" est appliqué
6. ✅ Les champs "Produit intéressé" et "Remarques" sont visibles dans Mailchimp
7. ✅ La mise à jour d'un contact existant fonctionne (pas de doublon)

---

## 🎉 FÉLICITATIONS !

Si tous les tests passent, votre intégration Mailchimp est **100% fonctionnelle** !

Vous pouvez maintenant :
- ✅ Recevoir des contacts depuis le site web
- ✅ Voir toutes les informations du formulaire dans Mailchimp
- ✅ Filtrer les leads avec le tag "Can-nX Lead"
- ✅ Mettre à jour les contacts existants automatiquement
- ✅ Créer des automations basées sur les tags
- ✅ Exporter les données pour analyse

---

## 📝 PROCHAINES ÉTAPES

### Optionnel: Configurer les automations Mailchimp

1. Créez une automation pour envoyer un email de bienvenue aux nouveaux leads
2. Créez des segments basés sur "Product Interest"
3. Configurez des rappels pour les leads non contactés
4. Créez des rapports personnalisés

### Optionnel: Personnaliser le formulaire

Le formulaire est dans `/components/Contact.tsx` si vous voulez :
- Ajouter d'autres champs
- Modifier le design
- Changer les options du dropdown "Je suis"
- Ajouter d'autres produits suggérés

---

**Date**: 2025-11-10  
**Version**: 2.0 (avec Product Interest et Message)  
**Statut**: ✅ Prêt pour test

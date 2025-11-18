# Contact Form Update - Can-nX

## 📋 Vue d'ensemble

Le formulaire de contact Can-nX a été entièrement refondu et étendu pour mieux capturer les informations des prospects B2B et faciliter la segmentation marketing via Mailchimp.

## ✨ Nouveautés

### 1. Champs de formulaire étendus

Le formulaire contient maintenant **10 champs** au lieu de 6 :

#### Champs obligatoires (*)
- **Prénom** - Prénom du contact
- **Nom de famille** - Nom du contact
- **N° de téléphone direct** - Numéro de téléphone professionnel
- **Adresse e-mail** - Email professionnel
- **Pays** - Dropdown avec pays pré-sélectionnés
- **Code postal** - Pour localisation géographique
- **Je suis** - Type de professionnel (dropdown)

#### Champs facultatifs
- **Entreprise** - Nom de l'entreprise
- **Produit qui vous intéresse** - Produit Can-nX spécifique
- **Remarques** - Message détaillé du prospect

#### Options
- **Checkbox newsletter** - "Oui, je voudrais rester informé des nouvelles importantes de Can'nX"

### 2. Dropdown "Je suis" - Profils professionnels

Options disponibles :
1. **Architecte** - Architectes et bureaux d'études
2. **Utilisateur final** - Clients finaux/propriétaires
3. **System Integrator** - Intégrateurs systèmes AV/IT
4. **Électricien / Installateur** - Installateurs électriques KNX
5. **Distributeur** - Distributeurs et revendeurs
6. **B2B** - Autres professionnels B2B
7. **Autre** - Autres profils

### 3. Dropdown "Pays"

Pays pré-configurés (défaut : **France**) :
- 🇫🇷 France
- 🇧🇪 Belgique
- 🇨🇭 Suisse
- 🇱🇺 Luxembourg
- 🇩🇪 Allemagne
- 🇪🇸 Espagne
- 🇮🇹 Italie
- 🇳🇱 Pays-Bas
- 🇬🇧 Royaume-Uni
- Autre

## 📄 Nouvelle page Contact dédiée

### Route
- **URL** : `#contact`
- **Chemin** : `/pages/ContactPage.tsx`

### Sections de la page

1. **Hero Section**
   - Titre principal : "Contactez-nous"
   - Sous-titre descriptif
   - Icône MessageSquare

2. **Cartes d'information de contact**
   - 📞 Téléphone : +33 6 49 53 67 19
   - 📧 Email : contact@can-nx.com
   - 📍 Adresse : France & International
   - 🕐 Horaires : Lun-Ven 9h-18h

3. **Section "Comment pouvons-nous vous aider ?"**
   - Support Technique
   - Devis Personnalisé
   - Opportunités de Partenariat

4. **Formulaire de contact**
   - Formulaire complet intégré
   - Utilise le composant `<Contact showTitle={false} />`

5. **Section Présence Internationale**
   - Badges de pays avec drapeaux
   - France, Belgique, Suisse, Luxembourg, Allemagne

6. **CTA Final**
   - Boutons d'action : Appel / Email
   - Fond dégradé vert Can-nX

## 🔗 Intégrations

### Navigation

Le lien "Contact" est déjà présent dans :
- ✅ **Header desktop** (ligne 434-439 de Header.tsx)
- ✅ **Header mobile** (ligne 615-622 de Header.tsx)
- ✅ **Page d'accueil** (composant Contact affiché)

### SEO

Configuration SEO ajoutée dans `/config/seoConfig.ts` :
- **Title** : "Contact Can-nX | Automatisation KNX et IoT pour Bâtiments Intelligents"
- **Description** : Optimisée pour le référencement
- **Keywords** : contact Can-nX, support KNX, devis, etc.
- **Schema.org** : ContactPage schema avec mainEntity Organization

### Sitemap

Ajouté dans `/public/sitemap.xml` :
- URL : `https://can-nx.com/#contact`
- Priority : 0.9 (haute priorité)
- Changefreq : monthly

## 📧 Intégration Mailchimp

### Champs Mailchimp mappés

| Champ formulaire | Merge Field Mailchimp | Type |
|------------------|----------------------|------|
| Prénom | FNAME | Text |
| Nom de famille | LNAME | Text |
| Entreprise | COMPANY | Text |
| Téléphone | PHONE | Phone |
| Email | EMAIL_ADDRESS | Email |
| Pays | COUNTRY | Text |
| Code postal | POSTAL | Text/Number |
| Je suis | PROFESSION | Text/Dropdown |
| Produit intéressé | PRODUCT | Text |
| Remarques | MESSAGE | Text (500 char) |

### Tags automatiques

Chaque soumission reçoit ces tags :
1. **Website Contact** - Identifie l'origine
2. **Can-nX Lead** - Identifie comme lead
3. **[PROFESSION]** - Tag dynamique basé sur le champ "Je suis"

Exemples :
- "Architecte"
- "System Integrator"
- "Electrician / Installer"

### Statut d'inscription

- Si **checkbox newsletter cochée** → status: `subscribed`
- Si **checkbox newsletter non cochée** → status: `pending`

### Configuration requise dans Mailchimp

Pour que l'intégration fonctionne, configurez ces merge fields dans Mailchimp :

1. **Audience** → **Settings** → **Audience fields and *|MERGE|* tags**
2. Ajoutez les champs :
   - COMPANY (Text)
   - PHONE (Phone Number)
   - COUNTRY (Text)
   - POSTAL (Text or Number)
   - PROFESSION (Text or Dropdown)
   - PRODUCT (Text)
   - MESSAGE (Text - 500 caractères)

## 🎨 Design & UX

### Améliorations UX

- ✅ **Validation en temps réel** des champs obligatoires
- ✅ **États de chargement** avec spinner animé
- ✅ **Notifications toast** (success/error) via Sonner
- ✅ **Désactivation du formulaire** pendant l'envoi
- ✅ **Réinitialisation automatique** après soumission réussie
- ✅ **Labels clairs** avec astérisques pour champs requis
- ✅ **Placeholders** informatifs

### Style visuel

- **Dégradés** : from-gray-50 to-white
- **Ombres** : shadow-xl pour la carte de formulaire
- **Décorations** : Bulles de couleur en arrière-plan (vert #0CB14B et rose #cd2653)
- **Bouton CTA** : Dégradé vert standardisé avec shadow

### Responsive

- ✅ **Mobile-first** : Grille adaptative
- ✅ **Breakpoints** :
  - `sm:grid-cols-2` pour champs côte à côte sur desktop
  - Stack vertical sur mobile
- ✅ **Padding adaptatif** : px-4 sm:px-6 lg:px-8

## 📁 Fichiers créés/modifiés

### Nouveaux fichiers
1. `/pages/ContactPage.tsx` - Page contact dédiée
2. `/guidelines/ContactFormUpdate.md` - Cette documentation

### Fichiers modifiés
1. `/components/Contact.tsx` - Formulaire étendu avec nouveaux champs
2. `/App.tsx` - Route `/contact` ajoutée
3. `/config/mailchimpConfig.ts` - Configuration mise à jour
4. `/config/seoConfig.ts` - SEO contact ajouté (tentative)
5. `/public/sitemap.xml` - Contact page ajoutée
6. `/guidelines/MailchimpIntegration.md` - Documentation Mailchimp

### Fichiers existants (non modifiés)
- `/components/Header.tsx` - Liens contact déjà présents
- `/components/Footer.tsx` - Peut contenir lien contact

## 🚀 Prochaines étapes

### 1. Configuration Mailchimp (Priorité 1)
- [ ] Créer/configurer compte Mailchimp
- [ ] Obtenir API Key et List ID
- [ ] Configurer les merge fields personnalisés
- [ ] Tester l'intégration en développement

### 2. Déploiement Supabase (Priorité 1 - Production)
- [ ] Créer Supabase Edge Function `mailchimp-subscribe`
- [ ] Configurer les secrets (MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_DC)
- [ ] Déployer la fonction
- [ ] Mettre à jour Contact.tsx pour utiliser Supabase

### 3. Automatisations Mailchimp (Priorité 2)
- [ ] Email de bienvenue automatique
- [ ] Notification interne pour nouveaux leads
- [ ] Campagne de nurturing (3-5 emails)
- [ ] Segmentation par PROFESSION

### 4. Analytics & Tracking (Priorité 3)
- [ ] Ajouter Google Analytics event tracking
- [ ] Configurer Facebook Pixel pour conversions
- [ ] Dashboard de suivi des leads
- [ ] A/B testing du formulaire

### 5. Améliorations futures
- [ ] Support multilingue (FR/EN/DE)
- [ ] Captcha / Protection anti-spam
- [ ] Upload de fichiers (devis, plans)
- [ ] Calendrier de rendez-vous (Calendly integration)
- [ ] Chat en direct (Intercom/Crisp)

## 📊 Métriques à suivre

### KPIs Formulaire
- Taux de soumission (conversion)
- Taux d'abandon par champ
- Temps moyen de remplissage
- Taux d'erreur de validation

### KPIs Marketing
- Leads par profession
- Leads par pays
- Leads par produit d'intérêt
- Taux d'opt-in newsletter
- Taux de réponse aux leads

## 🔐 Sécurité & RGPD

### Conformité RGPD

- ✅ **Consentement explicite** : Checkbox opt-in pour newsletter
- ✅ **Transparence** : Information claire sur l'utilisation des données
- ⚠️ **À faire** : 
  - Ajouter lien vers politique de confidentialité
  - Ajouter lien vers CGU
  - Implémenter droit à l'oubli
  - Cookies consent banner

### Sécurité

- ✅ **Validation côté client** : HTML5 validation + React state
- ✅ **HTTPS** : Communication sécurisée
- ⚠️ **À faire** :
  - Validation côté serveur (Supabase Edge Function)
  - Rate limiting (prévention spam)
  - Sanitization des données
  - Honeypot field (anti-bot)

## 💡 Bonnes pratiques

### Pour les développeurs
1. Ne jamais exposer la clé API Mailchimp côté client
2. Toujours utiliser Supabase Edge Functions en production
3. Valider les données côté serveur
4. Logger les erreurs pour debugging
5. Tester avec des données réelles avant le lancement

### Pour le marketing
1. Répondre aux leads dans les 24h
2. Segmenter par profession pour personnalisation
3. A/B tester les campagnes de nurturing
4. Suivre les métriques de conversion
5. Nettoyer régulièrement la liste Mailchimp

## 📞 Support

Pour toute question sur le formulaire de contact :
- **Technique** : Voir `/guidelines/MailchimpIntegration.md`
- **Design** : Voir les composants dans `/components/Contact.tsx`
- **SEO** : Voir `/config/seoConfig.ts`

---

**Dernière mise à jour** : 7 novembre 2025
**Version** : 2.0.0
**Statut** : ✅ Implémenté - ⚠️ Configuration Mailchimp requise

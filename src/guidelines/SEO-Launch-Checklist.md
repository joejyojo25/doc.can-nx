# ✅ Checklist SEO - Mise en Production Can-nX

## 🔧 Configuration Pré-Lancement

### 1. Mise à jour des URLs
- [ ] Remplacer `https://can-nx.com` par votre domaine réel dans `/config/seoConfig.ts`
- [ ] Vérifier toutes les canonical URLs
- [ ] Mettre à jour les URLs dans `/public/sitemap.xml`
- [ ] Mettre à jour l'URL du sitemap dans `/public/robots.txt`

### 2. Personnalisation des Assets
- [ ] Créer et uploader votre logo officiel (`/logo.png`)
- [ ] Créer des images Open Graph pour chaque page produit (1200x630px)
  - [ ] Page d'accueil - `/og-images/home.jpg`
  - [ ] Kloud'nX - `/og-images/kloudnx.jpg`
  - [ ] Pool'nX - `/og-images/poolnx.jpg`
  - [ ] Emergy'nX - `/og-images/emergynx.jpg`
  - [ ] Infini KNX - `/og-images/infinix.jpg`
  - [ ] Speak'nX - `/og-images/speaknx.jpg`
  - [ ] Mod'nX - `/og-images/modnx.jpg`
- [ ] Créer un favicon.ico et apple-touch-icon.png

### 3. Réseaux Sociaux
- [ ] Mettre à jour `@cannx` avec votre vrai handle Twitter dans `SEOHead.tsx`
- [ ] Ajouter tous vos liens de réseaux sociaux dans `organizationSchema` (`/config/seoConfig.ts`)
  - [ ] LinkedIn
  - [ ] YouTube
  - [ ] Facebook (si applicable)
  - [ ] Instagram (si applicable)

### 4. Informations d'Entreprise
- [ ] Vérifier et compléter les informations dans `organizationSchema`
  - [ ] Adresse complète
  - [ ] Téléphone
  - [ ] Email de contact
  - [ ] Horaires d'ouverture (si applicable)
- [ ] Ajouter votre numéro SIRET/SIREN si pertinent

## 📊 Outils à Configurer

### Google
- [ ] Créer un compte Google Search Console
- [ ] Ajouter et vérifier votre propriété
- [ ] Soumettre le sitemap.xml
- [ ] Vérifier qu'il n'y a pas d'erreurs d'indexation
- [ ] Configurer Google Analytics 4
- [ ] Créer un compte Google My Business (si applicable)

### Bing
- [ ] Créer un compte Bing Webmaster Tools
- [ ] Vérifier votre propriété
- [ ] Soumettre le sitemap.xml

### Autres
- [ ] Installer Google Tag Manager (optionnel)
- [ ] Configurer les conversions et événements
- [ ] Installer Hotjar ou Microsoft Clarity pour le comportement utilisateur (optionnel)

## 🧪 Tests Techniques

### Validations Schema.org
- [ ] Tester la page d'accueil sur [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Tester au moins 3 pages produits
- [ ] Tester au moins 2 pages d'intégration
- [ ] Corriger toutes les erreurs de schéma

### Open Graph
- [ ] Tester avec [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Tester avec [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [ ] Vérifier que les images s'affichent correctement

### Twitter Cards
- [ ] Tester avec [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Vérifier l'aperçu pour plusieurs pages

### Performance
- [ ] Tester avec Google PageSpeed Insights (score > 85)
  - [ ] Desktop
  - [ ] Mobile
- [ ] Vérifier le temps de chargement (< 3s)
- [ ] Optimiser les images si nécessaire
- [ ] Activer la compression GZIP/Brotli

### Mobile
- [ ] Tester avec [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Vérifier la responsive sur différents appareils
- [ ] Tester la navigation tactile
- [ ] Vérifier que tous les boutons sont cliquables

### Accessibilité
- [ ] Tester avec WAVE ou aXe DevTools
- [ ] Vérifier le contraste des couleurs
- [ ] S'assurer que toutes les images ont des alt texts
- [ ] Tester la navigation au clavier

## 🌍 Multilingue (si activé)

- [ ] Vérifier les balises hreflang sur chaque page
- [ ] Tester la commutation de langue
- [ ] Vérifier que le contenu est bien traduit
- [ ] S'assurer que les URLs sont correctes pour chaque langue

## 📝 Contenu

### Meta Données
- [ ] Vérifier que tous les titres sont < 60 caractères
- [ ] Vérifier que toutes les descriptions sont < 160 caractères
- [ ] S'assurer qu'il n'y a pas de contenu dupliqué
- [ ] Vérifier l'unicité de chaque meta description

### Texte Alt des Images
- [ ] Vérifier que toutes les images ont des alt descriptifs
- [ ] Pas de "image de" ou "photo de"
- [ ] Descriptions concises et pertinentes

### Liens
- [ ] Vérifier qu'il n'y a pas de liens cassés
- [ ] Tous les liens externes s'ouvrent dans un nouvel onglet (si souhaité)
- [ ] Les liens internes utilisent des ancres descriptives

## 🔒 Sécurité & Conformité

- [ ] Certificat SSL/HTTPS actif
- [ ] Redirection HTTP → HTTPS configurée
- [ ] Cookie banner RGPD (si applicable)
- [ ] Politique de confidentialité à jour
- [ ] Mentions légales complètes
- [ ] CGV/CGU si e-commerce

## 📈 Suivi Post-Lancement

### Semaine 1
- [ ] Vérifier l'indexation dans Google Search Console
- [ ] Surveiller les erreurs d'exploration
- [ ] Vérifier que le sitemap est traité
- [ ] Analyser les premières données Analytics

### Mois 1
- [ ] Analyser les requêtes de recherche dans GSC
- [ ] Identifier les pages avec le meilleur CTR
- [ ] Optimiser les pages avec faible performance
- [ ] Commencer la création de contenu de blog

### Mensuel
- [ ] Vérifier le positionnement sur les mots-clés ciblés
- [ ] Analyser les backlinks
- [ ] Mettre à jour le sitemap si nouvelles pages
- [ ] Publier du nouveau contenu (articles, guides)
- [ ] Répondre aux avis clients

## 🎯 Optimisations Continues

### Contenu
- [ ] Créer 2-4 articles de blog par mois
- [ ] Mettre à jour les pages existantes
- [ ] Ajouter des études de cas
- [ ] Créer des guides techniques
- [ ] Produire des vidéos tutoriels

### Technique
- [ ] Améliorer la vitesse de chargement
- [ ] Optimiser les Core Web Vitals
- [ ] Ajouter du lazy loading
- [ ] Compresser les images
- [ ] Minifier CSS/JS

### Liens
- [ ] Stratégie de netlinking
- [ ] Partenariats avec autres sites KNX
- [ ] Articles invités
- [ ] Présence dans les annuaires professionnels
- [ ] Obtenir des backlinks de qualité

## 📊 KPIs à Suivre

### Trafic
- [ ] Nombre de visiteurs organiques
- [ ] Pages vues
- [ ] Taux de rebond
- [ ] Durée moyenne de session
- [ ] Pages par session

### Positionnement
- [ ] Top 10 pour "KNX France"
- [ ] Top 5 pour "routeur KNX"
- [ ] Top 3 pour "Can-nX"
- [ ] Positionnement sur mots-clés longue traîne

### Conversions
- [ ] Demandes de contact
- [ ] Téléchargements de documentation
- [ ] Visites sur la boutique
- [ ] Inscriptions newsletter
- [ ] Demandes de devis

### Technique
- [ ] Score PageSpeed (> 90)
- [ ] Core Web Vitals (tous verts)
- [ ] Taux d'indexation (> 95%)
- [ ] Temps de chargement moyen (< 2s)

## 🚨 Alertes à Configurer

- [ ] Alert Google Search Console pour erreurs d'exploration
- [ ] Alert Analytics pour chute de trafic
- [ ] Monitoring uptime du site
- [ ] Alert sur les backlinks toxiques
- [ ] Monitoring des positions sur mots-clés principaux

## 📚 Ressources Utiles

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Moz SEO Learning Center](https://moz.com/learn/seo)
- [Ahrefs Blog](https://ahrefs.com/blog/)
- [Search Engine Journal](https://www.searchenginejournal.com/)

---

## ✅ Validation Finale

Avant de cocher "Prêt pour Production", vérifier que :

- [ ] Tous les points critiques (🔴) sont complétés
- [ ] Au moins 80% des points importants sont validés
- [ ] Aucune erreur technique majeure
- [ ] Les outils de tracking sont opérationnels
- [ ] Le site est rapide et responsive
- [ ] Toutes les pages importantes sont indexables

**Date de lancement prévue:** ________________

**Responsable SEO:** ________________

**Checklist validée par:** ________________

---

**Version:** 1.0
**Dernière mise à jour:** 4 janvier 2025

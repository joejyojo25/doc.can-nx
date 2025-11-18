# ✅ Checklist de Déploiement Can-nX

## 🔐 Configuration Supabase

### 1. Créer un projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un nouveau projet
3. Notez votre **Project URL** et **Anon Public Key**

### 2. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet :

```bash
cp .env.example .env
```

Remplissez avec vos valeurs Supabase :

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 3. Déployer la Edge Function Mailchimp

Suivez le guide complet : **[MAILCHIMP_SETUP_GUIDE.md](./MAILCHIMP_SETUP_GUIDE.md)**

Résumé rapide :

```bash
# 1. Installer Supabase CLI
brew install supabase/tap/supabase  # macOS
# ou voir le guide pour Windows/Linux

# 2. Se connecter
supabase login

# 3. Lier le projet
supabase link --project-ref votre-project-id

# 4. Déployer la fonction
supabase functions deploy mailchimp-subscribe --no-verify-jwt

# 5. Configurer les secrets
supabase secrets set MAILCHIMP_API_KEY=votre_clé_api
supabase secrets set MAILCHIMP_LIST_ID=votre_list_id
supabase secrets set MAILCHIMP_DC=us19
```

---

## 📧 Configuration Mailchimp

### Merge Fields requis

Dans Mailchimp **Audience** → **Settings** → **Audience fields**, créez :

- ✅ FNAME (déjà présent)
- ✅ LNAME (déjà présent)
- ➕ COMPANY (Text)
- ➕ PHONE (Phone Number)
- ➕ COUNTRY (Text)
- ➕ POSTAL (Text)
- ➕ PROFESSION (Text)
- ➕ PRODUCT (Text)
- ➕ MESSAGE (Text, 500 caractères)

---

## 🚀 Déploiement Frontend

### Option 1 : Vercel (Recommandé)

1. Connectez votre repo GitHub à Vercel
2. Configurez les variables d'environnement :
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Déployez !

### Option 2 : Netlify

1. Connectez votre repo GitHub à Netlify
2. Build settings :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
3. Configurez les variables d'environnement
4. Déployez !

### Option 3 : Build manuel

```bash
npm run build
```

Puis déployez le dossier `dist/` sur votre hébergeur.

---

## 🧪 Tests pré-déploiement

- [ ] Test du formulaire de contact
- [ ] Vérification de l'envoi à Mailchimp
- [ ] Test de navigation sur mobile
- [ ] Test des liens de produits
- [ ] Vérification du SEO (meta tags)
- [ ] Test des performances (Lighthouse)

---

## 📊 SEO & Analytics

### Fichiers importants

- ✅ `/public/robots.txt` - Déjà configuré
- ✅ `/public/sitemap.xml` - Déjà configuré
- ✅ SEO config dans `/config/seoConfig.ts`

### Google Search Console

1. Soumettez votre sitemap : `https://votre-domaine.com/sitemap.xml`
2. Vérifiez l'indexation
3. Surveillez les erreurs

### Google Analytics (optionnel)

Ajoutez le script Google Analytics dans `/index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔒 Sécurité

### Points de vérification

- [ ] Clés API Mailchimp JAMAIS dans le code frontend
- [ ] Secrets Supabase configurés via CLI uniquement
- [ ] Variables d'environnement non commitées (dans `.gitignore`)
- [ ] HTTPS activé sur le domaine de production
- [ ] CORS correctement configuré dans Supabase Edge Functions

---

## 🌍 Domaine personnalisé

### Vercel

1. Allez dans **Settings** → **Domains**
2. Ajoutez votre domaine `can-nx.com`
3. Configurez les DNS selon les instructions

### Netlify

1. Allez dans **Domain settings**
2. Ajoutez votre domaine custom
3. Configurez les DNS

---

## 📝 Post-déploiement

### Monitoring

- [ ] Configurer les alertes Supabase
- [ ] Surveiller les logs Edge Functions
- [ ] Vérifier les taux de réussite Mailchimp
- [ ] Monitorer les performances du site

### Maintenance

- [ ] Sauvegardes régulières
- [ ] Mises à jour de dépendances
- [ ] Vérification des liens cassés
- [ ] Tests de formulaires mensuels

---

## 🆘 Troubleshooting

### Le formulaire ne fonctionne pas

1. Vérifiez les logs : Supabase Dashboard → Edge Functions → Logs
2. Vérifiez les secrets : `supabase secrets list`
3. Testez la fonction directement avec curl (voir guide Mailchimp)

### Erreurs Mailchimp 400

- Contact existe déjà → Normal, pas une vraie erreur
- Merge fields manquants → Vérifiez la config Mailchimp

### Variables d'environnement non trouvées

- Vérifiez que `.env` existe et contient les bonnes valeurs
- Redémarrez le serveur de dev après modification du `.env`
- En production, vérifiez la config Vercel/Netlify

---

## 📞 Support

- **Email** : contact@can-nx.com
- **Téléphone** : +33 6 49 53 67 19
- **Documentation Supabase** : https://supabase.com/docs
- **Documentation Mailchimp** : https://mailchimp.com/developer/

---

## 🎉 Tout est prêt !

Si toutes les cases sont cochées, votre site Can-nX est prêt pour la production ! 🚀

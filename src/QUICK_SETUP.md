# ⚡ Setup Ultra-Rapide - 5 Minutes

Guide minimaliste pour les développeurs pressés. 

Pour la version détaillée → [NEXT_STEPS.md](./NEXT_STEPS.md)

---

## 🎯 Prérequis

- ✅ Clé API Mailchimp créée
- ✅ Compte Supabase créé
- ✅ Node.js installé

---

## 🚀 Commandes (dans l'ordre)

### 1. Variables d'environnement

```bash
cp .env.example .env
nano .env  # Remplir VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY
```

### 2. Installer Supabase CLI

```bash
# macOS
brew install supabase/tap/supabase

# Linux
curl -fsSL https://raw.githubusercontent.com/supabase/cli/main/install.sh | sh

# Windows (Scoop)
scoop install supabase
```

### 3. Lier et déployer

```bash
# Se connecter
supabase login

# Lier le projet (remplacer par votre project-id)
supabase link --project-ref xxxxxxxxxx

# Déployer la fonction
supabase functions deploy mailchimp-subscribe --no-verify-jwt
```

### 4. Configurer les secrets

```bash
# Remplacer par VOS valeurs
supabase secrets set MAILCHIMP_API_KEY=votre_clé_api_ici
supabase secrets set MAILCHIMP_LIST_ID=votre_list_id_ici
supabase secrets set MAILCHIMP_DC=us19
```

### 5. Tester

```bash
export SUPABASE_URL=https://xxxxxxxxxx.supabase.co
chmod +x scripts/test-mailchimp.sh
./scripts/test-mailchimp.sh
```

### 6. Démarrer le site

```bash
npm install
npm run dev
```

---

## ✅ Checklist Minimale

- [ ] `.env` configuré
- [ ] Supabase CLI installé
- [ ] Projet lié (`supabase link`)
- [ ] Fonction déployée
- [ ] Secrets configurés
- [ ] Test OK
- [ ] Site démarre

---

## 🆘 Problème ?

```bash
# Voir les logs
supabase functions logs mailchimp-subscribe --tail 50

# Vérifier les secrets
supabase secrets list

# Vérifier que la fonction est déployée
supabase functions list
```

---

## 📚 Documentation Complète

- [NEXT_STEPS.md](./NEXT_STEPS.md) - Guide pas à pas (37 min)
- [MAILCHIMP_SETUP_GUIDE.md](./MAILCHIMP_SETUP_GUIDE.md) - Guide Mailchimp complet
- [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md) - Guide Supabase détaillé

---

**Temps total : ~5-10 minutes** ⚡

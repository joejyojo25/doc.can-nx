# 🎯 Supabase CLI - Commandes de Référence Rapide

Commandes Supabase les plus utiles pour le projet Can-nX.

---

## 🔐 Authentication

### Se connecter

```bash
supabase login
```

### Se déconnecter

```bash
supabase logout
```

---

## 🔗 Linking & Projects

### Lier un projet local au cloud

```bash
supabase link --project-ref <votre-project-id>
```

### Voir le projet lié

```bash
supabase status
```

### Délier le projet

```bash
supabase unlink
```

---

## 📦 Edge Functions

### Lister toutes les fonctions

```bash
supabase functions list
```

### Déployer une fonction

```bash
# Déployer mailchimp-subscribe
supabase functions deploy mailchimp-subscribe --no-verify-jwt

# Déployer toutes les fonctions
supabase functions deploy --no-verify-jwt
```

### Servir une fonction en local (pour tests)

```bash
supabase functions serve mailchimp-subscribe
```

### Voir les logs d'une fonction

```bash
# Voir les logs en temps réel
supabase functions logs mailchimp-subscribe

# Voir les N dernières lignes
supabase functions logs mailchimp-subscribe --tail 50
```

### Supprimer une fonction

```bash
supabase functions delete mailchimp-subscribe
```

---

## 🔑 Secrets Management

### Lister tous les secrets

```bash
supabase secrets list
```

### Définir un secret

```bash
supabase secrets set NOM_DU_SECRET=valeur
```

**Exemple pour Mailchimp** :

```bash
supabase secrets set MAILCHIMP_API_KEY=abc123def456-us19
supabase secrets set MAILCHIMP_LIST_ID=a1b2c3d4e5
supabase secrets set MAILCHIMP_DC=us19
```

### Définir plusieurs secrets depuis un fichier

Créez un fichier `.env.secrets` :

```env
MAILCHIMP_API_KEY=abc123def456-us19
MAILCHIMP_LIST_ID=a1b2c3d4e5
MAILCHIMP_DC=us19
```

Puis :

```bash
supabase secrets set --env-file .env.secrets
```

### Supprimer un secret

```bash
supabase secrets unset NOM_DU_SECRET
```

---

## 🗄️ Database

### Voir le statut de la base de données

```bash
supabase db status
```

### Pull des migrations

```bash
supabase db pull
```

### Push des migrations

```bash
supabase db push
```

### Reset de la base de données locale

```bash
supabase db reset
```

---

## 🔄 Local Development

### Démarrer Supabase en local

```bash
supabase start
```

### Arrêter Supabase local

```bash
supabase stop
```

### Redémarrer Supabase local

```bash
supabase restart
```

---

## 📊 Monitoring & Debugging

### Voir tous les logs

```bash
supabase logs
```

### Logs d'une fonction spécifique

```bash
supabase functions logs mailchimp-subscribe --tail 100
```

### Voir les métriques

```bash
supabase stats
```

---

## ⚡ Commandes Rapides Can-nX

### Setup complet initial

```bash
# 1. Se connecter
supabase login

# 2. Lier le projet
supabase link --project-ref <project-id>

# 3. Déployer la fonction Mailchimp
supabase functions deploy mailchimp-subscribe --no-verify-jwt

# 4. Configurer les secrets
supabase secrets set MAILCHIMP_API_KEY=<votre-api-key>
supabase secrets set MAILCHIMP_LIST_ID=<votre-list-id>
supabase secrets set MAILCHIMP_DC=us19

# 5. Vérifier
supabase functions list
supabase secrets list
```

### Redéploiement après modifications

```bash
# Déployer uniquement la fonction modifiée
supabase functions deploy mailchimp-subscribe --no-verify-jwt

# Voir les logs pour vérifier
supabase functions logs mailchimp-subscribe --tail 20
```

### Debug d'un problème

```bash
# 1. Vérifier le statut
supabase status

# 2. Voir les logs récents
supabase functions logs mailchimp-subscribe --tail 50

# 3. Vérifier les secrets
supabase secrets list

# 4. Tester la fonction
curl -X POST https://<project-ref>.supabase.co/functions/v1/mailchimp-subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","firstName":"Test","lastName":"User","phone":"+33600000000","country":"France","postalCode":"75001","profession":"Architecte","newsletter":true}'
```

---

## 🆘 Troubleshooting

### "Project not linked"

```bash
supabase link --project-ref <project-id>
```

### "Function not found"

```bash
# Redéployer la fonction
supabase functions deploy mailchimp-subscribe --no-verify-jwt
```

### "Missing environment variable"

```bash
# Vérifier les secrets
supabase secrets list

# Redéfinir si manquant
supabase secrets set NOM_DU_SECRET=valeur
```

### Voir la version de Supabase CLI

```bash
supabase --version
```

### Mettre à jour Supabase CLI

```bash
# macOS
brew upgrade supabase

# npm
npm update -g supabase
```

---

## 📚 Documentation Officielle

- [Supabase CLI Reference](https://supabase.com/docs/reference/cli)
- [Edge Functions Guide](https://supabase.com/docs/guides/functions)
- [Secrets Management](https://supabase.com/docs/guides/functions/secrets)

---

## 🎓 Tips & Best Practices

### 1. Toujours tester localement

```bash
# Servir la fonction en local
supabase functions serve mailchimp-subscribe

# Tester avec curl
curl http://localhost:54321/functions/v1/mailchimp-subscribe -d '{...}'
```

### 2. Versionner les secrets (pas les valeurs !)

Ne commitez JAMAIS les valeurs des secrets, mais documentez leur existence :

```bash
# ✅ GOOD - Documenter dans README
echo "MAILCHIMP_API_KEY=<votre-clé>" >> .env.example

# ❌ BAD - Commiter les vraies valeurs
echo "MAILCHIMP_API_KEY=abc123..." >> .env
```

### 3. Utiliser --no-verify-jwt pour les fonctions publiques

Les fonctions qui doivent être accessibles sans authentification :

```bash
supabase functions deploy ma-fonction --no-verify-jwt
```

### 4. Surveiller les logs en production

```bash
# Logs en temps réel
supabase functions logs mailchimp-subscribe --follow
```

### 5. Backup des secrets

Gardez une copie sécurisée de vos secrets (gestionnaire de mots de passe, vault).

---

## ✅ Checklist de déploiement

- [ ] `supabase login` - Authentifié
- [ ] `supabase link` - Projet lié
- [ ] `supabase functions deploy` - Fonction déployée
- [ ] `supabase secrets set` - Secrets configurés
- [ ] `supabase functions list` - Fonction visible
- [ ] `supabase secrets list` - Secrets visibles
- [ ] Test avec curl - Fonction fonctionne
- [ ] Test depuis le site - Intégration OK

---

**Aide ?** contact@can-nx.com | +33 6 49 53 67 19

# Intégration Mailchimp - Can-nX Contact Form

## 📋 Vue d'ensemble

Le formulaire de contact Can-nX est maintenant intégré avec Mailchimp pour capturer automatiquement les leads et les ajouter à votre liste de diffusion marketing.

## 🔧 Configuration requise

### 1. Compte Mailchimp

Vous aurez besoin d'un compte Mailchimp actif (gratuit ou payant).

### 2. Obtenir la clé API Mailchimp

1. Connectez-vous à votre compte Mailchimp
2. Cliquez sur votre profil (en haut à droite)
3. Sélectionnez **Account & Billing** → **Extras** → **API Keys**
4. Cliquez sur **Create A Key**
5. Copiez votre clé API (format: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us19`)

### 3. Obtenir votre List ID (Audience ID)

1. Dans Mailchimp, allez dans **Audience** → **All contacts**
2. Cliquez sur **Settings** → **Audience name and defaults**
3. Trouvez et copiez votre **Audience ID** (format: `xxxxxxxxxx`)

### 4. Identifier votre Datacenter

Votre clé API se termine par `-usXX` (exemple: `-us19`)
- `us19` est votre datacenter
- Ce sera utilisé dans l'URL de l'API

## 🎯 Configuration des champs personnalisés Mailchimp

Pour que tous les champs du formulaire soient capturés, configurez ces merge fields dans Mailchimp :

1. Allez dans **Audience** → **Settings** → **Audience fields and *|MERGE|* tags**
2. Ajoutez ces champs personnalisés :

| Nom du champ | Tag Merge | Type | Requis | Description |
|--------------|-----------|------|---------|-------------|
| First Name | FNAME | Text | Non | Prénom (déjà présent) |
| Last Name | LNAME | Text | Non | Nom (déjà présent) |
| Company | COMPANY | Text | Non | Entreprise du contact |
| Phone Number | PHONE | Phone | Non | Numéro de téléphone |
| Message | MESSAGE | Text | Non | Message du formulaire (augmentez la limite à 500 caractères) |

## 🔒 Sécurité - Configuration pour Production

### ⚠️ IMPORTANT : NE PAS exposer la clé API côté client !

Le code actuel dans `Contact.tsx` contient un placeholder pour la clé API. **Vous DEVEZ utiliser une solution backend pour la production.**

### Option recommandée : Supabase Edge Functions

#### Étape 1 : Créer une Edge Function

Créez le fichier `supabase/functions/mailchimp-subscribe/index.ts` :

```typescript
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email, firstName, lastName, company, phone, message } = await req.json()
    
    // Récupérer les credentials depuis les variables d'environnement
    const MAILCHIMP_API_KEY = Deno.env.get('MAILCHIMP_API_KEY')!
    const MAILCHIMP_LIST_ID = Deno.env.get('MAILCHIMP_LIST_ID')!
    const MAILCHIMP_DC = Deno.env.get('MAILCHIMP_DC')!
    
    // Appel à l'API Mailchimp
    const response = await fetch(
      `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
            COMPANY: company || '',
            PHONE: phone || '',
            MESSAGE: message || ''
          },
          tags: ['Website Contact', 'Can-nX Lead']
        })
      }
    )
    
    const data = await response.json()
    
    return new Response(
      JSON.stringify({ success: true, data }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: response.ok ? 200 : response.status
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400
      }
    )
  }
})
```

#### Étape 2 : Créer le fichier CORS partagé

Créez `supabase/functions/_shared/cors.ts` :

```typescript
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
```

#### Étape 3 : Déployer la fonction

```bash
supabase functions deploy mailchimp-subscribe --no-verify-jwt
```

#### Étape 4 : Configurer les secrets

```bash
supabase secrets set MAILCHIMP_API_KEY=votre_clé_api_ici
supabase secrets set MAILCHIMP_LIST_ID=votre_list_id_ici
supabase secrets set MAILCHIMP_DC=us19
```

#### Étape 5 : Mettre à jour Contact.tsx

Dans `/components/Contact.tsx`, décommentez la section "OPTION 1" et commentez la section "OPTION 2" :

```typescript
// OPTION 1 : Intégration Mailchimp via Supabase Edge Function (RECOMMANDÉ)
const { data, error } = await supabase.functions.invoke('mailchimp-subscribe', {
  body: {
    email: formData.email,
    firstName: formData.firstName,
    lastName: formData.lastName,
    company: formData.company,
    phone: formData.phone,
    message: formData.message
  }
});

if (error) throw error;
```

## 📊 Tags et segmentation

Les contacts soumis via le formulaire reçoivent automatiquement ces tags :
- `Website Contact` - Identifie les contacts du site web
- `Can-nX Lead` - Identifie les leads Can-nX

Vous pouvez créer des segments et campagnes basés sur ces tags dans Mailchimp.

## 🧪 Test de l'intégration

### Test local (développement)

1. Remplacez les placeholders dans `Contact.tsx` :
   - `YOUR_MAILCHIMP_API_KEY`
   - `YOUR_MAILCHIMP_LIST_ID`
   - `YOUR_MAILCHIMP_DC`

2. Remplissez et soumettez le formulaire

3. Vérifiez dans Mailchimp → Audience → All contacts

### Test de production (avec Supabase)

1. Déployez la Edge Function
2. Configurez les secrets
3. Testez le formulaire sur votre site en production
4. Vérifiez les logs dans Supabase Dashboard → Edge Functions

## 📧 Automatisations Mailchimp recommandées

Une fois l'intégration fonctionnelle, configurez ces automatisations :

### 1. Email de bienvenue automatique
- Trigger: Nouveau contact avec tag "Website Contact"
- Contenu: Remerciement + présentation Can-nX + liens utiles

### 2. Notification interne
- Trigger: Nouveau contact avec tag "Can-nX Lead"
- Action: Notification email à votre équipe commerciale

### 3. Campagne de nurturing
- Segment: Tag "Can-nX Lead"
- Série: 3-5 emails sur 2 semaines présentant les solutions Can-nX

## 🔍 Debugging

### Erreur 401 Unauthorized
- Vérifiez que votre clé API est correcte
- Vérifiez que la clé n'a pas expiré

### Erreur 404 Resource Not Found
- Vérifiez le List ID
- Vérifiez le datacenter (us19, us6, etc.)

### Erreur 400 Bad Request
- Peut signifier que l'email existe déjà (c'est normal)
- Vérifiez que les merge fields sont bien configurés dans Mailchimp

### Logs Supabase
Consultez les logs dans Supabase Dashboard → Edge Functions → mailchimp-subscribe

## 📝 Fichiers modifiés

- `/components/Contact.tsx` - Formulaire de contact avec intégration Mailchimp
- `/config/mailchimpConfig.ts` - Configuration Mailchimp (documentation)
- `/guidelines/MailchimpIntegration.md` - Cette documentation

## 🎯 Prochaines étapes

1. ✅ Créer un compte Mailchimp (si pas déjà fait)
2. ✅ Obtenir la clé API et List ID
3. ✅ Configurer les merge fields personnalisés
4. ✅ Déployer la Supabase Edge Function
5. ✅ Tester l'intégration
6. ✅ Configurer les automatisations marketing
7. ✅ Surveiller les conversions et leads

## 💡 Conseils

- **Double opt-in** : Activez-le dans Mailchimp Settings pour conformité RGPD
- **Segmentation** : Créez des segments basés sur les champs Company, Message
- **A/B Testing** : Testez différentes campagnes de nurturing
- **Analytics** : Suivez les taux d'ouverture et de clics dans Mailchimp

## 📞 Support

Pour toute question sur l'intégration Mailchimp :
- Documentation Mailchimp : https://mailchimp.com/developer/marketing/api/
- Support Supabase : https://supabase.com/docs/guides/functions

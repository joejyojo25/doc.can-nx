/**
 * Configuration Mailchimp pour Can-nX
 * 
 * IMPORTANT SÉCURITÉ :
 * En production, NE JAMAIS exposer la clé API Mailchimp côté client !
 * 
 * Solutions recommandées :
 * 1. Utiliser Supabase Edge Functions (recommandé)
 * 2. Utiliser un proxy backend Node.js/Express
 * 3. Utiliser l'intégration Mailchimp embedded form (moins flexible)
 * 
 * ÉTAPES DE CONFIGURATION :
 * 
 * 1. Obtenez votre clé API Mailchimp :
 *    - Connectez-vous à Mailchimp
 *    - Account > Extras > API Keys
 *    - Créez une nouvelle clé API
 * 
 * 2. Obtenez votre List ID (Audience ID) :
 *    - Audience > All contacts > Settings > Audience name and defaults
 *    - Copiez l'Audience ID
 * 
 * 3. Identifiez votre datacenter (dc) :
 *    - Votre clé API se termine par -usXX (ex: -us19)
 *    - Le XX est votre datacenter
 * 
 * 4. Configurez les merge fields dans Mailchimp :
 *    - Audience > Settings > Audience fields and *|MERGE|* tags
 *    - Ajoutez ces champs personnalisés :
 *      - FNAME (First Name) - déjà présent par défaut
 *      - LNAME (Last Name) - déjà présent par défaut
 *      - COMPANY (Text)
 *      - PHONE (Phone Number)
 *      - COUNTRY (Text)
 *      - POSTAL (Text ou Number)
 *      - PROFESSION (Text ou Dropdown)
 *      - PRODUCT (Text)
 *      - MESSAGE (Text - augmentez la limite à 500 caractères)
 */

export interface MailchimpConfig {
  apiKey: string;
  listId: string;
  datacenter: string;
  serverPrefix: string;
}

// Configuration Mailchimp
// IMPORTANT : Remplacez ces valeurs par vos vraies credentials
export const mailchimpConfig: MailchimpConfig = {
  // Votre clé API Mailchimp (format: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-usXX)
  apiKey: 'YOUR_MAILCHIMP_API_KEY_HERE',
  
  // Votre Audience/List ID (format: xxxxxxxxxx)
  listId: 'YOUR_MAILCHIMP_LIST_ID_HERE',
  
  // Votre datacenter (ex: us19, us6, etc.)
  datacenter: 'us19',
  
  // Préfixe serveur (généralement identique au datacenter)
  serverPrefix: 'us19'
};

/**
 * URL de l'API Mailchimp construite dynamiquement
 */
export const getMailchimpApiUrl = () => {
  return `https://${mailchimpConfig.datacenter}.api.mailchimp.com/3.0/lists/${mailchimpConfig.listId}/members`;
};

/**
 * Headers d'authentification Mailchimp
 */
export const getMailchimpHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${btoa(`anystring:${mailchimpConfig.apiKey}`)}`
  };
};

/**
 * Structure de données pour un contact Mailchimp
 */
export interface MailchimpContact {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone: string;
  country: string;
  postalCode: string;
  profession: string;
  productInterest?: string;
  message?: string;
  newsletter: boolean;
}

/**
 * Formate les données du formulaire pour Mailchimp
 */
export const formatMailchimpData = (contact: MailchimpContact) => {
  return {
    email_address: contact.email,
    status: contact.newsletter ? 'subscribed' : 'pending' as const,
    merge_fields: {
      FNAME: contact.firstName,
      LNAME: contact.lastName,
      COMPANY: contact.company || '',
      PHONE: contact.phone,
      COUNTRY: contact.country,
      POSTAL: contact.postalCode,
      PROFESSION: contact.profession,
      PRODUCT: contact.productInterest || '',
      MESSAGE: contact.message || ''
    },
    tags: ['Website Contact', 'Can-nX Lead', contact.profession]
  };
};

/**
 * EXEMPLE D'INTÉGRATION AVEC SUPABASE EDGE FUNCTION (Recommandé pour production)
 * 
 * Créez une Edge Function dans Supabase :
 * 
 * ```typescript
 * // supabase/functions/mailchimp-subscribe/index.ts
 * import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
 * 
 * serve(async (req) => {
 *   const { 
 *     email, firstName, lastName, company, phone, 
 *     country, postalCode, profession, productInterest, message, newsletter 
 *   } = await req.json()
 *   
 *   const MAILCHIMP_API_KEY = Deno.env.get('MAILCHIMP_API_KEY')
 *   const MAILCHIMP_LIST_ID = Deno.env.get('MAILCHIMP_LIST_ID')
 *   const MAILCHIMP_DC = Deno.env.get('MAILCHIMP_DC')
 *   
 *   const response = await fetch(
 *     `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
 *     {
 *       method: 'POST',
 *       headers: {
 *         'Content-Type': 'application/json',
 *         'Authorization': `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`
 *       },
 *       body: JSON.stringify({
 *         email_address: email,
 *         status: newsletter ? 'subscribed' : 'pending',
 *         merge_fields: {
 *           FNAME: firstName,
 *           LNAME: lastName,
 *           COMPANY: company || '',
 *           PHONE: phone,
 *           COUNTRY: country,
 *           POSTAL: postalCode,
 *           PROFESSION: profession,
 *           PRODUCT: productInterest || '',
 *           MESSAGE: message || ''
 *         },
 *         tags: ['Website Contact', 'Can-nX Lead', profession]
 *       })
 *     }
 *   )
 *   
 *   return new Response(JSON.stringify(await response.json()), {
 *     headers: { 'Content-Type': 'application/json' },
 *     status: response.status
 *   })
 * })
 * ```
 * 
 * Puis dans votre frontend, appelez simplement :
 * ```typescript
 * const { data, error } = await supabase.functions.invoke('mailchimp-subscribe', {
 *   body: { 
 *     email, firstName, lastName, company, phone, 
 *     country, postalCode, profession, productInterest, message, newsletter 
 *   }
 * })
 * ```
 */

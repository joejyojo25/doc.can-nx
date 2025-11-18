import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-0ad4a4f9/health", (c) => {
  return c.json({ status: "ok" });
});

// Mailchimp subscription endpoint
app.post("/make-server-0ad4a4f9/mailchimp-subscribe", async (c) => {
  try {
    // Parse request body
    const formData = await c.req.json();

    // Validate required fields
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.phone || !formData.profession) {
      console.error('Mailchimp subscription error: Missing required fields', formData);
      return c.json({ 
        success: false, 
        error: 'Missing required fields' 
      }, 400);
    }

    // Get Mailchimp credentials from environment variables
    const MAILCHIMP_API_KEY = Deno.env.get('MAILCHIMP_API_KEY');
    const MAILCHIMP_LIST_ID = Deno.env.get('MAILCHIMP_LIST_ID');
    const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL');
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    let MAILCHIMP_DC = Deno.env.get('MAILCHIMP_DC') || 'us17';

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID) {
      console.error('Mailchimp configuration error: Missing MAILCHIMP_API_KEY or MAILCHIMP_LIST_ID');
      return c.json({ 
        success: false, 
        error: 'Server configuration error. Please contact support.' 
      }, 500);
    }

    // Extract datacenter from API key if MAILCHIMP_DC looks wrong
    // API key format: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us17
    if (MAILCHIMP_DC.includes('-') || MAILCHIMP_DC.length > 10) {
      // Extract from API key instead
      const dcMatch = MAILCHIMP_API_KEY.match(/-([a-z0-9]+)$/);
      if (dcMatch && dcMatch[1]) {
        MAILCHIMP_DC = dcMatch[1];
        console.log('Extracted datacenter from API key:', MAILCHIMP_DC);
      } else {
        MAILCHIMP_DC = 'us17'; // Fallback
      }
    }

    // Prepare Mailchimp API request
    // Use PUT with subscriber hash to upsert (create or update) contact
    const crypto = await import("node:crypto");
    const subscriberHash = crypto.createHash('md5').update(formData.email.toLowerCase()).digest('hex');
    const mailchimpUrl = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${subscriberHash}`;
    
    console.log('Mailchimp URL (sanitized):', mailchimpUrl.replace(MAILCHIMP_LIST_ID, 'LIST_ID').replace(subscriberHash, 'HASH'));
    
    // ==========================================
    // STEP 1: Get existing contact to retrieve message history
    // ==========================================
    let existingMessageHistory = '';
    
    try {
      const getResponse = await fetch(mailchimpUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`
        }
      });
      
      if (getResponse.ok) {
        const existingContact = await getResponse.json();
        existingMessageHistory = existingContact.merge_fields?.MMERGE11 || '';
        console.log('Found existing contact with message history:', existingMessageHistory ? 'Yes' : 'No');
      } else {
        console.log('No existing contact found (new lead)');
      }
    } catch (error) {
      console.log('Error fetching existing contact (likely new):', error);
    }
    
    // ==========================================
    // STEP 2: Build timestamped message history
    // ==========================================
    let messageHistoryField = '';
    
    if (formData.message) {
      // Format: [2025-11-10 14:30] Message text
      const now = new Date();
      const timestamp = now.toISOString().slice(0, 16).replace('T', ' '); // YYYY-MM-DD HH:MM
      const newMessage = `[${timestamp}] ${formData.message}`;
      
      if (existingMessageHistory) {
        // Parse existing messages (split by " | ")
        const existingMessages = existingMessageHistory.split(' | ').filter(m => m.trim());
        
        // Add new message at the beginning (most recent first)
        existingMessages.unshift(newMessage);
        
        // Keep only last 5 messages to avoid Mailchimp field size limits
        const recentMessages = existingMessages.slice(0, 5);
        
        // Rebuild history string
        messageHistoryField = recentMessages.join(' | ');
        
        console.log(`Message history: ${existingMessages.length} total, keeping ${recentMessages.length} most recent`);
      } else {
        // First message
        messageHistoryField = newMessage;
        console.log('First message from this contact');
      }
    } else {
      // No new message, keep existing history
      messageHistoryField = existingMessageHistory;
    }
    
    const mailchimpData = {
      email_address: formData.email,
      status_if_new: formData.newsletter ? 'subscribed' : 'transactional',
      merge_fields: {
        NAME: `${formData.firstName} ${formData.lastName}`, // Combined name field
        MMERGE1: formData.country, // Country
        MMERGE5: formData.profession, // "I am" dropdown
        MMERGE6: formData.company || '', // Company Name
        MMERGE8: formData.phone, // Phone number
        MMERGE10: formData.productInterest || '', // Product Interest
        MMERGE11: messageHistoryField // Message history with timestamps
      },
      tags: [
        'Can-nX Lead' // Main tag - others removed as requested
      ].filter(tag => tag !== '') // Remove empty tags
    };

    console.log('Sending to Mailchimp (upsert):', { 
      email: formData.email, 
      name: `${formData.firstName} ${formData.lastName}`,
      profession: formData.profession,
      productInterest: formData.productInterest || 'None',
      hasMessage: formData.message ? 'Yes' : 'No',
      messageHistory: messageHistoryField ? messageHistoryField.substring(0, 100) + '...' : 'Empty'
    });

    // Call Mailchimp API with PUT (upsert)
    const mailchimpResponse = await fetch(mailchimpUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`
      },
      body: JSON.stringify(mailchimpData)
    });

    const mailchimpResult = await mailchimpResponse.json();

    // Handle Mailchimp response
    // PUT with subscriber hash creates OR updates the contact
    if (mailchimpResponse.ok) {
      const isNewContact = mailchimpResult.status === 'subscribed' || mailchimpResult.status === 'transactional';
      
      console.log('Mailchimp success:', {
        email: formData.email,
        status: isNewContact ? 'Contact created/updated' : 'Contact updated',
        mailchimpStatus: mailchimpResponse.status,
        contactStatus: mailchimpResult.status
      });

      // ==========================================
      // STEP 3: Send notification email to admin
      // ==========================================
      if (ADMIN_EMAIL && RESEND_API_KEY) {
        try {
          // Validate and clean ADMIN_EMAIL
          const cleanedEmail = ADMIN_EMAIL.trim();
          
          console.log('=== ADMIN EMAIL DEBUG ===');
          console.log('ADMIN_EMAIL raw value:', JSON.stringify(ADMIN_EMAIL));
          console.log('ADMIN_EMAIL length:', ADMIN_EMAIL.length);
          console.log('ADMIN_EMAIL cleaned:', JSON.stringify(cleanedEmail));
          console.log('Expected by Resend:', 'socialmedia@can-nx.com');
          console.log('Match:', cleanedEmail === 'socialmedia@can-nx.com');
          console.log('=========================');
          
          // Validate email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(cleanedEmail)) {
            console.error('Invalid ADMIN_EMAIL format:', cleanedEmail);
            throw new Error('Invalid ADMIN_EMAIL format');
          }
          
          const emailSubject = `New lead from can-nx.com`;
          const emailHtml = `
            <h2>Nouveau contact depuis le site Can-nX</h2>
            <hr>
            <h3>Informations du contact :</h3>
            <p><strong>Nom :</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email :</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Téléphone :</strong> ${formData.phone}</p>
            <p><strong>Pays :</strong> ${formData.country || 'Non spécifié'}</p>
            <p><strong>Profession :</strong> ${formData.profession}</p>
            <p><strong>Société :</strong> ${formData.company || 'Non spécifié'}</p>
            <p><strong>Produit d'intérêt :</strong> ${formData.productInterest || 'Non spécifié'}</p>
            <p><strong>Newsletter :</strong> ${formData.newsletter ? 'Oui' : 'Non'}</p>
            <hr>
            <h3>Message :</h3>
            <p>${formData.message ? formData.message.replace(/\n/g, '<br>') : 'Aucun message'}</p>
            <hr>
            <p><small>Contact ${isNewContact ? 'créé' : 'mis à jour'} dans Mailchimp - ${new Date().toLocaleString('fr-FR')}</small></p>
          `;

          const emailText = `
Nouveau contact depuis le site Can-nX
============================================

Informations du contact :
- Nom : ${formData.firstName} ${formData.lastName}
- Email : ${formData.email}
- Téléphone : ${formData.phone}
- Pays : ${formData.country || 'Non spécifié'}
- Profession : ${formData.profession}
- Société : ${formData.company || 'Non spécifié'}
- Produit d'intérêt : ${formData.productInterest || 'Non spécifié'}
- Newsletter : ${formData.newsletter ? 'Oui' : 'Non'}

Message :
${formData.message || 'Aucun message'}

---
Contact ${isNewContact ? 'créé' : 'mis à jour'} dans Mailchimp - ${new Date().toLocaleString('fr-FR')}
          `;

          // Send email via Resend API
          const resendUrl = `https://api.resend.com/emails`;
          
          const emailPayload = {
            from: 'Can-nX Website <onboarding@resend.dev>',
            to: [cleanedEmail],
            subject: emailSubject,
            html: emailHtml,
            text: emailText,
            reply_to: formData.email
          };

          console.log('Sending notification email to admin:', cleanedEmail);
          console.log('Email payload (sanitized):', {
            from: emailPayload.from,
            to: emailPayload.to,
            subject: emailPayload.subject,
            hasHtml: !!emailPayload.html,
            hasText: !!emailPayload.text
          });

          const emailResponse = await fetch(resendUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${RESEND_API_KEY}`
            },
            body: JSON.stringify(emailPayload)
          });

          const emailResult = await emailResponse.json();

          if (emailResponse.ok && emailResult.id) {
            console.log('Notification email sent successfully to admin:', emailResult.id);
          } else {
            console.error('Failed to send notification email:', emailResult);
          }
        } catch (emailError) {
          // Log error but don't fail the main request
          console.error('Error sending notification email (non-critical):', emailError);
        }
      } else {
        console.log('Email notification skipped:', {
          hasAdminEmail: !!ADMIN_EMAIL,
          hasResendKey: !!RESEND_API_KEY
        });
      }

      return c.json({ 
        success: true, 
        message: 'Contact successfully saved to Mailchimp',
        isNew: isNewContact,
        data: {
          email: mailchimpResult.email_address,
          status: mailchimpResult.status,
          tags: mailchimpResult.tags || []
        }
      });
    } else {
      // Log detailed error with more context
      console.error('Mailchimp API error:', {
        status: mailchimpResponse.status,
        statusText: mailchimpResponse.statusText,
        response: mailchimpResult,
        email: formData.email
      });

      // Provide user-friendly error message
      let errorMessage = 'Failed to save contact to Mailchimp';
      if (mailchimpResult.title?.includes('Member In Compliance State')) {
        errorMessage = 'This email address has previously unsubscribed and cannot be re-added automatically. Please contact support.';
      } else if (mailchimpResult.title?.includes('Invalid Resource')) {
        errorMessage = 'Mailchimp configuration error: One or more merge fields are not configured. Please check MMERGE fields.';
      } else if (mailchimpResult.detail) {
        errorMessage = mailchimpResult.detail;
      } else if (mailchimpResult.title) {
        errorMessage = mailchimpResult.title;
      }

      return c.json({ 
        success: false, 
        error: errorMessage,
        technicalDetails: mailchimpResult.detail || mailchimpResult.title,
        mailchimpError: mailchimpResult
      }, mailchimpResponse.status);
    }

  } catch (error) {
    console.error('Mailchimp subscription endpoint error:', error);
    
    return c.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Internal server error'
    }, 500);
  }
});

Deno.serve(app.fetch);
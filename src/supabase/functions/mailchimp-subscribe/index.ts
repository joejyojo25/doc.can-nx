import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  phone: string;
  country: string;
  postalCode: string;
  profession: string;
  productInterest?: string;
  message?: string;
  newsletter: boolean;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Parse request body
    const formData: ContactFormData = await req.json();

    // Validate required fields
    if (
      !formData.email ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.profession
    ) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required fields",
        }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
          status: 400,
        },
      );
    }

    // Get Mailchimp credentials from environment variables
    const MAILCHIMP_API_KEY = Deno.env.get("MAILCHIMP_API_KEY");
    const MAILCHIMP_LIST_ID = Deno.env.get("MAILCHIMP_LIST_ID");
    let MAILCHIMP_DC = Deno.env.get("MAILCHIMP_DC") || "us17";

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID) {
      console.error(
        "Missing Mailchimp credentials in environment variables",
      );
      return new Response(
        JSON.stringify({
          success: false,
          error:
            "Server configuration error. Please contact support.",
        }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
          status: 500,
        },
      );
    }

    // Extract datacenter from API key if MAILCHIMP_DC looks wrong
    // API key format: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us17
    if (MAILCHIMP_DC.includes("-") || MAILCHIMP_DC.length > 10) {
      // Extract from API key instead
      const dcMatch = MAILCHIMP_API_KEY.match(/-([a-z0-9]+)$/);
      if (dcMatch && dcMatch[1]) {
        MAILCHIMP_DC = dcMatch[1];
        console.log("Extracted datacenter from API key:", MAILCHIMP_DC);
      } else {
        MAILCHIMP_DC = "us17"; // Fallback
      }
    }

    // Prepare Mailchimp API request
    const mailchimpUrl = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;
    
    console.log("Mailchimp URL (sanitized):", mailchimpUrl.replace(MAILCHIMP_LIST_ID, "LIST_ID"));

    const mailchimpData = {
      email_address: formData.email,
      status: formData.newsletter ? "subscribed" : "transactional",
      merge_fields: {
        NAME: `${formData.firstName} ${formData.lastName}`, // Combined name field
        MMERGE1: formData.country, // Country
        MMERGE5: formData.profession, // "I am" dropdown
        MMERGE6: formData.company || "", // Company Name
        MMERGE8: formData.phone, // Phone number
      },
      tags: [
        "Website Contact",
        "Can-nX Lead",
        formData.profession,
        formData.productInterest ? `Interest: ${formData.productInterest}` : "",
        formData.postalCode ? `Postal: ${formData.postalCode}` : "",
        formData.message ? "Has Message" : "",
      ].filter(tag => tag !== ""), // Remove empty tags
    };

    // Call Mailchimp API
    const mailchimpResponse = await fetch(mailchimpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
      },
      body: JSON.stringify(mailchimpData),
    });

    const mailchimpResult = await mailchimpResponse.json();

    // Handle Mailchimp response
    // Status 400 can mean the email already exists, which is fine
    if (
      mailchimpResponse.ok ||
      mailchimpResponse.status === 400
    ) {
      // Log success
      console.log("Contact added to Mailchimp:", {
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        profession: formData.profession,
        status:
          mailchimpResponse.status === 400
            ? "Already exists"
            : "New contact",
      });

      return new Response(
        JSON.stringify({
          success: true,
          message: "Contact successfully added to Mailchimp",
          data: mailchimpResult,
        }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
          status: 200,
        },
      );
    } else {
      // Log error details
      console.error("Mailchimp API error:", {
        status: mailchimpResponse.status,
        response: mailchimpResult,
      });

      return new Response(
        JSON.stringify({
          success: false,
          error:
            mailchimpResult.detail ||
            mailchimpResult.title ||
            "Failed to add contact to Mailchimp",
          mailchimpError: mailchimpResult,
        }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
          status: mailchimpResponse.status,
        },
      );
    }
  } catch (error) {
    console.error("Edge function error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Internal server error",
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 500,
      },
    );
  }
});
#!/bin/bash

# Test de l'intégration Mailchimp Can-nX
# Ce script teste l'envoi d'un contact via le formulaire

echo "🧪 Test de l'intégration Mailchimp Can-nX"
echo "=========================================="
echo ""

# Configuration
PROJECT_ID="your-project-id"  # À remplacer par votre Project ID Supabase
ANON_KEY="your-anon-key"      # À remplacer par votre Anon Key Supabase

# URL de l'endpoint
URL="https://${PROJECT_ID}.supabase.co/functions/v1/make-server-0ad4a4f9/mailchimp-subscribe"

# Données de test
TEST_DATA='{
  "firstName": "Test",
  "lastName": "User",
  "email": "test@can-nx.com",
  "phone": "+33 6 12 34 56 78",
  "company": "Can-nX Test",
  "country": "France",
  "postalCode": "75001",
  "profession": "Installateur",
  "productInterest": "Kloud'\''nX",
  "message": "Test d'\''intégration Mailchimp",
  "newsletter": true
}'

echo "📡 Envoi de la requête à Mailchimp..."
echo "URL: $URL"
echo ""

# Envoi de la requête
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$URL" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ANON_KEY" \
  -d "$TEST_DATA")

# Extraction du code HTTP
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n-1)

echo "📊 Résultat :"
echo "HTTP Status: $HTTP_CODE"
echo ""
echo "Réponse :"
echo "$BODY" | jq '.' 2>/dev/null || echo "$BODY"
echo ""

# Vérification du résultat
if [ "$HTTP_CODE" -eq 200 ]; then
  echo "✅ SUCCESS ! Contact envoyé à Mailchimp"
  echo ""
  echo "🔍 Vérifiez maintenant dans Mailchimp :"
  echo "   1. Allez sur https://us17.admin.mailchimp.com/lists/members"
  echo "   2. Cherchez 'test@can-nx.com'"
  echo "   3. Vérifiez les merge fields :"
  echo "      - NAME = 'Test User'"
  echo "      - MMERGE1 (Country) = 'France'"
  echo "      - MMERGE5 (I am) = 'Installateur'"
  echo "      - MMERGE6 (Company) = 'Can-nX Test'"
  echo "      - MMERGE8 (Phone) = '+33 6 12 34 56 78'"
  echo "   4. Vérifiez les tags :"
  echo "      - Website Contact"
  echo "      - Can-nX Lead"
  echo "      - Installateur"
  echo "      - Interest: Kloud'nX"
  echo "      - Postal: 75001"
  echo "      - Has Message"
else
  echo "❌ ERREUR ! Code HTTP: $HTTP_CODE"
  echo ""
  echo "🔍 Vérifications :"
  echo "   1. Les secrets Supabase sont-ils configurés ?"
  echo "      - MAILCHIMP_API_KEY"
  echo "      - MAILCHIMP_LIST_ID"
  echo "      - MAILCHIMP_DC"
  echo "   2. Le serveur Hono est-il déployé ?"
  echo "   3. L'API Key Mailchimp est-elle valide ?"
fi

echo ""
echo "=========================================="

#!/bin/bash

# Script de test pour l'intégration Mailchimp via Supabase Edge Function
# Usage: ./scripts/test-mailchimp.sh

echo "🧪 Test de l'intégration Mailchimp Can-nX"
echo "=========================================="
echo ""

# Vérifier que SUPABASE_URL est défini
if [ -z "$SUPABASE_URL" ]; then
    echo "❌ Erreur: SUPABASE_URL n'est pas défini"
    echo "📝 Exemple: export SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co"
    exit 1
fi

echo "✅ SUPABASE_URL: $SUPABASE_URL"
echo ""

# Construire l'URL de la Edge Function
FUNCTION_URL="$SUPABASE_URL/functions/v1/mailchimp-subscribe"

echo "📡 Envoi de la requête test à: $FUNCTION_URL"
echo ""

# Payload de test
read -r -d '' PAYLOAD << EOM
{
  "email": "test-$(date +%s)@can-nx.com",
  "firstName": "Test",
  "lastName": "Can-nX",
  "company": "Can-nX Test",
  "phone": "+33600000000",
  "country": "France",
  "postalCode": "75001",
  "profession": "Architecte",
  "productInterest": "Kloud'nX",
  "message": "Test automatique de l'intégration Mailchimp",
  "newsletter": true
}
EOM

echo "📦 Payload:"
echo "$PAYLOAD" | jq '.'
echo ""

# Envoyer la requête
echo "⏳ Envoi en cours..."
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$FUNCTION_URL" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")

# Extraire le code de statut et le corps
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

echo ""
echo "📨 Réponse HTTP $HTTP_CODE:"
echo "$BODY" | jq '.'
echo ""

# Vérifier le résultat
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Succès ! Le contact a été ajouté à Mailchimp"
    echo "🔍 Vérifiez dans Mailchimp > Audience > All contacts"
elif [ "$HTTP_CODE" = "400" ]; then
    echo "⚠️  Code 400 - Peut signifier que l'email existe déjà (c'est normal)"
    echo "🔍 Vérifiez les détails dans la réponse ci-dessus"
else
    echo "❌ Erreur $HTTP_CODE"
    echo "🐛 Vérifiez les logs dans Supabase Dashboard > Edge Functions > mailchimp-subscribe"
    echo ""
    echo "Vérifications à faire:"
    echo "  - Les secrets sont configurés: supabase secrets list"
    echo "  - La fonction est déployée: supabase functions list"
    echo "  - Les merge fields existent dans Mailchimp"
fi

echo ""
echo "=========================================="

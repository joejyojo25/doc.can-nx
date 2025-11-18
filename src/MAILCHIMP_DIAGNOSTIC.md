# 🔍 Mailchimp Integration - Diagnostic Guide

## Common Errors & Solutions

---

### ❌ Error 1: DNS Lookup Failed

```
dns error: failed to lookup address information
URL: https://74d074c6dfb1d92628b91f06036d4e85-us17.api.mailchimp.com/...
```

**Cause**: `MAILCHIMP_DC` contains entire API key instead of datacenter

**Solution**: ✅ **ALREADY FIXED!** Code now auto-extracts datacenter from API key

**Details**: [MAILCHIMP_FIX_DNS_ERROR.md](./MAILCHIMP_FIX_DNS_ERROR.md)

---

### ❌ Error 2: 401 Unauthorized

```
Mailchimp API error: Unauthorized
Status: 401
```

**Causes**:
1. `MAILCHIMP_API_KEY` is incorrect
2. API key expired
3. API key not set in Supabase secrets

**Solution**:
1. Verify API key in Mailchimp: **Account** → **Extras** → **API keys**
2. Copy the full key (format: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us17`)
3. Update in Supabase: **Project Settings** → **Edge Functions** → **Secrets**
4. Set `MAILCHIMP_API_KEY` to the complete key

---

### ❌ Error 3: 404 Resource Not Found

```
Mailchimp API error: Resource Not Found
Status: 404
```

**Causes**:
1. `MAILCHIMP_LIST_ID` is incorrect
2. List was deleted
3. API key doesn't have access to the list

**Solution**:
1. Find your List ID in Mailchimp:
   - Go to **Audience** → **Settings** → **Audience name and defaults**
   - Copy **Audience ID** (should be: `958113a82e`)
2. Update in Supabase secrets: `MAILCHIMP_LIST_ID = 958113a82e`

---

### ❌ Error 4: 400 Bad Request - Invalid Merge Field

```
Mailchimp API error: Invalid merge field
Status: 400
```

**Causes**:
1. Profession value doesn't match Mailchimp dropdown
2. Merge field doesn't exist in Mailchimp

**Solution**:
1. Verify profession is one of these **exact** values:
   - Installateur
   - Electrician
   - Integrateur
   - Distributeur
   - Developer
   - Marketing
   - Manufacturer
   - other

2. Check merge fields exist in Mailchimp:
   - **Audience** → **Settings** → **Audience fields and *|MERGE|* tags**
   - Required: NAME, MMERGE1, MMERGE5, MMERGE6, MMERGE8

---

### ❌ Error 5: 400 Member Exists

```
Mailchimp API error: Member Exists
Status: 400
```

**This is NOT an error!** This is **expected behavior**.

**Explanation**:
- Email already exists in Mailchimp
- Code treats this as success
- Contact will be updated with new data

**No action needed** ✅

---

### ❌ Error 6: 500 Server Configuration Error

```
Server configuration error. Please contact support.
```

**Causes**:
1. `MAILCHIMP_API_KEY` not set
2. `MAILCHIMP_LIST_ID` not set
3. Secrets not deployed

**Solution**:
1. Check Supabase secrets are set:
   ```bash
   # Required secrets:
   MAILCHIMP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us17
   MAILCHIMP_LIST_ID=958113a82e
   MAILCHIMP_DC=us17
   ```

2. Verify in Supabase Dashboard:
   - **Project Settings** → **Edge Functions** → **Secrets**
   - All three secrets should be present

---

### ❌ Error 7: CORS Error

```
Access to fetch blocked by CORS policy
```

**Causes**:
1. Making direct call to Mailchimp from frontend
2. CORS not configured on server

**Solution**:
- **Never call Mailchimp API directly from frontend**
- Always use the server route: `/make-server-0ad4a4f9/mailchimp-subscribe`
- CORS is already configured on the server

---

### ❌ Error 8: Network Error / Timeout

```
Failed to fetch
Network request failed
```

**Causes**:
1. Internet connection issue
2. Supabase Edge Function not running
3. Firewall blocking request

**Solution**:
1. Check internet connection
2. Verify Supabase project is running (not paused)
3. Check Supabase status: https://status.supabase.com/
4. Try again in a few minutes

---

## 🔍 Debugging Steps

### Step 1: Check Browser Console

Open DevTools (F12) → Console

**Look for**:
- ✅ "Submitting to Mailchimp server: ..."
- ✅ "Mailchimp server response: {status: 200, ...}"
- ❌ Any red error messages

### Step 2: Check Supabase Logs

Supabase Dashboard → Edge Functions → `make-server-0ad4a4f9` → Logs

**Look for**:
- ✅ "Sending to Mailchimp: ..."
- ✅ "Mailchimp success: ..."
- ✅ "Extracted datacenter from API key: us17"
- ❌ "Mailchimp API error: ..."
- ❌ "Mailchimp configuration error: ..."

### Step 3: Verify Environment Variables

Supabase Dashboard → Project Settings → Edge Functions → Secrets

**Check**:
- ✅ MAILCHIMP_API_KEY exists (ends with `-us17`)
- ✅ MAILCHIMP_LIST_ID = `958113a82e`
- ✅ MAILCHIMP_DC = `us17` (or any value - auto-extracted anyway)

### Step 4: Test API Key Manually

```bash
# Replace with your actual API key
API_KEY="your-api-key-here"
DC="us17"
LIST_ID="958113a82e"

curl -X GET \
  "https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}" \
  -H "Authorization: Basic $(echo -n "anystring:${API_KEY}" | base64)"
```

**Expected**: JSON response with list details  
**Error**: Check API key is valid

### Step 5: Test Form Data

Fill form with **exact test data**:
```
First Name: Test
Last Name: User
Email: test@example.com
Phone: +33 6 12 34 56 78
Company: Test Company
Country: France
Postal Code: 75001
I am: Installateur  ← Must be exact value!
Product: Kloud'nX
Message: Test
Newsletter: ✓ Checked
```

---

## 📊 Expected Log Flow

### Successful Submission

**Browser Console**:
```
1. Submitting to Mailchimp server: https://xxx.supabase.co/functions/v1/make-server-0ad4a4f9/mailchimp-subscribe
2. Mailchimp server response: {status: 200, result: {...}}
```

**Supabase Logs**:
```
1. Extracted datacenter from API key: us17
2. Mailchimp URL (sanitized): https://us17.api.mailchimp.com/3.0/lists/LIST_ID/members
3. Sending to Mailchimp: { email: 'test@example.com', name: 'Test User', profession: 'Installateur' }
4. Mailchimp success: { email: 'test@example.com', status: 'New contact', mailchimpStatus: 200 }
```

**Frontend**:
```
✓ Green success toast
✓ Form resets
✓ No errors
```

---

## 🧪 Quick Health Check

Run this checklist to verify everything is working:

```
□ Supabase project is active (not paused)
□ All 3 secrets are set (API_KEY, LIST_ID, DC)
□ API key format: xxxxxxxx-us17 (ends with datacenter)
□ List ID is correct: 958113a82e
□ Server logs show "Extracted datacenter from API key: us17"
□ No CORS errors in browser console
□ Profession value is one of the exact 8 allowed values
□ All required fields filled (firstName, lastName, email, phone, profession)
□ Internet connection working
□ Mailchimp service is up (check status.mailchimp.com)
```

---

## 🆘 Still Having Issues?

### Collect Diagnostic Information

1. **Browser Console Error** (full message)
2. **Supabase Logs** (last 10 lines)
3. **Form Data Used** (what you filled)
4. **Expected vs Actual** (what should happen vs what happened)

### Verify Configuration

```javascript
// Check these in Supabase logs:
console.log('Extracted datacenter:', MAILCHIMP_DC);
console.log('Mailchimp URL:', mailchimpUrl);
console.log('Sending data:', { email, profession });
```

### Common Fixes

1. **Restart Supabase Edge Functions** (redeploy if needed)
2. **Clear browser cache** (hard refresh: Ctrl+Shift+R)
3. **Wait 5 minutes** and try again (Mailchimp rate limiting)
4. **Try different email** (avoid existing emails for testing)

---

## 📚 Related Documentation

- **DNS Error Fix**: [MAILCHIMP_FIX_DNS_ERROR.md](./MAILCHIMP_FIX_DNS_ERROR.md)
- **Field Mapping**: [MAILCHIMP_FIELD_MAPPING.md](./MAILCHIMP_FIELD_MAPPING.md)
- **Testing Guide**: [MAILCHIMP_TEST_GUIDE.md](./MAILCHIMP_TEST_GUIDE.md)
- **Quick Start**: [START_HERE_MAILCHIMP.md](./START_HERE_MAILCHIMP.md)

---

## ✅ Checklist: Integration is Working

When everything works, you'll see:

- ✅ Form submits without errors
- ✅ Green success toast appears
- ✅ Form resets to empty
- ✅ Console shows success response
- ✅ Supabase logs show "Mailchimp success"
- ✅ Contact appears in Mailchimp
- ✅ All merge fields populated correctly
- ✅ All tags applied

**If all checkboxes are ticked: You're done! 🎉**

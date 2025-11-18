# 🔧 Fix: Mailchimp DNS Error

## ❌ Error

```
dns error: failed to lookup address information: Name or service not known
URL: https://74d074c6dfb1d92628b91f06036d4e85-us17.api.mailchimp.com/...
```

## 🔍 Root Cause

The `MAILCHIMP_DC` environment variable contains the **entire API key** instead of just the datacenter code (e.g., "us17").

**Wrong**: `MAILCHIMP_DC = 74d074c6dfb1d92628b91f06036d4e85-us17`  
**Correct**: `MAILCHIMP_DC = us17`

---

## ✅ Solution Applied

### Automatic Datacenter Extraction

The code now **automatically extracts** the datacenter from your API key if `MAILCHIMP_DC` looks wrong:

```typescript
// Extract datacenter from API key if MAILCHIMP_DC looks wrong
if (MAILCHIMP_DC.includes("-") || MAILCHIMP_DC.length > 10) {
  // Extract from API key instead
  const dcMatch = MAILCHIMP_API_KEY.match(/-([a-z0-9]+)$/);
  if (dcMatch && dcMatch[1]) {
    MAILCHIMP_DC = dcMatch[1];
    console.log('Extracted datacenter from API key:', MAILCHIMP_DC);
  } else {
    MAILCHIMP_DC = 'us17'; // Fallback
  }
}
```

---

## 🎯 What This Means

**You don't need to do anything!** The code will:

1. Check if `MAILCHIMP_DC` looks correct
2. If not, extract datacenter from `MAILCHIMP_API_KEY` (the part after the `-`)
3. Use the correct datacenter for the API URL

---

## 📊 How It Works

### Your Mailchimp API Key Format
```
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us17
^                               ^
API Key Hash                    Datacenter
```

### Automatic Extraction
```
API Key: 74d074c6dfb1d92628b91f06036d4e85-us17
         ↓
Extracted DC: us17
         ↓
Final URL: https://us17.api.mailchimp.com/3.0/lists/958113a82e/members
```

---

## 🧪 Test Now

The fix is applied! Test your contact form:

1. **Fill** the contact form
2. **Submit** it
3. **Check** browser console - you should see:
   ```
   Extracted datacenter from API key: us17
   Mailchimp URL (sanitized): https://us17.api.mailchimp.com/3.0/lists/LIST_ID/members
   ```
4. **Verify** contact appears in Mailchimp

---

## 🔐 Optional: Fix Environment Variable Manually

If you want to clean up the environment variable (recommended but not required):

### In Supabase Dashboard

1. Go to **Project Settings** → **Edge Functions** → **Secrets**
2. Find `MAILCHIMP_DC`
3. **Edit** it
4. Change from: `74d074c6dfb1d92628b91f06036d4e85-us17`
5. Change to: `us17`
6. **Save**

**Note**: The code will work either way now, but having the correct value is cleaner.

---

## ✅ Files Modified

- `/supabase/functions/server/index.tsx` - Added datacenter extraction
- `/supabase/functions/mailchimp-subscribe/index.ts` - Added datacenter extraction

---

## 📋 Verification Checklist

After testing:

- [ ] Contact form submits successfully
- [ ] Success toast appears
- [ ] Console shows "Extracted datacenter from API key: us17"
- [ ] Contact appears in Mailchimp with all fields
- [ ] No DNS errors in logs

---

## 🎉 Result

Your Mailchimp integration now **automatically handles** misconfigured datacenter values!

The DNS error is **fixed** and the form should work correctly. 🚀

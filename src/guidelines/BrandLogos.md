# Brand Logos Guide

## Overview

The `BrandLogo` component provides a centralized, consistent way to display partner brand logos throughout the Can-nX website.

## Component Location

**File:** `/components/BrandLogo.tsx`

## Features

✅ **Centralized Management** - All brand logos defined in one place  
✅ **Multiple Variants** - Full, icon, and text-only display modes  
✅ **Flexible Sizing** - sm, md, lg, xl sizes  
✅ **Background Control** - Optional brand colors  
✅ **Fallback Support** - Graceful handling of missing logos  
✅ **TypeScript** - Full type safety

## Usage

### Basic Import

```tsx
import { BrandLogo } from '../components/BrandLogo';
```

### Display Modes

#### 1. Full Logo (Default)
```tsx
<BrandLogo brandId="2n" />
```
- Shows logo with brand background color
- Default size: medium (h-12)
- Includes padding and shadow

#### 2. Icon Variant
```tsx
<BrandLogo brandId="sonos" variant="icon" />
```
- Circular logo display
- Perfect for badges and compact spaces
- Smaller footprint

#### 3. Text Variant
```tsx
<BrandLogo brandId="knx" variant="text" />
```
- Brand name only
- No logo image
- Uses brand colors for text

### Size Options

```tsx
<BrandLogo brandId="hikvision" size="sm" />   // h-8 (32px)
<BrandLogo brandId="hikvision" size="md" />   // h-12 (48px) - default
<BrandLogo brandId="hikvision" size="lg" />   // h-16 (64px)
<BrandLogo brandId="hikvision" size="xl" />   // h-20 (80px)
```

### Background Control

```tsx
// With background (default)
<BrandLogo brandId="doorbird" showBackground={true} />

// Without background (transparent)
<BrandLogo brandId="doorbird" showBackground={false} />
```

### Custom Styling

```tsx
<BrandLogo 
  brandId="poolcop" 
  className="hover:scale-110 transition-transform"
/>
```

## Available Brand IDs

### Current Integrations

| Brand ID | Brand Name | Background Color |
|----------|-----------|------------------|
| `2n` | 2N | White |
| `doorbird` | DoorBird | White |
| `poolcop` | PoolCop | Cyan |
| `klereo` | Klereo | Teal |
| `airzone` | Airzone | Sky Blue |
| `sonos` | Sonos | Black |
| `crestron` | Crestron | Indigo |
| `hikvision` | Hikvision | Red |
| `nuki` | Nuki | Amber |
| `shelly` | Shelly | Lime |
| `gude` | Gude | Slate |
| `lektrico` | Lektrico | Emerald |
| `modbus` | Modbus | Orange |
| `abb-terraac` | ABB Terra AC | Red |
| `evlink-pro` | Evlink Pro | Green |
| `pushover` | Pushover | Orange |
| `homekit` | Apple HomeKit | Black |
| `knx` | KNX | Green |

## Adding New Brands

### Step 1: Add to BRAND_LOGOS constant

```tsx
// In /components/BrandLogo.tsx
export const BRAND_LOGOS: Record<string, BrandLogoData> = {
  // ... existing brands
  'newbrand': {
    name: 'New Brand',
    logoUrl: 'https://images.unsplash.com/photo-...',
    backgroundColor: '#3b82f6', // Brand color
    textColor: '#FFFFFF'
  }
};
```

### Step 2: Use in your component

```tsx
<BrandLogo brandId="newbrand" />
```

## Common Use Cases

### 1. Hero Section - Large Logo

```tsx
<div className="flex items-center gap-4">
  <BrandLogo brandId="2n" size="xl" />
  <div>
    <h1>Intégration 2N</h1>
    <p>Professional access control</p>
  </div>
</div>
```

### 2. Feature Cards - Icon Badges

```tsx
<Card>
  <BrandLogo brandId="sonos" variant="icon" size="sm" />
  <h3>Sonos Integration</h3>
  <p>Multi-room audio control</p>
</Card>
```

### 3. Partner Logos Grid

```tsx
<div className="grid grid-cols-4 gap-4">
  {['2n', 'doorbird', 'sonos', 'hikvision'].map(brandId => (
    <BrandLogo 
      key={brandId} 
      brandId={brandId} 
      size="md"
      showBackground={false}
    />
  ))}
</div>
```

### 4. Breadcrumb with Logo

```tsx
<Breadcrumb
  items={[
    { label: 'Accueil', href: '#home' },
    { label: 'Intégrations', href: '#integrations' },
    { 
      label: (
        <div className="flex items-center gap-2">
          <BrandLogo brandId="2n" variant="icon" size="sm" />
          <span>2N</span>
        </div>
      )
    }
  ]}
/>
```

### 5. Footer Partner Section

```tsx
<div className="border-t pt-8">
  <h3 className="text-sm text-gray-600 mb-4">Nos partenaires</h3>
  <div className="flex flex-wrap gap-6">
    {['knx', 'sonos', '2n', 'doorbird', 'hikvision'].map(brandId => (
      <BrandLogo 
        key={brandId}
        brandId={brandId}
        size="sm"
        showBackground={false}
        className="opacity-70 hover:opacity-100 transition-opacity"
      />
    ))}
  </div>
</div>
```

### 6. Compatible Products Badge

```tsx
<Badge variant="outline" className="gap-2">
  <BrandLogo brandId="poolcop" variant="icon" size="sm" />
  Compatible PoolCop
</Badge>
```

## Integration with Existing Pages

### Update BrandIntegrations.tsx

Replace placeholder images with actual brand logos:

```tsx
// Before
<div className="relative h-48 overflow-hidden">
  <ImageWithFallback src={integration.image} ... />
</div>

// After
<div className="relative h-48 overflow-hidden flex items-center justify-center">
  <BrandLogo 
    brandId={integration.brandId} 
    size="xl" 
    showBackground={true}
  />
</div>
```

### Update Integration Pages

Add logo to hero sections:

```tsx
// In TwoNPage.tsx hero
<div className="flex items-center gap-4 mb-6">
  <BrandLogo brandId="2n" size="lg" />
  <Badge className="bg-blue-600">
    <Video className="w-4 h-4 mr-2" />
    Intercom Vidéo
  </Badge>
</div>
```

## Best Practices

### ✅ DO

- Use centralized BrandLogo component for consistency
- Match variant to context (icon for compact, full for prominent)
- Choose appropriate size for the space
- Use showBackground={false} for transparent backgrounds
- Keep logos up-to-date with brand guidelines
- Test logo visibility on different backgrounds

### ❌ DON'T

- Don't hardcode logo URLs in multiple places
- Don't stretch or distort logos
- Don't use low-quality logo images
- Don't forget alt text (handled automatically)
- Don't use inconsistent sizes across similar contexts
- Don't display logos on clashing backgrounds

## Accessibility

### Alt Text
Automatically generated from brand name:
```tsx
alt={brand.name} // e.g., "2N", "Sonos"
```

### Contrast
- White backgrounds: Use dark logo variants
- Dark backgrounds: Use light logo variants or showBackground={true}
- Always test visibility

## Responsive Design

### Mobile Considerations

```tsx
// Responsive sizing
<BrandLogo 
  brandId="2n" 
  size="sm"
  className="sm:h-12 md:h-16" 
/>

// Stack on mobile, row on desktop
<div className="flex flex-col sm:flex-row items-center gap-4">
  <BrandLogo brandId="2n" />
  <div>Content...</div>
</div>
```

## Performance

### Image Loading
- Uses `ImageWithFallback` component
- Automatic fallback for failed loads
- Lazy loading supported
- Optimized image sources from Unsplash

### Caching
- Brand data loaded once
- Images cached by browser
- Minimal re-renders with React keys

## Future Enhancements

### Planned Features
1. ⏳ SVG logo support (better scaling)
2. ⏳ Dark mode variants
3. ⏳ Logo animation on hover
4. ⏳ Link wrapper option
5. ⏳ Lazy loading optimization
6. ⏳ Official brand logos (replace placeholders)

### Migration Path
When official logos become available:

```tsx
// Update only the logoUrl in BRAND_LOGOS
'2n': {
  name: '2N',
  logoUrl: '/assets/logos/2n-official.svg', // ← Update here
  backgroundColor: '#FFFFFF',
  textColor: '#1a1a1a'
}
// All usages automatically update
```

## Testing Checklist

When adding/updating brand logos:

- [ ] Logo displays at all sizes (sm, md, lg, xl)
- [ ] Logo works in all variants (full, icon, text)
- [ ] Background colors match brand guidelines
- [ ] Logo is visible on light backgrounds
- [ ] Logo is visible on dark backgrounds (if applicable)
- [ ] Text colors have sufficient contrast
- [ ] Logo scales properly on mobile
- [ ] Image loads successfully
- [ ] Fallback displays if image fails
- [ ] Alt text is descriptive

## Examples in Production

### Homepage
```tsx
// Partner logos section
<section className="py-16">
  <h2>Nos intégrations</h2>
  <div className="grid grid-cols-6 gap-8">
    {['2n', 'doorbird', 'sonos', 'hikvision', 'knx', 'homekit'].map(brand => (
      <BrandLogo key={brand} brandId={brand} showBackground={false} />
    ))}
  </div>
</section>
```

### Integration Page
```tsx
// Page hero
<div className="flex items-center gap-6 mb-8">
  <BrandLogo brandId="sonos" size="xl" />
  <div>
    <h1>Intégration Sonos</h1>
    <p>Audio multiroom intelligent</p>
  </div>
</div>
```

### Product Page
```tsx
// Compatible integrations
<div className="border rounded-lg p-4">
  <h3 className="mb-4">Intégrations compatibles</h3>
  <div className="flex flex-wrap gap-3">
    {compatibleBrands.map(brandId => (
      <BrandLogo 
        key={brandId}
        brandId={brandId}
        variant="icon"
        size="sm"
      />
    ))}
  </div>
</div>
```

## Support

For questions about brand logos:
- Check this guide first
- Review `/components/BrandLogo.tsx` source
- See implementation examples in integration pages
- Contact development team for new brand additions

---

**Last Updated:** November 2024  
**Maintained By:** Development Team  
**Status:** ✅ Production Ready

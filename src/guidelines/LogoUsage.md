# Can-nX Logo Usage Guide

## Logo Asset

**Logo File:** `figma:asset/348a1b6c3d5d7ac002eb03f6562c9a4b5d60b371.png`

The official Can-nX logo features:
- Green rounded rectangle on the left with "can" text
- Black angular "nX" text on the right
- Professional and modern design
- Optimized for web usage

## Logo Component

A reusable `Logo` component has been created for consistency across the website.

### Location
`/components/Logo.tsx`

### Usage

```tsx
import { Logo } from './Logo';

// Default usage (h-12 w-auto)
<Logo />

// Custom size
<Logo className="h-16 w-auto" />

// With explicit width/height
<Logo width="200" height="50" />
```

### Props

```typescript
interface LogoProps {
  className?: string;  // Tailwind classes for styling
  width?: string;      // Explicit width (optional)
  height?: string;     // Explicit height (optional)
}
```

## Current Implementation

### ✅ Logo Placement

The Can-nX logo has been implemented in the following locations:

#### 1. **Header Component** (`/components/Header.tsx`)
- **Location:** Top-left corner of the header
- **Size:** `h-12 w-auto` (48px height, auto width)
- **Purpose:** Main site navigation branding
- **Behavior:** 
  - Clickable, links to `#home`
  - Sticky header, always visible when scrolling
  - Responsive on mobile
- **Implementation:**
```tsx
<a href="#home" className="flex items-center">
  <Logo className="h-12 w-auto" />
</a>
```

#### 2. **Footer Component** (`/components/Footer.tsx`)
- **Location:** Company info section (first column)
- **Size:** `h-12 w-auto mb-6` (48px height, 24px bottom margin)
- **Purpose:** Footer branding and company identification
- **Behavior:** Static, non-clickable
- **Implementation:**
```tsx
<Logo className="h-12 w-auto mb-6" />
```

## Logo Specifications

### Recommended Sizes

| Context | Size Class | Actual Size | Use Case |
|---------|-----------|-------------|----------|
| Header | `h-12 w-auto` | 48px height | Desktop/Mobile navigation |
| Footer | `h-12 w-auto` | 48px height | Footer branding |
| Large Hero | `h-16 w-auto` | 64px height | Hero sections (optional) |
| Small Icon | `h-8 w-auto` | 32px height | Compact spaces |
| Extra Large | `h-20 w-auto` | 80px height | Special sections (optional) |

### Color Variants

The Can-nX logo includes:
- **Green** (#0CB14B) - Primary brand color
- **Magenta/Pink** (#cd2653) - Secondary brand color  
- **Black** - Text color for "nX"

These colors are also used throughout the site in gradients:
```css
from-[#0CB14B] to-[#cd2653]
```

## Best Practices

### ✅ DO

- Use the `Logo` component for consistency
- Maintain aspect ratio (use `w-auto` with height)
- Ensure adequate spacing around the logo
- Use on light backgrounds (logo has dark elements)
- Link the logo to home page (`#home`) in navigation contexts
- Keep the logo left-aligned in the header

### ❌ DON'T

- Don't distort or stretch the logo
- Don't change logo colors (it's a fixed asset)
- Don't use on dark backgrounds without testing visibility
- Don't make it too small (minimum h-8)
- Don't add filters or effects to the logo
- Don't use text placeholders instead of the actual logo

## Accessibility

### Alt Text
Always use `alt="Can-nX"` for screen readers:
```tsx
<img src={logo} alt="Can-nX" className="h-12 w-auto" />
```

The `Logo` component automatically includes this.

### Contrast
The logo has good contrast on:
- ✅ White backgrounds
- ✅ Light gray backgrounds (bg-gray-50, bg-gray-100)
- ⚠️ Medium backgrounds (test visibility)
- ❌ Dark backgrounds (not recommended without adjustments)

## Integration Points

### Where the Logo Should Appear

**Current (Implemented):**
1. ✅ Header - Top navigation
2. ✅ Footer - Company section

**Optional/Future Considerations:**
3. Loading screens
4. 404/Error pages
5. Print/PDF exports
6. Email templates
7. Social media sharing images (og:image)
8. Favicons (requires separate asset)
9. Mobile app icons (requires separate asset)

### Where the Logo Should NOT Appear

- Inside hero section titles (use text branding instead)
- On every product card (use product-specific imagery)
- Repeating watermarks
- Background patterns
- Inline with body text

## File Management

### Source Asset
```tsx
import logo from 'figma:asset/348a1b6c3d5d7ac002eb03f6562c9a4b5d60b371.png';
```

This is a Figma asset that's imported directly. The asset is:
- Automatically optimized by the build system
- Cached for performance
- Responsive (scales well at different sizes)

### Logo Component Reusability

The `Logo` component centralizes logo usage:

**Advantages:**
- ✅ Single source of truth
- ✅ Easy to update logo site-wide
- ✅ Consistent sizing and styling
- ✅ Built-in accessibility (alt text)
- ✅ TypeScript type safety

**When to use direct import vs component:**
- **Use `<Logo />`:** 99% of cases (recommended)
- **Use direct import:** Only for special cases requiring custom image handling

## Responsive Behavior

### Mobile
```tsx
// Header logo on mobile
<Logo className="h-10 w-auto sm:h-12" />
```

On very small screens (< 640px), consider reducing logo height slightly:
- Desktop: `h-12` (48px)
- Mobile: `h-10` (40px)

### Tablet/Desktop
Standard size `h-12` works well across all larger viewports.

## Brand Consistency

### Related Brand Elements

The Can-nX brand includes these visual elements beyond the logo:

1. **Color Palette:**
   - Green: `#0CB14B`
   - Magenta: `#cd2653`
   - Gradients: `from-[#0CB14B] to-[#cd2653]`

2. **Typography:**
   - See `/styles/globals.css` for font definitions
   - Logo uses custom brand typography

3. **Iconography:**
   - Lucide React icons throughout the site
   - Product-specific icons (Cloud, Droplets, etc.)

### Brand Voice
When the logo appears, ensure surrounding content maintains:
- Professional B2B tone
- Technical but accessible language
- Focus on innovation and integration
- KNX and IoT expertise

## Testing Checklist

When implementing the logo in a new location:

- [ ] Logo displays correctly at intended size
- [ ] Logo maintains aspect ratio (not distorted)
- [ ] Logo is visible on background color
- [ ] Logo loads quickly (no flash of missing image)
- [ ] Logo has proper alt text for accessibility
- [ ] Logo is clickable if in navigation context
- [ ] Logo scales properly on mobile devices
- [ ] Logo doesn't overflow container
- [ ] Logo has adequate spacing (margin/padding)
- [ ] Logo looks professional in context

## Version History

### Current Implementation (November 2024)
- ✅ Created `/components/Logo.tsx` component
- ✅ Updated `/components/Header.tsx` to use logo
- ✅ Updated `/components/Footer.tsx` to use logo
- ✅ Replaced gradient placeholder with actual logo asset

### Previous Implementation
- Used gradient background with text "Can-nX"
- Not actual brand asset
- Less professional appearance

## Quick Reference

### Import Logo Component
```tsx
import { Logo } from './Logo';
```

### Use in JSX
```tsx
// Standard
<Logo />

// Custom size
<Logo className="h-16 w-auto" />

// In a link
<a href="#home">
  <Logo className="h-12 w-auto" />
</a>
```

### Import Direct Asset (if needed)
```tsx
import logo from 'figma:asset/348a1b6c3d5d7ac002eb03f6562c9a4b5d60b371.png';

<img src={logo} alt="Can-nX" className="h-12 w-auto" />
```

## Support

For questions about logo usage:
- Check this guide first
- Review `/components/Logo.tsx` implementation
- See live examples in Header and Footer
- Consult brand guidelines (if available from Can-nX team)

---

**Last Updated:** November 2024  
**Maintained By:** Development Team  
**Status:** ✅ Production Ready

# Can-nX Brand Integration Pages

## Overview

Created professional integration pages for major brands that connect with Can-nX products, similar to the 2N integration page structure.

## Created Files

### 1. Core Component
**`/components/BrandIntegration.tsx`**
- Reusable component for all brand integration pages
- Consistent structure across all integrations
- Sections: Hero, Integration Steps, Features, Architecture, FAQ, CTA

### 2. Integration Pages

#### **`/pages/integration/TwoNPage.tsx`**
- **Brand:** 2N (Intercom & Access Control)
- **Compatible Products:** Kloud'nX, Mod'nX, Speak'nX
- **Key Features:**
  - API HTTP control (switch & logging)
  - Real-time event monitoring
  - Complete door control (open, lock, unlock)
  - 20+ event types (code entry, motion, RFID, biometric, etc.)

#### **`/pages/integration/DoorbirdPage.tsx`**
- **Brand:** DoorBird (Video Intercom)
- **Compatible Products:** Kloud'nX, Speak'nX, Infini KNX, Mod'nX
- **Key Features:**
  - Relay control (door, light, etc.)
  - Event reception (doorbell, motion detection)
  - Integration with Speak'nX for audio notifications
  - Video streaming & image capture
  - Advanced KNX scenarios

#### **`/pages/integration/PoolcopPage.tsx`**
- **Brand:** PoolCop & Klereo (Pool Automation)
- **Compatible Products:** Pool'nX, Kloud'nX, Emergy'nX
- **Key Features:**
  - Complete pool monitoring (temp, pH, chlorine)
  - Full KNX control (filtration, heating, dosing)
  - Smart automation (weather-based, energy optimization)
  - Modbus RTU communication
  - Energy optimization with Emergy'nX

#### **`/pages/integration/ModbusPage.tsx`**
- **Brand:** Modbus TCP/RTU (Industrial Protocol)
- **Compatible Products:** Kloud'nX, Pool'nX, Emergy'nX
- **Key Features:**
  - Support for Modbus TCP (32 devices) and RTU (247 addresses)
  - Energy meters, solar inverters, weather stations, PLCs
  - Integration with Emergy'nX for energy optimization
  - Real-time supervision & data logging
  - Wide device compatibility

#### **`/pages/integration/SonosPage.tsx`**
- **Brand:** Sonos (Multiroom Audio)
- **Compatible Products:** Kloud'nX, Infini KNX, Speak'nX
- **Key Features:**
  - Full KNX control (play, volume, source, grouping)
  - Multi-zone audio management
  - Smart scenarios (wake-up, ambiance, cinema)
  - Text-to-speech announcements
  - Integration with lighting & presence

### 3. Display Component
**`/components/BrandIntegrations.tsx`**
- Visual grid showing all available integrations
- Can be added to homepage or dedicated integrations page
- Includes category badges, feature highlights, and direct links

## Routing

All integration pages are routed in `/App.tsx`:

- `#integration-2n` → 2N page
- `#integration-doorbird` → DoorBird page
- `#integration-poolcop` → PoolCop/Klereo page
- `#integration-modbus` → Modbus page
- `#integration-sonos` → Sonos page

## Page Structure

Each integration page includes:

1. **Breadcrumb Navigation** - Shows path (Intégrations > Brand)
2. **Hero Section** - Brand logo, title, subtitle, product image
3. **Integration Steps** - 5-step guide with numbered cards
4. **Key Features** - 3-4 feature sections with bullet points
5. **Architecture Diagram** - Visual system overview (optional)
6. **Call-to-Action** - Documentation & shop links
7. **FAQ Section** - 4-5 common questions with accordion
8. **Compatible Products** - List of Can-nX products

## How to Add New Integration

```tsx
// 1. Create new page file
import { BrandIntegration } from '../../components/BrandIntegration';

export function NewBrandPage() {
  const integrationSteps = [
    {
      title: "Step title",
      description: "Step description..."
    },
    // ... more steps
  ];

  const features = [
    {
      title: "Feature title",
      description: "Feature description",
      items: ["Item 1", "Item 2", ...]
    },
    // ... more features
  ];

  const faqs = [
    {
      question: "Question?",
      answer: "Answer..."
    },
    // ... more FAQs
  ];

  return (
    <BrandIntegration
      brandName="Brand Name"
      heroTitle="L'intégration Can'nX - Brand"
      heroSubtitle="Description..."
      productImage="https://..."
      integrationSteps={integrationSteps}
      features={features}
      faqs={faqs}
      compatibleProducts={["Kloud'nX", ...]}
    />
  );
}

// 2. Add import in App.tsx
import { NewBrandPage } from './pages/integration/NewBrandPage';

// 3. Add route in App.tsx
if (currentPage === 'integration-newbrand') {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <NewBrandPage />
      </main>
      <Footer />
    </div>
  );
}

// 4. Add to BrandIntegrations.tsx display component
{
  id: 'integration-newbrand',
  name: 'Brand Name',
  category: 'Category',
  description: 'Short description',
  image: 'image-url',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  color: 'from-color-600 to-color-700'
}
```

## Benefits of This Implementation

### ✅ Consistency
- All integration pages follow the same professional structure
- Unified design language across all brands
- Easy to maintain and update

### ✅ SEO Optimized
- Proper breadcrumb navigation
- Structured content with headings
- FAQ sections for rich snippets
- Clear call-to-actions

### ✅ User Experience
- Clear step-by-step integration process
- Comprehensive feature lists
- FAQ addresses common concerns
- Related products suggestions

### ✅ Professional Presentation
- Matches world-class KNX company standards
- Smooth animations and transitions
- Responsive design (mobile, tablet, desktop)
- Clean, modern aesthetic

### ✅ Flexibility
- Reusable BrandIntegration component
- Easy to add new brands
- Customizable content per brand
- Optional sections (architecture diagram, brand logo)

## Content Strategy

### For Each Brand:
1. **Clear Value Proposition** - Why integrate this brand with Can-nX?
2. **Technical Details** - How does the integration work technically?
3. **Practical Examples** - Real-world use cases and scenarios
4. **Professional Focus** - Target B2B audience (integrators, installers)
5. **Complete Documentation** - Links to detailed docs and shop

### FAQ Best Practices:
- Address common technical questions
- Explain compatibility clearly
- Provide practical implementation examples
- Link to Can-nX products that work together
- Reassure about ease of use

## Next Steps

### Potential Additional Integrations:
1. **Philips Hue** - Lighting control
2. **Netatmo** - Weather & security
3. **MyHome SCS** - BTicino protocol
4. **MQTT** - IoT devices
5. **Home Assistant** - Open-source platform
6. **Alexa/Google Home** - Voice assistants
7. **KNX Secure** - Enhanced security
8. **BACnet** - Building automation
9. **EnOcean** - Wireless sensors
10. **DMX** - Lighting control

### To Display Integrations:
Add `<BrandIntegrations />` component to:
- Homepage (after Products section)
- Dedicated Integrations page
- Footer links
- Kloud'nX product page

## Usage Example

```tsx
// In your App.tsx or dedicated integrations page:
import { BrandIntegrations } from './components/BrandIntegrations';

<BrandIntegrations />

// This will display a beautiful grid of all available integrations
// Users can click on any integration to see the detailed page
```

## Maintenance

When updating integration content:
1. Edit the respective page file (`/pages/integration/BrandPage.tsx`)
2. Update integration steps, features, or FAQs as needed
3. Keep architecture diagrams current
4. Ensure links (documentation, shop) remain valid
5. Test routing after updates

All integration pages are fully responsive and follow the Can-nX design system established in the improvements documentation.

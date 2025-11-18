# Can-nX Website - Quick Links & Navigation Guide

## 📚 Quick Reference

### Main Pages
- **Home** : `#home` ou `/`
- **Contact** : `#contact` - 🆕 Nouvelle page contact dédiée
- **Blog** : `#blog`

### Products
- **Kloud'nX** : `#kloudnx`
- **Pool'nX** : `#poolnx`
- **Emergy'nX** : `#emergynx`
- **Infini KNX** : `#infinix`
  - Configurator : `#infinix-configurator`
- **Speak'nX** : `#speaknx`
- **Mod'nX** : `#modnx`

### Services & Licenses
- **Kloud'nX Subscriptions** : `#kloudnx-subscription`
- **Chart'nX** : `#chartnx`
- **Boss'nX** : `#bossnx`

### Brand Integrations (18 total)

#### Contrôle d'accès & Sécurité
- **2N** : `#integration-2n`
- **DoorBird** : `#integration-doorbird`
- **Hikvision** : `#integration-hikvision`
- **Nuki** : `#integration-nuki`

#### Climatisation
- **Airzone** : `#integration-airzone` (includes Aidoo)

#### Gestion de Piscine
- **PoolCop** : `#integration-poolcop`
- **Klereo** : `#integration-klereo`

#### Audio & Multimédia
- **Crestron** : `#integration-crestron`
- **Sonos** : `#integration-sonos`

#### Bornes de Recharge VE
- **ABB Terra AC** : `#integration-terraac`
- **Evlink Pro** : `#integration-evlinkpro`
- **Lektrico** : `#integration-lektrico`

#### IoT & Protocoles
- **KNX** : `#integration-knx`
- **HomeKit** : `#integration-homekit`
- **Pushover** : `#integration-pushover`
- **Shelly** : `#integration-shelly`
- **Modbus** : `#integration-modbus`
- **Gude** : `#integration-gude`

## 🔗 External Links

### Shopping & E-commerce
- **Can-nX Shop** : https://can-nx.shop

### Cloud & Platform
- **Can-nX Cloud** : https://can-nx.cloud/welcome

### Documentation & Support
- **Documentation** : https://doc.can-nx.com
- **YouTube Channel** : https://www.youtube.com/@cannx7140/videos

### Contact
- **Email** : contact@can-nx.com
- **Phone** : +33 6 49 53 67 19

## 📁 Important File Locations

### Components
- Header : `/components/Header.tsx`
- Footer : `/components/Footer.tsx`
- Contact Form : `/components/Contact.tsx`
- Products Grid : `/components/Products.tsx`
- Brand Logo System : `/components/BrandLogo.tsx`

### Pages
- Home : `/App.tsx` (default return)
- Contact Page : `/pages/ContactPage.tsx` 🆕
- Product Pages : `/pages/[ProductName]Page.tsx`
- Integration Pages : `/pages/integration/[BrandName]Page.tsx`

### Configuration
- SEO Config : `/config/seoConfig.ts`
- Mailchimp Config : `/config/mailchimpConfig.ts`

### Documentation
- Main Guidelines : `/guidelines/Guidelines.md`
- SEO Implementation : `/guidelines/SEO-Implementation.md`
- Contact Form Update : `/guidelines/ContactFormUpdate.md` 🆕
- Mailchimp Integration : `/guidelines/MailchimpIntegration.md`
- Brand Integrations : `/guidelines/AllBrandIntegrations.md`

### Public Files
- Sitemap : `/public/sitemap.xml`
- Robots : `/public/robots.txt`

## 🎨 Design System

### Colors
- **Primary Green** : `#0CB14B`
- **Secondary Pink** : `#cd2653`
- **Gradients** : 
  - CTA Button : `from-[#0CB14B] to-[#0CB14B]/90`
  - Hover : `from-[#0CB14B]/90 to-[#0CB14B]`
  - Shadow : `shadow-lg shadow-[#0CB14B]/30`

### Typography
- Headers use default typography from `/styles/globals.css`
- No font size/weight classes unless specifically requested

### Responsive Breakpoints
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

## 🚀 Development Commands

### Local Development
```bash
npm run dev
# or
yarn dev
```

### Build
```bash
npm run build
# or
yarn build
```

### Deploy (if using Vercel/Netlify)
```bash
git push origin main
```

## 📊 Statistics & Numbers

### Current Ecosystem
- **50+** marques partenaires
- **500+** produits compatibles
- **100%** testé

### Products
- **6** produits Can-nX
- **18** intégrations partenaires
- **2** licences logicielles (Chart'nX, Boss'nX)

## 🔄 Recent Updates (Nov 2025)

### ✅ Completed
- [x] Contact form extended to 10 fields
- [x] Contact page created (`/pages/ContactPage.tsx`)
- [x] Mailchimp integration implemented
- [x] SEO for contact page
- [x] Sitemap updated
- [x] All 18 brand logos integrated
- [x] Statistics updated (50+ brands)
- [x] Infini KNX configurator (Legrand support)

### 🔄 In Progress
- [ ] Mailchimp API configuration
- [ ] Supabase Edge Function deployment
- [ ] Multi-language support (FR/EN/DE)

### 📝 Planned
- [ ] Blog content creation
- [ ] Customer testimonials
- [ ] Case studies
- [ ] Video tutorials
- [ ] Live chat integration

## 🆘 Troubleshooting

### Common Issues

**Issue** : Contact form doesn't submit
- **Solution** : Check Mailchimp API credentials in `/components/Contact.tsx`

**Issue** : Images not loading
- **Solution** : Verify Figma asset imports or use `ImageWithFallback`

**Issue** : SEO not working
- **Solution** : Check `/config/seoConfig.ts` and verify page ID

**Issue** : Navigation not working
- **Solution** : Verify hash routing in `/App.tsx`

## 📞 Need Help?

- Check `/guidelines/` folder for detailed documentation
- Review component code in `/components/`
- Check configuration in `/config/`
- Contact: contact@can-nx.com

---

**Last Updated** : November 7, 2025
**Version** : 2.0.0

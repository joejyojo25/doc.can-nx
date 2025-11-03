# Can-nX Website - Quick Links Reference

## Product Pages

Navigate to product pages using these hash links:

- **Kloud'nX** - `#kloudnx` - KNX-IoT Cloud Router
- **Pool'nX** - `#poolnx` - Pool Automation Gateway
- **Emergy'nX** - `#emergynx` - Energy Optimization
- **Infini KNX** - `#infinix` - Rotary Control Button
- **Mod'nX** - `#modnx` - Compact Input Module
- **Speak'nX** - `#speaknx` - Audio Diffuser

## Integration Pages

Navigate to brand integration pages using these hash links:

- **2N** - `#integration-2n` - Intercom & Access Control
- **DoorBird** - `#integration-doorbird` - Video Intercom
- **PoolCop/Klereo** - `#integration-poolcop` - Pool Regulation
- **Modbus** - `#integration-modbus` - Industrial Protocol (TCP/RTU)
- **Sonos** - `#integration-sonos` - Multiroom Audio

## Special Pages

- **Blog** - `#blog` - News & Achievements
- **Improvements Demo** - `#improvements` - Website Enhancement Showcase

## How to Link

### From HTML/JSX:
```html
<a href="#kloudnx">Kloud'nX Product Page</a>
<a href="#integration-2n">2N Integration</a>
```

### From Menu/Navigation:
```tsx
<Link href="#integration-doorbird">DoorBird Integration</Link>
```

### Programmatic Navigation:
```javascript
window.location.hash = 'integration-sonos';
```

## Menu Structure Suggestion

### Main Navigation:
```
- Accueil (/)
- Produits
  ├─ Kloud'nX (#kloudnx)
  ├─ Pool'nX (#poolnx)
  ├─ Emergy'nX (#emergynx)
  ├─ Infini KNX (#infinix)
  ├─ Mod'nX (#modnx)
  └─ Speak'nX (#speaknx)
- Intégrations
  ├─ 2N (#integration-2n)
  ├─ DoorBird (#integration-doorbird)
  ├─ PoolCop/Klereo (#integration-poolcop)
  ├─ Modbus (#integration-modbus)
  └─ Sonos (#integration-sonos)
- Cloud (https://can-nx.cloud)
- Support
  ├─ Blog (#blog)
  ├─ Documentation (https://doc.can-nx.com)
  └─ Guide vidéo (YouTube)
- Boutique (https://can-nx.shop)
- Contact (#contact)
```

## Footer Links Suggestion

### Products Column:
- Kloud'nX
- Pool'nX
- Emergy'nX
- Infini KNX
- Mod'nX
- Speak'nX

### Integrations Column:
- 2N
- DoorBird
- PoolCop/Klereo
- Modbus
- Sonos
- [Voir toutes les intégrations]

### Support Column:
- Blog
- Documentation
- Vidéos YouTube
- FAQ
- Contact

### Company Column:
- À propos
- Blog/Actualités
- Mentions légales
- CGV

## Call-to-Action Examples

### Product Pages:
```tsx
<Button href="https://can-nx.shop">Acheter maintenant</Button>
<Button href="https://doc.can-nx.com">Documentation</Button>
```

### Integration Pages:
```tsx
<Button href="https://can-nx.shop">Acheter licence Link'nX</Button>
<Button href="https://doc.can-nx.com">Guide d'intégration</Button>
```

## Search/Filter Functionality

If implementing search, these keywords should find relevant pages:

### Product Keywords:
- "routeur knx" → Kloud'nX
- "piscine" → Pool'nX
- "énergie solaire" → Emergy'nX
- "bouton rotatif" → Infini KNX
- "module entrées" → Mod'nX
- "sonnette" → Speak'nX

### Integration Keywords:
- "portier vidéo" → DoorBird, 2N
- "interphone" → 2N, DoorBird
- "piscine poolcop" → PoolCop integration
- "modbus tcp" → Modbus integration
- "sonos knx" → Sonos integration
- "compteur énergie" → Modbus integration

## Related Pages Matrix

### Kloud'nX is related to:
- All integrations (central hub)
- Emergy'nX (energy management)
- All products (can connect to all)

### Pool'nX is related to:
- PoolCop/Klereo integration
- Emergy'nX (pool energy optimization)

### Speak'nX is related to:
- 2N integration (doorbell sounds)
- DoorBird integration (doorbell sounds)
- Sonos integration (audio notifications)

### Emergy'nX is related to:
- Kloud'nX (data collection)
- Modbus integration (energy meters)
- Pool'nX (pool energy optimization)

### Infini KNX is related to:
- Sonos integration (audio control)
- All products (KNX control)

### Mod'nX is related to:
- 2N integration (alarm inputs)
- DoorBird integration (REX buttons)

## Breadcrumb Paths

### Products:
```
Accueil > Produits > [Product Name]
```

### Integrations:
```
Accueil > Intégrations > [Brand Name]
```

### With Context:
```
Accueil > Produits > Kloud'nX > Intégrations > 2N
```

## Cross-Promotion Strategy

### On Kloud'nX Page, Show:
- "Découvrez nos intégrations" → Integration pages
- "Produits complémentaires" → Mod'nX, Speak'nX, Infini KNX

### On Integration Pages, Show:
- "Produits compatibles" → Related Can-nX products
- "Autres intégrations" → Other brand integrations

### On Pool'nX Page, Show:
- "Intégration PoolCop" → Direct link
- "Optimisation énergie" → Emergy'nX

## Analytics Tracking Suggestion

Track these key pages:
- `/` (home)
- `#kloudnx`, `#poolnx`, `#emergynx`, etc. (products)
- `#integration-*` (all integrations)
- `#blog` (blog/news)
- `#contact` (contact form)
- External: shop, documentation, cloud

Track conversions:
- Product page → Shop clicks
- Integration page → Documentation clicks
- Integration page → Shop clicks (license purchase)
- Contact form submissions

## Mobile Menu Optimization

### Priority Order (Top to Bottom):
1. Produits (expandable)
2. Intégrations (expandable)
3. Boutique
4. Documentation
5. Cloud
6. Contact

### Collapsed by Default:
- Produits submenu
- Intégrations submenu

### Always Visible:
- Shop button/link
- Contact
- Language selector

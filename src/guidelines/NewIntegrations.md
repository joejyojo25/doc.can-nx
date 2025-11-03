# Nouvelles Intégrations Ajoutées

Date: 3 novembre 2025

## Corrections Importantes

### Aidoo = Airzone
- **Note**: Aidoo est un produit d'Airzone (Aidoo Pro - contrôle IR universel)
- **Action**: Fusionné avec AirzonePage.tsx
- **Redirection**: `#integration-aidoo` redirige vers AirzonePage
- **Catégorie**: Climatisation

### Klereo
- **Type**: Gestion de piscine (pas audio)
- **Catégorie**: Gestion de Piscine (avec PoolCop)
- **Similaire à**: PoolCop (même groupe)

## Pages d'Intégration Créées

Les 5 nouvelles pages d'intégration suivantes ont été créées et liées au système de navigation :

### 1. ABB Terra AC - Borne de Recharge VE
- **Fichier**: `/pages/integration/TerraACPage.tsx`
- **URL**: `#integration-terraac`
- **Description**: Borne de recharge ABB avec gestion surplus solaire et délestage intelligent
- **Catégorie**: Bornes de Recharge VE
- **Fonctionnalités**: 22 kW AC, surplus solaire via Emergy'nX, délestage dynamique

### 2. Pushover - Notifications Push
- **Fichier**: `/pages/integration/PushoverPage.tsx`
- **URL**: `#integration-pushover`
- **Description**: Notifications push instantanées sur smartphone depuis installation KNX
- **Catégorie**: IoT & Protocoles
- **Fonctionnalités**: <1s latence, multi-plateformes (iOS/Android), priorités configurables

### 3. Apple HomeKit
- **Fichier**: `/pages/integration/HomeKitPage.tsx`
- **URL**: `#integration-homekit`
- **Description**: Contrôle KNX avec Siri et app Maison d'Apple
- **Catégorie**: IoT & Protocoles
- **Fonctionnalités**: Contrôle vocal Siri, intégration app Maison, chiffrement E2E

### 4. Protocole KNX
- **Fichier**: `/pages/integration/KNXPage.tsx`
- **URL**: `#integration-knx`
- **Description**: Standard mondial ISO/IEC pour l'automatisation des bâtiments
- **Catégorie**: IoT & Protocoles
- **Fonctionnalités**: 500+ fabricants, norme ISO, interopérabilité garantie

### 5. Schneider Electric Evlink Pro
- **Fichier**: `/pages/integration/EvlinkProPage.tsx`
- **URL**: `#integration-evlinkpro`
- **Description**: Solution professionnelle de recharge VE avec gestion multi-bornes
- **Catégorie**: Bornes de Recharge VE
- **Fonctionnalités**: Gestion flotte, OCPP 1.6, facturation intégrée

## Modifications Apportées

### Header.tsx
- ✅ Correction description Speak'nX : "Haut-parleur KNX" (au lieu de "Contrôle vocal intelligent")
- ✅ Features Speak'nX mises à jour : "Audio intégré, Sonorisation, Qualité audio"
- ✅ Nouvelle catégorie ajoutée : "Bornes de Recharge VE"
- ✅ Toutes les nouvelles intégrations ajoutées au menu déroulant
- ✅ Imports d'icônes ajoutés (Network, Bell)

### BrandIntegrations.tsx
- ✅ 6 nouvelles intégrations ajoutées à la liste
- ✅ Images Unsplash appropriées pour chaque intégration
- ✅ Descriptions et fonctionnalités clés définies

### App.tsx
- ✅ Imports des 6 nouvelles pages ajoutés
- ✅ Routes créées pour chaque nouvelle page d'intégration
- ✅ Navigation fonctionnelle avec hash-based routing

## Structure Menu Header

Le menu "Intégrations" est maintenant organisé en 6 catégories :

1. **Contrôle d'accès & Sécurité**
   - 2N, DoorBird, Hikvision, Nuki

2. **Climatisation**
   - Airzone (incluant Aidoo Pro)

3. **Gestion de Piscine** (nouvelle catégorie)
   - PoolCop
   - Klereo

4. **Audio & Multimédia**
   - Crestron, Sonos

5. **Bornes de Recharge VE** (nouvelle catégorie)
   - **ABB Terra AC** (nouveau)
   - **Evlink Pro** (nouveau)
   - Lektrico

6. **IoT & Protocoles**
   - **KNX** (nouveau)
   - **HomeKit** (nouveau)
   - **Pushover** (nouveau)
   - Shelly, Modbus TCP/RTU, Gude

## Total Intégrations

- **Avant**: 13 pages d'intégration
- **Après**: 18 pages d'intégration (19 avec redirection Aidoo → Airzone)
- **Nouvelles**: 5 pages réelles

Toutes les intégrations de l'image fournie sont maintenant incluses et fonctionnelles.

## Notes Techniques

- **Aidoo**: Redirige vers AirzonePage car Aidoo est un produit d'Airzone
- **Klereo**: Correctement catégorisé comme gestion de piscine (similaire à PoolCop)
- **Menu**: Réorganisé en 6 catégories pour une meilleure clarté

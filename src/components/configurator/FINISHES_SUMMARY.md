# 🎨 Classification des Finitions Meljac - Can-nX

## ✅ Mise à jour effectuée - 5 novembre 2025

Les finitions Meljac ont été complètement réorganisées selon le catalogue officiel.

---

## 📊 Vue d'ensemble

| Catégorie | Emoji | Nombre | Codes |
|-----------|-------|--------|-------|
| **Teintes chaudes** | 🟠 | 7 | CA, CB, CC, CD, CE, CF, D1 |
| **Teintes froides** | ⚪ | 7 | FA, FB, FC, FD, FE, FF, FH |
| **Teintes spéciales** | ⚫ | 15 | SV, SR, SU, SG, SH, SI, ST, SA, SB, SF, SS, SM, SP, SE, SQ |
| **TOTAL** | | **29** | |

---

## 🟠 Teintes Chaudes (7)

### Bronze (4)
- **CA** - Bronze Médaille Clair
- **CB** - Bronze Médaille Clair Vernis Mat  
- **CC** - Bronze Médaille Allemand
- **CD** - Bronze Médaille Foncé

### Laiton (3)
- **CE** - Champagne
- **CF** - Doré Patiné
- **D1** - Dorure 1 Brillant ⚠️ *Nous consulter*

---

## ⚪ Teintes Froides (7)

### Nickel (3)
- **FA** - Nickel Brossé
- **FB** - Nickel Brillant
- **FC** - Microbillé Nickel

### Chrome (2)
- **FD** - Chromé Mat
- **FE** - Chromé Vif

### Canon de Fusil (2)
- **FF** - Canon de Fusil Anthracite
- **FH** - Canon de Fusil Sablé

---

## ⚫ Teintes Spéciales (15)

### Bronze Spécial (1)
- **SV** - Black Stone Chelsea

### Laiton Spécial (2)
- **SR** - Laiton Vieilli Ciré
- **SU** - Antique Brass NA

### Cuivre (4) - TOUS SPÉCIAUX
- **SG** - Cuivre Patiné
- **SH** - Cuivre Vieilli Bouchonné
- **SI** - Cuivre Satiné
- **ST** - Cuivre Antique

### Nickel Spécial (2)
- **SA** - Nickel Noir Brillant
- **SB** - Nickel Noir Mat

### Chrome Spécial (2)
- **SF** - Microbillé Chromé
- **SS** - Étain Moyen

### Canon de Fusil Spécial (2)
- **SM** - Microbillé Canon de Fusil Anthracite
- **SP** - Canon de Fusil Beige

### Argent (1)
- **SE** - Argent Patiné

### Ébène (1)
- **SQ** - Ébène

---

## 🔄 Changements par rapport à l'ancienne classification

### ❌ Anciennes catégories (SUPPRIMÉES)
- Bronze (était 4 finitions)
- Laiton (était 5 finitions)
- Cuivre (était 4 finitions)
- Nickel (était 3 finitions)
- Chrome (était 4 finitions)
- Argent (était 5 finitions)

### ✅ Nouvelles catégories (OFFICIELLES)
- **Chaudes** - 7 finitions (Bronze + Laiton uniquement)
- **Froides** - 7 finitions (Nickel + Chrome + Canon de Fusil)
- **Spéciales** - 15 finitions (toutes les finitions avec code "S" + finitions patinées/texturées)

---

## 📝 Règles de classification

1. **Codes commençant par "C" ou "D"** → Chaudes (sauf cuivre qui commence par "S")
2. **Codes commençant par "F"** → Froides (sauf SF qui est spéciale)
3. **Codes commençant par "S"** → TOUTES Spéciales

---

## 🖼️ Images de référence

- **Teintes chaudes** : `finitionsChaudesImg` (Bronze et Laiton du catalogue)
- **Teintes froides** : `finitionsFroidesImg` (Nickel, Chrome, Canon de Fusil)
- **Teintes spéciales** : Pas d'image unique (trop de variété)

---

## 🔧 Fichiers mis à jour

✅ `/components/configurator/constants.ts`
✅ `/pages/InfiniKnxConfiguratorPage.tsx`
✅ `/components/configurator/shared/ConfigPreview.tsx`
✅ `/components/configurator/steps/Step6_Summary.tsx`
✅ `/components/configurator/steps/Step4_Finish.tsx` (déjà compatible)

---

## 💡 Interface utilisateur

- **Sélection de catégorie** : 3 choix avec emojis 🟠 ⚪ ⚫
- **Image de référence** : Affichée sous la sélection de catégorie (uniquement pour chaudes/froides)
- **Tooltips** : Au survol de chaque finition, affiche description FR/EN
- **Grille** : 2 colonnes pour l'affichage des finitions
- **Carré de couleur** : Aperçu visuel de chaque finition

---

*Classification basée sur le catalogue officiel Meljac*
*Mise à jour effectuée pour le configurateur Infini KNX - Can-nX*

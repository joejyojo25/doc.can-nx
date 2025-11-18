// Unified plate types (replaces old brand + boitier system)
export const PLATE_TYPES = {
  'eu': { 
    name: 'Standard EU',
    brand: 'standard',
    wPerGang: 86, 
    h: 86, 
    t: 3, 
    visserie: true,
    supportsGangs: true,
    supportsRotative: false,
    screwOrientation: 'horizontal' as const
  },
  'uk': { 
    name: 'Standard UK',
    brand: 'standard',
    wPerGang: 86, 
    h: 146, 
    t: 3, 
    visserie: true,
    supportsGangs: true,
    supportsRotative: false,
    screwOrientation: 'horizontal' as const
  },
  'us': { 
    name: 'Standard US',
    brand: 'standard',
    wPerGang: 72, 
    h: 115, 
    t: 3, 
    visserie: false,
    supportsGangs: true,
    supportsRotative: false,
    screwOrientation: 'horizontal' as const
  },
  'legrand-1m': {
    name: 'Legrand 1 Module',
    brand: 'legrand',
    w: 80,
    h: 80,
    t: 3,
    modules: 1,
    buttonsPerModule: 4,
    visserie: true,
    screwOrientation: 'horizontal' as const,
    supportsGangs: false,
    supportsRotative: true
  },
  'legrand-2m': {
    name: 'Legrand 2 Modules',
    brand: 'legrand',
    w: 80,
    h: 154,
    t: 3,
    modules: 2,
    buttonsPerModule: 4,
    visserie: true,
    screwOrientation: 'vertical' as const,
    supportsGangs: false,
    supportsRotative: true
  }
} as const;

// Legacy BOITIERS for backward compatibility - maps to Standard types
export const BOITIERS = {
  EU: { wPerGang: 86, h: 86, t: 3, visserie: true },
  UK: { wPerGang: 86, h: 146, t: 3, visserie: true },
  US: { wPerGang: 72, h: 115, t: 3, visserie: false }
};

export const MELJAC_FINISHES = {
  chaudes: [
    // Bronze (Warm)
    { code: "CA", name: "Bronze Médaille Clair", nameEn: "Golden Bronze", color: "#B87333", description: "Bronze doré avec léger brossage. Vernis satiné." },
    { code: "CB", name: "Bronze Médaille Clair Vernis Mat", nameEn: "Golden Bronze Matte", color: "#A0693F", description: "Bronze doré avec léger brossage. Vernis mat." },
    { code: "CC", name: "Bronze Médaille Allemand", nameEn: "German Bronze", color: "#CD7F32", description: "Brossage linéaire. Bronze moyen." },
    { code: "CD", name: "Bronze Médaille Foncé", nameEn: "Dark Bronze", color: "#3D2817", description: "Teinte sombre, marron foncé." },
    // Laiton / Brass (Warm)
    { code: "CE", name: "Champagne", nameEn: "Champagne", color: "#F7E7CE", description: "Laiton brossé. Vernis mat." },
    { code: "CF", name: "Doré Patiné", nameEn: "Aged Gold", color: "#D4AF37", description: "Teinte jaune or. Léger brossage et vernis satiné." },
    { code: "D1", name: "Dorure 1 Brillant", nameEn: "Bright Gold 1", color: "#DAA520", description: "Surface miroir." }
  ],
  froides: [
    // Nickel (Cool)
    { code: "FA", name: "Nickel Brossé", nameEn: "Brushed Nickel", color: "#8C8C8C", description: "Aspect inox." },
    { code: "FB", name: "Nickel Brillant", nameEn: "Bright Nickel", color: "#A8A8A8", description: "Effet miroir, ton légèrement plus chaud que le chrome." },
    { code: "FC", name: "Microbillé Nickel", nameEn: "Sandblasted Nickel", color: "#959595", description: "Surface sablée, vernis mat." },
    // Chrome - Étain (Cool)
    { code: "FD", name: "Chromé Mat", nameEn: "Matte Chrome", color: "#C0C0C0", description: "Brossage linéaire. Teinte gris bleuté." },
    { code: "FE", name: "Chromé Vif", nameEn: "Bright Chrome", color: "#E8E8E8", description: "Miroir aux reflets bleutés." },
    // Canon de Fusil (Cool)
    { code: "FF", name: "Canon de Fusil Anthracite", nameEn: "Gunmetal Anthracite", color: "#5C5C5C", description: "Brossage. Ton gris foncé/brun." },
    { code: "FH", name: "Canon de Fusil Sablé", nameEn: "Sandblasted Gunmetal", color: "#666666", description: "Aspect granité. Ton gris foncé." }
  ],
  speciales: [
    // Bronze spécial
    { code: "SV", name: "Black Stone Chelsea", nameEn: "Black Stone Chelsea", color: "#1C1C1C", description: "Ton bronze foncé/noir. Surface mate. Liseré laiton." },
    // Laiton spécial
    { code: "SR", name: "Laiton Vieilli Ciré", nameEn: "Waxed Aged Brass", color: "#B8860B", description: "Laiton brillant clair. Nuage de tons irisés bruns, évolutif par oxydation." },
    { code: "SU", name: "Antique Brass NA", nameEn: "Antique Brass NA", color: "#CD9575", description: "Laiton frotté. Alternance de zones sombres et claires." },
    // Cuivre (tous spéciaux)
    { code: "SG", name: "Cuivre Patiné", nameEn: "Patinated Copper", color: "#B87333", description: "Brossage et patine gris-noir." },
    { code: "SH", name: "Cuivre Vieilli Bouchonné", nameEn: "Aged Rubbed Copper", color: "#C98566", description: "Brossage aléatoire." },
    { code: "SI", name: "Cuivre Satiné", nameEn: "Satin Copper", color: "#D2691E", description: "Brossage. Vernis satiné." },
    { code: "ST", name: "Cuivre Antique", nameEn: "Antique Copper", color: "#CC6633", description: "Nuage de tons clairs et sombres." },
    // Nickel spécial
    { code: "SA", name: "Nickel Noir Brillant", nameEn: "Bright Black Nickel", color: "#4A4A4A", description: "Effet miroir." },
    { code: "SB", name: "Nickel Noir Mat", nameEn: "Matte Black Nickel", color: "#3C3C3C", description: "Surface noire mate." },
    // Chrome spécial
    { code: "SF", name: "Microbillé Chromé", nameEn: "Sandblasted Chrome", color: "#D3D3D3", description: "Surface sablée. Teinte gris bleuté. Vernis mat." },
    { code: "SS", name: "Étain Moyen", nameEn: "Medium Pewter", color: "#A6A6A6", description: "Dégradé de tons gris. Surface mate." },
    // Canon de Fusil spécial
    { code: "SM", name: "Microbillé Canon de Fusil Anthracite", nameEn: "Sandblasted Gunmetal Anthracite", color: "#666666", description: "Surface sablée. Ton gris foncé/brun." },
    { code: "SP", name: "Canon de Fusil Beige", nameEn: "Beige Gunmetal", color: "#9F9F9F", description: "Léger brossage. Ton gris/noir. Vernis satiné." },
    // Argent
    { code: "SE", name: "Argent Patiné", nameEn: "Patinated Silver", color: "#B8B8B8", description: "Gris argenté. Patine gris-noir." },
    // Ébène
    { code: "SQ", name: "Ébène", nameEn: "Ebony", color: "#2B2B2B", description: "Brossage linéaire marqué. Teinte noire mate." }
  ]
};

export const MAX_MODULES = 4;
export const MAX_CHARS = 10;

export type PlateType = keyof typeof PLATE_TYPES;

export const FINISH_CATEGORIES = [
  { id: 'chaudes', name: 'Teintes chaudes', icon: '🟠', description: 'Bronze, Laiton (7 finitions)', count: 7 },
  { id: 'froides', name: 'Teintes froides', icon: '⚪', description: 'Nickel, Chrome, Canon de Fusil (7 finitions)', count: 7 },
  { id: 'speciales', name: 'Teintes spéciales', icon: '⚫', description: 'Finitions patinées, vieillis, noires (15 finitions)', count: 15 }
];

/**
 * Utilitaires de diagnostic SEO
 * À utiliser en développement pour vérifier la configuration SEO
 */

export interface SEODiagnosticResult {
  passed: boolean;
  message: string;
  severity: 'error' | 'warning' | 'info';
}

/**
 * Vérifie la configuration SEO d'une page
 */
export function diagnoseSEO(): SEODiagnosticResult[] {
  const results: SEODiagnosticResult[] = [];

  // Vérifier le titre
  const title = document.title;
  if (!title || title === '') {
    results.push({
      passed: false,
      message: 'Aucun titre de page trouvé',
      severity: 'error',
    });
  } else if (title.length > 60) {
    results.push({
      passed: false,
      message: `Titre trop long (${title.length} caractères). Max recommandé: 60`,
      severity: 'warning',
    });
  } else {
    results.push({
      passed: true,
      message: `Titre OK (${title.length} caractères)`,
      severity: 'info',
    });
  }

  // Vérifier la meta description
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
  if (!description) {
    results.push({
      passed: false,
      message: 'Aucune meta description trouvée',
      severity: 'error',
    });
  } else if (description.length > 160) {
    results.push({
      passed: false,
      message: `Meta description trop longue (${description.length} caractères). Max recommandé: 160`,
      severity: 'warning',
    });
  } else if (description.length < 50) {
    results.push({
      passed: false,
      message: `Meta description trop courte (${description.length} caractères). Min recommandé: 50`,
      severity: 'warning',
    });
  } else {
    results.push({
      passed: true,
      message: `Meta description OK (${description.length} caractères)`,
      severity: 'info',
    });
  }

  // Vérifier canonical
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
  if (!canonical) {
    results.push({
      passed: false,
      message: 'Aucune URL canonique trouvée',
      severity: 'warning',
    });
  } else if (!canonical.startsWith('http')) {
    results.push({
      passed: false,
      message: 'URL canonique doit être absolue (commencer par http/https)',
      severity: 'error',
    });
  } else {
    results.push({
      passed: true,
      message: 'URL canonique OK',
      severity: 'info',
    });
  }

  // Vérifier Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
  const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
  const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');

  if (!ogTitle || !ogDescription || !ogImage) {
    results.push({
      passed: false,
      message: 'Open Graph incomplet (titre, description ou image manquant)',
      severity: 'warning',
    });
  } else {
    results.push({
      passed: true,
      message: 'Open Graph complet',
      severity: 'info',
    });
  }

  // Vérifier Twitter Card
  const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content');
  if (!twitterCard) {
    results.push({
      passed: false,
      message: 'Twitter Card manquante',
      severity: 'warning',
    });
  } else {
    results.push({
      passed: true,
      message: 'Twitter Card présente',
      severity: 'info',
    });
  }

  // Vérifier Schema.org
  const schemaScript = document.querySelector('script[type="application/ld+json"]');
  if (!schemaScript) {
    results.push({
      passed: false,
      message: 'Aucune donnée structurée Schema.org trouvée',
      severity: 'warning',
    });
  } else {
    try {
      JSON.parse(schemaScript.textContent || '');
      results.push({
        passed: true,
        message: 'Données structurées Schema.org présentes et valides',
        severity: 'info',
      });
    } catch (e) {
      results.push({
        passed: false,
        message: 'Données structurées Schema.org invalides (erreur JSON)',
        severity: 'error',
      });
    }
  }

  // Vérifier hreflang
  const hreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
  if (hreflangs.length === 0) {
    results.push({
      passed: false,
      message: 'Aucune balise hreflang trouvée (multilingue)',
      severity: 'info',
    });
  } else {
    results.push({
      passed: true,
      message: `${hreflangs.length} balises hreflang trouvées`,
      severity: 'info',
    });
  }

  // Vérifier H1
  const h1s = document.querySelectorAll('h1');
  if (h1s.length === 0) {
    results.push({
      passed: false,
      message: 'Aucun titre H1 trouvé',
      severity: 'error',
    });
  } else if (h1s.length > 1) {
    results.push({
      passed: false,
      message: `${h1s.length} titres H1 trouvés. Recommandé: 1 seul`,
      severity: 'warning',
    });
  } else {
    results.push({
      passed: true,
      message: 'Un seul titre H1 trouvé',
      severity: 'info',
    });
  }

  // Vérifier images sans alt
  const imagesWithoutAlt = Array.from(document.querySelectorAll('img')).filter(
    (img) => !img.getAttribute('alt')
  );
  if (imagesWithoutAlt.length > 0) {
    results.push({
      passed: false,
      message: `${imagesWithoutAlt.length} image(s) sans attribut alt`,
      severity: 'warning',
    });
  } else {
    results.push({
      passed: true,
      message: 'Toutes les images ont un attribut alt',
      severity: 'info',
    });
  }

  // Vérifier lang
  const htmlLang = document.documentElement.lang;
  if (!htmlLang) {
    results.push({
      passed: false,
      message: 'Attribut lang manquant sur <html>',
      severity: 'warning',
    });
  } else {
    results.push({
      passed: true,
      message: `Langue déclarée: ${htmlLang}`,
      severity: 'info',
    });
  }

  return results;
}

/**
 * Affiche le diagnostic SEO dans la console
 * Utiliser en développement uniquement
 */
export function logSEODiagnostic() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const results = diagnoseSEO();
  
  console.group('🔍 Diagnostic SEO');
  
  const errors = results.filter((r) => r.severity === 'error');
  const warnings = results.filter((r) => r.severity === 'warning');
  const infos = results.filter((r) => r.severity === 'info');

  if (errors.length > 0) {
    console.group(`❌ Erreurs (${errors.length})`);
    errors.forEach((r) => console.error(r.message));
    console.groupEnd();
  }

  if (warnings.length > 0) {
    console.group(`⚠️ Avertissements (${warnings.length})`);
    warnings.forEach((r) => console.warn(r.message));
    console.groupEnd();
  }

  if (infos.length > 0) {
    console.group(`ℹ️ Informations (${infos.length})`);
    infos.forEach((r) => console.info(r.message));
    console.groupEnd();
  }

  const score = Math.round(
    ((results.length - errors.length - warnings.length * 0.5) / results.length) * 100
  );
  
  console.log(`\n📊 Score SEO: ${score}/100`);
  
  if (score >= 90) {
    console.log('✅ Excellent !');
  } else if (score >= 70) {
    console.log('👍 Bon, mais peut être amélioré');
  } else if (score >= 50) {
    console.log('⚠️ Attention, plusieurs problèmes à corriger');
  } else {
    console.log('❌ Configuration SEO insuffisante');
  }
  
  console.groupEnd();
}

/**
 * Retourne un résumé du diagnostic
 */
export function getSEOScore(): { score: number; status: string; issues: number } {
  const results = diagnoseSEO();
  const errors = results.filter((r) => r.severity === 'error').length;
  const warnings = results.filter((r) => r.severity === 'warning').length;
  
  const score = Math.round(
    ((results.length - errors - warnings * 0.5) / results.length) * 100
  );

  let status = 'poor';
  if (score >= 90) status = 'excellent';
  else if (score >= 70) status = 'good';
  else if (score >= 50) status = 'fair';

  return {
    score,
    status,
    issues: errors + warnings,
  };
}

/**
 * Vérifie si une URL est valide
 */
export function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Vérifie si une image OG a les bonnes dimensions
 */
export function validateOGImageSize(imageUrl: string): Promise<{ valid: boolean; width: number; height: number }> {
  return new Promise((resolve) => {
    const img = new Image();
    
    img.onload = () => {
      resolve({
        valid: img.width === 1200 && img.height === 630,
        width: img.width,
        height: img.height,
      });
    };
    
    img.onerror = () => {
      resolve({
        valid: false,
        width: 0,
        height: 0,
      });
    };
    
    img.src = imageUrl;
  });
}

/**
 * Extrait toutes les métadonnées SEO de la page
 */
export function extractSEOMetadata() {
  const metadata: Record<string, any> = {};

  // Title
  metadata.title = document.title;

  // Meta tags
  const metaTags = document.querySelectorAll('meta');
  metaTags.forEach((meta) => {
    const name = meta.getAttribute('name') || meta.getAttribute('property');
    const content = meta.getAttribute('content');
    if (name && content) {
      metadata[name] = content;
    }
  });

  // Links
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
  if (canonical) metadata.canonical = canonical;

  const hreflangs: Record<string, string> = {};
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => {
    const lang = link.getAttribute('hreflang');
    const href = link.getAttribute('href');
    if (lang && href) {
      hreflangs[lang] = href;
    }
  });
  if (Object.keys(hreflangs).length > 0) {
    metadata.hreflang = hreflangs;
  }

  // Schema.org
  const schemaScript = document.querySelector('script[type="application/ld+json"]');
  if (schemaScript) {
    try {
      metadata.schema = JSON.parse(schemaScript.textContent || '');
    } catch (e) {
      metadata.schema = 'Invalid JSON';
    }
  }

  return metadata;
}

/**
 * Copie les métadonnées SEO dans le presse-papier (pour debug)
 */
export function copySEOMetadata() {
  const metadata = extractSEOMetadata();
  const formatted = JSON.stringify(metadata, null, 2);
  
  navigator.clipboard.writeText(formatted).then(() => {
    console.log('✅ Métadonnées SEO copiées dans le presse-papier');
  }).catch(() => {
    console.error('❌ Erreur lors de la copie');
  });
}

// Expose dans window pour utilisation en console (dev only)
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  (window as any).seoDebug = {
    diagnose: diagnoseSEO,
    log: logSEODiagnostic,
    score: getSEOScore,
    extract: extractSEOMetadata,
    copy: copySEOMetadata,
  };
  
  console.log('💡 SEO Debug disponible: window.seoDebug');
  console.log('   - seoDebug.log()      → Affiche le diagnostic complet');
  console.log('   - seoDebug.score()    → Retourne le score SEO');
  console.log('   - seoDebug.extract()  → Extrait toutes les métadonnées');
  console.log('   - seoDebug.copy()     → Copie les métadonnées');
}

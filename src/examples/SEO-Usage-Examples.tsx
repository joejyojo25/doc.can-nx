/**
 * Exemples d'utilisation du système SEO Can-nX
 * 
 * Ce fichier contient des exemples d'implémentation du SEO
 * pour différents types de pages et cas d'usage.
 */

import { SEOHead } from '../components/SEOHead';
import { getSEOConfig } from '../config/seoConfig';
import { usePageSEO } from '../hooks/usePageSEO';

// ============================================
// EXEMPLE 1: Utilisation basique sur une page
// ============================================

export function ExemplePageBasique() {
  return (
    <div>
      {/* Utilisation simple avec configuration prédéfinie */}
      <SEOHead {...getSEOConfig('kloudnx')} />
      
      <main>
        <h1>Ma page Kloud'nX</h1>
        {/* Contenu de la page */}
      </main>
    </div>
  );
}

// ============================================
// EXEMPLE 2: Personnalisation avec override
// ============================================

export function ExemplePagePersonnalisee() {
  const baseSEO = getSEOConfig('poolnx');
  
  return (
    <div>
      {/* Override de certaines propriétés */}
      <SEOHead 
        {...baseSEO}
        title="Pool'nX - Édition Spéciale Été 2025"
        description="Découvrez la nouvelle édition spéciale de Pool'nX avec fonctionnalités avancées"
      />
      
      <main>
        <h1>Pool'nX - Édition Spéciale</h1>
      </main>
    </div>
  );
}

// ============================================
// EXEMPLE 3: Utilisation avec le hook
// ============================================

export function ExempleAvecHook() {
  // Le hook retourne la configuration SEO complète
  const seoConfig = usePageSEO('emergynx', {
    // Personnalisation optionnelle
    keywords: ['HEMS', 'énergie solaire', 'batterie'],
  });
  
  return (
    <div>
      <SEOHead {...seoConfig} />
      
      <main>
        <h1>Emergy'nX</h1>
      </main>
    </div>
  );
}

// ============================================
// EXEMPLE 4: Page dynamique (article de blog)
// ============================================

export function ExempleArticleBlog({ article }: { article: any }) {
  const blogSEO = {
    title: article.title,
    description: article.excerpt,
    canonical: `https://can-nx.com/blog/${article.slug}`,
    ogType: 'article' as const,
    ogImage: article.featuredImage,
    keywords: article.tags,
    publishedTime: article.publishedDate,
    modifiedTime: article.updatedDate,
    // Schema pour article de blog
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt,
      image: article.featuredImage,
      datePublished: article.publishedDate,
      dateModified: article.updatedDate,
      author: {
        '@type': 'Person',
        name: article.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Can-nX',
        logo: {
          '@type': 'ImageObject',
          url: 'https://can-nx.com/logo.png',
        },
      },
    },
  };
  
  return (
    <div>
      <SEOHead {...blogSEO} />
      
      <article>
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </div>
  );
}

// ============================================
// EXEMPLE 5: Page avec FAQ Schema
// ============================================

export function ExemplePageAvecFAQ() {
  const faqItems = [
    {
      question: "Comment installer Kloud'nX ?",
      answer: "L'installation de Kloud'nX se fait en 3 étapes simples..."
    },
    {
      question: "Quel est le prix de Kloud'nX ?",
      answer: "Kloud'nX est disponible à partir de..."
    },
  ];

  const seoWithFAQ = {
    ...getSEOConfig('kloudnx'),
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        // Product Schema
        {
          '@type': 'Product',
          name: 'Kloud\'nX',
          // ... autres propriétés produit
        },
        // FAQ Schema
        {
          '@type': 'FAQPage',
          mainEntity: faqItems.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        },
      ],
    },
  };

  return (
    <div>
      <SEOHead {...seoWithFAQ} />
      
      <main>
        <h1>Kloud'nX</h1>
        <section>
          <h2>Questions Fréquentes</h2>
          {faqItems.map((item, index) => (
            <div key={index}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

// ============================================
// EXEMPLE 6: Page avec Reviews Schema
// ============================================

export function ExemplePageAvecAvis() {
  const productReviews = [
    { rating: 5, author: 'Jean Dupont', comment: 'Excellent produit!' },
    { rating: 4, author: 'Marie Martin', comment: 'Très bon rapport qualité/prix' },
  ];

  const avgRating = productReviews.reduce((acc, r) => acc + r.rating, 0) / productReviews.length;

  const seoWithReviews = {
    ...getSEOConfig('infinix'),
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Infini KNX',
      description: 'Bouton rotatif KNX personnalisable',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: avgRating.toString(),
        reviewCount: productReviews.length.toString(),
      },
      review: productReviews.map(review => ({
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating.toString(),
        },
        author: {
          '@type': 'Person',
          name: review.author,
        },
        reviewBody: review.comment,
      })),
    },
  };

  return (
    <div>
      <SEOHead {...seoWithReviews} />
      
      <main>
        <h1>Infini KNX</h1>
        <section>
          <h2>Avis clients</h2>
          {productReviews.map((review, index) => (
            <div key={index}>
              <strong>{review.author}</strong> - {review.rating}/5
              <p>{review.comment}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

// ============================================
// EXEMPLE 7: Page multilingue
// ============================================

export function ExemplePageMultilingue({ lang = 'fr' }: { lang: 'fr' | 'en' | 'de' }) {
  const translations = {
    fr: {
      title: 'Speak\'nX - Diffuseur Audio KNX Intelligent',
      description: 'Diffuseur sonore et visuel avec interface KNX-TP, Bluetooth et WiFi',
    },
    en: {
      title: 'Speak\'nX - Smart KNX Audio Speaker',
      description: 'Audio and visual speaker with KNX-TP, Bluetooth and WiFi interface',
    },
    de: {
      title: 'Speak\'nX - Intelligenter KNX-Audiolautsprecher',
      description: 'Audio- und visueller Lautsprecher mit KNX-TP, Bluetooth und WiFi-Schnittstelle',
    },
  };

  const seoMultilang = {
    ...getSEOConfig('speaknx'),
    title: translations[lang].title,
    description: translations[lang].description,
    lang: lang,
    canonical: `https://can-nx.com/${lang === 'fr' ? '' : lang + '/'}#speaknx`,
  };

  return (
    <div>
      <SEOHead {...seoMultilang} />
      
      <main>
        <h1>{translations[lang].title}</h1>
      </main>
    </div>
  );
}

// ============================================
// EXEMPLE 8: Page noindex (page privée/test)
// ============================================

export function ExemplePageNoIndex() {
  const seoNoIndex = {
    title: 'Page de Test - Can-nX',
    description: 'Page de test interne',
    noindex: true, // Cette page ne sera pas indexée
  };

  return (
    <div>
      <SEOHead {...seoNoIndex} />
      
      <main>
        <h1>Page de Test</h1>
        <p>Cette page n'apparaîtra pas dans les résultats de recherche</p>
      </main>
    </div>
  );
}

// ============================================
// EXEMPLE 9: Page avec vidéo Schema
// ============================================

export function ExemplePageAvecVideo() {
  const seoWithVideo = {
    ...getSEOConfig('kloudnx'),
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        // Product
        {
          '@type': 'Product',
          name: 'Kloud\'nX',
          // ... propriétés produit
        },
        // Video
        {
          '@type': 'VideoObject',
          name: 'Installation de Kloud\'nX',
          description: 'Guide vidéo complet pour installer Kloud\'nX',
          thumbnailUrl: 'https://can-nx.com/videos/kloudnx-install-thumb.jpg',
          uploadDate: '2025-01-04',
          contentUrl: 'https://www.youtube.com/watch?v=example',
          embedUrl: 'https://www.youtube.com/embed/example',
        },
      ],
    },
  };

  return (
    <div>
      <SEOHead {...seoWithVideo} />
      
      <main>
        <h1>Kloud'nX - Guide d'installation</h1>
        <iframe src="https://www.youtube.com/embed/example" />
      </main>
    </div>
  );
}

// ============================================
// EXEMPLE 10: Page de comparaison de produits
// ============================================

export function ExemplePageComparaison() {
  const seoComparaison = {
    title: 'Comparaison Kloud\'nX vs Boss\'nX - Can-nX',
    description: 'Comparez les fonctionnalités de Kloud\'nX et Boss\'nX pour choisir la solution adaptée à vos besoins',
    canonical: 'https://can-nx.com/comparaison/kloudnx-vs-bossnx',
    keywords: ['comparaison KNX', 'Kloud\'nX vs Boss\'nX', 'choix routeur KNX'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Comparaison Kloud\'nX vs Boss\'nX',
      description: 'Tableau comparatif détaillé',
      mainEntity: {
        '@type': 'Table',
        about: 'Comparaison de produits KNX',
      },
    },
  };

  return (
    <div>
      <SEOHead {...seoComparaison} />
      
      <main>
        <h1>Kloud'nX vs Boss'nX</h1>
        <table>
          {/* Tableau de comparaison */}
        </table>
      </main>
    </div>
  );
}

/**
 * NOTES IMPORTANTES:
 * 
 * 1. Toujours inclure SEOHead au début du composant
 * 2. Utiliser getSEOConfig() pour les pages avec config prédéfinie
 * 3. Personnaliser avec spread operator {...config, customProp: value}
 * 4. Les schémas JSON-LD doivent être valides (tester sur schema.org)
 * 5. Les images OG doivent être 1200x630px pour meilleur rendu
 * 6. Canonical URLs doivent être absolues (pas de chemins relatifs)
 * 7. Les mots-clés doivent être pertinents et non sur-optimisés
 * 8. Tester avec Google Rich Results Test après implémentation
 */

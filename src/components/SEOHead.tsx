import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'product' | 'article';
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  lang?: 'fr' | 'en' | 'de';
  noindex?: boolean;
  schema?: object;
}

const DEFAULT_OG_IMAGE = 'https://can-nx.com/og-image.jpg'; // À remplacer par votre vraie image
const SITE_NAME = 'Can-nX';
const SITE_URL = 'https://can-nx.com';
const TWITTER_HANDLE = '@cannx'; // À remplacer par votre vrai handle

export function SEOHead({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt,
  twitterCard = 'summary_large_image',
  keywords = [],
  author = 'Can-nX',
  publishedTime,
  modifiedTime,
  lang = 'fr',
  noindex = false,
  schema,
}: SEOProps) {
  useEffect(() => {
    // Set document title
    // Don't add site name if title already contains it
    const finalTitle = title.includes('Can-nX') ? title : `${title} | ${SITE_NAME}`;
    document.title = finalTitle;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.content = content;
    };

    // Set link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!element) {
        element = document.createElement('link');
        element.rel = rel;
        document.head.appendChild(element);
      }
      
      element.href = href;
    };

    // Basic meta tags
    setMetaTag('description', description);
    if (keywords.length > 0) {
      setMetaTag('keywords', keywords.join(', '));
    }
    setMetaTag('author', author);
    
    // Language
    document.documentElement.lang = lang;

    // Robots
    if (noindex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      setMetaTag('robots', 'index, follow');
    }

    // Canonical URL
    if (canonical) {
      setLinkTag('canonical', canonical);
    }

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonical || window.location.href, true);
    setMetaTag('og:image', ogImage, true);
    if (ogImageAlt) {
      setMetaTag('og:image:alt', ogImageAlt, true);
    }
    setMetaTag('og:site_name', SITE_NAME, true);
    setMetaTag('og:locale', lang === 'fr' ? 'fr_FR' : lang === 'de' ? 'de_DE' : 'en_US', true);

    // Article specific tags
    if (ogType === 'article') {
      if (publishedTime) {
        setMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        setMetaTag('article:modified_time', modifiedTime, true);
      }
      setMetaTag('article:author', author, true);
    }

    // Product specific tags
    if (ogType === 'product') {
      setMetaTag('product:brand', SITE_NAME, true);
      setMetaTag('product:availability', 'in stock', true);
      setMetaTag('product:condition', 'new', true);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:site', TWITTER_HANDLE);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
    if (ogImageAlt) {
      setMetaTag('twitter:image:alt', ogImageAlt);
    }

    // Schema.org structured data
    if (schema) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      
      scriptElement.textContent = JSON.stringify(schema);
    }

    // Alternate language versions (hreflang)
    const languages = [
      { lang: 'fr', url: canonical || window.location.href },
      { lang: 'en', url: (canonical || window.location.href).replace('/fr/', '/en/') },
      { lang: 'de', url: (canonical || window.location.href).replace('/fr/', '/de/') },
    ];

    languages.forEach(({ lang: langCode, url }) => {
      let element = document.querySelector(`link[rel="alternate"][hreflang="${langCode}"]`) as HTMLLinkElement;
      
      if (!element) {
        element = document.createElement('link');
        element.rel = 'alternate';
        element.hreflang = langCode;
        document.head.appendChild(element);
      }
      
      element.href = url;
    });

  }, [title, description, canonical, ogType, ogImage, ogImageAlt, twitterCard, keywords, author, publishedTime, modifiedTime, lang, noindex, schema]);

  return null;
}

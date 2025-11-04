import { useEffect } from 'react';
import { getSEOConfig } from '../config/seoConfig';

/**
 * Hook to easily set SEO for a page
 * @param pageId - The page identifier matching seoConfig keys
 * @param customSEO - Optional custom SEO properties to override defaults
 */
export function usePageSEO(pageId: string, customSEO?: Partial<ReturnType<typeof getSEOConfig>>) {
  const seoConfig = getSEOConfig(pageId);
  
  const finalSEO = {
    ...seoConfig,
    ...customSEO,
  };

  // This is handled by the SEOHead component, but we export the config
  return finalSEO;
}

import { Search } from 'lucide-react';

/**
 * Badge SEO à afficher dans le footer (optionnel)
 * Indique aux visiteurs que le site est optimisé pour les moteurs de recherche
 */
export function SEOBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full text-xs text-green-700">
      <Search className="w-3.5 h-3.5" />
      <span>SEO Optimisé</span>
    </div>
  );
}

/**
 * Version avec tooltip explicatif
 */
export function SEOBadgeWithTooltip() {
  return (
    <div className="group relative inline-block">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full text-xs text-green-700 cursor-help">
        <Search className="w-3.5 h-3.5" />
        <span>SEO Optimisé</span>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50">
        <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
          Site optimisé pour les moteurs de recherche
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      </div>
    </div>
  );
}

/**
 * Version minimaliste (juste icône)
 */
export function SEOBadgeMini() {
  return (
    <div 
      className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full text-green-600"
      title="Site SEO optimisé"
    >
      <Search className="w-4 h-4" />
    </div>
  );
}

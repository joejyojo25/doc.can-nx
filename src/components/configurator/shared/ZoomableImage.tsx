import { useState } from 'react';
import { ZoomIn, Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../../ui/dialog';

interface ZoomableImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  hintText?: string;
}

/**
 * ZoomableImage - Composant d'image cliquable avec zoom modal
 * 
 * Affiche une image qui peut être cliquée pour s'agrandir dans une modal plein écran.
 * Inclut des indicateurs visuels au survol pour guider l'utilisateur.
 * 
 * @param src - URL de l'image source
 * @param alt - Texte alternatif pour l'accessibilité
 * @param caption - Texte affiché en overlay en bas de l'image (optionnel)
 * @param className - Classes CSS additionnelles pour le conteneur (optionnel)
 * @param hintText - Texte d'indication de zoom (par défaut: "cliquer pour agrandir")
 * 
 * @example
 * ```tsx
 * <ZoomableImage
 *   src={catalogueImage}
 *   alt="Catalogue Meljac Finitions Chaudes"
 *   caption="Catalogue Meljac - Teintes chaudes"
 * />
 * ```
 */
export function ZoomableImage({ 
  src, 
  alt, 
  caption, 
  className = '',
  hintText = 'cliquer pour agrandir'
}: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div 
        className={`relative rounded-lg overflow-hidden border border-gray-200 cursor-pointer group transition-all hover:border-indigo-400 hover:shadow-lg ${className}`}
        onClick={() => setIsZoomed(true)}
      >
        <img 
          src={src}
          alt={alt}
          className="w-full h-auto transition-transform group-hover:scale-105"
        />
        
        {/* Hover overlay with zoom icon */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
            <Maximize2 className="w-6 h-6 text-indigo-600" />
          </div>
        </div>
        
        {/* Caption with zoom hint */}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
            <p className="text-white text-xs text-center flex items-center justify-center gap-2">
              <ZoomIn className="w-3 h-3" />
              {caption}
              <span className="text-xs opacity-75">({hintText})</span>
            </p>
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[95vh] overflow-hidden p-2">
          <DialogHeader className="px-4 pt-4 pb-2">
            <DialogTitle className="flex items-center gap-2">
              <ZoomIn className="w-5 h-5 text-indigo-600" />
              {alt}
            </DialogTitle>
            <DialogDescription>
              Image agrandie. Cliquez en dehors de l'image ou appuyez sur Échap pour fermer.
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-auto max-h-[calc(95vh-80px)] p-4">
            <img 
              src={src} 
              alt={alt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

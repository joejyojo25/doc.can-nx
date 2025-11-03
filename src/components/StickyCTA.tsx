import { motion, useScroll, useTransform } from 'motion/react';
import { ShoppingCart, FileText, MessageSquare, Download } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

interface StickyProps {
  productName: string;
  shopUrl: string;
  docsUrl?: string;
}

export function StickyCTA({ productName, shopUrl, docsUrl }: StickyProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl z-40 lg:hidden"
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-sm truncate">{productName}</p>
          </div>
          <div className="flex gap-2">
            {docsUrl && (
              <Button
                size="sm"
                variant="outline"
                className="border-gray-300"
                asChild
              >
                <a href={docsUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4" />
                </a>
              </Button>
            )}
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#0CB14B] to-[#0a9940] hover:from-[#0a9940] hover:to-[#087d33] text-white"
              asChild
            >
              <a href={shopUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Acheter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

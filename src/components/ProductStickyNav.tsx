import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

interface ProductStickyNavProps {
  items: NavItem[];
}

export function ProductStickyNav({ items }: ProductStickyNavProps) {
  const [activeSection, setActiveSection] = useState<string>(items[0]?.id || '');
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);

      // Determine active section
      const sections = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, [items]);

  const scrollNav = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      className="hidden lg:block fixed bottom-0 left-0 right-0 z-30 pb-safe"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="relative flex items-center gap-2">
            {/* Left Arrow */}
            <button
              onClick={() => scrollNav('left')}
              className={`flex-shrink-0 p-2 rounded-lg transition-all duration-200 ${
                canScrollLeft
                  ? 'bg-white hover:bg-gray-100 text-gray-700 shadow-md cursor-pointer'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
              disabled={!canScrollLeft}
              aria-label="Défiler vers la gauche"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrollable Navigation */}
            <div 
              ref={scrollContainerRef}
              className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-1"
            >
              {items.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-[#0CB14B] to-[#0a9940] text-white shadow-lg'
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                      activeSection === item.id ? 'bg-white' : 'bg-gray-400'
                    }`}
                  />
                  <span className="text-sm">{item.label}</span>
                  {activeSection === item.id && (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollNav('right')}
              className={`flex-shrink-0 p-2 rounded-lg transition-all duration-200 ${
                canScrollRight
                  ? 'bg-white hover:bg-gray-100 text-gray-700 shadow-md cursor-pointer'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
              disabled={!canScrollRight}
              aria-label="Défiler vers la droite"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

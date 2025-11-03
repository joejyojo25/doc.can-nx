import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'motion/react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200"
      aria-label="Breadcrumb"
    >
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <a
              href="/"
              className="text-gray-500 hover:text-gray-700 transition-colors flex items-center"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Accueil</span>
            </a>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-900">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  );
}

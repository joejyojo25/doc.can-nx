import { motion } from 'motion/react';
import { FileText, Download, Book, Video, Code, FileCode } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface DocItem {
  icon: any;
  title: string;
  description: string;
  type: string;
  size?: string;
  url: string;
}

const documentationItems: DocItem[] = [
  {
    icon: FileText,
    title: 'Manuel d\'installation',
    description: 'Guide complet d\'installation et de configuration',
    type: 'PDF',
    size: '2.4 MB',
    url: 'https://doc.can-nx.com/',
  },
  {
    icon: Book,
    title: 'Guide de démarrage rapide',
    description: 'Mise en route en 5 étapes simples',
    type: 'PDF',
    size: '800 KB',
    url: 'https://doc.can-nx.com/',
  },
  {
    icon: FileCode,
    title: 'Fichier ETS',
    description: 'Base de données produit pour ETS5/6',
    type: 'KNXPROD',
    size: '1.2 MB',
    url: 'https://doc.can-nx.com/',
  },
  {
    icon: Code,
    title: 'Documentation API',
    description: 'Référence API pour développeurs',
    type: 'HTML',
    url: 'https://doc.can-nx.com/',
  },
  {
    icon: Video,
    title: 'Tutoriels vidéo',
    description: 'Collection de vidéos de formation',
    type: 'Playlist',
    url: 'https://doc.can-nx.com/',
  },
  {
    icon: FileText,
    title: 'Fiche technique',
    description: 'Spécifications techniques détaillées',
    type: 'PDF',
    size: '500 KB',
    url: 'https://doc.can-nx.com/',
  },
];

export function TechnicalDocumentation() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {documentationItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0CB14B]/10 to-[#cd2653]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-[#0CB14B]" />
              </div>
              <Badge variant="outline" className="text-xs">
                {item.type}
              </Badge>
            </div>

            <h4 className="mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            
            {item.size && (
              <p className="text-xs text-gray-500 mb-4">Taille : {item.size}</p>
            )}

            <Button
              variant="outline"
              size="sm"
              className="w-full group-hover:border-[#0CB14B] group-hover:text-[#0CB14B] transition-colors"
              asChild
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Télécharger
              </a>
            </Button>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

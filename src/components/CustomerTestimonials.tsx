import { motion } from 'motion/react';
import { Star, Quote, Play } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  videoUrl?: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Jean Dupont',
    role: 'Intégrateur KNX',
    company: 'Smart Home Solutions',
    content: "Kloud'nX a révolutionné notre façon de travailler. L'accès distant sécurisé nous permet d'économiser des heures de déplacement et d'offrir un meilleur service à nos clients.",
    rating: 5,
    initials: 'JD',
  },
  {
    name: 'Marie Laurent',
    role: 'Directrice Technique',
    company: 'Hôtel Le Grand',
    content: "L'intégration de notre système de piscine avec la GTB de l'hôtel grâce à Pool'nX a été un jeu d'enfant. Le monitoring en temps réel nous donne une tranquillité d'esprit totale.",
    rating: 5,
    initials: 'ML',
  },
  {
    name: 'Thomas Bernard',
    role: 'Électricien certifié KNX',
    company: 'Électro Pro',
    content: "Les produits Can-nX sont fiables, bien conçus et le support technique est excellent. Je les recommande systématiquement à mes clients pour leurs projets domotiques.",
    rating: 5,
    initials: 'TB',
  },
];

export function CustomerTestimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6 h-full relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            {/* Quote decoration */}
            <Quote className="absolute top-4 right-4 w-16 h-16 text-[#0CB14B]/10 group-hover:text-[#0CB14B]/20 transition-colors" />

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 bg-gradient-to-br from-[#0CB14B] to-[#0a9940]">
                  <AvatarFallback className="text-white">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>

              {/* Video button if available */}
              {testimonial.videoUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full"
                  asChild
                >
                  <a href={testimonial.videoUrl} target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4 mr-2" />
                    Voir la vidéo
                  </a>
                </Button>
              )}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

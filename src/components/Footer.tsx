import { Linkedin, Youtube } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl mb-4">Voulez vous recevoir la newsletter Can'nX ?</h3>
            <form className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="E-mail"
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button
                type="submit"
                className="bg-[#0CB14B] hover:bg-[#0CB14B]/90 text-white flex-shrink-0"
              >
                S'abonner
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 mb-6">
              Fabricant KNX certifié - Solutions innovantes pour l'intégration IoT et KNX dans le bâtiment intelligent.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/can-nx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#0CB14B] rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@cannx7140/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#0CB14B] rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg mb-4">Produits</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#kloudnx" className="hover:text-[#0CB14B] transition-colors">
                  Kloud'nX
                </a>
              </li>
              <li>
                <a href="#poolnx" className="hover:text-[#0CB14B] transition-colors">
                  Pool'nX
                </a>
              </li>
              <li>
                <a href="#emergynx" className="hover:text-[#0CB14B] transition-colors">
                  Emergy'nX
                </a>
              </li>
              <li>
                <a href="#chartnx" className="hover:text-[#0CB14B] transition-colors">
                  Chart'nX
                </a>
              </li>
              <li>
                <a href="#speaknx" className="hover:text-[#0CB14B] transition-colors">
                  Speak'nX
                </a>
              </li>
              <li>
                <a href="#modnx" className="hover:text-[#0CB14B] transition-colors">
                  Mod'nX
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg mb-4">Support & Légal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://doc.can-nx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0CB14B] transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@cannx7140/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0CB14B] transition-colors"
                >
                  Guide vidéo
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0CB14B] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#legal" className="hover:text-[#0CB14B] transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#0CB14B] transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:text-[#0CB14B] transition-colors">
                  Gestion des cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} Can-nX - All Rights Are Reserved
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Fabricant KNX Certifié</span>
              <div className="flex items-center gap-2">
                <span className="text-xl">🇫🇷</span>
                <span className="text-xl">🇬🇧</span>
                <span className="text-xl">🇩🇪</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

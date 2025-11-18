import { motion } from 'motion/react';
import { Contact } from '../components/Contact';
import { MapPin, Phone, Mail, Clock, MessageSquare, Globe, Users } from 'lucide-react';
import { getSEOConfig } from '../config/seoConfig';
import { SEOHead } from '../components/SEOHead';

export function ContactPage() {
  return (
    <>
      <SEOHead {...getSEOConfig('contact')} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0CB14B] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cd2653] rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-full mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl sm:text-6xl mb-6">
                Contactez-nous
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
                sur nos solutions d'automatisation KNX et IoT.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Phone */}
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0CB14B] to-[#0CB14B]/80 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">Téléphone</h3>
                <a 
                  href="tel:+33649536719" 
                  className="text-gray-600 hover:text-[#0CB14B] transition-colors"
                >
                  +33 6 49 53 67 19
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#cd2653] to-[#cd2653]/80 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">Email</h3>
                <a 
                  href="mailto:contact@can-nx.com" 
                  className="text-gray-600 hover:text-[#0CB14B] transition-colors"
                >
                  contact@can-nx.com
                </a>
              </motion.div>

              {/* Address */}
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">Adresse</h3>
                <p className="text-gray-600">
                  France & International
                </p>
              </motion.div>

              {/* Hours */}
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#cd2653] to-[#0CB14B] rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">Horaires</h3>
                <p className="text-gray-600">
                  Lun-Ven: 9h-18h
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl mb-4">
                Comment pouvons-nous vous aider ?
              </h2>
              <p className="text-xl text-gray-600">
                Que vous soyez architecte, intégrateur ou utilisateur final, nous sommes là pour vous.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {/* Support Technique */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0CB14B] to-[#0CB14B]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">Support Technique</h3>
                <p className="text-gray-600">
                  Assistance expert pour tous nos produits et intégrations KNX/IoT
                </p>
              </motion.div>

              {/* Devis Personnalisé */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#cd2653] to-[#cd2653]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">Devis Personnalisé</h3>
                <p className="text-gray-600">
                  Solutions sur mesure adaptées à vos besoins spécifiques
                </p>
              </motion.div>

              {/* Partenariat */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">Opportunités de Partenariat</h3>
                <p className="text-gray-600">
                  Devenez distributeur ou partenaire Can-nX
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact showTitle={false} />

        {/* Map Section (Optional - can be added later with actual location) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl mb-4">Présence Internationale</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Can-nX est présent en France et à l'international. Nos solutions d'automatisation 
                KNX et IoT équipent des bâtiments intelligents dans le monde entier.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                  🇫🇷 France
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                  🇧🇪 Belgique
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                  🇨🇭 Suisse
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                  🇱🇺 Luxembourg
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                  🇩🇪 Allemagne
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#0CB14B] to-[#0CB14B]/90 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cd2653] rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl text-white mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Remplissez le formulaire ci-dessus ou contactez-nous directement. 
                Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="tel:+33649536719"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0CB14B] rounded-full hover:bg-gray-100 transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appelez-nous maintenant
                </a>
                <a 
                  href="mailto:contact@can-nx.com"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Envoyez un email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

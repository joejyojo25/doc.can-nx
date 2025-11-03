import { motion } from 'motion/react';
import { Mail, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0CB14B] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cd2653] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-full mb-6">
            <MessageSquare className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">
            Pouvons-nous collaborer sur un projet ?
          </h2>
          <p className="text-xl text-gray-600">
            Contactez-nous pour discuter de vos besoins en intégration KNX et IoT
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-2 text-gray-700">
                    Prénom
                  </label>
                  <Input id="firstName" placeholder="Votre prénom" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm mb-2 text-gray-700">
                    Nom
                  </label>
                  <Input id="lastName" placeholder="Votre nom" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email
                </label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm mb-2 text-gray-700">
                  Entreprise
                </label>
                <Input id="company" placeholder="Votre entreprise" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                  Téléphone
                </label>
                <Input id="phone" type="tel" placeholder="+33 6 00 00 00 00" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-600 mb-4">Ou contactez-nous directement :</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="mailto:contact@can-nx.com"
                className="text-[#0CB14B] hover:text-[#cd2653] transition-colors"
              >
                contact@can-nx.com
              </a>
              <a
                href="tel:+33649536719"
                className="text-[#0CB14B] hover:text-[#cd2653] transition-colors"
              >
                +33 6 49 53 67 19
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

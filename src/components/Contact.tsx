import { motion } from 'motion/react';
import { Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface ContactProps {
  showTitle?: boolean;
  className?: string;
}

export function Contact({ showTitle = true, className = '' }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    country: 'France',
    postalCode: '',
    profession: '',
    productInterest: '',
    message: '',
    newsletter: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, newsletter: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Intégration Mailchimp via Supabase Server (sécurisée)
      const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-0ad4a4f9/mailchimp-subscribe`;
      
      console.log('Submitting to Mailchimp server:', serverUrl);

      const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: formData.company,
          phone: formData.phone,
          country: formData.country,
          postalCode: formData.postalCode,
          profession: formData.profession,
          productInterest: formData.productInterest,
          message: formData.message,
          newsletter: formData.newsletter
        })
      });

      const result = await response.json();

      console.log('Mailchimp server response:', { status: response.status, result });

      if (response.ok && result.success) {
        // Afficher le message de succès
        setShowSuccessMessage(true);
        
        // Message de succès amélioré
        toast.success('✅ Demande bien reçue !', {
          description: 'Votre demande a été prise en compte avec succès. Notre équipe vous répondra dans les plus brefs délais.',
          duration: 6000,
          icon: <CheckCircle className="w-5 h-5 text-[#0CB14B]" />
        });

        // Réinitialiser le formulaire
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          phone: '',
          email: '',
          country: 'France',
          postalCode: '',
          profession: '',
          productInterest: '',
          message: '',
          newsletter: false
        });

        // Cacher le message après 8 secondes
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 8000);
      } else {
        console.error('Mailchimp error response:', result);
        throw new Error(result.error || 'Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error('❌ Erreur d\'envoi', {
        description: error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement à contact@can-nx.com',
        duration: 8000,
        icon: <AlertCircle className="w-5 h-5 text-red-500" />
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden ${className}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0CB14B] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cd2653] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {showTitle && (
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
        )}

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: showTitle ? 0.2 : 0 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-xl relative">
            {/* Message de succès en overlay */}
            {showSuccessMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center z-10 p-8"
              >
                <div className="text-center max-w-md">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <CheckCircle className="w-20 h-20 text-[#0CB14B] mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl mb-3 text-gray-900">
                    Demande bien reçue !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Votre demande a été prise en compte avec succès. Notre équipe vous répondra dans les plus brefs délais par email ou téléphone.
                  </p>
                  <Button
                    onClick={() => setShowSuccessMessage(false)}
                    className="bg-[#0CB14B] hover:bg-[#0a9d42] text-white"
                  >
                    Fermer
                  </Button>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Prénom et Nom */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-2 text-gray-700">
                    Prénom *
                  </label>
                  <Input 
                    id="firstName" 
                    placeholder="Votre prénom" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm mb-2 text-gray-700">
                    Nom de famille *
                  </label>
                  <Input 
                    id="lastName" 
                    placeholder="Votre nom" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Entreprise */}
              <div>
                <label htmlFor="company" className="block text-sm mb-2 text-gray-700">
                  Entreprise <span className="text-gray-400">(facultatif)</span>
                </label>
                <Input 
                  id="company" 
                  placeholder="Votre entreprise" 
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>

              {/* Téléphone et Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                    N° de téléphone direct *
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+33 6 00 00 00 00" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                    Adresse e-mail *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="votre@email.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Pays et Code postal */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="country" className="block text-sm mb-2 text-gray-700">
                    Pays *
                  </label>
                  <Select 
                    value={formData.country} 
                    onValueChange={(value) => handleSelectChange('country', value)}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un pays" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="France">France</SelectItem>
                      <SelectItem value="Belgium">Belgique</SelectItem>
                      <SelectItem value="Switzerland">Suisse</SelectItem>
                      <SelectItem value="Luxembourg">Luxembourg</SelectItem>
                      <SelectItem value="Germany">Allemagne</SelectItem>
                      <SelectItem value="Spain">Espagne</SelectItem>
                      <SelectItem value="Italy">Italie</SelectItem>
                      <SelectItem value="Netherlands">Pays-Bas</SelectItem>
                      <SelectItem value="United Kingdom">Royaume-Uni</SelectItem>
                      <SelectItem value="Other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm mb-2 text-gray-700">
                    Code postal *
                  </label>
                  <Input 
                    id="postalCode" 
                    placeholder="75001" 
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Je suis */}
              <div>
                <label htmlFor="profession" className="block text-sm mb-2 text-gray-700">
                  Je suis *
                </label>
                <Select 
                  value={formData.profession} 
                  onValueChange={(value) => handleSelectChange('profession', value)}
                  disabled={isSubmitting}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre profil" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Installateur">Installateur</SelectItem>
                    <SelectItem value="Electrician">Electrician</SelectItem>
                    <SelectItem value="Integrateur">Integrateur</SelectItem>
                    <SelectItem value="Distributeur">Distributeur</SelectItem>
                    <SelectItem value="Developer">Developer</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Manufacturer">Manufacturer</SelectItem>
                    <SelectItem value="other">other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Product Interested in */}
              <div>
                <label htmlFor="productInterest" className="block text-sm mb-2 text-gray-700">
                  Produit qui vous intéresse <span className="text-gray-400">(facultatif)</span>
                </label>
                <Input 
                  id="productInterest" 
                  placeholder="Ex: Kloud'nX, Infini KNX, Pool'nX..." 
                  value={formData.productInterest}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>

              {/* Remarques */}
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Remarques <span className="text-gray-400">(facultatif)</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet ou posez vos questions..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={handleCheckboxChange}
                  disabled={isSubmitting}
                />
                <label 
                  htmlFor="newsletter" 
                  className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                >
                  Oui, je voudrais rester informé des nouvelles importantes de Can'nX.
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </>
                )}
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

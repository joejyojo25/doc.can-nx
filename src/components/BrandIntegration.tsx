import { motion } from 'motion/react';
import { Check, Download, FileText, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Breadcrumb } from './Breadcrumb';

interface IntegrationStep {
  title: string;
  description: string;
}

interface Feature {
  title: string;
  description: string;
  items?: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BrandIntegrationProps {
  brandName: string;
  heroTitle: string;
  heroSubtitle: string;
  brandLogo?: string;
  productImage: string;
  integrationSteps: IntegrationStep[];
  features: Feature[];
  architectureDiagram?: string;
  faqs: FAQItem[];
  documentationUrl?: string;
  shopUrl?: string;
  compatibleProducts?: string[];
}

export function BrandIntegration({
  brandName,
  heroTitle,
  heroSubtitle,
  brandLogo,
  productImage,
  integrationSteps,
  features,
  architectureDiagram,
  faqs,
  documentationUrl = 'https://doc.can-nx.com',
  shopUrl = 'https://can-nx.shop',
  compatibleProducts = ["Kloud'nX"]
}: BrandIntegrationProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Intégrations', href: '#integrations' },
          { label: brandName }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {brandLogo && (
                <div className="mb-6 flex justify-center">
                  <ImageWithFallback
                    src={brandLogo}
                    alt={brandName}
                    className="h-16 lg:h-20 w-auto"
                  />
                </div>
              )}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
                {heroTitle}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                {heroSubtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md mx-auto"
            >
              <ImageWithFallback
                src={productImage}
                alt={`${brandName} Integration`}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl mb-4">
              Comment la licence Link'nX s'intègre à {brandName} via Kloud'nX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La licence Link'nX, intégrée à Kloud'nX, communique de manière transparente avec les appareils {brandName}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl mb-4">
              Fonctionnalités Clés de l'intégration {brandName}
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl mb-4 text-blue-600">{feature.title}</h3>
                  <p className="text-gray-700 mb-4">{feature.description}</p>
                  
                  {feature.items && feature.items.length > 0 && (
                    <ul className="space-y-2">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      {architectureDiagram && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl mb-4">
                Synoptique général d'une installation communicante
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <ImageWithFallback
                src={architectureDiagram}
                alt="Architecture Diagram"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl mb-4">Prêt à intégrer {brandName} ?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Ajoutez la licence Link'nX à votre Kloud'nX pour débloquer toutes les fonctionnalités
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4 justify-center">
              {documentationUrl && (
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-gray-100 border-white"
                  asChild
                >
                  <a href={documentationUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-5 h-5 mr-2" />
                    Documentation
                  </a>
                </Button>
              )}
              
              {shopUrl && (
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  asChild
                >
                  <a href={shopUrl} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    En savoir plus et acheter
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl mb-4">FAQ</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Compatible Products */}
      {compatibleProducts && compatibleProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl mb-6">Produits Can-nX compatibles</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {compatibleProducts.map((product, index) => (
                  <Card key={index} className="px-6 py-3 bg-white">
                    <span className="text-blue-600">{product}</span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

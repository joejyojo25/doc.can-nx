import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntegrationsShowcase } from './components/IntegrationsShowcase';
import { Vision } from './components/Vision';
import { Products } from './components/Products';
import { UseCases } from './components/UseCases';
import { StatsSection } from './components/StatsSection';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { SEOHead } from './components/SEOHead';
import { getSEOConfig } from './config/seoConfig';
import { logSEODiagnostic } from './utils/seoDiagnostic';
import { KloudnxPage } from './pages/KloudnxPage';
import { KloudnxSubscriptionPage } from './pages/KloudnxSubscriptionPage';
import { ChartnxPage } from './pages/ChartnxPage';
import { BossnxPage } from './pages/BossnxPage';
import { PoolnxPage } from './pages/PoolnxPage';
import { EmergynxPage } from './pages/EmergynxPage';
import { InfiniKnxPage } from './pages/InfiniKnxPage';
import { InfiniKnxConfiguratorPage } from './pages/InfiniKnxConfiguratorPage';
import { ModnxPage } from './pages/ModnxPage';
import { SpeaknxPage } from './pages/SpeaknxPage';
import { BlogPage } from './pages/BlogPage';
import { ImprovementsDemo } from './components/ImprovementsDemo';
import { TwoNPage } from './pages/integration/TwoNPage';
import { DoorbirdPage } from './pages/integration/DoorbirdPage';
import { PoolcopPage } from './pages/integration/PoolcopPage';
import { KlereoPage } from './pages/integration/KlereoPage';
import { ModbusPage } from './pages/integration/ModbusPage';
import { SonosPage } from './pages/integration/SonosPage';
import { CrestronPage } from './pages/integration/CrestronPage';
import { HikvisionPage } from './pages/integration/HikvisionPage';
import { NukiPage } from './pages/integration/NukiPage';
import { ShellyPage } from './pages/integration/ShellyPage';
import { GudePage } from './pages/integration/GudePage';
import { AirzonePage } from './pages/integration/AirzonePage';
import { LektricoPage } from './pages/integration/LektricoPage';
import { TerraACPage } from './pages/integration/TerraACPage';
import { PushoverPage } from './pages/integration/PushoverPage';
import { HomeKitPage } from './pages/integration/HomeKitPage';
import { KNXPage } from './pages/integration/KNXPage';
import { EvlinkProPage } from './pages/integration/EvlinkProPage';

const homeFAQItems = [
  {
    question: "Qu'est-ce que Can-nX ?",
    answer: "Can-nX est un fabricant de solutions KNX et IoT pour le bâtiment connecté. Nous proposons une gamme complète de produits pour les professionnels certifiés KNX, intégrateurs audio-visuels et experts du bâtiment connecté."
  },
  {
    question: "Quels sont les avantages du protocole KNX ?",
    answer: "KNX est un standard mondial pour le contrôle de la maison et du bâtiment. Il permet l'interopérabilité entre différents fabricants, offre une grande fiabilité, et garantit une solution pérenne pour votre installation domotique."
  },
  {
    question: "Comment puis-je me former au KNX ?",
    answer: "Can-nX propose des formations et de la documentation complète pour tous nos produits. Vous pouvez également consulter notre guide vidéo sur YouTube et accéder à notre documentation technique en ligne."
  },
  {
    question: "Où puis-je acheter les produits Can-nX ?",
    answer: "Nos produits sont disponibles sur notre boutique en ligne can-nx.shop. Nous travaillons également avec un réseau de distributeurs professionnels à travers l'Europe."
  },
  {
    question: "Proposez-vous un support technique ?",
    answer: "Oui, nous offrons un support technique complet incluant une documentation détaillée, des guides vidéo, et une assistance directe pour tous nos produits. Vous pouvez nous contacter via notre formulaire de contact."
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Simple hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // SEO Diagnostic in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Run diagnostic after DOM is fully loaded
      const timer = setTimeout(() => {
        logSEODiagnostic();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  if (currentPage === 'kloudnx') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('kloudnx')} />
        <Header />
        <main>
          <KloudnxPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'kloudnx-subscription') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('kloudnx')} />
        <Header />
        <main>
          <KloudnxSubscriptionPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'chartnx') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('chartnx')} />
        <Header />
        <main>
          <ChartnxPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'bossnx') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('bossnx')} />
        <Header />
        <main>
          <BossnxPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'poolnx') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('poolnx')} />
        <Header />
        <main>
          <PoolnxPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'emergynx') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('emergynx')} />
        <Header />
        <main>
          <EmergynxPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'infinix') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('infinix')} />
        <Header />
        <main>
          <InfiniKnxPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'infinix-configurator') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('infinix')} />
        <Header />
        <main>
          <InfiniKnxConfiguratorPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'modnx') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('modnx')} />
        <Header />
        <main>
          <ModnxPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'speaknx') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('speaknx')} />
        <Header />
        <main>
          <SpeaknxPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'improvements') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('home')} />
        <Header />
        <main>
          <ImprovementsDemo />
        </main>
        <Footer />
      </div>
    );
  }

  // Brand Integration Pages
  if (currentPage === 'integration-2n') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-2n')} />
        <Header />
        <main>
          <TwoNPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-doorbird') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-doorbird')} />
        <Header />
        <main>
          <DoorbirdPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-poolcop') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-poolcop')} />
        <Header />
        <main>
          <PoolcopPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-modbus') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-modbus')} />
        <Header />
        <main>
          <ModbusPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-sonos') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-sonos')} />
        <Header />
        <main>
          <SonosPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-klereo') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-klereo')} />
        <Header />
        <main>
          <KlereoPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-crestron') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-crestron')} />
        <Header />
        <main>
          <CrestronPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-hikvision') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-hikvision')} />
        <Header />
        <main>
          <HikvisionPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-nuki') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-nuki')} />
        <Header />
        <main>
          <NukiPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-shelly') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-shelly')} />
        <Header />
        <main>
          <ShellyPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-gude') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-gude')} />
        <Header />
        <main>
          <GudePage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-airzone') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-airzone')} />
        <Header />
        <main>
          <AirzonePage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-lektrico') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-lektrico')} />
        <Header />
        <main>
          <LektricoPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Redirect Aidoo to Airzone (Aidoo is an Airzone product)
  if (currentPage === 'integration-aidoo') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-airzone')} />
        <Header />
        <main>
          <AirzonePage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-terraac') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-terraac')} />
        <Header />
        <main>
          <TerraACPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-pushover') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-pushover')} />
        <Header />
        <main>
          <PushoverPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-homekit') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-homekit')} />
        <Header />
        <main>
          <HomeKitPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-knx') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-knx')} />
        <Header />
        <main>
          <KNXPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'integration-evlinkpro') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('integration-evlinkpro')} />
        <Header />
        <main>
          <EvlinkProPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead {...getSEOConfig('blog')} />
        <Header />
        <main>
          <BlogPage />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead {...getSEOConfig('home')} />
      <Header />
      <main>
        <Hero />
        <Products />
        <IntegrationsShowcase />
        <Services />
        <Benefits />
        <Vision />
        <UseCases />
        <StatsSection />
        <FAQ items={homeFAQItems} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

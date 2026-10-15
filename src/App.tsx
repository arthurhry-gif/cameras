import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { RealSamples } from './components/RealSamples';
import { AreasList } from './components/AreasList';
import { HowItWorks } from './components/HowItWorks';
import { ForYou } from './components/ForYou';
import { LimitedOffer } from './components/LimitedOffer';
import { AllYouGet } from './components/AllYouGet';
import { LookInside } from './components/LookInside';
import { WhatYouWillFind } from './components/WhatYouWillFind';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { GuideModal } from './components/GuideModal';
import { CheckoutModal } from './components/CheckoutModal';
import { GuidePreviewItem } from './data/guidesData';

export default function App() {
  const [selectedGuide, setSelectedGuide] = useState<GuidePreviewItem | null>(null);
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<string | null>(null);

  const scrollToPlans = () => {
    const plansElement = document.getElementById('planos');
    if (plansElement) {
      plansElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* 1. Top Bar */}
      <TopBar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onScrollToPlans={scrollToPlans} />

        {/* 3. Amostras Reais do Material */}
        <RealSamples onScrollToPlans={scrollToPlans} />

        {/* 4. Lista das 6 Grandes Áreas Técnicas */}
        <AreasList />

        {/* 5. Veja Por Dentro do Material (Carrossel Duplo com 29 Guias) */}
        <LookInside onScrollToPlans={scrollToPlans} />

        {/* 6. Consulta Visual */}
        <HowItWorks onScrollToPlans={scrollToPlans} />

        {/* 7. Para Quem É o Material */}
        <ForYou onScrollToPlans={scrollToPlans} />

        {/* 8. Oferta por Tempo Limitado */}
        <LimitedOffer onScrollToPlans={scrollToPlans} />

        {/* 9. Tudo Que Você Recebe */}
        <AllYouGet onScrollToPlans={scrollToPlans} />

        {/* 10. Bônus Exclusivos */}
        <BonusSection onScrollToPlans={scrollToPlans} />

        {/* 11. O Que Você Vai Encontrar (12 Cards Temáticos) */}
        <WhatYouWillFind />

        {/* 10. Seção de Planos (Investimento: Básico e Completo) */}
        <PricingSection onSelectCheckout={(plan) => setSelectedPlanForCheckout(plan)} />

        {/* 11. Seção de Garantia */}
        <GuaranteeSection />

        {/* 12. Perguntas Frequentes (FAQ Acordeão) */}
        <FAQSection />

        {/* 13. CTA Final */}
        <FinalCTA onScrollToPlans={scrollToPlans} />
      </main>

      {/* 14. Rodapé */}
      <Footer />

      {/* Guide Detail & Inspection Modal */}
      <GuideModal 
        guide={selectedGuide} 
        onClose={() => setSelectedGuide(null)} 
        onSelectPlan={scrollToPlans}
      />

      {/* Checkout Simulado Modal */}
      <CheckoutModal 
        planName={selectedPlanForCheckout} 
        onClose={() => setSelectedPlanForCheckout(null)} 
      />
    </div>
  );
}

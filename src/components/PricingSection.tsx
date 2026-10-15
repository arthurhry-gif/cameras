import React from 'react';
import { Check, CheckCircle2, ShieldCheck, Zap, Lock, CreditCard } from 'lucide-react';

interface PricingSectionProps {
  onSelectCheckout: (plan: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectCheckout }) => {
  return (
    <section id="planos" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-100 scroll-mt-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80 inline-block">
            ESCOLHA SEU PLANO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Acesso vitalício em pagamento único
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Sem mensalidade. Sem burocracia. Sem pegadinha.
          </p>
        </div>

        {/* 2 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 1: PLANO BÁSICO */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Plan Category & Title */}
              <div className="mb-4">
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase block mb-1">
                  PLANO BÁSICO
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  Comece a consultar as principais áreas
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Versão resumida com acesso vitalício.
                </p>
              </div>

              {/* Price Block */}
              <div className="my-6 text-center">
                <span className="text-slate-400 line-through text-sm font-semibold block mb-0.5">
                  R$ 53,80
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-black text-slate-900">R$</span>
                  <span className="text-5xl font-black text-slate-900 tracking-tight">26</span>
                  <span className="text-2xl font-black text-slate-900">,90</span>
                </div>
                <span className="text-xs text-slate-500 font-medium block mt-1">
                  à vista
                </span>
              </div>

              {/* Warning Notice */}
              <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200/80 text-xs text-amber-900 font-semibold mb-6 flex items-start gap-2 leading-relaxed">
                <span className="text-base select-none shrink-0 leading-none">⚠️</span>
                <span>Atenção: versão resumida. Só no Completo você leva todo o ecossistema e os bônus exclusivos:</span>
              </div>

              {/* Checklist Items */}
              <div className="space-y-3 mb-8">
                {/* 1. Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>+120 Guias Visuais Ilustrados</strong></span>
                </div>

                {/* 2. Not Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 line-through leading-snug">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Conteúdos práticos avançados de esquemas</span>
                </div>

                {/* 3. Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Câmeras de Segurança e CFTV</span>
                </div>

                {/* 4. Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Cabeamento e Conexões</span>
                </div>

                {/* 5. Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Alarmes e Sensores</span>
                </div>

                {/* 6. Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Gravadores e Armazenamento</span>
                </div>

                {/* 7. Not Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 line-through leading-snug">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Redes IP e Tecnologia PoE completa</span>
                </div>

                {/* 8. Not Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 line-through leading-snug">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Controle de Acesso e Periféricos</span>
                </div>

                {/* 9. Not Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 line-through leading-snug">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Bônus App: Instalação de CFTV e Alarmes</span>
                </div>

                {/* 10. Not Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 line-through leading-snug">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Bônus Checklist de Visita e Instalação</span>
                </div>

                {/* 11. Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Bônus Guia Visual de Falhas e Sintomas</span>
                </div>

                {/* 12. Not Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 line-through leading-snug">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Bônus Mapa de Câmeras e Cobertura</span>
                </div>

                {/* 13. Not Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 line-through leading-snug">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Bônus Kit de Entrega e Histórico</span>
                </div>

                {/* 14. Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Acesso vitalício + atualizações grátis</span>
                </div>

                {/* 15. Not Included */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 line-through leading-snug">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Suporte prioritário</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-2">
              <a
                href="https://ggcheckout.app/checkout/v3/8b4fc33f-d642-4113-af03-1bc5b07460aa"
                className="w-full py-4 px-6 border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white rounded-full transition-all uppercase tracking-wider text-sm sm:text-base cursor-pointer shadow-xs active:scale-[0.99] flex items-center justify-center text-center no-underline"
              >
                QUERO O PLANO BÁSICO
              </a>
            </div>
          </div>

          {/* Card 2: PLANO COMPLETO (Mais Escolhido / Dark Navy Teal) */}
          <div className="bg-[#0c384e] text-white rounded-3xl p-6 sm:p-8 pt-8 sm:pt-9 border-2 border-teal-400/70 shadow-2xl flex flex-col justify-between relative group">
            
            {/* Top Floating Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <span className="bg-white text-slate-900 font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-md border border-slate-200 inline-flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-amber-500">⭐</span>
                <span>MAIS ESCOLHIDO</span>
              </span>
            </div>

            <div>
              {/* Product Mockup Image */}
              <div className="pt-4 pb-2 max-w-sm mx-auto flex items-center justify-center">
                <img 
                  src="/mockup-guias.png" 
                  onError={(e) => {
                    e.currentTarget.src = "https://i.postimg.cc/KY2Wxk6r/imagem-2026-10-07-215002089.png";
                  }}
                  alt="Material Completo + Todos os Bônus" 
                  className="w-full max-h-48 object-contain drop-shadow-xl group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Plan Category & Title */}
              <div className="mb-4 text-center sm:text-left">
                <span className="text-xs font-bold tracking-wider text-teal-300 uppercase block mb-1">
                  PLANO COMPLETO
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  Material completo + todos os bônus
                </h3>
                <p className="text-xs sm:text-sm text-teal-100/80 mt-1 font-normal">
                  A melhor preparação e consulta prática para o dia a dia.
                </p>
              </div>

              {/* Price Block */}
              <div className="my-6 text-center">
                <span className="text-teal-300/70 line-through text-sm font-semibold block mb-0.5">
                  R$ 73,80
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-black text-white">R$</span>
                  <span className="text-5xl font-black text-white tracking-tight">36</span>
                  <span className="text-2xl font-black text-white">,90</span>
                </div>
                <span className="text-xs text-teal-200/90 font-medium block mt-1">
                  à vista
                </span>

                {/* Installment Badge */}
                <div className="mt-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-teal-100 text-xs font-bold shadow-2xs">
                    <span>💳</span>
                    <span>12X DE R$ 3,69 NO CARTÃO</span>
                  </span>
                </div>
              </div>

              {/* Complete Checklist Items (All Included) */}
              <div className="space-y-3.5 mb-8 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white leading-snug">
                  <div className="w-5 h-5 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>+120 Guias Visuais Ilustrados — o material completo</strong></span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-teal-50 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Todos os 6 grandes módulos técnicos organizados</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-teal-50 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Conteúdos práticos (diagramas, testes, pinagens, conexões)</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-teal-50 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>5 bônus exclusivos</strong> (App de videoaulas + Checklist + Guia de falhas + Mapa de cobertura + Kit de entrega)</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-teal-50 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Acesso vitalício + atualizações grátis</strong></span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-teal-50 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Suporte prioritário</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-2">
              <a
                href="https://ggcheckout.app/checkout/v3/c54ff667-a7e6-47bd-a1d5-cbcbb0baa9a5"
                className="w-full py-4.5 px-6 bg-[#0f766e] hover:bg-[#115e59] active:bg-[#134e4a] text-white font-black text-sm sm:text-base rounded-full transition-all shadow-xl shadow-teal-950/50 uppercase tracking-wider cursor-pointer active:scale-[0.99] flex items-center justify-center text-center no-underline"
              >
                QUERO O MATERIAL COMPLETO
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

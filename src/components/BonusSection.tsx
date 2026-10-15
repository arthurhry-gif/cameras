import React, { useState } from 'react';
import { ArrowRight, X, Maximize2 } from 'lucide-react';

interface BonusItem {
  number: string;
  title: string;
  subtitle: string;
  image: string;
  fallback: string;
}

export const BONUSES_DATA: BonusItem[] = [
  {
    number: 'BÔNUS 01',
    title: 'App: Instalação de CFTV e Alarmes, Passo a Passo',
    subtitle: 'Vídeo aulas e procedimentos práticos com acesso direto pelo celular para consultar na obra ou no trabalho.',
    image: '/bonus/bonus-01.png',
    fallback: 'https://i.postimg.cc/BbLJSFgt/App-de-videoaulas-de-CFTV-e-alarmes-1.png'
  },
  {
    number: 'BÔNUS 02',
    title: 'Checklist de Visita e Instalação',
    subtitle: 'Roteiro passo a passo para conferência de infraestrutura, cabeamento, pontos e testes antes de finalizar o serviço.',
    image: '/bonus/bonus-02.png',
    fallback: 'https://i.postimg.cc/Y05MhSnt/Checklist-de-visita-e-instalacao-2.png'
  },
  {
    number: 'BÔNUS 03',
    title: 'Guia Visual de Falhas e Sintomas',
    subtitle: 'Diagnóstico rápido e visual para solucionar perda de sinal, ruídos, travamentos de gravação e problemas de rede.',
    image: '/bonus/bonus-03.png',
    fallback: 'https://i.postimg.cc/yxg71RPx/Bonus-03-Guia-visual-de-falhas-3.png'
  },
  {
    number: 'BÔNUS 04',
    title: 'Mapa de Câmeras e Pontos de Cobertura',
    subtitle: 'Posicionamento estratégico, ângulos de visão, alturas e zonas de cobertura para projetos residenciais e comerciais.',
    image: '/bonus/bonus-04.png',
    fallback: 'https://i.postimg.cc/J0DRrXqn/Bonus-04-mapa-de-cobertura-4.png'
  },
  {
    number: 'BÔNUS 05',
    title: 'Kit de Entrega e Histórico do Cliente',
    subtitle: 'Modelos e formulários prontos para entrega formal do sistema, cadastro de IPs, senhas e histórico de manutenção.',
    image: '/bonus/bonus-05.png',
    fallback: 'https://i.postimg.cc/QC9j87bH/Kit-de-entrega-ao-cliente-5.png'
  }
];

interface BonusSectionProps {
  onScrollToPlans: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onScrollToPlans }) => {
  const [zoomedBonus, setZoomedBonus] = useState<BonusItem | null>(null);

  return (
    <section className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200/80 inline-block">
            BÔNUS EXCLUSIVOS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            5 bônus que valem por outro material
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mx-auto pt-1">
            Inclusos gratuitamente ao adquirir hoje.
          </p>
        </div>

        {/* 5 Bonus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {BONUSES_DATA.map((bonus, index) => (
            <div 
              key={index}
              onClick={() => setZoomedBonus(bonus)}
              className="bg-white rounded-3xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group overflow-hidden cursor-pointer"
            >
              {/* Top Image Preview - Full uncropped image */}
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-slate-50 relative flex items-center justify-center border border-slate-100/80">
                <img
                  src={bonus.image}
                  onError={(e) => {
                    e.currentTarget.src = bonus.fallback;
                  }}
                  alt={bonus.title}
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4 text-amber-300" />
                  <span>Clique para ampliar</span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="pt-4 pb-2 px-1 flex-1 flex flex-col justify-start">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-teal-800 transition-colors mb-1.5">
                  {bonus.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {bonus.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button
            onClick={onScrollToPlans}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#0f766e] hover:bg-[#115e59] active:bg-[#134e4a] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-teal-900/20 hover:shadow-teal-900/30 transition-all duration-150 cursor-pointer group"
          >
            <span>QUERO GARANTIR MEU ACESSO COM TODOS OS BÔNUS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Full-Screen Zoom Modal */}
      {zoomedBonus && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setZoomedBonus(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
              <div className="font-bold text-slate-900 text-sm sm:text-base line-clamp-1">
                {zoomedBonus.title}
              </div>
              <button
                onClick={() => setZoomedBonus(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-2 sm:p-4 bg-slate-900 overflow-y-auto flex items-center justify-center flex-1">
              <img
                src={zoomedBonus.image}
                onError={(e) => {
                  e.currentTarget.src = zoomedBonus.fallback;
                }}
                alt={zoomedBonus.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Bônus exclusivo incluso no acesso
              </span>
              <button
                onClick={() => {
                  setZoomedBonus(null);
                  onScrollToPlans();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0f766e] hover:bg-[#115e59] text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
              >
                QUERO ESTES BÔNUS
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

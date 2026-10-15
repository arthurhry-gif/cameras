import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AllYouGetProps {
  onScrollToPlans?: () => void;
}

export const AllYouGet: React.FC<AllYouGetProps> = ({ onScrollToPlans }) => {
  const cards = [
    {
      number: '01',
      title: 'Material principal',
      bullets: [
        '120 Guias Visuais Ilustrados e organizados',
        'Câmeras, alarmes, sensores, cabos e redes',
        'Conteúdos conceituais e diagramas práticos'
      ]
    },
    {
      number: '02',
      title: '5 bônus exclusivos',
      bullets: [
        <strong key="app" className="font-bold text-slate-900">App: Instalação de CFTV e Alarmes, Passo a Passo</strong>,
        'Checklist de Visita e Instalação',
        'Guia Visual de Falhas e Sintomas',
        'Mapa de Câmeras e Pontos de Cobertura',
        'Kit de Entrega e Histórico do Cliente'
      ]
    },
    {
      number: '03',
      title: 'Acesso e suporte',
      bullets: [
        'Acesso vitalício imediato',
        'Todas as atualizações futuras inclusas',
        'Suporte prioritário para dúvidas'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/70 inline-block">
            TUDO QUE VOCÊ RECEBE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            Do primeiro ao último recurso
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto pt-1">
            120 mapas clínicos, <strong className="font-bold text-slate-900">app exclusivo com vídeo aulas</strong> + 5 bônus exclusivos para revisar no trabalho.
          </p>
        </div>

        {/* Central Infographic Banner Image */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="bg-white rounded-3xl p-2 sm:p-4 border border-slate-200/90 shadow-xl overflow-hidden group">
            <img 
              src="/tudo-que-voce-recebe.png" 
              onError={(e) => {
                e.currentTarget.src = "https://i.postimg.cc/MGyV9M2c/imagem-2026-10-13-224725990.png";
              }}
              alt="Tudo o que você recebe — Sistema visual com 120 guias, aplicativo e bônus exclusivos"
              className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* 3 Summary Cards underneath with Teal Top Border */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm border-t-[5px] border-t-[#0f766e] flex flex-col justify-start hover:shadow-md transition-shadow duration-200"
            >
              {/* Card Header with Number Circle and Title */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                  {card.number}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Bullet List */}
              <ul className="space-y-3 flex-1">
                {card.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-snug">
                    <span className="text-[#0f766e] font-bold text-xs shrink-0 mt-0.5 select-none">
                      ▸
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        {onScrollToPlans && (
          <div className="mt-12 sm:mt-16 flex justify-center">
            <button
              onClick={onScrollToPlans}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#0f766e] hover:bg-[#115e59] active:bg-[#134e4a] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-teal-900/20 hover:shadow-teal-900/30 transition-all duration-150 cursor-pointer group"
            >
              <span>QUERO ACESSAR OS 120 GUIAS</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

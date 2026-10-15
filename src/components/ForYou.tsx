import React from 'react';

interface ForYouProps {
  onScrollToPlans?: () => void;
}

export const ForYou: React.FC<ForYouProps> = () => {
  const cards = [
    {
      number: '01',
      title: 'Quem está começando na instalação',
      bullets: [
        'Ainda confunde componentes e funções',
        'Se perde nos termos técnicos',
        'Quer estudar sem depender de vídeos soltos'
      ]
    },
    {
      number: '02',
      title: 'Quem já trabalha com instalação',
      bullets: [
        'Precisa consultar conceitos com rapidez',
        'Quer revisar antes de atender um serviço',
        'Busca uma referência visual sem enrolação'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            Para quem é o material?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
            Para quem quer parar de se perder entre cabos, câmeras e alarmes.
          </p>
        </div>

        {/* 2 White Cards Grid with Teal Top Border */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
              <ul className="space-y-3.5">
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

      </div>
    </section>
  );
};

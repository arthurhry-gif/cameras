import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onScrollToPlans?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onScrollToPlans }) => {
  const cards = [
    {
      number: '01',
      title: 'Câmeras e Monitoramento',
      bullets: [
        'Tipos de câmeras e suas características',
        'Lentes, resolução, campo de visão e infravermelho',
        'Diferenças entre sistemas analógicos e IP',
        'DVR, NVR, canais e gravação',
        'Relação entre câmera, gravador e monitor'
      ]
    },
    {
      number: '02',
      title: 'Cabeamento e Conexões',
      bullets: [
        'Cabos, conectores e terminações mais comuns',
        'Noções visuais de alimentação e transmissão de sinal',
        'PoE, switches e conexão de equipamentos',
        'Conceitos básicos de rede local e endereçamento IP',
        'Caminho da imagem entre câmera, rede e gravador'
      ]
    },
    {
      number: '03',
      title: 'Alarmes e Controle de Acesso',
      bullets: [
        'Centrais, zonas, teclados e sirenes',
        'Sensores de presença e contatos magnéticos',
        'Sensores de abertura e outros dispositivos de detecção',
        'Fechaduras, controles e componentes de acesso',
        'Conceitos de integração entre alarme e monitoramento'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/70 inline-block">
            GUIAS VISUAIS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            Consulta rápida no trabalho
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto pt-1">
            Além dos guias visuais, você recebe acesso ao nosso APP EXCLUSIVO.
          </p>
        </div>

        {/* 3 White Cards Grid with Teal Top Border */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm border-t-[5px] border-t-[#0f766e] flex flex-col justify-start hover:shadow-md transition-shadow duration-200"
            >
              {/* Card Header with Number Circle and Title */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
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

        {/* Teal CTA Button */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <button
            onClick={onScrollToPlans}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#0f766e] hover:bg-[#115e59] active:bg-[#134e4a] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-teal-900/20 hover:shadow-teal-900/30 transition-all duration-150 cursor-pointer group"
          >
            <span>QUERO ACESSAR OS 120 GUIAS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

import React from 'react';

export const WhatYouWillFind: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'Você adquire',
      desc: 'Escolhe o plano e faz o pagamento seguro (Pix ou cartão em até 12x).'
    },
    {
      step: '2',
      title: 'Recebe na hora',
      desc: 'O acesso chega no seu e-mail em minutos após a confirmação.'
    },
    {
      step: '3',
      title: 'Entra na plataforma',
      desc: 'Acessa a área de membros e o app exclusivo pelo celular, tablet ou computador.'
    },
    {
      step: '4',
      title: 'Baixa os PDFs',
      desc: 'Downloads em alta resolução, prontos para imprimir ou estudar na tela.'
    },
    {
      step: '5',
      title: 'Consulta e aplica',
      desc: 'Usa os mapas para revisar conceitos, consultar esquemas e aplicar nas instalações.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            Passo a passo do acesso
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
            Do clique à consulta em poucos minutos.
          </p>
        </div>

        {/* 5 Steps Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {steps.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm border-t-[5px] border-t-[#0f766e] flex flex-col justify-start hover:shadow-md transition-shadow duration-200"
            >
              {/* Card Header with Step Number Circle and Title */}
              <div className="flex items-center gap-2.5 mb-3.5 pb-3 border-b border-slate-100">
                <div className="w-8 h-8 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 shadow-2xs">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

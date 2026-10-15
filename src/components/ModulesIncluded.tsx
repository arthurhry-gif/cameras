import React from 'react';
import { MODULES_DATA } from '../data/guidesData';
import { Check, Layers } from 'lucide-react';

export const ModulesIncluded: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-block mb-3">
            CONTEÚDO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            O que está incluso nos 120 Guias Visuais
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Todo o conteúdo dividido em 6 grandes módulos temáticos organizados para consulta e estudo direto.
          </p>
        </div>

        {/* 6 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES_DATA.map((module) => (
            <div 
              key={module.number}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-blue-300 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Module Number badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl sm:text-2xl font-black text-blue-700 tracking-wider font-mono">
                    {module.number}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    Módulo Temático
                  </span>
                </div>

                {/* Module Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {module.title}
                </h3>

                {/* Module Short Summary */}
                <p className="text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                  {module.description}
                </p>

                {/* Topics List */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Assuntos abordados:
                  </span>
                  {module.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module Footer note */}
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
                Visualização esquemática e conceitual
              </div>
            </div>
          ))}
        </div>

        {/* Conceptual disclaimer notice box */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-600">
            <strong>Nota didática:</strong> Os módulos reúnem conteúdos educacionais focados no reconhecimento visual de componentes e relações conceituais. Não substituem treinamento prático presencial ou manuais oficiais dos fabricantes.
          </p>
        </div>

      </div>
    </section>
  );
};

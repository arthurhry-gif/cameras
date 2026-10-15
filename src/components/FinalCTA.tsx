import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface FinalCTAProps {
  onScrollToPlans: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onScrollToPlans }) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="bg-gradient-to-b from-blue-50/60 to-white rounded-3xl p-8 sm:p-12 border border-blue-200 shadow-sm relative overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-white px-3.5 py-1 rounded-full border border-blue-200 shadow-xs inline-block">
              MATERIAL PRONTO PARA ESTUDO
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Organize seus estudos de Câmeras, Alarmes e Segurança Eletrônica
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Consulte os assuntos por tema com os 120 Guias Visuais para Instaladores de Câmeras e Alarmes.
            </p>

            <div className="pt-2">
              <button
                onClick={onScrollToPlans}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all cursor-pointer group"
              >
                <span>QUERO GARANTIR MEU ACESSO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="mt-3 text-xs sm:text-sm text-slate-500 font-medium">
                Material digital de apoio ao estudo, familiarização, revisão e consulta.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

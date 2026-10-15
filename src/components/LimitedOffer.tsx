import React from 'react';

interface LimitedOfferProps {
  onScrollToPlans: () => void;
}

export const LimitedOffer: React.FC<LimitedOfferProps> = ({ onScrollToPlans }) => {
  return (
    <section className="py-12 md:py-16 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Offer Box Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm text-center space-y-4 sm:space-y-5">
          
          {/* Hourglass Icon */}
          <div className="text-3xl sm:text-4xl select-none leading-none">
            ⏳
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-black text-slate-900 tracking-tight leading-snug">
            Oferta por tempo limitado
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Estamos com <strong className="font-bold text-slate-900">50% de desconto</strong> hoje. O valor volta ao normal a qualquer momento. Garanta seu acesso vitalício agora e receba todas as atualizações futuras <strong className="font-bold text-slate-900">sem pagar de novo</strong>.
          </p>

          {/* CTA Pill Button */}
          <div className="pt-2 sm:pt-4 flex justify-center">
            <button
              onClick={onScrollToPlans}
              className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#0f766e] hover:bg-[#115e59] active:bg-[#134e4a] text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-teal-900/25 hover:shadow-teal-900/35 transition-all duration-150 cursor-pointer"
            >
              QUERO GARANTIR AGORA
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

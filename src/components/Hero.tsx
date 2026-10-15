import React from 'react';
import { 
  ArrowRight,
  Check,
  Shield,
  Star
} from 'lucide-react';

interface HeroProps {
  onScrollToPlans: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToPlans }) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-100">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Centered Headline & Intro Block */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs sm:text-sm font-semibold tracking-wide">
            <Shield className="w-3.5 h-3.5 text-blue-700" />
            <span>Segurança Digital</span>
          </div>

          {/* Main Headline (Bigger & Centered) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px] font-black text-slate-900 tracking-tight leading-[1.08]">
            +120 Guias Visuais para Instaladores de <span className="text-blue-700 underline decoration-blue-200 decoration-4 sm:decoration-6 underline-offset-8">Câmeras e Alarmes</span>
          </h1>

          {/* Centered Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            Guias visuais ilustrados e organizados por assunto: câmeras, alarmes, gravadores, sensores, cabos, conexões e muito mais — tudo reunido para você estudar e consultar com praticidade.
          </p>

          {/* Mockup do Produto Diretamente Abaixo da Headline */}
          <div className="pt-2 pb-4 max-w-3xl mx-auto flex items-center justify-center">
            <div className="relative group">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/mockup-guias-480.webp 480w, /mockup-guias-800.webp 800w, /mockup-guias.webp 1280w"
                  sizes="(max-width: 640px) 448px, (max-width: 768px) 576px, 672px"
                />
                <img 
                  src="/mockup-guias.webp" 
                  onError={(e) => {
                    e.currentTarget.src = "/mockup-guias.png";
                  }}
                  alt="Mockup dos 120 Guias Visuais para Instaladores de Câmeras e Alarmes" 
                  className="w-full max-w-md sm:max-w-xl md:max-w-2xl h-auto object-contain drop-shadow-2xl group-hover:scale-[1.02] transition-transform duration-300 pointer-events-auto"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width={1280}
                  height={960}
                />
              </picture>
            </div>
          </div>

          {/* Centered Main CTA Button */}
          <div className="pt-2 flex flex-col items-center gap-2.5">
            <button
              onClick={onScrollToPlans}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 sm:py-4.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-150 cursor-pointer group"
            >
              <span>QUERO ACESSAR OS 120 GUIAS</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Material digital para estudo, familiarização e consulta.
            </p>

            {/* Checklist de Benefícios e Avaliação Abaixo do Botão */}
            <div className="pt-4 pb-2 w-full max-w-md mx-auto text-left">
              <div className="space-y-3.5 bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    120 guias visuais ilustrados e organizados
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Conteúdo por módulos de segurança eletrônica
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Acesso vitalício + atualizações gratuitas
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    5 bônus exclusivos para acelerar a revisão
                  </span>
                </div>

                {/* Linha de Avaliação de Estrelas */}
                <div className="pt-3 border-t border-slate-200/80 flex flex-col items-center justify-center text-center">
                  <div className="flex items-center gap-1.5 flex-wrap justify-center">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      +5.000 instaladores e estudantes
                    </span>
                    <span className="text-xs text-slate-600">já usam os guias</span>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-0.5">
                    estudam e revisam com o material
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
          
          {/* Guarantee Seal (Identical to 7 Days Guarantee Seal) */}
          <div className="shrink-0 flex items-center justify-center select-none">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full drop-shadow-md"
                aria-label="Selo de 7 dias de garantia incondicional ou seu dinheiro de volta"
              >
                <defs>
                  {/* Subtle drop shadow */}
                  <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
                  </filter>
                  <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>

                {/* Scalloped / Starburst Seal Badge (Navy Blue) */}
                <path
                  d="M100 15 
                     L108 21 L118 19 L124 27 L134 27 L137 37 L147 40 L147 50 L156 55 L153 65 L160 72 L155 82 L160 91 L153 100 
                     L160 109 L155 118 L160 128 L153 135 L156 145 L147 150 L147 160 L137 163 L134 173 L124 173 L118 181 
                     L108 179 L100 185 L92 179 L82 181 L76 173 L66 173 L63 163 L53 160 L53 150 L44 145 L47 135 L40 128 
                     L45 118 L40 109 L47 100 L40 91 L45 82 L40 72 L47 65 L44 55 L53 50 L53 40 L63 37 L66 27 L76 27 
                     L82 19 L92 21 Z"
                  fill="#0c384e"
                  stroke="#164e63"
                  strokeWidth="2"
                />

                {/* Dashed Gold Inner Ring */}
                <circle cx="100" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />

                {/* 3 Top Stars */}
                <g fill="#ffffff">
                  {/* Left Star */}
                  <polygon points="82,46 84,52 90,52 85,55 87,61 82,57 77,61 79,55 74,52 80,52" transform="scale(0.8) translate(18, 5)" />
                  {/* Center Star (slightly bigger) */}
                  <polygon points="100,40 102,47 109,47 104,51 106,58 100,54 94,58 96,51 91,47 98,47" transform="scale(0.9) translate(11, 4)" fill="#fef08a" />
                  {/* Right Star */}
                  <polygon points="118,46 120,52 126,52 121,55 123,61 118,57 113,61 115,55 110,52 116,52" transform="scale(0.8) translate(30, 5)" />
                </g>

                {/* "7 dias" Main Text */}
                <text x="78" y="94" textAnchor="middle" fill="#ffffff" fontFamily="sans-serif" fontSize="42" fontWeight="900" letterSpacing="-1">
                  7
                </text>
                <text x="122" y="92" textAnchor="middle" fill="#fef08a" fontFamily="sans-serif" fontSize="24" fontWeight="800" fontStyle="italic">
                  dias
                </text>

                {/* "OU SEU DINHEIRO DE VOLTA" */}
                <text x="100" y="108" textAnchor="middle" fill="#ffffff" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" letterSpacing="0.8">
                  OU SEU DINHEIRO DE VOLTA
                </text>

                {/* Ribbon Banner Background */}
                {/* Ribbon tails */}
                <polygon points="16,134 32,122 32,146" fill="#b45309" />
                <polygon points="184,134 168,122 168,146" fill="#b45309" />

                {/* Main Curved Banner */}
                <rect x="26" y="120" width="148" height="28" rx="6" fill="url(#goldRibbon)" filter="url(#shadow)" />
                
                {/* Banner Text "GARANTIA" */}
                <text x="100" y="139" textAnchor="middle" fill="#0f172a" fontFamily="sans-serif" fontSize="16" fontWeight="900" letterSpacing="1.5">
                  GARANTIA
                </text>

                {/* Bottom 100% */}
                <text x="100" y="162" textAnchor="middle" fill="#fef08a" fontFamily="sans-serif" fontSize="9" fontWeight="800" letterSpacing="1">
                  ★ 100% ★
                </text>
              </svg>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="space-y-3 flex-1">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80 inline-block">
              GARANTIA INCONDICIONAL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
              Teste sem risco por 7 dias
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Se você não amar o material por qualquer motivo, devolvemos 100% do valor investido. Sem perguntas, sem burocracia. O risco é todo nosso.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

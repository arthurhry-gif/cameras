import React, { useRef, useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface RealSampleItem {
  id: number;
  title: string;
  image: string;
  fallback: string;
}

export const REAL_SAMPLES_LIST: RealSampleItem[] = [
  {
    id: 1,
    title: 'Visão geral de um sistema CFTV',
    image: '/amostras/amostra-01.png',
    fallback: 'https://i.postimg.cc/TYrbDKLX/Visao-geral-de-um-sistema-CFTV-1.png'
  },
  {
    id: 2,
    title: 'Câmera IP: partes e conceitos',
    image: '/amostras/amostra-02.png',
    fallback: 'https://i.postimg.cc/02pSwz6X/Camera-IP-partes-e-conceitos-2.png'
  },
  {
    id: 3,
    title: 'Visão geral da câmera analógica',
    image: '/amostras/amostra-03.png',
    fallback: 'https://i.postimg.cc/kXxSb263/Visao-geral-da-camera-analogica-3.png'
  },
  {
    id: 4,
    title: 'DVR e NVR: diferenças essenciais',
    image: '/amostras/amostra-04.png',
    fallback: 'https://i.postimg.cc/MKyBQncg/DVR-e-NVR-diferencas-essenciais-4.png'
  },
  {
    id: 5,
    title: 'Lentes e campo de visão',
    image: '/amostras/amostra-05.png',
    fallback: 'https://i.postimg.cc/bNQntZDX/Lentes-e-campo-de-visao-5.png'
  },
  {
    id: 6,
    title: 'Guia visual: câmeras dome e bullet',
    image: '/amostras/amostra-06.png',
    fallback: 'https://i.postimg.cc/VLjtCJS3/Guia-visual-cameras-dome-e-bullet-6.png'
  },
  {
    id: 7,
    title: 'Como o sensor PIR detecta movimento',
    image: '/amostras/amostra-07.png',
    fallback: 'https://i.postimg.cc/SNW9MnXP/Como-o-sensor-PIR-detecta-movimento-7.png'
  },
  {
    id: 8,
    title: 'Contato magnético em portas e janelas',
    image: '/amostras/amostra-08.png',
    fallback: 'https://i.postimg.cc/WbMZkdDK/Contato-magnetico-em-portas-e-janelas-8.png'
  },
  {
    id: 9,
    title: 'Central de alarme e seus elementos',
    image: '/amostras/amostra-09.png',
    fallback: 'https://i.postimg.cc/pXDjFm90/Central-de-alarme-e-seus-elementos-9.png'
  },
  {
    id: 10,
    title: 'Sirenes e sinalização para sistemas de alarme',
    image: '/amostras/amostra-10.png',
    fallback: 'https://i.postimg.cc/zXnhgyLP/Sirenes-e-sinalizacao-para-sistemas-de-alarme-10.png'
  },
  {
    id: 11,
    title: 'Reconhecimento visual de cabos e conectores',
    image: '/amostras/amostra-11.png',
    fallback: 'https://i.postimg.cc/RVctHW3X/Reconhecimento-visual-de-cabos-e-conectores-11.png'
  },
  {
    id: 12,
    title: 'PoE: dados e energia no mesmo cabo',
    image: '/amostras/amostra-12.png',
    fallback: 'https://i.postimg.cc/sDpWhMBP/Po-E-dados-e-energia-no-mesmo-cabo-12.png'
  },
  {
    id: 13,
    title: 'Gravação e armazenamento de imagens',
    image: '/amostras/amostra-13.png',
    fallback: 'https://i.postimg.cc/Qxp7TFBk/Gravacao-e-armazenamento-de-imagens-13.png'
  },
  {
    id: 14,
    title: 'Elementos do controle de acesso',
    image: '/amostras/amostra-14.png',
    fallback: 'https://i.postimg.cc/Nf1XHKyk/Elementos-do-controle-de-acesso-14.png'
  },
  {
    id: 15,
    title: 'Glossário visual de CFTV e alarmes',
    image: '/amostras/amostra-15.png',
    fallback: 'https://i.postimg.cc/wThNm1tk/Glossario-visual-de-CFTV-e-alarmes-15.png'
  }
];

interface RealSamplesProps {
  onScrollToPlans: () => void;
}

export const RealSamples: React.FC<RealSamplesProps> = ({ onScrollToPlans }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomedSample, setZoomedSample] = useState<RealSampleItem | null>(null);

  // Auto-scroll continuous loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 1.1; // pixels per frame

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Duplicate items for infinite seamless scroll
  const carouselItems = [...REAL_SAMPLES_LIST, ...REAL_SAMPLES_LIST];

  return (
    <section className="py-14 md:py-20 bg-slate-50/70 border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-3">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60 inline-block">
            AMOSTRAS DO MATERIAL
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            Amostras reais do material
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Confira mapas ilustrados que você recebe — prontos para consultar no trabalho, revisar na hora e estudar.
          </p>
        </div>

      </div>

      {/* Infinite Horizontal Carousel Container */}
      <div 
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-2 px-4 sm:px-8 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollBehavior: 'auto' }}
      >
        {carouselItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            onClick={() => setZoomedSample(item)}
            className="w-[230px] sm:w-[270px] md:w-[290px] shrink-0 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-200 overflow-hidden group cursor-pointer"
          >
            {/* Vertical Sheet Image without any caption bar */}
            <div className="relative aspect-[3/4.2] overflow-hidden flex items-center justify-center bg-slate-100">
              <img
                src={item.image}
                onError={(e) => {
                  e.currentTarget.src = item.fallback;
                }}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Centered CTA Button Below Carousel */}
      <div className="mt-8 sm:mt-10 flex justify-center px-4">
        <button
          onClick={onScrollToPlans}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-150 cursor-pointer group"
        >
          <span>Quero acessar todos os guias!</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Full-Screen Zoom Modal */}
      {zoomedSample && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setZoomedSample(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
              <div className="font-bold text-slate-900 text-sm sm:text-base line-clamp-1">
                {zoomedSample.title}
              </div>
              <button
                onClick={() => setZoomedSample(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-2 sm:p-4 bg-slate-900 overflow-y-auto flex items-center justify-center flex-1">
              <img
                src={zoomedSample.image}
                onError={(e) => {
                  e.currentTarget.src = zoomedSample.fallback;
                }}
                alt={zoomedSample.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Página em alta definição dos 120 Guias Visuais
              </span>
              <button
                onClick={() => {
                  setZoomedSample(null);
                  onScrollToPlans();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
              >
                VER PLANOS DE ACESSO
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

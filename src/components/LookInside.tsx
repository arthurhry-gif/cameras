import React, { useRef, useState, useEffect } from 'react';
import { X, Maximize2, ArrowRight } from 'lucide-react';

export interface InsideMaterialItem {
  id: string;
  title: string;
  image: string;
  fallback: string;
}

export const INSIDE_MATERIAL_ITEMS: InsideMaterialItem[] = [
  { id: '01', title: 'Área de interesse e linha virtual', image: '/dentro-material/item-01.webp', fallback: 'https://i.postimg.cc/cr0LsvXQ/Area-de-interesse-e-linha-virtual-25.png' },
  { id: '02', title: 'Armazenamento HDD, SSD e cartão', image: '/dentro-material/item-02.webp', fallback: 'https://i.postimg.cc/yJM72xD4/Armazenamento-HDD-SSD-e-cartao-12.png' },
  { id: '03', title: 'Áudio em câmeras, microfone e captação', image: '/dentro-material/item-03.webp', fallback: 'https://i.postimg.cc/bG7q4rZq/Audio-em-cameras-microfone-e-captacao-3.png' },
  { id: '04', title: 'Banda Ethernet e largura de banda', image: '/dentro-material/item-04.webp', fallback: 'https://i.postimg.cc/67kBFq84/Banda-Ethernet-e-largura-de-banda-9.png' },
  { id: '05', title: 'Bateria de backup: função e limites', image: '/dentro-material/item-05.webp', fallback: 'https://i.postimg.cc/xJL9QQm8/Bateria-de-backup-funcao-e-limites-18.png' },
  { id: '06', title: 'Botão de pânico e acionadores', image: '/dentro-material/item-06.webp', fallback: 'https://i.postimg.cc/R6wvmmtJ/Botao-de-panico-e-acionadores-17.png' },
  { id: '07', title: 'Caixa de passagem e conexões organizadas', image: '/dentro-material/item-07.webp', fallback: 'https://i.postimg.cc/YhMCpv8J/Caixa-de-passagem-e-conexoes-organizadas-26.png' },
  { id: '08', title: 'Checklist visual: reconheça o equipamento', image: '/dentro-material/item-08.webp', fallback: 'https://i.postimg.cc/TKP2DBzH/Checklist-visual-reconheca-o-equipamento-30.png' },
  { id: '09', title: 'Como diferenciar BNC, RJ45 e bornes', image: '/dentro-material/item-09.webp', fallback: 'https://i.postimg.cc/xcn10XtL/Como-diferenciar-BNC-RJ45-e-bornes-27.png' },
  { id: '10', title: 'Detecção de movimento: vídeo e análise', image: '/dentro-material/item-10.webp', fallback: 'https://i.postimg.cc/NK0GHWh0/Deteccao-de-movimento-video-e-analise-24.png' },
  { id: '11', title: 'DVR: canais, entradas e compatibilidade', image: '/dentro-material/item-11.webp', fallback: 'https://i.postimg.cc/YvS2WJc2/DVR-canais-entradas-e-compatibilidade-7.png' },
  { id: '12', title: 'Endereço IP na rede de câmeras', image: '/dentro-material/item-12.webp', fallback: 'https://i.postimg.cc/75LP2pvr/Endereco-IP-na-rede-de-cameras-22.png' },
  { id: '13', title: 'Entenda o grau de proteção IP', image: '/dentro-material/item-13.webp', fallback: 'https://i.postimg.cc/S2cm449z/Entenda-o-grau-de-protecao-IP-5.png' },
  { id: '14', title: 'Fonte de alimentação: identificação conceitual', image: '/dentro-material/item-14.webp', fallback: 'https://i.postimg.cc/hX3Dbpg1/Fonte-de-alimentacao-identificacao-conceitual-19.png' },
  { id: '15', title: 'FPS e fluidez do vídeo', image: '/dentro-material/item-15.webp', fallback: 'https://i.postimg.cc/Z9BTfpK6/FPS-e-fluidez-do-video-11.png' },
  { id: '16', title: 'Guia de câmeras fixas e PTZ', image: '/dentro-material/item-16.webp', fallback: 'https://i.postimg.cc/Pp1dHHDY/Guia-de-cameras-fixas-e-PTZ-4.png' },
  { id: '17', title: 'H.264, H.265 e compressão de vídeo', image: '/dentro-material/item-17.webp', fallback: 'https://i.postimg.cc/0M79vvSf/H-264-H-265-e-compressao-de-video-10.png' },
  { id: '18', title: 'Iluminação, contraluz e WDR explicados', image: '/dentro-material/item-18.webp', fallback: 'https://i.postimg.cc/RJ94VY11/Iluminacao-contraluz-e-WDR-explicados-6.png' },
  { id: '19', title: 'Interfone, vídeo porteiro e CFTV', image: '/dentro-material/item-19.webp', fallback: 'https://i.postimg.cc/Tpf3RKCg/Interfone-video-porteiro-e-CFTV-28.png' },
  { id: '20', title: 'NVR: câmeras IP e recursos', image: '/dentro-material/item-20.webp', fallback: 'https://i.postimg.cc/wty6WLTh/NVR-cameras-IP-e-recursos-8.png' },
  { id: '21', title: 'ONVIF e compatibilidade entre marcas', image: '/dentro-material/item-21.webp', fallback: 'https://i.postimg.cc/7CGxB0Y3/ONVIF-e-compatibilidade-entre-marcas-23.png' },
  { id: '22', title: 'Privacidade e uso responsável de câmeras', image: '/dentro-material/item-22.webp', fallback: 'https://i.postimg.cc/Xp4YVrQF/Privacidade-e-uso-responsavel-de-cameras-29.png' },
  { id: '23', title: 'Repetidor e alcance do sinal', image: '/dentro-material/item-23.webp', fallback: 'https://i.postimg.cc/H8HdsN04/Repetidor-e-alcance-do-sinal-16.png' },
  { id: '24', title: 'Roteador e rede local no CFTV', image: '/dentro-material/item-24.webp', fallback: 'https://i.postimg.cc/06M8tD2Z/Roteador-e-rede-local-no-CFTV-21.png' },
  { id: '25', title: 'Sensores com fio e sem fio', image: '/dentro-material/item-25.webp', fallback: 'https://i.postimg.cc/GTrdhfPz/Sensores-com-fio-e-sem-fio-15.png' },
  { id: '26', title: 'Switch de rede, portas PoE e tráfego', image: '/dentro-material/item-26.webp', fallback: 'https://i.postimg.cc/WDBsxzhB/Switch-de-rede-portas-Po-E-e-trafego-20.png' },
  { id: '27', title: 'Tipos de sensor de alarme', image: '/dentro-material/item-27.webp', fallback: 'https://i.postimg.cc/jnKtd16Z/Tipos-de-sensor-de-alarme-13.png' },
  { id: '28', title: 'Visão noturna e iluminação', image: '/dentro-material/item-28.webp', fallback: 'https://i.postimg.cc/5HhfDyXJ/Visao-noturna-e-iluminacao-2.png' },
  { id: '29', title: 'Zonas e setores da central', image: '/dentro-material/item-29.webp', fallback: 'https://i.postimg.cc/xNYnTZGw/Zonas-e-setores-da-central-14.png' }
];

interface LookInsideProps {
  onScrollToPlans?: () => void;
}

export const LookInside: React.FC<LookInsideProps> = ({ onScrollToPlans }) => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);
  const [zoomedItem, setZoomedItem] = useState<InsideMaterialItem | null>(null);

  // Divide the 29 images into two balanced parts with duplication for infinite seamless scroll
  const row1Items = [...INSIDE_MATERIAL_ITEMS.slice(0, 15), ...INSIDE_MATERIAL_ITEMS.slice(0, 15)];
  const row2Items = [...INSIDE_MATERIAL_ITEMS.slice(15), ...INSIDE_MATERIAL_ITEMS.slice(15)];

  // Row 1 continuous auto-scroll (moving to the left)
  useEffect(() => {
    const el = row1Ref.current;
    if (!el) return;

    let animId: number;
    const speed = 1.1;

    const step = () => {
      if (!isPausedRow1 && el) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPausedRow1]);

  // Row 2 continuous auto-scroll (moving in parallel/staggered)
  useEffect(() => {
    const el = row2Ref.current;
    if (!el) return;

    if (el.scrollLeft === 0) {
      el.scrollLeft = 240;
    }

    let animId: number;
    const speed = 1.1;

    const step = () => {
      if (!isPausedRow2 && el) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPausedRow2]);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/70 inline-block">
            PRÉVIAS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            Veja por dentro do material
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Amostras reais dos guias visuais que você recebe ao garantir o acesso.
          </p>
        </div>

      </div>

      {/* Dual Row Carousels (Two Tiers) */}
      <div className="space-y-4 sm:space-y-6">
        
        {/* Part 1: First Row Carousel */}
        <div 
          ref={row1Ref}
          onMouseEnter={() => setIsPausedRow1(true)}
          onMouseLeave={() => setIsPausedRow1(false)}
          onTouchStart={() => setIsPausedRow1(true)}
          onTouchEnd={() => setIsPausedRow1(false)}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-1 px-4 sm:px-8 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollBehavior: 'auto' }}
        >
          {row1Items.map((item, idx) => (
            <div
              key={`r1-${item.id}-${idx}`}
              onClick={() => setZoomedItem(item)}
              className="w-[220px] sm:w-[260px] md:w-[280px] shrink-0 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-500 transition-all duration-200 overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[3/4.2] overflow-hidden flex items-center justify-center bg-slate-50">
                <img
                  src={item.image}
                  onError={(e) => {
                    if (e.currentTarget.src.endsWith('.webp')) {
                      e.currentTarget.src = item.image.replace('.webp', '.png');
                    } else {
                      e.currentTarget.src = item.fallback;
                    }
                  }}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  width={280}
                  height={392}
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4 text-teal-300" />
                  <span>Ampliar guia</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Second Row Carousel */}
        <div 
          ref={row2Ref}
          onMouseEnter={() => setIsPausedRow2(true)}
          onMouseLeave={() => setIsPausedRow2(false)}
          onTouchStart={() => setIsPausedRow2(true)}
          onTouchEnd={() => setIsPausedRow2(false)}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-1 px-4 sm:px-8 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollBehavior: 'auto' }}
        >
          {row2Items.map((item, idx) => (
            <div
              key={`r2-${item.id}-${idx}`}
              onClick={() => setZoomedItem(item)}
              className="w-[220px] sm:w-[260px] md:w-[280px] shrink-0 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-500 transition-all duration-200 overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[3/4.2] overflow-hidden flex items-center justify-center bg-slate-50">
                <img
                  src={item.image}
                  onError={(e) => {
                    if (e.currentTarget.src.endsWith('.webp')) {
                      e.currentTarget.src = item.image.replace('.webp', '.png');
                    } else {
                      e.currentTarget.src = item.fallback;
                    }
                  }}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  width={280}
                  height={392}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4 text-teal-300" />
                  <span>Ampliar guia</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Optional CTA Below */}
      {onScrollToPlans && (
        <div className="mt-10 sm:mt-12 flex justify-center px-4">
          <button
            onClick={onScrollToPlans}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-150 cursor-pointer group"
          >
            <span>Quero acessar todos os guias!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* Full-Screen Zoom Modal */}
      {zoomedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setZoomedItem(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
              <div className="font-bold text-slate-900 text-sm sm:text-base line-clamp-1">
                {zoomedItem.title}
              </div>
              <button
                onClick={() => setZoomedItem(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-2 sm:p-4 bg-slate-900 overflow-y-auto flex items-center justify-center flex-1">
              <img
                src={zoomedItem.image}
                onError={(e) => {
                  e.currentTarget.src = zoomedItem.fallback;
                }}
                alt={zoomedItem.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Página em alta definição dos 120 Guias Visuais
              </span>
              {onScrollToPlans && (
                <button
                  onClick={() => {
                    setZoomedItem(null);
                    onScrollToPlans();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
                >
                  VER PLANOS DE ACESSO
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

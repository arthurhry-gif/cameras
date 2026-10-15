import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Sparkles, BookOpen } from 'lucide-react';
import { FEATURED_PREVIEWS, GuidePreviewItem } from '../data/guidesData';
import { TechnicalSchematic } from './TechnicalSchematics';

interface FeaturedPreviewsProps {
  onSelectGuide: (guide: GuidePreviewItem) => void;
}

export const FeaturedPreviews: React.FC<FeaturedPreviewsProps> = ({ onSelectGuide }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-block mb-3">
              GUIAS VISUAIS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Veja algumas páginas do Atlas
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Uma amostra dos assuntos organizados nos 120 guias.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <span className="text-xs text-slate-400 font-medium mr-2 hidden sm:inline">
              Arraste ou use as setas
            </span>
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2.5 rounded-lg border transition-all ${
                canScrollLeft 
                  ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 shadow-xs cursor-pointer' 
                  : 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Voltar prévia anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2.5 rounded-lg border transition-all ${
                canScrollRight 
                  ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 shadow-xs cursor-pointer' 
                  : 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Avançar próxima prévia"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {FEATURED_PREVIEWS.map((item) => (
            <div 
              key={item.id}
              onClick={() => onSelectGuide(item)}
              className="w-[85vw] sm:w-[360px] md:w-[400px] shrink-0 snap-start bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                    {item.guideNumber}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              {/* Card Visual Schematic Body */}
              <div className="p-3 bg-slate-950 relative overflow-hidden">
                <TechnicalSchematic type={item.schematicType} className="w-full text-[10px]" />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4" />
                  <span>Clique para ampliar o guia</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="text-[11px] text-slate-500">
                  Exemplo de layout conceitual
                </span>
                <span className="text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Ver detalhes &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Disclaimer Banner below carousel */}
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-500">
            * Exemplos visuais representativos da organização técnica do material.
          </p>
        </div>

      </div>
    </section>
  );
};

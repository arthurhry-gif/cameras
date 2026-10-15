import React from 'react';
import { X, CheckCircle2, BookOpen, Download, Layers } from 'lucide-react';
import { GuidePreviewItem } from '../data/guidesData';
import { TechnicalSchematic } from './TechnicalSchematics';

interface GuideModalProps {
  guide: GuidePreviewItem | null;
  onClose: () => void;
  onSelectPlan: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ guide, onClose, onSelectPlan }) => {
  if (!guide) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/80">
              {guide.guideNumber}
            </span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {guide.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Fechar prévia"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {guide.title}
            </h3>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600 font-medium">
              {guide.subtitle}
            </p>
          </div>

          {/* Schematic Preview Area */}
          <div className="rounded-xl overflow-hidden shadow-inner border border-slate-200">
            <TechnicalSchematic type={guide.schematicType} className="w-full" isDetailed={true} />
          </div>

          {/* Detailed explanation */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              Conceito Abordado no Guia
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {guide.description}
            </p>
          </div>

          {/* Key points */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              Tópicos e Elementos Visuais Desta Página
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {guide.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Banner inside modal */}
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <div className="text-xs font-semibold text-blue-900">
                Esta é 1 das 120 páginas organizadas para seus estudos
              </div>
              <div className="text-xs text-blue-700 mt-0.5">
                Material digital em alta resolução para celular, tablet ou computador.
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectPlan();
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors shadow-sm shrink-0"
            >
              VER PLANOS DE ACESSO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Shield, FileText, Mail, HelpCircle, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'contact' | 'support' | null>(null);

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Brand info */}
          <div className="md:col-span-7 space-y-3">
            <div className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              120 Guias Visuais para Instaladores de Câmeras e Alarmes
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Material digital de apoio educacional.
            </p>
            <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] sm:text-xs text-slate-400 leading-relaxed font-mono">
              Não substitui formação profissional, treinamento prático, documentação dos fabricantes, procedimentos de segurança ou normas aplicáveis.
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                Informações e Suporte
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <button 
                    onClick={() => setActiveModal('privacy')} 
                    className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                  >
                    Política de Privacidade
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('terms')} 
                    className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                  >
                    Termos de Uso
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('contact')} 
                    className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                  >
                    Contato com o Produtor
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('support')} 
                    className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                  >
                    Suporte ao Comprador
                  </button>
                </li>
              </ul>
            </div>

            <div className="mt-6 text-[11px] text-slate-500">
              Ambiente seguro para aquisição e download de materiais digitais.
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} 120 Guias Visuais. Todos os direitos reservados.
          </div>
          <div className="text-[11px]">
            Desenvolvido para estudo visual e familiarização técnica.
          </div>
        </div>

      </div>

      {/* Informative Modal Dialog for Footer Links */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white text-slate-900 rounded-xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'privacy' && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Política de Privacidade
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Os dados fornecidos durante a aquisição do produto digital são processados exclusivamente de acordo com a LGPD e as políticas de segurança da plataforma de checkout para envio de links de acesso, notas e avisos do pedido.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nenhum dado é comercializado com terceiros.
                </p>
              </div>
            )}

            {activeModal === 'terms' && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Termos de Uso
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  O produto “120 Guias Visuais para Instaladores de Câmeras e Alarmes” é um material estritamente educacional para apoio ao estudo visual. O material pode ser impresso exclusivamente para uso pessoal do comprador. É proibida a redistribuição comercial não autorizada.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  O material não substitui formação profissional técnica, normas vigentes (ex: ABNT NBR 5410) ou manuais de fabricantes de equipamentos.
                </p>
              </div>
            )}

            {activeModal === 'contact' && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  Contato
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dúvidas sobre o conteúdo dos 120 Guias Visuais ou sugestões de melhoria podem ser encaminhadas diretamente ao canal de atendimento educacional:
                </p>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-blue-700">
                  contato@guiasvisuais.com.br
                </div>
              </div>
            )}

            {activeModal === 'support' && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  Suporte ao Comprador
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Caso necessite de reenvio de acesso ao material após a confirmação de pagamento, o link é enviado automaticamente ao seu e-mail cadastrado na plataforma ou poderá ser solicitado informando o código da transação.
                </p>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900">
                  Horário de atendimento: Segunda a Sexta, das 09h às 18h.
                </div>
              </div>
            )}

            <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Zap, Lock, CreditCard, QrCode } from 'lucide-react';

interface CheckoutModalProps {
  planName: string | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ planName, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!planName) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (planName === 'Plano Completo') {
      window.location.href = 'https://ggcheckout.app/checkout/v3/c54ff667-a7e6-47bd-a1d5-cbcbb0baa9a5';
      return;
    }
    if (planName === 'Plano Básico') {
      window.location.href = 'https://ggcheckout.app/checkout/v3/8b4fc33f-d642-4113-af03-1bc5b07460aa';
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0c384e] px-6 py-4 text-white flex items-center justify-between border-b border-teal-500/30">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-200">Checkout Seguro</span>
            <h3 className="text-lg font-bold leading-tight">{planName}</h3>
            <span className="text-xs font-semibold text-teal-300">
              {planName === 'Plano Básico' ? 'R$ 26,90 à vista' : 'R$ 36,90 à vista (ou 12x R$ 3,69)'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-blue-50/80 border border-blue-100 rounded-xl text-xs text-blue-900 leading-relaxed">
                <strong>Acesso digital imediato:</strong> Seus dados de acesso e download serão enviados imediatamente após a confirmação.
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Seu e-mail para receber o acesso:
                </label>
                <input
                  type="email"
                  required
                  placeholder="exemplo@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Forma de Pagamento preferida:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 border border-blue-600 bg-blue-50/50 rounded-xl flex items-center gap-2 font-semibold text-blue-900">
                    <QrCode className="w-4 h-4 text-blue-600" />
                    <span>PIX (Imediato)</span>
                  </div>
                  <div className="p-3 border border-slate-200 hover:border-slate-300 rounded-xl flex items-center gap-2 font-medium text-slate-700">
                    <CreditCard className="w-4 h-4 text-slate-500" />
                    <span>Cartão de Crédito</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0f766e] hover:bg-[#115e59] active:bg-[#134e4a] text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-teal-900/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>CONTINUAR PARA O PAGAMENTO</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-400">
                Pagamento seguro • Criptografia SSL 256-bit
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Redirecionando para a plataforma...</h4>
              <p className="text-xs text-slate-600">
                O link para <strong>{email}</strong> será gerado na plataforma oficial de pagamento (Hotmart / Kiwify).
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl"
              >
                Voltar à página
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

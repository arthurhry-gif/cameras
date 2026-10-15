import React, { useState } from 'react';
import { 
  Video, 
  ShieldAlert, 
  Activity, 
  HardDrive, 
  Network, 
  Cpu, 
  ChevronDown, 
  Check, 
  Layers
} from 'lucide-react';

interface AreaItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  topics: string[];
}

export const AREAS_DATA: AreaItem[] = [
  {
    id: 'area-01',
    number: '01',
    title: 'Câmeras de Segurança e CFTV',
    description: 'Captação de imagem, tipos de lentes, formatos de câmera e comparativos de tecnologia.',
    icon: <Video className="w-4 h-4 text-teal-800" />,
    topics: [
      'Anatomia de um sistema analógico HD (captação, transmissão e gravação)',
      'Câmeras IP vs Analógicas: fluxo de sinal elétrico vs pacotes digitais',
      'Modelos de câmeras: Dome, Bullet, Speed Dome (PTZ) e locais recomendados',
      'Lentes, distância focal (2.8mm, 3.6mm, 6mm) e ângulo de visão (FOV)',
      'Visão noturna com infravermelho (IR), sensor CMOS e filtro mecânico IRCut'
    ]
  },
  {
    id: 'area-02',
    number: '02',
    title: 'Sistemas de Alarme e Centrais',
    description: 'Arquitetura de centrais de alarme, zonas de proteção, sirenes e circuitos supervisionados.',
    icon: <ShieldAlert className="w-4 h-4 text-teal-800" />,
    topics: [
      'Estrutura completa de uma central de alarme residencial e predial',
      'Zonas com fio vs Zonas sem fio e conceitos de particionamento de áreas',
      'Ligação com resistor de fim de linha (EOL / DEOL) e proteção contra sabotagem (Tamper)',
      'Sirenes de sinalização sonora, consumo de corrente e limites de disparo',
      'Bateria selada 12V 7Ah, fontes nobreak e manutenção da alimentação'
    ]
  },
  {
    id: 'area-03',
    number: '03',
    title: 'Sensores e Detecção',
    description: 'Princípios físicos de detecção, zonas de cobertura e prevenção de disparos falsos.',
    icon: <Activity className="w-4 h-4 text-teal-800" />,
    topics: [
      'Como o sensor PIR detecta calor corporal em movimento (lente Fresnel e feixes)',
      'Sensores de dupla tecnologia: PIR + Micro-ondas e imunidade a ruídos',
      'Função Pet Immunity (15kg / 20kg / 30kg) e altura correta de instalação',
      'Contatos magnéticos (reed switch) para portas, janelas e portões pesados',
      'Sensores ativos de barreira infravermelha (IVA) para proteção perimetral'
    ]
  },
  {
    id: 'area-04',
    number: '04',
    title: 'Gravadores e Armazenamento',
    description: 'Estrutura de DVRs, NVRs, discos dedicados e modos de gravação contínua.',
    icon: <HardDrive className="w-4 h-4 text-teal-800" />,
    topics: [
      'Diferenças fundamentais entre DVR, NVR e gravadores híbridos XVR',
      'Painel traseiro: entradas BNC vs portas de rede RJ45, saídas HDMI e VGA',
      'Discos rígidos de vigilância 24/7 (Surveillance) vs HDs convencionais de computador',
      'Modos de gravação: contínua, por detecção de movimento e por agenda horária',
      'Codecs de compressão de vídeo (H.264, H.265, H.265+) e cálculo de bitrate'
    ]
  },
  {
    id: 'area-05',
    number: '05',
    title: 'Redes IP e Tecnologia PoE',
    description: 'Conectividade, alimentação pelo cabo de dados e protocolos essenciais de comunicação.',
    icon: <Network className="w-4 h-4 text-teal-800" />,
    topics: [
      'Padrões PoE 802.3af (15.4W) e 802.3at PoE+ (30W) e cálculo de Power Budget',
      'Endereçamento IPv4 estático, servidor DHCP, máscara de sub-rede e gateway',
      'Switches não gerenciáveis vs Switches PoE dedicados para redes de CFTV',
      'Protocolo universal ONVIF (Profile S, T e G) para câmeras multimarcas',
      'Acesso remoto seguro: nuvem P2P por QR Code vs direcionamento de portas e DDNS'
    ]
  },
  {
    id: 'area-06',
    number: '06',
    title: 'Cabos, Conexões e Acesso',
    description: 'Identificação visual de cabos, conectores, fontes de alimentação e travas elétricas.',
    icon: <Cpu className="w-4 h-4 text-teal-800" />,
    topics: [
      'Cabo coaxial RG59 / bipolar 4mm e cuidados práticos com atenuação de sinal',
      'Cabo par trançado UTP (Cat5e / Cat6) e padrões de conectorização T568A e T568B',
      'Conectores BNC (compressão, mola e borne) e conectores P4 macho/fêmea',
      'Uso correto de baluns passivos de vídeo e casamento de impedância (75Ω / 100Ω)',
      'Fechaduras eletroímã, solenoides, botoeiras, fontes com temporizador e nobreak'
    ]
  }
];

export const AreasList: React.FC = () => {
  const [openArea, setOpenArea] = useState<string | null>(null);

  const toggleArea = (id: string) => {
    setOpenArea(prev => prev === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/70 inline-block">
            CONTEÚDO DO MATERIAL
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            6 grandes áreas técnicas organizadas em mapas visuais
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Cada mapa conecta componentes, diagramas de ligação, tipos de cabos, testes e conexões — do jeito que você encontra no dia a dia.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 font-medium pt-1">
            Clique para expandir e ver os conteúdos detalhados de cada área.
          </p>
        </div>

        {/* 6 Areas Accordion Grid (2 rows x 3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {AREAS_DATA.map((area) => {
            const isOpen = openArea === area.id;

            return (
              <div
                key={area.id}
                className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-200 shadow-2xs overflow-hidden ${
                  isOpen 
                    ? 'border-teal-600 shadow-md ring-1 ring-teal-600/30' 
                    : 'border-slate-200/90 hover:border-teal-500/60 hover:shadow-xs'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleArea(area.id)}
                  className="w-full p-3.5 sm:p-4 flex items-center justify-between gap-3 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    {/* Icon container */}
                    <div className="w-9 h-9 rounded-xl bg-teal-50/90 border border-teal-100 flex items-center justify-center shrink-0">
                      {area.icon}
                    </div>

                    {/* Number badge */}
                    <div className="w-7 h-7 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                      {area.number}
                    </div>

                    {/* Area Title */}
                    <span className="font-bold text-slate-900 text-sm sm:text-[15px] truncate">
                      {area.title}
                    </span>
                  </div>

                  {/* Chevron icon */}
                  <div className={`p-1 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-teal-700' : ''}`}>
                    <ChevronDown className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </button>

                {/* Accordion Body Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      {area.description}
                    </p>

                    <div className="space-y-2">
                      <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider block">
                        Mapas e guias inclusos nesta área:
                      </span>
                      {area.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                          <Check className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

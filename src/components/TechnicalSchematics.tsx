import React from 'react';

interface SchematicProps {
  type: string;
  className?: string;
  isDetailed?: boolean;
}

export const TechnicalSchematic: React.FC<SchematicProps> = ({ type, className = '', isDetailed = false }) => {
  switch (type) {
    case 'cftv_basic':
      return (
        <div className={`bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-xs select-none border border-slate-700/60 overflow-hidden ${className}`}>
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <span className="text-blue-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              CFTV-01 · Fluxo de Sinal Analógico HD
            </span>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">75 OHMS · 12V DC</span>
          </div>

          {/* Schematic Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center relative py-2">
            {/* Stage 1: Câmera */}
            <div className="bg-slate-800/90 border border-slate-700 rounded p-2.5 flex flex-col items-center justify-between shadow-sm">
              <div className="text-[10px] text-blue-400 font-bold mb-1">CAPTAÇÃO</div>
              <div className="w-10 h-10 rounded-full bg-blue-950/80 border border-blue-500/50 flex items-center justify-center my-1 text-blue-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="font-sans font-bold text-slate-200 text-xs">Câmera HD</div>
              <div className="text-[10px] text-slate-400">Sensor CMOS + Lente</div>
              <div className="mt-2 text-[9px] bg-blue-900/40 text-blue-300 px-1.5 py-0.5 rounded w-full">Saída BNC + Plug P4</div>
            </div>

            {/* Stage 2: Cabeamento e Alimentação */}
            <div className="bg-slate-800/90 border border-slate-700 rounded p-2.5 flex flex-col items-center justify-between shadow-sm">
              <div className="text-[10px] text-emerald-400 font-bold mb-1">TRANSMISSÃO</div>
              <div className="w-10 h-10 rounded bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center my-1 text-emerald-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="font-sans font-bold text-slate-200 text-xs">Cabo Bipolar / UTP</div>
              <div className="text-[10px] text-slate-400">Sinal Vídeo + 12V DC</div>
              <div className="mt-2 text-[9px] bg-emerald-900/40 text-emerald-300 px-1.5 py-0.5 rounded w-full">Fonte Central Estabilizada</div>
            </div>

            {/* Stage 3: DVR */}
            <div className="bg-slate-800/90 border border-slate-700 rounded p-2.5 flex flex-col items-center justify-between shadow-sm">
              <div className="text-[10px] text-amber-400 font-bold mb-1">PROCESSAMENTO</div>
              <div className="w-10 h-10 rounded bg-amber-950/80 border border-amber-500/50 flex items-center justify-center my-1 text-amber-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div className="font-sans font-bold text-slate-200 text-xs">Gravador DVR</div>
              <div className="text-[10px] text-slate-400">Conversor A/D + HD SATA</div>
              <div className="mt-2 text-[9px] bg-amber-900/40 text-amber-300 px-1.5 py-0.5 rounded w-full">Compressão H.265+</div>
            </div>

            {/* Stage 4: Monitor e App */}
            <div className="bg-slate-800/90 border border-slate-700 rounded p-2.5 flex flex-col items-center justify-between shadow-sm">
              <div className="text-[10px] text-purple-400 font-bold mb-1">EXIBIÇÃO</div>
              <div className="w-10 h-10 rounded bg-purple-950/80 border border-purple-500/50 flex items-center justify-center my-1 text-purple-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="font-sans font-bold text-slate-200 text-xs">Monitor / Nuvem</div>
              <div className="text-[10px] text-slate-400">HDMI / VGA & App P2P</div>
              <div className="mt-2 text-[9px] bg-purple-900/40 text-purple-300 px-1.5 py-0.5 rounded w-full">Visualização Ao Vivo</div>
            </div>
          </div>

          {/* Technical Note Foot */}
          <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex flex-wrap items-center justify-between gap-1">
            <span>• Conexão Coaxial: BNC Macho com pino dourado</span>
            <span className="text-blue-300 font-sans">Guia de Apoio Visual Didático</span>
          </div>
        </div>
      );

    case 'ip_vs_analog':
      return (
        <div className={`bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-xs select-none border border-slate-700/60 ${className}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">CFTV-02 · Câmera Analógica vs Câmera IP</span>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">DIGITALIZAÇÃO</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Analógica */}
            <div className="border border-blue-900/60 bg-blue-950/20 rounded p-3">
              <div className="flex items-center justify-between text-blue-400 font-bold mb-2 pb-1 border-b border-blue-900/40">
                <span>CÂMERA ANALÓGICA HD</span>
                <span className="text-[10px] text-slate-400 font-normal">AHD/HDCVI/HDTVI</span>
              </div>
              <div className="space-y-1.5 text-[11px] text-slate-300 font-sans">
                <div className="flex items-start gap-1.5">
                  <span className="text-blue-400 font-bold">1.</span>
                  <span>Captura sensor e envia sinal elétrico modulado</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-blue-400 font-bold">2.</span>
                  <span>Transmissão via Cabo Coaxial 75Ω ou Par Trançado c/ Balun</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-blue-400 font-bold">3.</span>
                  <span>Conversão digital ocorre <strong>no DVR</strong></span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-blue-400 font-bold">4.</span>
                  <span>Alimentação por par elétrico 12V DC separado</span>
                </div>
              </div>
            </div>

            {/* IP */}
            <div className="border border-emerald-900/60 bg-emerald-950/20 rounded p-3">
              <div className="flex items-center justify-between text-emerald-400 font-bold mb-2 pb-1 border-b border-emerald-900/40">
                <span>CÂMERA IP (DIGITAL)</span>
                <span className="text-[10px] text-slate-400 font-normal">TCP/IP · ONVIF</span>
              </div>
              <div className="space-y-1.5 text-[11px] text-slate-300 font-sans">
                <div className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">1.</span>
                  <span>Sensor + microcomputador interno processam e codificam</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">2.</span>
                  <span>Transmissão em pacotes de rede (Ethernet RJ45)</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">3.</span>
                  <span>Possui <strong>endereço IP próprio</strong> (ex: 192.168.1.108)</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">4.</span>
                  <span>Alimentação pode ser via cabo de rede (PoE 802.3af)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'dvr_nvr':
      return (
        <div className={`bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-xs select-none border border-slate-700/60 ${className}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">GRAVAÇÃO · DVR vs NVR</span>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">PAINEL TRASEIRO</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-200">
            {/* DVR Back Panel Mock */}
            <div className="bg-slate-800/80 p-3 rounded border border-slate-700">
              <div className="text-xs font-bold text-amber-400 mb-1">DVR (DIGITAL VIDEO RECORDER)</div>
              <p className="text-[11px] text-slate-300 font-sans mb-3">Recebe sinal analógico e faz a digitalização interna no aparelho.</p>
              
              <div className="bg-slate-950 p-2.5 rounded border border-slate-800 flex items-center justify-around gap-1">
                {/* BNC ports */}
                <div className="flex gap-1.5">
                  <div className="w-5 h-5 rounded-full border-2 border-amber-500 bg-slate-900 flex items-center justify-center text-[7px] font-bold text-amber-400">CH1</div>
                  <div className="w-5 h-5 rounded-full border-2 border-amber-500 bg-slate-900 flex items-center justify-center text-[7px] font-bold text-amber-400">CH2</div>
                  <div className="w-5 h-5 rounded-full border-2 border-amber-500 bg-slate-900 flex items-center justify-center text-[7px] font-bold text-amber-400">CH3</div>
                  <div className="w-5 h-5 rounded-full border-2 border-amber-500 bg-slate-900 flex items-center justify-center text-[7px] font-bold text-amber-400">CH4</div>
                </div>
                <div className="h-6 w-px bg-slate-700"></div>
                <div className="text-[8px] bg-slate-800 px-1 py-1 rounded text-slate-400">HDMI / VGA</div>
                <div className="text-[8px] bg-blue-900/60 px-1 py-1 rounded text-blue-300">LAN RJ45</div>
              </div>
              <div className="text-[9px] text-slate-400 mt-2 font-sans">Portas BNC dedicadas por canal físico.</div>
            </div>

            {/* NVR Back Panel Mock */}
            <div className="bg-slate-800/80 p-3 rounded border border-slate-700">
              <div className="text-xs font-bold text-cyan-400 mb-1">NVR (NETWORK VIDEO RECORDER)</div>
              <p className="text-[11px] text-slate-300 font-sans mb-3">Recebe fluxos de vídeo já digitalizados e comprimidos pela rede.</p>
              
              <div className="bg-slate-950 p-2.5 rounded border border-slate-800 flex items-center justify-around gap-1">
                {/* RJ45 PoE ports */}
                <div className="flex gap-1">
                  <div className="w-5 h-4 rounded-sm border border-cyan-400 bg-slate-900 flex items-center justify-center text-[7px] font-bold text-cyan-300">P1</div>
                  <div className="w-5 h-4 rounded-sm border border-cyan-400 bg-slate-900 flex items-center justify-center text-[7px] font-bold text-cyan-300">P2</div>
                  <div className="w-5 h-4 rounded-sm border border-cyan-400 bg-slate-900 flex items-center justify-center text-[7px] font-bold text-cyan-300">P3</div>
                  <div className="w-5 h-4 rounded-sm border border-cyan-400 bg-slate-900 flex items-center justify-center text-[7px] font-bold text-cyan-300">P4</div>
                </div>
                <div className="h-6 w-px bg-slate-700"></div>
                <div className="text-[8px] bg-slate-800 px-1 py-1 rounded text-slate-400">HDMI 4K</div>
                <div className="text-[8px] bg-cyan-900/60 px-1 py-1 rounded text-cyan-300">UPLINK</div>
              </div>
              <div className="text-[9px] text-slate-400 mt-2 font-sans">Sem portas BNC; comunicação 100% digital IP.</div>
            </div>
          </div>
        </div>
      );

    case 'connectors':
      return (
        <div className={`bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-xs select-none border border-slate-700/60 ${className}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">CONEXÕES · BNC, P4 & RJ45</span>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">PINAGEM</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            <div className="bg-slate-800/80 p-2.5 rounded border border-slate-700">
              <div className="font-bold text-blue-400 text-[11px] mb-1">CONECTOR BNC</div>
              <div className="text-[10px] text-slate-300 font-sans space-y-1">
                <div>• Pino central: Sinal de vídeo (+)</div>
                <div>• Carcaça/Malha: Terra/Blindagem (-)</div>
                <div>• Tipos: Borne, Mola e Compressão</div>
              </div>
            </div>

            <div className="bg-slate-800/80 p-2.5 rounded border border-slate-700">
              <div className="font-bold text-amber-400 text-[11px] mb-1">PLUGUE P4 BORNE</div>
              <div className="text-[10px] text-slate-300 font-sans space-y-1">
                <div>• Borne (+): 12V Positivo (fio vermelho)</div>
                <div>• Borne (-): 0V / GND (fio preto)</div>
                <div>• Pino 2.1mm x 5.5mm padrão</div>
              </div>
            </div>

            <div className="bg-slate-800/80 p-2.5 rounded border border-slate-700">
              <div className="font-bold text-emerald-400 text-[11px] mb-1">CONECTOR RJ45</div>
              <div className="text-[10px] text-slate-300 font-sans space-y-1">
                <div>• Padrão T568A: V-b, V, L-b, A, A-b, L, M-b, M</div>
                <div>• Padrão T568B: L-b, L, V-b, A, A-b, V, M-b, M</div>
                <div>• 8 vias para dados Ethernet/PoE</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'pir_sensor':
      return (
        <div className={`bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-xs select-none border border-slate-700/60 ${className}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">ALARME · Sensor Infravermelho Passivo (PIR)</span>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">DETECÇÃO</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <div className="space-y-2 text-[11px] font-sans text-slate-300">
              <div className="bg-slate-800/90 p-2 rounded border border-slate-700">
                <span className="font-bold text-blue-300">Lente de Fresnel:</span> Divide o ambiente em feixes cônicos de detecção angular (90° a 110°).
              </div>
              <div className="bg-slate-800/90 p-2 rounded border border-slate-700">
                <span className="font-bold text-emerald-300">Pirossensor Dual:</span> Detecta a variação do calor corporal humano (onda longa 8-14µm) cruzando os feixes.
              </div>
            </div>

            {/* Terminal Block Simulation */}
            <div className="bg-slate-950 p-3 rounded border border-slate-800 font-mono">
              <div className="text-[9px] text-slate-400 uppercase tracking-widest text-center mb-2">BORNEIRA DO SENSOR</div>
              <div className="grid grid-cols-4 gap-1 text-center">
                <div className="bg-red-950/70 border border-red-800 rounded p-1">
                  <div className="text-[10px] text-red-400 font-bold">+12V</div>
                  <div className="text-[8px] text-slate-400">Alim.</div>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded p-1">
                  <div className="text-[10px] text-slate-300 font-bold">GND</div>
                  <div className="text-[8px] text-slate-400">Terra</div>
                </div>
                <div className="bg-amber-950/70 border border-amber-800 rounded p-1">
                  <div className="text-[10px] text-amber-400 font-bold">ALARM</div>
                  <div className="text-[8px] text-slate-400">NF (1)</div>
                </div>
                <div className="bg-amber-950/70 border border-amber-800 rounded p-1">
                  <div className="text-[10px] text-amber-400 font-bold">ALARM</div>
                  <div className="text-[8px] text-slate-400">NF (2)</div>
                </div>
              </div>
              <div className="mt-2 text-[9px] text-slate-400 text-center font-sans">
                Relé Normalmente Fechado (NF): abre o laço ao detectar invasão.
              </div>
            </div>
          </div>
        </div>
      );

    case 'magnetic_contact':
      return (
        <div className={`bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-xs select-none border border-slate-700/60 ${className}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">SENSORES · Contato Magnético de Abertura</span>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">REED SWITCH</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            {/* Visual Scheme */}
            <div className="bg-slate-950 p-3 rounded border border-slate-800 flex items-center justify-center gap-4">
              {/* Part 1: Sensor */}
              <div className="border border-blue-500 bg-blue-950/50 p-2.5 rounded text-center w-28">
                <div className="text-[10px] font-bold text-blue-300">REED SWITCH</div>
                <div className="text-[8px] text-slate-400">Batente (Fixo)</div>
                <div className="mt-1 text-[8px] text-amber-400 font-mono">Fiação p/ Central</div>
              </div>

              {/* GAP */}
              <div className="flex flex-col items-center">
                <span className="text-[8px] text-slate-400">GAP</span>
                <span className="text-[10px] text-emerald-400">↔</span>
                <span className="text-[8px] text-slate-500">&lt; 15mm</span>
              </div>

              {/* Part 2: Magnet */}
              <div className="border border-emerald-500 bg-emerald-950/50 p-2.5 rounded text-center w-24">
                <div className="text-[10px] font-bold text-emerald-300">ÍMÃ NEODÍMIO</div>
                <div className="text-[8px] text-slate-400">Porta (Móvel)</div>
                <div className="mt-1 text-[8px] text-emerald-400">Campo Magnético</div>
              </div>
            </div>

            <div className="space-y-1.5 text-[11px] font-sans text-slate-300">
              <div><strong className="text-emerald-400">Porta Fechada:</strong> Campo magnético atrai as lâminas do reed switch, mantendo o circuito NF (fechado).</div>
              <div><strong className="text-red-400">Porta Aberta:</strong> O ímã se afasta além do GAP; as lâminas se soltam e o circuito se abre, disparando o alarme.</div>
            </div>
          </div>
        </div>
      );

    case 'alarm_system':
      return (
        <div className={`bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-xs select-none border border-slate-700/60 ${className}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">ALARME · Topologia Geral da Central</span>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">ZONAS & PERIFÉRICOS</span>
          </div>

          <div className="bg-slate-950 p-3 rounded border border-slate-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-[10px]">
              <div className="bg-slate-800 p-2 rounded border border-slate-700">
                <div className="font-bold text-red-400">BATERIA 12V 7Ah</div>
                <div className="text-[9px] text-slate-400 mt-1 font-sans">No-break para falta de energia</div>
              </div>
              <div className="bg-blue-950/70 p-2 rounded border border-blue-700">
                <div className="font-bold text-blue-300">PLACA DA CENTRAL</div>
                <div className="text-[9px] text-slate-400 mt-1 font-sans">Zonas 1 a 8 + Linha / IP</div>
              </div>
              <div className="bg-amber-950/70 p-2 rounded border border-amber-700">
                <div className="font-bold text-amber-300">SIRENE 120dB</div>
                <div className="text-[9px] text-slate-400 mt-1 font-sans">Saída de atuador sonoro</div>
              </div>
              <div className="bg-purple-950/70 p-2 rounded border border-purple-700">
                <div className="font-bold text-purple-300">TECLADO LCD</div>
                <div className="text-[9px] text-slate-400 mt-1 font-sans">Comunicação via barramento</div>
              </div>
            </div>
            <div className="mt-3 text-[10px] text-slate-400 text-center font-sans">
              Laço com Resistor de Fim de Linha (EOL) para detecção de corte ou curto-circuito na fiação.
            </div>
          </div>
        </div>
      );

    case 'poe_power':
      return (
        <div className={`bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-xs select-none border border-slate-700/60 ${className}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">REDES · Power over Ethernet (PoE 802.3af/at)</span>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">48V DC NOMINAL</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
            <div className="bg-slate-800/80 p-2.5 rounded border border-slate-700">
              <div className="text-cyan-400 font-bold text-[11px]">SWITCH PoE (PSE)</div>
              <div className="text-[9px] text-slate-400 mt-1 font-sans">Fonte geradora de energia + switch de dados em uma única carcaça.</div>
            </div>

            <div className="bg-blue-950/50 p-2.5 rounded border border-blue-800 flex flex-col justify-center">
              <div className="text-blue-300 font-bold text-[10px]">CABO UTP CAT5e / CAT6</div>
              <div className="text-[9px] text-emerald-400 mt-0.5">DADOS (100Mbps/1Gbps) + TENSÃO 48V</div>
              <div className="text-[8px] text-slate-400 mt-0.5 font-sans">Alcance padrão: até 100 metros</div>
            </div>

            <div className="bg-slate-800/80 p-2.5 rounded border border-slate-700">
              <div className="text-cyan-400 font-bold text-[11px]">CÂMERA IP (PD)</div>
              <div className="text-[9px] text-slate-400 mt-1 font-sans">Circuito interno regulador converte 48V PoE para a tensão dos sensores.</div>
            </div>
          </div>
        </div>
      );

    case 'access_control':
      return (
        <div className={`bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-xs select-none border border-slate-700/60 ${className}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">ACESSO · Porta Controlada com Eletroímã</span>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">FAIL SAFE</span>
          </div>

          <div className="space-y-2 font-sans text-[11px] text-slate-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center font-mono">
              <div className="bg-slate-800 p-2 rounded border border-slate-700">
                <div className="text-blue-400 font-bold text-[10px]">LEITOR RFID / BIO</div>
                <div className="text-[8px] text-slate-400 font-sans">Entrada externa com protocolo Wiegand</div>
              </div>
              <div className="bg-slate-800 p-2 rounded border border-slate-700">
                <div className="text-amber-400 font-bold text-[10px]">FECHADURA 150/280kgf</div>
                <div className="text-[8px] text-slate-400 font-sans">Eletroímã alimentado constantemente</div>
              </div>
              <div className="bg-slate-800 p-2 rounded border border-slate-700">
                <div className="text-emerald-400 font-bold text-[10px]">BOTOEIRA DE SAÍDA</div>
                <div className="text-[8px] text-slate-400 font-sans">Sensor no-touch para desenergizar e abrir</div>
              </div>
            </div>
            <div className="bg-slate-950 p-2 rounded text-[10px] text-slate-400 text-center">
              Padrão <strong>Fail Safe:</strong> em caso de falta total de energia, o eletroímã se desliga liberando a rota de fuga.
            </div>
          </div>
        </div>
      );

    case 'glossary':
    default:
      return (
        <div className={`bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-xs select-none border border-slate-700/60 ${className}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">TERMOS · Siglas Fundamentais na Segurança</span>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">REFERÊNCIA RÁPIDA</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-sans">
            <div className="bg-slate-800/80 p-2 rounded border border-slate-700">
              <span className="font-bold text-blue-400 font-mono">WDR:</span> Wide Dynamic Range (equilibra luz de fundo forte com sombra).
            </div>
            <div className="bg-slate-800/80 p-2 rounded border border-slate-700">
              <span className="font-bold text-emerald-400 font-mono">ONVIF:</span> Padrão internacional de interoperabilidade entre marcas IP.
            </div>
            <div className="bg-slate-800/80 p-2 rounded border border-slate-700">
              <span className="font-bold text-amber-400 font-mono">H.265+:</span> Algoritmo de compressão inteligente para economizar HD.
            </div>
            <div className="bg-slate-800/80 p-2 rounded border border-slate-700">
              <span className="font-bold text-cyan-400 font-mono">IP67:</span> Índice de proteção (à prova de poeira e imersão temporária).
            </div>
          </div>
        </div>
      );
  }
};

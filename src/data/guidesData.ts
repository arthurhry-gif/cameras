export interface GuidePreviewItem {
  id: string;
  category: 'cftv' | 'alarmes' | 'redes' | 'sensores' | 'conexoes';
  categoryLabel: string;
  guideNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  schematicType: 'cftv_basic' | 'ip_vs_analog' | 'dvr_nvr' | 'connectors' | 'pir_sensor' | 'magnetic_contact' | 'alarm_system' | 'poe_power' | 'access_control' | 'glossary';
}

export const FEATURED_PREVIEWS: GuidePreviewItem[] = [
  {
    id: 'p1',
    category: 'cftv',
    categoryLabel: 'CFTV & Gravadores',
    guideNumber: 'GUIA 004',
    title: 'Anatomia de um sistema básico de CFTV',
    subtitle: 'Visão ponta a ponta do caminho do sinal e alimentação',
    description: 'Diagrama visual demonstrando a relação direta entre captação (câmera), meio de transmissão (cabo coaxial ou UTP), fonte central de alimentação e gravador DVR para exibição em monitor.',
    keyPoints: [
      'Entrada de alimentação 12V DC',
      'Canal de vídeo e impedância 75Ω',
      'Função do gravador e disco rígido (HD)',
      'Saída de vídeo HDMI/VGA para monitor'
    ],
    schematicType: 'cftv_basic'
  },
  {
    id: 'p2',
    category: 'cftv',
    categoryLabel: 'CFTV & Tecnologia',
    guideNumber: 'GUIA 012',
    title: 'Câmera IP e câmera analógica: visão geral',
    subtitle: 'Comparativo conceitual de sinal, processamento e cabeamento',
    description: 'Esquema comparativo entre câmeras HD analógicas (sinal elétrico modulado) e câmeras IP (digitalização direta no dispositivo e envio de pacotes Ethernet).',
    keyPoints: [
      'Analógica HD: processamento no DVR',
      'IP: processamento interno e endereço de rede',
      'Meio físico: Coaxial/Balun vs Cabo de Rede RJ45',
      'Alimentação: Fonte dedicada vs Switch PoE'
    ],
    schematicType: 'ip_vs_analog'
  },
  {
    id: 'p3',
    category: 'cftv',
    categoryLabel: 'Gravação & Armazenamento',
    guideNumber: 'GUIA 028',
    title: 'DVR e NVR: diferenças conceituais',
    subtitle: 'Compreensão da arquitetura de entrada, canais e compressão',
    description: 'Quadro visual ilustrando as diferenças estruturais no painel traseiro, portas de conexão (BNC vs RJ45/PoE) e método de recepção de fluxo de vídeo.',
    keyPoints: [
      'DVR: Entradas analógicas BNC com conversão A/D',
      'NVR: Conexão via switch ou portas de rede dedicadas',
      'Largura de banda e taxa de bits (Bitrate)',
      'Localização do processamento de vídeo'
    ],
    schematicType: 'dvr_nvr'
  },
  {
    id: 'p4',
    category: 'conexoes',
    categoryLabel: 'Cabos & Conexões',
    guideNumber: 'GUIA 039',
    title: 'Conectores e tipos de cabos',
    subtitle: 'Identificação visual dos padrões mais comuns na segurança',
    description: 'Guia visual de reconhecimento de conectores BNC (mola, solda, borne, compressão), conectores P4 (macho e fêmea) e conector RJ45 com pinagem T568A/T568B.',
    keyPoints: [
      'Conector BNC com mola e borne',
      'Plugue P4 borne para alimentação 12V',
      'Cabo Coaxial bipolar vs Cabo de rede UTP CAT5e/6',
      'Uso de Baluns passivos para adaptação de impedância'
    ],
    schematicType: 'connectors'
  },
  {
    id: 'p5',
    category: 'sensores',
    categoryLabel: 'Sensores de Intrusão',
    guideNumber: 'GUIA 052',
    title: 'Sensor PIR: componentes e função',
    subtitle: 'Estrutura interna, lente de Fresnel e feixes de detecção',
    description: 'Diagrama dos elementos de um sensor infravermelho passivo: lente de Fresnel, pirossensor de duplo elemento, bornes de alimentação (+ e -) e bornes de zona (relé NF/NA).',
    keyPoints: [
      'Lente multifacetada e feixes de cobertura',
      'Detecção de variação térmica em movimento',
      'Bornes de alimentação 12V DC',
      'Contatos de alarme NF (Normalmente Fechado)'
    ],
    schematicType: 'pir_sensor'
  },
  {
    id: 'p6',
    category: 'sensores',
    categoryLabel: 'Perímetros & Aberturas',
    guideNumber: 'GUIA 064',
    title: 'Contato magnético: partes do conjunto',
    subtitle: 'Funcionamento do reed switch e do ímã para portas e janelas',
    description: 'Esquema visual mostrando o par magnético: módulo com reed switch (ampola de vidro hermética) conectado à fiação da central e o ímã instalado na folha móvel.',
    keyPoints: [
      'Distância de acionamento (GAP)',
      'Comportamento do circuito quando fechado vs aberto',
      'Modelos de sobrepor, embutir e metálicos industriais',
      'Bornes de ligação à zona de alarme'
    ],
    schematicType: 'magnetic_contact'
  },
  {
    id: 'p7',
    category: 'alarmes',
    categoryLabel: 'Centrais de Alarme',
    guideNumber: 'GUIA 078',
    title: 'Sistema de alarme: visão dos elementos',
    subtitle: 'Topologia completa da central aos atuadores e periféricos',
    description: 'Mapa conceitual interligando a central de choque ou intrusão com teclado de comando, bateria selada 12V 7Ah, sirene, sensores com fio e discador/comunicador.',
    keyPoints: [
      'Barramento de dados para teclados e expansores',
      'Laço de zonas com resistor de final de linha (EOL)',
      'Alimentação auxiliar (AUX + e -)',
      'Saída de sirene (BELL/SIR) e bateria de backup'
    ],
    schematicType: 'alarm_system'
  },
  {
    id: 'p8',
    category: 'redes',
    categoryLabel: 'Redes & Infraestrutura',
    guideNumber: 'GUIA 095',
    title: 'PoE: conceito visual de alimentação e dados',
    subtitle: 'Como dados e eletricidade viajam no mesmo cabo de rede',
    description: 'Ilustração do padrão IEEE 802.3af/at em switches PoE e injetores, mostrando a transmissão simultânea de pacotes TCP/IP e tensão contínua até a câmera.',
    keyPoints: [
      'Modo A e Modo B de transmissão de energia',
      'Pares de dados (1, 2, 3 e 6) e pares sobressalentes',
      'Padrões PoE (15.4W), PoE+ (30W) e PoE++',
      'Distâncias máximas nominais em rede UTP (100m)'
    ],
    schematicType: 'poe_power'
  },
  {
    id: 'p9',
    category: 'alarmes',
    categoryLabel: 'Controle de Acesso',
    guideNumber: 'GUIA 108',
    title: 'Elementos de controle de acesso',
    subtitle: 'Interação entre leitor, controladora, botoeira e fechadura',
    description: 'Esquema dos componentes que integram uma porta controlada: eletroímã (fechadura magnética com sensor de porta aberta), fonte com temporizador, leitor RFID/biometria e botoeira de saída.',
    keyPoints: [
      'Fechadura eletroímã e força de sustentação',
      'Comunicação Wiegand / OSDP entre leitor e placa',
      'Botoeira de saída tipo "No-Touch" ou "Push"',
      'Módulo de liberação de emergência'
    ],
    schematicType: 'access_control'
  },
  {
    id: 'p10',
    category: 'redes',
    categoryLabel: 'Termos & Siglas',
    guideNumber: 'GUIA 119',
    title: 'Glossário de termos de segurança eletrônica',
    subtitle: 'Mapa visual de termos fundamentais explicados sem jargões',
    description: 'Diagrama explicativo agrupando siglas frequentes como WDR, BLC, ONVIF, RTSP, DDNS, P2P, H.265 e IP67 para consulta rápida durante os estudos.',
    keyPoints: [
      'Compensação de luz: WDR vs BLC vs HLC',
      'Compatibilidade: protocolo ONVIF Profile S/T/G',
      'Compressão de vídeo: H.264 vs H.265/H.265+',
      'Graus de proteção de invólucro: IP66 vs IP67 vs IK10'
    ],
    schematicType: 'glossary'
  }
];

export const MODULES_DATA = [
  {
    number: '01',
    title: 'Fundamentos de CFTV e Segurança Eletrônica',
    description: 'Conceitos introdutórios, aplicações e organização geral dos sistemas.',
    topics: [
      'Topologia geral de um projeto de segurança eletrônica',
      'Diferença entre circuito fechado analógico e digital',
      'Resoluções comuns: HD (720p), Full HD (1080p), 2K e 4K',
      'Conceitos de taxa de quadros (FPS) e taxa de bits (Bitrate)',
      'Ambientes internos vs externos e requisitos básicos de abrigo'
    ]
  },
  {
    number: '02',
    title: 'Câmeras e Captura de Imagem',
    description: 'Tipos de câmera, lentes, formatos e elementos visuais.',
    topics: [
      'Modelos Bullet, Dome, Turret, Varifocal e Speed Dome (PTZ)',
      'Relação de distância focal da lente (2.8mm, 3.6mm, 6mm e 12mm)',
      'Ângulo de visão (abertura horizontal) e profundidade de campo',
      'Iluminação infravermelha (IR inteligente) e tecnologia Full Color',
      'Filtro ICR (Day/Night mecânico) e sensor de imagem CMOS'
    ]
  },
  {
    number: '03',
    title: 'Gravadores, Armazenamento e Monitoramento',
    description: 'Conceitos de DVR, NVR, armazenamento e visualização.',
    topics: [
      'Diferenças práticas de arquitetura entre DVR, NVR e XVR multi-sinais',
      'Entradas de vídeo, saídas auxiliares e portas de áudio',
      'Discos rígidos recomendados para vigilância contínua (Surveillance)',
      'Métodos de gravação: contínua, por detecção de movimento e por agenda',
      'Monitoramento local (HDMI/VGA) e acesso remoto via nuvem/P2P'
    ]
  },
  {
    number: '04',
    title: 'Cabos, Conectores e Alimentação',
    description: 'Referência visual de cabos, conectores, fontes e conexões.',
    topics: [
      'Cabo coaxial RG59 / micro-coaxial bipolar e blindagem',
      'Cabo par trançado UTP (CAT5e e CAT6) e padrões de cores T568A/B',
      'Conectores BNC de borne, compressão, solda e mola',
      'Fontes individuais 12V vs Fontes colmeia centralizadas e queda de tensão',
      'Uso correto de baluns passivos de vídeo e conversores de sinal'
    ]
  },
  {
    number: '05',
    title: 'Alarmes, Sensores e Controle de Acesso',
    description: 'Componentes e conceitos de sensores, alarmes e controle de acesso.',
    topics: [
      'Tipos de sensores de intrusão: PIR passivo, micro-ondas e duplo elemento',
      'Sensores ativos de barreira (IVA feixe infravermelho para perímetros)',
      'Contatos magnéticos para portas e portões (sobrepor e metálicos)',
      'Centrais de alarme particionadas, laço de zonas e resistores de fim de linha',
      'Controladoras de acesso, fechaduras eletroímã, solenoides e leitores'
    ]
  },
  {
    number: '06',
    title: 'Redes, Termos Técnicos e Segurança',
    description: 'Siglas, conceitos de rede e noções de segurança relacionadas ao estudo do setor.',
    topics: [
      'Endereçamento IPv4 local: IP fixo, máscara de sub-rede, gateway e DNS',
      'Conceitos de Switch de rede não gerenciável vs Switch PoE gerenciável',
      'Padrões PoE 802.3af e 802.3at (PoE+) e orçamento de potência (Power Budget)',
      'Protocolos essenciais: ONVIF, RTSP, DHCP e portas de comunicação',
      'Termos e siglas: WDR, BLC, HLC, AGC, IP66, IP67, IK10 e codecs H.265'
    ]
  }
];

export const FOR_YOU_ITEMS = [
  'Está fazendo curso de CFTV, segurança eletrônica, elétrica ou redes.',
  'Começou como auxiliar e ainda está se familiarizando com os equipamentos.',
  'Escuta siglas e termos técnicos, mas confunde o que cada um significa.',
  'Quer visualizar como câmeras, gravadores, sensores e cabos se relacionam.',
  'Precisa organizar melhor os assuntos que estuda.',
  'Aprende melhor com diagramas e ilustrações do que com textos extensos.',
  'Está se preparando para entrevistas ou treinamentos introdutórios.',
  'Quer ter um material de consulta visual dos conceitos estudados.'
];

export const WHAT_YOU_WILL_FIND = [
  {
    title: 'Câmeras e lentes',
    icon: 'Camera',
    desc: 'Formatos (Bullet, Dome, PTZ), aberturas focais de 2.8mm a 12mm e tecnologias de iluminação noturna.'
  },
  {
    title: 'DVR, NVR e monitoramento',
    icon: 'HardDrive',
    desc: 'Topologias de gravação, canais, conexões traseiras, métodos de busca e conceitos de armazenamento.'
  },
  {
    title: 'Cabos e conectores',
    icon: 'Cable',
    desc: 'Padrões de cabos coaxiais, cabos UTP CAT5e/6, conectores BNC, plugues P4 e conectorização RJ45.'
  },
  {
    title: 'Fontes e alimentação',
    icon: 'Zap',
    desc: 'Fontes individuais, colmeia, nobreaks para CFTV e cálculos conceituais de queda de tensão em distância.'
  },
  {
    title: 'Sensores de presença',
    icon: 'ScanEye',
    desc: 'Sensores PIR, feixes de cobertura, áreas de detecção, zonas cegas e ajuste básico de sensibilidade.'
  },
  {
    title: 'Contatos magnéticos',
    icon: 'Magnet',
    desc: 'Sensores de abertura para portas e janelas de madeira, alumínio e portões pesados industriais.'
  },
  {
    title: 'Alarmes e centrais',
    icon: 'BellRing',
    desc: 'Conceitos de painéis de alarme, bornes de zonas, alimentação auxiliar de sirenes e teclados.'
  },
  {
    title: 'Controle de acesso',
    icon: 'DoorClosed',
    desc: 'Fechaduras eletroímã, botoeiras sem toque, leitores RFID de proximidade e fontes temporizadas.'
  },
  {
    title: 'Redes e conceitos de PoE',
    icon: 'Network',
    desc: 'Transmissão simultânea de energia e dados via cabo de rede, switches PoE e faixas de IP locais.'
  },
  {
    title: 'Siglas e termos técnicos',
    icon: 'BookOpen',
    desc: 'Guia visual desmistificando siglas como WDR, BLC, ONVIF, RTSP, P2P, H.265+, IP67 e IK10.'
  },
  {
    title: 'Segurança e boas práticas de estudo',
    icon: 'ShieldCheck',
    desc: 'Noções conceituais de organização de tubulações, separação de cabos de força e dados nos estudos.'
  },
  {
    title: 'Diagnóstico conceitual',
    icon: 'Activity',
    desc: 'Conteúdo educacional para ajudar a compreender a relação entre componentes e sintomas descritos. Não substitui avaliação técnica, documentação do fabricante, formação ou procedimentos profissionais.',
    hasDisclaimer: true
  }
];

export const BONUS_ITEMS = [
  {
    number: 'Bônus 01',
    title: 'Glossário Visual de CFTV e Alarmes',
    description: 'Termos e expressões da área explicados em formato visual para consulta rápida quando surgir qualquer sigla desconhecida.'
  },
  {
    number: 'Bônus 02',
    title: 'Plano de Estudos para Iniciantes',
    description: 'Uma sequência sugerida para organizar a familiarização com os temas, partindo do básico até noções de redes e integração.'
  },
  {
    number: 'Bônus 03',
    title: 'Kit Visual dos Primeiros Estudos',
    description: 'Material complementar para organizar conceitos encontrados em cursos e treinamentos introdutórios de segurança eletrônica.'
  },
  {
    number: 'Bônus 04',
    title: '50 Mapas Visuais de Componentes e Sintomas',
    description: 'Mapas conceituais para relacionar componentes, funções e sintomas descritos, sem substituir diagnóstico técnico.'
  },
  {
    number: 'Bônus 05',
    title: 'Siglas e Abreviações da Segurança Eletrônica',
    description: 'Referência visual de siglas e expressões comuns em CFTV, alarmes, redes e controle de acesso organizadas por ordem alfabética e categoria.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'O material é físico ou digital?',
    answer: 'É um produto digital. Você poderá acessar pelos dispositivos compatíveis e imprimir páginas para uso pessoal, se isso estiver incluído na entrega.'
  },
  {
    question: 'Serve para quem está começando?',
    answer: 'Foi pensado como apoio visual para familiarização e estudo introdutório dos temas. Não substitui formação ou prática supervisionada.'
  },
  {
    question: 'Serve para quem já trabalha na área?',
    answer: 'Pode servir como material de revisão e consulta conceitual, conforme os temas incluídos.'
  },
  {
    question: 'O material ensina a instalar câmeras e alarmes sozinho?',
    answer: 'Não. É material educacional visual e não substitui curso, treinamento prático, normas, documentação do fabricante ou supervisão adequada.'
  },
  {
    question: 'Funciona no celular?',
    answer: 'Sim, os arquivos devem ser organizados para consulta em dispositivos digitais. Confirmar compatibilidade e formato antes de publicar.'
  },
  {
    question: 'Posso imprimir?',
    answer: 'Pode imprimir para uso pessoal, se isso estiver permitido nas condições de uso do produto.'
  },
  {
    question: 'Quando recebo o acesso?',
    answer: 'Após a confirmação do pagamento, conforme o prazo de liberação da plataforma.'
  },
  {
    question: 'Tem garantia?',
    answer: 'Informar o prazo real e as condições aplicáveis, sem inventar termos.'
  }
];

// Todo o conteúdo do site vem deste arquivo.
export const sections = [
  { id: 'sobre', label: 'Sobre mim' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contato', label: 'Contato' },
];

export const profile = {
  name: 'Lucas Meira Santos Roque',
  role: 'Desenvolvedor Full-Stack Java',
  summary:
    'Sou arquiteto e estou migrando para o desenvolvimento de software. Gosto de transformar problemas em estruturas claras, seja numa planta ou numa aplicação web.',
  about: [
    'Minha formação em arquitetura me ensinou a planejar antes de construir, pensar em quem vai usar o espaço e cuidar dos detalhes. Levo esse olhar para o código: componentes organizados, interfaces legíveis e decisões justificadas.',
    'Fora do trabalho, gosto de música e toco guitarra. Estou concluindo este curso para ampliar minhas opções profissionais e, neste portfólio, reuni os projetos em que medi performance, integrei micro frontends e resolvi problemas de lógica.',
  ],
  photo: '', // ex.: 'images/foto.jpg' (coloque o arquivo em public/images)
  email: 'lucasmeirasr@gmail.com',
  facts: [
    { value: '3', label: 'projetos do curso' },
    { value: '-42%', label: 'bytes transferidos no Diário de Bordo' },
    { value: '3', label: 'apps integrados por Module Federation' },
  ],
  socials: [{ label: 'GitHub', href: 'https://github.com/lucasmsroque' }],
};

export const projects = [
  {
    title: 'Diário de Bordo',
    description:
      'PWA para registrar atividades diárias, com funcionamento offline, instalação na tela inicial e dados salvos em localStorage. O foco do exercício foi diagnosticar e otimizar a performance, provando o ganho com medições.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PWA', 'Service Worker', 'Playwright'],
    images: [
      { src: 'images/diario-depois.png', alt: 'Relatório de performance do Diário de Bordo depois das otimizações' },
      { src: 'images/diario-antes.png', alt: 'Relatório de performance do Diário de Bordo antes das otimizações' },
    ],
    highlights: [
      'Bytes transferidos: 28.279 B para 16.365 B (-42%).',
      'First Contentful Paint: 480 ms para 424 ms (-12%).',
      'Logo servido em WebP com fallback PNG via <picture> (-83% no arquivo).',
      'Minificação de HTML, CSS e JS, defer no script e cache versionado no service worker.',
      'Medição reproduzível: mediana de 7 execuções em rede 4G simulada.',
    ],
    learned: 'Medir antes de otimizar mudou minha prioridade: o maior ganho veio de uma imagem sobredimensionada, não do JavaScript.',
    links: [{ label: 'Repositório', href: 'https://github.com/lucasmsroque/diario-de-bordo' }],
  },
  {
    title: 'Micro Frontends: Sistema de Pedidos',
    description:
      'Monorepo com três apps Next.js 14 integrados por Webpack Module Federation: um container que consome o micro Cardápio e o micro Pedido, cada um publicável de forma independente.',
    tags: ['Next.js 14', 'React 18', 'Module Federation', 'styled-jsx', 'npm workspaces'],
    images: [],
    cover: 'architecture',
    highlights: [
      'Container carrega os micros com React.lazy e Suspense.',
      'Os micros não se importam: conversam pelo evento global order:add no window.',
      'Se um micro estiver fora do ar, o container mostra um aviso no lugar dele.',
      'Cada app roda isolado ou todos juntos com um único comando (npm run dev).',
    ],
    learned: 'Aprendi a tratar o nome do evento e o formato do detail como um contrato, a única dependência entre apps independentes.',
    links: [{ label: 'Repositório', href: 'https://github.com/lucasmsroque/micro-frontends-pedidos' }],
  },
  {
    title: 'Calculadora de Dias de Vida',
    description:
      'Algoritmo em Visualg que lê a data de nascimento e calcula quantos dias a pessoa já viveu, tratando anos bissextos e convertendo o resultado em semanas, meses e anos.',
    tags: ['Visualg', 'Lógica de programação', 'Estruturas de repetição', 'Escolha/caso'],
    images: [],
    cover: 'code',
    highlights: [
      'Regra completa de ano bissexto (divisível por 4 e não por 100, ou por 400).',
      'Soma os dias restantes do ano de nascimento, os anos completos e o ano atual.',
      'Usa escolha/caso para o tamanho de cada mês e para/faça para percorrer meses e anos.',
    ],
    learned: 'Pratiquei dividir um problema de datas em partes menores e conferir casos de borda, como o ano bissexto.',
    links: [{ label: 'Baixar código (.alg)', href: 'projetos/dias_de_vida.alg' }],
  },
];

export const skills = [
  { group: 'Front-end', items: ['React', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'styled-jsx'] },
  { group: 'Arquitetura', items: ['Micro frontends', 'Module Federation', 'Monorepo com npm workspaces', 'Comunicação por eventos'] },
  { group: 'Performance e PWA', items: ['Service Worker', 'localStorage', 'WebP', 'Minificação', 'Medição com Playwright'] },
  { group: 'Base e ferramentas', items: ['Lógica de programação', 'Visualg', 'Git e GitHub', 'Node.js'] },
];

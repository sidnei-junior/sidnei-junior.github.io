export type Neon = 'pink' | 'cyan' | 'amber' | 'lime' | 'violet'

export interface Project {
  name: string
  description: string
  tags: string[]
  color: Neon
  repo: string
  live?: string
  /** Shown as a small sticker on the card. */
  badge?: string
}

export interface StackGroup {
  title: string
  color: Neon
  items: string[]
}

export interface Role {
  period: string
  title: string
  place?: string
}

export interface Contact {
  label: string
  href: string
}

export const LEARNING_MAP_URL = 'https://personal-learning-map.vercel.app/'
export const GITHUB_URL = 'https://github.com/sidnei-junior'

export const profile = {
  name: 'Sidnei Jr',
  role: 'Engenheiro de Software Fullstack',
  focus: 'com pegada backend · Go · TypeScript · Python',
  about: [
    'Quase 7 anos construindo software, do estágio no frontend até APIs, integrações e pipelines de dados no backend.',
    'Gosto de Clean Architecture, SOLID, TDD e código bem testado. Uso React quando o projeto pede.',
    'Engenheiro Mecatrônico pela UFRN, técnico em Informática pelo IFRN e medalhista da OBMEP.',
  ],
}

export const projects: Project[] = [
  {
    name: 'clone-tabnews-ai',
    description:
      'Implementação do TabNews para o curso.dev, construída com a ajuda de agentes de IA.',
    tags: ['JavaScript', 'Next.js', 'Agentes de IA'],
    color: 'cyan',
    repo: 'https://github.com/sidnei-junior/clone-tabnews-ai',
    live: 'https://clone-tabnews-ai-two.vercel.app/',
  },
  {
    name: 'who-has-my-book',
    description:
      'App pra controlar os livros que eu empresto: cadastro com capas, amigos, empréstimos com prazo e histórico. Cada amigo recebe um link próprio.',
    tags: ['Go', 'PostgreSQL', 'Next.js', 'Tailwind'],
    color: 'amber',
    repo: 'https://github.com/sidnei-junior/who-has-my-book',
  },
  {
    name: 'keep-card',
    description:
      'Monorepo de um cartão fidelidade: registra compras recorrentes e libera o resgate de benefícios, numa arquitetura orientada a eventos.',
    tags: ['Go', 'Event-driven', 'Monorepo'],
    color: 'lime',
    repo: 'https://github.com/sidnei-junior/keep-card',
  },
  {
    name: 'personal-learning-map',
    description:
      'Meu diário de estudos em canvas: pixel art, placas neon e chuva. É a versão noturna deste site.',
    tags: ['React', 'TypeScript', 'Canvas', 'Pixel art'],
    color: 'violet',
    repo: 'https://github.com/sidnei-junior/personal-learning-map',
    live: LEARNING_MAP_URL,
    badge: '🌙 noite',
  },
]

export const stack: StackGroup[] = [
  { title: 'Linguagens', color: 'lime', items: ['Go', 'TypeScript', 'Python', 'JavaScript'] },
  { title: 'Backend', color: 'violet', items: ['Node.js', 'APIs REST', 'gRPC', 'Microsserviços', 'Docker'] },
  { title: 'Frontend', color: 'cyan', items: ['React', 'React Query', 'Tailwind CSS', 'Next.js'] },
  { title: 'Dados', color: 'pink', items: ['PostgreSQL', 'MongoDB'] },
  { title: 'Qualidade & ferramentas', color: 'amber', items: ['Jest', 'Vitest', 'TDD', 'GitHub Actions', 'Claude Code'] },
]

export const experience: Role[] = [
  { period: '2023 – 2026', title: 'Engenheiro de Software Fullstack Pleno II' },
  { period: '2022', title: 'Desenvolvedor Frontend Pleno I' },
  { period: '2021', title: 'Desenvolvedor Frontend Júnior' },
  { period: '2020', title: 'Estagiário de Frontend' },
  { period: '2018 – 2019', title: 'Diretor de Projetos', place: 'Include Engenharia · Empresa Júnior UFRN' },
]

export const education: Role[] = [
  { period: '2018 – 2022', title: 'Bacharel em Engenharia Mecatrônica', place: 'UFRN' },
  { period: '2015 – 2017', title: 'Bacharel em Ciências e Tecnologia', place: 'UFRN' },
  { period: '2011 – 2014', title: 'Técnico em Informática (integrado)', place: 'IFRN' },
]

export const contacts: Contact[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sidneijr/' },
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'E-mail', href: 'mailto:sidnei.ifrn@gmail.com' },
  { label: 'Learning map', href: LEARNING_MAP_URL },
]

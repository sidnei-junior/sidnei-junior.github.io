export interface Project {
  name: string
  description: string
  tags: string[]
  repo: string
  live?: string
}

export interface StackGroup {
  title: string
  items: string[]
}

export interface Role {
  period: string
  title: string
}

export interface Contact {
  label: string
  href: string
}

export const LEARNING_MAP = {
  label: 'Mapa pessoal de aprendizados',
  href: 'https://personal-learning-map.vercel.app/',
}

export const profile = {
  name: 'Sidnei Jr',
  headline: 'Fullstack, backend-first.',
  lead: 'Quase 7 anos construindo APIs, integrações e pipelines de dados em Go, TypeScript e Python.',
  status: 'Open to work · remoto ou híbrido',
  caption: ['☀ 08:14 · café passado, janela aberta', 'à noite, chove ☾'],
}

export const projects: Project[] = [
  {
    name: 'clone-tabnews-ai',
    description: 'Implementação do TabNews para o curso.dev, construída com agentes de IA.',
    tags: ['Next.js', 'IA'],
    repo: 'https://github.com/sidnei-junior/clone-tabnews-ai',
    live: 'https://clone-tabnews-ai-two.vercel.app/',
  },
  {
    name: 'who-has-my-book',
    description: 'Controle dos livros que eu empresto: capas, amigos, prazos e histórico.',
    tags: ['Go', 'PostgreSQL', 'Next.js'],
    repo: 'https://github.com/sidnei-junior/who-has-my-book',
  },
  {
    name: 'keep-card',
    description: 'Cartão fidelidade com compras recorrentes e resgate de benefícios.',
    tags: ['Go', 'Event-driven'],
    repo: 'https://github.com/sidnei-junior/keep-card',
  },
  {
    name: 'personal-learning-map',
    description: 'Meu diário de estudos em pixel art, neon e chuva. A versão noturna deste site.',
    tags: ['React', 'Canvas', '☾'],
    repo: 'https://github.com/sidnei-junior/personal-learning-map',
    live: LEARNING_MAP.href,
  },
]

export const stack: StackGroup[] = [
  { title: 'Linguagens', items: ['Go', 'TypeScript', 'Python'] },
  { title: 'Backend', items: ['Node.js', 'gRPC · REST', 'Docker'] },
  { title: 'Frontend', items: ['React', 'React Query', 'Tailwind'] },
  { title: 'Dados & testes', items: ['PostgreSQL', 'MongoDB', 'Jest · TDD'] },
]

export const experience: Role[] = [
  { period: '2023 – 2026', title: 'Engenheiro de Software Fullstack Pleno II' },
  { period: '2020 – 2022', title: 'Estágio → Desenvolvedor Frontend Pleno I' },
  { period: '2018 – 2022', title: 'Engenharia Mecatrônica · UFRN' },
]

export const contacts: Contact[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sidneijr/' },
  { label: 'GitHub', href: 'https://github.com/sidnei-junior' },
  { label: 'E-mail', href: 'mailto:sidnei.ifrn@gmail.com' },
]

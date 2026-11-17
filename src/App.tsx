import { Cover } from './components/Cover'
import { SkyBackground } from './components/SkyBackground'
import {
  contacts,
  education,
  experience,
  GITHUB_URL,
  LEARNING_MAP_URL,
  profile,
  projects,
  stack,
  type Role,
} from './data/profile'

const NIGHT_LINK = (
  <a className="pixel-btn pixel-btn--night" href={LEARNING_MAP_URL} title="Ir para o learning map">
    🌙 ver a noite
  </a>
)

function Timeline({ items }: { items: Role[] }) {
  return (
    <ol className="timeline">
      {items.map((r) => (
        <li key={r.period + r.title}>
          <time>{r.period}</time>
          <div>
            <strong>{r.title}</strong>
            {r.place && <span>{r.place}</span>}
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function App() {
  return (
    <>
      <SkyBackground />

      <header className="topbar">
        <a className="topbar__brand" href="#inicio">
          ☀ sidnei<span className="ink--cyan">.jr</span>
        </a>
        <nav className="topbar__nav" aria-label="Seções">
          <a href="#sobre">sobre</a>
          <a href="#projetos">projetos</a>
          <a href="#stack">stack</a>
          <a href="#experiencia">experiência</a>
          <a href="#contato">contato</a>
        </nav>
        {NIGHT_LINK}
      </header>

      <main className="page">
        <Cover />

        <section className="section" id="sobre">
          <h2 className="sign sign--pink">sobre</h2>
          <div className="panel about">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="section" id="projetos">
          <h2 className="sign sign--cyan">projetos</h2>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.name} className={`card frame--${p.color}`}>
                {p.badge && <span className="card__badge">{p.badge}</span>}
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>#{t}</li>
                  ))}
                </ul>
                <div className="card__actions">
                  {p.live && (
                    <a className="pixel-btn" href={p.live} target="_blank" rel="noreferrer">
                      ao vivo ▸
                    </a>
                  )}
                  <a className="pixel-btn pixel-btn--ghost" href={p.repo} target="_blank" rel="noreferrer">
                    código
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="section__more">
            Tem mais coisa no{' '}
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              meu GitHub
            </a>
            .
          </p>
        </section>

        <section className="section" id="stack">
          <h2 className="sign sign--lime">stack</h2>
          <div className="grid grid--stack">
            {stack.map((g) => (
              <div key={g.title} className={`panel stack frame--${g.color}`}>
                <h3>{g.title}</h3>
                <ul className="chips">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experiencia">
          <h2 className="sign sign--amber">experiência</h2>
          <div className="grid grid--two">
            <div className="panel">
              <h3>carreira</h3>
              <Timeline items={experience} />
            </div>
            <div className="panel">
              <h3>formação</h3>
              <Timeline items={education} />
              <p className="panel__extra">🏅 Medalhista da OBMEP</p>
            </div>
          </div>
        </section>

        <section className="section" id="contato">
          <h2 className="sign sign--violet">contato</h2>
          <div className="panel contact">
            <p>Estou aberto a novas oportunidades, remoto ou híbrido. Bora conversar?</p>
            <div className="contact__links">
              {contacts.map((c) => (
                <a key={c.label} className="pixel-btn" href={c.href} target="_blank" rel="noreferrer">
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          ☀ de dia, o que já foi entregue. À noite, debaixo de chuva, o que ainda estou aprendendo.
        </p>
        {NIGHT_LINK}
      </footer>
    </>
  )
}

import { contacts, experience, LEARNING_MAP, profile, projects, stack } from './data/profile'

const YEAR = new Date().getFullYear()

function MapButton({ className = '' }: { className?: string }) {
  return (
    <a className={`map-btn ${className}`} href={LEARNING_MAP.href}>
      ☾ {LEARNING_MAP.label}
    </a>
  )
}

function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <h2 className="section__label mono">
      <b className="neon-text">({n})</b> {children}
    </h2>
  )
}

export default function App() {
  return (
    <div className="wrap">
      <header className="header">
        <a className="mono header__brand" href="#inicio">
          Sidnei Jr — Portfólio
        </a>
        <nav className="header__nav mono" aria-label="Seções">
          <a href="#projetos">Projetos</a>
          <a href="#stack">Stack</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
          <MapButton />
        </nav>
      </header>

      <main>
        <div className="hero" id="inicio">
          <h1>
            {profile.name}
            <span className="hero__dot">.</span>
            <br />
            <span className="hero__headline">{profile.headline}</span>
          </h1>

          <figure className="cover">
            <div className="scene">
              <span className="scene__sign scene__sign--left">☀ dia</span>
              <span className="scene__sign">● open</span>
              <img
                src="/cover-day.jpg"
                width={1585}
                height={992}
                alt="Pixel art: Sidnei estudando de manhã, com fones, café e sol entrando pela janela"
              />
            </div>
            <figcaption className="mono">
              <span>{profile.caption[0]}</span>
              <span>{profile.caption[1]}</span>
            </figcaption>
          </figure>

          <div className="hero__row">
            <p className="hero__lead">{profile.lead}</p>
            <p className="mono hero__status">
              <i aria-hidden="true" /> {profile.status}
            </p>
            <div className="hero__btns">
              <a className="btn btn--fill" href="#projetos">
                Ver projetos ↓
              </a>
              <MapButton className="btn" />
            </div>
          </div>
        </div>

        <section className="section" id="projetos">
          <SectionLabel n="01">Projetos selecionados</SectionLabel>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.name} className="project">
                <div>
                  <span className="mono">{p.tags.join(' · ')}</span>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                </div>
                <div className="project__links mono">
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Ao vivo ↗
                    </a>
                  ) : (
                    <span />
                  )}
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Código
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="stack">
          <SectionLabel n="02">Stack</SectionLabel>
          <div className="stack">
            {stack.map((g) => (
              <div key={g.title}>
                <h3 className="mono">{g.title}</h3>
                <ul>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experiencia">
          <SectionLabel n="03">Experiência</SectionLabel>
          <ol className="rows">
            {experience.map((r) => (
              <li key={r.title}>
                <span className="mono">{r.period}</span>
                <span>{r.title}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="contato">
          <SectionLabel n="04">Contato</SectionLabel>
          <div className="contact">
            <p>Aberto a novas oportunidades, remoto ou híbrido. Bora conversar?</p>
            <div className="contact__links">
              {contacts.map((c) => (
                <a key={c.label} className="btn" href={c.href} target="_blank" rel="noreferrer">
                  {c.label} ↗
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer mono">
        <span>Sidnei Jr · {YEAR}</span>
        <MapButton />
      </footer>
    </div>
  )
}

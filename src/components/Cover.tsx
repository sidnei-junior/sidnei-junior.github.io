import { useState } from 'react'
import { profile } from '../data/profile'

/**
 * Daytime café-window cover. Drop the generated image at `public/cover-day.png`
 * (16:10, same scene as the learning map cover, but sunny and without rain)
 * and it replaces the placeholder automatically.
 */
export function Cover() {
  const [hasImage, setHasImage] = useState(true)

  return (
    <section className="cover" id="inicio">
      <div className="cover__window">
        {hasImage ? (
          <img
            src="/cover-day.png"
            alt="Pixel art: o mesmo quarto do learning map, agora de dia, com sol entrando pela janela"
            onError={() => setHasImage(false)}
          />
        ) : (
          <div className="cover__placeholder" aria-hidden="true">
            <span className="cover__sun" />
            <span className="cover__panes" />
            <span className="cover__note">capa de dia em breve</span>
          </div>
        )}
      </div>

      <div className="cover__text">
        <p className="cover__open sign--lime">● OPEN TO WORK</p>
        <h1 className="cover__title">
          <span className="ink--pink">sidnei</span> <span className="ink--cyan">jr</span>
        </h1>
        <p className="cover__role">
          {profile.role}
          <br />
          <span>{profile.focus}</span>
        </p>
        <div className="cover__actions">
          <a className="pixel-btn pixel-btn--big" href="#projetos">
            ver projetos ▾
          </a>
          <a className="pixel-btn pixel-btn--big pixel-btn--amber" href="#contato">
            contato ▸
          </a>
        </div>
      </div>
    </section>
  )
}

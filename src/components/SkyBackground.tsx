import { useEffect, useRef } from 'react'

/** Pixel size: the canvas is drawn at 1/PIXEL resolution and upscaled crisp. */
const PIXEL = 4

interface Cloud {
  x: number
  y: number
  speed: number
  /** rows of [offset, length] blocks, drawn top to bottom */
  shape: [number, number][]
  layer: number
}

interface Bird {
  x: number
  y: number
  speed: number
  phase: number
}

const CLOUD_COLORS = ['rgba(255,255,255,0.55)', 'rgba(255,255,255,0.8)', '#ffffff']
const CLOUD_SHADE = ['rgba(200,225,245,0.45)', 'rgba(205,228,248,0.7)', '#d9ecfa']

const makeShape = (): [number, number][] => {
  const w = 14 + Math.floor(Math.random() * 16)
  const bump = 4 + Math.floor(Math.random() * 6)
  const bumpX = 2 + Math.floor(Math.random() * (w - bump - 4))
  return [
    [bumpX + 1, bump - 2],
    [bumpX, bump],
    [2, w - 4],
    [0, w],
    [0, w],
    [1, w - 2],
  ]
}

/** Full-screen pixel-art daytime sky: sun, drifting clouds and a few birds. */
export function SkyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let clouds: Cloud[] = []
    let birds: Bird[] = []
    let frame = 0
    let tick = 0

    const makeCloud = (randomX: boolean): Cloud => {
      const layer = Math.floor(Math.random() * 3)
      return {
        x: randomX ? Math.random() * width : -40,
        y: 6 + Math.random() * height * 0.6,
        speed: 0.03 + layer * 0.04 + Math.random() * 0.02,
        shape: makeShape(),
        layer,
      }
    }

    const makeBird = (randomX: boolean): Bird => ({
      x: randomX ? Math.random() * width : -10,
      y: 10 + Math.random() * height * 0.35,
      speed: 0.15 + Math.random() * 0.1,
      phase: Math.random() * 20,
    })

    const resize = () => {
      width = Math.ceil(window.innerWidth / PIXEL)
      height = Math.ceil(window.innerHeight / PIXEL)
      canvas.width = width
      canvas.height = height
      const count = Math.max(4, Math.floor(width / 40))
      clouds = Array.from({ length: count }, () => makeCloud(true)).sort((a, b) => a.layer - b.layer)
      birds = Array.from({ length: 3 }, () => makeBird(true))
    }

    const drawSun = () => {
      const cx = width - Math.min(60, width * 0.15)
      const cy = 26
      const r = 11
      // rays, slowly pulsing
      const pulse = reduceMotion ? 0 : Math.floor((Math.sin(tick / 40) + 1) * 1.5)
      ctx.fillStyle = 'rgba(255, 211, 77, 0.55)'
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2
        const d = r + 4 + pulse
        ctx.fillRect(Math.round(cx + Math.cos(a) * d) - 1, Math.round(cy + Math.sin(a) * d) - 1, 3, 3)
      }
      for (let y = -r; y <= r; y++) {
        for (let x = -r; x <= r; x++) {
          const dist = x * x + y * y
          if (dist <= r * r) {
            ctx.fillStyle = dist < (r - 3) * (r - 3) ? '#ffe680' : '#ffd34d'
            ctx.fillRect(cx + x, cy + y, 1, 1)
          }
        }
      }
      ctx.fillStyle = '#fff6c2'
      ctx.fillRect(cx - 5, cy - 6, 3, 2)
    }

    const drawCloud = (c: Cloud) => {
      const x0 = Math.floor(c.x)
      const y0 = Math.floor(c.y)
      c.shape.forEach(([off, len], row) => {
        ctx.fillStyle = row >= c.shape.length - 2 ? CLOUD_SHADE[c.layer] : CLOUD_COLORS[c.layer]
        ctx.fillRect(x0 + off, y0 + row, len, 1)
      })
    }

    const drawBird = (b: Bird) => {
      const x = Math.floor(b.x)
      const y = Math.floor(b.y)
      const up = Math.floor((tick + b.phase) / 12) % 2 === 0
      ctx.fillStyle = '#3d4a6b'
      ctx.fillRect(x, y, 1, 1)
      if (up) {
        ctx.fillRect(x - 1, y - 1, 1, 1)
        ctx.fillRect(x - 2, y - 1, 1, 1)
        ctx.fillRect(x + 1, y - 1, 1, 1)
        ctx.fillRect(x + 2, y - 1, 1, 1)
      } else {
        ctx.fillRect(x - 1, y, 1, 1)
        ctx.fillRect(x - 2, y + 1, 1, 1)
        ctx.fillRect(x + 1, y, 1, 1)
        ctx.fillRect(x + 2, y + 1, 1, 1)
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      drawSun()
      for (const c of clouds) {
        drawCloud(c)
        if (!reduceMotion) {
          c.x += c.speed
          if (c.x > width + 2) Object.assign(c, makeCloud(false))
        }
      }
      for (const b of birds) {
        drawBird(b)
        if (!reduceMotion) {
          b.x += b.speed
          if (b.x > width + 4) Object.assign(b, makeBird(false))
        }
      }
      tick++
      if (!reduceMotion) frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="sky" aria-hidden="true" />
}

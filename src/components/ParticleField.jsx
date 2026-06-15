import { useEffect, useRef } from 'react'

export default function ParticleField({ type = 'star', count = 30 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: Math.random() * -0.6 - 0.2,
      opacity: Math.random() * 0.7 + 0.3,
      life: Math.random(),
    }))

    const colors = {
      heart:    ['#F4A0B0', '#E8688A', '#F9C784'],
      star:     ['#F9C784', '#ffffff', '#F4A0B0'],
      circle:   ['#9B72CF', '#F4A0B0', '#F9C784'],
      petal:    ['#F4A0B0', '#E8688A', '#ffffff'],
      moon:     ['#9B72CF', '#6B4FA0', '#F9C784'],
      sparkle:  ['#F9C784', '#ffffff', '#9B72CF'],
      firework: ['#F4A0B0', '#F9C784', '#9B72CF', '#F4845F', '#ffffff'],
    }

    const palette = colors[type] || colors.star

    function drawHeart(ctx, x, y, size, color, opacity) {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(x, y)
      const s = size
      ctx.bezierCurveTo(x, y - s * 0.5, x - s, y - s * 0.5, x - s, y)
      ctx.bezierCurveTo(x - s, y + s * 0.5, x, y + s, x, y + s * 1.2)
      ctx.bezierCurveTo(x, y + s, x + s, y + s * 0.5, x + s, y)
      ctx.bezierCurveTo(x + s, y - s * 0.5, x, y - s * 0.5, x, y)
      ctx.fill()
      ctx.restore()
    }

    function drawStar(ctx, x, y, size, color, opacity) {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.fillStyle = color
      ctx.beginPath()
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2
        const r = i % 2 === 0 ? size : size * 0.4
        ctx.lineTo(x + r * Math.cos(angle), y + r * Math.sin(angle))
      }
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    function drawSparkle(ctx, x, y, size, color, opacity) {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 4
        ctx.beginPath()
        ctx.moveTo(x + Math.cos(angle) * size * 0.3, y + Math.sin(angle) * size * 0.3)
        ctx.lineTo(x + Math.cos(angle) * size, y + Math.sin(angle) * size)
        ctx.stroke()
      }
      ctx.restore()
    }

    let raf
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        const color = palette[i % palette.length]
        p.x += p.speedX
        p.y += p.speedY
        p.life += 0.005
        p.opacity = Math.abs(Math.sin(p.life)) * 0.8 + 0.1

        if (p.y < -20) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }
        if (p.x < -20) p.x = canvas.width + 10
        if (p.x > canvas.width + 20) p.x = -10

        if (type === 'heart' || type === 'firework') {
          drawHeart(ctx, p.x, p.y, p.size, color, p.opacity)
        } else if (type === 'star' || type === 'moon') {
          drawStar(ctx, p.x, p.y, p.size + 1, color, p.opacity)
        } else if (type === 'sparkle') {
          drawSparkle(ctx, p.x, p.y, p.size * 2, color, p.opacity)
        } else {
          ctx.save()
          ctx.globalAlpha = p.opacity
          ctx.fillStyle = color
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      })

      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [type, count])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}

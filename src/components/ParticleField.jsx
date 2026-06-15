import { useEffect, useRef } from 'react'

// Literary particles: dust motes, ink drops, tiny quill strokes
export default function ParticleField({ count = 28 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Sepia / parchment dust colors
    const colors = ['#C4A882', '#A8845A', '#8B6340', '#DEC9A0', '#EDE0C4', '#7A5C38']

    const particles = Array.from({ length: count }, (_, i) => ({
      x:      Math.random() * window.innerWidth,
      y:      Math.random() * window.innerHeight,
      size:   Math.random() * 1.8 + 0.4,
      speedX: (Math.random() - 0.5) * 0.18,
      speedY: Math.random() * -0.3 - 0.05,
      opacity: Math.random() * 0.5 + 0.1,
      life:   Math.random() * Math.PI * 2,
      color:  colors[i % colors.length],
      type:   i % 4, // 0=dot, 1=tiny line, 2=cross-hair, 3=diamond
    }))

    function drawDot(x, y, size, color, alpha) {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    function drawStroke(x, y, size, color, alpha) {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.strokeStyle = color
      ctx.lineWidth = 0.6
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(x - size * 1.5, y)
      ctx.lineTo(x + size * 1.5, y)
      ctx.stroke()
      ctx.restore()
    }

    function drawDiamond(x, y, size, color, alpha) {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(x, y - size)
      ctx.lineTo(x + size * 0.5, y)
      ctx.lineTo(x, y + size)
      ctx.lineTo(x - size * 0.5, y)
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    function drawPlus(x, y, size, color, alpha) {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.strokeStyle = color
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(x, y - size); ctx.lineTo(x, y + size)
      ctx.moveTo(x - size, y); ctx.lineTo(x + size, y)
      ctx.stroke()
      ctx.restore()
    }

    let raf
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.speedX
        p.y += p.speedY
        p.life += 0.006
        p.opacity = Math.abs(Math.sin(p.life)) * 0.45 + 0.05

        if (p.y < -10)               { p.y = canvas.height + 5; p.x = Math.random() * canvas.width }
        if (p.x < -10)                 p.x = canvas.width + 5
        if (p.x > canvas.width + 10)   p.x = -5

        if      (p.type === 1) drawStroke (p.x, p.y, p.size, p.color, p.opacity)
        else if (p.type === 2) drawPlus   (p.x, p.y, p.size * 2, p.color, p.opacity)
        else if (p.type === 3) drawDiamond(p.x, p.y, p.size, p.color, p.opacity)
        else                   drawDot    (p.x, p.y, p.size, p.color, p.opacity)
      }

      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  )
}

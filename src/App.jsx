import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { cards } from './data/cards'
import CardView from './components/CardView'
import ParticleField from './components/ParticleField'
import SunsetBackground from './components/SunsetBackground'

export default function App() {
  const [index, setIndex] = useState(0)
  const card = cards[index]
  const progress = Array.from({ length: cards.length - 1 }, (_, i) => i < index)

  const handleNext = () => setIndex(prev => (prev >= cards.length - 1 ? 0 : prev + 1))

  return (
    <div className="relative w-full h-safe min-h-screen overflow-hidden vignette">
      <SunsetBackground index={index} />
      <ParticleField count={index === cards.length - 1 ? 45 : 22} />

      {/* Warm candlelight glow top-left */}
      <div
        className="fixed top-[-10%] left-[-5%] w-[55vw] h-[55vw] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,132,90,0.18), transparent 70%)',
          animation: 'candle 2.5s ease-in-out infinite',
        }}
      />
      {/* Deep shadow bottom-right */}
      <div
        className="fixed bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(92,63,30,0.12), transparent 70%)',
        }}
      />

      <AnimatePresence mode="wait">
        <CardView
          key={index}
          card={card}
          onNext={handleNext}
          progress={progress}
        />
      </AnimatePresence>
    </div>
  )
}

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { cards } from './data/cards'
import CardView from './components/CardView'
import ParticleField from './components/ParticleField'
import SunsetBackground from './components/SunsetBackground'

export default function App() {
  const [index, setIndex] = useState(0)

  const card = cards[index]
  const totalSteps = cards.length
  const progress = Array.from({ length: totalSteps - 1 }, (_, i) => i < index)

  const handleNext = () => {
    setIndex(prev => (prev >= cards.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full h-screen overflow-hidden select-none">
      <SunsetBackground index={index} />
      <ParticleField type={card.particle} count={index === cards.length - 1 ? 60 : 25} />

      <div
        className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none opacity-20 animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #F4A0B0, transparent 70%)' }}
      />
      <div
        className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-20 animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #9B72CF, transparent 70%)', animationDelay: '1.5s' }}
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

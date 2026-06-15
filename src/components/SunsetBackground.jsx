import { motion, AnimatePresence } from 'framer-motion'

// Dark literary backgrounds — aged wood, candlelight, old library
const backgrounds = [
  // deep library night
  'radial-gradient(ellipse at 30% 40%, #3E2710 0%, #2C1F14 40%, #150D07 100%)',
  // warm candlelight corner
  'radial-gradient(ellipse at 70% 30%, #5C3F1E 0%, #3E2710 35%, #1E1008 80%, #0D0704 100%)',
  // moonlit manuscript
  'radial-gradient(ellipse at 50% 20%, #4A3728 0%, #2C1F14 45%, #150D07 100%)',
  // amber lantern
  'radial-gradient(ellipse at 25% 60%, #6B4A2A 0%, #3E2710 40%, #1A0E07 100%)',
  // ink and shadow
  'radial-gradient(ellipse at 60% 70%, #3E2710 0%, #1E1008 40%, #0D0704 100%)',
  // old bookshelf
  'radial-gradient(ellipse at 40% 30%, #5C3F1E 0%, #2C1F14 50%, #150D07 100%)',
  // final — warm glow
  'radial-gradient(ellipse at 50% 50%, #7A5C38 0%, #5C3F1E 30%, #3E2710 55%, #1E1008 80%, #0D0704 100%)',
]

export default function SunsetBackground({ index }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        className="fixed inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.4 }}
        style={{ background: backgrounds[index % backgrounds.length] }}
      />
    </AnimatePresence>
  )
}

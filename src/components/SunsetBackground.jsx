import { motion, AnimatePresence } from 'framer-motion'

const gradients = [
  'linear-gradient(135deg, #1A1035 0%, #3D2B6E 40%, #9B72CF 70%, #F4A0B0 100%)',
  'linear-gradient(135deg, #F9C784 0%, #F4845F 30%, #E8688A 65%, #9B72CF 100%)',
  'linear-gradient(135deg, #E8688A 0%, #9B72CF 40%, #6B4FA0 75%, #1A1035 100%)',
  'linear-gradient(135deg, #F4A0B0 0%, #E8688A 25%, #9B72CF 60%, #3D2B6E 100%)',
  'linear-gradient(135deg, #3D2B6E 0%, #6B4FA0 30%, #9B72CF 55%, #F4A0B0 100%)',
  'linear-gradient(135deg, #1A1035 0%, #3D2B6E 30%, #6B4FA0 60%, #F9C784 100%)',
  'linear-gradient(135deg, #F4A0B0 0%, #F9C784 20%, #E8688A 50%, #9B72CF 75%, #1A1035 100%)',
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
        transition={{ duration: 1.2 }}
        style={{ background: gradients[index % gradients.length] }}
      />
    </AnimatePresence>
  )
}

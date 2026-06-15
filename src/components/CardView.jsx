import { motion } from 'framer-motion'
import { BookOpen, Feather, Star, Compass, Moon, Flame, Heart, ArrowRight, RotateCcw, Quote } from 'lucide-react'

const pageVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 4,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 1.02,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

const lineVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const ICONS = {
  0: BookOpen,
  1: Feather,
  2: Quote,
  3: Compass,
  4: Moon,
  5: Flame,
  6: Heart,
}

// Roman numerals for card numbering
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', '—']

export default function CardView({ card, onNext, progress }) {
  const isFinal = card.type === 'final'
  const Icon = ICONS[card.id] ?? Star
  const roman = ROMAN[card.id] ?? ''

  return (
    <motion.div
      key={card.id}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ perspective: '1200px' }}
      className="
        relative z-10
        flex flex-col items-center justify-center
        h-safe min-h-screen
        px-4 xs:px-6 py-8
        overflow-y-auto
      "
    >
      {/* ── Chapter indicator ── */}
      {!isFinal && (
        <motion.div variants={lineVariants} className="mb-5 xs:mb-7 text-center">
          <p className="font-mono text-parchment-400 text-[10px] xs:text-xs tracking-[0.35em] uppercase opacity-60">
            — {roman} —
          </p>
        </motion.div>
      )}

      {/* ── Paper card ── */}
      <div className="w-full max-w-[340px] xs:max-w-[380px] mx-auto">
        <motion.div
          variants={lineVariants}
          className={`
            relative rounded-sm
            px-7 xs:px-9 py-8 xs:py-10
            shadow-paper
            ${isFinal ? 'paper-aged' : 'paper-texture'}
          `}
          style={{
            boxShadow: isFinal
              ? '0 2px 8px rgba(0,0,0,0.35), 0 12px 40px rgba(0,0,0,0.4), inset 0 0 80px rgba(200,169,122,0.15)'
              : '0 2px 6px rgba(0,0,0,0.25), 0 8px 32px rgba(0,0,0,0.35)',
          }}
        >
          {/* Paper top edge fold */}
          <div
            className="absolute top-0 right-0 w-7 h-7 xs:w-8 xs:h-8"
            style={{
              background: 'linear-gradient(225deg, #DEC9A0 45%, transparent 45%)',
              borderRadius: '0 2px 0 0',
            }}
          />
          {/* Final: decorative stars row */}
          {isFinal && (
            <motion.div
              variants={lineVariants}
              className="flex justify-center gap-3 mt-6"
            >
              {[Star, Star, Heart, Star, Star].map((Ic, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
                >
                  <Ic
                    size={i === 2 ? 16 : 11}
                    strokeWidth={1.2}
                    className="text-sepia"
                    fill={i === 2 ? '#8B6340' : 'none'}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
          <div
            className="absolute top-0 right-0 w-7 h-7 xs:w-8 xs:h-8"
            style={{
              background: 'linear-gradient(225deg, #C8A97A 0%, #EDE0C4 50%, transparent 50%)',
              borderRadius: '0 2px 0 0',
              opacity: 0.5,
            }}
          />

            
          {/* Ruled lines background on non-final cards */}
          {!isFinal && (
            <div className="absolute inset-0 rounded-sm overflow-hidden pointer-events-none ruled-lines opacity-60" />
          )}

          {/* Eyebrow — like a chapter subtitle */}
          <motion.p
            variants={lineVariants}
            className="
              text-center font-mono
              text-[9px] xs:text-[10px]
              tracking-[0.28em] uppercase
              text-parchment-500 mb-2
            "
          >
            {card.eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h1
            variants={lineVariants}
            className={`
              font-serif text-center leading-snug mb-5
              ${isFinal
                ? 'text-4xl xs:text-5xl italic font-medium ink-shimmer'
                : 'text-3xl xs:text-[2rem] italic font-normal text-ink'
              }
            `}
            style={{ whiteSpace: 'pre-line' }}
          >
            {card.title}
          </motion.h1>

          {/* Ornamental divider — literary flourish */}
          <motion.div variants={lineVariants} className="flex items-center gap-2 mb-5">
            <div className="flex-1 h-px bg-parchment-300" />
            <div className="flex gap-1 items-center">
              <div className="w-1 h-1 rounded-full bg-sepia opacity-50" />
              <div className="w-1.5 h-1.5 rotate-45 bg-sepia opacity-70" />
              <div className="w-1 h-1 rounded-full bg-sepia opacity-50" />
            </div>
            <div className="flex-1 h-px bg-parchment-300" />
          </motion.div>

          {/* Body — literary prose */}
          <motion.p
            variants={lineVariants}
            className={`
              font-serif font-normal text-center leading-[1.9]
              text-sm xs:text-base
              ${isFinal ? 'text-ink-light italic' : 'text-ink-light'}
            `}
            style={{ whiteSpace: 'pre-line' }}
          >
            {card.body}
          </motion.p>

          {/* Final: decorative stars row */}
          {isFinal && (
            <motion.div
              variants={lineVariants}
              className="flex justify-center gap-3 mt-6"
            >
              {[Star, Star, Heart, Star, Star].map((Ic, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
                >
                  <Ic
                    size={i === 2 ? 16 : 11}
                    strokeWidth={1.2}
                    className="text-sepia"
                    fill={i === 2 ? '#8B6340' : 'none'}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Page number — literary touch */}
          <motion.p
            variants={lineVariants}
            className="
              absolute bottom-3 left-1/2 -translate-x-1/2
              font-mono text-[9px] text-parchment-400 tracking-widest
            "
          >
            {isFinal ? '∞' : card.id + 1}
          </motion.p>
        </motion.div>

        {/* ── CTA — styled as a footnote / marginalia ── */}
        {!isFinal && (
          <motion.div variants={lineVariants} className="mt-6 xs:mt-7 text-center">
            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex items-center gap-2
                font-mono text-[10px] xs:text-xs
                tracking-[0.25em] uppercase
                text-parchment-300
                border border-parchment-600/30
                rounded-sm
                px-6 py-3
                bg-ink/20 backdrop-blur-sm
                hover:bg-ink/35
                transition-colors duration-300
                cursor-pointer touch-manipulation
              "
            >
              {card.cta}
              <ArrowRight size={11} strokeWidth={1.5} />
            </motion.button>
          </motion.div>
        )}

        {/* Restart */}
        {isFinal && (
          <motion.div variants={lineVariants} className="mt-6 text-center">
            <button
              onClick={onNext}
              className="
                inline-flex items-center gap-2
                font-mono text-[9px] tracking-[0.3em] uppercase
                text-parchment-500/50
                hover:text-parchment-400
                transition-colors cursor-pointer touch-manipulation
              "
            >
              <RotateCcw size={10} strokeWidth={1.4} />
              volver al inicio
            </button>
          </motion.div>
        )}
      </div>

      {/* ── Progress: small roman dot markers at bottom ── */}
      {!isFinal && (
        <motion.div variants={lineVariants} className="mt-6 xs:mt-8 flex gap-1.5">
          {progress.map((filled, i) => (
            <div
              key={i}
              className={`
                rounded-full transition-all duration-500
                ${filled
                  ? 'w-4 xs:w-5 h-1.5 bg-parchment-400'
                  : 'w-1.5 h-1.5 bg-parchment-700'}
              `}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

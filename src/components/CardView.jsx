import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 60 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.12 }
  },
  exit: {
    opacity: 0, scale: 1.05, y: -60,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function CardView({ card, onNext, progress }) {
  const isFinal = card.type === 'final'
  const isIntro = card.type === 'intro'

  return (
    <motion.div
      key={card.id}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12"
    >
      {/* Progress dots */}
      {!isFinal && (
        <motion.div
          variants={itemVariants}
          className="flex gap-2 mb-8"
        >
          {progress.map((filled, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-500 ${
                filled
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/30'
              }`}
            />
          ))}
        </motion.div>
      )}

      {/* Card */}
      <div className="w-full max-w-sm mx-auto">
        {/* Emoji */}
        <motion.div
          variants={itemVariants}
          className={`text-center mb-6 ${isFinal ? 'animate-heartbeat' : 'animate-float'}`}
        >
          <span className="text-6xl filter drop-shadow-lg">{card.emoji}</span>
        </motion.div>

        {/* Glass card */}
        <motion.div
          variants={itemVariants}
          className="card-glass rounded-3xl p-8 shadow-2xl"
          style={{
            boxShadow: isFinal
              ? '0 0 60px rgba(244,160,176,0.5), 0 0 120px rgba(155,114,207,0.3)'
              : '0 8px 40px rgba(0,0,0,0.3)'
          }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="text-center font-sans font-light tracking-[0.2em] text-xs uppercase text-white/60 mb-3"
          >
            {card.eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className={`font-serif text-center leading-tight mb-6 text-shadow ${
              isFinal
                ? 'text-5xl font-light italic shimmer-text'
                : 'text-4xl font-light text-white'
            }`}
            style={{ whiteSpace: 'pre-line' }}
          >
            {card.title}
          </motion.h1>

          {/* Divider */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/40 rotate-45" />
            <div className="flex-1 h-px bg-white/20" />
          </motion.div>

          {/* Body */}
          <motion.p
            variants={itemVariants}
            className="font-serif font-light text-lg text-white/85 text-center leading-relaxed text-shadow"
            style={{ whiteSpace: 'pre-line' }}
          >
            {card.body}
          </motion.p>

          {/* Final hearts decoration */}
          {isFinal && (
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-3 mt-6"
            >
              {['❤️', '🧡', '💜', '🧡', '❤️'].map((h, i) => (
                <motion.span
                  key={i}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                  className="text-xl"
                >
                  {h}
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* CTA Button */}
        {!isFinal && (
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="
                px-8 py-4 rounded-full
                bg-white/15 backdrop-blur-sm
                border border-white/30
                text-white font-sans font-light
                tracking-widest text-sm uppercase
                transition-all duration-300
                hover:bg-white/25
                cursor-pointer
              "
            >
              {card.cta}
            </motion.button>
          </motion.div>
        )}

        {/* Restart on final */}
        {isFinal && (
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <button
              onClick={onNext}
              className="text-white/40 font-sans font-light text-xs tracking-widest uppercase hover:text-white/70 transition-colors cursor-pointer"
            >
              Volver al inicio
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

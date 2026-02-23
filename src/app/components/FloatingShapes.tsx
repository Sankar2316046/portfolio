import { motion } from 'motion/react';

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating blob 1 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'linear-gradient(135deg, #7F5AF0 0%, #00F5FF 100%)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating blob 2 */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, #00F5FF 0%, #7F5AF0 100%)',
          top: '60%',
          right: '10%',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating blob 3 */}
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{
          background: 'linear-gradient(45deg, #00F5FF 0%, #7F5AF0 100%)',
          bottom: '20%',
          left: '50%',
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

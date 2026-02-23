import { motion } from 'motion/react';
import { ChevronDown, Download, Eye } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0B0F19' }}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(127, 90, 240, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 245, 255, 0.3) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-[#00F5FF] mb-4 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00F5FF 50%, #7F5AF0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm <span className="block mt-2">Alex Johnson</span>
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-4xl text-white/90 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Full Stack Developer | Building Scalable Web Apps
          </motion.h2>
          
          <motion.p
            className="text-white/70 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            CSE 3rd year student passionate about creating innovative solutions.
            Specializing in modern web technologies and cloud-native applications.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {/* Primary glowing button */}
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 rounded-lg overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #7F5AF0 0%, #00F5FF 100%)',
                boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 245, 255, 0.8)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 text-white">
                <Eye className="w-5 h-5" />
                View Projects
              </span>
            </motion.a>
            
            {/* Glass outline button */}
            <motion.a
              href="#"
              className="group relative px-8 py-4 rounded-lg overflow-hidden"
              style={{
                border: '2px solid rgba(0, 245, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(0, 245, 255, 0.6)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 text-white/90">
                <Download className="w-5 h-5" />
                Download Resume
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-white/50 hover:text-[#00F5FF] transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}

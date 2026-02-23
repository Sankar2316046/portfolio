import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Rocket } from 'lucide-react';

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Computer Science & Engineering',
      organization: 'University of Technology',
      date: '2022 - Present',
      description: 'Currently in 3rd year, focusing on software engineering, algorithms, and web technologies. CGPA: 3.8/4.0',
      type: 'education',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Full Stack Developer Intern',
      organization: 'TechCorp Solutions',
      date: 'Jun 2024 - Aug 2024',
      description: 'Built scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality features.',
      type: 'work',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Freelance Web Developer',
      organization: 'Self-Employed',
      date: '2023 - Present',
      description: 'Developed custom web solutions for 10+ clients. Specialized in e-commerce platforms and business websites.',
      type: 'work',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Frontend Developer Intern',
      organization: 'StartupHub Inc',
      date: 'Jan 2024 - Apr 2024',
      description: 'Created responsive user interfaces and implemented modern design systems. Improved page load times by 40%.',
      type: 'work',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: '#0d1117' }}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(0, 245, 255, 0.2) 0%, transparent 50%)',
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00F5FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Experience & Journey
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #7F5AF0 0%, #00F5FF 100%)' }} />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5"
            style={{
              background: 'linear-gradient(180deg, rgba(127, 90, 240, 0.5) 0%, rgba(0, 245, 255, 0.5) 100%)',
              boxShadow: '0 0 10px rgba(0, 245, 255, 0.5)',
            }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                <motion.div
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 10px 40px rgba(0, 245, 255, 0.2)',
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{
                        background: 'linear-gradient(135deg, rgba(127, 90, 240, 0.3) 0%, rgba(0, 245, 255, 0.3) 100%)',
                        color: '#00F5FF',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-lg mb-1">{item.title}</h3>
                      <p className="text-[#00F5FF] text-sm mb-1">{item.organization}</p>
                      <p className="text-white/50 text-xs">{item.date}</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2">
                <motion.div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #7F5AF0 0%, #00F5FF 100%)',
                    boxShadow: '0 0 20px rgba(0, 245, 255, 0.8)',
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  whileHover={{ scale: 1.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

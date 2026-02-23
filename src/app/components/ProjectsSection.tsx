import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Cognify',
      description: 'A comprehensive full-stack educational platform that dynamically generates customized test questions and provides an interactive environment for students to answer and receive instant feedback.',
      tech: ['Next.js', 'Supabase', 'shadcn/ui', 'python/ai'],
      image: '/cognify.jpg',
      liveUrl: 'cognify-teacher.vercel.app',
      githubUrl: 'https://github.com/Sankar2316046/cognify-student',
    },
    {
      title: 'Ai summariser',
      description: 'An AI-powered text summarization and translation tool that condenses lengthy and complex documents into concise summaries and translates content across multiple languages.',
      tech: ['React', 'Supabase', 'gemini/ai', 'shadcn/ui'],
      image: '/ai.jpeg',
      liveUrl: 'https://ai-summarizer-rho-two.vercel.app/',
      githubUrl: 'https://github.com/Sankar2316046/ai-summarizer',
    },
    {
      title: 'Stock management system',
      description: 'A comprehensive full-stack educational platform that dynamically generates customized test questions and provides an interactive environment for students to answer and receive instant feedback.',
      tech: ['Next.js', 'Supabase', 'shadcn/ui', 'tanstack'],
      image: '/stock.png',
      liveUrl: 'https://stock-management-system.vercel.app/',
      githubUrl: 'https://github.com/Sankar2316046/stock-management-system',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: '#0B0F19' }}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(127, 90, 240, 0.3) 0%, transparent 50%)',
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #7F5AF0 0%, #00F5FF 100%)' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Gradient border glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(127, 90, 240, 0.5) 0%, rgba(0, 245, 255, 0.5) 100%)',
                  padding: '2px',
                  borderRadius: '1rem',
                  zIndex: -1,
                }}
              />

              {/* Project Image/Mockup */}
              <div className="h-48 relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white text-xl mb-3">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: 'rgba(0, 245, 255, 0.1)',
                        color: '#00F5FF',
                        border: '1px solid rgba(0, 245, 255, 0.2)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #7F5AF0 0%, #00F5FF 100%)',
                      color: 'white',
                    }}
                    whileHover={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm"
                    style={{
                      border: '1px solid rgba(0, 245, 255, 0.3)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                    }}
                    whileHover={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'rgba(0, 245, 255, 0.6)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useState } from 'react';

const skills = [
  {
    category: 'Frontend Development',
    technologies: [
      { name: 'React', level: 95, years: '5+' },
      { name: 'TypeScript', level: 90, years: '4+' },
      { name: 'Next.js', level: 92, years: '3+' },
      { name: 'Vue.js', level: 85, years: '3+' },
    ],
  },
  {
    category: 'Backend Development',
    technologies: [
      { name: 'Node.js', level: 93, years: '5+' },
      { name: 'Python', level: 88, years: '4+' },
      { name: 'GraphQL', level: 87, years: '3+' },
      { name: 'REST APIs', level: 95, years: '5+' },
    ],
  },
  {
    category: 'Database & Cloud',
    technologies: [
      { name: 'PostgreSQL', level: 90, years: '4+' },
      { name: 'MongoDB', level: 88, years: '4+' },
      { name: 'AWS', level: 85, years: '3+' },
      { name: 'Docker', level: 87, years: '3+' },
    ],
  },
  {
    category: 'Design & Tools',
    technologies: [
      { name: 'Figma', level: 92, years: '5+' },
      { name: 'UI/UX Design', level: 88, years: '5+' },
      { name: 'Git', level: 95, years: '5+' },
      { name: 'Agile/Scrum', level: 90, years: '4+' },
    ],
  },
];

const certifications = [
  'AWS Certified Solutions Architect',
  'Google Cloud Professional',
  'MongoDB Certified Developer',
];

export function TechStackSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-6 lg:px-16 bg-gray-50">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p 
            className="text-gray-500 mb-3 tracking-widest"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.15em' }}
          >
            EXPERTISE
          </p>
          <h2 
            className="tracking-tight text-black mb-4"
            style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Technical Skills
          </h2>
          <p 
            className="text-gray-600 max-w-2xl"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontSize: '1.125rem',
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Comprehensive technical proficiency across the full development stack, 
            from frontend frameworks to cloud infrastructure.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, categoryIndex) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-lg p-8 border border-gray-200"
            >
              <h3 
                className="text-black mb-6"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                }}
              >
                {skill.category}
              </h3>
              
              <div className="space-y-5">
                {skill.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    onMouseEnter={() => setHoveredSkill(tech.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span 
                        className="text-gray-800 font-medium"
                        style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem' }}
                      >
                        {tech.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <span 
                          className="text-gray-500 text-xs"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {tech.years} years
                        </span>
                        <span 
                          className="text-gray-800 text-sm font-semibold min-w-[2.5rem] text-right"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {tech.level}%
                        </span>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-black"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.2, ease: 'easeOut' }}
                        style={{
                          backgroundColor: hoveredSkill === tech.name ? '#000' : '#1f2937',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-black text-white rounded-lg p-8"
          >
            <h3 
              className="mb-8"
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontSize: '1.25rem',
                fontWeight: 600,
              }}
            >
              Professional Metrics
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '30+', label: 'Happy Clients' },
                { value: '15+', label: 'Technologies' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: 600,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg p-8 border border-gray-200"
          >
            <h3 
              className="text-black mb-6"
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontSize: '1.25rem',
                fontWeight: 600,
              }}
            >
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <svg 
                    className="w-5 h-5 text-black mt-0.5 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <span 
                    className="text-gray-700 text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

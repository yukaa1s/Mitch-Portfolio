import { ProjectCard } from './ui/expand-map';
import { motion } from 'motion/react';

const projects = [
  {
    title: "OMS System",
    category: "Order Management",
    description: "High-performance order management system processing 10K+ orders daily with real-time analytics.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    link: "https://oms-demo.vercel.app",
    techStack: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "FundWise",
    category: "FinTech",
    description: "AI-powered investment platform with portfolio tracking and risk analysis.",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    link: "https://fundwise.vercel.app",
    techStack: ["Next.js", "TypeScript", "TensorFlow"]
  },
  {
    title: "ERP Suite",
    category: "Business Management",
    description: "Enterprise resource planning with automated workflows and inventory management.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    link: "https://erp-suite.vercel.app",
    techStack: ["React", "GraphQL", "MongoDB"]
  }
];

export function ProjectsSection() {
  return (
    <section className="relative bg-white pt-20 pb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-gray-900 text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of my best work, demonstrating my skills in full-stack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

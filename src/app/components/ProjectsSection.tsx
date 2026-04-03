import { ProjectCard } from './ui/expand-map';
import { motion } from 'motion/react';

const projects = [
  {
    title: "OMS System",
    category: "Multi-Tenant Office Management System",
    description: "B2B SaaS platform with Multi-tenant Architecture ensuring strict data isolation while serving diverse industries through a unified codebase. Built to handle complex business operations beyond simple CRUD.",
    imageUrl: "/Pics/Projects/Oms System.png",
    link: "https://oms-system-multi-tenant-office-mana.vercel.app",
    techStack: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "FundWise",
    category: "Finance Tracker",
    description: "Financial management app with real-time expense tracking, budget management, and AI-powered insights. Features intelligent analytics for holistic personal wellness and savings goals.",
    imageUrl: "/Pics/Projects/FundWise.png",
    link: "https://fund-wise-finance-tracker.vercel.app",
    techStack: ["Next.js", "TypeScript", "AI", "TensorFlow"]
  },
  {
    title: "Nexus Brain",
    category: "RAG Knowledge Base",
    description: "AI-powered knowledge management with document upload, semantic search, and intelligent chat capabilities. Enables efficient information retrieval and contextual conversations.",
    imageUrl: "/Pics/Projects/Nexus Brain.png",
    link: "https://nexus-brain-lake.vercel.app/auth",
    techStack: ["Next.js", "TypeScript", "AI/ML", "Vector DB"]
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

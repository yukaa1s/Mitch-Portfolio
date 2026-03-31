"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title?: string
  category?: string
  description?: string
  imageUrl?: string
  link?: string
  techStack?: string[]
  className?: string
}

export function ProjectCard({
  title = "Project Name",
  category = "Web App",
  description = "A modern web application built with React and TypeScript.",
  imageUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  link = "#",
  techStack = ["React", "TypeScript", "Tailwind"],
  className,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [6, -6])
  const rotateY = useTransform(mouseX, [-50, 50], [-6, 6])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Animated Picture Box */}
      <motion.div
        ref={containerRef}
        className="relative cursor-pointer overflow-hidden rounded-2xl bg-background border border-border shadow-lg"
        style={{ perspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <motion.div
          className="relative overflow-hidden"
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: "preserve-3d",
          }}
          animate={{
            width: isExpanded ? 380 : 300,
            height: isExpanded ? 260 : 200,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 35,
          }}
        >
          {/* Project Image */}
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          
          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              boxShadow: isHovered
                ? "inset 0 0 40px rgba(52, 211, 153, 0.15)"
                : "inset 0 0 0px rgba(52, 211, 153, 0)",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      {/* Click hint */}
      <motion.p
        className="absolute -bottom-6 left-1/2 text-[10px] text-muted-foreground whitespace-nowrap"
        style={{ x: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered && !isExpanded ? 1 : 0,
          y: isHovered ? 0 : 4,
        }}
        transition={{ duration: 0.2 }}
      >
        Click to expand
      </motion.p>

      {/* Static Info - Below the animated box */}
      <div className="mt-8">
        {/* Title & Category */}
        <div className="mb-3">
          <h3 className="text-foreground font-bold text-xl tracking-tight mb-1">
            {title}
          </h3>
          <p className="text-muted-foreground text-xs uppercase tracking-wider">
            {category}
          </p>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-3 py-1.5 rounded-full bg-secondary border border-border text-secondary-foreground font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

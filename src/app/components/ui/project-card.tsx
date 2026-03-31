"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"
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
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8])
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8])

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
    <motion.div
      ref={containerRef}
      className={`relative cursor-pointer select-none ${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-background border border-border shadow-lg"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          width: isExpanded ? 380 : 300,
          height: isExpanded ? 480 : 200,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
      >
        {/* Image Section */}
        <div className="relative w-full h-40 overflow-hidden">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="relative z-10 p-5">
          {/* Title & Category */}
          <div className="mb-3">
            <motion.h3
              className="text-foreground font-semibold text-lg tracking-tight mb-1"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {title}
            </motion.h3>
            <p className="text-muted-foreground text-xs uppercase tracking-wider">
              {category}
            </p>
          </div>

          {/* Description - shown when expanded */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-secondary border border-border text-secondary-foreground font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project <ExternalLink className="w-3 h-3" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated underline */}
          <motion.div
            className="h-px bg-gradient-to-r from-emerald-500/50 via-emerald-400/30 to-transparent mt-4"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: isHovered || isExpanded ? 1 : 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? "inset 0 0 30px rgba(52, 211, 153, 0.1)"
              : "inset 0 0 0px rgba(52, 211, 153, 0)",
          }}
          transition={{ duration: 0.3 }}
        />
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
    </motion.div>
  )
}

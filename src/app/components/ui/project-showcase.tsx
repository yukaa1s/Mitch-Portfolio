"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

interface Project {
  title: string
  description: string
  year: string
  link: string
  image: string
  category: string
}

const projects: Project[] = [
  {
    title: "OMS System",
    description: "Multi-tenant office management system with role-based access control, resource scheduling, and team collaboration features.",
    year: "2024",
    link: "https://oms-system-multi-tenant-office-mana.vercel.app/",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "FundWise",
    description: "Personal finance tracker with expense categorization, budget planning, and visual analytics dashboard.",
    year: "2024",
    link: "https://fund-wise-finance-tracker.vercel.app/login",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
  },
  {
    title: "Healthcare Platform",
    description: "HIPAA-compliant telemedicine platform connecting patients with healthcare professionals.",
    year: "2023",
    link: "#",
    category: "Mobile & Web",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    title: "Design System",
    description: "Comprehensive component library and design tokens for consistent brand experience.",
    year: "2023",
    link: "#",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
]

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove} 
      className="relative w-full max-w-4xl mx-auto px-6 py-16 bg-background"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase mb-3">
          Selected Work
        </p>
        <h2 className="text-foreground text-4xl md:text-5xl font-semibold tracking-tight">
          Featured Projects
        </h2>
      </motion.div>

      {/* Floating Image Preview */}
      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-lg shadow-2xl"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[300px] h-[200px] bg-secondary rounded-lg overflow-hidden border border-border">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                transform: hoveredIndex === index ? "scale(1)" : "scale(1.1)",
                filter: hoveredIndex === index ? "none" : "blur(8px)",
              }}
            />
          ))}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-0">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            className="group block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative py-6 border-t border-border transition-all duration-300 ease-out">
              {/* Background highlight on hover */}
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-secondary rounded-lg
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Category & Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-muted-foreground text-xs tracking-wider font-mono">
                      {project.category}
                    </span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span className="text-muted-foreground text-xs tracking-wider font-mono">
                      {project.year}
                    </span>
                  </div>

                  {/* Title with animated underline */}
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-foreground font-medium text-xl md:text-2xl tracking-tight">
                      <span className="relative">
                        {project.title}
                        {/* Animated underline */}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-px bg-foreground
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>

                    {/* Arrow that slides in */}
                    <ArrowUpRight
                      className={`
                        w-5 h-5 text-muted-foreground
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }
                      `}
                    />
                  </div>

                  {/* Description with fade effect */}
                  <p
                    className={`
                      text-muted-foreground text-sm mt-2 leading-relaxed max-w-xl
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-foreground/70" : "text-muted-foreground"}
                    `}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Project number */}
                <span
                  className={`
                    text-sm font-mono text-muted-foreground tabular-nums
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "text-foreground/60" : ""}
                  `}
                >
                  0{index + 1}
                </span>
              </div>
            </div>
          </motion.a>
        ))}

        {/* Bottom border for last item */}
        <div className="border-t border-border" />
      </div>
    </section>
  )
}

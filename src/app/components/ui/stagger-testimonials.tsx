"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const SQRT_5000 = Math.sqrt(5000);

const projects = [
  {
    tempId: 0,
    description: "High-performance order management system processing 10K+ orders daily with real-time analytics.",
    title: "OMS System",
    category: "Order Management",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    link: "https://oms-demo.vercel.app",
    techStack: ["React", "Node.js", "PostgreSQL"]
  },
  {
    tempId: 1,
    description: "AI-powered investment platform with portfolio tracking and risk analysis.",
    title: "FundWise",
    category: "FinTech",
    imgSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    link: "https://fundwise.vercel.app",
    techStack: ["Next.js", "TypeScript", "TensorFlow"]
  },
  {
    tempId: 2,
    description: "Enterprise resource planning with automated workflows and inventory management.",
    title: "ERP Suite",
    category: "Business Management",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    link: "https://erp-suite.vercel.app",
    techStack: ["React", "GraphQL", "MongoDB"]
  },
  {
    tempId: 3,
    description: "Real-time chat application with WebSocket support and end-to-end encryption.",
    title: "ChatStream",
    category: "Communication",
    imgSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
    link: "https://chatstream.vercel.app",
    techStack: ["Socket.io", "Express", "WebRTC"]
  },
  {
    tempId: 4,
    description: "Scalable e-commerce platform with integrated payment gateways and analytics.",
    title: "ShopNexus",
    category: "E-Commerce",
    imgSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    link: "https://shopnexus.vercel.app",
    techStack: ["Next.js", "Stripe", "Prisma"]
  },
  {
    tempId: 5,
    description: "Healthcare management with patient records and appointment scheduling.",
    title: "MediCare Pro",
    category: "HealthTech",
    imgSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    link: "https://medicare-pro.vercel.app",
    techStack: ["React", "Node.js", "PostgreSQL"]
  },
  {
    tempId: 6,
    description: "Learning management system with video streaming and interactive quizzes.",
    title: "EduLearn",
    category: "Education",
    imgSrc: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
    link: "https://edulearn.vercel.app",
    techStack: ["Next.js", "MongoDB", "AWS"]
  },
  {
    tempId: 7,
    description: "Blockchain supply chain tracking with smart contract integration.",
    title: "ChainTrack",
    category: "Web3",
    imgSrc: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    link: "https://chaintrack.vercel.app",
    techStack: ["Solidity", "Ethers.js", "React"]
  }
];

interface ProjectCardProps {
  position: number;
  project: typeof projects[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  position, 
  project, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`absolute left-1/2 top-1/2 cursor-pointer border-2 transition-all duration-500 ease-in-${
        isCenter 
          ? "z-10 bg-foreground text-background border-foreground" 
          : "z-0 bg-card text-card-foreground border-border hover:border-foreground/50"
      }`}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 2) * position}px)
          translateY(${isCenter ? -40 : position % 2 ? 10 : -10}px)
          rotate(${isCenter ? 0 : position % 2 ? 2 : -2}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      
      {/* Big Image at Top */}
      <div className="relative w-full h-48 overflow-hidden" style={{ clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 0, 100% 100%, 0 100%, 0 0)` }}>
        <img
          src={project.imgSrc}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      {/* Content Area */}
      <div className="flex flex-col h-[calc(100%-12rem)] px-6 py-5 overflow-hidden">
        {/* Title */}
        <h3 className={`text-xl font-bold mb-2 ${isCenter ? "text-background" : "text-foreground"}`}>
          {project.title}
        </h3>
        
        {/* Category */}
        <p className={`text-xs uppercase tracking-wider mb-3 ${isCenter ? "text-background/70" : "text-muted-foreground"}`}>
          {project.category}
        </p>
        
        {/* Description */}
        <p className={`text-sm leading-relaxed flex-grow mb-4 ${isCenter ? "text-background/90" : "text-muted-foreground"}`}>
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`text-[10px] px-2 py-0.5 rounded border ${
                isCenter 
                  ? "bg-background/20 border-background/30 text-background" 
                  : "bg-secondary border-border text-secondary-foreground"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* View Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1 text-xs hover:underline mt-auto ${
            isCenter ? "text-background" : "text-foreground"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          View Project <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export const StaggerProjects: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [projectsList, setProjectsList] = useState(projects);

  const handleMove = (steps: number) => {
    const newList = [...projectsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setProjectsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-background px-[100px]"
      style={{ height: 650 }}
    >
      {projectsList.map((project, index) => {
        const position = projectsList.length % 2
          ? index - (projectsList.length + 1) / 2
          : index - projectsList.length / 2;
        return (
          <ProjectCard
            key={project.tempId}
            project={project}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-background border-2 border-border hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Previous project"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-background border-2 border-border hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Next project"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

"use client"

import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ArrowUpRight, Send } from 'lucide-react';
import { motion } from "motion/react"

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Email',
    subtitle: 'your.email@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=400&h=450&fit=crop',
    icon: Mail,
    href: 'mailto:your.email@example.com',
  },
  {
    id: 2,
    title: 'Phone',
    subtitle: '+1 (234) 567-890',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=450&fit=crop',
    icon: Phone,
    href: 'tel:+1234567890',
  },
  {
    id: 3,
    title: 'Location',
    subtitle: 'Your City, Country',
    imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=450&fit=crop',
    icon: MapPin,
    href: '#',
  },
  {
    id: 4,
    title: 'LinkedIn',
    subtitle: 'Connect professionally',
    imageUrl: 'https://images.unsplash.com/photo-1611944212129-29977d139784?w=400&h=450&fit=crop',
    icon: Linkedin,
    href: '#',
  },
  {
    id: 5,
    title: 'GitHub',
    subtitle: 'View my code',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=450&fit=crop',
    icon: Github,
    href: '#',
  },
];

// --- Accordion Item Component ---
interface AccordionItemProps {
  item: typeof accordionItems[0];
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  const Icon = item.icon;
  
  return (
    <a
      href={item.href}
      className={`
        relative h-[450px] rounded-lg overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border border-border
        ${isActive ? 'w-[300px] md:w-[350px]' : 'w-[60px] md:w-[70px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover grayscale"
        onError={(e) => { 
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=400&h=450&fit=crop'; 
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Icon for inactive state */}
      <div 
        className={`
          absolute inset-0 flex items-center justify-center
          transition-opacity duration-300
          ${isActive ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Caption Text */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 p-6
          transition-all duration-300 ease-in-out
          ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-5 h-5 text-white/80" />
          <span className="text-white/60 text-xs font-mono uppercase tracking-wider">
            {item.title}
          </span>
        </div>
        <p className="text-white text-lg font-medium leading-tight">
          {item.subtitle}
        </p>
        <div className="mt-4 flex items-center gap-1 text-white/70 text-sm">
          <span>Get in touch</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
};

// --- Main Contact Accordion Component ---
export function ContactAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Let's Work<br />
              <span className="text-muted-foreground">Together</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed">
              Available for freelance projects and collaborations. Let's discuss how 
              I can help bring your ideas to life.
            </p>
            
            {/* Availability Badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-secondary-foreground font-medium">
                Available for new projects
              </span>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Email
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                <Twitter className="w-4 h-4" />
                Follow on Twitter
              </a>
            </div>
          </motion.div>

          {/* Right Side: Image Accordion */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

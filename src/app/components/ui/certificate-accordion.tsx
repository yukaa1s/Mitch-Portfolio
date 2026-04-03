"use client"

import { useState } from 'react';
import { Award, ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react"

// --- Certificate Data ---
// INSTRUCTIONS: Place your certificate images in public/certificates/
// Supported formats: .jpg, .png, .webp
// Recommended size: 400x450px or similar aspect ratio
const certificates = [
  {
    id: 1,
    title: 'Advance Seminar for Graphic Design',
    issuer: 'Graphic Design Academy',
    date: '2024',
    description: 'Advanced certification in graphic design principles, tools, and creative workflows.',
    imageUrl: '/Pics/613682643_1414954150357146_3753615487144201327_n (1).jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=450&fit=crop',
  },
  {
    id: 2,
    title: 'Intro to Packet Tracer',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    description: 'Cisco certification in network simulation and Packet Tracer fundamentals.',
    imageUrl: '/Pics/616587713_1374777311335867_2504263636799888139_n.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=450&fit=crop',
  },
  {
    id: 3,
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    description: 'Comprehensive cybersecurity fundamentals and threat protection strategies.',
    imageUrl: '/Pics/619503328_2066908760815592_5004011684068010921_n.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=450&fit=crop',
  },
  {
    id: 4,
    title: 'Ethical Hacker',
    issuer: 'EC-Council',
    date: '2023',
    description: 'Professional certification in ethical hacking and penetration testing.',
    imageUrl: '/Pics/619844407_1406859741099940_8885434036320702057_n.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=450&fit=crop',
  },
  {
    id: 5,
    title: 'Thesis/Capstone Deployment Completion',
    issuer: 'University',
    date: '2023',
    description: 'Completion certification for final year project and capstone deployment.',
    imageUrl: '/Pics/660868061_1540538714068531_2853255785997560053_n.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=450&fit=crop',
  },
];

// --- Certificate Accordion Item ---
interface CertAccordionItemProps {
  cert: typeof certificates[0];
  isActive: boolean;
  onMouseEnter: () => void;
}

const CertAccordionItem = ({ cert, isActive, onMouseEnter }: CertAccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-lg overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border border-border
        ${isActive ? 'w-[300px] md:w-[350px]' : 'w-[60px] md:w-[70px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={cert.imageUrl}
        alt={cert.title}
        className="absolute inset-0 w-full h-full object-cover grayscale"
        onError={(e) => { 
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = cert.fallbackUrl || 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=400&h=450&fit=crop'; 
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Icon for inactive state */}
      <div 
        className={`
          absolute inset-0 flex items-center justify-center
          transition-opacity duration-300
          ${isActive ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <Award className="w-6 h-6 text-white" />
      </div>

      {/* Certificate Info */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 p-6
          transition-all duration-300 ease-in-out
          ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-5 h-5 text-white/80" />
          <span className="text-white/60 text-xs font-mono uppercase tracking-wider">
            {cert.issuer}
          </span>
        </div>
        <p className="text-white text-lg font-medium leading-tight">
          {cert.title}
        </p>
        <p className="text-white/70 text-sm mt-1">
          {cert.date}
        </p>
      </div>
    </div>
  );
};

// --- All Certificates Modal ---
interface AllCertsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AllCertsModal = ({ isOpen, onClose }: AllCertsModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <div className="min-h-screen px-6 py-12 md:px-12 md:py-16">
          {/* Header */}
          <div className="max-w-6xl mx-auto mb-12 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase mb-2">
                Credentials
              </p>
              <h2 className="text-foreground text-3xl md:text-4xl font-semibold tracking-tight">
                All Certificates
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Certificates Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-foreground/20 transition-all"
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => { 
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; 
                      target.src = cert.fallbackUrl || 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=400&h=450&fit=crop'; 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-mono">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 className="text-foreground text-lg font-semibold mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- Main Certificate Accordion Component ---
export function CertificateAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllCerts, setShowAllCerts] = useState(false);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="bg-white">
        <section className="container mx-auto px-4 pt-8 pb-12 md:py-16" style={{ fontFamily: 'Inter, sans-serif' }}>
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
                Credentials & Learning
              </p>
              <h2 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                Professional<br />
                <span className="text-muted-foreground">Certificates</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed">
                Continuous learning and skill development through industry-recognized certifications in AI, machine learning, and modern web technologies.
              </p>
              
              {/* Stats */}
              <div className="mt-8 flex gap-8 justify-center lg:justify-start">
                <div>
                  <p className="text-3xl font-semibold text-foreground">5+</p>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground">3</p>
                  <p className="text-sm text-muted-foreground">Years Learning</p>
                </div>
              </div>

              {/* View All Button */}
              <div className="mt-8">
                <button
                  onClick={() => setShowAllCerts(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
                >
                  <Award className="w-4 h-4" />
                  View All Certs
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Right Side: Certificate Accordion */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-4">
                {certificates.map((cert, index) => (
                  <CertAccordionItem
                    key={cert.id}
                    cert={cert}
                    isActive={index === activeIndex}
                    onMouseEnter={() => handleItemHover(index)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* All Certificates Modal */}
      <AllCertsModal isOpen={showAllCerts} onClose={() => setShowAllCerts(false)} />
    </>
  );
}

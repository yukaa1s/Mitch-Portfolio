import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Download, Linkedin, Github, Twitter, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const [showAbout, setShowAbout] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0);

  const handleFlip = () => {
    setShowAbout(!showAbout);
  };

  // Custom video fade loop logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const fadeDuration = 0.5;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const duration = video.duration;
      
      if (!duration || isNaN(duration)) return;

      if (currentTime < fadeDuration) {
        setVideoOpacity(currentTime / fadeDuration);
      } else if (currentTime > duration - fadeDuration) {
        setVideoOpacity((duration - currentTime) / fadeDuration);
      } else {
        setVideoOpacity(1);
      }
    };

    const handleEnded = () => {
      setVideoOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play();
        }
      }, 100);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Video Background - Only visible when not showing About */}
      <AnimatePresence>
        {!showAbout && (
          <motion.div 
            className="absolute inset-0"
            style={{ top: '300px', inset: 'auto 0 0 0' }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <video
              ref={videoRef}
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
              autoPlay
              muted
              playsInline
              loop={false}
              className="w-full h-full object-cover"
              style={{ opacity: videoOpacity }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <nav className="relative z-20 px-8 py-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl tracking-tight text-gray-900 font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Mitch's Portfolio
          </a>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-gray-900 font-semibold transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Home</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Project</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>About</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Certificate</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Reach Me</a>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 text-sm bg-gray-900 text-white rounded-full hover:scale-[1.03] transition-transform font-semibold"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Begin Journey
          </button>
        </div>
      </nav>

      {/* Main Content with Flip Animation */}
      <div className="relative z-10 px-6" style={{ paddingTop: 'calc(8rem - 75px)', paddingBottom: '2rem' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {!showAbout ? (
              // MAIN VIEW - Centered cinematic hero
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center text-center px-6 min-h-[50vh]"
                onClick={handleFlip}
              >
                {/* Headline */}
                <span className="text-xs tracking-[0.3em] uppercase text-gray-600 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Aspiring
                </span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 max-w-4xl leading-[1.1] tracking-[-2px] cursor-pointer"
                  style={{ fontFamily: 'Instrument Serif, serif' }}
                >
                  Full Stack Developer<br />
                  <span className="italic text-gray-600">climbing toward better code.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                  className="text-sm sm:text-base text-gray-900 max-w-xl mt-6 leading-relaxed cursor-pointer font-semibold"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Step by step, I build reliable systems. From foundation to finish, I create solutions that work.
                </motion.p>

                {/* Tap to flip hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-gray-800 mt-10 cursor-pointer font-semibold"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span>Tap anywhere to flip</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            ) : (
              // FLIPPED VIEW - Clean white background with About
              <motion.div
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white min-h-[70vh] rounded-2xl p-6 md:p-8 cursor-pointer"
                onClick={handleFlip}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
                  {/* LEFT SIDE - Name & About */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col justify-start"
                  >
                    {/* Back button */}
                    <button
                      onClick={handleFlip}
                      className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gray-600 mb-4 hover:text-gray-900 transition-colors font-semibold w-fit"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      <span>Back</span>
                    </button>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <span className="text-xs tracking-[0.3em] uppercase text-gray-600 block mb-4 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                        About Me
                      </span>
                      <h2 
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.9] tracking-[-3px]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Mitch Yvone<br />Ortega
                      </h2>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl md:text-2xl text-gray-700 mt-6 font-semibold"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Aspiring Full Stack Developer and QA Analyst
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="space-y-4 text-gray-700 leading-relaxed mt-6 max-w-lg font-medium"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <p className="text-base">
                        I'm a creative technologist with a passion for building digital experiences that matter. 
                        I specialize in creating intuitive user interfaces and robust backend systems.
                      </p>
                      <p className="text-base">
                        My expertise spans full-stack development, UI/UX design, and quality assurance testing.
                      </p>
                    </motion.div>

                    {/* Skills Tags */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-wrap gap-3 mt-8"
                    >
                      {['React', 'TypeScript', 'Node.js', 'UI/UX', 'QA Testing'].map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 text-sm font-semibold border-2 border-gray-300 rounded-full text-gray-800 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all cursor-default"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* RIGHT SIDE - Photo & CV Download */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="relative w-full max-w-sm">
                      {/* Photo Frame */}
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-gray-200 shadow-2xl bg-gray-100">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
                          alt="Mitch Yvone Ortega"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Download CV Button */}
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 w-full flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-800 hover:scale-[1.02] transition-all shadow-lg"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <Download className="w-5 h-5" />
                        Download CV
                      </motion.button>

                      {/* Social/Contact Quick Links */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 flex justify-center gap-3 flex-wrap"
                      >
                          <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:text-gray-900 transition-all"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </a>
                          <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:text-gray-900 transition-all"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </a>
                          <a
                            href="mailto:email@example.com"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:text-gray-900 transition-all"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <Mail className="w-4 h-4" />
                            Email
                          </a>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-col items-center gap-3"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-[#6F6F6F]" style={{ fontFamily: 'Inter, sans-serif' }}>Scroll</span>
          <motion.div
            animate={{ height: [16, 24, 16] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px bg-[#e5e5e5]"
          />
        </motion.div>
      </div>
    </section>
  );
}

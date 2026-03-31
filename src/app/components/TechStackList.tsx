"use client"

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

// SVG Logo Components
const ReactLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12 8.5c4.36 0 7.93 1.53 9.3 3.5-1.37 1.97-4.94 3.5-9.3 3.5-4.36 0-7.93-1.53-9.3-3.5C4.07 10.03 7.64 8.5 12 8.5Zm0 8c5.08 0 9.32-1.81 10.75-4.5-1.43-2.69-5.67-4.5-10.75-4.5S2.68 9.31 1.25 12c1.43 2.69 5.67 4.5 10.75 4.5Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M8.9 10.18c2.18-3.77 5.1-6.18 7.24-6.18.53 0 .99.14 1.38.4.8.54 1.15 1.54 1.01 2.91-.14 1.3-.74 2.88-1.71 4.56-.97 1.68-2.21 3.28-3.58 4.65-1.37 1.37-2.97 2.61-4.65 3.58-1.68.97-3.26 1.57-4.56 1.71-1.37.14-2.37-.21-2.91-1.01-.26-.39-.4-.85-.4-1.38 0-2.14 2.41-5.06 6.18-7.24Zm.84.48c-3.37 1.95-5.54 4.52-5.54 6.25 0 .31.07.56.2.76.26.39.78.54 1.52.46 1.05-.12 2.46-.65 4-1.54 1.54-.89 3.04-2.03 4.28-3.27 1.24-1.24 2.38-2.74 3.27-4.28.89-1.54 1.42-2.95 1.54-4 .08-.74-.07-1.26-.46-1.52-.2-.13-.45-.2-.76-.2-1.73 0-4.3 2.17-6.25 5.54-.33.57-.63 1.15-.89 1.73-.26-.58-.56-1.16-.89-1.73-.26-.47-.54-.93-.84-1.37.44.3.9.58 1.37.84Z" />
  </svg>
);

const NodeLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.13c.95.46 1.27.45 1.7.45 1.38 0 2.17-.84 2.17-2.3V8.03c0-.12-.1-.22-.23-.22h-.93c-.13 0-.23.1-.23.22v8.37c0 .65-.67 1.3-1.76.75l-2.03-1.17a.28.28 0 0 1-.14-.24V7.71c0-.1.05-.19.14-.24l7.44-4.3c.09-.05.2-.05.28 0l7.44 4.3c.09.05.14.14.14.24v8.58c0 .1-.05.2-.14.24l-7.44 4.3c-.09.05-.2.05-.28 0l-1.86-1.08c-.1-.06-.23-.06-.33.02-.45.28-.96.48-1.5.59-.14.03-.26.1-.26.25v1.18c0 .14.1.3.27.27 1.07-.15 2.04-.6 2.83-1.33l2.1-1.22c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3a1.53 1.53 0 0 0-.78-.2Z" />
  </svg>
);

const TypeScriptLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M3 3h18v18H3V3Zm10.5 12.18V14h-4.5v-1.5h1.05v-3h-1.05V8h4.5v1.5h-1.05v3h1.05v1.18h-1.05v3h1.05v1.5h-4.5v-1.5h1.05v-3h-1.05ZM18 15.75V18h-1.5v-2.25H15v-1.5h6v1.5h-3Z" />
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2c-2.5 0-4.5.2-4.5 2v2c0 1.8 2 2 4.5 2s4.5-.2 4.5-2V4c0-1.8-2-2-4.5-2Z" />
    <path d="M12 6c-5 0-9 1.5-9 4v2c0 2.5 4 4 9 4s9-1.5 9-4v-2c0-2.5-4-4-9-4Z" />
    <path d="M7.5 13v3c0 2 2 2 4.5 2s4.5 0 4.5-2v-3c0 2-2 2-4.5 2s-4.5 0-4.5-2Z" />
  </svg>
);

const NextLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4 14h-2v-4l-4 4H8v-8h2v4l4-4h2v8Z" />
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6ZM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.51 12 7 12Z" />
  </svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M13.75 11.5c.14 0 .25.11.25.25v1c0 .14-.11.25-.25.25h-1c-.14 0-.25-.11-.25-.25v-1c0-.14.11-.25.25-.25h1Zm-3 0c.14 0 .25.11.25.25v1c0 .14-.11.25-.25.25h-1c-.14 0-.25-.11-.25-.25v-1c0-.14.11-.25.25-.25h1Zm-3 0c.14 0 .25.11.25.25v1c0 .14-.11.25-.25.25h-1c-.14 0-.25-.11-.25-.25v-1c0-.14.11-.25.25-.25h1Zm-3 0c.14 0 .25.11.25.25v1c0 .14-.11.25-.25.25h-1c-.14 0-.25-.11-.25-.25v-1c0-.14.11-.25.25-.25h1ZM22 10c.55 0 1 .45 1 1v1c0 1.1-.9 2-2 2h-1c0 .55-.45 1-1 1v3c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V9c0-.55.45-1 1-1h13c.55 0 1 .45 1 1v1h1c1.1 0 2-.9 2-2V7c0-.55.45-1 1-1h1v4Z" />
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10Z" />
  </svg>
);

const PostgresLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" fill="var(--background)" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const AwsLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M6.76 12.53c.1.13.1.28 0 .41-.1.13-.27.2-.43.2H4.3c-.18 0-.3-.08-.36-.25l-.02-.1V7.7c0-.15.08-.3.22-.38l.08-.03h1.9c.2 0 .32.1.38.28v.1l.02.1v4.76h.24Zm11.4-4.7c.18 0 .3.1.36.28v.1l.02.1v3.35c0 .22-.1.4-.28.5l-.1.04-.7.2c-.4.12-.8.18-1.2.18-.38 0-.75-.05-1.1-.16-.36-.1-.67-.28-.92-.52-.26-.24-.46-.54-.6-.9-.14-.36-.21-.78-.21-1.25 0-.48.08-.9.23-1.27.16-.37.37-.68.65-.93.27-.25.6-.43.97-.56.37-.12.78-.19 1.22-.19.28 0 .56.03.83.1.27.06.5.13.7.22.2.08.35.16.45.23.1.07.16.14.2.2.03.07.04.15.02.22l-.02.1-.15.36-.04.08-.08.1-.1.06-.12.02c-.15 0-.35-.08-.6-.23-.25-.16-.58-.24-.97-.24-.35 0-.64.1-.87.3-.23.2-.34.5-.34.9v.08l.02.08c.04.26.17.46.4.6.22.15.52.22.88.22.2 0 .4-.02.6-.07.2-.04.4-.1.6-.17l.3-.1.16-.06c.16-.06.3-.09.4-.09.1 0 .2.04.27.12.08.08.12.18.12.3v.38Z" />
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2c2.21 0 4 1.79 4 4 0 1.05-.41 2-1.07 2.7.66.7 1.07 1.65 1.07 2.7 0 1.37-.83 2.55-2 3.09V16c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1.51c-1.17-.54-2-1.72-2-3.09 0-1.05.41-2 1.07-2.7C4.41 8 4 7.05 4 6c0-2.21 1.79-4 4-4h4Zm0 2H8c-1.1 0-2 .9-2 2s.9 2 2 2h4c1.1 0 2-.9 2-2s-.9-2-2-2Zm0 6H8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 6H8c-1.1 0-2 .9-2 2s.9 2 2 2h4c1.1 0 2-.9 2-2s-.9-2-2-2Z" />
  </svg>
);

const MongoLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2C7.58 2 4.06 5.5 4.06 10c0 3.5 2.2 6.5 5.4 7.8.2.1.4 0 .4-.2v-1.2c0-.7-.2-1.3-.6-1.9-1.4-.5-2.4-1.9-2.4-3.5 0-2.1 1.6-3.8 3.8-3.8s3.8 1.7 3.8 3.8c0 1.6-1 3-2.4 3.5-.4.6-.6 1.2-.6 1.9v1.2c0 .2.2.3.4.2 3.2-1.3 5.4-4.3 5.4-7.8 0-4.5-3.52-8-8.12-8Z" />
  </svg>
);

const VercelLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2L2 19h20L12 2Z" />
  </svg>
);

const RedisLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2 2 7v10l10 5 10-5V7L12 2Zm0 2.5L19.5 8 12 11.5 4.5 8 12 5.4ZM4 9.5l7 3.5v6.5l-7-3.5V9.5Zm9 10v-6.5l7-3.5v6.5l-7 3.5Z" />
  </svg>
);

const GraphQLLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2Zm0 2.3L4.5 8.3v7.4L12 19.7l7.5-4V8.3L12 4.3Z" />
  </svg>
);

const allTech = [
  { name: 'React', Logo: ReactLogo },
  { name: 'Next.js', Logo: NextLogo },
  { name: 'TypeScript', Logo: TypeScriptLogo },
  { name: 'Tailwind', Logo: TailwindLogo },
  { name: 'Node.js', Logo: NodeLogo },
  { name: 'Python', Logo: PythonLogo },
  { name: 'PostgreSQL', Logo: PostgresLogo },
  { name: 'MongoDB', Logo: MongoLogo },
  { name: 'Docker', Logo: DockerLogo },
  { name: 'Git', Logo: GitLogo },
  { name: 'AWS', Logo: AwsLogo },
  { name: 'Vercel', Logo: VercelLogo },
  { name: 'Redis', Logo: RedisLogo },
  { name: 'GraphQL', Logo: GraphQLLogo },
  { name: 'Figma', Logo: FigmaLogo },
];

// Create multiple duplicates for seamless loop
const techRow = [...allTech, ...allTech, ...allTech, ...allTech];

const TechItem = ({ tech, index }: { tech: typeof allTech[0]; index: number }) => {
  const Logo = tech.Logo;
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-3 min-w-[80px]">
      <div className="w-10 h-10 flex items-center justify-center text-foreground/80">
        <Logo />
      </div>
      <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
};

export function TechStackList() {
  return (
    <section className="relative bg-white pt-20 pb-16 overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-6"
      >
        <p className="text-gray-600 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Tech Stack
        </p>
        <h2 className="text-gray-900 text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Technologies I Use
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A curated collection of tools and technologies I work with daily
        </p>
      </motion.div>

      {/* Single Marquee Row - Left to Right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex" style={{ animation: 'marquee-left 10s linear infinite' }}>
          <div className="flex shrink-0">
            {techRow.map((tech, index) => (
              <TechItem key={`row1-${tech.name}-${index}`} tech={tech} index={index} />
            ))}
          </div>
          <div className="flex shrink-0">
            {techRow.map((tech, index) => (
              <TechItem key={`row1-dup-${tech.name}-${index}`} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-16 pt-12 border-t border-gray-200 px-6"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '15+', label: 'Technologies' },
            { value: '5+', label: 'Years Coding' },
            { value: '50+', label: 'Projects' },
            { value: '∞', label: 'Coffee' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-semibold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-xs tracking-wider uppercase text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Award, Star, Trophy, Medal, BadgeCheck } from 'lucide-react';

interface Badge {
  id: number;
  name: string;
  issuer: string;
  icon: 'award' | 'star' | 'trophy' | 'medal' | 'badge';
  color: string;
}

const badges: Badge[] = [
  { id: 1, name: 'Top Performer', issuer: 'Google Cloud', icon: 'star', color: 'bg-blue-500' },
  { id: 2, name: 'Certified Developer', issuer: 'Microsoft', icon: 'badge', color: 'bg-blue-600' },
  { id: 3, name: 'AWS Solutions Architect', issuer: 'Amazon', icon: 'award', color: 'bg-orange-500' },
  { id: 4, name: 'React Expert', issuer: 'Meta', icon: 'trophy', color: 'bg-cyan-500' },
  { id: 5, name: 'QA Excellence', issuer: 'ISTQB', icon: 'medal', color: 'bg-purple-500' },
  { id: 6, name: 'Full Stack Pro', issuer: 'FreeCodeCamp', icon: 'badge', color: 'bg-green-500' },
];

const iconMap = {
  award: Award,
  star: Star,
  trophy: Trophy,
  medal: Medal,
  badge: BadgeCheck,
};

export function BadgeSection() {
  return (
    <section className="py-24 bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gray-600 font-semibold">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 tracking-tight">
            Badges & Recognition
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Industry-recognized certifications and achievements that validate my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => {
            const Icon = iconMap[badge.icon];
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 ${badge.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{badge.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{badge.issuer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

interface Stat {
  icon: any;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

interface LiveStatsProps {
  stats: Stat[];
}

export function LiveStats({ stats }: LiveStatsProps) {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = end;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }
      }, 16);

      return () => clearInterval(timer);
    });
  }, [stats]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0CB14B]/10 to-[#cd2653]/10 rounded-2xl mb-4">
            <stat.icon className="w-8 h-8 text-[#0CB14B]" />
          </div>
          <div className="text-3xl lg:text-4xl mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {stat.prefix}{counts[index]}{stat.suffix}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

// Default stats for products
export const defaultProductStats: Stat[] = [
  { icon: Users, label: 'Installations', value: 500, suffix: '+' },
  { icon: Globe, label: 'Pays', value: 25, suffix: '+' },
  { icon: TrendingUp, label: 'Uptime', value: 99, suffix: '%', prefix: '' },
  { icon: Award, label: 'Satisfaction', value: 98, suffix: '%' },
];

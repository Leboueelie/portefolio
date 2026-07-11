import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaProjectDiagram, FaUserTie, FaAward } from "react-icons/fa";

interface StatItem {
  icon: typeof FaCode;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: FaProjectDiagram, value: 15, suffix: "+", label: "Projets realises" },
  { icon: FaCode, value: 20, suffix: "+", label: "Technologies maîtrisees" },
  { icon: FaUserTie, value: 2, suffix: "+", label: "Annees d'experience" },
  { icon: FaAward, value: 100, suffix: "%", label: "Satisfaction client" },
];

function AnimatedCounter({ to }: { to: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setDisplay(to);
        clearInterval(timer);
      } else {
        setDisplay(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, to]);

  return <span ref={ref}>{display}</span>;
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="text-center space-y-4"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mx-auto">
        <stat.icon size={28} />
      </div>
      <div className="text-4xl md:text-5xl font-heading font-bold text-deep-blue dark:text-white">
        <AnimatedCounter to={stat.value} />
        {stat.suffix}
      </div>
      <p className="text-sm text-charcoal/60 dark:text-gray-400 font-medium">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-cream dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center gradient-text mb-16">
          Quelques chiffres
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

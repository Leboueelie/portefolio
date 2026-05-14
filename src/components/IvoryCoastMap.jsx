import { motion } from "framer-motion";

export default function IvoryCoastMap() {
  return (
    <section
      id="map"
      className="py-24 px-6 bg-cream dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-bold gradient-text mb-12">
          Basé en Côte d'Ivoire
        </h2>
        <div className="flex justify-center">
          <svg viewBox="0 0 300 300" className="w-80 h-auto">
            <path
              d="M150 30 L200 80 L220 150 L190 220 L120 250 L60 200 L50 120 L80 60 Z"
              fill="#0B3B60"
              opacity="0.1"
              stroke="#E86A33"
              strokeWidth="2"
            />
            <circle cx="150" cy="150" r="8" fill="#E86A33" />
            <text
              x="160"
              y="155"
              className="text-xs fill-charcoal dark:fill-white"
            >
              Abidjan
            </text>
          </svg>
        </div>
        <p className="mt-4 text-charcoal/70 dark:text-gray-300">
          Au cœur de l'innovation numérique ivoirienne, je contribue à la
          transformation digitale des services publics.
        </p>
      </div>
    </section>
  );
}

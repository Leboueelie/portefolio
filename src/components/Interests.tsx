import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaGamepad,
  FaMusic,
  FaRunning,
  FaPlane,
  FaRobot,
} from "react-icons/fa";

const interests = [
  { icon: FaRobot, label: "IA & Automatisation", color: "#E86A33" },
  { icon: FaBookOpen, label: "Veille technologique", color: "#0B3B60" },
  { icon: FaGamepad, label: "Jeux video & e-sport", color: "#2A9D8F" },
  { icon: FaMusic, label: "Musique & Production", color: "#E86A33" },
  { icon: FaRunning, label: "Sport & Bien-etre", color: "#0B3B60" },
  { icon: FaPlane, label: "Voyages & Decouvertes", color: "#2A9D8F" },
];

export default function Interests() {
  return (
    <section className="py-24 px-6 bg-cream dark:bg-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
          Au-delà du code
        </h2>
        <p className="text-charcoal/60 dark:text-gray-400 mb-16">
          Ce qui me passionne en dehors du developpement.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3"
            >
              <item.icon
                className="text-3xl"
                style={{ color: item.color }}
              />
              <span className="text-xs font-semibold text-charcoal dark:text-gray-200 text-center leading-tight">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

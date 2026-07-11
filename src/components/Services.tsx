import { motion } from "framer-motion";
import { FaLaptopCode, FaUniversity, FaChalkboardTeacher, FaSearch } from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Developpement Web",
    desc: "Sites vitrines, applications web sur mesure, APIs REST, dashboards administratifs. Stack React/Next.js + Node.js/NestJS.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: FaUniversity,
    title: "Consulting E-admin",
    desc: "Accompagnement des institutions publiques dans la transformation numerique, optimisation des processus et dematerialisation.",
    color: "from-accent to-orange-400",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Formation & Mentorat",
    desc: "Initiation au developpement web, coaching de juniors, ateliers sur les technologies modernes (React, Node.js, Docker).",
    color: "from-green-leaf to-emerald-400",
  },
  {
    icon: FaSearch,
    title: "Audit & Conseil",
    desc: "Analyse de code existant, recommandations d'architecture, optimisation des performances et securite des applications.",
    color: "from-purple-500 to-pink-400",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-cream dark:bg-gray-800 transition-colors relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center gradient-text mb-4">
          Ce que je propose
        </h2>
        <p className="text-center text-charcoal/60 dark:text-gray-400 mb-16 max-w-lg mx-auto">
          Des solutions adaptees aux besoins des entreprises et des institutions publiques.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 text-center space-y-4 group"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg group-hover:scale-110 transition-transform`}
              >
                <s.icon size={24} />
              </div>
              <h3 className="text-lg font-heading font-bold text-deep-blue dark:text-white">
                {s.title}
              </h3>
              <p className="text-sm text-charcoal/70 dark:text-gray-300 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const events = [
  {
    date: "2024",
    title: "Debut en developpement web",
    desc: "Formation autodidacte en HTML, CSS, JavaScript, premiers projets personnels.",
    icon: FaBriefcase,
  },
  {
    date: "2025 - 2028",
    title: "Universite Virtuelle de Cote d'Ivoire",
    desc: "Licence en E-administration & Transformation Digitale. Specialisation en services publics numeriques.",
    icon: FaGraduationCap,
  },
  {
    date: "2026",
    title: "Developpeur Full Stack Junior ",
    desc: "Realisation de CV Builder, AfriCode, Dashboard Admin, et plusieurs autres projets full stack.",
    icon: FaBriefcase,
  },
];

export default function Timeline() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-cream dark:bg-gray-800 relative transition-colors"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center gradient-text mb-16">
          Mon parcours
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-deep-blue/20 dark:bg-gray-600" />
          {events.map((evt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative flex items-start mb-12 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-700 border-2 border-deep-blue dark:border-accent rounded-full flex items-center justify-center z-10">
                <evt.icon className="text-deep-blue dark:text-accent text-sm" />
              </div>
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}
              >
                <div className="glass-card p-6 rounded-2xl">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">
                    {evt.date}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-deep-blue dark:text-white mt-1">
                    {evt.title}
                  </h3>
                  <p className="text-charcoal/70 dark:text-gray-300 text-sm mt-2">
                    {evt.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

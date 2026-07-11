import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { useTheme } from "../context/ThemeContext";
import { FaPalette } from "react-icons/fa";

export default function Hero() {
  const { cycleAccent } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center bg-cream dark:bg-gray-900 overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-8"
        >
          <span className="inline-block px-6 py-2 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm font-medium tracking-wider">
            E-administration & Transformation Digitale
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-deep-blue dark:text-white leading-none">
            Je construis des{" "}
            <span className="gradient-text">services publics</span> nouvelle
            génération
          </h1>
          <p className="text-lg text-charcoal/70 dark:text-gray-300 max-w-xl leading-relaxed">
            Développeur web junior passionné par la <strong className="text-deep-blue dark:text-white">transformation numérique</strong>,
            je conçois des applications web modernes qui rendent les services
            publics plus <strong className="text-accent">accessibles</strong>, plus{" "}
            <strong className="text-accent">efficaces</strong> et résolument
            tournés vers l'utilisateur. De l'API à l'interface, chaque ligne de
            code vise un impact concret.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="clickable inline-block px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all shadow-lg"
            >
              Découvrir mes projets
            </a>
            <a
              href="#contact"
              className="clickable inline-block px-8 py-4 border-2 border-accent text-accent dark:border-white dark:text-white font-semibold rounded-xl hover:bg-accent hover:text-white transition-all"
            >
              Me contacter
            </a>
            <button
              onClick={cycleAccent}
              className="clickable inline-block px-4 py-4 border-2 border-gray-400 text-gray-500 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              title="Changer la couleur d'accent"
            >
              <FaPalette size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

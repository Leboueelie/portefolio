import { motion } from "framer-motion";
// import { PDFDownloadLink } from "@react-pdf/renderer";
import ParticleBackground from "./ParticleBackground";
// import CvDocument from "./CvDocument";
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
            generation
          </h1>
          <p className="text-lg text-charcoal/70 dark:text-gray-300 max-w-lg">
            Developpeur full stack et etudiant a l'UVCI, je faconne des
            interfaces alliant rigueur administrative, accessibilite et
            performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              data-cursor="Projets"
              className="clickable inline-block px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all shadow-lg"
            >
              Decouvrir mes projets
            </a>
            <a
              href="#contact"
              data-cursor="Contact"
              className="clickable inline-block px-8 py-4 border-2 border-accent text-accent dark:border-white dark:text-white font-semibold rounded-xl hover:bg-accent hover:text-white transition-all"
            >
              Me contacter
            </a>
            {/* <PDFDownloadLink
              document={<CvDocument />}
              fileName="LEBOUE_ELIE_CV.pdf"
              className="clickable inline-block px-6 py-4 bg-green-leaf text-white font-semibold rounded-xl hover:bg-green-leaf/90 transition-all shadow-lg"
            >
              {({ loading }) =>
                loading ? "Preparation..." : "Telecharger mon CV"
              }
            </PDFDownloadLink>*/}
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

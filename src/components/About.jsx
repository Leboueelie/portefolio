import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-gray-900 relative transition-colors"
    >
      <div className="wave-divider rotate-180 top-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path
            fill="#F9F9FA"
            className="dark:fill-gray-800"
            d="M0,64L80,58.7C160,53,320,43,480,64C640,85,800,139,960,144C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-deep-blue to-accent rounded-[3rem] p-1 rotate-6 shadow-2xl shadow-accent/20">
            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[2.8rem] flex items-center justify-center overflow-hidden">
              <span className="text-6xl font-heading font-bold text-accent">
                LBT
              </span>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-green-leaf/20 rounded-full blur-2xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-heading font-bold gradient-text">
            A propos
          </h2>
          <p className="text-lg text-charcoal/80 dark:text-gray-300 leading-relaxed">
            Je suis{" "}
            <strong className="text-deep-blue dark:text-white">
              LEBOUE ELIE
            </strong>
            , developpeur full stack et etudiant en{" "}
            <span className="font-semibold text-accent">
              E-administration & Transformation Digitale
            </span>{" "}
            a l'Universite Virtuelle de Cote d'Ivoire.
          </p>
          <p className="text-lg text-charcoal/80 dark:text-gray-300 leading-relaxed">
            Depuis 2025, je cree des solutions web sur mesure pour moderniser
            les services publics et les entreprises. Mon approche allie rigueur
            academique, code propre et experience utilisateur.
          </p>
          <a
            href="#projects"
            className="clickable inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Voir mes realisations <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

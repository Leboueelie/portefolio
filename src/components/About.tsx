import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaDownload,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import RevealMask from "./RevealMask";

const techs = [
  "React",
  "TypeScript",
  "Next.js",
  "NestJS",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="py-24 px-6 bg-cream dark:bg-gray-900 relative transition-colors"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-72 h-72 mx-auto relative group">
              <div className="w-full h-full rounded-[3rem] rotate-3 overflow-hidden shadow-2xl shadow-accent/20 transition-all duration-500 group-hover:rotate-0 group-hover:scale-[1.02]">
                {imgError ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-deep-blue to-accent">
                    <span className="text-6xl font-heading font-bold text-white">
                      LBT
                    </span>
                  </div>
                ) : (
                  <img
                    src="/profile.jpg"
                    alt="LEBOUE ELIE"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
              <div className="absolute -bottom-3 -right-3 bg-accent text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                Junior Dev
              </div>
            </div>
            <div className="absolute -bottom-16 -right-8 w-32 h-32 bg-green-leaf/20 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-3 max-w-xs mx-auto"
          >
            {[
              { value: "15+", label: "Projets" },
              { value: "2+", label: "Ann\u00e9es" },
              { value: "20+", label: "Technos" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center p-3 glass-card rounded-xl"
              >
                <div className="text-xl font-heading font-bold text-accent">
                  {s.value}
                </div>
                <div className="text-[10px] text-charcoal/60 dark:text-gray-400 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-5"
        >
          <RevealMask>
            <h2 className="text-4xl font-heading font-bold gradient-text">
              À propos
            </h2>
          </RevealMask>

          <div className="space-y-4 text-lg text-charcoal/80 dark:text-gray-300 leading-relaxed">
            <p>
              Je suis{" "}
              <strong className="text-deep-blue dark:text-white">
                LEBOUE ELIE
              </strong>
              , développeur web junior basé à Abidjan,
              actuellement en{" "}
              <span className="font-semibold text-accent">
                Licence E-administration & Transformation Digitale
              </span>{" "}
              à l'Université Virtuelle de Côte
              d'Ivoire. Ma mission : rendre les services publics plus
              accessibles, transparents et efficaces grâce à la
              technologie.
            </p>
            <p>
              Tout a commencé en 2024 en terminale A2, où j'ai découvert le
              développement web en autodidacte. Depuis, j'ai enchaîné les
              projets — du dashboard administratif aux plateformes e-learning
              — en passant par la conception d'API. Je touche à tout sans
              être spécialiste, et c'est ce qui me permet de comprendre
              l'ensemble des maillons d'un projet. Ce qui me motive ? Voir
              un citoyen gagner du temps sur une démarche administrative
              grâce à une interface bien conçue.
            </p>
            <p>
              Ma méthode : du code propre, des tests rigoureux, et une
              écoute attentive des besoins utilisateurs. Je crois que la
              transformation digitale passe d'abord par la compréhension
              du terrain. Chaque projet est une opportunité d'apprendre
              et d'innover.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold bg-accent/10 text-accent dark:bg-accent/20 rounded-full border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="clickable inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all shadow-lg"
            >
              <FaProjectDiagram /> Mes projets
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              className="clickable inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-semibold rounded-xl hover:bg-accent hover:text-white transition-all"
            >
              <FaDownload /> CV
            </a>
            <a
              href="#contact"
              className="clickable inline-flex items-center gap-2 px-6 py-3 border-2 border-deep-blue dark:border-white text-deep-blue dark:text-white font-semibold rounded-xl hover:bg-deep-blue hover:text-white dark:hover:bg-white dark:hover:text-deep-blue transition-all"
            >
              <FaEnvelope /> Contact
            </a>
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/elie-leboue-0658b0294/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/50 dark:text-gray-400 hover:text-accent transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/leboueelie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/50 dark:text-gray-400 hover:text-accent transition-colors"
              title="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:leboueelie@gmail.com"
              className="text-charcoal/50 dark:text-gray-400 hover:text-accent transition-colors"
              title="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

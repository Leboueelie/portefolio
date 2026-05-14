import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  const scrollRef = useRef(null);

  // Bloquer le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (!project) return;

    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full flex flex-col shadow-2xl overflow-hidden"
          style={{ maxHeight: "calc(100vh - 2rem)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image de couverture - hauteur réduite sur mobile */}
          <div className="relative h-40 sm:h-48 md:h-64 flex-shrink-0 bg-gradient-to-br from-deep-blue/10 to-accent/10 rounded-t-2xl overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl text-accent/40">Projet</span>
              </div>
            )}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 dark:bg-gray-700/90 p-2 rounded-full hover:bg-white dark:hover:bg-gray-600 transition-colors shadow z-10"
              aria-label="Fermer"
            >
              <FaTimes className="text-deep-blue dark:text-white" size={16} />
            </button>
          </div>

          {/* Contenu scrollable - padding responsive */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6 space-y-4 sm:space-y-5 overscroll-contain"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div>
              <span className="text-xs sm:text-sm text-accent font-medium">
                {project.date}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-deep-blue dark:text-white mt-1 break-words">
                {project.title}
              </h2>
            </div>

            {project.longDescription && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-accent mb-1 sm:mb-2">
                  Description
                </h3>
                <p className="text-sm sm:text-base text-charcoal/80 dark:text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-accent mb-1 sm:mb-2">
                  Fonctionnalités clés
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                  {project.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm sm:text-base text-charcoal/80 dark:text-gray-300"
                    >
                      <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                        -
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-accent mb-1 sm:mb-2">
                  Défis techniques
                </h3>
                <p className="text-sm sm:text-base text-charcoal/80 dark:text-gray-300">
                  {project.challenges}
                </p>
              </div>
            )}

            {project.role && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-accent mb-1 sm:mb-2">
                  Mon rôle
                </h3>
                <p className="text-sm sm:text-base text-charcoal/80 dark:text-gray-300">
                  {project.role}
                </p>
              </div>
            )}

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-accent mb-1 sm:mb-2">
                Stack utilisée
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technos.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-accent/10 text-accent text-xs sm:text-sm font-semibold rounded-full border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Boutons - colonne sur mobile, ligne sur desktop */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-deep-blue dark:bg-gray-700 text-white rounded-lg hover:bg-deep-blue/90 transition-colors font-medium text-sm sm:text-base"
                >
                  <FaGithub /> Voir le code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium text-sm sm:text-base"
                >
                  <FaExternalLinkAlt /> Voir la démo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

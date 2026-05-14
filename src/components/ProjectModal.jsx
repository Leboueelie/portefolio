import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [project]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Conteneur avec hauteur fixe et overflow-y: scroll */}
      <motion.div
        initial={{ scale: 0.95, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 10 }}
        className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl overflow-y-scroll shadow-2xl"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-40 sm:h-52 bg-gradient-to-br from-deep-blue/10 to-accent/10 rounded-t-2xl overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-5xl text-accent/30">
              Projet
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/90 dark:bg-gray-700/90 p-2 rounded-full hover:bg-white dark:hover:bg-gray-600 shadow"
          >
            <FaTimes className="text-deep-blue dark:text-white" size={16} />
          </button>
        </div>

        {/* Contenu (texte + boutons) */}
        <div className="p-6 space-y-5">
          <div>
            <span className="text-sm text-accent font-medium">
              {project.date}
            </span>
            <h2 className="text-2xl font-heading font-bold text-deep-blue dark:text-white mt-1">
              {project.title}
            </h2>
          </div>

          {project.longDescription && (
            <div>
              <h3 className="text-lg font-semibold text-accent mb-1">
                Description
              </h3>
              <p className="text-charcoal/80 dark:text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          )}

          {project.features?.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-accent mb-1">
                Fonctionnalités
              </h3>
              <ul className="list-disc list-inside space-y-1 text-charcoal/80 dark:text-gray-300">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div>
              <h3 className="text-lg font-semibold text-accent mb-1">
                Défis techniques
              </h3>
              <p className="text-charcoal/80 dark:text-gray-300">
                {project.challenges}
              </p>
            </div>
          )}

          {project.role && (
            <div>
              <h3 className="text-lg font-semibold text-accent mb-1">
                Mon rôle
              </h3>
              <p className="text-charcoal/80 dark:text-gray-300">
                {project.role}
              </p>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold text-accent mb-1">
              Stack utilisée
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technos.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Liens */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-deep-blue dark:bg-gray-700 text-white rounded-lg hover:bg-deep-blue/90 transition-colors font-medium"
              >
                Code source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
              >
                Voir la démo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const scrollRef = useRef(null);

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
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full flex flex-col shadow-2xl"
          style={{ maxHeight: "calc(100vh - 2rem)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-48 flex-shrink-0 bg-gradient-to-br from-deep-blue/10 to-accent/10 rounded-t-2xl overflow-hidden">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80"
              />
            )}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 dark:bg-gray-700/90 p-2 rounded-full hover:bg-white dark:hover:bg-gray-600 transition-colors shadow"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-deep-blue dark:text-white"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-6 py-6 space-y-5 overscroll-contain"
          >
            <div>
              <span className="text-sm text-accent font-medium">
                {project.date}
              </span>
              <h2 className="text-3xl font-heading font-bold text-deep-blue dark:text-white mt-1">
                {project.title}
              </h2>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-accent mb-2">
                Description
              </h3>
              <p className="text-charcoal/80 dark:text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-accent mb-2">
                  Fonctionnalites cles
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-charcoal/80 dark:text-gray-300"
                    >
                      <span className="text-accent font-bold mt-0.5">-</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div>
                <h3 className="text-lg font-semibold text-accent mb-2">
                  Defis techniques
                </h3>
                <p className="text-charcoal/80 dark:text-gray-300">
                  {project.challenges}
                </p>
              </div>
            )}

            {project.role && (
              <div>
                <h3 className="text-lg font-semibold text-accent mb-2">
                  Mon role
                </h3>
                <p className="text-charcoal/80 dark:text-gray-300">
                  {project.role}
                </p>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-accent mb-2">
                Stack utilisee
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technos.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-deep-blue dark:bg-gray-700 text-white rounded-lg hover:bg-deep-blue/90 transition-colors font-medium"
                >
                  Code source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
                >
                  Voir la demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

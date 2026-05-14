import { motion } from "framer-motion";

export default function ProjectCard({ project, index, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full w-full"
    >
      <div
        onClick={onSelect}
        className="glass-card rounded-xl sm:rounded-2xl overflow-hidden h-full flex flex-col border-2 border-transparent hover:border-accent/50 transition-all duration-300 cursor-pointer group w-full"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect();
          }
        }}
      >
        {/* Image – hauteur réduite sur mobile */}
        <div className="h-36 sm:h-48 bg-gradient-to-br from-deep-blue/5 to-accent/10 flex items-center justify-center relative overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          ) : (
            <span className="text-4xl sm:text-5xl text-accent opacity-40">
              Projet
            </span>
          )}
          <div className="absolute inset-0 bg-deep-blue/20 group-hover:bg-transparent transition-colors" />
        </div>

        {/* Contenu */}
        <div className="p-3 sm:p-5 flex flex-col flex-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-deep-blue dark:text-white mb-2 break-words">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal/70 dark:text-gray-300 mb-3 flex-1 line-clamp-3">
            {project.shortDescription || project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
            {project.technos.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 sm:px-3 sm:py-1 bg-green-leaf/10 text-green-leaf text-[10px] sm:text-xs font-semibold rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 text-xs sm:text-sm">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-blue dark:text-white hover:text-accent font-medium transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-deep-blue dark:hover:text-white font-medium transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Démo
              </a>
            )}
          </div>
        </div>

        {/* Overlay "Voir le projet" – visible uniquement sur desktop */}
        <div className="hidden sm:flex absolute inset-0 items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-accent/80 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg transform group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg">Voir le projet</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function ProjectCard({ project, index, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <div
        onClick={onSelect}
        className="glass-card rounded-2xl overflow-hidden h-full flex flex-col relative border-2 border-transparent hover:border-accent/50 transition-all duration-300 cursor-pointer group"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect();
          }
        }}
        data-cursor="Voir"
      >
        <div className="h-48 bg-gradient-to-br from-deep-blue/5 to-accent/10 flex items-center justify-center relative overflow-hidden">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          )}
          <div className="absolute inset-0 bg-deep-blue/20 group-hover:bg-transparent transition-colors" />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-2xl font-heading font-bold text-deep-blue dark:text-white mb-3">
            {project.title}
          </h3>
          <p className="text-charcoal/70 dark:text-gray-300 mb-4 flex-1">
            {project.shortDescription || project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technos.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-green-leaf/10 text-green-leaf text-xs font-semibold rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Code"
                className="clickable text-deep-blue dark:text-white hover:text-accent font-medium transition-colors text-sm"
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
                data-cursor="Demo"
                className="clickable text-accent hover:text-deep-blue dark:hover:text-white font-medium transition-colors text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                Demo
              </a>
            )}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-accent/80 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg transform group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg">Voir le projet</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const allTechnos = Array.from(new Set(projects.flatMap((p) => p.technos))).sort();

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("Tous");

  const filtered = useMemo(() => {
    if (filter === "Tous") return projects;
    return projects.filter((p) => p.technos.includes(filter));
  }, [filter]);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-cream dark:bg-gray-800 relative transition-colors"
    >
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path
            fill="#ffffff"
            className="dark:fill-gray-900"
            d="M0,64L80,58.7C160,53,320,43,480,64C640,85,800,139,960,144C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center gradient-text mb-16">
          Projets recents
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter("Tous")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              filter === "Tous"
                ? "bg-accent text-white shadow-lg"
                : "bg-white dark:bg-gray-700 text-charcoal dark:text-gray-200 hover:bg-accent/10"
            }`}
          >
            Tous
          </button>
          {allTechnos.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === tech
                  ? "bg-accent text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-charcoal dark:text-gray-200 hover:bg-accent/10"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

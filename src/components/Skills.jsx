import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiDjango,
  SiNestjs,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiExpo,
  SiDaisyui,
  SiPrisma,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 100 },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 95 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 95 },
  { name: "DaisyUI", icon: SiDaisyui, color: "#5A0EF8", level: 90 },
  { name: "React", icon: FaReact, color: "#61DAFB", level: 95 },
  { name: "React Native", icon: SiExpo, color: "#000020", level: 85 },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 90 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 85 },
  { name: "Vite", icon: SiVite, color: "#646CFF", level: 90 },
  { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 90 },
  { name: "Express", icon: SiExpress, color: "#000000", level: 88 },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", level: 80 },
  { name: "Django DRF", icon: SiDjango, color: "#092E20", level: 75 },
  { name: "Python", icon: FaPython, color: "#3776AB", level: 85 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 75 },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 70 },
  { name: "Prisma", icon: SiPrisma, color: "#1B222D", level: 75 },
  { name: "Docker", icon: FaDocker, color: "#2496ED", level: 80 },
  { name: "Git", icon: FaGitAlt, color: "#F05032", level: 95 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors"
    >
      <h2 className="text-4xl font-heading font-bold text-center gradient-text mb-16">
        Stack Full Stack
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col items-center gap-3 p-5 glass-card rounded-2xl"
          >
            <skill.icon
              className="text-4xl md:text-5xl"
              style={{ color: skill.color }}
            />
            <span className="font-semibold text-sm text-charcoal dark:text-gray-200 text-center">
              {skill.name}
            </span>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
                className="h-full rounded-full"
                style={{ backgroundColor: skill.color }}
              />
            </div>
            <span className="text-xs text-charcoal/60 dark:text-gray-400">
              {skill.level}%
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

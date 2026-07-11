import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaRobot,
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
  SiOpenai,
  SiLangchain,
} from "react-icons/si";

import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
  level: number;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 85 },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 80 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 85 },
      { name: "DaisyUI", icon: SiDaisyui, color: "#5A0EF8", level: 75 },
      { name: "React", icon: FaReact, color: "#61DAFB", level: 80 },
      { name: "React Native", icon: SiExpo, color: "#000020", level: 55 },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 65 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 70 },
      { name: "Vite", icon: SiVite, color: "#646CFF", level: 75 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 70 },
      { name: "Express", icon: SiExpress, color: "#000000", level: 65 },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E", level: 60 },
      { name: "Python", icon: FaPython, color: "#3776AB", level: 60 },
      { name: "Django DRF", icon: SiDjango, color: "#092E20", level: 55 },
    ],
  },
  {
    label: "Base de donn\u00e9es",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 60 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 55 },
      { name: "Prisma", icon: SiPrisma, color: "#1B222D", level: 60 },
    ],
  },
  {
    label: "DevOps & Outils",
    skills: [
      { name: "Docker", icon: FaDocker, color: "#2496ED", level: 60 },
      { name: "Git", icon: FaGitAlt, color: "#F05032", level: 75 },
    ],
  },
  {
    label: "IA & Agents",
    skills: [
      { name: "IA & LLMs", icon: SiOpenai, color: "#412991", level: 60 },
      { name: "Agentic AI", icon: FaRobot, color: "#E86A33", level: 55 },
      { name: "LangChain", icon: SiLangchain, color: "#1C3C3C", level: 50 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors"
    >
      <h2 className="text-4xl font-heading font-bold text-center gradient-text mb-16">
        Technologies que j'utilise
      </h2>
      <div className="max-w-6xl mx-auto space-y-12">
        {categories.map((cat, catIdx) => (
          <div key={cat.label}>
            <h3 className="text-xl font-heading font-bold text-deep-blue dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-accent/50" />
              {cat.label}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {cat.skills.map((skill, sIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (catIdx * 0.1 + sIdx * 0.05) }}
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col items-center gap-2 p-4 glass-card rounded-2xl"
                >
                  <skill.icon
                    className="text-3xl md:text-4xl"
                    style={{ color: skill.color }}
                  />
                  <span className="font-semibold text-xs text-charcoal dark:text-gray-200 text-center leading-tight">
                    {skill.name}
                  </span>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <span className="text-[10px] text-charcoal/60 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma,
  SiWebpack,
  SiVite,
  SiShadcnui,
} from "react-icons/si";
import { FiBox, FiCode, FiDatabase, FiTool } from "react-icons/fi";

interface Skill {
  name: string;
  icon: React.ElementType;
  color?: string;
  category: string;
}

const skillsData: Skill[] = [
  // Core & Frontend
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Core & Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Core & Frontend" },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Core & Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "var(--color-neutral-300)", category: "Core & Frontend" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Core & Frontend" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", category: "Core & Frontend" },
  { name: "Sass", icon: SiSass, color: "#CC6699", category: "Core & Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Core & Frontend" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "#A0A0A0", category: "Core & Frontend" },

  // Backend & Database
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend & Database" },
  { name: "Express.js", icon: SiExpress, color: "var(--color-neutral-300)", category: "Backend & Database" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Backend & Database" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Backend & Database" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Backend & Database" },

  // Tools & Platforms
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools & Platforms" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "Tools & Platforms" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "Tools & Platforms" },
  { name: "Vite", icon: SiVite, color: "#646CFF", category: "Tools & Platforms" },
  { name: "Webpack", icon: SiWebpack, color: "#8DD6F9", category: "Tools & Platforms" },
];

// Group skills by category for rendering
const groupedSkills = skillsData.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  },
};

const categoryIconMap: { [key: string]: React.ElementType } = {
  "Core & Frontend": FiCode,
  "Backend & Database": FiDatabase,
  "Tools & Platforms": FiTool,
};

export function Skills() {
  return (
    <section id="skills" className="py-8 md:py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          My Tech Stack &amp; Skills
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mt-3 max-w-2xl mx-auto">
          A glimpse into the technologies and tools I leverage to build modern web experiences.
        </p>
      </motion.div>

      {Object.entries(groupedSkills).map(([category, skills]) => {
        const CategoryIcon = categoryIconMap[category] || FiBox;
        return (
          <motion.div
            key={category}
            className="mb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-center md:justify-start mb-6 md:mb-8">
              <CategoryIcon className="w-7 h-7 mr-3 text-primary" />
              <h3 className="text-2xl font-semibold">{category}</h3>
            </div>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group relative flex flex-col items-center justify-center p-4 border  rounded-xl transition-all duration-80"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                    rotate: Math.random() > 0.5 ? 2 : -2,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <skill.icon
                    className="w-10 h-10 md:w-12 md:h-12 mb-2 transition-colors duration-300 group-hover:text-primary"
                    style={{ color: skill.color ?? "var(--color-neutral-500)" }}
                  />
                  <span className="text-sm md:text-base font-medium text-card-foreground text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
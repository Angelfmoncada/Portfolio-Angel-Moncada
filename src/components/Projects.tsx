import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "FocusBuddy",
    description: "Your productivity companion for focused work sessions and task management. A comprehensive productivity application that helps users maintain focus through structured work sessions, task tracking, and progress analytics. Features include customizable focus timers, task organization, progress visualization, and productivity insights to enhance work efficiency.",
    image: "/lovable-uploads/focusbuddy live.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Productivity", "Timer", "Analytics"],
    demoUrl: "https://angelfmoncada.github.io/FocusBuddy/",
    githubUrl: "https://github.com/Angelfmoncada/FocusBuddy"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

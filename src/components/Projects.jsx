import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Task Manager App',
    description: 'A web app for task management.',
    tech: 'React, Node.js',
    github: 'https://github.com/username/project-one',
    image: 'gallery1.jpg'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects, skills, and contact information.',
    tech: 'React, TailwindCSS',
    github: 'https://github.com/username/project-two',
    image: 'gallery2.png'
  },
  {
    title: 'Weather App',
    description: 'Weather app using API integration.',
    tech: 'React, OpenWeather API',
    github: 'https://github.com/username/project-three',
    image: 'gallery3.jpg'
  }
];

export default function Projects() {
  return (
    <section 
      id="projects"
      className="p-6 min-h-screen bg-gradient-to-b from-blue-950 to-green-900 text-white"
    >
      <h2 className="text-3xl font-serif font-bold mb-12 text-center">Projects</h2>
      <div className="flex flex-col md:flex-row mb-8 gap-8 justify-center items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-blue-950 border border-blue-950 p-8 rounded-lg shadow-lg w-full min-h-[50vh] max-w-xs flex flex-col items-center justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.4)" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="mb-4 w-full h-40 object-cover rounded transition-transform duration-300"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex flex-col flex-grow items-center text-center break-words">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-2 text-wrap">{project.description}</p>
              <p className="text-sm mb-4">Tech: {project.tech}</p>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-black transition-colors duration-300 font-semibold mt-auto"
            >
              View on GitHub
            </a>
          </motion.div> 
        ))}
      </div>
      

    </section>
  );
}
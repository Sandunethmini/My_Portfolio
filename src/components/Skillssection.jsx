import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";

export default function Skillssection() {
  const [activeTab, setActiveTab] = useState('Skills');

  const content = {
    Skills: (
      <div>
        <strong className="block mb-6 font-serif text-2xl">Technical Skills</strong>
        <div className="w-full px-2">
          <div className="grid w-full grid-cols-1 gap-8 mt-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                icon: <FaPython className="mb-3 text-5xl text-yellow-300" />,
                title: "Python",
                type: "Programming",
                desc: "Experienced in scripting, automation and data analysis."
              },
              {
                icon: <FaJava className="mb-3 text-5xl text-orange-400" />,
                title: "Java",
                type: "Programming",
                desc: "Object-oriented programming for backend and Android apps."
              },
              {
                icon: <FaReact className="mb-3 text-5xl text-cyan-400" />,
                title: "React",
                type: "Frontend",
                desc: "Building interactive and dynamic user interfaces."
              },
              {
                icon: <FaJs className="mb-3 text-5xl text-yellow-400" />,
                title: "JavaScript",
                type: "Frontend",
                desc: "Core scripting for web interactivity and logic."
              },
              {
                icon: <FaHtml5 className="mb-3 text-5xl text-orange-500" />,
                title: "HTML",
                type: "Frontend",
                desc: "Structuring web pages with semantic markup."
              },
              {
                icon: <FaCss3Alt className="mb-3 text-5xl text-blue-400" />,
                title: "CSS",
                type: "Frontend",
                desc: "Styling and responsive design for modern UIs."
              },
              {
                icon: <FaNodeJs className="mb-3 text-5xl text-green-400" />,
                title: "Node.js",
                type: "Backend",
                desc: "Server-side scripting and REST API development."
              },
              {
                icon: <FaGitAlt className="mb-3 text-5xl text-orange-300" />,
                title: "Git",
                type: "Version Control",
                desc: "Collaboration and code management with GitHub."
              }
            ].map((skill, idx) => (
              <motion.div
                key={skill.title}
                className="flex flex-col items-center w-full h-full p-8 bg-blue-900 shadow bg-opacity-80 rounded-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.4)" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {skill.icon}
                <span className="mb-2 text-xl font-bold">{skill.title}</span>
                <span className="mb-2 text-sm text-blue-200">{skill.type}</span>
                <span className="text-base text-center text-gray-300">{skill.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),

    Education: (
      <p>
        <strong className="block mb-6 font-serif text-2xl">Education</strong>
        Information Technology at the Institute of Technology,<br />
        University of Moratuwa<br />
        2023 Present<br />
        Pursuing a comprehensive degree program focused on software engineering, web development, database system and modern computing technologies. <br />Gained hands-on experience through academic projects, group work and practical labs, with a strong emphasis on user-centered design and real-world application development.
      </p>
    ),

    Goals: (
      <p>
        <strong className="block mb-6 font-serif text-2xl">Career Aspiration</strong>
        To become a full-stack developer focused on user-centered design.
      </p>
    )
  };

  const tabs = Object.keys(content);

  return (
    <section 
      id="skills" // Changed from "skills-about" to "skills"
      className="bg-[#392d69] text-white p-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center">Skills & Experience</h2>
        <div className="flex justify-center mb-6 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200
                ${activeTab === tab
                  ? 'bg-white text-blue-900 shadow-lg scale-105'
                  : 'bg-blue-800 hover:bg-blue-700 text-white opacity-80'}
              `}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-6 content">
          {content[activeTab]}
        </div>
      </div>
    </section>
  );
}
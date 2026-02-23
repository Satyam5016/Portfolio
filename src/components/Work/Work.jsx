import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../constants";

const Work = () => {
  return (
    <section id="work" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          <span className="text-white">Featured </span>
          <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full mt-4"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
        >
          A selection of my recent work showcasing problem-solving and technical expertise.
        </motion.p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative glass-card rounded-2xl overflow-hidden flex flex-col h-full bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500 border border-white/5 hover:border-accent/30"
          >
            {/* Project Image Area */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Tech Stack Overlay - Subtle */}
              <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-black/40 backdrop-blur-md text-white border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow relative z-20">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Action Buttons - Always Visible */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-semibold"
                  >
                    <FaGithub size={18} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] transition-all duration-300 text-sm font-semibold"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-accent/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            <div className="absolute -inset-px bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/10 group-hover:to-accent/5 rounded-2xl transition-all duration-500 pointer-events-none -z-10"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;

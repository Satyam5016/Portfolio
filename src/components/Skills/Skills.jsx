import React from "react";
import { motion } from "framer-motion";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-accent-light/10 blur-[120px] rounded-full animate-pulse-slow delay-700"></div>
      </div>

      <div className="text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-bold tracking-widest uppercase"
        >
          Expertise
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-6"
        >
          <span className="text-white">Technical </span>
          <span className="gradient-text">Proficiency</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          A comprehensive overview of the technologies and tools I've mastered to build
          exceptional digital experiences.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 max-w-7xl mx-auto"
      >
        {SkillsInfo.map((category, catIndex) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Card Background & Border */}
            <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-3xl -z-10 transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>

            <div className="glass-card h-full rounded-3xl p-8 md:p-10 flex flex-col transition-all duration-500 bg-white/[0.03] backdrop-blur-xl border border-white/5 group-hover:bg-white/[0.05] group-hover:border-accent/30 overflow-hidden">

              {/* Category Header */}
              <div className="relative mb-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="absolute -bottom-3 left-0 w-12 h-1 bg-accent rounded-full group-hover:w-24 transition-all duration-500"></div>

                {/* Decorative background number/letter */}
                <span className="absolute -top-6 -right-4 text-8xl font-black text-white/[0.03] pointer-events-none select-none group-hover:text-accent/5 transition-colors duration-500">
                  0{catIndex + 1}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-accent/20 transition-all duration-300 group/skill"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-2.5 flex items-center justify-center group-hover/skill:rotate-6 transition-transform duration-300">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="max-w-full max-h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-500"
                      />
                    </div>
                    <span className="text-xs font-bold text-gray-400 group-hover/skill:text-white uppercase tracking-wider transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Glowing Corner */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <motion.p variants={itemVariants}>
              I am a <strong className="text-white font-semibold">Full Stack Developer</strong> passionate about building high-quality, scalable web applications that solve real-world problems.
            </motion.p>
            <motion.p variants={itemVariants}>
              With a strong foundation in the <span className="text-accent-light font-medium">MERN stack</span> (MongoDB, Express, React, Node.js) and a deep interest in emergent technologies like AI and Machine Learning, I bridge the gap between complex backend logic and seamless user experiences.
            </motion.p>
            <motion.p variants={itemVariants}>
              My approach to development is rooted in clean code, continuous learning, and an unwavering commitment to delivering premium digital products that exceed expectations.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Stats Cards */}
            <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-4xl font-bold gradient-text mb-2">10+</h3>
              <p className="text-sm text-gray-400 font-medium">Projects Completed</p>
            </motion.div>
            <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-4xl font-bold gradient-text mb-2">3+</h3>
              <p className="text-sm text-gray-400 font-medium">Years Coding</p>
            </motion.div>
            <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 col-span-2">
              <h3 className="text-2xl font-bold text-white mb-2">Continuous</h3>
              <p className="text-sm text-gray-400 font-medium">Learner & Problem Solver</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

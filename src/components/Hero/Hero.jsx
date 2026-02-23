// src/components/Hero/Hero.jsx
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import profileImage from '../../assets/p1.jpeg';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center pt-20 pb-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative"
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full mt-10 md:mt-0 pt-10 md:pt-0">
                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:w-[55%] text-center md:text-left z-10"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent-light text-sm font-medium mb-6">
                        ✨ Available for new opportunities
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4">
                        Building <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-accent-light to-blue-400 bg-clip-text text-transparent">
                            Scalable Web
                        </span>
                        <br className="hidden md:block" /> Applications
                    </h1>

                    <h2 className="text-xl sm:text-2xl font-medium text-gray-300 mb-6 h-[40px]">
                        <span className="text-gray-400">I am a </span>
                        <ReactTypingEffect
                            text={[
                                'Full Stack Developer',
                                'MERN Stack Engineer',
                                'Problem Solver',
                            ]}
                            speed={80}
                            eraseSpeed={40}
                            typingDelay={500}
                            eraseDelay={2000}
                            cursorRenderer={(cursor) => (
                                <span className="text-accent-light">{cursor}</span>
                            )}
                        />
                    </h2>

                    <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
                        I craft responsive, high-performance web applications and seamless digital experiences using modern technologies from front-end to back-end.
                    </p>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <a
                            href="#work"
                            className="px-8 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-accent to-accent-dark hover:shadow-[0_0_20px_rgba(130,69,236,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            View Projects
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1hYm64t--KyTlLQMElAvLAmLY8LUZ9KWx/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 rounded-full text-white font-semibold border border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm"
                        >
                            Download Resume
                            <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
                        <a href="https://github.com/Satyam5016" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 border border-white/5">
                            <FaGithub size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/satyam-yadav-7bb434263/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 border border-white/5">
                            <FaLinkedin size={22} />
                        </a>
                    </div>

                </motion.div>

                {/* Right Section - Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="md:w-[45%] flex justify-center md:justify-end relative z-10"
                >
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full"></div>

                    <Tilt
                        className="relative"
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        perspective={1000}
                        scale={1.02}
                        transitionSpeed={2000}
                        gyroscope={true}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <img
                            src={profileImage}
                            alt="Satyam Yadav"
                            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] rounded-full object-cover border-4 border-primary/50 shadow-2xl"
                        />
                    </Tilt>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;

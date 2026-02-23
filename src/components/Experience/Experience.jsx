import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constants";

const Experience = () => {
    return (
        <section id="experience" className="section-padding relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="text-white">Professional </span>
                    <span className="gradient-text">Experience</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full mt-4"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        {/* Timeline Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-primary bg-accent-light shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 4 0 0 1 0 8Z" />
                            </svg>
                        </div>

                        {/* Content Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(130,69,236,0.3)] transition-all duration-300">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 p-2 flex items-center justify-center shrink-0">
                                        <img src={exp.img} alt={exp.company} className="max-w-full max-h-full object-contain mix-blend-screen" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-accent-light font-medium">{exp.company}</p>
                                    </div>
                                </div>
                                <div className="text-sm font-semibold text-gray-400 bg-white/5 py-1 px-3 rounded-full border border-white/10">
                                    {exp.date}
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {exp.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, idx) => (
                                    <span key={idx} className="text-xs font-medium bg-accent/10 border border-accent/20 text-accent-light px-2.5 py-1 rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

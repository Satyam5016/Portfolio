import React from "react";
import { education } from "../../constants"; // Import the education data
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </motion.div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: "100%" }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute sm:left-1/2 left-[30px] sm:-translate-x-1/2 w-1 bg-white"
        ></motion.div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
          >
            {/* Timeline Dot (Mobile only) */}
            <div className="absolute left-[24px] top-8 w-4 h-4 bg-accent rounded-full border-2 border-white sm:hidden z-10 shadow-[0_0_10px_rgba(130,69,236,0.8)]"></div>

            {/* Content Section */}
            <div
              className={`w-[calc(100%-60px)] ml-[60px] sm:w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/20 bg-gray-900/80 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-0 sm:mr-44" : "sm:mr-0 sm:ml-44"
                } transform transition-transform duration-300 hover:scale-[1.02]`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-22 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

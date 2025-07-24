// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto py-24 font-sans"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto mt-2 rounded"></div>
      <p className="text-gray-400 mt-4 text-lg font-medium">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#0f0c29]/60 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 rounded-2xl border border-[#8245ec] shadow-[0_0_30px_#8245ec40] hover:shadow-[0_0_45px_#a855f7] transition duration-300"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 mb-6 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 border border-gray-600 rounded-3xl py-2 px-3 bg-[#18181c]/50 transition transform hover:scale-105 hover:bg-[#232338]"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm sm:text-base text-white font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
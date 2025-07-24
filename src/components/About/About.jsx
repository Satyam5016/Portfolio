import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/p1.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="pt-24 pb-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-1">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-3 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent animate-text-glow">
            Satyam Yadav
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-4">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'AI & ML Developer',
                'Python Developer',
                'Front-End Web Developer',
                'Computer Vision Engineer',
                'Coder',
              ]}
              speed={80}
              eraseSpeed={40}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#a855f7]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mt-6 mb-10 leading-relaxed">
            Passionate Full-Stack Python Developer and AI Enthusiast building
            intelligent apps using Flask, OpenCV, and modern front-end
            technologies. Exploring the future with Computer Vision and Deep
            Learning.
          </p>

          <a
            href="https://drive.google.com/file/d/19plLjkXryEHsUW9LrXzt1kOxjvN8SaW8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#8245ec]"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 5px #8245ec, 0 0 15px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="rounded-full border-[6px] border-[#8245ec] p-1 shadow-[0_0_50px_rgba(130,69,236,0.6)]"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Satyam Yadav"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] rounded-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

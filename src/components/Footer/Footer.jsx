import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-primary/50 backdrop-blur-md pt-16 pb-8 px-6 md:px-12 lg:px-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            <span className="text-white">Satyam</span>
            <span className="text-accent">Yadav</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm max-w-xs">
            Building scalable web applications and premium digital experiences.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {[
            { name: "About", id: "about" },
            { name: "Projects", id: "work" },
            { name: "Skills", id: "skills" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (<button
            key={index}
            onClick={() => handleScroll(item.id)}
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            {item.name}
          </button>
          ))}
        </nav>

        {/* Social */}
        <div className="flex gap-4">
          {[
            { icon: <FaGithub size={20} />, link: "https://github.com/Satyam5016", label: "GitHub" },
            { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/satyam-yadav-7bb434263/", label: "LinkedIn" },
            { icon: <FaTwitter size={20} />, link: "#", label: "Twitter" },
            { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/5atyam_yadav", label: "Instagram" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Satyam Yadav. All rights reserved.</p>
        <p>Designed & Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;


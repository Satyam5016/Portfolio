import { motion } from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profileImage from "../../assets/p1.jpeg";

const Hero = () => (
  <section id="hero" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10">
    <div className="absolute left-5 top-28 hidden h-[calc(100%-8rem)] w-px bg-gradient-to-b from-[#66f3d1]/50 via-white/10 to-transparent lg:block" aria-hidden="true" />
    <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_.85fr] lg:pl-12">
      <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[.035] px-4 py-2 text-xs font-bold text-slate-300">
          <span className="pulse-dot h-2 w-2 rounded-full bg-[#66f3d1]" /> Available for full-time opportunities
        </div>
        <p className="eyebrow mb-5">Hello, I&apos;m Satyam</p>
        <h1 className="display-font max-w-4xl text-[clamp(3.8rem,8vw,7.4rem)] font-bold leading-[.88] tracking-[-.065em]">
          I build digital<br />products that <span className="text-[#66f3d1]">perform.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
          Full-stack engineer focused on thoughtful interfaces, scalable systems, and products that turn complex ideas into useful experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#work" className="primary-button">Explore my work <FiArrowDownRight /></a>
          <a href="https://drive.google.com/file/d/1hYm64t--KyTlLQMElAvLAmLY8LUZ9KWx/view?usp=sharing" target="_blank" rel="noreferrer" className="secondary-button">Resume <FiDownload /></a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm text-slate-500">
          <span className="flex items-center gap-2"><FiMapPin className="text-[#66f3d1]" /> Mumbai, India</span>
          <a href="https://github.com/Satyam5016" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white"><FaGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/satyam-yadav-7bb434263/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white"><FaLinkedinIn /> LinkedIn</a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: .92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .15, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[480px]">
        <div className="absolute -inset-10 rounded-full bg-[#66f3d1]/10 blur-[90px]" />
        <div className="surface relative overflow-hidden rounded-[2rem] p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-slate-900">
            <img src={profileImage} alt="Satyam Yadav" className="h-full w-full object-cover object-top grayscale-[12%] transition duration-700 hover:scale-[1.025] hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="mono text-[10px] uppercase tracking-[.18em] text-[#66f3d1]">Currently building</span>
                <p className="mt-1 text-lg font-extrabold">Products for the web</p>
              </div>
              <FiArrowUpRight className="text-2xl text-[#66f3d1]" />
            </div>
          </div>
        </div>
        <div className="float-animation surface absolute -bottom-7 -left-5 rounded-2xl px-5 py-4 sm:-left-10">
          <p className="display-font text-3xl font-bold text-[#66f3d1]">3+</p>
          <p className="mono mt-1 text-[9px] uppercase tracking-[.16em] text-slate-500">Years building</p>
        </div>
        <div className="spin-slow absolute -right-7 -top-7 hidden h-24 w-24 rounded-full border border-dashed border-white/20 sm:block" />
      </motion.div>
    </div>
  </section>
);

export default Hero;

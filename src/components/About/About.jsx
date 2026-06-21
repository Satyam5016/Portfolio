import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import SectionHeading from "../SectionHeading";

const strengths = [
  "Scalable full-stack architecture",
  "Accessible, responsive interfaces",
  "Product-focused problem solving",
  "Clean, maintainable code",
];

const About = () => (
  <section id="about" className="section-shell">
    <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
      <div>
        <SectionHeading eyebrow="About me" title={<>Engineering with<br />purpose.</>} />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .25 }} className="mt-10 hidden items-center gap-4 lg:flex">
          <span className="mono text-xs text-slate-600">01 / 06</span>
          <span className="h-px flex-1 bg-white/10" />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7 }}>
        <p className="display-font text-2xl font-semibold leading-[1.45] text-slate-200 sm:text-3xl">
          I turn ambitious product ideas into reliable web experiences—from the first interface to the final API.
        </p>
        <div className="mt-8 grid gap-7 text-[15px] leading-7 text-slate-400 sm:grid-cols-2">
          <p>I work across the MERN stack, combining a sharp eye for interaction design with a practical understanding of backend systems, authentication, data, and deployment.</p>
          <p>My process is collaborative and outcome-driven: understand the real problem, reduce unnecessary complexity, and ship work that feels polished from day one.</p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {strengths.map((strength, index) => (
            <motion.div key={strength} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="flex items-center gap-3 border-b border-white/[.07] py-3 text-sm font-semibold text-slate-300">
              <FiCheckCircle className="shrink-0 text-[#66f3d1]" /> {strength}
            </motion.div>
          ))}
        </div>

        <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-sm font-extrabold text-[#66f3d1] transition hover:gap-3">
          Start a conversation <FiArrowUpRight />
        </a>
      </motion.div>
    </div>

    <div className="mt-20 grid overflow-hidden rounded-3xl border border-white/10 sm:grid-cols-3">
      {[
        ["10+", "Completed projects"],
        ["3+", "Years of experience"],
        ["Full-stack", "Product capability"],
      ].map(([value, label], index) => (
        <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="bg-white/[.025] px-7 py-8 text-center sm:border-r sm:border-white/10 sm:last:border-r-0">
          <p className="display-font text-3xl font-bold text-white sm:text-4xl">{value}</p>
          <p className="mono mt-2 text-[10px] uppercase tracking-[.17em] text-slate-500">{label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default About;

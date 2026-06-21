import { motion } from "framer-motion";
import { SkillsInfo } from "../../constants";
import SectionHeading from "../SectionHeading";

const Skills = () => (
  <section id="skills" className="border-y border-white/[.06] bg-white/[.015]">
    <div className="section-shell">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading eyebrow="Capabilities" title={<>Tools I use to<br />deliver.</>} copy="A practical toolkit for designing, building, testing, and shipping modern digital products." />
        <p className="mono max-w-sm text-[10px] uppercase leading-6 tracking-[.15em] text-slate-600">Strategy · Interface · Engineering · Delivery</p>
      </div>

      <div className="mt-16 grid gap-4 lg:grid-cols-2">
        {SkillsInfo.map((category, categoryIndex) => (
          <motion.article key={category.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55, delay: categoryIndex * .08 }} className="surface group rounded-3xl p-6 transition duration-500 hover:border-[#66f3d1]/25 sm:p-8">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="display-font text-2xl font-bold">{category.title}</h3>
              <span className="mono text-[10px] tracking-[.18em] text-slate-600">0{categoryIndex + 1}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 rounded-2xl border border-white/[.065] bg-white/[.02] p-3 transition duration-300 hover:-translate-y-1 hover:border-[#66f3d1]/25 hover:bg-[#66f3d1]/[.035]">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/[.055] p-2">
                    <img src={skill.logo} alt="" className="max-h-full max-w-full object-contain" />
                  </span>
                  <span className="text-xs font-bold text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

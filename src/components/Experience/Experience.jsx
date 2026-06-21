import { motion } from "framer-motion";
import { FiCheck, FiMapPin } from "react-icons/fi";
import { experiences } from "../../constants";
import SectionHeading from "../SectionHeading";

const Experience = () => (
  <section id="experience" className="section-shell">
    <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHeading eyebrow="Experience" title={<>Where I&apos;ve<br />made impact.</>} copy="Hands-on experience delivering responsive, production-ready applications across cross-functional teams." />
      </div>

      <div>
        {experiences.map((experience, index) => (
          <motion.article key={experience.id} initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .65, delay: index * .08 }} className="surface overflow-hidden rounded-3xl">
            <div className="border-b border-white/10 p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="display-font grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#66f3d1]/25 bg-[#66f3d1]/10 text-lg font-bold text-[#66f3d1]">
                  WE
                </div>
                <div>
                  <h3 className="display-font text-xl font-bold sm:text-2xl">{experience.role}</h3>
                  <p className="mt-1 text-sm font-bold text-[#66f3d1]">{experience.company}</p>
                </div>
              </div>
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  <span className="mono w-fit rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[.12em] text-slate-400">{experience.date}</span>
                  <span className="mono flex w-fit items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[.12em] text-slate-500"><FiMapPin /> {experience.location}</span>
                </div>
              </div>
              <p className="mt-6 text-[15px] leading-7 text-slate-400">{experience.desc}</p>
            </div>

            <div className="p-6 sm:p-8">
              <p className="mono mb-5 text-[10px] uppercase tracking-[.18em] text-slate-500">Key achievements</p>
              <div className="grid gap-x-8 gap-y-4 xl:grid-cols-2">
                {experience.achievements.map((achievement) => (
                  <p key={achievement} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#66f3d1]/10 text-[11px] text-[#66f3d1]"><FiCheck /></span>
                    {achievement}
                  </p>
                ))}
              </div>
              <div className="mt-8 border-t border-white/[.07] pt-6">
                <p className="mono mb-4 text-[10px] uppercase tracking-[.18em] text-slate-500">Technologies used</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => <span key={skill} className="tag">{skill}</span>)}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

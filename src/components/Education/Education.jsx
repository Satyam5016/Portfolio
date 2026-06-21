import { motion } from "framer-motion";
import { FiArrowDown, FiAward, FiBookOpen, FiMapPin } from "react-icons/fi";
import { education } from "../../constants";
import SectionHeading from "../SectionHeading";

const Education = () => (
  <section id="education" className="section-shell">
    <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-20">
      <SectionHeading
        eyebrow="Education"
        title={<>A journey built on<br />curiosity & discipline.</>}
        copy="From a strong school foundation to qualifying JEE Advanced and pursuing interdisciplinary engineering at RGIPT."
      />
      <motion.div
        initial={{ opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: .3 }}
        transition={{ duration: .65 }}
        className="relative overflow-hidden rounded-3xl border border-[#66f3d1]/20 bg-[#66f3d1]/[.055] p-6 sm:p-8"
      >
        <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-[#66f3d1]/15" />
        <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#66f3d1]/10" />
        <div className="relative flex items-start gap-5">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#66f3d1] text-xl text-[#05080d] shadow-[0_10px_35px_rgba(102,243,209,.18)]">
            <FiAward />
          </span>
          <div>
            <p className="mono text-[9px] uppercase tracking-[.2em] text-[#66f3d1]">Defining academic milestone</p>
            <h3 className="display-font mt-3 text-2xl font-bold leading-tight sm:text-3xl">Qualified JEE Advanced</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Qualified immediately after Class XII and secured admission to Rajiv Gandhi Institute of Petroleum Technology based on my rank.
            </p>
          </div>
        </div>
      </motion.div>
    </div>

    <div className="mt-20">
      <div className="mb-8 flex items-center gap-4">
        <span className="mono text-[10px] uppercase tracking-[.2em] text-slate-500">Academic timeline</span>
        <span className="h-px flex-1 bg-white/[.08]" />
        <FiArrowDown className="text-[#66f3d1]" />
      </div>

      <div className="relative">
        <div className="absolute bottom-8 left-[25px] top-8 w-px bg-gradient-to-b from-[#66f3d1] via-white/15 to-transparent sm:left-[31px] lg:left-[calc(25%+31px)]" aria-hidden="true" />

        {education.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .18 }}
            transition={{ duration: .6, delay: index * .08 }}
            className="relative grid gap-5 pb-8 last:pb-0 lg:grid-cols-[25%_75%]"
          >
            <div className="hidden pr-10 pt-8 text-right lg:block">
              <p className="mono text-[10px] uppercase leading-5 tracking-[.14em] text-slate-500">{item.date}</p>
              <p className="mono mt-2 text-[9px] uppercase tracking-[.16em] text-[#66f3d1]">Stage 0{education.length - index}</p>
            </div>

            <span className="absolute left-[18px] top-8 z-10 grid h-4 w-4 place-items-center rounded-full border-4 border-[#05080d] bg-[#66f3d1] shadow-[0_0_0_5px_rgba(102,243,209,.1)] sm:left-6 lg:left-[calc(25%+24px)]" />

            <div className="surface group ml-14 rounded-3xl p-6 transition duration-500 hover:border-[#66f3d1]/25 sm:ml-16 sm:p-8 lg:ml-16">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2.5">
                    <img src={item.img} alt="" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-[#66f3d1]">
                      <FiBookOpen />
                      <span className="mono text-[9px] uppercase tracking-[.14em] lg:hidden">{item.date}</span>
                    </div>
                    <h3 className="display-font text-xl font-bold leading-snug sm:text-2xl">{item.degree || (index === 1 ? "Higher Secondary Education" : "Secondary Education")}</h3>
                    <p className="mt-2 flex items-start gap-2 text-sm font-semibold leading-6 text-slate-300">
                      <FiMapPin className="mt-1 shrink-0 text-slate-600" /> {item.school}
                    </p>
                  </div>
                </div>
                <div className="ml-20 shrink-0 rounded-2xl border border-white/[.08] bg-white/[.025] px-4 py-3 sm:ml-0 sm:text-right">
                  <p className="mono text-[8px] uppercase tracking-[.16em] text-slate-600">Academic score</p>
                  <p className="mt-1 text-sm font-extrabold text-white">{item.grade}</p>
                </div>
              </div>

              <p className="mt-6 border-t border-white/[.07] pt-5 text-sm leading-7 text-slate-500">{item.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Education;

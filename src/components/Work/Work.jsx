import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiChevronDown, FiChevronUp, FiGrid, FiMonitor, FiSmartphone } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../constants";
import SectionHeading from "../SectionHeading";

const filters = [
  { id: "all", label: "All Projects", icon: FiGrid },
  { id: "web", label: "Web Apps", icon: FiMonitor },
  { id: "mobile", label: "Mobile Apps", icon: FiSmartphone },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.category === activeFilter);
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const changeFilter = (filterId) => {
    setActiveFilter(filterId);
    setShowAll(false);
  };

  return (
    <section id="work" className="border-y border-white/[.06] bg-white/[.015]">
    <div className="section-shell">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading eyebrow="Selected work" title={<>Products built for<br />real problems.</>} copy="A selection of full-stack platforms, AI tools, and useful applications—from first concept to deployment." />
        <a href="https://github.com/Satyam5016" target="_blank" rel="noreferrer" className="secondary-button w-fit">All repositories <FiArrowUpRight /></a>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-y border-white/[.07] py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full gap-2 overflow-x-auto pb-1 sm:w-auto sm:pb-0" role="group" aria-label="Filter projects">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const count = filter.id === "all" ? projects.length : projects.filter((project) => project.category === filter.id).length;
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => changeFilter(filter.id)}
                aria-pressed={isActive}
                className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-extrabold transition ${isActive ? "text-[#05080d]" : "border border-white/10 text-slate-400 hover:border-white/20 hover:text-white"}`}
              >
                {isActive && <motion.span layoutId="active-project-filter" className="absolute inset-0 rounded-full bg-[#66f3d1]" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                <Icon className="relative z-10" />
                <span className="relative z-10">{filter.label}</span>
                <span className={`mono relative z-10 text-[9px] ${isActive ? "text-[#05080d]/60" : "text-slate-600"}`}>{String(count).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>
        <motion.p key={activeFilter} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mono text-[9px] uppercase tracking-[.16em] text-slate-600">
          Showing {visibleProjects.length} of {filteredProjects.length} {activeFilter === "all" ? "selected projects" : `${activeFilter} applications`}
        </motion.p>
      </div>

      <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
        {visibleProjects.map((project, index) => (
          <motion.article key={project.id} layout initial={{ opacity: 0, y: 24, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: .97 }} transition={{ duration: .4, delay: Math.min(index * .04, .16) }} className="surface group flex h-full flex-col overflow-hidden rounded-3xl transition-colors duration-500 hover:border-[#66f3d1]/25">
            <div className="relative aspect-[16/9] overflow-hidden bg-[#111823]">
              <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d14]/70 via-transparent to-transparent opacity-70" />
              <span className="mono absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-[#05080d]/70 px-3 py-1.5 text-[9px] uppercase tracking-[.15em] text-white backdrop-blur-md">
                {project.category === "mobile" ? <FiSmartphone /> : <FiMonitor />}
                {project.category === "mobile" ? "Mobile App" : "Web App"}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="display-font text-2xl font-bold leading-tight transition group-hover:text-[#66f3d1]">{project.title}</h3>
              <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.slice(0, 5).map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <div className="mt-8 flex items-center gap-5 border-t border-white/[.07] pt-5">
                {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-extrabold text-slate-300 transition hover:text-white"><FaGithub className="text-base" /> Source</a>}
                {project.webapp && <a href={project.webapp} target="_blank" rel="noreferrer" className="ml-auto flex items-center gap-2 text-xs font-extrabold text-[#66f3d1] transition hover:gap-3">{project.actionLabel || "Live project"} <FiArrowUpRight /></a>}
              </div>
            </div>
          </motion.article>
        ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length > 6 && (
        <motion.div layout className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((value) => !value)}
            className="secondary-button min-w-48"
            aria-expanded={showAll}
          >
            {showAll ? "Show less" : "Show all projects"}
            {showAll ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </motion.div>
      )}
    </div>
  </section>
  );
};

export default Work;

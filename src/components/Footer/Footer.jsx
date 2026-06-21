import { FiArrowUp } from "react-icons/fi";

const Footer = () => (
  <footer className="border-t border-white/[.06] px-5 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
      <div>
        <p className="display-font text-lg font-bold">Satyam Yadav<span className="text-[#66f3d1]">.</span></p>
        <p className="mt-1 text-xs text-slate-600">Designing and engineering useful digital products.</p>
      </div>
      <p className="mono text-[9px] uppercase tracking-[.16em] text-slate-600">© {new Date().getFullYear()} · Built with React</p>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 text-xs font-bold text-slate-400 transition hover:text-[#66f3d1]" aria-label="Back to top">
        Back to top <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10"><FiArrowUp /></span>
      </button>
    </div>
  </footer>
);

export default Footer;

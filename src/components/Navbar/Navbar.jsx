import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b border-white/10 bg-[#05080d]/85 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Main navigation">
        <button onClick={() => navigate("hero")} className="group flex items-center gap-3" aria-label="Back to top">
          <span className="display-font grid h-10 w-10 place-items-center rounded-full border border-white/15 text-sm font-bold transition group-hover:border-[#66f3d1]/60 group-hover:text-[#66f3d1]">SY</span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-extrabold">Satyam Yadav</span>
            <span className="mono block text-[9px] uppercase tracking-[.18em] text-slate-500">Full-stack engineer</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => (
            <button key={item.id} onClick={() => navigate(item.id)} className="rounded-full px-4 py-2 text-xs font-bold text-slate-400 transition hover:bg-white/[.04] hover:text-white">
              {item.label}
            </button>
          ))}
        </div>

        <a href="#contact" className="secondary-button hidden !px-5 !py-2.5 md:inline-flex">
          Let&apos;s talk <FiArrowUpRight />
        </a>

        <button onClick={() => setIsOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xl md:hidden" aria-label="Toggle navigation" aria-expanded={isOpen}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div className={`overflow-hidden border-t border-white/10 bg-[#080d14]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"}`}>
        <div className="mx-auto flex max-w-7xl flex-col px-5 py-5">
          {menuItems.map((item, index) => (
            <button key={item.id} onClick={() => navigate(item.id)} className="flex items-center justify-between border-b border-white/[.06] py-4 text-left text-sm font-bold text-slate-300">
              {item.label}<span className="mono text-[10px] text-slate-600">0{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

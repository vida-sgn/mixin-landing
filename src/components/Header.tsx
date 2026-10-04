import { useState, useEffect } from "react";
import { IconMenu, IconX } from "../assets/icons";

const navItems = [
  { label: "امکانات", href: "#features" },
  { label: "تعرفه‌ها", href: "#pricing" },
  { label: "نمونه‌کارها", href: "#templates" },
  { label: "داستان موفقیت", href: "#stories" },
  { label: "سوالات متداول", href: "#faq" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500
      ${scrolled ? "glass shadow-lg shadow-primary/5" : "bg-white/70 backdrop-blur-md"}`}>
      <div className="container-main flex items-center justify-between h-[72px]">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2.5 select-none group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary
                            flex items-center justify-center shadow-lg shadow-primary/25
                            group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
              <span className="text-white text-base font-black">M</span>
            </div>
            <span className="text-[22px] font-black text-ink tracking-tight">
              میکسین
            </span>
          </a>

          <nav className="hidden lg:block">
            <ul className="flex gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}
                    className="block px-4 py-2 text-[14px] font-medium text-ink-secondary
                               rounded-xl whitespace-nowrap transition-all duration-300
                               hover:text-primary hover:bg-primary-surface">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#"
            className="px-5 py-2.5 text-[14px] font-semibold text-ink-secondary
                       rounded-xl transition-all duration-300
                       hover:text-primary hover:bg-primary-surface">
            ورود
          </a>
          <a href="#"
            className="group relative px-7 py-2.5 text-[14px] font-bold text-white
                       bg-gradient-to-l from-primary to-primary-hover rounded-xl overflow-hidden shadow-lg shadow-primary/25
                       transition-all duration-300
                       hover:shadow-glow hover:scale-105 active:scale-[0.97]">
            <span className="relative z-10">تست رایگان</span>
            <div className="absolute inset-0 bg-gradient-to-l from-secondary to-primary
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl
                     text-ink-secondary hover:bg-primary-surface hover:text-primary transition-all duration-300 cursor-pointer">
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500
        ${open ? "max-h-[500px] border-t border-line/60" : "max-h-0"}`}>
        <div className="container-main py-4 space-y-1 bg-gradient-to-b from-white to-surface/50">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}
              className="block px-4 py-3 text-[15px] font-medium text-ink-secondary
                         rounded-xl hover:text-primary hover:bg-primary-surface transition-all duration-300">
              {item.label}
            </a>
          ))}
          <div className="flex gap-3 pt-4 mt-2 border-t border-line/60">
            <a href="#" className="flex-1 text-center py-2.5 text-[14px] font-semibold text-ink-secondary
                                   border border-line rounded-xl hover:bg-surface transition-all duration-300">ورود</a>
            <a href="#" className="flex-1 text-center py-2.5 text-[14px] font-bold text-white
                                   bg-gradient-to-l from-primary to-primary-hover rounded-xl shadow-lg shadow-primary/25">تست رایگان</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import { IconMenu, IconX } from "../assets/icons";

const navItems = [
  { label: "محصولات", href: "#services" },
  { label: "ویژگی‌ها", href: "#features" },
  { label: "نحوه کار", href: "#how" },
  { label: "تعرفه", href: "#pricing" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500
      ${scrolled ? "glass-strong shadow-card" : "bg-transparent"}`}>
      <div className="container-main flex items-center justify-between h-[72px]">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center gap-2.5 select-none group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary
                            flex items-center justify-center
                            group-hover:shadow-glow-md transition-shadow duration-500">
              <span className="text-white text-base font-black">M</span>
            </div>
            <span className="text-[22px] font-black text-white tracking-tight">
              mi<span className="text-gradient-primary">x</span>in
            </span>
          </a>

          <nav className="hidden lg:block">
            <ul className="flex gap-0.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}
                    className="block px-4 py-2 text-[14px] font-medium text-ink-secondary
                               rounded-xl whitespace-nowrap transition-all duration-200
                               hover:text-white hover:bg-white/5">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#"
            className="px-5 py-2.5 text-[14px] font-medium text-ink-secondary
                       rounded-xl transition-all duration-200
                       hover:text-white hover:bg-white/5">
            ورود
          </a>
          <a href="#"
            className="group relative px-7 py-2.5 text-[14px] font-semibold text-white
                       bg-gradient-to-l from-primary to-primary-hover rounded-xl overflow-hidden
                       transition-all duration-300
                       hover:shadow-glow-md active:scale-[0.97]">
            <span className="relative z-10">شروع رایگان</span>
            <div className="absolute inset-0 bg-gradient-to-l from-secondary to-primary
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl
                     text-ink-secondary hover:text-white hover:bg-white/5 transition-all cursor-pointer">
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="container-main py-4 pb-6 border-t border-line space-y-1">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}
              className="block px-4 py-3 text-[15px] font-medium text-ink-secondary
                         rounded-xl transition-colors hover:text-white hover:bg-white/5">
              {item.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-line flex gap-3">
            <a href="#" className="flex-1 text-center py-3 text-[14px] font-semibold text-ink-secondary
                                   border border-line rounded-xl hover:bg-white/5 transition-colors">ورود</a>
            <a href="#" className="flex-1 text-center py-3 text-[14px] font-semibold text-white
                                   bg-gradient-to-l from-primary to-primary-hover rounded-xl">شروع رایگان</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

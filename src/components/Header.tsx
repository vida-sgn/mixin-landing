import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IconMenu, IconX } from "../assets/icons";

const navItems = [
  { label: "صفحه اصلی", to: "/" },
  { label: "امکانات", to: "/features" },
  { label: "تعرفه‌ها", to: "/pricing" },
  { label: "تماس با ما", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // بستن منوی موبایل و اسکرول به بالای صفحه هنگام تغییر مسیر
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl shadow-sm py-3 border-b border-line/60"
          : "bg-bg/70 backdrop-blur-md py-4 border-b border-line/30"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[20px] text-ink tracking-tight group-hover:text-primary transition-colors">
                میکسین
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex gap-1.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-[14px] font-semibold rounded-xl whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? "text-primary bg-primary-surface font-bold"
                          : "text-ink-secondary hover:text-primary hover:bg-primary-surface/60"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:02191093850"
              className="px-4 py-2 text-[13px] font-bold text-ink-secondary hover:text-primary transition-colors"
            >
              ۰۲۱-۹۱۰۹۳۸۵۰
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 text-[14px] font-semibold text-ink-secondary rounded-xl transition-all duration-300 hover:text-primary hover:bg-primary-surface"
            >
              مشاوره رایگان
            </Link>
            <Link
              to="/pricing"
              className="group relative px-7 py-2.5 text-[14px] font-bold text-white bg-gradient-to-l from-primary to-primary-hover rounded-xl overflow-hidden shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-glow hover:scale-105 active:scale-[0.97]"
            >
              <span className="relative z-10">تست رایگان</span>
              <div className="absolute inset-0 bg-gradient-to-l from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "بستن منوی اصلی" : "باز کردن منوی اصلی"}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-ink-secondary hover:bg-primary-surface hover:text-primary transition-all duration-300 cursor-pointer"
          >
            {open ? <IconX /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-[500px] border-t border-line/60 mt-3" : "max-h-0"
          }`}
        >
          <div className="py-4 space-y-1 bg-gradient-to-b from-white to-surface/50">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-[15px] font-semibold rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-primary bg-primary-surface font-bold"
                      : "text-ink-secondary hover:text-primary hover:bg-primary-surface/60"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex gap-3 pt-4 mt-2 border-t border-line/60">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-2.5 text-[14px] font-semibold text-ink-secondary border border-line rounded-xl hover:bg-surface transition-all duration-300"
              >
                مشاوره رایگان
              </Link>
              <Link
                to="/pricing"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-2.5 text-[14px] font-bold text-white bg-gradient-to-l from-primary to-primary-hover rounded-xl shadow-lg shadow-primary/25"
              >
                تست رایگان
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
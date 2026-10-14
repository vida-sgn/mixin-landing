const cols = [
  {
    title: "امکانات",
    links: [
      { label: "ویرایشگر صفحه اول", href: "/#features" },
      { label: "قیمت‌گذاری پیشرفته", href: "/#features" },
      { label: "مدیریت سفارش‌ها", href: "/#features" },
      { label: "قالب‌های فروشگاهی", href: "/#templates" },
      { label: "زیرساخت و امکانات", href: "/#smart-features" },
    ],
  },
  {
    title: "شرکت",
    links: [
      { label: "صفحه اصلی", href: "/" },
      { label: "تعرفه‌ها و قیمت‌ها", href: "/pricing" },
      { label: "تماس با ما", href: "/contact" },
      { label: "داستان موفقیت", href: "/#stories" },
      { label: "مشاوره رایگان", href: "/contact" },
    ],
  },
  {
    title: "پشتیبانی",
    links: [
      { label: "سوالات متداول", href: "/#faq" },
      { label: "مرکز راهنما", href: "/contact" },
      { label: "وضعیت سرویس", href: "/contact" },
      { label: "تیکت پشتیبانی", href: "/contact" },
    ],
  },
  {
    title: "قوانین",
    links: [
      { label: "شرایط استفاده", href: "/#faq" },
      { label: "حریم خصوصی", href: "/#faq" },
      { label: "توافق‌نامه سطح سرویس (SLA)", href: "/#features" },
      { label: "ضمانت بازگشت وجه", href: "/pricing" },
    ],
  },
];

const socials = [
  { label: "𝕏", href: "https://x.com" },
  { label: "IG", href: "https://instagram.com" },
  { label: "TG", href: "https://t.me" },
  { label: "YT", href: "https://youtube.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-white border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[250px] bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative pt-16 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <a href="/" className="inline-flex items-center gap-2.5 select-none mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white text-lg font-black">M</span>
              </div>
              <span className="text-[24px] font-black text-white tracking-tight">
                میکسین
              </span>
            </a>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-xs mb-6">
              سایت‌ساز میکسین — پلتفرم ساخت فروشگاه اینترنتی حرفه‌ای بدون نیاز به دانش فنی
            </p>
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-[11px] font-bold
                             bg-white/5 rounded-xl text-white/30 border border-white/5
                             transition-all duration-300
                             hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary 
                             hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[13px] font-bold text-white/60 mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13px] text-white/30 hover:text-secondary transition-all duration-200 hover:-translate-x-1 inline-block"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/20">
            © ۱۴۰۵ شرکت فن‌گستران تسهیلگر تجارت — تمامی حقوق محفوظ است
          </p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[12px] text-white/20">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse shadow-lg shadow-success/50" />
              همه سرویس‌ها فعال
            </span>
            <span className="text-[12px] text-white/20">ساخته‌شده با ❤️ در ایران</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
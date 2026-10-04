const cols = [
  { title: "امکانات", links: ["ویرایشگر صفحه اول", "قیمت‌گذاری پیشرفته", "مدیریت سفارش‌ها", "دستیار هوشمند", "پیامک هوشمند"] },
  { title: "شرکت", links: ["درباره ما", "بلاگ", "استخدام", "تماس با ما", "داستان موفقیت"] },
  { title: "پشتیبانی", links: ["مرکز راهنما", "آموزش‌های ویدیویی", "وضعیت سرویس", "تیکت پشتیبانی"] },
  { title: "قوانین", links: ["شرایط استفاده", "حریم خصوصی", "SLA", "بازگشت وجه"] },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-white border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[250px] bg-secondary/8 rounded-full blur-[100px]" />
      
      <div className="container-main relative pt-16 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2.5 select-none mb-5">
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
              {["𝕏", "IG", "TG", "YT"].map((s, i) => (
                <a key={i} href="#"
                  className="w-10 h-10 flex items-center justify-center text-[11px] font-bold
                             bg-white/5 rounded-xl text-white/30 border border-white/5
                             transition-all duration-300
                             hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary 
                             hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[13px] font-bold text-white/60 mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[13px] text-white/30 hover:text-secondary transition-all duration-200 hover:translate-x-1 inline-block">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/20">© ۱۴۰۵ شرکت فن‌گستران تسهیلگر تجارت — تمامی حقوق محفوظ</p>
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

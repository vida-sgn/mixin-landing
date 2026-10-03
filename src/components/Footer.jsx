const cols = [
  { title: "محصولات", links: ["چت‌بات", "پیامک", "ایمیل", "داشبورد", "API"] },
  { title: "شرکت", links: ["درباره ما", "بلاگ", "استخدام", "تماس"] },
  { title: "منابع", links: ["مستندات", "راهنما", "ویدیو", "وضعیت سرویس"] },
  { title: "قوانین", links: ["شرایط", "حریم خصوصی", "SLA", "بازگشت"] },
];

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="container-main pt-16 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 mb-14">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2.5 select-none mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white text-base font-black">M</span>
              </div>
              <span className="text-[22px] font-black text-white tracking-tight">
                mi<span className="text-gradient-primary">x</span>in
              </span>
            </a>
            <p className="text-[13px] text-ink-muted leading-relaxed max-w-xs mb-6">
              پلتفرم یکپارچه ارتباط با مشتریان برای کسب‌وکارهای ایرانی
            </p>
            <div className="flex gap-2">
              {["𝕏", "in", "IG", "TG"].map((s, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 flex items-center justify-center text-[11px] font-bold
                             glass rounded-xl text-ink-muted
                             transition-all duration-200 hover:text-primary-light hover:bg-primary/10">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[13px] font-bold mb-4 text-ink-secondary">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[13px] text-ink-muted transition-colors duration-200 hover:text-primary-light">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-line pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-ink-muted/50">© ۱۴۰۵ میکسین — تمامی حقوق محفوظ</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[12px] text-ink-muted/50">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              همه سرویس‌ها فعال
            </span>
            <span className="text-[12px] text-ink-muted/50">ساخته‌شده با ❤️ در ایران</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

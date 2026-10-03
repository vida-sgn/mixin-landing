const features = [
  {
    icon: "⚡",
    title: "سرعت بالا",
    desc: "زمان پاسخ‌گویی زیر ۲۰۰ میلی‌ثانیه برای همه درخواست‌ها",
  },
  {
    icon: "🔒",
    title: "امنیت سطح بانکی",
    desc: "رمزنگاری سرتاسری و ذخیره‌سازی امن داده‌ها در دیتاسنتر ایران",
  },
  {
    icon: "🧩",
    title: "یکپارچگی کامل",
    desc: "اتصال به CRM، فروشگاه آنلاین و اپلیکیشن‌های شما بدون کدنویسی",
  },
];

const DarkShowcase = () => {
  return (
    <section className="py-20 bg-dark text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container-main relative">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold
                          text-secondary bg-secondary/10 rounded-full"
          >
            چرا میکسین؟
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
            زیرساختی که می‌تونید
            <span className="text-secondary"> بهش اعتماد </span>
            کنید
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-dark-card border border-white/10 rounded-lg p-7
                         transition-all duration-300
                         hover:border-secondary/40 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 flex items-center justify-center text-2xl
                            bg-white/5 rounded-md mb-5
                            group-hover:bg-secondary/10 transition-colors duration-300"
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-14 mx-auto max-w-3xl aspect-video
                      bg-dark-card border border-white/10 rounded-xl
                      flex items-center justify-center"
        >
          <div className="text-center">
            <span className="text-5xl block mb-3">🖥️</span>
            <span className="text-sm text-white/40">
              پیش‌نمایش داشبورد میکسین
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkShowcase;

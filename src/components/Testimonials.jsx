import { IconStar } from "../assets/icons";

const testimonials = [
  {
    name: "سارا محمدی", role: "مدیر فروش — مُدنو", avatar: "س",
    text: "نرخ پاسخ‌گویی ۹۵٪ شد و فروش ۴۰ درصد رشد کرد. متحول‌کننده بود.",
    gradient: "from-primary to-primary-light",
  },
  {
    name: "علی رضایی", role: "مدیرعامل — لاجیک", avatar: "ع",
    text: "بهترین مستندات API. تیم فنی در کمتر از یک روز یکپارچه‌سازی رو انجام داد.",
    gradient: "from-secondary to-secondary-light",
  },
  {
    name: "مریم حسینی", role: "مارکتینگ — نوآوران", avatar: "م",
    text: "نرخ کلیک کمپین‌ها از ۲٪ به ۸٪ رسید. ROI فوق‌العاده.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold text-success-light glass rounded-full mb-5 tracking-widest uppercase">
            نظرات مشتریان
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] font-black text-white leading-snug">
            مشتریان ما
            <span className="text-gradient-primary"> چی میگن </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className={`group glass rounded-3xl p-7 glow-border
                         transition-all duration-500
                         hover:bg-white/8 hover:shadow-card-hover hover:-translate-y-1.5
                         animate-in`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <IconStar key={j} className="w-[16px] h-[16px] text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[15px] text-ink-secondary leading-relaxed mb-8">
                «{t.text}»
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-line">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.gradient}
                                flex items-center justify-center text-white text-sm font-bold
                                group-hover:scale-110 group-hover:shadow-glow-sm transition-all duration-500`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-white">{t.name}</div>
                  <div className="text-[12px] text-ink-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

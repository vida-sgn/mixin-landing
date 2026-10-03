import { IconChat, IconSms, IconEmail, IconCheck } from "../assets/icons";

const services = [
  {
    icon: IconChat, badge: "محبوب‌ترین", title: "چت‌بات هوشمند",
    desc: "AI نسل سوم — پاسخ‌دهی ۲۴/۷ با یادگیری خودکار.",
    features: ["پاسخ‌دهی هوشمند", "یادگیری از مکالمات", "اتصال واتساپ و تلگرام", "انتقال به اپراتور"],
    gradient: "from-primary to-primary-light", glow: "rgba(99,102,241,0.2)",
    color: "text-primary-light", highlight: true,
  },
  {
    icon: IconSms, badge: null, title: "پیامک هوشمند",
    desc: "ارسال هدفمند بر اساس رفتار مشتری.",
    features: ["ارسال انبوه و تکی", "گزارش لحظه‌ای", "خط اختصاصی", "زمان‌بندی"],
    gradient: "from-secondary to-secondary-light", glow: "rgba(6,182,212,0.2)",
    color: "text-secondary-light", highlight: false,
  },
  {
    icon: IconEmail, badge: "جدید", title: "ایمیل مارکتینگ",
    desc: "قالب‌های حرفه‌ای + اتوماسیون کامل.",
    features: ["Drag & Drop", "اتوماسیون", "تحلیل نرخ باز شدن", "سگمنت‌بندی"],
    gradient: "from-violet-500 to-fuchsia-500", glow: "rgba(167,139,250,0.2)",
    color: "text-violet-400", highlight: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold text-accent-light glass rounded-full mb-5 tracking-widest uppercase">
            محصولات
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] font-black text-white leading-snug">
            ابزارهایی که
            <span className="text-gradient-primary"> فروش رو </span>
            متحول می‌کنن
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500
                           hover:-translate-y-2 animate-in
                           ${s.highlight
                    ? "glass-strong shadow-card ring-1 ring-primary/20"
                    : "glass hover:shadow-card-hover"
                  }`}
                style={{ animationDelay: `${i * 0.1}s` }}>

                {/* Top gradient */}
                <div className={`h-1 bg-gradient-to-l ${s.gradient}`} />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: s.glow }}>
                      <Icon className={`w-7 h-7 ${s.color}`} />
                    </div>
                    {s.badge && (
                      <span className={`px-3 py-1 text-[11px] font-bold rounded-full glass ${s.color}`}>
                        {s.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-[14px] text-ink-secondary leading-relaxed mb-7">{s.desc}</p>

                  <ul className="space-y-3 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[14px]">
                        <span className="w-5 h-5 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: s.glow }}>
                          <IconCheck className={`w-3 h-3 ${s.color}`} />
                        </span>
                        <span className="text-ink-secondary">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#"
                    className={`block w-full text-center py-3.5 text-[14px] font-bold rounded-2xl
                               transition-all duration-300 border border-line
                               hover:bg-white/5 ${s.color}`}>
                    شروع کنید
                  </a>
                </div>

                {/* Glow on hover */}
                {s.highlight && (
                  <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                    style={{ background: `var(--color-primary)` }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

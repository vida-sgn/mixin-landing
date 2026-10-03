import { IconBolt, IconShield, IconPuzzle, IconChart, IconGlobe, IconRocket } from "../assets/icons";

const features = [
  { icon: IconBolt, title: "فوق‌العاده سریع", desc: "زیر ۲۰۰ms پاسخ. CDN ایران.", color: "text-amber-400", glow: "rgba(251,191,36,0.15)" },
  { icon: IconShield, title: "امنیت بانکی", desc: "TLS 1.3 و دیتاسنتر ایران.", color: "text-emerald-400", glow: "rgba(52,211,153,0.15)" },
  { icon: IconPuzzle, title: "بدون کد", desc: "اتصال CRM و فروشگاه بدون کدنویسی.", color: "text-primary-light", glow: "rgba(99,102,241,0.15)" },
  { icon: IconChart, title: "تحلیل AI", desc: "داشبورد لحظه‌ای با بینش هوشمند.", color: "text-sky-400", glow: "rgba(56,189,248,0.15)" },
  { icon: IconGlobe, title: "چندکاناله", desc: "واتساپ، تلگرام، وب و SMS یکجا.", color: "text-violet-400", glow: "rgba(167,139,250,0.15)" },
  { icon: IconRocket, title: "مقیاس‌پذیر", desc: "از ۱۰ تا ۱M کاربر.", color: "text-rose-400", glow: "rgba(251,113,133,0.15)" },
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold text-primary-light glass rounded-full mb-5 tracking-widest uppercase">
            ویژگی‌ها
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] font-black text-white leading-snug">
            همه‌چیز برای
            <span className="text-gradient-primary"> موفقیت </span>
            شما
          </h2>
          <p className="mt-4 text-ink-secondary text-[15px] max-w-lg mx-auto">
            ترکیب قدرت و سادگی برای بهترین تجربه ارتباطی
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title}
                className={`group relative glass rounded-2xl p-7 transition-all duration-500
                           cursor-default glow-border
                           hover:bg-white/8 hover:shadow-card-hover hover:-translate-y-1
                           animate-in`}
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5
                                transition-all duration-300 group-hover:scale-110"
                  style={{ background: f.glow }}>
                  <Icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="text-[16px] font-bold text-white mb-2">{f.title}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{f.desc}</p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ boxShadow: `inset 0 0 60px ${f.glow}` }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

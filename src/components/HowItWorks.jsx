import { IconUsers, IconTarget, IconChart, IconRocket } from "../assets/icons";

const steps = [
  { num: "۱", icon: IconUsers, title: "ثبت‌نام رایگان", desc: "در ۲ دقیقه حساب بسازید.", color: "text-primary-light", glow: "rgba(99,102,241,0.2)" },
  { num: "۲", icon: IconTarget, title: "اتصال کانال‌ها", desc: "واتساپ، تلگرام و وب.", color: "text-secondary-light", glow: "rgba(6,182,212,0.2)" },
  { num: "۳", icon: IconChart, title: "تنظیم اتوماسیون", desc: "چت‌بات و پیام خودکار.", color: "text-accent-light", glow: "rgba(245,158,11,0.2)" },
  { num: "۴", icon: IconRocket, title: "شروع رشد", desc: "فروش بیشتر از روز اول.", color: "text-success-light", glow: "rgba(34,197,94,0.2)" },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-24 lg:py-32 relative">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold text-secondary-light glass rounded-full mb-5 tracking-widest uppercase">
            نحوه کار
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] font-black text-white leading-snug">
            در
            <span className="text-gradient-primary"> ۴ قدم ساده </span>
            شروع کنید
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title}
                className={`relative text-center group animate-in`}
                style={{ animationDelay: `${i * 0.12}s` }}>
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-full h-px -translate-x-1/2">
                    <div className="h-full bg-gradient-to-l from-white/10 to-transparent" />
                  </div>
                )}

                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="w-24 h-24 glass rounded-3xl flex items-center justify-center
                                  group-hover:scale-105 transition-all duration-500 relative"
                    style={{ boxShadow: `0 0 0 0 transparent` }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 40px ${s.glow}`}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0 0 transparent`}>
                    <Icon className={`w-10 h-10 ${s.color}`} />
                  </div>
                  <span className={`absolute -top-2 -right-2 w-8 h-8 rounded-xl glass
                                   flex items-center justify-center text-[13px] font-black
                                   ${s.color} border border-current/20`}>
                    {s.num}
                  </span>
                </div>

                <h3 className="text-[16px] font-bold text-white mb-2">{s.title}</h3>
                <p className="text-[13px] text-ink-secondary max-w-[180px] mx-auto">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

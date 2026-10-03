import { IconPlay, IconArrowLeft, IconCheck, IconSparkles } from "../assets/icons";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Extra glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/12 rounded-full blur-[150px]" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ─── Text ─── */}
          <div className="animate-in">
            {/* Animated Badge */}
            <a href="#"
              className="inline-flex items-center gap-2.5 px-4 py-2 mb-8
                         text-[12px] font-bold glass rounded-full
                         text-primary-light hover:bg-white/8 transition-colors group animate-pulse-glow">
              <IconSparkles className="w-3.5 h-3.5 text-accent" />
              نسخه ۳.۰ — چت‌بات AI نسل جدید
              <IconArrowLeft className="w-3 h-3 text-ink-muted group-hover:-translate-x-0.5 transition-transform" />
            </a>

            <h1 className="text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-black leading-[1.1] tracking-tight">
              <span className="text-white">ارتباط با</span>
              <br />
              <span className="text-white">مشتری رو</span>
              <br />
              <span className="text-gradient-primary">هوشمند کن</span>
            </h1>

            <p className="mt-7 text-[16px] lg:text-lg text-ink-secondary leading-relaxed max-w-lg">
              میکسین تمام ابزارهای ارتباط با مشتری رو در یک پلتفرم واحد جمع کرده.
              <span className="text-ink font-medium"> چت‌بات، پیامک، ایمیل</span> و تحلیل رفتار.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#"
                className="group relative inline-flex items-center gap-2 px-8 py-4
                           text-[15px] font-bold text-white rounded-2xl overflow-hidden
                           bg-gradient-to-l from-primary to-primary-hover
                           transition-all duration-300 hover:shadow-glow-lg active:scale-[0.97]">
                <span className="relative z-10">۱۴ روز تست رایگان</span>
                <div className="absolute inset-0 bg-gradient-to-l from-secondary to-primary
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a href="#"
                className="inline-flex items-center gap-3 px-7 py-4
                           text-[15px] font-bold text-ink-secondary
                           glass rounded-2xl transition-all duration-200
                           hover:bg-white/8 hover:text-white group">
                <span className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center
                                 group-hover:bg-primary/25 transition-colors">
                  <IconPlay className="w-3.5 h-3.5 text-primary-light mr-0.5" />
                </span>
                مشاهده دمو
              </a>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8">
              {["بدون کارت بانکی", "فعال‌سازی ۲ دقیقه", "لغو هر زمان"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-[13px] text-ink-muted">
                  <IconCheck className="w-3.5 h-3.5 text-success" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ─── Dashboard Visual ─── */}
          <div className="animate-in animate-delay-2 relative">
            <div className="relative glass rounded-3xl overflow-hidden shadow-card">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-line bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose/60" />
                  <span className="w-3 h-3 rounded-full bg-accent/60" />
                  <span className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-6 py-1 bg-white/5 rounded-lg text-[11px] text-ink-muted border border-line font-medium">
                    app.mixin.ir/dashboard
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "پیام امروز", value: "۱۲,۴۳۸", change: "+۱۲٪", color: "text-primary-light" },
                    { label: "نرخ پاسخ", value: "۹۴.۲٪", change: "+۳٪", color: "text-secondary-light" },
                    { label: "مشتری جدید", value: "۱۸۶", change: "+۲۸٪", color: "text-accent-light" },
                  ].map((s) => (
                    <div key={s.label} className="glass rounded-2xl p-4">
                      <div className="text-[11px] text-ink-muted mb-1">{s.label}</div>
                      <div className={`text-xl sm:text-2xl font-black ${s.color}`}>{s.value}</div>
                      <div className="text-[11px] text-success font-semibold mt-1">{s.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-ink">عملکرد هفتگی</span>
                    <span className="text-[11px] text-ink-muted px-2.5 py-1 bg-white/5 rounded-lg border border-line">
                      ۷ روز
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-28">
                    {[35, 52, 41, 68, 55, 82, 73].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full rounded-lg transition-all duration-500"
                          style={{
                            height: `${h}%`,
                            background: i === 5
                              ? `linear-gradient(to top, var(--color-primary), var(--color-secondary))`
                              : `rgba(255,255,255,0.06)`,
                            boxShadow: i === 5 ? `0 0 20px rgba(99,102,241,0.3)` : 'none',
                          }} />
                        <span className="text-[9px] text-ink-muted">
                          {["ش", "۱ش", "۲ش", "۳ش", "۴ش", "۵ش", "ج"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-2">
                  {[
                    { name: "مریم حسینی", msg: "سفارشم کی ارسال میشه؟", time: "۲ دقیقه", status: "پاسخ داده شد", sc: "text-success" },
                    { name: "علی رضایی", msg: "تخفیف ویژه دارید؟", time: "۵ دقیقه", status: "در انتظار", sc: "text-accent" },
                  ].map((m) => (
                    <div key={m.name} className="flex items-center justify-between glass rounded-xl px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary
                                        flex items-center justify-center text-[11px] font-bold text-white">
                          {m.name[0]}
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-white">{m.name}</div>
                          <div className="text-[11px] text-ink-muted">{m.msg}</div>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] text-ink-muted">{m.time}</div>
                        <div className={`text-[10px] font-bold mt-0.5 ${m.sc}`}>{m.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -top-4 -left-4 sm:-left-8 glass rounded-2xl p-3 shadow-card animate-float animate-in animate-delay-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-success/15 flex items-center justify-center">
                  <IconCheck className="w-4 h-4 text-success" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-white">پیام ارسال شد</div>
                  <div className="text-[10px] text-ink-muted">۱,۲۴۰ دریافت‌کننده</div>
                </div>
              </div>
            </div>

            {/* Bottom glow */}
            <div className="absolute -bottom-8 left-[15%] right-[15%] h-16 bg-primary/15 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

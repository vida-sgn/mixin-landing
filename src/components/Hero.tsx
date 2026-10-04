import { IconCheck, IconArrowLeft } from "../assets/icons";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background - gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-surface/60 via-white to-white" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/[0.08] rounded-full blur-[180px] animate-gradient" />
      <div className="absolute top-[15%] right-[-5%] w-[500px] h-[500px] bg-secondary/[0.06] rounded-full blur-[150px] animate-float-slow" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[130px] animate-float" />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce-soft">
        <span className="text-[10px] text-ink-muted/50">اسکرول کنید</span>
        <div className="w-5 h-8 rounded-full border-2 border-primary/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary/50 animate-bounce" />
        </div>
      </div>

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ─── Text ─── */}
          <div className="animate-in">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-6
                         text-[12px] font-bold text-primary bg-white/80 backdrop-blur-sm
                         border border-primary/20 rounded-full shadow-sm shadow-primary/10
                         animate-pulse-glow">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              شریک تجاری ترب
              <span className="text-ink-muted">|</span>
              <span className="text-ink-secondary">۳۰,۰۰۰+ فروشگاه فعال</span>
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.4rem] font-black leading-[1.2] tracking-tight text-ink">
              افزایش فروش چند برابری
              <br />
              <span className="text-gradient">با سایت‌ساز میکسین</span>
            </h1>

            <p className="mt-6 text-[16px] lg:text-[17px] text-ink-secondary leading-relaxed max-w-lg">
              بدون نیاز به دانش فنی، فروشگاه اینترنتی حرفه‌ای خودت رو بساز.
              <span className="text-ink font-semibold"> بدون کمیسیون </span>
              و با پشتیبانی اختصاصی.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <a href="#"
                className="group relative px-8 py-4 text-[15px] font-bold text-white
                           bg-gradient-to-l from-primary to-primary-hover rounded-2xl overflow-hidden shadow-lg shadow-primary/25
                           transition-all duration-300
                           hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.97]">
                <span className="relative z-10 flex items-center gap-2">
                  تست رایگان ۱۴ روزه
                  <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-l from-secondary to-primary
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a href="#"
                className="px-8 py-4 text-[15px] font-bold text-primary
                           bg-white/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl shadow-sm
                           transition-all duration-200
                           hover:border-primary/50 hover:shadow-card hover:bg-white glow-border">
                مشاهده تعرفه‌ها
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8">
              {["بدون کمیسیون فروش", "هاست رایگان", "پشتیبانی اختصاصی"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-[13px] text-ink-muted">
                  <IconCheck className="w-3.5 h-3.5 text-secondary" />
                  {t}
                </span>
              ))}
            </div>

            {/* آمار بزرگ */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-line/60">
              <div>
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">۳۰,۰۰۰<span className="text-lg opacity-60">+</span></div>
                <div className="text-[12px] text-ink-muted mt-0.5">فروشگاه فعال</div>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-line to-transparent" />
              <div>
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-l from-secondary to-primary bg-clip-text text-transparent">۶,۰۰۰,۰۰۰<span className="text-lg opacity-60">+</span></div>
                <div className="text-[12px] text-ink-muted mt-0.5">سفارش موفق</div>
              </div>
            </div>
          </div>

          {/* ─── Dashboard Mockup ─── */}
          <div className="animate-in delay-2 relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-line shadow-2xl shadow-primary/10 overflow-hidden glow-border">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-l from-surface to-white border-b border-line/60">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF6059] shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-6 py-1.5 bg-white rounded-lg text-[11px] text-ink-muted border border-line font-medium shadow-sm">
                    yourshop.mixin.ir
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { l: "فروش امروز", v: "۴,۲۸۰,۰۰۰", ch: "+۲۸٪", c: "text-primary", bg: "bg-primary-surface", unit: "تومان" },
                    { l: "سفارش‌ها", v: "۴۷", ch: "+۱۲", c: "text-secondary", bg: "bg-secondary-surface", unit: "عدد" },
                    { l: "بازدید", v: "۱,۸۹۲", ch: "+۴۵٪", c: "text-accent", bg: "bg-accent-surface", unit: "نفر" },
                  ].map((s) => (
                    <div key={s.l} className={`${s.bg} rounded-2xl p-3.5 border border-white/60 shadow-sm`}>
                      <div className="text-[10px] text-ink-muted">{s.l}</div>
                      <div className={`text-lg font-black mt-0.5 ${s.c}`}>{s.v}</div>
                      <div className="text-[10px] text-success font-semibold mt-0.5">{s.ch} {s.unit}</div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="bg-gradient-to-br from-surface to-white rounded-2xl p-4 border border-line/40 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-ink">فروش هفتگی</span>
                    <span className="text-[10px] text-ink-muted px-2 py-0.5 bg-white rounded-lg border border-line shadow-sm">هفته جاری</span>
                  </div>
                  <div className="flex items-end justify-between gap-1.5 h-20">
                    {[40, 55, 38, 72, 60, 85, 68].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full rounded-md transition-all duration-700"
                          style={{
                            height: `${h}%`,
                            background: i === 5
                              ? `linear-gradient(to top, var(--color-primary), var(--color-secondary))`
                              : i === 4 || i === 6
                              ? `linear-gradient(to top, var(--color-primary-light), var(--color-secondary-light))`
                              : `var(--color-line)`,
                            boxShadow: i === 5 ? `0 0 12px rgba(70,75,146,0.25)` : 'none',
                          }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent orders */}
                <div className="space-y-2">
                  {[
                    { n: "مانتو زنانه", p: "۸۹۰,۰۰۰ ت", s: "ارسال شده", sc: "text-success", bg: "bg-success/10" },
                    { n: "کیف چرم", p: "۱,۲۵۰,۰۰۰ ت", s: "در حال بسته‌بندی", sc: "text-amber", bg: "bg-amber/10" },
                  ].map((o) => (
                    <div key={o.n} className="flex items-center justify-between bg-white rounded-xl border border-line/40 px-4 py-2.5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10
                                        flex items-center justify-center">
                          <span className="text-[10px]">📦</span>
                        </div>
                        <div>
                          <div className="text-[12px] font-bold text-ink">{o.n}</div>
                          <div className="text-[10px] text-ink-muted">{o.p}</div>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${o.bg} ${o.sc}`}>{o.s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -top-3 -left-4 sm:-left-6 bg-white rounded-2xl p-3 shadow-xl shadow-primary/10 border border-line animate-float animate-in delay-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-secondary-surface to-primary-surface flex items-center justify-center">
                  <span className="text-sm">🎉</span>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-ink">سفارش جدید!</div>
                  <div className="text-[10px] text-ink-muted">۸۹۰,۰۰۰ تومان</div>
                </div>
              </div>
            </div>

            {/* Torob badge */}
            <div className="absolute -bottom-3 right-8 bg-white rounded-2xl p-2.5 shadow-xl shadow-secondary/10 border border-line animate-in delay-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                  <span className="text-xs">🟢</span>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-ink">ترب</div>
                  <div className="text-[9px] text-ink-muted">متصل شد</div>
                </div>
              </div>
            </div>

            {/* Bottom glow */}
            <div className="absolute -bottom-8 left-[15%] right-[15%] h-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

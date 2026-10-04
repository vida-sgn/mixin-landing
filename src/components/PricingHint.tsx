import { IconCheck, IconArrowLeft } from "../assets/icons";

const PricingHint = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-surface/30 to-white">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-bl from-primary via-primary-hover to-dark p-8 sm:p-12 animate-in">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[100px] animate-float" />
          
          {/* Pattern */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }} />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-right">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                تعرفه‌های متنوع، مناسب همه کسب‌وکارها
              </h3>
              <p className="mt-3 text-[15px] text-white/50">
                شروع از ماهانه فقط <span className="text-white font-black text-2xl bg-gradient-to-l from-secondary-light to-white bg-clip-text text-transparent">۶۹۰</span> هزار تومان
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-[13px]">
                <IconCheck className="w-4 h-4 text-secondary-light" />
                بدون کمیسیون
              </div>
              <a href="#pricing"
                className="group flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold text-primary
                           bg-white rounded-xl shadow-xl shadow-primary/20
                           transition-all duration-300
                           hover:shadow-glow-lg hover:scale-105 active:scale-[0.97]">
                دیدن تعرفه‌ها
                <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHint;

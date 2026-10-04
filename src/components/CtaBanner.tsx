import { IconCheck, IconArrowLeft } from "../assets/icons";

const CtaBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-surface/30 to-white">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-dark animate-in">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-primary/25 rounded-full blur-[150px] animate-float-slow" />
          <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[130px] animate-float" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] animate-gradient" />
          
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }} />

          <div className="relative px-6 py-20 sm:px-16 sm:py-24 text-center">
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-snug">
              برای ساخت فروشگاه نیاز به
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-l from-secondary-light via-primary-light to-secondary-light bg-clip-text text-transparent animate-gradient">مشاوره دارید؟</span>
            </h2>
            <p className="mt-5 text-[16px] text-white/50 max-w-md mx-auto">
              تیم ما آماده کمک به شما برای راه‌اندازی فروشگاه اینترنتی‌تان است
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a href="#"
                className="group relative px-10 py-4 text-[15px] font-bold text-white
                           bg-gradient-to-l from-primary to-primary-hover rounded-2xl overflow-hidden shadow-xl shadow-primary/30
                           transition-all duration-300
                           hover:shadow-glow-lg hover:scale-105 active:scale-[0.97]">
                <span className="relative z-10 flex items-center gap-2">
                  دریافت مشاوره رایگان
                  <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-l from-secondary to-primary
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a href="#"
                className="px-10 py-4 text-[15px] font-bold text-white/70
                           border-2 border-white/15 rounded-2xl backdrop-blur-sm
                           transition-all duration-300
                           hover:bg-white/10 hover:text-white hover:border-white/30 hover:scale-105">
                مشاهده تعرفه‌ها
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10">
              {["۱۴ روز تست رایگان", "بدون کمیسیون", "پشتیبانی ۲۴/۷"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-[12px] text-white/40">
                  <IconCheck className="w-3 h-3 text-secondary-light" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;

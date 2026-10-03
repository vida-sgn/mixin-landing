import { IconCheck, IconSparkles } from "../assets/icons";

const CtaBanner = () => {
  return (
    <section className="py-20">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-[32px] glass-strong noise animate-in">
          {/* Glows */}
          <div className="absolute top-0 right-[20%] w-[350px] h-[350px] bg-primary/25 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-[20%] w-[250px] h-[250px] bg-secondary/20 rounded-full blur-[120px]" />

          <div className="relative px-6 py-16 sm:px-16 sm:py-24 text-center z-10">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
              <IconSparkles className="w-4 h-4 text-accent" />
              <span className="text-[12px] font-bold text-ink-secondary">شروع رایگان — بدون تعهد</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-snug">
              آماده‌ای فروشگاهت رو
              <br />
              <span className="text-gradient-primary">متحول کنی؟</span>
            </h2>

            <p className="mt-5 text-[15px] text-ink-secondary max-w-md mx-auto">
              ۱۴ روز رایگان — بدون کارت بانکی
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a href="#"
                className="group relative px-10 py-4 text-[15px] font-bold text-white
                           bg-gradient-to-l from-primary to-primary-hover rounded-2xl overflow-hidden
                           transition-all duration-300 hover:shadow-glow-lg active:scale-[0.97]">
                <span className="relative z-10">شروع رایگان</span>
                <div className="absolute inset-0 bg-gradient-to-l from-secondary to-primary
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a href="#"
                className="px-10 py-4 text-[15px] font-bold text-ink-secondary
                           glass rounded-2xl transition-all duration-200
                           hover:bg-white/8 hover:text-white">
                تماس با مشاور
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10">
              {["رایگان شروع کنید", "بدون قفل فروشنده", "پشتیبانی ۲۴/۷"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-[12px] text-ink-muted">
                  <IconCheck className="w-3 h-3 text-success" />
                  {t}
                </span>
              ))}
            </div>

            {/* Avatars */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="flex -space-x-2 space-x-reverse">
                {["آ", "ب", "پ", "ت", "ث"].map((l, i) => (
                  <div key={i}
                    className="w-8 h-8 rounded-full border-2 border-dark-3 bg-gradient-to-br from-primary-light to-secondary-light
                               flex items-center justify-center text-[10px] font-bold text-white">
                    {l}
                  </div>
                ))}
              </div>
              <span className="text-[11px] text-ink-muted">+۱,۲۰۰ عضو</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;

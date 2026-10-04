import { IconSparkle, IconMessage } from "../assets/icons";

const SmartFeatures = () => {
  return (
    <section className="py-24 bg-gradient-dark text-white relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[500px] bg-primary/20 rounded-full blur-[160px] animate-float-slow" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-secondary/15 rounded-full blur-[140px] animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] animate-gradient" />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />

      <div className="container-main relative">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold
                           text-secondary-light bg-white/5 border border-white/10 
                           rounded-full mb-4 tracking-wider uppercase backdrop-blur-sm">
            هوشمند و به‌روز
          </span>
          <h2 className="text-3xl sm:text-[2.5rem] font-black leading-snug">
            قدرت <span className="bg-gradient-to-l from-secondary-light to-primary-light bg-clip-text text-transparent">هوش مصنوعی</span> در خدمت فروش شما
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* AI Assistant */}
          <div className="group glass-dark rounded-3xl p-8
                         transition-all duration-500
                         hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20
                         animate-in relative overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl 
                            group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                              bg-gradient-to-br from-primary to-secondary
                              transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                              shadow-xl shadow-primary/30">
                <IconSparkle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] font-bold mb-3">دستیار هوش مصنوعی</h3>
              <p className="text-[14px] text-white/50 leading-relaxed mb-6">
                این دستیار شما رو در تمام مراحل راه‌اندازی و مدیریت سایت همراهی می‌کنه. از نوشتن توضیحات محصول تا بهینه‌سازی سئو.
              </p>
              {/* Chat mockup */}
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-lg">
                    <span className="text-[10px]">🤖</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-tr-sm px-4 py-2.5 text-[12px] text-white/70 border border-white/5">
                    توضیحات محصول رو برات بنویسم؟
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="bg-gradient-to-l from-primary/30 to-secondary/30 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-2.5 text-[12px] text-white/80 border border-white/10">
                    بله، برای مانتو زمستانی
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart SMS */}
          <div className="group glass-dark rounded-3xl p-8
                         transition-all duration-500
                         hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/20
                         animate-in delay-1 relative overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-3xl 
                            group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                              bg-gradient-to-br from-secondary to-primary
                              transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6
                              shadow-xl shadow-secondary/30">
                <IconMessage className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] font-bold mb-3">پیامک‌های هوشمند</h3>
              <p className="text-[14px] text-white/50 leading-relaxed mb-6">
                با ارسال خودکار پیامک در زمان‌های مناسب، ارتباط موثری با مشتری‌هاتون برقرار کنید و فروش رو افزایش بدید.
              </p>
              {/* SMS mockup */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/5">
                  <span className="text-sm">📱</span>
                  <span className="text-[12px] text-white/60 flex-1">سفارش #۱۲۳۴ ارسال شد</span>
                  <span className="text-[10px] text-secondary-light font-bold">✓ ارسال شد</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/5">
                  <span className="text-sm">🎁</span>
                  <span className="text-[12px] text-white/60 flex-1">کد تخفیف ۲۰٪ ویژه شما</span>
                  <span className="text-[10px] text-secondary-light font-bold">✓ ارسال شد</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures;

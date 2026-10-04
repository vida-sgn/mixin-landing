import { IconStar, IconArrowLeft } from "../assets/icons";

const stories = [
  { name: "هانیه اناری", shop: "لوازم قنادی هانیتا شاپ", stat: "۳,۰۰۰ سفارش از گوگل",
    text: "کار با پنل میکسین خیلی راحت بود. استفاده از دستیار هوشمند سئو و پنل پیامکی هم به فروشمون خیلی کمک کرد.", color: "from-pink-400 to-rose-500" },
  { name: "محمدحسین ایزدی", shop: "داروخانه دکتر ایزدی", stat: "۴,۰۰۰ سفارش ماهانه از ترب",
    text: "میکسین خیال ما رو از بابت چالش‌های فنی سایت راحت کرده و دیگه وقت و انرژی‌مون رو روی فروش متمرکز کردیم.", color: "from-blue-400 to-indigo-500" },
  { name: "علی پسنده", shop: "لباس مردانه اورجینال دیلم", stat: "۲,۳۰۰ رکورد سفارش یک روز",
    text: "سرعت پاسخگویی پشتیبانی، انعطاف‌پذیری و آپدیت‌های مداوم پلتفرم میکسین، برای رشد پایدار کسب‌وکارمون یه اطمینان‌خاطر بزرگه.", color: "from-emerald-400 to-teal-500" },
  { name: "محسن انساکی", shop: "کالای دیجیتال فقط گجت", stat: "۲۰۰,۰۰۰ فالوور در اینستاگرام",
    text: "میکسین دقیقا مثل یه دوست قدیمیه که وقتی هیچ‌کس پشتت نیست تا آخرین نفس کنارت هست و بهت کمک می‌کنه.", color: "from-amber-400 to-orange-500" },
];

const BusinessStories = () => {
  return (
    <section id="stories" className="py-24 bg-gradient-to-b from-white via-secondary-surface/20 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-secondary/[0.04] rounded-full blur-[100px]" />
      
      <div className="container-main relative">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold
                           text-amber bg-gradient-to-l from-amber/10 to-orange/10 
                           rounded-full mb-4 tracking-wider uppercase shadow-sm">
            داستان موفقیت
          </span>
          <h2 className="text-3xl sm:text-[2.5rem] font-black text-ink leading-snug">
            تجربه کسب‌وکارهای <span className="text-gradient">میکسینی</span>
          </h2>
          <p className="mt-3 text-ink-secondary text-[15px]">
            بیش از ۳۰,۰۰۰ فروشگاه با میکسین رشد کردن
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {stories.map((s, i) => (
            <div key={s.name}
              className="group bg-white border border-line rounded-3xl p-7
                         transition-all duration-500
                         hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2
                         animate-in relative overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Gradient accent on hover */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${s.color} opacity-0 
                              group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500`} />
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color}
                                  flex items-center justify-center text-white text-xl font-black
                                  shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {s.name[0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[16px] font-bold text-ink">{s.name}</h3>
                    <p className="text-[12px] text-primary font-medium">{s.shop}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <IconStar key={j} className="w-3.5 h-3.5 text-amber" />
                    ))}
                  </div>
                </div>

                <p className="text-[14px] text-ink-secondary leading-relaxed mb-5">«{s.text}»</p>

                <div className="flex items-center justify-between pt-4 border-t border-line">
                  <span className="flex items-center gap-2 text-[12px] font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-secondary to-primary" />
                    <span className="bg-gradient-to-l from-secondary to-primary bg-clip-text text-transparent">{s.stat}</span>
                  </span>
                  <a href="#" className="flex items-center gap-1 text-[12px] text-primary font-medium
                                         opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0
                                         transition-all duration-300">
                    مشاهده فروشگاه
                    <IconArrowLeft className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessStories;

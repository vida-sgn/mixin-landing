import { IconEdit, IconTag, IconBox, IconShield } from "../assets/icons";

const features = [
  {
    icon: IconEdit,
    title: "ویرایشگر حرفه‌ای صفحه اول",
    desc: "با دراگ‌اندراپ ساده، ظاهر فروشگاهت رو شخصی‌سازی کن. بدون نیاز به کدنویسی.",
    color: "text-white",
    bg: "bg-gradient-to-br from-primary to-primary-hover",
    badge: "محبوب",
  },
  {
    icon: IconTag,
    title: "قیمت‌گذاری پیشرفته محصولات",
    desc: "تعریف قیمت‌های متنوع، تخفیف‌های پلکانی و پیشنهادهای ویژه برای هر محصول.",
    color: "text-white",
    bg: "bg-gradient-to-br from-secondary to-secondary-hover",
    badge: null,
  },
  {
    icon: IconBox,
    title: "مدیریت آسان سفارش‌ها",
    desc: "از ثبت تا ارسال، تمام مراحل سفارش رو با داشبورد حرفه‌ای مدیریت کنید.",
    color: "text-white",
    bg: "bg-gradient-to-br from-accent to-red-500",
    badge: null,
  },
  {
    icon: IconShield,
    title: "زیرساخت امن و پایدار",
    desc: "سرورهای ابری قدرتمند با آپتایم ۹۹.۹٪ و بکاپ‌گیری خودکار روزانه.",
    color: "text-white",
    bg: "bg-gradient-to-br from-dark to-dark-2",
    badge: "جدید",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-surface/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-secondary/[0.03] rounded-full blur-[100px]" />
      
      <div className="container-main relative">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold
                           text-primary bg-gradient-to-l from-primary-surface to-secondary-surface 
                           rounded-full mb-4 tracking-wider uppercase shadow-sm">
            امکانات
          </span>
          <h2 className="text-3xl sm:text-[2.5rem] font-black text-ink leading-snug">
            مدیریت ساده و
            <span className="text-gradient"> حرفه‌ای</span>
          </h2>
          <p className="mt-3 text-ink-secondary text-[15px]">
            تمام ابزارهایی که برای مدیریت یک فروشگاه موفق نیاز دارید
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title}
                className="group relative bg-white border border-line rounded-3xl p-7
                           transition-all duration-500
                           hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2
                           animate-in overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 ${f.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {f.badge && (
                    <span className="absolute top-0 left-0 px-3 py-1 text-[10px] font-bold
                                     text-white bg-gradient-to-l from-primary to-secondary rounded-tr-3xl rounded-bl-xl shadow-sm">
                      {f.badge}
                    </span>
                  )}
                  <div className={`w-16 h-16 ${f.bg} rounded-2xl flex items-center justify-center mb-5
                                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-500
                                  shadow-lg`}>
                    <Icon className={`w-8 h-8 ${f.color}`} />
                  </div>
                  <h3 className={`text-[18px] font-bold mb-2 transition-colors duration-500
                                  group-hover:text-white`}>{f.title}</h3>
                  <p className={`text-[14px] leading-relaxed transition-colors duration-500
                                  text-ink-secondary group-hover:text-white/80`}>{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

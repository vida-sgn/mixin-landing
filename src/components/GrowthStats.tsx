import { IconCart, IconCheck, IconMessage, IconChart, IconBolt, IconRocket } from "../assets/icons";

const IconCreditCard = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const growthItems = [
  { percent: "۲۴٪", icon: IconCart, title: "سبد خرید بزرگ‌تر با کد تخفیف", desc: "تعریف انواع کدهای تخفیف درصدی، مبلغی یا ارسال رایگان", color: "text-white", bg: "bg-gradient-to-br from-primary to-primary-hover", shadow: "shadow-primary/30" },
  { percent: "۳۸٪", icon: IconCheck, title: "افزایش فروش از اینستاگرام", desc: "فالوورها به سایت‌های مستقل بیشتر اعتماد می‌کنن", color: "text-white", bg: "bg-gradient-to-br from-secondary to-secondary-hover", shadow: "shadow-secondary/30" },
  { percent: "۲۰٪", icon: IconMessage, title: "بازگشت مشتری‌های از دست‌رفته", desc: "ارسال خودکار پیامک یادآوری سبد خرید رها شده", color: "text-white", bg: "bg-gradient-to-br from-accent to-red-500", shadow: "shadow-accent/30" },
  { percent: "۳۵٪", icon: IconChart, title: "درآمد بیشتر با پیشنهاد خودکار", desc: "محصولات مرتبط در صفحه محصول و سبد خرید", color: "text-white", bg: "bg-gradient-to-br from-primary-light to-secondary", shadow: "shadow-primary/30" },
  { percent: "۲.۵x", icon: IconBolt, title: "فروش بیشتر با سرعت بالا", desc: "امتیاز عالی از گوگل و تجربه کاربری فوق‌العاده", color: "text-white", bg: "bg-gradient-to-br from-amber-400 to-orange-500", shadow: "shadow-amber/30" },
  { percent: "۴۰٪", icon: IconCreditCard, title: "افزایش سفارش با درگاه قسطی", desc: "اتصال به ترب‌پی، اسنپ‌پی و تارا", color: "text-white", bg: "bg-gradient-to-br from-secondary to-primary", shadow: "shadow-secondary/30" },
  { percent: "۱۳ روز", icon: IconRocket, title: "اولین سفارش از ترب", desc: "در معرض دید میلیون‌ها مشتری قرار بگیرید", color: "text-white", bg: "bg-gradient-to-br from-dark to-dark-2", shadow: "shadow-dark/30" },
];

const GrowthStats = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-primary-surface/20 to-white relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container-main relative">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold
                           text-secondary bg-gradient-to-l from-secondary-surface to-primary-surface
                           rounded-full mb-4 tracking-wider uppercase shadow-sm">
            رشد فروش
          </span>
          <h2 className="text-3xl sm:text-[2.5rem] font-black text-ink leading-snug">
            چطور به <span className="text-gradient">افزایش فروش</span> کمک می‌کنیم؟
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {growthItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.title}
                className={`group relative bg-white border border-line rounded-2xl p-6
                           transition-all duration-500
                           hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2
                           animate-in overflow-hidden`}
                style={{ animationDelay: `${i * 0.06}s` }}>
                {/* Gradient accent on hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.bg} opacity-0 group-hover:opacity-10 
                                rounded-full blur-3xl transition-opacity duration-500`} />
                
                <div className="relative flex items-start gap-4">
                  <div className={`shrink-0 w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center
                                  group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                                  shadow-lg ${item.shadow}`}>
                    <Icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-3xl font-black bg-gradient-to-l ${item.bg} bg-clip-text text-transparent mb-1`}>
                      {item.percent}
                    </div>
                    <h3 className="text-[14px] font-bold text-ink mb-1">{item.title}</h3>
                    <p className="text-[12px] text-ink-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GrowthStats;

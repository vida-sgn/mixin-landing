import { IconCheck } from "../assets/icons";

const plans = [
  {
    name: "استارتر",
    price: "۶۹۰",
    period: "ماهانه",
    desc: "مناسب کسب‌وکارهای تازه‌کار",
    features: ["۱ دامنه رایگان", "هاست نامحدود", "پشتیبانی تیکتی", "ویرایشگر صفحه اول", "درگاه پرداخت"],
    popular: false,
    color: "border-line hover:border-primary/30",
    btnClass: "bg-surface text-ink hover:bg-primary-surface hover:text-primary border border-line",
    iconBg: "bg-gradient-to-br from-surface to-white",
  },
  {
    name: "حرفه‌ای",
    price: "۱,۲۹۰",
    period: "ماهانه",
    desc: "پرفروش‌ترین — مناسب رشد سریع",
    features: ["همه امکانات استارتر", "دستیار هوش مصنوعی", "پنل پیامک هوشمند", "اتصال به ترب", "پشتیبانی اختصاصی", "گزارش‌های پیشرفته"],
    popular: true,
    color: "border-primary",
    btnClass: "bg-gradient-to-l from-primary to-primary-hover text-white hover:shadow-glow-lg",
    iconBg: "bg-gradient-to-br from-primary to-secondary",
  },
  {
    name: "سازمانی",
    price: "۲,۴۹۰",
    period: "ماهانه",
    desc: "برای فروشگاه‌های بزرگ",
    features: ["همه امکانات حرفه‌ای", "API اختصاصی", "مدیر اکانت ویژه", "سرعت بالاتر", "بکاپ روزانه", "SLA تضمینی"],
    popular: false,
    color: "border-line hover:border-secondary/30",
    btnClass: "bg-surface text-ink hover:bg-secondary-surface hover:text-secondary border border-line",
    iconBg: "bg-gradient-to-br from-secondary to-primary",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white via-primary-surface/20 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/[0.03] rounded-full blur-[120px]" />
      
      <div className="container-main relative">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold
                           text-secondary bg-gradient-to-l from-secondary-surface to-primary-surface
                           rounded-full mb-4 tracking-wider uppercase shadow-sm">
            تعرفه‌ها
          </span>
          <h2 className="text-3xl sm:text-[2.5rem] font-black text-ink leading-snug">
            تعرفه‌های متنوع، <span className="text-gradient">مناسب همه</span>
          </h2>
          <p className="mt-3 text-ink-secondary text-[15px]">
            بدون کمیسیون فروش — فقط هزینه ثابت اشتراک
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={plan.name}
              className={`relative bg-white border-2 ${plan.color} rounded-3xl p-7
                         transition-all duration-500
                         hover:shadow-2xl hover:-translate-y-2
                         animate-in
                         ${plan.popular ? "shadow-2xl shadow-primary/20 scale-[1.03]" : "shadow-lg"}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 text-[11px] font-bold
                                text-white bg-gradient-to-l from-primary to-secondary rounded-full shadow-lg shadow-primary/30">
                  پرفروش‌ترین
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-14 h-14 ${plan.iconBg} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-xl font-black">{plan.name[0]}</span>
                </div>
                <h3 className="text-[18px] font-bold text-ink mb-1">{plan.name}</h3>
                <p className="text-[12px] text-ink-muted">{plan.desc}</p>
                <div className="mt-5 flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-[14px] text-ink-muted">هزار تومان</span>
                </div>
                <span className="text-[12px] text-ink-muted">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-ink-secondary">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-surface'}`}>
                      <IconCheck className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-secondary'}`} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#"
                className={`block text-center py-3.5 text-[14px] font-bold rounded-xl
                           transition-all duration-300 ${plan.btnClass}`}>
                شروع رایگان
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

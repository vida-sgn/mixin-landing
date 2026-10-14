import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check, Sparkles, Gift, ShieldCheck, HelpCircle,
  PhoneCall, Zap, Award, CheckCircle2, Info
} from "lucide-react";
import { FAQ, CtaBanner } from "../components";

interface Plan {
  id: string;
  title: string;
  badge?: string;
  bonusMonths?: string;
  discountPercent?: string;
  oldPrice?: string;
  priceWithSetup: string;
  priceRenewalOnly: string;
  monthlyEquivalent: string;
  torobGift: string;
  popular?: boolean;
  highlights: string[];
}

const plans: Plan[] = [
  {
    id: "3m",
    title: "سه‌ماهه",
    priceWithSetup: "۳,۵۷۰,۰۰۰",
    priceRenewalOnly: "۲,۰۷۰,۰۰۰",
    monthlyEquivalent: "۶۹۰,۰۰۰",
    torobGift: "۱۰۰ هزار تومان",
    highlights: [
      "دامنه .ir رایگان",
      "فضا و ترافیک ماهانه نامحدود",
      "شارژ هدیه ترب: ۱۰۰ هزار تومان",
      "دسترسی کامل به تمام امکانات فروشگاه‌ساز",
      "گواهینامه امنیتی SSL رایگان",
      "پشتیبانی رایگان تلفنی و تیکتی",
    ],
  },
  {
    id: "6m",
    title: "شش‌ماهه",
    bonusMonths: "+ ۱ ماه هدیه",
    badge: "پرطرفدار",
    discountPercent: "۱۱٪ تخفیف",
    oldPrice: "۶,۳۳۰,۰۰۰",
    priceWithSetup: "۵,۶۴۰,۰۰۰",
    priceRenewalOnly: "۴,۱۴۰,۰۰۰",
    monthlyEquivalent: "۶۹۰,۰۰۰",
    torobGift: "۱۰۰ هزار تومان",
    popular: true,
    highlights: [
      "۷ ماه اشتراک فعال (۶ ماه + ۱ ماه هدیه)",
      "دامنه .ir رایگان",
      "فضا و ترافیک ماهانه نامحدود",
      "شارژ هدیه ترب: ۱۰۰ هزار تومان",
      "همراهی اختصاصی تیم موفقیت مشتریان",
      "راهنمایی دریافت ای‌نماد و درگاه پرداخت",
    ],
  },
  {
    id: "12m",
    title: "یکساله",
    bonusMonths: "+ ۲ ماه هدیه",
    badge: "بیشترین صرفه اقتصادی",
    discountPercent: "۱۲٪ تخفیف",
    oldPrice: "۱۱,۱۶۰,۰۰۰",
    priceWithSetup: "۹,۷۸۰,۰۰۰",
    priceRenewalOnly: "۸,۲۸۰,۰۰۰",
    monthlyEquivalent: "۶۹۰,۰۰۰",
    torobGift: "۳۰۰ هزار تومان",
    highlights: [
      "۱۴ ماه اشتراک فعال (۱۲ ماه + ۲ ماه هدیه)",
      "دامنه .ir رایگان",
      "فضا و ترافیک ماهانه نامحدود",
      "شارژ هدیه ترب: ۳۰۰ هزار تومان",
      "مشاوره اختصاصی سئو و رشد فروش",
      "انتقال رایگان محصولات از اینستاگرام یا اکسل",
    ],
  },
];

const allIncludedGroups = [
  {
    category: "امکانات اصلی فروشگاه",
    items: [
      "فروش محصولات فیزیکی",
      "فضای میزبانی (نامحدود)",
      "ترافیک ماهیانه (نامحدود)",
      "بک‌آپ خودکار (هر ۲۴ ساعت)",
      "سئوی خودکار صفحات",
      "مدیریت سفارشات پیشرفته",
      "ایجاد سایت‌مپ به صورت خودکار",
      "محدود کردن دسترسی ادمین",
      "اضافه کردن صفحه داخلی",
      "اضافه کردن دسته‌بندی نامحدود",
      "ثبت‌نام و مدیریت کاربران",
      "اتصال دامنه شخصی",
      "ثبت‌نام و خرید با شماره موبایل",
      "گواهینامه امنیتی SSL",
      "جست‌وجوی سریع در سایت",
      "ایجاد فرم و ویژگی برای محصول",
      "ارسال پیامک خدماتی خودکار",
      "فیلتر پیشرفته محصولات",
      "دامنه ir رایگان",
      "ایجاد کد تخفیف ساده، پیشرفته و گروهی",
      "انتقال دسته‌ای محصولات از اینستا به سایت",
      "اتصال مستقیم به تُرب و ایمالز",
    ],
  },
  {
    category: "امکانات بازاریابی و پشتیبانی",
    items: [
      "اتصال به اینستاگرام",
      "اتصال به موتورهای جست‌وجوی کالا",
      "اتصال به پنل تبلیغات کلیکی یکتانت و تپسل",
      "اتصال به Google Analytics",
      "اتصال به Google Tag Manager",
      "اتصال به Microsoft Clarity",
      "پشتیبانی دائمی و رایگان",
      "پشتیبانی خرید و اتصال دامنه",
      "پشتیبانی راه‌اندازی اولیه سایت",
      "پشتیبانی تیم موفقیت مشتریان",
    ],
  },
  {
    category: "امکانات ارسال و لجستیک",
    items: [
      "روش‌های ارسال با قابلیت شخصی‌سازی",
      "روش ارسال دریافت حضوری",
      "روش ارسال پرداخت در محل و پس‌کرایه",
      "رایگان شدن هزینه ارسال بر اساس مبلغ خرید",
      "محاسبه خودکار هزینه ارسال بر اساس وزن مرسوله",
    ],
  },
  {
    category: "امکانات پرداخت و گزارش‌گیری",
    items: [
      "اتصال به درگاه مستقیم بانکی",
      "اتصال به درگاه واسط (زرین‌پال، آقای پرداخت، ایران‌درگاه و...)",
      "اتصال به درگاه قسطی (ترب‌پی، اسنپ‌پی، تارا و...)",
      "پرداخت در محل و کارت به کارت",
      "گزارش‌گیری جامع فروش و مالی",
      "مشاهده کاربران با بیشترین خرید",
      "امکان گرفتن فایل خروجی (Export) از اطلاعات",
    ],
  },
];

const partners = [
  "ترب (Torob)",
  "زرین‌پال",
  "آقای پرداخت",
  "ایران‌درگاه",
  "آمادست",
  "کد ۲۴",
  "اسنپ‌پی",
  "تارا",
];

const PricingPage = () => {
  const [includeSetupFee, setIncludeSetupFee] = useState(true);

  return (
    <div className="pt-28 pb-16">
      {/* ۱. هدر صفحه تعرفه‌ها */}
      <section className=" md:py-2">
        <div className="container-main text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-surface text-secondary text-[13px] font-bold mb-5">
            <Sparkles className="w-4 h-4" />
            <span>شروع از ماهانه فقط ۶۹۰ هزار تومان — بدون کمیسیون</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight mb-5">
            تعرفه بسته‌های فروشگاهی{" "}
            <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
              میکسین
            </span>
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed mb-8">
            قیمت‌گذاری ساده، شفاف و بدون هزینه‌های پنهان. در تمام بسته‌ها به ۱۰۰٪ امکانات دسترسی دارید و هیچ کارمزدی از فروش شما کسر نمی‌شود.
          </p>

          {/* سوییچ نمایش هزینه راه‌اندازی اولیه */}
          <div className="inline-flex flex-col sm:flex-row mb-6 items-center gap-3 p-2 lg:mb-10 rounded-2xl bg-surface border border-line">
            <button
              onClick={() => setIncludeSetupFee(true)}
              className={`px-5 py-2.5 rounded-xl text-[13.5px] font-bold transition-all cursor-pointer ${
                includeSetupFee
                  ? "bg-primary text-white shadow-md"
                  : "text-ink-secondary hover:text-ink"
              }`}
            >
              خرید اشتراک جدید (شامل راه‌اندازی اولیه)
            </button>
            <button
              onClick={() => setIncludeSetupFee(false)}
              className={`px-5 py-2.5 rounded-xl text-[13.5px] font-bold transition-all cursor-pointer ${
                !includeSetupFee
                  ? "bg-primary text-white shadow-md"
                  : "text-ink-secondary hover:text-ink"
              }`}
            >
              مبلغ خالص تمدید دوره‌های بعد
            </button>
          </div>
        </div>
      </section>

      {/* کارت‌های تعرفه */}
      <section className="pb-16">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-bg border-2 border-primary shadow-glow scale-[1.02]"
                    : "bg-bg border border-line shadow-card hover:shadow-card-hover"
                }`}
              >
                {/* بج بالای کارت */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 right-7 px-4 py-1 rounded-full text-[12px] font-extrabold text-white shadow-sm ${
                      plan.popular
                        ? "bg-gradient-to-l from-primary to-secondary"
                        : "bg-dark"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* عنوان پلن و درصد تخفیف */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-extrabold text-ink">
                        {plan.title}
                      </h2>
                      {plan.bonusMonths && (
                        <span className="px-2.5 py-0.5 rounded-lg bg-secondary-surface text-secondary text-[12px] font-extrabold">
                          {plan.bonusMonths}
                        </span>
                      )}
                    </div>
                    {plan.discountPercent && (
                      <span className="px-2.5 py-1 rounded-lg bg-accent-surface text-accent text-[12px] font-extrabold">
                        {plan.discountPercent}
                      </span>
                    )}
                  </div>

                  {/* قیمت قبلی */}
                  <div className="min-h-[28px] flex items-center gap-2">
                    {includeSetupFee && plan.oldPrice && (
                      <span className="text-[14px] text-ink-muted line-through">
                        {plan.oldPrice} تومان
                      </span>
                    )}
                  </div>

                  {/* قیمت اصلی */}
                  <div className="flex items-baseline gap-2 my-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                      {includeSetupFee ? plan.priceWithSetup : plan.priceRenewalOnly}
                    </span>
                    <span className="text-[14px] font-bold text-ink-secondary">
                      تومان
                    </span>
                  </div>

                  {/* توضیح هزینه راه‌اندازی */}
                  <div className="p-3 rounded-xl bg-surface border border-line/80 text-[12.5px] text-ink-secondary mb-6 flex items-start gap-2">
                    <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {includeSetupFee ? (
                      <span>
                        شامل هزینه راه‌اندازی اولیه (فقط یک‌بار پرداخت در شروع):{" "}
                        <strong className="text-ink">۱,۵۰۰,۰۰۰ تومان</strong>
                      </span>
                    ) : (
                      <span>
                        هزینه تمدید خالص اشتراک (معادل ماهانه{" "}
                        <strong className="text-ink">{plan.monthlyEquivalent} تومان</strong>{" "}
                        بدون هزینه راه‌اندازی مجدد)
                      </span>
                    )}
                  </div>

                  {/* لیست ویژگی‌های کلیدی کارت */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[14px] text-ink">
                        <div className="w-5 h-5 rounded-full bg-secondary-surface text-secondary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* دکمه‌های اقدام */}
                <div className="space-y-2.5 pt-4 border-t border-line">
                  <Link
                    to="/contact"
                    className={`w-full py-3.5 rounded-xl text-[14px] font-extrabold text-center block transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-l from-primary to-primary-hover text-white shadow-lg shadow-primary/25 hover:shadow-glow"
                        : "bg-primary-surface text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    خرید اشتراک {plan.title}
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full py-2.5 rounded-xl text-[13px] font-semibold text-ink-secondary hover:text-primary text-center block transition-colors"
                  >
                    شروع تست رایگان ۷ روزه
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* نوار تضمین‌ها */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {[
              {
                icon: ShieldCheck,
                title: "تست رایگان پیش از خرید",
                desc: "قبل از پرداخت، پنل مدیریت میکسین را به صورت رایگان تست و بررسی کنید.",
              },
              {
                icon: Gift,
                title: "شارژ هدیه تبلیغات در ترب",
                desc: "تا ۳۰۰ هزار تومان اعتبار هدیه ترب برای دریافت اولین سفارش‌های فروشگاه.",
              },
              {
                icon: PhoneCall,
                title: "راهنمایی دریافت ای‌نماد و درگاه",
                desc: "کارشناس اختصاصی شما مراحل اتصال دامنه، نماد اعتماد و درگاه را پیگیری می‌کند.",
              },
            ].map((g, i) => {
              const Icon = g.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-surface/80 border border-line flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-surface text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-extrabold text-ink mb-1">
                      {g.title}
                    </h3>
                    <p className="text-[12.5px] text-ink-secondary leading-relaxed">
                      {g.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*  همکاران و شرکای تجاری میکسین */}
      <section className="py-10 bg-surface/60 border-y border-line/60">
        <div className="container-main text-center">
          <p className="text-[14px] font-bold text-ink-secondary mb-6">
            همکاران و شرکای تجاری یکپارچه‌شده با میکسین
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-xl bg-bg border border-line text-[13.5px] font-bold text-ink shadow-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* لیست کامل امکانات موجود در تمامی اشتراک‌ها */}
      <section className="py-16">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-3">
              امکانات اشتراک‌های میکسین به شرح زیر است
            </h2>
            <p className="text-[15px] text-ink-secondary">
              تمامی قابلیت‌های زیر در هر سه بسته (سه‌ماهه، شش‌ماهه و یک‌ساله) بدون محدودیت فعال هستند
            </p>
          </div>

          <div className="space-y-8">
            {allIncludedGroups.map((group, idx) => (
              <div
                key={idx}
                className="bg-bg rounded-3xl border border-line p-6 sm:p-8 shadow-card"
              >
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-line">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-l from-primary to-secondary" />
                  <h3 className="text-lg sm:text-xl font-extrabold text-ink">
                    {group.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-surface/60 border border-line/60"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-[13.5px] font-semibold text-ink">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  سوالات متداول و بنر مشاوره */}
      <FAQ />
      <CtaBanner />
    </div>
  );
};

export default PricingPage;
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Store, Sparkles, TrendingUp, BarChart3, Truck, CreditCard,
  CheckCircle2, ArrowLeft, ShieldCheck, Smartphone, Globe,
  MessageSquare, Search, Layers, Percent, Bot, RefreshCw
} from "lucide-react";
import { Features, SmartFeatures, CtaBanner } from "../components";

interface FeatureCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badge: string;
  items: { title: string; desc: string }[];
}

const featureCategories: FeatureCategory[] = [
  {
    id: "core",
    title: "امکانات اصلی فروشگاه",
    subtitle: "زیرساخت ابری کامل برای مدیریت محصولات، سفارش‌ها و مشتریان بدون نیاز به دانش فنی",
    icon: Store,
    badge: "زیر ساخت اصلی",
    items: [
      { title: "فروش محصولات فیزیکی با تنوع نامحدود", desc: "تعریف ویژگی‌های مختلف مثل رنگ، سایز و گارانتی با موجودی و قیمت مجزا برای هر تنوع." },
      { title: "فضای میزبانی و ترافیک ماهانه نامحدود", desc: "میزبانی ابری پایدار بدون افت سرعت در روزهای پرمخاطب و جشنواره‌های فروش." },
      { title: "انتقال دسته‌ای محصولات از اینستاگرام", desc: "ورود خودکار پست‌های پیج اینستاگرام، دیجی‌کالا یا فایل اکسل به سایت در چند دقیقه." },
      { title: "بکاپ‌گیری خودکار ۲۴ ساعته", desc: "پشتیبان‌گیری منظم روزانه از تمامی اطلاعات محصولات، سفارش‌ها و مشتریان." },
      { title: "دامنه ir رایگان + اتصال دامنه شخصی", desc: "ارائه دامنه رایگان برای شروع سریع و امکان اتصال دامنه اختصاصی برند شما به همراه گواهینامه SSL." },
      { title: "ثبت‌نام و خرید سریع با شماره موبایل", desc: "فرآیند تسویه‌حساب ساده با کد تایید پیامکی (OTP) برای جلوگیری از رها شدن سبد خرید." },
      { title: "مدیریت پیشرفته سفارشات و دسترسی ادمین", desc: "بررسی وضعیت سفارش‌ها، چاپ فاکتور و تعریف سطح دسترسی محدود برای همکاران و انباردار." },
      { title: "ویرایشگر حرفه‌ای صفحه اول و صفحات داخلی", desc: "شخصی‌سازی بنرها، اسلایدرها، دسته‌بندی‌ها و ساخت صفحات دلخواه بدون یک خط کدنویسی." },
    ],
  },
  {
    id: "marketing",
    title: "بازاریابی، سئو و رشد فروش",
    subtitle: "ابزارهای هوشمند جذب ترافیک از گوگل، ترب و تبدیل فالوورهای اینستاگرام به خریدار",
    icon: TrendingUp,
    badge: "افزایش ۳۸٪ فروش",
    items: [
      { title: "اتصال مستقیم به ترب و ایمالز", desc: "همگام‌سازی خودکار قیمت و موجودی محصولات با موتورهای جست‌وجوی کالا برای جذب مشتری آماده خرید." },
      { title: "سئوی خودکار صفحات و سایت‌مپ", desc: "ساخت خودکار اسکیما (Schema)، نقشه سایت (Sitemap) و بهینه‌سازی ساختار لینک‌ها برای رتبه گرفتن در گوگل." },
      { title: "کدهای تخفیف ساده، پیشرفته و گروهی", desc: "تعریف کد تخفیف درصدی، مبلغی، اولین خرید یا ارسال رایگان که میانگین سبد خرید را تا ۲۴٪ بزرگ‌تر می‌کند." },
      { title: "پیامک‌های هوشمند بازگشت مشتری", desc: "ارسال خودکار پیامک یادآوری به مشتریانی که سبد خرید خود را نیمه‌کاره رها کرده‌اند (۲۰٪ نرخ بازگشت)." },
      { title: "پیشنهاد خودکار کالاهای مشابه و مکمل", desc: "نمایش هوشمند محصولات مرتبط در صفحه محصول و سبد خرید برای افزایش ۳۵ درصدی درآمد." },
      { title: "اتصال به ابزارهای تحلیل و تبلیغات", desc: "یکپارچه‌سازی سریع با Google Analytics، Google Tag Manager، Microsoft Clarity، یکتانت و تپسل." },
    ],
  },
  {
    id: "reporting",
    title: "گزارش‌گیری و مدیریت مشتریان",
    subtitle: "تصمیم‌گیری دقیق بر اساس داده‌های واقعی فروش و رفتار خریداران فروشگاه شما",
    icon: BarChart3,
    badge: "هوش تجاری",
    items: [
      { title: "داشبورد جامع گزارش‌های مالی و فروش", desc: "مشاهده نمودارهای فروش روزانه، هفتگی و ماهانه به تفکیک دسته‌بندی و محصولات پرفروش." },
      { title: "شناسایی مشتریان وفادار و پرتکرار", desc: "مشاهده لیست کاربرانی که بیشترین تعداد یا مبلغ خرید را از فروشگاه شما داشته‌اند." },
      { title: "خروجی اکسل (Export) کامل اطلاعات", desc: "مالکیت ۱۰۰٪ داده‌ها؛ دریافت فایل خروجی از لیست محصولات، سفارش‌ها و شماره‌های مشتریان در هر زمان." },
      { title: "فیلتر پیشرفته و جست‌وجوی آنی", desc: "امکان جست‌وجو و فیلتر سریع محصولات و سفارش‌ها بر اساس وضعیت پرداخت، تاریخ و روش ارسال." },
    ],
  },
  {
    id: "shipping",
    title: "روش‌های متنوع ارسال کالا",
    subtitle: "پوشش کامل روش‌های ارسال شهری و بین‌شهری متناسب با مدل کسب‌وکار شما",
    icon: Truck,
    badge: "لجستیک منعطف",
    items: [
      { title: "محاسبه خودکار هزینه بر اساس وزن مرسوله", desc: "محاسبه دقیق هزینه پستی در سبد خرید بر اساس مجموع وزن کالاهای انتخاب‌شده و شهر مقصد." },
      { title: "ارسال رایگان شرطی (بر اساس مبلغ خرید)", desc: "تشویق مشتری به افزایش مبلغ فاکتور با رایگان کردن ارسال برای خریدهای بالاتر از سقف مشخص." },
      { title: "تعریف روش‌های ارسال کاملاً شخصی‌سازی‌شده", desc: "تنظیم پیک موتوری، پست پیشتاز، تیپاکس، باربری یا هر روش اختصاصی برای شهرهای مختلف." },
      { title: "تحویل حضوری، پرداخت در محل و پس‌کرایه", desc: "امکان ثبت سفارش با گزینه دریافت حضوری از فروشگاه یا پرداخت هزینه ارسال در مقصد." },
    ],
  },
  {
    id: "payment",
    title: "درگاه‌های پرداخت نقدی و اقساطی",
    subtitle: "تسویه مستقیم، بدون کارمزد تراکنش و اتصال به معتبرترین درگاه‌های بانکی و اعتباری ایران",
    icon: CreditCard,
    badge: "بدون کمیسیون",
    items: [
      { title: "بدون کسر هیچ‌گونه کمیسیون از فروش", desc: "میکسین هیچ درصدی از تراکنش‌های شما برنمی‌دارد و کل مبلغ فروش مستقیماً به حساب شما واریز می‌شود." },
      { title: "اتصال به درگاه‌های اقساطی (۴۰٪ رشد سفارش)", desc: "امکان فروش قسطی با ترب‌پی، اسنپ‌پی، تارا، دیجی‌پی و زرین‌پلاس برای افزایش قدرت خرید مشتریان." },
      { title: "درگاه‌های پرداخت مستقیم و واسط", desc: "پشتیبانی از زرین‌پال، آقای پرداخت، پی‌پینگ، زیبال، سیزپی، ایران‌درگاه و درگاه‌های مستقیم بانکی (ملت، سامان، پارسیان، تجارت، پاسارگاد)." },
      { title: "خرید کارت‌به‌کارت و پرداخت در محل", desc: "شروع فروش حتی پیش از دریافت ای‌نماد با قابلیت ثبت فیش کارت‌به‌کارت در پنل مدیریت." },
    ],
  },
];

const highlights = [
  {
    icon: Bot,
    title: "دستیار هوش مصنوعی میکسین",
    desc: "با چت کردن با دستیار هوشمند در پنل فروشگاه، تولید توضیحات سئو، مدیریت محصولات و تنظیمات سایت را در چند ثانیه انجام دهید.",
    stat: "همراه ۲۴/۷",
    color: "primary",
  },
  {
    icon: Percent,
    title: "۰٪ کارمزد روی تراکنش‌ها",
    desc: "برخلاف مارکت‌پلیس‌ها، تمام سود فروش متعلق به خودتان است و فقط هزینه ثابت اشتراک دوره‌ای را می‌پردازید.",
    stat: "سود خالص ۱۰۰٪",
    color: "secondary",
  },
  {
    icon: RefreshCw,
    title: "آپدیت‌های مداوم و پشتیبانی اختصاصی",
    desc: "تیم فنی و موفقیت مشتریان میکسین از اتصال دامنه و دریافت نماد اعتماد تا رشد فروش در ترب کنار شماست.",
    stat: "+۳۰,۰۰۰ فروشگاه",
    color: "accent",
  },
];

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState<string>("core");
  const currentCategory =
    featureCategories.find((cat) => cat.id === activeTab) || featureCategories[0];

  return (
    <div className="pt-28 pb-16">
      {/* ۱. هیرو سکشن صفحه امکانات */}
      <section className="relative md:py-4 overflow-hidden">
        <div className="container-main text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-surface text-primary text-[13px] font-bold mb-6 border border-primary/15">
            <Sparkles className="w-4 h-4" />
            <span>تمامی امکانات در همه پلن‌ها فعال است</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight mb-6">
            همه ابزارهایی که برای{" "}
            <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
              ساخت و رشد فروشگاه اینترنتی
            </span>{" "}
            نیاز دارید
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl mx-auto mb-10">
            از انتقال یک‌کلیکی محصولات اینستاگرام و اتصال خودکار به ترب تا درگاه‌های پرداخت اقساطی و دستیار هوش مصنوعی؛ میکسین دغدغه‌های فنی شما را به صفر می‌رساند.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="px-8 py-3.5 text-[15px] font-bold text-white bg-gradient-to-l from-primary to-primary-hover rounded-xl shadow-lg shadow-primary/25 hover:shadow-glow hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>مشاهده تعرفه‌ها و شروع رایگان</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 text-[15px] font-semibold text-ink bg-surface border border-line rounded-xl hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              دریافت مشاوره رایگان
            </Link>
          </div>

          {/* آمار کلیدی بالای صفحه */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-10 border-t border-line/70">
            {[
              { value: "+۳۰,۰۰۰", label: "فروشگاه فعال" },
              { value: "+۶,۰۰۰,۰۰۰", label: "سفارش موفق" },
              { value: "۵ دقیقه", label: "زمان راه‌اندازی اولیه" },
              { value: "۰٪", label: "کمیسیون و کارمزد فروش" },
            ].map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-surface/70 border border-line/60">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-[13px] font-medium text-ink-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* سه مزیت رقابتی برجسته */}
      <section className="py-10">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-2xl bg-bg border border-line shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary-surface text-primary flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[12px] font-bold bg-secondary-surface text-secondary">
                        {item.stat}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-ink mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-ink-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* دسته‌بندی جامع امکانات (تب‌بندی تعاملی) */}
      <section className="py-16 bg-surface/60 border-y border-line/60">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-3">
              بررسی تخصصی امکانات میکسین
            </h2>
            <p className="text-[15px] text-ink-secondary">
              هر بخش را انتخاب کنید تا جزئیات کامل ابزارهای مدیریتی، بازاریابی، ارسال و پرداخت را ببینید
            </p>
          </div>

          {/* دکمه‌های تب */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {featureCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-[14px] font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/25 scale-[1.02]"
                      : "bg-bg text-ink-secondary border border-line hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* محتوای تب فعال */}
          <div className="bg-bg rounded-3xl border border-line p-6 sm:p-10 shadow-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-line">
              <div>
                <div className="inline-flex items-center gap-2 text-secondary text-[13px] font-bold mb-2">
                  <span>● {currentCategory.badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-ink">
                  {currentCategory.title}
                </h3>
                <p className="text-[14px] text-ink-secondary mt-1">
                  {currentCategory.subtitle}
                </p>
              </div>
              <Link
                to="/pricing"
                className="self-start md:self-center px-5 py-2.5 rounded-xl bg-primary-surface text-primary text-[13px] font-bold hover:bg-primary hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                شروع تست رایگان این امکانات
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-surface/50 border border-line/80 hover:border-primary/30 hover:bg-primary-surface/20 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary-surface text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-ink mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-[13.5px] text-ink-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <Features />
      <SmartFeatures />

      {/*  جدول مقایسه میکسین با سایر روش‌ها */}
      <section className="py-16">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-3">
              چرا فروشگاه‌ساز ابری میکسین؟
            </h2>
            <p className="text-[15px] text-ink-secondary">
              مقایسه راه‌اندازی سایت با میکسین در برابر وردپرس و طراحی سایت اختصاصی
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-line shadow-card bg-bg">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-surface border-b border-line">
                  <th className="p-4 sm:p-5 text-[14px] font-extrabold text-ink">معیار مقایسه</th>
                  <th className="p-4 sm:p-5 text-[14px] font-extrabold text-primary bg-primary-surface/50">
                    فروشگاه‌ساز میکسین
                  </th>
                  <th className="p-4 sm:p-5 text-[14px] font-bold text-ink-secondary">
                    سایت وردپرسی (WooCommerce)
                  </th>
                  <th className="p-4 sm:p-5 text-[14px] font-bold text-ink-secondary">
                    طراحی اختصاصی
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-[13.5px]">
                {[
                  {
                    metric: "زمان راه‌اندازی اولیه",
                    mixin: "کمتر از ۵ دقیقه",
                    wp: "چند روز تا چند هفته",
                    custom: "چند ماه",
                  },
                  {
                    metric: "هزینه خرید و تمدید هاست و سرور",
                    mixin: "رایگان و نامحدود روی کلود میکسین",
                    wp: "هزینه جداگانه ماهانه/سالانه",
                    custom: "هزینه سنگین سرور و نگهداری",
                  },
                  {
                    metric: "امنیت، بکاپ و آپدیت فنی",
                    mixin: "کاملاً خودکار و بر عهده تیم میکسین",
                    wp: "نیازمند مدیریت پلاگین‌ها و تداخل قالب",
                    custom: "نیازمند قرارداد پشتیبانی فنی",
                  },
                  {
                    metric: "پشتیبانی اختصاصی و مشاوره رشد",
                    mixin: "پشتیبانی تلفنی و تیکتی سریع + تیم موفقیت",
                    wp: "ندارد (وابسته به فریلنسر)",
                    custom: "محدود و پرهزینه",
                  },
                  {
                    metric: "اتصال آماده به ترب، اینستاگرام و درگاه قسطی",
                    mixin: "داخلی و یک‌کلیکی بدون افزونه پولی",
                    wp: "نیازمند خرید و تنظیم افزونه‌های متعدد",
                    custom: "نیازمند کدنویسی جداگانه",
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-ink">{row.metric}</td>
                    <td className="p-4 sm:p-5 font-bold text-primary bg-primary-surface/25">
                      {row.mixin}
                    </td>
                    <td className="p-4 sm:p-5 text-ink-secondary">{row.wp}</td>
                    <td className="p-4 sm:p-5 text-ink-secondary">{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/*  بنر فراخوان پایانی */}
      <CtaBanner />
    </div>
  );
};

export default FeaturesPage;
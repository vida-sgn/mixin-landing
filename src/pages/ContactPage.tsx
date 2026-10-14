import React, { useState } from "react";
import { IconArrowLeft, IconCheck } from "../assets/icons";

const contactCards = [
  {
    title: "مشاوره و فروش",
    desc: "پاسخگویی به سوالات قبل از خرید و راهنمایی انتخاب بسته مناسب کسب‌وکار شما",
    value: "۰۲۱-۹۱۰۹۳۸۵۰",
    sub: "شنبه تا چهارشنبه (۹ صبح تا ۱۷)",
    href: "tel:02191093850",
    badge: "پاسخگویی سریع",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "پشتیبانی فنی و تیکت",
    desc: "ویژه فروشگاه‌داران میکسین جهت بررسی مسائل فنی و راهنمایی پنل مدیریت",
    value: "support@mixin.ir",
    sub: "پاسخگویی ۲۴ ساعته در ۷ روز هفته",
    href: "mailto:support@mixin.ir",
    badge: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "دفتر مرکزی",
    desc: "مراجعه حضوری جهت جلسات سازمانی و همکاری‌های تجاری (با هماهنگی قبلی)",
    value: "تهران، منطقه نوآوری و فناوری",
    sub: "کد پستی: ۱۴۵۶۷۸۹۱۲۳",
    href: "#map",
    badge: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "مشاوره راه‌اندازی فروشگاه",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", subject: "مشاوره راه‌اندازی فروشگاه", message: "" });
    }, 4000);
  };

  return (
    <main className="relative overflow-hidden pt-28 pb-20 lg:pt-30 lg:pb-28 bg-gradient-to-b from-primary-surface/50 via-white to-white">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-primary/[0.06] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[350px] h-[350px] bg-secondary/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        {/* ───────── Header Section ───────── */}
        <div className="max-w-2xl mx-auto text-center mb-14 animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-[12px] font-bold text-primary bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            ارتباط مستقیم با تیم میکسین
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-ink leading-tight">
            همیشه کنار شما هستیم؛
            <br />
            <span className="text-gradient">پاسخگوی سوالات شما</span>
          </h1>

          <p className="mt-4 text-[15px] sm:text-[16px] text-ink-secondary leading-8">
            چه در ابتدای مسیر ساخت فروشگاه آنلاین باشید و چه برای توسعه کسب‌وکارتان به راهنمایی نیاز داشته باشید، کارشناسان میکسین آماده راهنمایی شما هستند.
          </p>
        </div>

        {/* ───────── Contact Cards ───────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {contactCards.map((card, i) => (
            <a
              key={card.title}
              href={card.href}
              className="group relative bg-white border border-line rounded-3xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {card.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold text-secondary bg-secondary/10 rounded-full">
                  {card.badge}
                </span>
              )}

              <div>
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-primary to-primary-hover text-white flex items-center justify-center mb-5 shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>

                <h3 className="text-[18px] font-bold text-ink mb-2">
                  {card.title}
                </h3>

                <p className="text-[13.5px] text-ink-secondary leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-line/70 flex items-center justify-between">
                <div>
                  <div className="text-[15px] font-black text-primary dir-ltr text-right">
                    {card.value}
                  </div>
                  <div className="text-[11.5px] text-ink-muted mt-0.5">
                    {card.sub}
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <IconArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ───────── Form & Info Grid ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          {/* Form Box */}
          <div className="bg-white border border-line rounded-3xl p-7 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-black text-ink mb-2">
              ارسال پیام و درخواست مشاوره
            </h2>
            <p className="text-[14px] text-ink-secondary mb-7">
              فرم زیر را تکمیل کنید تا کارشناسان ما در کوتاه‌ترین زمان با شما تماس بگیرند.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/30 text-center my-8 animate-in">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <IconCheck className="w-6 h-6" />
                </div>
                <h4 className="text-[17px] font-bold text-ink mb-1">
                  پیام شما با موفقیت ثبت شد!
                </h4>
                <p className="text-[13.5px] text-ink-secondary">
                  همکاران ما در بخش مشاوره به زودی با شماره شما تماس خواهند گرفت.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold text-ink mb-2">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثلاً: علی محمدی"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface/60 border border-line text-[14px] text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-primary focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-ink mb-2">
                      شماره موبایل *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface/60 border border-line text-[14px] text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-ink mb-2">
                    موضوع درخواست
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface/60 border border-line text-[14px] text-ink focus:outline-none focus:border-primary focus:bg-white transition-all"
                  >
                    <option value="مشاوره راه‌اندازی فروشگاه">مشاوره رایگان راه‌اندازی فروشگاه</option>
                    <option value="سوال درباره تعرفه‌ها">سوال درباره تعرفه‌ها و امکانات</option>
                    <option value="انتقال سایت به میکسین">انتقال فروشگاه از پلتفرم دیگر به میکسین</option>
                    <option value="پشتیبانی فنی">پشتیبانی فنی و گزارش مشکل</option>
                    <option value="سایر موارد">سایر موارد</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-ink mb-2">
                    توضیحات یا پیام شما *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="هر سوال یا توضیحی درباره کسب‌وکارتان دارید اینجا بنویسید..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface/60 border border-line text-[14px] text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full sm:w-auto px-8 py-3.5 text-[15px] font-bold text-white bg-gradient-to-l from-primary to-primary-hover rounded-2xl shadow-lg shadow-primary/25 hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>ارسال درخواست مشاوره</span>
                  <IconArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* Side Info Box */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-primary-hover text-white rounded-3xl p-7 sm:p-8 shadow-lg shadow-primary/20">
              <h3 className="text-xl font-black mb-3">
                نیاز به راهنمایی فوری دارید؟
              </h3>
              <p className="text-[14px] text-white/85 leading-7 mb-6">
                اگر می‌خواهید همین امروز فروشگاه خود را راه‌اندازی کنید، می‌توانید دوره تست ۱۴ روزه رایگان را بدون نیاز به پرداخت اولیه شروع کنید.
              </p>

              <div className="space-y-3 mb-7">
                {[
                  "مشاوره اختصاصی انتخاب قالب و امکانات",
                  "راهنمایی اتصال درگاه پرداخت و اینماد",
                  "پشتیبانی گام‌به‌گام تا ثبت اولین فروش",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[13.5px]">
                    <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <IconCheck className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="/pricing"
                className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-2xl bg-white text-primary font-bold text-[14px] hover:bg-surface transition-colors shadow-sm"
              >
                مشاهده تعرفه‌ها و شروع رایگان
              </a>
            </div>

            {/* Working Hours Box */}
            <div className="bg-white border border-line rounded-3xl p-6 sm:p-7">
              <h4 className="text-[16px] font-bold text-ink mb-4">
                ساعات پاسخگویی تلفنی
              </h4>
              <div className="space-y-3 text-[13.5px]">
                <div className="flex justify-between py-2 border-b border-line/60">
                  <span className="text-ink-secondary">شنبه تا چهارشنبه</span>
                  <span className="font-bold text-ink">۹:۰۰ الی ۱۷:۰۰</span>
                </div>
                <div className="flex justify-between py-2 border-b border-line/60">
                  <span className="text-ink-secondary">پنج‌شنبه‌ها</span>
                  <span className="font-bold text-ink">۹:۰۰ الی ۱۴:۰۰</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-ink-secondary">پشتیبانی تیکت و ایمیل</span>
                  <span className="font-bold text-secondary">۲۴ ساعته (۷ روز هفته)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
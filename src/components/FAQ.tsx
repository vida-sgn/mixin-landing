import { useState } from "react";
import { IconChevronDown } from "../assets/icons";

const faqs = [
  { q: "آیا برای استفاده از میکسین نیاز به دانش فنی دارم؟", a: "نه. پنل میکسین طوری طراحی شده که بدون هیچ دانش فنی یا کدنویسی، می‌تونید سایت خودتون رو راه‌اندازی و مدیریت کنید. تیم پشتیبانی هم در تمام مراحل راهنمای شماست." },
  { q: "آیا میکسین آموزش راه‌اندازی و مدیریت سایت داره؟", a: "بله. میکسین ویدیوهای آموزشی کاملی برای تمام بخش‌ها داره. همچنین تیم پشتیبانی همیشه آماده پاسخگویی به سوالات شما و راهنمایی در مسیر مدیریت فروشگاهه." },
  { q: "آیا برای راه‌اندازی سایت باید هاست جداگانه بخرم؟", a: "نه. تمام فروشگاه‌های میکسین روی سرورهای ابری و قدرتمند ما میزبانی می‌شن و نیازی به خرید و تمدید هاست جداگانه ندارید." },
  { q: "هزینه راه‌اندازی فروشگاه با میکسین چقدره؟", a: "میکسین بسته‌های اشتراکی متنوعی با قیمت‌های مناسب داره که متناسب با نیاز کسب‌وکارهای مختلف طراحی شده‌ان. شروع از ماهانه ۶۹۰ هزار تومان." },
  { q: "آیا علاوه بر حق اشتراک، روی تراکنش‌ها کارمزدی کسر می‌شه؟", a: "نه. شما تنها هزینه ثابت اشتراک دوره‌ای رو می‌پردازید و کل مبلغ فروش به حساب خودتون واریز می‌شه. بدون هیچ کمیسیونی." },
  { q: "آیا می‌تونم دامنه دلخواه خودم رو داشته باشم؟", a: "بله. در میکسین شما می‌تونید دامنه دلخواه خودتون رو انتخاب و به سایت‌تون متصل کنید. علاوه بر این، یک دامنه رایگان برای شروع به شما ارائه می‌شه." },
  { q: "پشتیبانی میکسین شامل چه خدماتی می‌شه؟", a: "پشتیبانی ما شامل کمک در راه‌اندازی اولیه، رفع مشکلات فنی و راهنمایی برای استفاده از پنل مدیریته. در تمام این موارد می‌تونید روی پاسخ‌گویی سریع تیم ما حساب کنید." },
  { q: "در صورت عدم تمدید اشتراک، اطلاعاتم چی می‌شن؟", a: "مالکیت داده‌ها کاملاً متعلق به شماست. هر زمان که بخواید، می‌تونید از اطلاعات محصولات، سفارش‌ها و لیست مشتری‌های خودتون به‌سادگی خروجی بگیرید." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white via-surface/40 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] bg-secondary/[0.03] rounded-full blur-[100px]" />
      
      <div className="container-main relative">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold
                           text-primary bg-gradient-to-l from-primary-surface to-secondary-surface
                           rounded-full mb-4 tracking-wider uppercase shadow-sm">
            سوالات متداول
          </span>
          <h2 className="text-3xl sm:text-[2.5rem] font-black text-ink leading-snug">
            پاسخ به <span className="text-gradient">سوالات شما</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-500 animate-in
                ${openIndex === i 
                  ? "border-primary/30 shadow-xl shadow-primary/10" 
                  : "border-line hover:border-primary/15 hover:shadow-lg"}`}
              style={{ animationDelay: `${i * 0.05}s` }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-right cursor-pointer">
                <span className={`text-[15px] font-bold transition-colors duration-300
                  ${openIndex === i ? "text-primary" : "text-ink"}`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center
                  transition-all duration-500
                  ${openIndex === i 
                    ? "bg-gradient-to-br from-primary to-secondary text-white rotate-180 shadow-lg shadow-primary/30" 
                    : "bg-surface text-ink-muted"}`}>
                  <IconChevronDown className="w-4 h-4" />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500
                ${openIndex === i ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-6 pb-5 text-[14px] text-ink-secondary leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

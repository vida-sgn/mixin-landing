import { useState } from "react";
import { IconArrowLeft } from "../assets/icons";

import clothingImg from "../assets/templates/clothing.jpg";
import cosmeticsImg from "../assets/templates/cosmetics.jpg";
import homeImg from "../assets/templates/home.jpg";
import digitalImg from "../assets/templates/digital.jpg";

// این خط پاک شده بود!
const categories = ["پوشاک", "آرایشی و بهداشتی", "خانه و آشپزخانه", "دیجیتال"] as const;

type Category = (typeof categories)[number];

const templateImages: Record<Category, string> = {
  "پوشاک": clothingImg,
  "آرایشی و بهداشتی": cosmeticsImg,
  "خانه و آشپزخانه": homeImg,
  "دیجیتال": digitalImg,
};

interface Template {
  name: string;
  shop: string;
  image: string;
  imageAlt: string;
}

const templates: Record<Category, Template[]> = {
  "پوشاک": [
    { name: "آلینا اکسسوری", shop: "alinaaccessory.ir", image: templateImages["پوشاک"], imageAlt: "پیش‌نمایش قالب فروشگاه پوشاک آلینا اکسسوری" },
    { name: "کاتونی", shop: "catooni.ir", image: templateImages["پوشاک"], imageAlt: "پیش‌نمایش قالب فروشگاه پوشاک کاتونی" },
    { name: "داکلینگ کیدز", shop: "ducklingkids.ir", image: templateImages["پوشاک"], imageAlt: "پیش‌نمایش قالب فروشگاه پوشاک داکلینگ کیدز" },
    { name: "نویر اکسسوری", shop: "noiraccessory.ir", image: templateImages["پوشاک"], imageAlt: "پیش‌نمایش قالب فروشگاه پوشاک نویر اکسسوری" },
  ],
  "آرایشی و بهداشتی": [
    { name: "سرمه بندر", shop: "sormehonlineshopping.ir", image: templateImages["آرایشی و بهداشتی"], imageAlt: "پیش‌نمایش قالب فروشگاه آرایشی سرمه بندر" },
    { name: "آروین", shop: "arvindshop.ir", image: templateImages["آرایشی و بهداشتی"], imageAlt: "پیش‌نمایش قالب فروشگاه آرایشی آروین" },
    { name: "دوین پرفیوم", shop: "devinperfume.ir", image: templateImages["آرایشی و بهداشتی"], imageAlt: "پیش‌نمایش قالب فروشگاه عطر دوین پرفیوم" },
    { name: "هانیتا شاپ", shop: "hanitashop.ir", image: templateImages["آرایشی و بهداشتی"], imageAlt: "پیش‌نمایش قالب فروشگاه آرایشی هانیتا شاپ" },
  ],
  "خانه و آشپزخانه": [
    { name: "آرون دکور", shop: "arondecor.ir", image: templateImages["خانه و آشپزخانه"], imageAlt: "پیش‌نمایش قالب فروشگاه دکوراسیون آرون دکور" },
    { name: "دنا لوکس", shop: "denalux.ir", image: templateImages["خانه و آشپزخانه"], imageAlt: "پیش‌نمایش قالب فروشگاه لوازم خانگی دنا لوکس" },
    { name: "هوم استایل", shop: "homestyle.ir", image: templateImages["خانه و آشپزخانه"], imageAlt: "پیش‌نمایش قالب فروشگاه دکوراسیون هوم استایل" },
    { name: "لیمو اکسسوری", shop: "limuaccessory.ir", image: templateImages["خانه و آشپزخانه"], imageAlt: "پیش‌نمایش قالب فروشگاه لوازم خانگی لیمو اکسسوری" },
  ],
  "دیجیتال": [
    { name: "فقط گجت", shop: "faghatgajet.com", image: templateImages["دیجیتال"], imageAlt: "پیش‌نمایش قالب فروشگاه دیجیتال فقط گجت" },
    { name: "مستر ابزار", shop: "mester-abzaar.ir", image: templateImages["دیجیتال"], imageAlt: "پیش‌نمایش قالب فروشگاه ابزار مستر ابزار" },
    { name: "تکنولایف", shop: "technolife.ir", image: templateImages["دیجیتال"], imageAlt: "پیش‌نمایش قالب فروشگاه دیجیتال تکنولایف" },
    { name: "اسپیکرشاپ", shop: "speakershops.ir", image: templateImages["دیجیتال"], imageAlt: "پیش‌نمایش قالب فروشگاه صوتی اسپیکرشاپ" },
  ],
};

const ShopTemplates = () => {
  const [active, setActive] = useState<Category>("پوشاک");

  return (
    <section id="templates" className="py-24 bg-gradient-to-b from-white via-surface/20 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-secondary/[0.04] rounded-full blur-[100px]" />

      <div className="container-main relative">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold text-primary bg-gradient-to-l from-primary-surface to-secondary-surface rounded-full mb-4 shadow-sm">
            قالب‌ها
          </span>
          <h2 className="text-3xl sm:text-[2.5rem] font-black text-ink leading-snug">
            سایت اختصاصی، <span className="text-gradient">همون‌طور که شما دوست دارید</span>
          </h2>
          <p className="mt-3 text-ink-secondary text-[15px]">
            ویرایشگر ظاهری میکسین شامل بخش‌ها و المان‌های متنوعیه که شخصی‌سازی ظاهر سایت رو برای همه دسته‌بندی‌ها ممکن می‌کنه
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-in delay-1" role="tablist" aria-label="دسته‌بندی قالب‌ها">
          {categories.map((cat) => (
            <button key={cat}
              onClick={() => setActive(cat)}
              role="tab"
              aria-selected={active === cat}
              className={`px-5 py-2.5 text-[13px] font-bold rounded-xl transition-all duration-300 cursor-pointer
                ${active === cat
                  ? "bg-gradient-to-l from-primary to-primary-hover text-white shadow-lg shadow-primary/25 scale-105"
                  : "bg-surface text-ink-secondary hover:bg-primary-surface hover:text-primary hover:scale-105"}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Templates grid */}
        <div key={active} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {templates[active].map((t, i) => (
            <div key={t.name}
              className="group relative bg-white border border-line rounded-2xl overflow-hidden
                         transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2
                         animate-in"
              style={{ animationDelay: `${i * 0.08}s` }}>
              {/* Preview */}
              <div className="relative h-40 overflow-hidden bg-surface">
                <img
                  src={t.image}
                  alt={t.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="block w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300
                                   px-4 py-2 bg-white rounded-xl text-[12px] font-bold text-ink shadow-xl">
                    مشاهده قالب
                  </span>
                </div>
              </div>
              {/* Info */}
              <div className="p-4">
                <h3 className="text-[13px] font-bold text-ink">{t.name}</h3>
                <p className="text-[11px] text-ink-muted mt-0.5" dir="ltr">{t.shop}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold text-white
                       bg-gradient-to-l from-primary to-primary-hover rounded-xl shadow-lg shadow-primary/25
                       hover:shadow-glow-lg hover:scale-105 transition-all duration-300">
            مشاهده همه قالب‌ها
            <IconArrowLeft className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopTemplates;
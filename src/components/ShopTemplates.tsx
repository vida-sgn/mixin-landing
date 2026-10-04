import { useState } from "react";
import { IconArrowLeft } from "../assets/icons";

const categories = ["پوشاک", "آرایشی و بهداشتی", "خانه و آشپزخانه", "دیجیتال"];

const templates: Record<string, { name: string; shop: string; color: string }[]> = {
  "پوشاک": [
    { name: "آلینا اکسسوری", shop: "alinaaccessory.ir", color: "from-rose-400 to-pink-500" },
    { name: "کاتونی", shop: "catooni.ir", color: "from-blue-400 to-indigo-500" },
    { name: "داکلینگ کیدز", shop: "ducklingkids.ir", color: "from-yellow-400 to-orange-400" },
    { name: "نویر اکسسوری", shop: "noiraccessory.ir", color: "from-gray-700 to-gray-900" },
  ],
  "آرایشی و بهداشتی": [
    { name: "سرمه بندر", shop: "sormehonlineshopping.ir", color: "from-pink-300 to-rose-400" },
    { name: "آروین", shop: "arvindshop.ir", color: "from-purple-400 to-violet-500" },
    { name: "دوین پرفیوم", shop: "devinperfume.ir", color: "from-amber-300 to-yellow-500" },
    { name: "هانیتا شاپ", shop: "hanitashop.ir", color: "from-red-300 to-rose-400" },
  ],
  "خانه و آشپزخانه": [
    { name: "آرون دکور", shop: "arondecor.ir", color: "from-emerald-400 to-teal-500" },
    { name: "دنا لوکس", shop: "denalux.ir", color: "from-slate-500 to-gray-700" },
    { name: "هوم استایل", shop: "homestyle.ir", color: "from-orange-300 to-amber-400" },
    { name: "لیمو اکسسوری", shop: "limuaccessory.ir", color: "from-lime-400 to-green-500" },
  ],
  "دیجیتال": [
    { name: "فقط گجت", shop: "faghatgajet.com", color: "from-cyan-400 to-blue-500" },
    { name: "مستر ابزار", shop: "mester-abzaar.ir", color: "from-yellow-500 to-amber-600" },
    { name: "تکنولایف", shop: "technolife.ir", color: "from-indigo-400 to-blue-600" },
    { name: "اسپیکرشاپ", shop: "speakershops.ir", color: "from-violet-400 to-purple-600" },
  ],
};

const ShopTemplates = () => {
  const [active, setActive] = useState("پوشاک");

  return (
    <section id="templates" className="py-24 bg-gradient-to-b from-white via-surface/20 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-secondary/[0.04] rounded-full blur-[100px]" />
      
      <div className="container-main relative">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold
                           text-primary bg-gradient-to-l from-primary-surface to-secondary-surface
                           rounded-full mb-4 tracking-wider uppercase shadow-sm">
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
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-in delay-1">
          {categories.map((cat) => (
            <button key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 text-[13px] font-bold rounded-xl transition-all duration-300 cursor-pointer
                ${active === cat
                  ? "bg-gradient-to-l from-primary to-primary-hover text-white shadow-lg shadow-primary/25 scale-105"
                  : "bg-surface text-ink-secondary hover:bg-primary-surface hover:text-primary hover:scale-105"}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Templates grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {templates[active].map((t, i) => (
            <div key={t.name}
              className="group relative bg-white border border-line rounded-2xl overflow-hidden
                         transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2
                         animate-in"
              style={{ animationDelay: `${i * 0.08}s` }}>
              {/* Preview */}
              <div className={`h-40 bg-gradient-to-br ${t.color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }} />
                {/* Mockup elements */}
                <div className="absolute inset-4 flex flex-col gap-2">
                  <div className="h-3 w-2/3 bg-white/25 rounded" />
                  <div className="flex gap-1.5 mt-1">
                    <div className="flex-1 h-12 bg-white/20 rounded-lg" />
                    <div className="flex-1 h-12 bg-white/20 rounded-lg" />
                  </div>
                  <div className="flex gap-1.5 mt-auto">
                    <div className="flex-1 h-8 bg-white/15 rounded-lg" />
                    <div className="flex-1 h-8 bg-white/15 rounded-lg" />
                    <div className="flex-1 h-8 bg-white/15 rounded-lg" />
                  </div>
                </div>
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

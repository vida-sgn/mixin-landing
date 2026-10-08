import React from "react";
import { ShoppingBag as IconShoppingBag } from "lucide-react";
import mahpooshStore from "../../assets/mahpoosh-store.png";

export default function StoreMockup() {
  return (
    // ✅ تغییر ۲: max-w از 900 به 620 — 900px باعث می‌شد ماکاپ از ستونش بزرگ‌تر بشه
    // و به‌هرحال کوچیک رندر بشه با کلی فضای خالی اطراف
    <div className="relative w-full max-w-[620px] mx-auto">

      {/* Main store preview */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-white
          shadow-hero-mockup
          border border-slate-100
          transition-transform
          duration-500
          hover:scale-[1.015]
        "
      >
        {/* Browser-like top bar */}
        <div
          className="
            flex items-center
            gap-2
            h-10
            px-5
            bg-white
            border-b border-slate-100
          "
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />

          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              hidden sm:flex
              items-center
              justify-center
              h-6
              px-6
              rounded-full
              bg-slate-50
              text-[10px]
              text-slate-400
              font-medium
            "
          >
            mahpoosh.ir
          </div>
        </div>

        {/* Store image */}
        <div className="relative overflow-hidden -mt-2"> {/* نصف padding بالای تصویر رو بخور */}
  <img
    src={mahpooshStore}
    alt="نمونه فروشگاه آنلاین ساخته شده با میکسین"
    className="
      block
      w-full
      h-auto
      object-cover
      object-center
      scale-[1.04]   /* زوم خیلی نرم تا padding دور تصویر بره */
    "
  />


          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-t
              from-black/[0.04]
              via-transparent
              to-transparent
            "
          />
        </div>
      </div>

      {/* New order card */}
      <div
        className="
          absolute
          top-4
          left-4
          sm:left-6
          z-20
          w-[140px]
          sm:w-[165px]
          rounded-2xl
          bg-white
          border border-slate-100
          shadow-lg
          shadow-primary/10
          p-3.5
          animate-float-slow
          [animation-delay:1.5s]
        "
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className="
              flex items-center justify-center
              w-7 h-7
              rounded-lg
              bg-secondary/10
              text-secondary
            "
          >
            <IconShoppingBag className="w-4 h-4" />
          </span>

          <span className="text-[11px] font-bold text-ink-muted">
            سفارش جدید
          </span>
        </div>

        <div className="text-[12px] text-ink">
          تی‌شرت مخمل مشکی
        </div>

        <div className="mt-0.5 text-[10px] text-ink-muted/70">
          ۲ دقیقه پیش · ۴۹۰٬۰۰۰ تومان
        </div>
      </div>
    </div>
  );
}

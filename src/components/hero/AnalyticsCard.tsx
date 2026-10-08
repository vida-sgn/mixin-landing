import React from "react";

export default function AnalyticsCard() {
  const bars = [35, 55, 40, 70, 52, 85, 65, 92];

  return (
    <div
  className="
    rolling-card-back
    relative
    rounded-[28px]
    bg-white
    border border-slate-100
    shadow-hero-mockup
    p-6
    mb-2
  "
>

      {/* هدر */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-[13px] font-bold text-ink">آمار فروشگاه</div>
          <div className="text-[11px] text-ink-muted">۷ روز گذشته</div>
        </div>

        <span
          className="
            flex items-center gap-1
            h-7 px-3
            rounded-full
            bg-secondary-surface
            text-secondary
            text-[11px] font-bold
          "
        >
          ↖ ۲۴٪ رشد
        </span>
      </div>

      {/* اعداد اصلی */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "فروش کل", value: "۱۸.۴M", color: "text-primary" },
          { label: "سفارش", value: "۱٬۲۴۰", color: "text-ink" },
          { label: "بازدید", value: "۴۲K", color: "text-secondary" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-surface p-3.5 text-center"
          >
            <div className={`text-[18px] font-black ${item.color}`}>
              {item.value}
            </div>
            <div className="text-[10px] text-ink-muted mt-0.5">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* نمودار میله‌ای */}
      <div className="flex items-end justify-between gap-2 h-[90px]">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div
              className="
                w-full rounded-t-md
                bg-gradient-to-t
                from-primary/25 to-primary
              "
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between text-[9px] text-ink-muted/70">
        {["ش", "ی", "د", "س", "چ", "پ", "ج", "ش"].map((d, i) => (
          <span key={i} className="flex-1 text-center">{d}</span>
        ))}
      </div>
    </div>
  );
}

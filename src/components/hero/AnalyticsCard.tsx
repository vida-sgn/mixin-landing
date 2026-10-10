import React from "react";

const stats = [
  { label: "فروش کل", value: "۱۸.۴ میلیون", color: "text-primary" },
  { label: "سفارش", value: "۱٬۲۴۰", color: "text-ink" },
  { label: "بازدید", value: "۴۲ هزار", color: "text-secondary" },
];

// هفت میله برای هفت روز
const bars = [35, 55, 40, 70, 52, 85, 65];
const days = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

export default function AnalyticsCard() {
  return (
    <div className="relative p-6 w-full h-full bg-white">
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
          ↑ ۳۴٪ رشد
        </span>
      </div>

      {/* اعداد اصلی */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-surface p-3.5 text-center"
          >
            <div className={`text-[16px] font-black ${item.color}`}>
              {item.value}
            </div>
            <div className="text-[10px] text-ink-muted mt-0.5">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* نمودار میله‌ای (باگ Flexbox برطرف شد) */}
      <div className="flex items-end justify-between gap-2 h-[90px]">
        {bars.map((h, i) => (
          <div
            key={i}
            className="
              flex-1 rounded-t-md
              bg-gradient-to-t
              from-primary/25 to-primary
            "
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between text-[9px] text-ink-muted/70">
        {days.map((d, i) => (
          <span key={i} className="flex-1 text-center">{d}</span>
        ))}
      </div>
    </div>
  );
}
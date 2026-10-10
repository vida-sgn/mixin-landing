import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ChevronLeft, ChevronRight, Wallet, Package, CheckCircle, BarChart3 } from "lucide-react";
import mahpooshStore from "../../assets/mahpoosh-store.png";
import { cn } from "../../lib/utils";
import AnalyticsCard from "./AnalyticsCard";

const AUTOPLAY_MS = 6000;

// ─── محتوای کارت جدید: لیست سفارشات ───
const OrdersContent = () => (
  <div className="p-5">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[12px] font-bold text-ink-muted">آخرین سفارشات ثبت‌شده</span>
      <span className="text-[10px] font-mono text-slate-400">۰۲</span>
    </div>
    
    <div className="flex flex-col gap-3">
      {/* سفارش اول */}
      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAFAF8] border border-slate-100/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[12px] font-bold text-ink mb-1">هودی دورس مینیمال</div>
            <div className="text-[10px] text-ink-muted/80">علی رضایی • تهران</div>
          </div>
        </div>
        <div className="text-left">
          <div className="text-[13px] font-black text-ink mb-1">
            ۸۵۰٬۰۰۰ <span className="text-[9px] font-normal text-ink-muted">تومان</span>
          </div>
          <div className="flex items-center justify-end gap-1 text-[9px] font-bold text-emerald-600">
            <CheckCircle className="w-3 h-3" />
            پرداخت موفق
          </div>
        </div>
      </div>

      {/* سفارش دوم */}
      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAFAF8] border border-slate-100/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[12px] font-bold text-ink mb-1">تی‌شرت مخمل مشکی</div>
            <div className="text-[10px] text-ink-muted/80">سارا احمدی • شیراز</div>
          </div>
        </div>
        <div className="text-left">
          <div className="text-[13px] font-black text-ink mb-1">
            ۹۹۰٬۰۰۰ <span className="text-[9px] font-normal text-ink-muted">تومان</span>
          </div>
          <div className="flex items-center justify-end gap-1 text-[9px] font-bold text-emerald-600">
            <CheckCircle className="w-3 h-3" />
            پرداخت موفق
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── محتوای کارت فروشگاه ───
const StoreContent = () => (
  <>
    <div className="flex items-center gap-2 h-10 px-5 bg-white border-b border-slate-100 relative">
      <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
      <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center h-6 px-6 rounded-full bg-slate-50 text-[10px] text-slate-400 font-medium">
        mahpoosh.ir
      </div>
      <span className="mr-auto flex items-center gap-1 text-[10px] text-slate-400">
        <BarChart3 className="w-3.5 h-3.5" />
        آمار
      </span>
    </div>
    <div className="relative overflow-hidden">
      <img
        src={mahpooshStore}
        alt="نمونه فروشگاه آنلاین ساخته شده با میکسین"
        decoding="async"
        className="block w-full h-auto object-cover object-center scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-transparent" />
    </div>
  </>
);

// آرایه کارت‌ها با چیدمان و محتوای جدید
const CARDS = [
  { id: "store", caption: "فروشگاه آنلاین", content: <StoreContent /> },
  { id: "orders", caption: "مدیریت سفارشات", content: <OrdersContent /> },
  { id: "financial", caption: "عملکرد مالی", content: <AnalyticsCard /> }, 
];

export default function HeroCardStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const totalCards = CARDS.length;

  const activeIndexRef = useRef(0);
  const pausedRef = useRef(false);

  const goTo = useCallback((index: number) => {
    const next = ((index % totalCards) + totalCards) % totalCards;
    activeIndexRef.current = next;
    setActiveIndex(next);
  }, [totalCards]);

  const handleNext = useCallback(() => goTo(activeIndexRef.current + 1), [goTo]);
  const handlePrev = useCallback(() => goTo(activeIndexRef.current - 1), [goTo]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      goTo(activeIndexRef.current + 1);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [goTo, activeIndex]);

  const springConfig = {
    type: "spring",
    stiffness: 380,
    damping: 30,
    mass: 0.75,
  };

  return (
    <div className="relative w-full max-w-[620px] mx-auto">
      <div
        className="relative flex items-end justify-center w-full h-[400px] sm:h-[440px] lg:h-[480px] rounded-[28px] outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        role="region"
        aria-roledescription="carousel"
        aria-label="نمونه فروشگاه"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            handleNext();
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            handlePrev();
          }
        }}
        onPointerEnter={() => { pausedRef.current = true; }}
        onPointerLeave={() => { pausedRef.current = false; }}
      >
        {CARDS.map((card, index) => {
          const relativePosition = (index - activeIndex + totalCards) % totalCards;
          const zIndex = totalCards - relativePosition;
          const isTop = relativePosition === 0;

          const widthPercent = `${100 - relativePosition * 6}%`; 
          const yOffset = relativePosition * 22; 

          return (
            <motion.div
              key={card.id}
              onClick={() => !isTop && goTo(index)}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragStart={() => { pausedRef.current = true; }}
              onDrag={(_, info) => isTop && setDragOffset(info.offset.x)}
              onDragEnd={(_, info) => {
                pausedRef.current = false;
                setDragOffset(0);
                if (info.offset.x < -80 || info.velocity.x < -400) handleNext();
                else if (info.offset.x > 80 || info.velocity.x > 400) handlePrev();
              }}
              layout="position"
              initial={false}
              animate={{
                y: -yOffset,
                width: widthPercent,
                rotate: isTop ? dragOffset * 0.04 : 0,
                zIndex,
                opacity: 1,
              }}
              whileHover={!isTop ? { y: -yOffset - 10, transition: { type: "spring", stiffness: 450, damping: 25 } } : {}}
              whileTap={isTop ? { scale: 0.99 } : { scale: 0.98 }}
              transition={springConfig}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                margin: "0 auto",
                transformOrigin: "bottom center",
                willChange: "transform, width",
              }}
              className={cn(
                "overflow-hidden rounded-[28px] bg-white border border-slate-100",
                "shadow-[0_12px_40px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)]",
                isTop ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
              )}
            >
              <div className="flex items-center justify-between bg-[#FAFAF8] border-b border-[#EDEDE8] h-11 px-5 select-none">
                <div className="flex items-center gap-2.5">
                  <span className={isTop ? "text-primary" : "text-secondary"}>
                    {card.id === "store" && <ShoppingBag className="w-4 h-4" />}
                    {card.id === "orders" && <Package className="w-4 h-4" />}
                    {card.id === "financial" && <Wallet className="w-4 h-4" />}
                  </span>
                  <span className="font-semibold text-[12px] text-ink tracking-tight">
                    {card.caption}
                  </span>
                </div>
              </div>

              {card.content}
            </motion.div>
          );
        })}
      </div>

      <div className="absolute top-14 left-4 sm:left-6 z-20 w-[140px] sm:w-[165px] rounded-2xl bg-white border border-slate-100 shadow-lg shadow-primary/10 p-3.5 animate-float-slow [animation-delay:1.5s] pointer-events-none" aria-hidden="true">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-secondary/10 text-secondary">
            <ShoppingBag className="w-4 h-4" />
          </span>
          <span className="text-[11px] font-bold text-ink-muted">سفارش جدید</span>
        </div>
        <div className="text-[12px] text-ink">تی‌شرت مخمل مشکی</div>
        <div className="mt-0.5 text-[10px] text-ink-muted/70">۲ دقیقه پیش · ۹۹۰٬۰۰۰ تومان</div>
      </div>
      
      <div className="mt-5 flex items-center justify-between w-full max-w-[620px] px-2">
        <div className="flex items-center gap-1.5">
          {CARDS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`کارت ${i + 1}`}
              aria-current={i === activeIndex}
              className="p-1 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
            >
              <div
                className={cn(
                  "rounded-full transition-all duration-300 h-1.5",
                  i === activeIndex ? "w-7 bg-neutral-900" : "w-2 bg-neutral-400/60 hover:bg-neutral-600"
                )}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="کارت قبلی"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-[#F2F2EC] text-neutral-800 border border-[#DCDCD6] shadow-xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="کارت بعدی"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-[#F2F2EC] text-neutral-800 border border-[#DCDCD6] shadow-xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
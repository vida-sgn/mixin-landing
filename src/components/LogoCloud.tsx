const partners = [
  "زرین‌پال", "ترب", "اسنپ‌پی", "تارا", "دیجی‌پی",
  "آی‌دی‌پی", "پی‌پینگ", "ملت", "پاسارگاد", "سامان",
];

const LogoCloud = () => {
  return (
    <section className="py-10 border-y border-line/60 bg-gradient-to-r from-primary-surface/30 via-surface/50 to-secondary-surface/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(70,75,146,0.05) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }} />
      
      <div className="container-main relative">
        <p className="text-center text-[13px] text-ink-muted mb-6">
          اتصال به <span className="font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">۲۰+ درگاه پرداخت</span> و سرویس‌های معتبر
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/80 to-transparent z-10" />
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/80 to-transparent z-10" />
          <div className="flex marquee">
            {[...partners, ...partners].map((name, i) => (
              <div key={i}
                className="shrink-0 mx-6 px-5 py-2.5 text-[14px] font-bold text-ink-muted/50
                           bg-white/70 backdrop-blur-sm border border-line/40 rounded-xl
                           hover:text-primary hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/10
                           transition-all duration-300 select-none whitespace-nowrap">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;

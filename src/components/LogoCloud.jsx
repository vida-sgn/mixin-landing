const brands = ["دیجی‌کالا", "اسنپ", "فیلیمو", "تپسی", "کافه‌بازار", "باسلام", "آپارات", "ایوند", "تخفیفان", "کارنیل"];

const LogoCloud = () => {
  return (
    <section className="py-14 border-y border-line">
      <div className="container-main">
        <p className="text-center text-[13px] text-ink-muted font-medium mb-8">
          مورد اعتماد بیش از <span className="text-white font-bold">۱,۲۰۰+</span> کسب‌وکار ایرانی
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10" />
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="flex marquee">
            {[...brands, ...brands].map((name, i) => (
              <div key={i}
                className="shrink-0 mx-10 text-[17px] font-extrabold text-ink-muted/25
                           hover:text-ink-secondary transition-colors duration-300 select-none whitespace-nowrap">
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

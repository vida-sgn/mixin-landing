const merchants = [
  { name: "دیجی‌کالا", logo: "🛒" },
  { name: "اسنپ", logo: "🚕" },
  { name: "فیلیمو", logo: "🎬" },
  { name: "تپسی", logo: "🚙" },
  { name: "کافه‌بازار", logo: "📱" },
  { name: "آپارات", logo: "▶️" },
];

const stats = [
  { value: "۱۲۰۰+", label: "کسب‌وکار فعال" },
  { value: "۵۰M+", label: "پیام ارسال‌شده" },
  { value: "۹۹.۹٪", label: "آپتایم سرویس" },
  { value: "۴.۸", label: "رضایت مشتریان" },
];

const Merchants = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-dark">
            کسب‌وکارهایی که با ما
            <span className="text-secondary"> رشد </span>
            کردند
          </h2>
          <p className="mt-3 text-ink-light text-sm sm:text-base max-w-md mx-auto">
            بیش از ۱۲۰۰ کسب‌وکار به میکسین اعتماد کردند
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 mb-16">
          {merchants.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center justify-center gap-2 py-6
                         bg-mist rounded-md
                         transition-colors duration-200
                         hover:bg-primary-surface"
            >
              <span className="text-3xl">{m.logo}</span>
              <span className="text-xs font-medium text-ink-light">
                {m.name}
              </span>
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-8
                      bg-primary-surface rounded-xl"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-primary">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink-light">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merchants;

const stats = [
  { value: "۱,۲۰۰", suffix: "+", label: "کسب‌وکار فعال", color: "text-primary-light" },
  { value: "۵۰M", suffix: "+", label: "پیام ارسال‌شده", color: "text-secondary-light" },
  { value: "۹۹.۹", suffix: "٪", label: "آپتایم", color: "text-success-light" },
  { value: "۴.۸", suffix: "/۵", label: "رضایت", color: "text-accent-light" },
];

const Stats = () => {
  return (
    <section className="py-20 relative">
      <div className="container-main">
        <div className="glass rounded-3xl p-10 sm:p-14 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className={`text-4xl sm:text-5xl font-black tracking-tight ${s.color}`}>
                  {s.value}
                  <span className="text-xl opacity-60">{s.suffix}</span>
                </div>
                <div className="text-[13px] text-ink-muted mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

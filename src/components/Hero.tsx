import { IconCheck, IconArrowLeft } from "../assets/icons";
import StoreMockup from "./hero/StoreMockup";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24">

      {/* ───────── Background ───────── */}

      <div className="absolute inset-0 bg-gradient-to-b from-primary-surface/60 via-white to-white" />

      <div
        className="
          absolute
          top-[-12%]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[500px]
          rounded-full
          bg-primary/[0.07]
          blur-[160px]
          animate-gradient
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[20%]
          right-[-10%]
          w-[420px]
          h-[420px]
          rounded-full
          bg-secondary/[0.06]
          blur-[140px]
          animate-float-slow
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[5%]
          left-[-10%]
          w-[350px]
          h-[350px]
          rounded-full
          bg-accent/[0.035]
          blur-[120px]
          animate-float
          pointer-events-none
        "
      />

      {/* Decorative grid */}

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ───────── Scroll Indicator ───────── */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          hidden
          lg:flex
          flex-col
          items-center
          gap-1.5
          animate-bounce-soft
          z-10
        "
      >
        <span className="text-[10px] text-ink-muted/50">
          اسکرول کنید
        </span>

        <div className="
          w-5
          h-8
          rounded-full
          border-2
          border-primary/20
          flex
          items-start
          justify-center
          p-1
        ">
          <div className="
            w-1
            h-2
            rounded-full
            bg-primary/50
            animate-bounce
          " />
        </div>
      </div>

      {/* ───────── Main Content ───────── */}

      <div className="container-main relative">

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-[0.9fr_1.1fr]
          items-center
          gap-10
          lg:gap-14
        ">

          {/* ───────── Text ───────── */}

          <div className="animate-in">

            {/* Eyebrow */}

            <div className="
              inline-flex
              items-center
              gap-2.5
              px-4
              py-2
              mb-5
              text-[12px]
              font-bold
              text-primary
              bg-white/80
              backdrop-blur-sm
              border
              border-primary/20
              rounded-full
              shadow-sm
              shadow-primary/10
            ">
              <span className="
                w-2
                h-2
                rounded-full
                bg-secondary
                animate-pulse
              " />

              سایت ساز میکسین

              <span className="text-ink-secondary">
                بدون نیاز به کدنویسی
              </span>
            </div>

            {/* Heading */}

            <h1 className="
              text-[2.5rem]
              sm:text-5xl
              lg:text-[3.5rem]
              xl:text-[3.8rem]
              font-black
              leading-[1.2]
              tracking-tight
              text-ink
            ">
              فروشگاه آنلاین خودت را بساز
              <br />

              <span className="text-gradient">
                فروشت را چند برابر کن
              </span>
            </h1>

            {/* Description */}

            <p className="
              mt-6
              text-[16px]
              lg:text-[17px]
              text-ink-secondary
              leading-8
              max-w-lg
            ">
              بدون نیاز به دانش فنی، فروشگاه اینترنتی حرفه‌ای خودت را بساز،
              محصولاتت را آنلاین بفروش و با یک فروشگاه حرفه‌ای اعتبار بیشتری
              برای کسب‌وکارت ایجاد کن.
            </p>

            {/* CTA */}

            <div className="
              flex
              flex-wrap
              gap-3
              mt-8
            ">

              <a
                href="#"
                className="
                  group
                  relative
                  px-7
                  py-3.5
                  text-[15px]
                  font-bold
                  text-white
                  bg-gradient-to-l
                  from-primary
                  to-primary-hover
                  rounded-2xl
                  overflow-hidden
                  shadow-lg
                  shadow-primary/25
                  transition-all
                  duration-300
                  hover:shadow-glow
                  hover:-translate-y-0.5
                  active:translate-y-0
                "
              >
                <span className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-2
                ">
                  تست رایگان ۱۴ روزه

                  <IconArrowLeft className="
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  " />
                </span>

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-l
                  from-secondary
                  to-primary
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                " />
              </a>

              <a
                href="#"
                className="
                  px-7
                  py-3.5
                  text-[15px]
                  font-bold
                  text-primary
                  bg-white/80
                  backdrop-blur-sm
                  border-2
                  border-primary/20
                  rounded-2xl
                  shadow-sm
                  transition-all
                  duration-200
                  hover:border-primary/50
                  hover:shadow-card
                  hover:bg-white
                "
              >
                مشاهده نمونه فروشگاه‌ها
              </a>

            </div>

            {/* Benefits */}

            <div className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
              mt-7
            ">
              {[
                "بدون کمیسیون فروش",
                "هاست رایگان",
                "پشتیبانی اختصاصی",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-[13px]
                    text-ink-muted
                  "
                >
                  <IconCheck className="
                    w-3.5
                    h-3.5
                    text-secondary
                  " />

                  {item}
                </span>
              ))}
            </div>

          </div>

          {/* ───────── Visual ───────── */}

          <div className="
            relative
            animate-in
            delay-2
            lg:-ml-6
          ">

            <StoreMockup />

            {/* Floating notification */}
            <div className="
              absolute
              -top-6
              -left-2
              sm:-top-10
              sm:-left-12
              bg-white
              rounded-[2rem]
              pl-7
              pr-3.5
              py-3.5
              shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)]
              border
              border-slate-100
              animate-float
              animate-in
              delay-3
              z-20
            ">
              <div className="
                flex
                items-center
                gap-4
              ">
                {/* Icon Container (Right side in RTL) */}
                <div className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#F0F4F8]
                  flex
                  items-center
                  justify-center
                ">
                  <span className="text-2xl drop-shadow-sm">🎉</span>
                </div>

                {/* Text Details (Left side in RTL) */}
                <div className="flex flex-col">
                  <div className="
                    text-[16px]
                    font-black
                    text-slate-800
                  ">
                    سفارش جدید!
                  </div>
                  <div className="
                    text-[13px]
                    font-bold
                    text-slate-400
                    mt-0.5
                  ">
                    ۸۹۰,۰۰۰ تومان
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
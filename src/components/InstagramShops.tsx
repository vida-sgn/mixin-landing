import { IconInstagram } from "../assets/icons";

const shops = [
  { name: "cheffteh", followers: "۵۴۸ هزار", color: "from-pink-400 to-rose-500" },
  { name: "devin_perfume1", followers: "۵۳۸ هزار", color: "from-amber-300 to-yellow-500" },
  { name: "asadi_watchgallery", followers: "۳۶۸ هزار", color: "from-blue-400 to-indigo-500" },
  { name: "ado_fashion_clothes", followers: "۲۹۴ هزار", color: "from-emerald-400 to-teal-500" },
  { name: "aron_decor_", followers: "۲۶۸ هزار", color: "from-orange-300 to-amber-400" },
  { name: "dar.jeans", followers: "۵۴۳ هزار", color: "from-indigo-400 to-blue-600" },
  { name: "angell_onlineshop", followers: "۴۰۲ هزار", color: "from-purple-400 to-violet-500" },
  { name: "groucci", followers: "۳۶۱ هزار", color: "from-gray-600 to-gray-800" },
  { name: "faranakjuniyan", followers: "۲۸۵ هزار", color: "from-rose-300 to-pink-400" },
  { name: "donna_boutic", followers: "۲۴۹ هزار", color: "from-cyan-400 to-blue-500" },
];

const InstagramShops = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-surface/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-pink-400/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[250px] bg-purple-400/[0.04] rounded-full blur-[100px]" />
      
      <div className="container-main relative">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold
                           text-pink-600 bg-gradient-to-l from-pink-50 to-rose-50
                           rounded-full mb-4 tracking-wider uppercase shadow-sm">
            <IconInstagram className="w-3.5 h-3.5" />
            اینستاگرام
          </span>
          <h2 className="text-3xl sm:text-[2.5rem] font-black text-ink leading-snug">
            آنلاین‌شاپ‌هایی که با <span className="text-gradient">میکسین</span> سایت ساختن
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {shops.map((shop, i) => (
            <div key={shop.name}
              className="group relative bg-white border border-line rounded-2xl overflow-hidden
                         transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2
                         animate-in"
              style={{ animationDelay: `${i * 0.05}s` }}>
              {/* Avatar */}
              <div className={`h-28 bg-gradient-to-br ${shop.color} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `radial-gradient(circle at 3px 3px, rgba(255,255,255,0.5) 1px, transparent 0)`,
                    backgroundSize: "16px 16px",
                  }} />
                <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-sm border-2 border-white/40
                                flex items-center justify-center text-white text-lg font-black
                                group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  {shop.name[0].toUpperCase()}
                </div>
              </div>
              {/* Info */}
              <div className="p-3 text-center">
                <h3 className="text-[12px] font-bold text-ink truncate" dir="ltr">@{shop.name}</h3>
                <p className="text-[11px] text-ink-muted mt-0.5">{shop.followers} دنبال‌کننده</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramShops;

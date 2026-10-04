import {
  Header, Hero, LogoCloud, Features,
  PricingHint, ShopTemplates, InstagramShops,
  GrowthStats, SmartFeatures, BusinessStories,
  Pricing, FAQ, CtaBanner, Footer,
} from "./components";

function App() {
  return (
    <div className="min-h-screen bg-bg relative">
      {/* هاله‌های رنگی */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-5%] right-[10%] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[150px] animate-float-slow" />
        <div className="absolute top-[25%] left-[-8%] w-[500px] h-[500px] bg-secondary/[0.05] rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-[15%] right-[15%] w-[450px] h-[450px] bg-accent/[0.03] rounded-full blur-[130px] animate-gradient" />
        <div className="absolute top-[60%] left-[30%] w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px] animate-float-slow" />
      </div>

      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <PricingHint />
        <ShopTemplates />
        <InstagramShops />
        <GrowthStats />
        <SmartFeatures />
        <BusinessStories />
        <Pricing />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;

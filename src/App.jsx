import {
  Header, Hero, LogoCloud, Features,
  HowItWorks, Services, Stats,
  Testimonials, CtaBanner, Footer,
} from "./components";

function App() {
  return (
    <div className="min-h-screen bg-dark text-ink relative">
      {/* Mesh gradient global background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-[20%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] left-[10%] w-[500px] h-[500px] bg-secondary/6 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[30%] w-[400px] h-[400px] bg-rose/5 rounded-full blur-[150px]" />
      </div>

      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <Services />
        <Stats />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg relative flex flex-col">
        {/* زمینه دکوراتیو */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-5%] right-[10%] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[150px]" />
          <div className="absolute top-[25%] left-[-8%] w-[500px] h-[500px] bg-secondary/[0.05] rounded-full blur-[140px]" />
          <div className="absolute bottom-[15%] right-[15%] w-[450px] h-[450px] bg-accent/[0.03] rounded-full blur-[130px]" />
          <div className="absolute top-[60%] left-[30%] w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />
        </div>

        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
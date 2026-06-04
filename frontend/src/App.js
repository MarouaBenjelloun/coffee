import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ExperiencesSection from "./components/ExperiencesSection";
import GalerieSection from "./components/GalerieSection";
import NouveautesSection from "./components/NouveautesSection";
import InstagramSection from "./components/InstagramSection";
import Footer from "./components/Footer";
import AteliersPage from "./pages/AteliersPage";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ExperiencesSection />
      <GalerieSection />
      <NouveautesSection />
      <InstagramSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ateliers" element={<AteliersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Princing from "./components/Princing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-6 px-6 overflow-x-hidden">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Princing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;

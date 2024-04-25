import Home from "./Components/HomeSection/home";
import About from "./Components/AboutSection/about";
import Service from "./Components/ServiceSection/service";
import Pricing from "./Components/PricingSection/pricing";
import CTA from "./Components/CTASection/cta";
import Process from "./Components/ProcessSection/process";
import Footer from "./Components/Footer/footer";

export default function App() {
  return (
    <>
      <Home />
      <About />
      <Service />
      <Pricing />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}

import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ServicesPreview from "../components/ServicesPreview";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Faq from "../components/Faq";

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <Testimonials />
      <Faq />
    </>
  );
}

export default Home;
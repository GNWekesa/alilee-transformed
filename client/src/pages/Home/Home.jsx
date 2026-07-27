import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import TrainingPrograms from "../../components/home/TrainingPrograms";
import RawMaterials from "../../components/home/RawMaterials";
import Gallery from "../../components/home/Gallery";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import FAQ from "../../components/home/FAQ";
import CTA from "../../components/home/CTA";
import Footer from "../../components/layout/Footer";
import FloatingWhatsApp from "../../components/layout/FloatingWhatsApp";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TrainingPrograms />
      <RawMaterials />
      <Gallery />
      <WhyChooseUs />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Home;
import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import About from "../About/About";
import Courses from "../../components/home/Courses";
import RawMaterials from "../../components/home/RawMaterials";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Gallery from "../../components/home/Gallery";
import CTA from "../../components/home/CTA";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <RawMaterials />
      <WhyChooseUs />
      <Gallery />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
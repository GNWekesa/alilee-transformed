import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import About from "../About/About";
import Courses from "../../components/home/Courses";
import Products from "../../components/home/Products";
import RawMaterials from "../../components/home/RawMaterials";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Gallery from "../../components/home/Gallery";
import FAQ from "../../components/home/FAQ";
import CTA from "../../components/home/CTA";
import Footer from "../../components/layout/Footer";



const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Products />
      <RawMaterials />
      <WhyChooseUs />
      <Gallery />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
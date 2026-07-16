import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import About from "../About/About";
import Services from "../../components/home/Services";
import Categories from "../../components/home/Categories";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import CTA from "../../components/home/CTA";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Categories />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
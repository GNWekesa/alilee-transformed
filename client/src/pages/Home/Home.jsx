import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import Categories from "../../components/home/Categories";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Categories />
      <Footer />
    </>
  );
};

export default Home;
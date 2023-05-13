import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutImg from '../assets/img/night.jpg'
import Footer from "../components/Footer/Footer";
import Aboutus from "../components/AboutUs/Aboutus";
const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName={"hero-mid"}
        heroImg={AboutImg}
        title={"About"}
        btnClass={"hide"}
      />
      <Aboutus />
      <Footer />
    </>
  );
};

export default About;

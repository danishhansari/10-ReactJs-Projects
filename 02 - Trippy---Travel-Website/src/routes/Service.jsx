import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ServiceImg from '../assets/img/1.jpg'
import Footer from "../components/Footer/Footer";
import Trip from "../components/Trip/Trip";
const Service = () => {
    return ( 
        <>
        <Navbar />
        <Hero
          cName={"hero-mid"}
          heroImg={ServiceImg}
          title={"Service"}
          btnClass={"hide"}
        />
        <Trip />
        <Footer />
      </>
     );
}
 
export default Service;
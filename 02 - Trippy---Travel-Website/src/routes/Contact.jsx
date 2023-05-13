import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ContactImg from '../assets/img/2.jpg'
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/Contact/ContactForm";
const Contact = () => {
    return ( 
        <>
        <Navbar />
        <Hero
          cName={"hero-mid"}
          heroImg={ContactImg}
          title={"Contact"}
          btnClass={"hide"}
        />
        <ContactForm />
        <Footer />
      </>
     );
}
 
export default Contact;
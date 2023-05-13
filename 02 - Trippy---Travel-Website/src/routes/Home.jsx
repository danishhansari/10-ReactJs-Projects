import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../assets/img/12.jpg"
import Destination from "../components/Destination/Destination";
import Trip from "../components/Trip/Trip";
import Footer from "../components/Footer/Footer";
const Home = () => {
    return (
    <>
    <Navbar />
    <Hero 
    cName={"hero"}
    heroImg={HeroImg}
    title={"Your Journey Your Story"}
    text={"Choose your Favourite Destination."}
    btnText={"Travel Plan"}
    url={"/"}
    btnClass={"show"}
    />
    <Destination />
    <Trip />
    <Footer />  
    </>
     );
}
 
export default Home;
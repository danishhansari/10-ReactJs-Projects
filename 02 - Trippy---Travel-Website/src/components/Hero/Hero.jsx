import './HeroStyle.css'
const Hero = ({cName,heroImg,title,text,url,btnClass,btnText}) => {
    return ( 
        <>
        <div className={cName}>
            <img src={heroImg} alt="Hero Imag"/>
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{text}</p>
                <a href={url} className={btnClass}>{btnText}</a>
            </div>
        </div>
        </>
     );
}
 
export default Hero;
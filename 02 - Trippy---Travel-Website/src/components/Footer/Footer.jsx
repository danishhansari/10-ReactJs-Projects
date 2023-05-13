import './FooterStyle.css';
const Footer = () => {
    return ( 
        <div className="dark">
        <footer className="footer">
            <div className="top">
                <div className="logo">
                    <h1>Trippy</h1>
                    <p>Choose the favourite destination.</p>
                </div>
                <div className="social">
                    <a href="/"><i className="fa-brands fa-facebook-square"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
                    <a href="/"><i className="fa-brands fa-twitter-square"></i></a>
                    <a href="/"><i className="fa-brands fa-behance-square"></i></a>
                </div>
            </div>
            <div className="bottom">
                <ul>
                    <h4>Project</h4>
                    <li>Changelog</li>
                    <li>Status</li>
                    <li>Licence</li>
                    <li>All Versions</li>
                </ul>
                <ul>
                    <h4>Community</h4>
                    <li>Github</li>
                    <li>Issues</li>
                    <li>Project</li>
                    <li>Twitter</li>
                </ul>
                <ul>
                    <h4>Help</h4>
                    <li>Support</li>
                    <li>Troubleshooting</li>
                    <li>Contact Us</li>
                </ul>
                <ul>
                    <h4>Others</h4>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Licence</li>
                </ul>
            </div>
        </footer>
        </div>
     );
}
 
export default Footer;
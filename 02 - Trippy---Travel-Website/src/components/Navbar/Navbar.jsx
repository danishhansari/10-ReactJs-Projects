import "./NavbarStyle.css";
import {useState} from 'react';
import { Link } from "react-router-dom";
import {MenuItems} from './MenuItems'
const Navbar = () => {
  const [hamburger , setHamburger] = useState(false);
  const ham = () => {
    setHamburger(!hamburger);
  }
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Trippy</h1>
      <li className="mobile-only" onClick={ham}><i className={hamburger ? "fas fa-times" : "fas fa-bars"}></i></li>
        <ul className={hamburger ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
                return(<li key={index}>
                    <Link to={item.url} onClick={ham} className={item.cName} ><i className={item.icon}></i>{item.title}</Link>
                </li>)
            })}
            <li className="nav-link-desktop desktop-only"><a href="/signup">Sign up</a></li>
        </ul>
    </nav>
  );
};
export default Navbar;

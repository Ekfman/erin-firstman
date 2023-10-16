import { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
export function Navbar() {

    const [navToggle, isNavToggle] = useState(false)

    const menuClick = () => {
        isNavToggle(prev => !prev)
    }

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div onClick={menuClick} className={`navbar_toggle ${navToggle ? "is-active" : ""}`} id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar_menu ${navToggle ? "active" : ""}`}>
          <li className="navbar_item">
            <Link to="hero" smooth={true} duration={500} offset={-80} className="navbar_links">
            Home
            </Link>
          </li>
          <li className="navbar_item">
            <Link to="about" smooth={true} duration={500} offset={-80} className="navbar_links">
              About Me
            </Link>
          </li>
          <li className="navbar_item">
            <Link to="projects" smooth={true} duration={500} offset={-80} className="navbar_links">
              Projects
            </Link>
          </li>
          <li className="navbar_item">
            <a href="mailto:ekfirstman.email@gmail.com" className="navbar_links">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

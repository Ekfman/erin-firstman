import { useState } from "react";
import "./navbar.css";
export function Navbar() {

    const [navToggle, isNavToggle] = useState(false)

    const menuClick = () => {
        isNavToggle(prev => !prev)
    }

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <a href="/" id="navbar_logo">
          Erin Firstman
        </a>
        <div onClick={menuClick} className={`navbar_toggle ${navToggle ? "is-active" : ""}`} id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar_menu ${navToggle ? "active" : ""}`}>
          <li className="navbar_item">
            <a href="/" className="navbar_links">
              Home
            </a>
          </li>
          <li className="navbar_item">
            <a href="/" className="navbar_links">
              About Me
            </a>
          </li>
          <li className="navbar_item">
            <a href="/" className="navbar_links">
              Projects
            </a>
          </li>
          <li className="navbar_item">
            <a href="/" className="navbar_links">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

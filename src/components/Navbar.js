import { Link } from "react-scroll";
import "./navbar.css";

const Nabvar = () => {
  return (
    <div className="navbarHeader" >
      <nav className="navbar">
        <li className="nav-link">
          <Link to="home" spy={true} smooth={true} offset={-50} duratoin={500}></Link>Home
        </li>
        <li className="nav-link">
          <Link to="projects" spy={true} smooth={true} offset={-20} duratoin={500}>Projects</Link>
        </li>
        <li className="nav-link">
          <Link to="resume" spy={true} smooth={true} offset={-100} duratoin={500}>Resume</Link>
        </li>
        <li className="nav-link">
          <Link to="contact" spy={true} smooth={true} offset={-100} duratoin={500}>Contact Me</Link>
        </li>
      </nav>
    </div>
  );
};

export default Nabvar;

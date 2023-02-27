import { Link } from "react-scroll";
import "./navbar.css";

const Nabvar = () => {
  return (
    <div className="navbarHeader" >
      <nav className="navbar">
        <li className="nav-link">
          <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
        </li>
        <li className="nav-link">
          <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
        </li>
        <li className="nav-link">
          <Link to="projects" spy={true} smooth={true} offset={-20} duration={500}>Projects</Link>
        </li>
        <li className="nav-link">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contacts</Link>
        </li>
        <li className="nav-link">
          <a src="./assets/Firstman_Resume.pdf">Resume</a>
        </li>
      </nav>
    </div>
  );
};

export default Nabvar;

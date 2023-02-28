import { Link } from "react-scroll";
import "./navbar.css";

const Nabvar = () => {
  return (
    <div className="navbarHeader" >
      <nav className="navbar">
        <div className="name">ERIN FIRSTMAN</div>
        <div className="list">
        <li className="nav-link">
          <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>HOME</Link>
        </li>
        <li className="nav-link">
          <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>ABOUT ME</Link>
        </li>
        <li className="nav-link">
          <Link to="projects" spy={true} smooth={true} offset={-20} duration={500}>PROJECTS</Link>
        </li>
        <li className="nav-link">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>SAY HELLO</Link>
        </li>
        </div>
        <div>
        <div className="resume">
          <a src="./assets/Firstman_Resume.pdf">RESUME</a>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Nabvar;

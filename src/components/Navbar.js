import { Link } from "react-scroll";
import "./navbar.css";

const Nabvar = () => {
  return (
    <div className="navbarHeader" >
      <nav className="navbar">
        <div className="name">ERIN FIRSTMAN</div>
        <div className="list">
        <li className="nav-link">
          <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>// HOME</Link>
        </li>
        <li className="nav-link">
          <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>// ABOUT ME</Link>
        </li>
        <li className="nav-link">
          <Link to="projects" spy={true} smooth={true} offset={-120} duration={500}>// PROJECTS</Link>
        </li>
        <li className="nav-link">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>// SAY HELLO</Link>
        </li>
        </div>
        <div>
          <a href="https://drive.google.com/drive/u/0/search?q=Firstman_Resume"><div className="resume">RESUME</div></a>
        </div>
      </nav>
    </div>
  );
};

export default Nabvar;

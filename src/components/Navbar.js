import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";

const Nabvar = () => {
  return (
    <div className="navbarHeader" >
      <Navbar collapseOnSelect expand="lg">
        <div className="name">ERIN FIRSTMAN</div>
        <Navbar.Toggle style={{"width": "60px"}}></Navbar.Toggle>
        <Navbar.Collapse style={{"justify-content": "center"}}>
        <Nav>
          <Nav.Link href="#home">// HOME</Nav.Link>
          <Nav.Link href="#about" >// ABOUT ME</Nav.Link>
          <Nav.Link href="#projects">// PROJECTS</Nav.Link>
          <Nav.Link href="#contact">// SAY HELLO</Nav.Link>
          <Nav.Link target="_blank" href="https://drive.google.com/drive/u/0/search?q=Firstman_Resume"><div className="resume">RESUME</div></Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
  );
};

export default Nabvar;

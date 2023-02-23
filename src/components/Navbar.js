import { Link } from "react-router-dom";
import "./navbar.css"

const Nabvar = () => {
    return (
        <div className="navbar">
            <ul>
                <li className="nav-link"><Link to="/home"></Link>Home</li>
                <li className="nav-link"><Link to="/projects">Projects</Link></li>
                <li className="nav-link"><Link to="/resume">Resume</Link></li>
                <li className="nav-link"><Link to="contact-me">Contact Me</Link></li>
            </ul>
        </div>
    )
}

export default Nabvar;
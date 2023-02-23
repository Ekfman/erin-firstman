import { Link } from "react-router-dom";

const Nabvar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/"></Link>Home</li>
                <li><Link>Portfolio</Link></li>
                <li><Link>Resume</Link></li>
                <li><Link>Contact Me</Link></li>
            </ul>
        </div>
    )
}

export default Nabvar;
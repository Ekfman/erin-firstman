import "./navbar.css";
export function Navbar() {
  //efefwe
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <a href="/" id="navbar_logo">
          Erin Firstman
        </a>
        <div className="navbar_toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar_menu">
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

import "./footer.css";

export function Footer() {
  return (
    <footer className="footer_container">
      <a href="https://www.linkedin.com/in/erin-firstman/" target="_blank">
        <img
          className="linkedin"
          src="https://img.icons8.com/neon/96/linkedin.png"
          alt="linkedin"
        />
      </a>
      <a href="https://github.com/Ekfman" target="_blank">
        <img
          className="github"
          src="https://img.icons8.com/nolan/64/github.png"
          alt="github"
        />
      </a>
    </footer>
  );
}

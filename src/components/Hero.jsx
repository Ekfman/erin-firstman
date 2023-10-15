import "./hero.css";
import avatar from "./assets/avatar.png";

export function Hero() {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_content">
          <h1>Erin Firstman</h1>
          <h2>Full-stack Software Engineer</h2>
          <p>Addicted to turning ideas into creations</p>
          <button className="main_btn">
            <a href="/">See Projects</a>
          </button>
        </div>
        <div className="main_img_container">
          <img src={avatar} alt="cartoonAvatar" id="main" />
        </div>
      </div>
    </div>
  );
}

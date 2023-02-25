import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hi">Hi.</h1>
      <h1 className="banner">
        My name is <span className="cursiveFont">Erin Firstman</span> <br></br>and I am a
        full-stack <span className="cursiveFont">software developer</span>.
      </h1>
    </div>
  );
};

export default Hero;

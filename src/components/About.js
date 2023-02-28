import { useState, useEffect } from "react";
import avatarArr from "./assets/avatarArray";
import "./about.css";

const About = () => {
  console.log(avatarArr);
  const [num, setNum] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setNum((prev) => (prev < 10 ? prev + 1 : prev));
    }, 300);
  }, []);
  return (
    <div className="parentContainer" id="about">
      <div className="imgBio">
        <img src={require(`./assets/avatarAnimation/${num}.png`)}></img>
        <div className="bio-container">
          
          <div className="bio-box">
          <h2 className="snapshot">A SNAPSHOT OF ME.</h2>
          <h3>where I began</h3>
          <p className="content">
            Originally my career started in marketing. I've worn many hats from
            managing seven social media channels, repairing and modernizing
            websites, project management for key marketing initiatives, and
            serving as a sounding board for several internal groups.
          </p>
          <h3>something was missing</h3>
          <p className="content">
            After realizing that my favorite part of my marketing roles revolved
            around the websites and indirect customer interaction through UI, I
            knew my passion was somewhere else.
          </p>
          <h3>career change</h3>
          <p className="content">
            In July of 2022, I began a 6-month Web Development program. While
            learning the PERN stack,
            I also discovered my love for technical problem-solving. The "high"
            from fixing a bug after countless sighs, face-rubbing, and
            keyboard-smashing is an incomparable feeling.
          </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { useState, useEffect, useRef } from "react";
import avatarArr from "./assets/avatarArray";
import "./about.css";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: aboutContainer, inView: bioVisible } = useInView();

  const [num, setNum] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setNum((prev) => (prev < 7 ? prev + 1 : prev));
    }, 300);
  }, []);

  return (
    <div className="parentContainer" id="about">
      <div className="imgBio" id="scroll-item" ref={aboutContainer}>
        <img className={bioVisible && "av-animate"} src={require(`./assets/avatarAnimation/${num}.png`)}></img>
        <div className="bio-container" >
          <div className={bioVisible ? "bio-box-animate" : "bio-box"}>
            <h2 className="snapshot">A SNAPSHOT OF ME.</h2>
            <h3>where I began</h3>
            <p className={bioVisible ? "content-animate" : "content"}>
              Originally my career started in marketing. I've worn many hats
              from managing seven social media channels, repairing and
              modernizing websites, project management for key marketing
              initiatives, and serving as a sounding board for several internal
              groups.
            </p>
            <h3>something was missing</h3>
            <p className={bioVisible ? "content-animate" : "content"}>
              After realizing that my favorite part of my marketing roles
              revolved around the websites and indirect customer interaction
              through UI, I knew my passion was somewhere else.
            </p>
            <h3>career change</h3>
            <p className={bioVisible ? "content-animate" : "content"}>
              In July of 2022, I began a 6-month Web Development program. While
              learning the PERN stack, I also discovered my love for technical
              problem-solving. I view all projects like a game, and solving each
              bug as a level to complete. This mindset makes me addicted to
              process and love what I do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

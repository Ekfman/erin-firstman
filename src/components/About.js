import { useState, useEffect, useRef } from "react";
import avatarArr from "./assets/avatarArray";
import "./about.css";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: aboutContainer, inView: bioVisible } = useInView();
  const [meHover, setMeHover] = useState(false);
  const [frontHover, setFrontHover] = useState(false);
  const [toolsHover, setToolsHover] = useState(false);
  const [backHover, setBackHover] = useState(false);

  const puzzleMeHover = () => {
    setMeHover((prev) => !prev);
  };

  const puzzleMeOffHover = () => {
    setMeHover((prev) => !prev);
  };

  const puzzleFrontHover = () => {
    setFrontHover((prev) => !prev);
  };

  const puzzleFrontOffHover = () => {
    setFrontHover((prev) => !prev);
  };

  const puzzleToolsHover = () => {
    setToolsHover((prev) => !prev);
  };

  const puzzleToolsOffHover = () => {
    setToolsHover((prev) => !prev);
  };

  const puzzleBackHover = () => {
    setBackHover((prev) => !prev);
  };

  const puzzleBackOffHover = () => {
    setBackHover((prev) => !prev);
  };
  console.log(frontHover);
  return (
    <div className="parentContainer" id="about">
      <center>
        <h3 className="quote">
          "Coding is like a puzzle. Pieces are constantly falling on the
          floor." -Steve Jobs (rumored)
      </h3>
      </center>
      <div>
        <div className="imgBio" id="scroll-item" ref={aboutContainer}>
          <div className="puzzle">
            <div className="puzzle-top">
              <img
              className={frontHover ? "puzzle-me-animation" : "puzzle-frontend"}
                src={require("./assets/puzzle/puzzle_frontend.png")}
                onMouseEnter={puzzleFrontHover}
                onMouseLeave={puzzleFrontOffHover}
              ></img>
              <img
                className={meHover ? "puzzle-me-animation" : "puzzle-me"}
                src={require("./assets/puzzle/puzzle_me.png")}
                onMouseEnter={puzzleMeHover}
                onMouseLeave={puzzleMeOffHover}
              ></img>
            </div>
            <div className="puzzle-bottom">
              <img
                className={toolsHover ? "puzzle-me-animation" : "puzzle-tools"}
                src={require("./assets/puzzle/puzzle_tools.png")}
                onMouseEnter={puzzleToolsHover}
                onMouseLeave={puzzleToolsOffHover}
              ></img>
              <img
                className={backHover ? "puzzle-backend-animation" : "puzzle-backend"}
                src={require("./assets/puzzle/puzzle_backend.png")}
                onMouseEnter={puzzleBackHover}
                onMouseLeave={puzzleBackOffHover}
              ></img>
            </div>
          </div>
          <div className="bio">
            {!meHover && !frontHover && !toolsHover && !backHover && <h3>Hover over a puzzle piece</h3>}
            {meHover && (
              <div className="under-text">
                <h3>Who am I?</h3>
                <p> I am addicted to creation and solving problems.</p>
                <h4>Achiever</h4>
                <p>Constantly setting and achieving short term and long term goals.</p>
                <h4>Reliable</h4>
                <p>I put the teams needs ahead of my own personal agenda.</p>
                <h4>Leader</h4>
                <p>Inspire others through example, and take on extra work where others can't</p>
              </div>
            )}
            {frontHover && (
              <div>
                <h3>Front-end Skills</h3>
                <div className="technologies">
                  <div>
                    <img
                      alt="JavaScript Icon"
                      src={require("./assets/tech_pngs/javascript.png")}
                    ></img>
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <img
                      alt="React Icon"
                      src={require("./assets/tech_pngs/react.png")}
                    ></img>
                    <p>React</p>
                  </div>
                  <div>
                    <img
                      alt="React Icon"
                      src={require("./assets/tech_pngs/react.png")}
                    ></img>
                    <p>HTML5</p>
                  </div>
                  <div>
                    <img
                      alt="React Icon"
                      src={require("./assets/tech_pngs/react.png")}
                    ></img>
                    <p>CSS3</p>
                  </div>
                </div>
              </div>
            )}
            {toolsHover && (
              <div>
                <h3>Tools Experience</h3>
                <div className="technologies">
                  <div>
                    <img
                      alt="JavaScript Icon"
                      src={require("./assets/tech_pngs/javascript.png")}
                    ></img>
                    <p>Git</p>
                  </div>
                  <div>
                    <img
                      alt="JavaScript Icon"
                      src={require("./assets/tech_pngs/javascript.png")}
                    ></img>
                    <p>Thunder Client</p>
                  </div>
                  <div>
                    <img
                      alt="JavaScript Icon"
                      src={require("./assets/tech_pngs/javascript.png")}
                    ></img>
                    <p>Netifly</p>
                  </div>
                  <div>
                    <img
                      alt="JavaScript Icon"
                      src={require("./assets/tech_pngs/javascript.png")}
                    ></img>
                    <p>Heroku</p>
                  </div>
                  <div>
                    <img
                      alt="JavaScript Icon"
                      src={require("./assets/tech_pngs/javascript.png")}
                    ></img>
                    <p>Webpack</p>
                  </div>
                  <div>
                    <img
                      alt="JavaScript Icon"
                      src={require("./assets/tech_pngs/javascript.png")}
                    ></img>
                    <p>Postico</p>
                  </div>
                </div>
              </div>
            )}
            {backHover && (
              <div>
                <h3>Back-end Skills</h3>
                <div className="technologies">
                  <div>
                    <img
                      alt="JavaScript Icon"
                      src={require("./assets/tech_pngs/javascript.png")}
                    ></img>
                    <p>Node</p>
                  </div>
                  <div>
                    <img
                      alt="React Icon"
                      src={require("./assets/tech_pngs/react.png")}
                    ></img>
                    <p>Express</p>
                  </div>
                  <div>
                    <img
                      alt="React Icon"
                      src={require("./assets/tech_pngs/react.png")}
                    ></img>
                    <p>PSQL</p>
                  </div>
                  <div>
                    <img
                      alt="React Icon"
                      src={require("./assets/tech_pngs/react.png")}
                    ></img>
                    <p>CSS3</p>
                  </div>
                  <div>
                    <img
                      alt="React Icon"
                      src={require("./assets/tech_pngs/react.png")}
                    ></img>
                    <p>RESTful API</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

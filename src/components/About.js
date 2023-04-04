import { useState, useEffect, useRef } from "react";
import "./about.css";
import { useInView } from "react-intersection-observer";
import {Image} from "react-bootstrap"

const About = () => {
  const { ref: aboutContainer, inView: bioVisible } = useInView();
  const { ref: bioContainer, inView: hoverOver } = useInView();
  const { ref: techContainer, inView: iconsVisible } = useInView();
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
          {/* "Coding is the greatest jig-saw puzzle to solve." - Mark Zuckerberg (rumored) */}
      </h3>
      </center>
      <div>
        <div className="imgBio" id="scroll-item" ref={aboutContainer}>
          <div className={bioVisible ? "puzzle-animation" :"puzzle"}>
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
          <div ref={bioContainer} className="bio">
            {!meHover && !frontHover && !toolsHover && !backHover && <h3 className={ hoverOver && "hover-animation"}>Hover over a puzzle piece</h3>}
            {meHover && (
              <div className={hoverOver && "under-text-animation"}>
                <h3 style={{"margin-bottom": "1em"}}>Who am I?</h3>
                <p className="blurb"> I am addicted to creation and solving problems.</p>
                <h4>Achiever</h4>
                <p>Constantly setting and achieving short- and long-term goals</p>
                <h4>Reliable</h4>
                <p>Put the teams needs ahead of my own personal agenda</p>
                <h4>Leader</h4>
                <p>Inspire people through example, and take on extra work</p>
              </div>
            )}
            <div ref={techContainer}>
            {frontHover && (
              <div className={iconsVisible ? "bio-description-wrapper-animation" : "bio-description-wrapper"}>
                <center><h3>Front-end Skills</h3></center>
                <div className="technologies">
                  <div className="tools">
                    <Image fluid
                      alt="JavaScript Icon"
                      src={require("./assets/tech_pngs/javascript.png")}
                    ></Image>
                    <p> JavaScript</p>
                  </div>
                  <div className="tools">
                    <img
                      alt="React Icon"
                      src={require("./assets/tech_pngs/react.png")}
                    ></img>
                    <p> React</p>
                  </div>
                  <div className="tools">
                    <img
                      alt="Typescript Icon"
                      src={require("./assets/tech_pngs/typescript.png")}
                    ></img>
                    <p> Typescript</p>
                  </div>
                  <div className="tools">
                    <img
                      alt="HTML5 Icon"
                      src={require("./assets/tech_pngs/html.png")}
                    ></img>
                    <p> HTML5</p>
                  </div>
                  <div className="tools">
                    <img
                      alt="CSS3 Icon"
                      src={require("./assets/tech_pngs/css.png")}
                    ></img>
                    <p> CSS3</p>
                  </div>
                </div>
              </div>
            )}
            {toolsHover && (
              <div className={iconsVisible ? "bio-description-wrapper-animation" : "bio-description-wrapper"}>
                <center><h3>Tools</h3></center>
                <div className="technologies">
                  <div className="tools">
                    <img
                      alt="Git Icon"
                      src={require("./assets/tech_pngs/git.png")}
                    ></img>
                    <p>Git</p>
                  </div>
                  <div className="tools">
                    <img
                      alt="Thunder Client Icon"
                      src={require("./assets/tech_pngs/thunderclient.webp")}
                    ></img>
                    <p>Thunder Client</p>
                  </div>
                  <div className="tools">
                    <img
                      alt="Netifly Icon"
                      src={require("./assets/tech_pngs/netifly.webp")}
                    ></img>
                    <p>Netifly</p>
                  </div>
                  <div className="tools">
                    <img
                      alt="Heroku Icon"
                      src={require("./assets/tech_pngs/heroku.png")}
                    ></img>
                    <p>Heroku</p>
                  </div>
                  <div className="tools">
                    <img
                      alt="Webpack Icon"
                      src={require("./assets/tech_pngs/webpack.png")}
                    ></img>
                    <p>Webpack</p>
                  </div>
                  <div className="tools">
                    <img
                      alt="Postico Icon"
                      src={require("./assets/tech_pngs/postico.png")}
                    ></img>
                    <p>Postico</p>
                  </div>
                </div>
              </div>
            )}
            {backHover && (
              <div className={iconsVisible ? "bio-description-wrapper-animation" : "bio-description-wrapper"}>
                <center><h3>Back-end Skills</h3></center>
                <div className="technologies">
                  <div className="tools">
                    <img
                      alt="Node Icon"
                      src={require("./assets/tech_pngs/node.png")}
                    ></img>
                    <p>Node</p>
                  </div>
                  <div className="tools">
                    <img
                      alt="Express Icon"
                      src={require("./assets/tech_pngs/express.png")}
                    ></img>
                    <p>Express</p>
                  </div>
                  <div className="tools">
                    <Image
                      alt="PSQL Icon"
                      src={require("./assets/tech_pngs/psql.png")}
                    ></Image>
                    <p>PostgreSQL</p>
                  </div>
                  <div className="tools">
                    <img
                      alt="API Icon"
                      src={require("./assets/tech_pngs/apiIcon.png")}
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
    </div>
  );
};

export default About;

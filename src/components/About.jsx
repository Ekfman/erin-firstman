import "./about.css";
import reactIcon from "./assets/tech_pngs/react.png";
import jsIcon from "./assets/tech_pngs/javascript.png";
import tsIcon from "./assets/tech_pngs/typescript.png";
import cssIcon from "./assets/tech_pngs/css.png";
import htmlIcon from "./assets/tech_pngs/html.png";
import nodeIcon from "./assets/tech_pngs/node.png";
import expressIcon from "./assets/tech_pngs/express.png";
import apiIcon from "./assets/tech_pngs/apiIcon.png";
import psqlIcon from "./assets/tech_pngs/psql.png";
import playwrightIcon from "./assets/tech_pngs/playwright.png";
import posticoIcon from "./assets/tech_pngs/postico.png";
import gitIcon from "./assets/tech_pngs/git.png";
import jestIcon from "./assets/tech_pngs/jest.png";
import { Element } from "react-scroll";

export function About() {
  return (
    <Element name="about">
      <div className="about_me">
        <div className="about_me_container">
        <div className="about_me_content_container">
          <div className="about_me_content">
            <p>
              My career originally began in Marketing. Working with website UI
              in my previous roles, I became fascinated by computer-to-human
              interaction and enrolled in an accelerated Full-stack Software
              Development program.
            </p>
          </div>
          <div className="about_me_content">
            <p>
              With my background in Marketing, I can bring a unique perspective
              to the Software Development team, one that allows me to understand
              user needs, identify market trends, and effectively communicate
              across departments.
            </p>
          </div>
        </div>
        <div className="about_me_btns_container">
          <div className="about_me_btns">
            <button>Front-end</button>
            <div className="techWrapper">
              <div className="icon_and_name">
                <img className="techIcon" alt="HTML Icon" src={htmlIcon}></img>
                <p>HTML</p>
              </div>
              <div className="icon_and_name">
                <img className="techIcon" alt="CSS Icon" src={cssIcon}></img>
                <p>CSS</p>
              </div>
              <div className="icon_and_name">
                <img
                  className="techIcon"
                  alt="JavaScript Icon"
                  src={jsIcon}
                ></img>
                <p>JavaScript</p>
              </div>
              <div className="icon_and_name">
                <img
                  className="techIcon"
                  alt="React icon"
                  src={reactIcon}
                ></img>
                <p>React</p>
              </div>
              <div className="icon_and_name">
                <img
                  className="techIcon"
                  alt="TypeScript icon"
                  src={tsIcon}
                ></img>
                <p>TypeScript</p>
              </div>
            </div>
          </div>
          <div className="about_me_btns">
            <button>Back-end</button>
            <div className="techWrapper">
              <div className="icon_and_name">
                <img className="techIcon" alt="Node Icon" src={nodeIcon}></img>
                <p>Node</p>
              </div>
              <div className="icon_and_name">
                <img
                  className="techIcon"
                  alt="Express Icon"
                  src={expressIcon}
                ></img>
                <p>Express</p>
              </div>
              <div className="icon_and_name">
                <img
                  className="techIcon"
                  alt="PostgreSQL Icon"
                  src={psqlIcon}
                ></img>
                <p>PSQL</p>
              </div>
              <div className="icon_and_name">
                <img
                  className="techIcon"
                  alt="RESTful API icon"
                  src={apiIcon}
                ></img>
                <p>RESTful API</p>
              </div>
            </div>
          </div>
          <div className="about_me_btns">
            <button>Tools</button>
            <div className="techWrapper">
              <div className="icon_and_name">
                <img className="techIcon" alt="Git icon" src={gitIcon}></img>
                <p>Git</p>
              </div>
              <div className="icon_and_name">
                <img
                  className="techIcon"
                  alt="Postico icon"
                  src={posticoIcon}
                ></img>
                <p>Postico</p>
              </div>
              <div className="icon_and_name">
                <img
                  className="techIcon"
                  alt="Playwright icon"
                  src={playwrightIcon}
                ></img>
                <p>Playwright</p>
              </div>
              <div className="icon_and_name">
                <img className="techIcon" alt="Jest icon" src={jestIcon}></img>
                <p>Jest</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Element>
  );
}

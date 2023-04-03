import "./projects.css";
import { useInView } from "react-intersection-observer";
import { Col, Row, Container } from "react-bootstrap";
import 'animate.css'
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const { ref: projectOne, inView: projOneVisible } = useInView();
  const { ref: projTwo, inView: projTwoVisible } = useInView();
  const { ref: projThree, inView: projThreeVisible } = useInView();

  console.log(projOneVisible);

  return (
    <Container
      id="projects"
      className="margin-top"
      style={{ "padding-bottom": "8em"}}
      fluid
    >
      <Row>
        <Col></Col>
        <Col lg={12}>
          <Row>
            <h2
              style={{
                textAlign: "center",
                "margin-top": "3em",
                "font-size": "2.1em",
              }}
            >
              MY PROJECTS
            </h2>
          </Row>
          <div className="project-container" ref={projectOne}>
            <Row style={{"height": "100%", "align-items": "center"}}>
              <Col md style={{ "text-align": "center" }} 
                className= {projOneVisible
                ? "projectImg-title-animation"
                : "projectImg-title"}
              >
                <h3>Confidant</h3>
                <div className="tech">
                  <p>JavaScript</p>
                  <p>React</p>
                  <p>Redux</p>
                  <p>CSS3</p>
                  <p>HTML5</p>
                  <p>Node</p>
                  <p>Express</p>
                  <p>PSQL</p>
                  <p>RESTful API</p>
                </div>
                <p className="project-description">
                  An electronic journal for those who enjoy writing but don't
                  have enough time or energy. When nostalgia or curiousity hits,
                  users can easily find and view their past entries. Intuitive
                  UI, mimicking an event calendar.
                </p>
                <p className="small-print">
                  Note: App hosted on Heroku, please allow up to 30 seconds for
                  it to initially load.
                </p>
                <div className="project-access">
                  <a target="_blank" href="https://confidant.herokuapp.com/">
                    <button>Live Site</button>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Ekfman/e-journal"
                    style={{ "margin-left": ".5em" }}
                  >
                    <button>Source Code</button>
                  </a>
                </div>
              </Col>
              <Col md
              className={
                projOneVisible ? "projectImg-animation" : "projectImg"
              }
                // className="col-xs-12"
              >
                {/* <div className={
                  projOneVisible ? "projectImg-animation" : "projectImg"
                }></div> */}
                <img
                  // className="projectImg"
                  src={require("./assets/e-journal_imgs/calendarView.png")}
                ></img>
              </Col>
            </Row>
          </div>
          <div className="project-container" ref={projTwo}>
            <Row>
              <Col md
              className={
                  projOneVisible ? "projectImg-animation2" : "projectImg"}
                >
                <img
                  // className="projectImg"
                  src={require("./assets/e-commerce_imgs/homescreen.png")}
                ></img>
              </Col>
              <Col md style={{ "text-align": "center" }}
              className={
                projOneVisible
                  ? "projectImg-title-animation2"
                  : "projectImg-title"
              }
              >
                <h3>Sticky Situations</h3>
                <div className="tech">
                  <p>JavaScript</p>
                  <p>React</p>
                  <p>CSS3</p>
                  <p>HTML5</p>
                  <p>Node</p>
                  <p>Express</p>
                  <p>PSQL</p>
                  <p>RESTful API</p>
                </div>
                <p className="project-description">
                  Personalize your items with minimalistic sticker designs.
                  Registered users can view purchase history, and admins can
                  access user information.
                </p>
                <p style={{ "margin-top": "1em" }}>
                  (Collaborators: Michael McEwing, Thuan Tran, Kim Troung)
                </p>
                <p className="small-print">
                  Note: App hosted on Heroku, please allow up to 30 seconds for
                  it to initially load.
                </p>
                <div className="project-access">
                  <a target="_blank" href="https://confidant.herokuapp.com/">
                    <button>Live Site</button>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Err-Handlers/GraceShopper"
                    style={{ "margin-left": ".5em" }}
                  >
                    <button>Source Code</button>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="project-container" ref={projThree}>
          <Row>
            <Col md style={{ "text-align": "center" }}
              >
                <div className={
                projThreeVisible
                  ? "projectImg-title-animation"
                  : "projectImg-title"
              }>

                <h3>The Auction Attic</h3>
                <div className="tech">
                  <p>JavaScript</p>
                  <p>React</p>
                  <p>CSS3</p>
                  <p>HTML5</p>
                </div>
                <p className="project-description">
                  All users can browse and search for secondhand items.
                  Registered users can post, edit and delete listings, and also
                  send and receieve inquiries. Connected to a pre-existing
                  back-end.
                </p>
                <div className="project-access">
                  <a
                    target="_blank"
                    href="https://the-auction-attic.netlify.app/"
                  >
                    <button className="secondhand-button">Live Site</button>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Ekfman/Craigstlist-Project"
                    style={{ "margin-left": ".5em" }}
                  >
                    <button>Source Code</button>
                  </a>
                </div>
                </div>
            </Col>
            <Col md
              className={
                projThreeVisible ? "projectImg-animation" : "projectImg"
              }
              >
              <img
                // className="projectImg"
                src={require("./assets/secondhandStore/home.png")}
              ></img>
            </Col>
          </Row>
          </div>
          
        </Col>
        <Col></Col>
      </Row>
      {/* <center>
        <h2 className={projHeadVis ? "projHead-animate" : "project-title"}>
          MY PROJECTS
        </h2>
        <div className="project-container" ref={projectContainer}>
          <div
            className={projectVisible ? "project-animate" : "projectImg-title"}
          >
            <img
              className="projectImg"
              src={require("./assets/e-journal_imgs/calendarView.png")}
            ></img>
            <h3>
              Confidant
              <p
                className={
                  projectVisible ? "project-type-animate" : "project-type"
                }
              >
                electronic journal
              </p>
            </h3>
            <p className="project-description">
              Confidant is for those who enjoy journaling, but don't have the
              time or energy. When nostalgia or curiousity hits, users can
              easily find and view their past entries.
            </p>
            <a target="_blank" href="https://confidant.herokuapp.com/">
              <button>Check it out</button>
            </a>
          </div>
          <div
            className={projectVisible ? "project-animate" : "projectImg-title"}
          >
            <img
              className="projectImg"
              src={require("./assets/e-commerce_imgs/homescreen.png")}
            ></img>
            <h3>
              Sticky Situations{" "}
              <p
                className={
                  projectVisible ? "project-type-animate" : "project-type"
                }
              >
                e-commerce site
              </p>
            </h3>
            <p className="project-description">
              Personalize your items with minimalistic sticker designs.
              Registered users can view purchase
              history, and admins can access user information.
            </p>
            <a
            target="_blank"
              href={
                "https://www.youtube.com/watch?v=GfMReVr7MLk&list=PLH8yf4pGZM236BFvuXyBrz1M5CGdc8zRe&index=5"
              }
            >
              <button>Check it out</button>
            </a>
          </div>
          <div
            className={projectVisible ? "project-animate" : "projectImg-title"}
          >
            <img
              className="projectImg"
              src={require("./assets/secondhandStore/home.png")}
            ></img>
            <h3>
              The Auction Attic
              <p
                className={
                  projectVisible ? "project-type-animate" : "project-type"
                }
              >
                secondhand marketplace
              </p>
            </h3>
            <p className="project-description">
              All users can browse and search for secondhand items. Registered
              users can post, edit and delete listings, and also send and
              receieve inquiries.
            </p>
            <a target="_blank" href="https://the-auction-attic.netlify.app/">
              <button className="secondhand-button">Check it out</button>
            </a>
          </div>
        </div>
      </center> */}
    </Container>
  );
};

export default Projects;

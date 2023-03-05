import "./projects.css";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref: projectsHeader, inView: projHeadVis } = useInView();
  const { ref: projectContainer, inView: projectVisible } = useInView();

  console.log(projHeadVis);

  return (
    <div id="projects" className="margin-top" ref={projectsHeader}>
      <center>
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
            <a href="https://confidant.herokuapp.com/">
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
            <a href="https://funny-cheesecake-f25f49.netlify.app/">
              <button className="secondhand-button">Check it out</button>
            </a>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Projects;

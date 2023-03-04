import { useState } from "react";
import journalArr from "./assets/e-journalArray";
import "./projects.css";

const Projects = () => {
  const [digitalDiaryImg, setDigitalDiaryImg] = useState([]);
  return (
    <div id="projects" className="margin-top">
        <center>
      <h2 className="project-title">MY PROJECTS</h2>
      <div className="project-container">
        <div className="projectImg-title">
          <img className="projectImg" src={require("./assets/e-journal_imgs/calendarView.png")}></img>
          <h3>Confidant<p className="project-type">electronic journal</p></h3>
          <p className="project-description">
            Confidant is for those who enjoy journaling, but grow a tired hand, or no longer have the time. The fun part about this app is
            that users can easily find and view their past entries.
          </p>
        </div>
        <div className="projectImg-title">
          <img className="projectImg" src={require("./assets/e-commerce_imgs/homescreen.png")}></img>
          <h3>Sticky Situations <p className="project-type">e-commerce site</p></h3>
          <p className="project-description">
            An online sticker storefront where users can browse and add items to a persisting cart. Registered users can view their
            purchase history, and admins can access user information.
          </p>
        </div>
        <div className="projectImg-title">
          <img className="projectImg" src={require("./assets/secondhandStore/home.png")}></img>
          <h3>The Auction Attic <p className="project-type">secondhand marketplace</p></h3>
          <p className="project-description">
            Users are directed to the homepage with a view of all the listings. If registered, users can inquire about a
            specific item, and post, edit and delete their own listings.
          </p>
        </div>
      </div>
    </center>
    </div>
  );
};

export default Projects;

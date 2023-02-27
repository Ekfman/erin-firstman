import { useState } from "react";
import journalArr from "./assets/e-journalArray";
import "./projects.css";

const Projects = () => {
  const [digitalDiaryImg, setDigitalDiaryImg] = useState([]);
  return (
    <div id="projects">
        <center>
            <div className="component-line">hi</div>
      <h1 className="snapshot">MY PROJECTS.</h1>
      <div className="project-container">
        <div className="projectImg-title">
          <img className="projectImg" src={require("./assets/e-journal_imgs/calendarView.png")}></img>
          <h3>Confidant<p className="project-type">Electronic Journal</p></h3>
          <p>
            Confidant is for those who find
            writing their thoughts and experiences as therapeutic, but get tired
            of writing or don't have time to. The fun part about this web app is
            that users can easily find and view their past entries, even from
            years ago.
          </p>
        </div>
        <div className="projectImg-title">
          <img className="projectImg" src={require("./assets/e-commerce_imgs/homescreen.png")}></img>
          <h3>Sticky Situations <p className="project-type">E-commerce Sticker Site</p></h3>
          <p>
            An online sticker storefront where users can browse and add items to a persisting cart. Registered users can view their
            purchase history, and admins can access user information.
          </p>
        </div>
        <div className="projectImg-title">
          <img className="projectImg" src={require("./assets/secondhandStore/home.png")}></img>
          <h3>The Auction Attic <p className="project-type">Online Secondhand Marketplace</p></h3>
          <p>
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

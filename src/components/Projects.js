import { useState } from "react";
import journalArr from "./assets/e-journalArray";

const Projects = () => {
    const [digitalDiaryImg, setDigitalDiaryImg] = useState([]);
    return (
        <div>
            <h2>Check out my projects.</h2>
            <div className="project-container">
            <img src={require("./assets/e-journal_imgs/calendarView.png")}></img>
            <h3>Digital Diary</h3>
            </div>
            <div>
                <img src={require("./assets/e-commerce_imgs/homescreen.png")}></img>
                <h3>E-commerce Sticker Site</h3>
            </div>
            <div>
                <h3>Online Secondhand Marketplace</h3>
                <img src= {require("./assets/secondhandStore/home.png")}></img>
            </div>
        </div>
    )
}

export default Projects;

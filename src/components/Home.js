import { useState, useEffect } from "react";
import avatarArr from "./assets/avatarArray";
import "./home.css"
const Home = () => {
    console.log(avatarArr);
    const [num, setNum] =  useState(1);
    useEffect( () => {
        setInterval( () => {
                setNum( prev => prev < 9 ? prev + 1 : prev)
        }, 300)
    }, [])
    return (
    <div className="parentContainer" id="home">
      <h1>A SNAPSHOT OF ME.</h1>
      <div>
        {/* {avatarArr.map( (img) => {
            return (
            <img alt="Image of my avatar" src={require(`./assets/${img}`)}/>)
        })} */}
      </div>
      <div className="imgBio">
      <img src={require(`./assets/avatarAnimation/${num}.png`)}></img>
      <div>
      <h3>Where I began</h3>
      <p>
        Originally my career started in marketing. I've worn many hats from
        managing seven social media channels, repairing and modernizing
        websites, project management for key marketing initiatives, and serving
        as a sounding board for several internal groups.
      </p>
      <h3>Something was missing...</h3>
      <p>
        After realizing that my favorite part of my marketing roles revolved
        around the websites and indirect customer interaction through UI, I knew
        my passion was somewhere else.
      </p>
      <h3>Career Change</h3>
      <p>
        In July of 2022, I began a 6-month Software Developer program. While
        learning the PERN stack (postgreSQL, Express.js, React.js, Node.js) I
        also discovered my love for technical problem-solving. The high from
        fixing a bug after countless sighs, face-rubbing, and keyboard-smashing
        is an incomparable feeling.
      </p>
      </div>
      </div>
    </div>
  );
};

export default Home;

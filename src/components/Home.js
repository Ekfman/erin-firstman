import { useState, useEffect } from "react";
import avatarArr from "./assets/avatarArray";
import "./home.css"
const Home = () => {
    console.log(avatarArr);
    const [num, setNum] =  useState(1);
    useEffect( () => {
        setInterval( () => {
                setNum( prev => prev < 10 ? prev + 1 : prev)
        }, 300)
    }, [])
    return (
    <div className="parentContainer" id="home">
        <div className="intro">
        <h1 className="hi">Hi.</h1>
      <h1 className="banner">
        My name is <span className="cursiveFont">Erin Firstman</span> and I am a
        full-stack <span>software developer</span>.
      </h1>
        </div>
      <div className="imgBio">
      <img src={require(`./assets/avatarAnimation/${num}.png`)}></img>
      <div>
      <h1 className="snapshot">A SNAPSHOT OF ME.</h1>
      <h3>Where I began</h3>
      <p className="content">
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

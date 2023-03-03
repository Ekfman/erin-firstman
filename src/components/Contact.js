import { useNavigate } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-container">
    <form id="contact" className="form">
      <div className="hello-div">
        <h2>SAY</h2>
        <h2 className="hello">HELLO!</h2>
        <div className="icons">
          <a  href="https://www.linkedin.com/in/erin-firstman/"><img className="icon" src={require("./assets/icons/linkedInIcon.png")} alt="linkedInLogo"></img></a>
          <a href="https://github.com/Ekfman"><img className="icon" src={require("./assets/icons/githubIcon.png")} alt="githublogo"></img></a>
        </div>
      </div>
      <div className="contact">
        <div className="name-email-div">
          <div className="form-label">
            <label>NAME</label>
            <input></input>
          </div>
          <div className="form-label">
            <label>EMAIL</label>
            <input></input>
          </div>
        </div>
        <br></br>
        <div className="message-div">
          <label>MESSAGE</label>
          <textarea className="contact-message"></textarea>
        </div>
        <center><button>SEND</button></center>
      </div>
    </form>
    </div>
  );
};

export default Contact;

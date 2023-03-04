import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ikvh2n', 'template_vkiqcub', form.current, 'cucx8rZQRLEWqTH2L')
      .then((result) => {
          console.log(result.text);
          console.log("message Sent");
          setEmailSent(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-container">
    <div id="contact" className="form">
      <div className="hello-div">
        <h2>SAY</h2>
        <h2 className="hello">HELLO!</h2>
        <div className="icons">
          <a  href="https://www.linkedin.com/in/erin-firstman/"><img className="icon" src={require("./assets/icons/linkedInIcon.png")} alt="linkedInLogo"></img></a>
          <a href="https://github.com/Ekfman"><img className="icon" src={require("./assets/icons/githubIcon.png")} alt="githublogo"></img></a>
        </div>
      </div>
      <form className="contact" ref={form}>
        {emailSent ? (
          <h2>Thank you for your email!</h2>
        ) : (
          <>
          <div className="name-email-div">
            <div className="form-label">
              <label>NAME</label>
              <input type="text" name="user_name"></input>
            </div>
            <div className="form-label">
              <label>EMAIL</label>
              <input type="email" name="user"></input>
            </div>
          </div>
          <br></br>
          <div className="message-div">
            <label>MESSAGE</label>
            <textarea className="contact-message" name="message"></textarea>
          </div>
          <center><button type="submit" value="Send" onClick={sendEmail}>SEND</button></center>
          </>
        )}
      </form>
    </div>
    </div>
  );
};

export default Contact;

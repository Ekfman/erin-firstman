import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { useInView } from "react-intersection-observer";
import { Col, Row, Container as div } from "react-bootstrap";


const Contact = () => {
  const { ref: contactContainer, inView: contactHeader } = useInView();
  console.log(contactHeader);
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ikvh2n",
        "template_vkiqcub",
        form.current,
        "cucx8rZQRLEWqTH2L"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message Sent");
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container" ref={contactContainer}>
      <Row id="contact" className="form">
        <Col className="hello-div">
          <Row>
          <h2 className={contactHeader && "say-animate"}>SAY</h2>
          <h2 className={contactHeader ? "hello-animate" : "hello"}>HELLO!</h2>
          </Row>
          <Row>
            <Col>
            <a target="_blank" href="https://www.linkedin.com/in/erin-firstman/">
              <img
                className="icon"
                src={require("./assets/icons/linkedInIcon.png")}
                alt="linkedInLogo"
              ></img>
            </a>
            </Col>
            <Col>
            <a target="_blank" href="https://github.com/Ekfman">
              <img
                className="icon"
                src={require("./assets/icons/githubIcon.png")}
                alt="githublogo"
              ></img>
            </a>
            </Col>
          </Row>
        </Col>
        <Col style={{"margin-top": "30px"}}>
          <form ref={form}>
          {emailSent ? (
            <h2 style={{"display": "flex", "align-items": "center", "justify-content": "center"}}>Thank you for your email!</h2>
          ) : (
            <>
              <Row>
                <Col>
                  <label>NAME</label>
                  <input type="text" name="user_name"></input>
                </Col>
                <Col>
                  <label>EMAIL</label>
                  <input type="email" name="user"></input>
                </Col>
              </Row>
              <br></br>
              <Row>
                <label>MESSAGE</label>
                <textarea style={{"height": "10em", "width": "100%"}} name="message"></textarea>
              </Row>
              <Row>
                <center><button className="send" type="submit" value="Send" onClick={sendEmail}>
                  SEND
                </button></center>
              </Row>
            </>
          )}
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;

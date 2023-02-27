import "./contact.css";
const Contact = () => {
  return (
    <div id="contact" className="form-container">
      <form className="form">
      {/* <div className="component-line">hi</div> */}
        <h1>Say Hello!</h1>
        <br></br>
        <br></br>
        <br></br>
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
        <div className="name-email-div">
        <label>MESSAGE</label>
        <input className="contact-message"></input>
        </div>
      </form>
    </div>
  );
};

export default Contact;

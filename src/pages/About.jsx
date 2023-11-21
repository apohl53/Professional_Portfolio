import React from "react";
import "../styles/aboutme.scss";
import photo from "../../assets/photo.png";

function About() {
  const divStyle = {
    textAlign: "center",
    fontStyle: "italic",
    marginTop: "20px",
  };

  return (
    <>
      <div id="#About" className="hero">
        <div className="image-container">
          <img src={photo} alt="Picture of Me" />
        </div>
        <p style={divStyle}>
          My name is Alex Pohlman and I'm an aspiring web developer. After
          working in entertainment and AV for almost a decade, I decided to make
          the switch to the software side of things!{" "}
        </p>
      </div>
    </>
  );
}
export default About;

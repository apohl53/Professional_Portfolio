import React from "react";
import "../styles/aboutme.scss";

function About() {
  const divStyle = {};

  return (
    <>
      <div id="#About" className="hero" style={divStyle}>
        <div className="image-container">
          <img src="assets/photo.JPG" alt="Picture of Me" />
        </div>
        <p>
          My name is Alex Pohlman and Im an aspiring web developer. After
          working in entertainment an AV for almost a decade I decided to make
          the switch to the software side of things!{" "}
        </p>
      </div>
    </>
  );
}
export default About;

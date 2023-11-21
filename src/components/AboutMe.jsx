// function AboutMe() {
//   // add photo
//   return (
//     <p>
//       {" "}
//       My name is Alex Pohlman and Im an aspiring web developer. After working in
//       entertainment an AV for almost a decade I decided to make the switch to
//       the software side of things!
//     </p>
//   );
// }

// export default AboutMe;

import React from "react";
// import "../styles/aboutme.scss";
import MainHeader from "./Header";

function Aboutme() {
  const pStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontStyle: "italic",
  };

  return (
    <>
      <div id="Aboutme" className="hero">
        <MainHeader />

        <div className="image-container">
          <img src="path/to/your/image.jpg" alt="Your Image" />
        </div>
        <p style={pStyle}>
          // // My name is Alex Pohlman and Im an aspiring web developer. After
          working in // entertainment an AV for almost a decade I decided to
          make the switch to // the software side of things! //{" "}
        </p>
      </div>
    </>
  );
}
export default Aboutme;

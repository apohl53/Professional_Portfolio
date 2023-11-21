import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

const headerStyle = {
  backgroundColor: "grey",
};

function MainHeader(propsObj) {
  return (
    <header
      style={headerStyle}
      id="header"
      className="fixed-top d-flex justify-content-between"
    >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact Me</Link>
      </nav>
    </header>
  );
}

export default MainHeader;

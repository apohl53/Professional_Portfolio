import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useMediaQuery } from "react-responsive";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import resumeFile from "assets/resumeFile.pdf";
function Resume() {
  const resumeFile = require("assets/resumeFile.pdf");
  const resumeLink =
    "https://docs.google.com/document/d/1DvMw6WKzkPAr58_U5zC-EgKQplHcLuvZZ5W7p-mqPBI/edit?usp=drive_link";

  function handleClick() {
    window.open(resumeLink, "_blank");
  }

  return (
    <section className="resume mb-3">
      <h1 className="text-center text-2xl font-bold mt-10 mb-5">
        Resume{" "}
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-file-arrow-down ml-2"></i>
        </a>
      </h1>
      <div className="resume-image-container">
        <img
          src={resumeFile}
          alt="Resume"
          className="resume-image"
          onClick={handleClick}
        />
      </div>
    </section>
  );
}

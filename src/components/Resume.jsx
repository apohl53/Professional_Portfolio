// link to resume
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useMediaQuery } from "react-responsive";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// import resume from "../../assets/";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <section className="resume mb-3">
      <h1 className="text-center text-2xl font-bold mt-10 mb-5">
        Resume{" "}
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-file-arrow-down ml-2"></i>
        </a>
      </h1>
      <div className="pdf-container max-w-[300px] sm:max-w-[600px] mx-auto">
        <Document
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
          options={{
            className: "pdf-doc",
          }}
        >
          <Page scale={isMobile ? 0.5 : 1} pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </section>
  );
}

export default Resume;

// function Resume() {
//   return (
//       <main className="container-fluid">
//           <div className="cardResume mx-auto my-auto">
//               <div className="card-body">
//                   <h5 className="card-title mt-4">My Resume</h5>
//                   <br />
//                   <p className="card-text">I look forward to working alongside you all!</p>
//                   <hr className="my-4"></hr>

//                   <p className="card-text">You can download my resume down below by clicking the button.</p>
//                   <a href="./images/KevinCastro.pdf" download="KevinCastro.pdf" className="btn btn-dark">Download Resume</a>

//               </div>
//               <img src="./images/KC_resume_23-1.png" className="card-img-top img-fluid" alt="resume"></img>
//           </div>

//       </main>
//   )
// }

// export default Resume

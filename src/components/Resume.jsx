// // link to resume
// import { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { useMediaQuery } from "react-responsive";
// import "react-pdf/dist/Page/AnnotationLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";

// // import resume from "../../assets/";

// // pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// function Resume() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPageNumber(1);
//   }

//   return (
//     <section className="resume mb-3">
//       <h1 className="text-center text-2xl font-bold mt-10 mb-5">
//         Resume{" "}
//         <a href={resume} target="_blank" rel="noopener noreferrer">
//           <i className="fa-solid fa-file-arrow-down ml-2"></i>
//         </a>
//       </h1>
//       <div className="pdf-container max-w-[300px] sm:max-w-[600px] mx-auto">
//         <Document
//           file={resume}
//           onLoadSuccess={onDocumentLoadSuccess}
//           options={{
//             className: "pdf-doc",
//           }}
//         >
//           <Page scale={isMobile ? 0.5 : 1} pageNumber={pageNumber} />
//         </Document>
//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Resume;

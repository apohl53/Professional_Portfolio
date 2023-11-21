import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Project from "./components/Project"; // Updated import statement
import Contact from "./components/Contact";
// import Resume from "./pages/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />{" "}
        {/* Updated component name */}
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// App.jsx?t=1700542285121:58 Uncaught ReferenceError: Projects is not defined
//     at App (App.jsx?t=1700542285121:58:89)
//     at renderWithHooks (react-dom.development.js:16305:18)
//     at mountIndeterminateComponent (react-dom.development.js:20074:13)
//     at beginWork (react-dom.development.js:21587:16)
//     at HTMLUnknownElement.callCallback2 (react-dom.development.js:4164:14)
//     at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:16)
//     at invokeGuardedCallback (react-dom.development.js:4277:31)
//     at beginWork$1 (react-dom.development.js:27451:7)
//     at performUnitOfWork (react-dom.development.js:26557:12)
//     at workLoopSync (react-dom.development.js:26466:5)

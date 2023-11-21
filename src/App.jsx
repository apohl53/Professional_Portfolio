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

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import Resume from './pages/Resume'
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;

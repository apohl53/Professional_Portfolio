import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center pt-2 ps-3 pe-3 bg-dark">
      <h3 className="text-light">Portfolio Practice</h3>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;

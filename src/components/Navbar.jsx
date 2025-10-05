import React, { useState, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom";
import PresloadedLogo from "../assets/website/PresloadedLogo.png"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = (
    <>
      <li><NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink></li>
      <li><NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : undefined}>About</NavLink></li>
      <li><NavLink to="/courses" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : undefined}>Courses</NavLink></li>
      {/* <li><NavLink to="/events" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : undefined}>Events</NavLink></li> */}
      <li><NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : undefined}>Contact</NavLink></li>
    </>
  );

  return (
    <nav>
      <Link to={"/"} className='logo-link'>
        <div className="logo">
          <div className="logoContainer">
            <img src={PresloadedLogo} alt="" className='logoPic' data-aos="fade-right"/>
          </div>
          <h2 className='PresloadedLogoHeading'>Presloaded Academy</h2>
        </div>
      </Link>
      {isMobile ? (
        <div className="hamburger-menu">
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-icon">&#9776;</span>
          </button>
          {menuOpen && (
            <ul className="dropdown-menu" data-aos="fade-left">
              {navLinks}
            </ul>
          )}
        </div>
      ) : (
        <ul data-aos="fade-left">
          {navLinks}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
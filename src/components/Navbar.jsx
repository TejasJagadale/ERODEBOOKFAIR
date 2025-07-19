import React, { useEffect, useState } from "react";
import "../styles/Navbar.css"; // make sure to create this CSS file

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <img src="https://makalukkaga.mpeoplesnet.com/imagesebf/mainlogo.png" className="logo" alt="" />{" "}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="/">முகப்பு</a>
          </li>
          <li>
            <a href="/about">எங்களை பற்றி</a>
          </li>
          <li>
            <a href="/venue">இடம் & நேரம்</a>
          </li>
          <li>
            <a href="/highlights">சிறப்பம்சங்கள்</a>
          </li>
          <li>
            <a href="/contact">தொடர்பிக்க</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

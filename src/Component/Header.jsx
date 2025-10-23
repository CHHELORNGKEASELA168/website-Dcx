import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="container-header">
        {/* Logo */}
        <div className="logo">
          <img src="/image/logo.png" alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation */}
        <nav className={`content-navbar ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="menu-item">
            About Us <FaAngleDown className="react-icon-header1" />
          </Link>
          <Link to="/" className="menu-item">
            Expertise <FaAngleDown className="react-icon-header1" />
          </Link>
          <Link to="/" className="menu-item">
            Project <FaAngleDown className="react-icon-header1" />
          </Link>
          <Link to="/" className="menu-item">Work with Us</Link>
          <Link to="/" className="menu-item">Resources</Link>
        </nav>

        {/* Contact Button */}
        <div className="header-contact-b">
          <span>Contact Us</span>
        </div>
      </header>
    </>
  );
}

export default Header;

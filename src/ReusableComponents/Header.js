import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using React Router for navigation.
//import './Header.css'; // Optional: For styling the navigation bar.

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">My Portfolio</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

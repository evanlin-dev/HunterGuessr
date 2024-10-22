import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li><Link to="/stats" className="link">Stats</Link></li>
        <li><Link to="/leaderboard" className="link">Leaderboard</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar(props) {
  return (
    <div className="navBarContainer">
    <div className="topNav">
      <ul className="userLinks">
        <li>Find a Store</li>
        <li>Sign In</li>
        <li className="cartButton">Cart</li>
      </ul>
      <ul className="navLinks">
          <li><Link to="/womens">{"WOMEN'S"}</Link></li>
          <li><Link to="/mens">{"MEN'S"}</Link></li>
          <li><Link to="/backpacks">BACKPACKS</Link></li>
          <li><Link to="/explore">EXPLORE</Link></li>
      </ul>
      </div>
    </div>
  )
}

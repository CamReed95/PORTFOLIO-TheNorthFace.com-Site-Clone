import React from 'react';
import './navbar.css';

export default function NavBar(props) {
  return (
    <div className="topNav">
      <ul className="userLinks">
        <li>Find a Store</li>
        <li>Sign In</li>
        <li className="cartButton">Cart</li>
      </ul>
      <ul className="navLinks">
          <li>MENS</li>
          <li>WOMENS</li>
          <li>BACKPACKS</li>
          <li>EXPLORE</li>
      </ul>
    </div>
  )
}

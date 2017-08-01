import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import NavBar from './../NavBar/NavBar';


class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="freeReturns">
        <p>FREE 3-DAY SHIPPING & FREE RETURNS</p>
        </div>
        <div className="header">


          <div className="logoContainer">
          <Link to="/" className="logoLink">
            <img className="tnfLogo" src="./../../images/logo-tnf.svg" />
            </Link>
          </div>


          <div className="linksContainer">
          <NavBar />
          </div>
        </div>

      </div>
    )
  }
}

export default Header;

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

          <div className="mobileNavIcons">
            <img className="cartIcon"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Shopping_cart_font_awesome.svg/2000px-Shopping_cart_font_awesome.svg.png" />
            <div className="hamIcon">
              <div className="hamRow"></div>
              <div className="hamRow"></div>
              <div className="hamRow"></div>
            </div>
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

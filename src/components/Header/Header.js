import React, { Component } from 'react';
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
            <img className="tnfLogo" src="./../../images/logo-tnf.svg" />
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

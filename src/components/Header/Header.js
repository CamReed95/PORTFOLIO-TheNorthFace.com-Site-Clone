import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import NavBar from './../NavBar/NavBar';
import DropdownMenu from './../DropdownMenu/DropdownMenu';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: true
    }

    this.toggleMenu = this.toggleMenu.bind(this);

  }

toggleMenu() {
  console.log(this.state.menuActive)
  this.setState({
    menuActive: !this.state.menuActive
  })
}

  render() {

    return (
      <div className="headerContainer">
        <div className="freeReturns">
        <p>FREE 3-DAY SHIPPING & FREE RETURNS</p>
        </div>
        <div className="header">


          <div className="logoContainer">
            <Link to="/" className="logoLink">
              <img className="tnfLogo" src="./../../images/logo-tnf.svg" alt="The North Face Logo"/>
            </Link>
          </div>

          <div className="mobileNavIcons">
            <img className="cartIcon"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Shopping_cart_font_awesome.svg/2000px-Shopping_cart_font_awesome.svg.png" alt="Cart icon" />
            <div className="hamIcon" onClick={ this.toggleMenu } >
              <div className="hamRow"></div>
              <div className="hamRow"></div>
              <div className="hamRow"></div>
            </div>
          </div>

          <div className="linksContainer">
          <NavBar />
          </div>
        </div>
        <DropdownMenu menuActive={ this.state.menuActive } />
      </div>
    )
  }
}

export default Header;

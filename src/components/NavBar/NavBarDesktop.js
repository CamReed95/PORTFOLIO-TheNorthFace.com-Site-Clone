import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import DesktopDropdownMenu from './../DropdownMenu/DesktopDropdownMenu';
import { connect } from 'react-redux';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      dropdownActive: true//Change to true after styling dropdown
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.enterMenu = this.enterMenu.bind(this);
    this.leaveMenu = this.leaveMenu.bind(this);

  }

  toggleMenu() {
    this.setState({
      dropdownActive: !this.state.dropdownActive
    })
  }

  enterMenu() {
    this.setState({
      dropdownActive: false
    })
  }

  leaveMenu() {
    this.setState({
      dropdownActive: true
    })
  }



  render() {
    return (
      <div className="navBarDesktop">
        <div className="navBarContainer">
          <div className="topNav">
            <ul className="userLinks">
              <li>Find a Store</li>
              <li>Sign In</li>
              <li className="cartButton">Cart ({this.props.cart.length})</li>
            </ul>


              <ul className="navLinks">
                  <li onMouseEnter={ this.enterMenu } onMouseLeave={ this.leaveMenu } onClick={this.toggleMenu}><Link to="/shop/mens">{"MEN'S"}</Link><div className="hoverBridge" onMouseEnter={this.enterMenu}></div></li>

                  <li onMouseEnter={ this.enterMenu } onMouseLeave={ this.leaveMenu } onClick={this.toggleMenu}><Link to="/shop/womens">{"WOMEN'S"}</Link><div className="hoverBridgeWomens" onMouseEnter={this.enterMenu}></div></li>


                  <li onMouseEnter={ this.enterMenu } onMouseLeave={ this.leaveMenu } onClick={this.toggleMenu}><Link to="/Backpacks">BACKPACKS</Link><div className="hoverBridgeBackpacks" onMouseEnter={this.enterMenu}></div></li>


                  <li><Link to="/explore">EXPLORE</Link></li>
              </ul>

          </div>
          <div>
            <DesktopDropdownMenu dropdownActive={ this.state.dropdownActive } onMouseEnter={ this.enterMenu } onMouseLeave={ this.leaveMenu } toggleMenu={this.toggleMenu}/>
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(NavBar)

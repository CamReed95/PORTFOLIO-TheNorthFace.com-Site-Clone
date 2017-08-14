import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import IPadDropdownMenu from './../DropdownMenu/IPadDropdownMenu';
import { connect } from 'react-redux';

class NavBariPad extends Component{
  constructor(props){
    super(props);
    this.state = {
      dropdownActive: true
    }

    this.toggleMenu = this.toggleMenu.bind(this);

  }


  toggleMenu() {
    this.setState({
      dropdownActive: !this.state.dropdownActive
    })
  }


  render() {
    return (
      <div className="navBariPad">
        <div className="navBarContainer">
          <div className="topNav">
            <ul className="userLinks">
              <li>Find a Store</li>
              <li>Sign In</li>
              <li className="cartButton">Cart ({this.props.cart.length})</li>
            </ul>
            <ul className="navLinks">
                <li onClick={this.toggleMenu}>{"MEN'S"}</li>
                <li onClick={this.toggleMenu}>{"WOMEN'S"}</li>
                <li onClick={this.toggleMenu}>BACKPACKS</li>
                <li><Link to="/explore">EXPLORE</Link></li>
            </ul>
          </div>

          <div className="iPadDropdownInstanceContainer">
            <IPadDropdownMenu dropdownActive={ this.state.dropdownActive } toggleMenu={this.toggleMenu}/>
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

export default connect(mapStateToProps)(NavBariPad)

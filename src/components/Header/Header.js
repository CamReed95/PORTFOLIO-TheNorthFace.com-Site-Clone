import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import NavBarDesktop from './../NavBar/NavBarDesktop';
import NavBariPad from './../NavBar/NavBariPad';

import DropdownMenu from './../DropdownMenu/DropdownMenu';
import { connect } from 'react-redux';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: true,
      display: {display: 'none'},
      displayNull: null,
      displayToggle: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeDisplay = this.closeDisplay.bind(this);

  }

toggleMenu() {
  console.log(this.state.menuActive)
  this.setState({
    menuActive: !this.state.menuActive
  })
}

closeDisplay(){
  if(this.state.displayToggle) {
    this.setState({
      displayNull: {display: 'none'},
      displayToggle: !this.state.displayToggle
    })
  } else {
    this.setState({
      displayNull: null
    })
  }

}


  render() {

    let qtyIncrement = 0;

    let itemAddedStyle = this.state.display;

    let qtyCount = 0;

    this.props.cart.forEach(  product => {
      qtyIncrement += parseInt(product.quantity, 10)
    })

    if(qtyCount !== qtyIncrement){
      itemAddedStyle =
      this.state.displayToggle ? this.state.displayNull : this.state.display;
      qtyCount == qtyIncrement;
    }



    let cartCountStyle = {backgroundColor: 'red'}

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

          <Link to="/cart">
            <div className="cartAndCount">
              <div className="cartItemsCount" style={ qtyIncrement ? cartCountStyle : null }>
                <p className="cartCount">
                {qtyIncrement}</p>
              </div>
              <img className="cartIcon"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Shopping_cart_font_awesome.svg/2000px-Shopping_cart_font_awesome.svg.png" alt="Cart icon" />
            </div>
          </Link>
            <div className="hamIcon" onClick={ this.toggleMenu } >
              <div className="hamRow"></div>
              <div className="hamRow"></div>
              <div className="hamRow"></div>
            </div>
          </div>

          <div className="linksContainer">
          <NavBarDesktop />
          <NavBariPad />
          </div>
        </div>

        <DropdownMenu menuActive={ this.state.menuActive} toggleMenu={this.toggleMenu} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    itemAdded: state.itemAdded
  }
}

export default connect(mapStateToProps)(Header);

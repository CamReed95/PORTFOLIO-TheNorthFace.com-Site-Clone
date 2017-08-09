import React, { Component } from 'react';
import './dropdownMenu.css';
import { Link } from 'react-router-dom';

export default class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMens: true,
      displayWomens: true,
      displayBackpacks: true
    }

    this.toggleMens = this.toggleMens.bind(this);
    this.toggleWomens = this.toggleWomens.bind(this);
    this.toggleBackpacks = this.toggleBackpacks.bind(this);
  }

  toggleMens() {
    this.setState({
      displayMens: !this.state.displayMens
    })
  }

  toggleWomens() {
    this.setState({
      displayWomens: !this.state.displayWomens
    })
  }

  toggleBackpacks() {
    this.setState({
      displayBackpacks: !this.state.displayBackpacks
    })
  }





  render() {
    let menuDisplay = { display: 'none' }
    let submenuDisplay = { display: 'none' }

    return (
      <div className="dropdownMenuContainer" style={ this.props.menuActive ? menuDisplay : null}>
        <div className="categoryContainer">

          <div className="dropdownContainer">
            <div className="dropdownCategory" onClick={ this.toggleMens }>
              <h1>{"MEN'S"}</h1>
              <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon"/>
            </div>
            <div
            className="submenu"
            style={ this.state.displayMens ? submenuDisplay : null }>
              <h1 onClick={ this.props.toggleMenu }><Link to="/mens">SHOP ALL {"MEN'S"}</Link></h1>
              <h1 onClick={ this.props.toggleMenu }><Link to="/mens/outerwear">OUTERWEAR</Link></h1>
              <h1 onClick={ this.props.toggleMenu }><Link to="/mens/shirts">SHIRTS</Link></h1>
              <h1 onClick={ this.props.toggleMenu }><Link to="/mens/bottoms">BOTTOMS</Link></h1>
              <h1 onClick={ this.props.toggleMenu }><Link to="/mens/hats">HATS</Link></h1>
            </div>
          </div>


          <div className="dropdownContainer">
            <div className="dropdownCategory" onClick={ this.toggleWomens }>
              <h1>{"WOMEN'S"}</h1>
              <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon"/>
            </div>
            <div className="submenu" style={ this.state.displayWomens ? submenuDisplay : null }>
              <h1 onClick={ this.props.toggleMenu }><Link to="/womens">SHOP ALL {"WOMEN'S"}</Link></h1>
              <h1 onClick={ this.props.toggleMenu }><Link to="/womens/outerwear">OUTERWEAR</Link></h1>
              <h1 onClick={ this.props.toggleMenu }><Link to="/womens/shirts">SHIRTS</Link></h1>
              <h1 onClick={ this.props.toggleMenu }><Link to="/womens/bottoms">BOTTOMS</Link></h1>
              <h1 onClick={ this.props.toggleMenu }><Link to="/womens/hats">HATS</Link></h1>
            </div>
          </div>



          <div className="dropdownContainer">
            <div className="dropdownCategory" onClick={ this.toggleBackpacks }>
              <h1>BACKPACKS</h1>
              <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon"/>
            </div>
            <div className="submenu backpacks" style={ this.state.displayBackpacks ? submenuDisplay : null }>
              <h1>SHOP ALL BACKPACKS</h1>
              <h1>{"MEN'S"}</h1>
              <h1>{"WOMEN'S"}</h1>
            </div>
          </div>
          <div className="userLinks">
            <h1>FIND A STORE</h1>
            <h1>SIGN IN</h1>
          </div>

          </div>

      </div>
    )
  }
}

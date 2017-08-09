import React, { Component } from 'react';
import './dropdownMenu.css';

export default class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMens: true,
      displayWomens: false,
      displayBackpacks: false
    }

    this.toggleMens = this.toggleMens.bind(this);

  }

  toggleMens() {
    this.setState({
      displayMens: !this.state.displayMens
    })
  }

  render() {
    let menuDisplay = { display: 'none' }
    let mensDisplay = { display: 'none' }

    return (
      <div className="dropdownMenuContainer" style={ this.props.menuActive ? menuDisplay : null}>
        <div className="categoryContainer">

          <div className="dropdownContainer">
            <div className="dropdownCategory" onClick={ this.toggleMens }>
              <h1>{"MEN'S"}</h1>
              <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon"/>
            </div>
            <div className="submenu mens" style={ this.state.displayMens ? mensDisplay : null }>
              <h1>SHOP ALL MENS</h1>
              <h1>OUTERWEAR</h1>
              <h1>SHIRTS</h1>
              <h1>BOTTOMS</h1>
              <h1>HATS</h1>
            </div>
          </div>


          <div className="dropdownCategory">
            <h1>{"WOMEN'S"}</h1>
            <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon"/>
          </div>
          <div className="dropdownCategory">
            <h1>{"BACKPACK'S"}</h1>
            <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon"/>
          </div>
        </div>
      </div>
    )
  }
}

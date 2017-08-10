import React, { Component } from 'react';
import './desktopDropdownMenu.css';

export default class DesktopDropdownMenu extends Component {

  render() {

    let dropdownDisplay = { display: 'none' }

    return (
      <div className="mainDropdownMenu" style={ this.props.dropdownActive ? dropdownDisplay : null}>
        <h1>MAIN DROPDOWN MENU</h1>
      </div>
    )
  }
}

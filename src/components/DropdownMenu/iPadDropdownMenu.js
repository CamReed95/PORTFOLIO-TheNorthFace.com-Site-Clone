import React, { Component } from 'react';
import './iPadDropdownMenu.css';


export default class iPadDropdownMenu extends Component {

  render(){

    let dropdownDisplay = { display: 'none' }

    return (
      <div className="mainIpadDropdownMenu" style={ this.props.iPadDropdownActive ? dropdownDisplay : null}>
        <h1>MAIN iPadDROPDOWN MENU</h1>
      </div>
    )
  }
}

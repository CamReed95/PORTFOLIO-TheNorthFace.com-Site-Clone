import React, { Component } from 'react';
import './individualCartItem.css';
import { removeFromCart } from './../../ducks/reducer';
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux';

class IndividualCartItem extends Component{

  render(){
    return(
      <div className="cartItemContainer">
        <div className="cartItemSections">

          <section className="cartItemLeft">
          <img className="cartItemImg" src={this.props.item.displayImg} alt="product in cart"/>
          </section>

          <section className="cartItemRight">
            <p className="cartItemName">{this.props.item.product.name}</p>
            <p className="cartItemColor">{this.props.item.displayImgColor}</p>
            <p className="cartItemSize">Size - {this.props.item.selectedSize}</p>
            <p className="availableNow">Available Now to Ship</p>
            <div className="qtyPrice">
              
            <p className="cartItemPrice">${this.props.item.product.price}.00</p>
            </div>
          </section>
          <div className="removeButton" onClick={()=> this.props.removeFromCart(this.props.index)}>
            <h1 className="removeItemLink">REMOVE</h1>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(null, { removeFromCart })(IndividualCartItem);

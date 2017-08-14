import React, { Component } from 'react';
import './individualCartItem.css';
import { removeFromCart } from './../../ducks/reducer';
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
            <h1>{this.props.item.product.name}</h1>
            <h2>{this.props.item.displayImgColor}</h2>
            <p>AVAILABLE NOW TO SHIP</p>
            <h2>SIZE - {this.props.item.selectedSize}</h2>
            <h1>${this.props.item.product.price}.00</h1>
          </section>

        </div>
        <div className="removeButton" onClick={()=> this.props.removeFromCart(this.props.index)}>
          <h1 className="removeItemLink">REMOVE</h1>
        </div>
      </div>
    )
  }
}

export default connect(null, { removeFromCart })(IndividualCartItem);

import React, { Component } from 'react';
import './cart.css';
import IndividualCartItem from './../IndividualCartItem/IndividualCartItem';
import { connect } from 'react-redux';

class Cart extends Component {

  render(){

    console.log(this.props.cart)
    console.log(this.props.cart[0]);

    const cartItems = this.props.cart.map( (item, index, arr)=> {
      return (
        <div key={index}>
          <IndividualCartItem item={item} index={index}/>
        </div>
      )
    })

    return (
      <div className="cartComponentContainer">
        <div className="cartContentsContainer">
          <div className="cartCountMessage">
          {!this.props.cart.length ? <p>THERE ARE NO ITEMS IN YOUR CART</p> : this.props.cart.length === 1 ? <p>1 ITEM IN YOUR CART</p> : <p>{this.props.cart.length} ITEMS IN YOUR CART</p>}


          </div>
          {cartItems}
        </div>
      </div>

    )
  }

}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart);

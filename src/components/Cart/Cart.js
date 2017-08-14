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

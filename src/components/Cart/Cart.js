import React, { Component } from 'react';
import './cart.css';
import IndividualCartItem from './../IndividualCartItem/IndividualCartItem';
import { connect } from 'react-redux';

class Cart extends Component {

  render(){

    let cartItems = this.props.cart.map( (item, index, arr)=> {
      return (
        <div key={index}>
          <IndividualCartItem item={item} index={index} />
        </div>
      )
    })

    return (
      <div className="cartComponentContainer">
        <div className="cartCountHeader">
          {!this.props.cart.length ? <p>0 ITEMS</p> : this.props.cart.length === 1 ? <p>1 ITEM</p> : <p>{this.props.cart.length} ITEMS</p>}
          <h2 className="inCartText">SHOPPING CART</h2>
        </div>

        <div className="checkoutContainer">
          <div className="totalContainer">
            <div className="orderTotal">
              <p>ORDER TOTAL</p>
              <p className="beforeTax">(Before Tax)</p>
            </div>
            <div className="numericalTotal">
                <p>${this.props.totalCartCost ? this.props.totalCartCost : 0 }.00</p>
            </div>
          </div>
        </div>

        <div className="cartContentsContainer">
          <div className="cartCountSubHeader">
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
    cart: state.cart,
    totalCartCost: state.totalCartCost
  }
}

export default connect(mapStateToProps)(Cart);

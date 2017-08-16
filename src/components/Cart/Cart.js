import React, { Component } from 'react';
import './cart.css';
import IndividualCartItem from './../IndividualCartItem/IndividualCartItem';
import { Link } from 'react-router-dom';
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

    let itemsQty = 0;

    let cartItemsQty = this.props.cart.map( product => {
      return (
        itemsQty += product.quantity
      )
    })

    let estTax = this.props.totalCartCost * 0.0685

    let checkoutGrandTotal = this.props.totalCartCost + estTax;

    console.log(checkoutGrandTotal.toFixed(2))

    return (
      <div className="cartComponentContainer">
        <div className="cartCountHeader">
          {!this.props.cart.length ? <p>0 ITEMS</p> : this.props.cart.length === 1 ? <p>1 ITEM</p> : <p>{this.props.cart.length} ITEMS</p>}
          <h2 className="inCartText">SHOPPING CART</h2>
        </div>

        <div className="checkoutContaineriPhone">
          <div className="checkoutDetailsContainer">
            <div className="orderInfo">
              <div className="orderTotal">
                <p>ORDER TOTAL</p>
                <p className="beforeTax">(Before Tax)</p>
              </div>
              <div className="numericalTotal">
                  <p>${this.props.totalCartCost ? this.props.totalCartCost : 0 }.00</p>
              </div>
            </div>
            <div className="checkoutButtonMain">
              <h1>SECURE CHECKOUT</h1>
            </div>
            <div className="continueShoppingiPhone">
            <Link to="/"><p>CONTINUE SHOPPING</p></Link>
            </div>

          </div>
        </div>


        <div className="cartItemsCartCheckout">
          <div className="cartContentsContaineriPhone">
            <div className="cartCountSubHeader">
              {!this.props.cart.length ? <p>THERE ARE NO ITEMS IN YOUR CART</p> : this.props.cart.length === 1 ? <p>1 ITEM IN YOUR CART</p> : <p>{this.props.cart.length} ITEMS IN YOUR CART</p>}
            </div>
            {cartItems}
          </div>

          <div className="checkoutContainerMain">
            <div className="checkoutDetailsContainer">

              <div className="checkout checkoutTop">
                <div className="orderInfo">
                  <div className="orderTotal">
                    <p>ORDER TOTAL</p>
                    <p className="beforeTax">(Before Tax)</p>
                  </div>
                  <div className="numericalTotal">
                      <p>${this.props.totalCartCost ? this.props.totalCartCost : 0 }.00</p>
                  </div>
                </div>
                <div className="checkoutButtonMain">
                  <h1>SECURE CHECKOUT</h1>
                </div>
              </div>

              <div className="checkout checkoutMiddle">
                <div className="orderSummary">
                  <h1>ORDER SUMMARY</h1>
                </div>
                <div className="itemSubtotalInfo">
                  <div className="itemSubtotalQtyPrice">
                    <p>ITEM SUBTOTAL ({itemsQty})</p>
                    <p>${this.props.totalCartCost}.00</p>
                  </div>
                  <div className="estShipping">
                    <p>ESTIMATED SHIPPING</p>
                    <p>FREE</p>
                  </div>
                </div>

                <div className="estTax">
                  <p>ESTIMATED TAX</p>
                  <p>${(this.props.totalCartCost * 0.0685).toFixed(2)}</p>
                </div>

                <div className="checkoutGrandTotal">
                  <p>ORDER TOTAL</p>
                  <p>${checkoutGrandTotal.toFixed(2)}</p>
                </div>

              </div>
            </div>

              <div className="checkoutButtonMain checkoutButtonBottom">
                <h1>SECURE CHECKOUT</h1>
              </div>
              <Link to="/"><p className="continueShopping">CONTINUE SHOPPING</p></Link>
          </div>

          <div className="cartContentsContaineriPad">
            {cartItems}
          </div>
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

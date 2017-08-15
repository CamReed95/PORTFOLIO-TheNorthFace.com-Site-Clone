import React, { Component } from 'react';
import './individualCartItem.css';
import { removeFromCart } from './../../ducks/reducer';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';


class IndividualCartItem extends Component{
  constructor(props){
    super(props);
    this.state={
      quantity: 1
    }

    this.logQtyChange = this.logQtyChange.bind(this)
  }


logQtyChange(event){
  console.log(event)
  this.setState({
    quantity: event.value
  })
}

  render(){

    const options = [ {value: 1, label: 1}, {value: 2, label: 2}, {value: 3, label: 3}, {value: 4, label: 4}, {value: 5, label: 5}, {value: 6, label: 6}, {value: 7, label: 7}, {value: 8, label: 8}, {value: 9, label: 9} ];

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
              <Select
              className="qtySelector"
              value={this.state.quantity}
              options={options}
              onChange={(e)=> this.logQtyChange(e)} />

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

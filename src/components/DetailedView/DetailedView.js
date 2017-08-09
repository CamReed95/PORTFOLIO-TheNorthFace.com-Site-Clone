import React, { Component } from 'react';
import { getProductById } from './../../services/axiosServices';
import './detailedView.css';


class DetailedView extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: {}
    }
  }

componentDidMount() {
  console.log("DETAILED VIEW MOUNTED")

getProductById(this.props.match.params.product_id).then( product => {
  this.setState({product: product[0]})
  console.log(this.state.product);
  });
}


  render() {
    return (
      <div className="detailedViewContainer">
        <h1>{this.state.product.name}</h1>
        <p>${this.state.product.price}.00</p>

        <img src={this.state.product.img1} />

      </div>
    )
  }
}

export default DetailedView;

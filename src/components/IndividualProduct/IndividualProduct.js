import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class IndividualProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayImg: props.product.img1
    }
  }


  render() {
    return (
      <div key={this.props.id} className="productsContainer">
        <img src={this.state.displayImg} className="productImg" alt="Product"/>

        <div className="thumbnails">


          {this.props.product.img1 ? <img src={this.props.product.img1} alt="product thumbnail" onClick={ ()=> {
            this.setState({ displayImg: this.props.product.img1 })
          }}/> :''}


          {this.props.product.img2 ? <img src={this.props.product.img2} alt="product thumbnail" onClick={ ()=> {
            this.setState({ displayImg: this.props.product.img2 })
          }}/> :''}

          {this.props.product.img3 ? <img src={this.props.product.img3} alt="product thumbnail" onClick={ ()=> {
            this.setState({ displayImg: this.props.product.img3 })
          }}/> :''}

          {this.props.product.img4 ? <img src={this.props.product.img4} alt="product thumbnail" onClick={ ()=> {
            this.setState({ displayImg: this.props.product.img4 })
          }}/> :''}
        </div>

        <h3 className="productName">
          {this.props.product.name}
        </h3>
        <p>${this.props.product.price}.00</p>

        <div className="detailedViewButton">
          <Link to={'/product/' + this.props.product.product_id}>
            <h2>DETAILED VIEW</h2>
          </Link>
        </div>

      </div>
    )
  }


}

export default IndividualProduct;

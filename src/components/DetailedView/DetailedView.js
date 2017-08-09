import React, { Component } from 'react';
import { getProductById } from './../../services/axiosServices';
import './detailedView.css';


class DetailedView extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: {},
      displayImg: ''
    }
  }

componentDidMount() {
  console.log("DETAILED VIEW MOUNTED")

getProductById(this.props.match.params.product_id).then( product => {
  this.setState({product: product[0], displayImg: product[0].img1 })
  console.log(this.state.product);
  });
}


  render() {

    return (
      <div className="detailedViewContainer">
        <div className="detailProductInfo">
          <h1>{this.state.product.name}</h1>
          <h1>${this.state.product.price}.00</h1>
        </div>

        <img src={this.state.displayImg} className="detailImg" alt="product"/>

        <div className="detailThumbnails">
        {this.state.product.img1 ? <img src={this.state.product.img1} alt="product thumbnail" onClick={ ()=> {
          this.setState({ displayImg: this.state.product.img1 })
        }}/> :''}

        {this.state.product.img2 ? <img src={this.state.product.img2} alt="product thumbnail" onClick={ ()=> {
          this.setState({ displayImg: this.state.product.img2 })
        }}/> :''}

        {this.state.product.img3 ? <img src={this.state.product.img3} alt="product thumbnail" onClick={ ()=> {
          this.setState({ displayImg: this.state.product.img3 })
        }}/> :''}

        {this.state.product.img4 ? <img src={this.state.product.img4} alt="product thumbnail" onClick={ ()=> {
          this.setState({ displayImg: this.state.product.img4 })
        }}/> :''}


        </div>

      </div>
    )
  }
}

export default DetailedView;

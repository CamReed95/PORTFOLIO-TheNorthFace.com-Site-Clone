import React, { Component } from 'react';
import { getProductById } from './../../services/axiosServices';
import './detailedView.css';


class DetailedView extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: {},
      displayImg: '',
      displayImgColor: '',
      sizesArr: [],
      selectedSize: ''
    }
  }

componentDidMount() {
  console.log("DETAILED VIEW MOUNTED")

getProductById(this.props.match.params.product_id).then( product => {
  this.setState({product: product[0], displayImg: product[0].img1, sizesArr: product[0].sizes.split(','), displayImgColor: product[0].color1 })
  console.log(this.state.product);
  });
}

componentWillReceiveProps(newProps) {
  console.log("PROPS, DUDE!")
  getProductById(newProps.match.params.product_id).then( product => {
    this.setState({product: product[0], displayImg: product[0].img1, sizesArr: product[0].sizes.split(','), displayImgColor: product[0].color1 })
    console.log(this.state.product);
    });
}


  render() {

    const productSizes = this.state.sizesArr.map( (size, index, arr) => {
      return <div className="size" key={size} onClick={ ()=> this.setState({ selectedSize: size }) }><h1>{arr[index]}</h1></div>
    })



    return (
      <div className="detailedViewContainer">
        <div className="detailProductInfo">
          <h1>{this.state.product.name}</h1>
          <h1>${this.state.product.price}.00</h1>
        </div>

        <img src={this.state.displayImg} className="detailImg" alt="product"/>

        <div className="colorSwap">
          <div className="detailImgColor">
            {this.state.displayImgColor}
          </div>
          <div className="detailThumbnails">
          {this.state.product.img1 ? <img src={this.state.product.img1} alt="product thumbnail" onClick={ ()=> {
            this.setState({ displayImg: this.state.product.img1, displayImgColor: this.state.product.color1 })
          }}/> :''}

          {this.state.product.img2 ? <img src={this.state.product.img2} alt="product thumbnail" onClick={ ()=> {
            this.setState({ displayImg: this.state.product.img2, displayImgColor: this.state.product.color2 })
          }}/> :''}

          {this.state.product.img3 ? <img src={this.state.product.img3} alt="product thumbnail" onClick={ ()=> {
            this.setState({ displayImg: this.state.product.img3, displayImgColor: this.state.product.color3 })
          }}/> :''}

          {this.state.product.img4 ? <img src={this.state.product.img4} alt="product thumbnail" onClick={ ()=> {
            this.setState({ displayImg: this.state.product.img4, displayImgColor: this.state.product.color4 })
          }}/> :''}
          </div>
        </div>

        <div className="sizesDisplay">
          <div className="sizesContainer">
            {productSizes}
          </div>
        </div>

        <div className="addToCartButton">
          <h2>ADD TO CART</h2>
        </div>
      </div>
    )
  }
}

export default DetailedView;

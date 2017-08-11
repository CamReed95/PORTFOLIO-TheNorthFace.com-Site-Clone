import React, { Component } from 'react';
import './productsByGender.css';
import { getLimitedProducts } from './../../services/axiosServices';
import LimitOuterwear from './../LimitOuterwear/LimitOuterwear';
// import IndividualProduct from './../IndividualProduct/IndividualProduct';

// !!!Uncomment everything to get product category rendering. Still need to figure out how to render multiple components of categories.

export default class Mens extends Component {
  constructor(props) {
    super(props);
    this.state={
      // outerwear: [],
      bottoms: [],
      hats: [],
      backpacks: []
    }

  }

  componentDidMount() {
    // getLimitedProducts(this.props.match.params.gender, 'outerwear', 4).then((response)=>
    //   this.setState({
    //     outerwear: response
    //   })
    // );
    getLimitedProducts(this.props.match.params.gender, 'shirts', 4).then((response)=>
      this.setState({
        shirts: response
      })
    );
    getLimitedProducts(this.props.match.params.gender, 'bottoms', 4).then((response)=>
      this.setState({
        bottoms: response
      })
    );
    getLimitedProducts(this.props.match.params.gender, 'hats', 4).then((response)=>
      this.setState({
        hats: response
      })
    );
    getLimitedProducts(this.props.match.params.gender, 'backpacks', 4).then((response)=>
      this.setState({
        backpacks: response
      })
    );
  }

  componentWillReceiveProps(newProps) {
    // getLimitedProducts(newProps.match.params.gender, 'outerwear', 4).then((response)=>
    //   this.setState({
    //     outerwear: response
    //   })
    // );
    getLimitedProducts(newProps.match.params.gender, 'shirts', 4).then((response)=>
      this.setState({
        shirts: response
      })
    );
    getLimitedProducts(newProps.match.params.gender, 'bottoms', 4).then((response)=>
      this.setState({
        bottoms: response
      })
    );
    getLimitedProducts(newProps.match.params.gender, 'hats', 4).then((response)=>
      this.setState({
        hats: response
      })
    );
    getLimitedProducts(newProps.match.params.gender, 'backpacks', 4).then((response)=>
      this.setState({
        backpacks: response
      })
    );

  }


  render() {

    // let outerwearLimit = this.state.outerwear.map( (product, index, arr) => {
    //   return (
    //     <IndividualProduct key={product.product_id} id={product.product_id} product={product} />
    //   )
    // })

    {/*Create variables to map through other categories*/}
    {/*Try moving axios requests and lifecycle methods into their own components, such as LimitOuterwear*/}


    return (
      <div className="contentContainer">
      <h1>I AM THE MENS COMPONENT</h1>
      <LimitOuterwear params={this.props.match.params}/>
      {/*{outerwearLimit}*/}
      </div>
    )
  }
}

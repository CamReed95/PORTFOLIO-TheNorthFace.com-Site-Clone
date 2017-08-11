import React, { Component } from 'react';
import { getLimitedProducts } from './../../services/axiosServices';
import IndividualProduct from './../IndividualProduct/IndividualProduct';
import './limitCategories.css';

//params is undefined here. We are not using params in the url with this component. This component was for testing moving axios and lifecycle methods over from ProductsByGender.

export default class LimitOuterwear extends Component {
  constructor(props){
    super(props);
    this.state={
      outerwear: []
    }
  }

  componentDidMount() {
    getLimitedProducts(this.props.params, 'outerwear', 4).then((response)=>
      this.setState({
        outerwear: response
      })
    );
  }

  componentWillReceiveProps(newProps) {
    getLimitedProducts(newProps.params.gender, 'outerwear', 4).then((response)=>
      this.setState({
        outerwear: response
      })
    );
  }

    render(){

      console.log(this.props.params)

      let outerwearLimit = this.state.outerwear.map( (product, index, arr) => {
        return (
          <IndividualProduct key={product.product_id} id={product.product_id} product={product} containerStyle={ 'limitedProductContainer' }/>
        )
      })

      return (
      <div>
        <h1>LimitOuterwear Component</h1>
        <div className="limitCategoryContainer">
          {outerwearLimit}
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { getLimitedProducts } from './../../services/axiosServices';
import IndividualProduct from './../IndividualProduct/IndividualProduct';

//params is undefined here. We are not using params in the url with this component. This component was for testing moving axios and lifecycle methods over from ProductsByGender.

export default class LimitOuterwear extends Component {
  constructor(props){
    super(props);
    this.state={
      outerwear: []
    }
  }

  componentWillReceiveProps(newProps) {
    getLimitedProducts(newProps.match.params.gender, 'outerwear', 4).then((response)=>
      this.setState({
        outerwear: response
      })
    );
  }

  componentDidMount() {
    getLimitedProducts(this.props.match.params.gender, 'outerwear', 4).then((response)=>
      this.setState({
        outerwear: response
      })
    );
  }

    render(){

      let outerwearLimit = this.state.outerwear.map( (product, index, arr) => {
        return (
          <IndividualProduct key={product.product_id} id={product.product_id} product={product} />
        )
      })

      return (
      <div>
        <h1>LimitOuterwear Component</h1>
        {outerwearLimit}
      </div>
    )
  }
}

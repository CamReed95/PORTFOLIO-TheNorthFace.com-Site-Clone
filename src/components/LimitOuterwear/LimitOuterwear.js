import React, { Component } from 'react';
import { getLimitedProducts } from './../../services/axiosServices';
import IndividualProduct from './../IndividualProduct/IndividualProduct';
import './../../styles/limitCategories.css';
import { Link } from 'react-router-dom';


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
        <div className="limitCategoryContainer">
          <div className="limitBreadcrumb">
            <h1>OUTERWEAR</h1>
            <Link to={  `/${this.props.params.gender}/outerwear`}>
              <h2>VIEW ALL <span className="rightArrow"> > </span> </h2>
            </Link>
          </div>
          <div className="limitProductsDisplay">
            {outerwearLimit}
          </div>
        </div>
      </div>
    )
  }
}

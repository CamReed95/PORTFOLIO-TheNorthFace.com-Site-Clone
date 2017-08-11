import React, { Component } from 'react';
import { getLimitedProducts } from './../../services/axiosServices';
import IndividualProduct from './../IndividualProduct/IndividualProduct';
import './../../styles/limitCategories.css';
import { Link } from 'react-router-dom';


export default class LimitBottoms extends Component {
  constructor(props){
    super(props);
    this.state={
      bottoms: []
    }
  }

  componentDidMount() {
    getLimitedProducts(this.props.params, 'bottoms', 4).then((response)=>
      this.setState({
        bottoms: response
      })
    );
  }

  componentWillReceiveProps(newProps) {
    getLimitedProducts(newProps.params.gender, 'bottoms', 4).then((response)=>
      this.setState({
        bottoms: response
      })
    );
  }

    render(){

      console.log(this.props.params)

      let bottomsLimit = this.state.bottoms.map( (product, index, arr) => {
        return (
          <IndividualProduct key={product.product_id} id={product.product_id} product={product} containerStyle={ 'limitedProductContainer' }/>
        )
      })

      return (
        <div>
          <div className="limitCategoryContainer">
            <div className="limitBreadcrumb">
              <h1>BOTTOMS</h1>
              <Link to={  `/${this.props.params.gender}/bottoms`}>
                <h2>VIEW ALL <span className="rightArrow"> > </span> </h2>
              </Link>
            </div>
            <div className="limitProductsDisplay">
              {bottomsLimit}
            </div>
          </div>
        </div>
    )
  }
}
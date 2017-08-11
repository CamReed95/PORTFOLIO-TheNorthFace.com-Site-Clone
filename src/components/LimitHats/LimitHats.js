import React, { Component } from 'react';
import { getLimitedProducts } from './../../services/axiosServices';
import IndividualProduct from './../IndividualProduct/IndividualProduct';
import './../../styles/limitCategories.css';
import { Link } from 'react-router-dom';


export default class LimitHats extends Component {
  constructor(props){
    super(props);
    this.state={
      hats: []
    }
  }

  componentDidMount() {
    getLimitedProducts(this.props.params, 'hats', 4).then((response)=>
      this.setState({
        hats: response
      })
    );
  }

  componentWillReceiveProps(newProps) {
    getLimitedProducts(newProps.params.gender, 'hats', 4).then((response)=>
      this.setState({
        hats: response
      })
    );
  }

    render(){

      console.log(this.props.params)

      let hatsLimit = this.state.hats.map( (product, index, arr) => {
        return (
          <IndividualProduct key={product.product_id} id={product.product_id} product={product} containerStyle={ 'limitedProductContainer' }/>
        )
      })

      return (
        <div>
          <div className="limitCategoryContainer">
            <div className="limitBreadcrumb">
              <h1>HATS</h1>
              <Link to={  `/${this.props.params.gender}/hats`}>
                <h2>VIEW ALL<span className="rightArrow"> > </span> </h2>
              </Link>
            </div>
            <div className="limitProductsDisplay">
              {hatsLimit}
            </div>
          </div>
        </div>
    )
  }
}
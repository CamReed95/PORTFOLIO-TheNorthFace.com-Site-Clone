import React, { Component } from 'react';
import { getLimitedProducts } from './../../services/axiosServices';
import IndividualProduct from './../IndividualProduct/IndividualProduct';
import './../../styles/limitCategories.css';
import { Link } from 'react-router-dom';

export default class LimitBackpacks extends Component {
  constructor(props){
    super(props);
    this.state={
      backpacks: []
    }
  }

  componentDidMount() {
    getLimitedProducts(this.props.params, 'backpacks', 4).then((response)=>
      this.setState({
        backpacks: response
      })
    );
  }

  componentWillReceiveProps(newProps) {
    getLimitedProducts(newProps.params.gender, 'backpacks', 4).then((response)=>
      this.setState({
        backpacks: response
      })
    );
  }

    render(){

      console.log(this.props.params)

      let backpacksLimit = this.state.backpacks.map( (product, index, arr) => {
        return (
          <IndividualProduct key={product.product_id} id={product.product_id} product={product} containerStyle={ 'limitedProductContainer' }/>
        )
      })

      return (
        <div>
          <div className="limitCategoryContainer">
            <div className="limitBreadcrumb">
              <h1>BACKPACKS</h1>
              <Link to={  `/${this.props.params.gender}/backpacks`}>
                <h2>VIEW ALL <span className="rightArrow"> > </span> </h2>
              </Link>
            </div>
            <div className="limitProductsDisplay">
              {backpacksLimit}
            </div>
          </div>
        </div>
    )
  }
}

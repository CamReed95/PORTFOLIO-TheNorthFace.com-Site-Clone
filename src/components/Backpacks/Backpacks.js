import React, { Component } from 'react';
import { getLimitedProducts } from './../../services/axiosServices';
import IndividualProduct from './../IndividualProduct/IndividualProduct';
import './../../styles/limitCategories.css';
import './backpacks.css';
import { Link } from 'react-router-dom';


export default class Backpacks extends Component {
  constructor(props){
    super(props);
    this.state={
      mensBackpacks: [],
      womensBackpacks: []
    }
  }

  componentDidMount() {
    getLimitedProducts('mens', 'backpacks', 8).then((response)=>
      this.setState({
        mensBackpacks: response
      })
    );

    getLimitedProducts('womens', 'backpacks', 8).then((response)=>
      this.setState({
        womensBackpacks: response
      })
    );
  }



  render(){

    let mensBackpacksLimit = this.state.mensBackpacks.map( (product, index, arr) => {
      return (
        <IndividualProduct key={product.product_id} id={product.product_id} product={product} containerStyle={ 'limitedProductContainer' }/>
      )
    })

    let womensBackpacksLimit = this.state.womensBackpacks.map( (product, index, arr) => {
      return (
        <IndividualProduct key={product.product_id} id={product.product_id} product={product} containerStyle={ 'limitedProductContainer' }/>
      )
    })


    return (
      <div className="limitContentContainer">
          <div className="limitCategoryContainer">
            <div className="limitBreadcrumb">
              <h1>{"MEN'S"} BACKPACKS</h1>
              <h2>VIEW ALL ({this.state.mensBackpacks.length * 2})<span className="rightArrow"> > </span> </h2>
            </div>
            <div className="limitProductsDisplay">
              {mensBackpacksLimit}
            </div>
          </div>

          <div className="limitCategoryContainer">
            <div className="limitBreadcrumb">
              <h1>{"WOMEN'S"} BACKPACKS</h1>
              <h2>VIEW ALL ({this.state.womensBackpacks.length * 2})<span className="rightArrow"> > </span> </h2>
            </div>
            <div className="limitProductsDisplay">
              {womensBackpacksLimit}
            </div>
          </div>
      </div>


    )
  }
}

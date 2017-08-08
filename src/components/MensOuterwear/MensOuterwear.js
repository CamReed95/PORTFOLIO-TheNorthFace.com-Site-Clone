import React,{ Component }from 'react';
import { getProducts } from './../../services/axiosServices';
import './../../styles/allProductsView.css';
import { Link } from 'react-router-dom';
import IndividualProduct from './../IndividualProduct/IndividualProduct';



export default class MensOuterwear extends Component {
  constructor(props) {
    super(props);

    this.state={
      products: []
    }

  }

componentDidMount() {
  console.log("COMPONENT MOUNTED")

  getProducts('mens', 'outerwear').then(products => {
    console.log("WORKING!!!");
    this.setState({products});
    console.log(this.state.products)
  });
}


  render() {

    const mensOuterwear = this.state.products.map( (product, index, arr) => {


      return (
        <IndividualProduct key={product.product_id} id={product.product_id} product={product} />
      )
    } )

    return (
      <div className="contentContainer">
        <div className="breadCrumbs">
          <p><Link to="/">HOME</Link></p>
          <p>/</p>
          <p><Link to="/mens">{"MEN'S"}</Link></p>
          <h3>/ /</h3>
          <h3 className="currPage">OUTERWEAR</h3>
        </div>
        <div className="productsLayout">
        {mensOuterwear}
        </div>
      </div>
    )
  }

}

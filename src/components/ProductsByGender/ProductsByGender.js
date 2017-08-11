import React, { Component } from 'react';
import './productsByGender.css';
import { getLimitedProducts } from './../../services/axiosServices';
import LimitOuterwear from './../LimitOuterwear/LimitOuterwear';
import LimitShirts from './../LimitShirts/LimitShirts';
import LimitBottoms from './../LimitBottoms/LimitBottoms';
import LimitHats from './../LimitHats/LimitHats';
import LimitBackpacks from './../LimitBackpacks/LimitBackpacks';



export default class Mens extends Component {
  constructor(props) {
    super(props);
    this.state={
      backpacks: []
    }

  }

  componentDidMount() {
    // getLimitedProducts(this.props.match.params.gender, 'outerwear', 4).then((response)=>
    //   this.setState({
    //     outerwear: response
    //   })
    // );
    // getLimitedProducts(this.props.match.params.gender, 'shirts', 4).then((response)=>
    //   this.setState({
    //     shirts: response
    //   })
    // );
    // getLimitedProducts(this.props.match.params.gender, 'bottoms', 4).then((response)=>
    //   this.setState({
    //     bottoms: response
    //   })
    // );
    // getLimitedProducts(this.props.match.params.gender, 'hats', 4).then((response)=>
    //   this.setState({
    //     hats: response
    //   })
    // );
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
    // getLimitedProducts(newProps.match.params.gender, 'shirts', 4).then((response)=>
    //   this.setState({
    //     shirts: response
    //   })
    // );
    // getLimitedProducts(newProps.match.params.gender, 'bottoms', 4).then((response)=>
    //   this.setState({
    //     bottoms: response
    //   })
    // );
    // getLimitedProducts(newProps.match.params.gender, 'hats', 4).then((response)=>
    //   this.setState({
    //     hats: response
    //   })
    // );
    getLimitedProducts(newProps.match.params.gender, 'backpacks', 4).then((response)=>
      this.setState({
        backpacks: response
      })
    );

  }


  render() {

    return (
      <div className="contentContainer">
      <LimitOuterwear params={this.props.match.params}/>
      <LimitShirts params={this.props.match.params}/>
      <LimitBottoms params={this.props.match.params}/>
      <LimitHats params={this.props.match.params}/>
      <LimitBackpacks params={this.props.match.params}/>


      </div>
    )
  }
}

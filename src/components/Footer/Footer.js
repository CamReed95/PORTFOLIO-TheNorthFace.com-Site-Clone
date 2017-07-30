import React from 'react';
import './footer.css';

export default function Footer(props) {
  return (
    <div className="footerContainer">
      <div className="footerContent">
      <div className="linkColumns">
        <div className="shop">

        <h3>SHOP</h3>
        <ul className="footerLinks">
          <li>Gifts</li>
          <li>Gift Cards</li>
          <li>Mens</li>
          <li>Womens</li>
          <li>Backpacks</li>
          <li>Expert Personal Shopper</li>
        </ul>
        </div>

        <div className="container">
        <h3>HELP</h3>
        <ul className="footerLinks">
          <li>FAQ?</li>
          <li>Order Status</li>
          <li>Sizing Charts</li>
          <li>Return Policy</li>
          <li>Contact Us</li>
        </ul>
        </div>

        <div className="container">
        <h3>ABOUT TNF</h3>
        <ul className="footerLinks">
          <li>Our Story</li>
          <li>Responsibility</li>
          <li>Technology & Innovation</li>
          <li>Athlete Team</li>
          <li>Expeditions</li>
          <li>News</li>
          <li>Careers</li>
        </ul>
        </div>

        <div className="container">
        <h3>EVENTS</h3>
        <ul className="footerLinks">
          <li>Peak2Park Virtual Competition</li>
          <li>Endurance Challenge</li>
          <li>Speaker Series</li>
        </ul>
        </div>

        <div className="container">
        <h3>EXPLORE</h3>
        <ul className="footerLinks">
          <li>THE NORTH FACE APP</li>
        </ul>
        <img className="appStore" src="./../../images/app-store.png" alt="app store logo"/>
        </div>
      </div>

      <div className="byLine">
      <img className="tnf-logo" src="./../../images/logo-tnf.svg" alt="TNF Logo"/>

      <div className="copyright">
      <p>Site Clone by Dave Guymon</p>
      <br />
      <p>DevMountain Student, Provo, UT</p>
      <p>Available for Hire</p>
      </div>
      </div>

      </div>


    </div>
  )
}

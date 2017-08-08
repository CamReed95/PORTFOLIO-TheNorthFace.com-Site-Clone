import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <div className="footerContainer">
      <div className="footerContent">
      <div className="linkColumns">

        <div className="container">
        <header className="linksHeader">
          <h3>SHOP</h3>
          <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon"/>
        </header>
        <ul className="footerLinks">
          <li>Gifts</li>
          <li>Gift Cards</li>
          <li>{"Women's"}</li>
          <li>{"Men's"}</li>
          <li>Backpacks</li>
        </ul>
        </div>

        <div className="container">
        <header className="linksHeader">
          <h3>HELP</h3>
          <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon"/>
        </header>
        <ul className="footerLinks">
          <li>FAQ?</li>
          <li>Order Status</li>
          <li>Sizing Charts</li>
          <li>Return Policy</li>
          <li>Contact Us</li>
        </ul>
        </div>

        <div className="container">
        <header className="linksHeader">
          <h3>ABOUT TNF</h3>
          <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon"/>
        </header>
        <ul className="footerLinks">
          <li>Our Story</li>
          <li>Responsibility</li>
          <li>Athlete Team</li>
          <li>Expeditions</li>
          <li>News</li>
          <li>Careers</li>
        </ul>
        </div>

        <div className="container">
        <header className="linksHeader">
          <h3>EVENTS</h3>
          <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon"/>
        </header>
        <ul className="footerLinks">
          <li>Endurance Challenge</li>
          <li>Speaker Series</li>
        </ul>
        </div>

        <div className="container">
        <header className="linksHeader">
          <h3>EXPLORE</h3>
          <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon"/>
        </header>
        <ul className="footerLinks">
          <li>THE NORTH FACE APP</li>
        </ul>
        <img className="appStore" src="./../../images/app-store.png" alt="app store logo"/>
        </div>
      </div>

      <div className="byLine">
      <Link to="/">
        <img className="tnf-logo" src="./../../images/logo-tnf.svg" alt="The North Face Logo"/>
      </Link>
        <div className="copyright">
        <p>SITE CLONE BY DAVE GUYMON</p>
        <br />
        <p>DEVMOUNTAIN STUDENT, PROVO, UT</p>
        <p>AVAILABLE FOR HIRE</p>
        </div>
      </div>

      </div>
      <div className="mobileViewFooterBar">
      </div>
    </div>
  )
}

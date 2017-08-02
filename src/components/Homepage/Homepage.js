import React from 'react';
import { Link } from 'react-router-dom';
import './../../contentContainer.css';
import './homepage.css';

export default function Homepage (props) {
  return (

    <main className="homepageContainer">
      <section className="topSectionContainer">
        <div className="topContent">
          <div className="tlContent">
            <div className="tlContentInner">
              <h1>BUILT TO LAST</h1>
              <h2>Backed by a Lifetime Warranty.</h2>
              <div className="button">
                <Link to='/backpacks'>
                  <h3>SHOP ALL PACKS</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="trContent">
          </div>
        </div>
      </section>

      <section className="bottomSectionContainer">
        <div className="feature featureLeft">
          <div className="imgContainer imgLeft">
          </div>
          <h1>{"WE'VE GOT YOUR BACK"}</h1>
          <p>A lifetime warranty for a lifetime of adventure.</p>
          <div className="button featureButton">
            <Link to="/backpacks">
              <h3>FIND YOUR PERFECT PACK</h3>
            </Link>
          </div>
        </div>

        <div className="feature featureMiddle">
          <div className="imgContainer imgMiddle">
          </div>
          <h1>{"SHOW THEM WHO'S BOSS"}</h1>
          <p>Get your hands on the best form-fitting gear for fall.</p>
          <div className="button featureButton">
            <Link to="/womens">
              <h3>{"SHOP WOMENS"}</h3>
            </Link>
          </div>
        </div>

        <div className="feature featureRight">
          <div className="imgContainer imgRight">
          </div>
          <h1>PREPARE FOR ADVENTURE</h1>
          <p>Look good when you get there.</p>
          <div className="button featureButton">
            <Link to="/mens">
              <h3>{"SHOP MENS"}</h3>
            </Link>
          </div>
        </div>
      </section>
    </main>

  )
}

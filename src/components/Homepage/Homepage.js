import React from 'react';
import { Link } from 'react-router-dom';
import './../../contentContainer.css';
import './homepage.css';

export default function Homepage (props) {
  return (

    <main className="homepageContainer">
      <div className="topSectionContainer">
        <div className="topContent">
          <div className="tlContent">
            <div className="tlContentInner">
              <h1>BUILT TO LAST</h1>
              <h2>Backed by a Lifetime Warranty.</h2>
              <div className="shopPacks">
                <Link to='/backpacks'>
                  <h3>Shop All Packs</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="trContent">
          </div>
        </div>
      </div>

      <div className="bottomSectionContainer">
      <p>I AM THE BOTTOM SECTION</p>
      </div>
    </main>

  )
}

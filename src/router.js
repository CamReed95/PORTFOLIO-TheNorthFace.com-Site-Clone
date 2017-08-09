import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Mens from './components/Mens/Mens';
import Womens from './components/Womens/Womens';
import Backpacks from './components/Backpacks/Backpacks';
import Explore from './components/Explore/Explore';
import ProductsByCategory from './components/ProductsByCategory/ProductsByCategory';
import DetailedView from './components/DetailedView/DetailedView';

export default (
  <Switch>
    <Route exact path="/" component={ Homepage } />
    <Route exact path="/mens" component={ Mens } />
    <Route path="/shop/:gender/:category" component={ ProductsByCategory } />
    <Route exact path="/womens" component={ Womens } />
    <Route path="/backpacks" component={ Backpacks } />
    <Route path="/explore" component={ Explore } />
    <Route path="/product/:product_id" component={ DetailedView } />
  </Switch>
)

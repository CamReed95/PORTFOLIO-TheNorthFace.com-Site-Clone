import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Mens from './components/Mens/Mens';
import Womens from './components/Womens/Womens';
import Backpacks from './components/Backpacks/Backpacks';
import Explore from './components/Explore/Explore';
import MensOuterwear from './components/MensOuterwear/MensOuterwear';

export default (
  <Switch>
    <Route exact path="/" component={ Homepage } />
    <Route exact path="/mens" component={ Mens } />
    <Route path="/mens/outerwear" component={ MensOuterwear } />
    <Route path="/womens" component={ Womens } />
    <Route path="/backpacks" component={ Backpacks } />
    <Route path="/explore" component={ Explore } />
  </Switch>
)

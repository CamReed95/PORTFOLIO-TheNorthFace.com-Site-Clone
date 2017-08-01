import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Mens from './components/Mens/Mens';
import Womens from './components/Womens/Womens';
import Backpacks from './components/Backpacks/Backpacks';
import Explore from './components/Explore/Explore';

export default (
  <Switch>
    <Route exact path="/" component={ Homepage } />
    <Route path="/mens" component={ Mens } />
    <Route path="/womens" component={ Womens } />
    <Route path="/backpacks" component={ Backpacks } />
    <Route path="/explore" component={ Explore } />
  </Switch>
)

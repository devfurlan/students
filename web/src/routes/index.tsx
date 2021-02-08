import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn}/>

    <Route path="/students" exact component={Dashboard} isPrivate/>
  </Switch>
);

export default Routes;
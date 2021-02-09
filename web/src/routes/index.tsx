import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import AddStudents from '../pages/AddStudent';
import UpdateStudents from '../pages/UpdateStudent';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn}/>

    <Route path="/dashboard" exact component={Dashboard} isPrivate/>
    <Route path="/students/add" exact component={AddStudents} isPrivate/>
    <Route path="/students/update" exact component={UpdateStudents} isPrivate/>
  </Switch>
);

export default Routes;
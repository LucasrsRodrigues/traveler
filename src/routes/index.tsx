import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Detail from '../pages/Detail';


const routes: React.FC = () => {
  return(
      <Switch>
          <Route path="/" component= {Dashboard} exact />
          <Route path="/login" component={Login} />
          <Route path="/city/:cityName" component={Detail} />
      </Switch>
  );
}

export default routes;
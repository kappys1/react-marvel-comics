import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Carousel from '../pages/Carousel';
import Detail from '../pages/Detail';
import WaitingComponent from '../components/WaitingComponent';

const routes = (
  <div>
    <Switch>
      <Route
        exact
        path={process.env.PUBLIC_URL + '/'}
        component={WaitingComponent(Carousel)}
        key="home"
      />
      <Route
        path={process.env.PUBLIC_URL + '/detail'}
        component={WaitingComponent(Detail)}
        key="detail"
      />
      <Redirect to={process.env.PUBLIC_URL + '/'} />
    </Switch>
  </div>
);

export default routes;

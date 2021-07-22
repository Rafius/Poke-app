import React, { FC } from 'react';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import routesConfig, { routeModel } from './routes-config';
import Loader from '../components/loader';
import MainContainer from '../containers/MainContainer';

const Routes: FC = () => (
  <BrowserRouter>
    <MainContainer>
      <Switch>
        {routesConfig.map((route: routeModel) => (
          <Route exact {...route} key={route.key} />
        ))}
        <Redirect to="/" />
      </Switch>
      <Loader />
    </MainContainer>
  </BrowserRouter>
);

export default Routes;

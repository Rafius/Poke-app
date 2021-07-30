import React, { FC } from 'react';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import routesConfig, { routeModel } from './routes-config';
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
    </MainContainer>
  </BrowserRouter>
);

export default Routes;

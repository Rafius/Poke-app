import React, { FC } from "react"
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom"
import routesConfig, { routeModel } from "./routes-config"
import Loader from "../components/loader"

const Routes: FC = () => (
  <BrowserRouter>
		<Switch>
      {routesConfig.map((route: routeModel)=> <Route exact {...route} key={route.key} />)}
			<Redirect to="/" />
		</Switch>
		<Loader />
	</BrowserRouter>
)

export default Routes
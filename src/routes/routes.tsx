import React, { FC } from "react"
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom"
import routesConfig, { routeModel } from "./routes-config"

const Routes: FC = () => (
  <BrowserRouter>
		<Switch>
      {routesConfig.map((route: routeModel)=>
			  <Route {...route} key={route.key} />
      )}
			<Redirect to="/" />
		</Switch>
	</BrowserRouter>
)

export default Routes
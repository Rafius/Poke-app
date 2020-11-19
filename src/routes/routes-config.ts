import Home from "../containers/home"

export interface routeModel {
  key: number;
  path?: any;
  component: any;
}

const RoutesConfig: routeModel[] = [
  {
    key: 0,
    path: "/",
    component: Home    
  }
]

export default RoutesConfig
import Pokemon from '../containers/pokemon';
import PokemonDetails from '../containers/pokemon-details';

export interface routeModel {
  key: number;
  path?: any;
  component: any;
}

const RoutesConfig: routeModel[] = [
  {
    key: 0,
    path: '/',
    component: Pokemon
  },
  {
    key: 1,
    path: '/pokemon-details/:id',
    component: PokemonDetails
  }
];

export default RoutesConfig;

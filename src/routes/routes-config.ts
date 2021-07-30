import Pokemons from '../containers/Pokemons';
import PokemonDetails from '../containers/PokemonDetails';

export interface routeModel {
  key: number;
  path: any;
  component: any;
}

const RoutesConfig: routeModel[] = [
  {
    key: 0,
    path: '/',
    component: Pokemons
  },
  {
    key: 1,
    path: '/pokemon-details/:id',
    component: PokemonDetails
  }
];

export default RoutesConfig;

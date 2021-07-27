import Pokemons from '../containers/Pokemons';
import PokemonDetails from '../containers/PokemonDetails';
import Product from '../containers/Product';

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
  },
  {
    key: 2,
    path: '/product',
    component: Product
  }
];

export default RoutesConfig;

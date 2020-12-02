import {createSelector} from 'reselect';
import {ApplicationState} from '../reducer';
import {PokemonsTypes} from './pokemons-types';

export const pokemonsSelector = (state: ApplicationState) =>
  state && state.pokemons;

export const pokemonsDataSelector = createSelector(
  [pokemonsSelector],
  (pokemons: PokemonsTypes) =>
    pokemons.filter
      ? pokemons.data.filter((pokemon: any) =>
          pokemon.name.includes(pokemons.filter)
        )
      : pokemons.data
);

export const pokemonsCurrentPokemonSelector = createSelector(
  [pokemonsSelector],
  (pokemons: PokemonsTypes) => pokemons.currentPokemon
);

export const pokemonsFilterSelector = createSelector(
  [pokemonsSelector],
  (pokemons: PokemonsTypes) => pokemons.filter
);

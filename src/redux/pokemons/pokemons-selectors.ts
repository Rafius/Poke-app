import { createSelector } from 'reselect';
import { ApplicationState } from '../reducer';

export const pokemonsSelector = (state: ApplicationState) =>
  state && state.pokemons;

export const pokemonsDataSelector = createSelector(
  [pokemonsSelector],
  (pokemons: any) =>
    pokemons.filter
      ? pokemons.data.filter((pokemon: any) =>
          pokemon.name.includes(pokemons.filter.toLowerCase())
        )
      : pokemons.data
);

export const pokemonsCurrentPokemonSelector = createSelector(
  [pokemonsSelector],
  (pokemons: any) => pokemons.currentPokemon
);

export const pokemonsFilterSelector = createSelector(
  [pokemonsSelector],
  (pokemons: any) => pokemons.filter
);

export const pokemonsIsLoadingSelector: any = createSelector(
  [pokemonsSelector],
  (pokemons: any) => pokemons.isLoading
);

export const pokemonsEvolutionsSelector = createSelector(
  [pokemonsSelector],
  (pokemons: any) => pokemons.evolutions
);

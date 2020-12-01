import { createSelector } from 'reselect';
import { ApplicationState } from '../reducer';
import { PokemonReqPayload, PokemonSprites } from './pokemon-types';

export const pokemonSelector = (state: ApplicationState) =>
  state.pokemon?.sort(
    (a: { id: number }, b: { id: number }) => a.id - b.id
  );

export const pokemonAbilitiesSelector = createSelector(
  [pokemonSelector],
  (pokemon: PokemonReqPayload) => pokemon.abilities || []
);

export const pokemonSpriteSelector = createSelector(
  [pokemonSelector],
  (pokemon: PokemonReqPayload) => pokemon.sprites || {}
);

export const pokemonBackDefaultSpriteSelector = createSelector(
  [pokemonSpriteSelector],
  (pokemonSprite: PokemonSprites) => pokemonSprite.back_default || ''
);

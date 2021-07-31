import React from 'react';
import { Pokemon } from '../../../redux/pokemons/pokemons-types';

import {
  PokemonDetailsButtonsContainer,
  PreviousPokemon,
  NextPokemon
} from './PokemonDetailsButtons.styled';

const PokemonDetailsButtons = ({ id }: Pokemon) => {
  const shouldShowPreviousPokemon: boolean = id > 1;
  const shouldShowNextPokemon: boolean = id < 898;
  return (
    <PokemonDetailsButtonsContainer>
      <PreviousPokemon
        to={`/pokemon-details/${id - 1}`}
        disabled={!shouldShowPreviousPokemon}
      >
        #{id - 1}
      </PreviousPokemon>
      <NextPokemon
        to={`/pokemon-details/${id + 1}`}
        disabled={!shouldShowNextPokemon}
      >
        #{id + 1}
      </NextPokemon>
    </PokemonDetailsButtonsContainer>
  );
};

export default PokemonDetailsButtons;

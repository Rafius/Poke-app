import React from 'react';

import {
  PokemonDetailsButtonsContainer,
  PreviousPokemon,
  NextPokemon
} from './PokemonDetailsButtons.styled';

const PokemonDetailsButtons = ({ id }) => {
  const shouldShowPreviousPokemon = id > 1;
  const shouldShowNextPokemon = id < 898;
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

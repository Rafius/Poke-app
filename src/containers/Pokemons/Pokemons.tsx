import React from 'react';

import Filter from '../../components/Filter';
import { PokemonsReqPayload } from '../../redux/pokemons/pokemons-types';
import { PokemonsContainer, PokemonsList } from './Pokemons.styled';
import PokemonCard from './PokemonCard';
import usePokemonsHook from './PokemonsHook';

const Pokemons = () => {
  const { pokemons } = usePokemonsHook();

  return (
    <PokemonsContainer data-testid="pokemon-container">
      <Filter />
      <PokemonsList>
        {pokemons.map(({ name }: PokemonsReqPayload, id: number) => (
          <PokemonCard name={name} key={id} id={id} />
        ))}
      </PokemonsList>
    </PokemonsContainer>
  );
};

export default Pokemons;

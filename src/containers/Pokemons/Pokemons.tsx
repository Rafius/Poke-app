import React from 'react';

import Filter from '../../components/Filter';
import { PokemonsReqPayload } from '../../redux/pokemons/pokemons-types';
import { PokemonsContainer, PokemonsList } from './Pokemons.styled';
import PokemonCard from './PokemonCard';
import usePokemons from './PokemonsHooks';

const Pokemons = () => {
  const { pokemons } = usePokemons();

  return (
    <PokemonsContainer data-testid="pokemon-container">
      <Filter />
      <PokemonsList>
        {pokemons.map(
          ({ name, url }: PokemonsReqPayload, id: number) => (
            <PokemonCard name={name} id={id} key={id} url={url} />
          )
        )}
      </PokemonsList>
    </PokemonsContainer>
  );
};

export default Pokemons;

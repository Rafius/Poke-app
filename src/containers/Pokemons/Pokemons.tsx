import React from 'react';
import Filter from '../../components/Filter';
import { PokemonsContainer, PokemonsList } from './Pokemons.styled';
import PokemonCard from './PokemonCard';
import usePokemons from './PokemonsHooks';
import Loader from '../../components/Loader';
import { Result } from '../../redux/pokemons/pokemons-types';

const Pokemons = () => {
  const { pokemons, isLoading } = usePokemons();

  if (isLoading) return <Loader isLoading={isLoading} />;

  return (
    <PokemonsContainer data-testid="pokemons-container">
      <Filter />
      <PokemonsList>
        {pokemons.map(({ name, url }: Result, id: number) => (
          <PokemonCard name={name} key={id} url={url} />
        ))}
      </PokemonsList>
    </PokemonsContainer>
  );
};

export default Pokemons;

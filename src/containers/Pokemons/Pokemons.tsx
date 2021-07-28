import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../../components/Filter';
import {
  getPokemonsStart,
  pokemonsDataSelector
} from '../../redux/pokemons';
import { PokemonsReqPayload } from '../../redux/pokemons/pokemons-types';
import {
  PokemonsContainer,
  PokemonsList,
  PokemonContainer,
  Img,
  PokemonName
} from './Pokemons.styled';

const getPokemonId = (id: string) => id.padStart(3, '000');

const Pokemons = () => {
  const pokemons: PokemonsReqPayload[] = useSelector(
    pokemonsDataSelector
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsStart());
  }, [dispatch]);

  return (
    <PokemonsContainer data-testid="pokemon-container">
      <Filter />
      <PokemonsList>
        {pokemons.map(({ name }: PokemonsReqPayload, id: number) => (
          <PokemonContainer
            key={id}
            data-testid="pokemon-item"
            to={`/pokemon-details/${id + 1}`}
          >
            <Img
              loading="lazy"
              alt="loading"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemonId(
                (id + 1).toString()
              )}.png`}
            />
            <PokemonName>{name.toUpperCase()}</PokemonName>
          </PokemonContainer>
        ))}
      </PokemonsList>
    </PokemonsContainer>
  );
};

export default Pokemons;

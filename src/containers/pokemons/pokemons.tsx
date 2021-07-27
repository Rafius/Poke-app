import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../../components/filter';
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
  PokemonName,
  Products
} from './Pokemons.styled';

const Pokemons = () => {
  const pokemons: PokemonsReqPayload[] = useSelector(
    pokemonsDataSelector
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsStart());
  }, [dispatch]);

  const getId = (url: string) => url.split('/')[6];

  return (
    <PokemonsContainer data-testid="pokemon-container">
      <Products to="product">List of Products with graphql</Products>
      <Filter />
      <PokemonsList>
        {pokemons.map(
          ({ name, url }: PokemonsReqPayload, id: number) => (
            <PokemonContainer
              key={id}
              data-testid="pokemon-item"
              to={`/pokemon-details/${getId(url)}`}
            >
              <Img
                loading="lazy"
                alt="loading"
                src={`https://pokeres.bastionbot.org/images/pokemon/${getId(
                  url
                )}.png`}
              />
              <PokemonName>{name.toUpperCase()}</PokemonName>
            </PokemonContainer>
          )
        )}
      </PokemonsList>
    </PokemonsContainer>
  );
};

export default Pokemons;

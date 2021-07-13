import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
  Img
} from './Pokemons.styled';

const Pokemon = () => {
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
      <Link to="product">List of Products with graphql</Link>
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
              {name.toUpperCase()}
            </PokemonContainer>
          )
        )}
      </PokemonsList>
    </PokemonsContainer>
  );
};

export default Pokemon;

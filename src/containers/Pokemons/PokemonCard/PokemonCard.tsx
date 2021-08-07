import React from 'react';
import { Result } from '../../../redux/pokemons/pokemons-types';
import {
  PokemonCardContainer,
  PokemonCardImg,
  PokemonCardName
} from './PokemonCard.styled';

const getPokemonId = (url: string) =>
  url?.split('/')[6]?.padStart(3, '000');

const PokemonCard = ({ name, url }: Result) => (
  <PokemonCardContainer
    data-testid="pokemon-item"
    to={`/pokemon-details/${url.split('/')[6]}`}
  >
    <PokemonCardImg
      loading="lazy"
      alt="loading"
      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemonId(
        url
      )}.png`}
    />
    <PokemonCardName>{name.toUpperCase()}</PokemonCardName>
  </PokemonCardContainer>
);

export default PokemonCard;

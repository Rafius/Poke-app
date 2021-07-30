import React from 'react';
import {
  PokemonCardContainer,
  PokemonCardImg,
  PokemonCardName
} from './PokemonCard.styled';

interface PokemonCardTypes {
  name: string;
  url: string;
}

const getPokemonId = (url: string) =>
  url.split('/')[6].padStart(3, '000');

const PokemonCard = ({ name, url }: PokemonCardTypes) => (
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

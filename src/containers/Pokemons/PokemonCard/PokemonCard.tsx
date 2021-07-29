import React from 'react';
import {
  PokemonCardContainer,
  PokemonCardImg,
  PokemonCardName
} from './PokemonCard.styled';

interface PokemonCardTypes {
  name: string;
  id: number;
  key: number;
  url: string;
}

const getPokemonId = (url: string) =>
  url.split('/')[6].padStart(3, '000');

const PokemonCard = ({ name, id, url }: PokemonCardTypes) => (
  <PokemonCardContainer
    key={id}
    data-testid="pokemon-item"
    to={`/pokemon-details/${id + 1}`}
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

import React from 'react';
import {
  PokemonCardContainer,
  PokemonCardImg,
  PokemonCardName
} from './PokemonCard.styled';

interface PokemonCardTypes {
  name: string;
  id: number;
}

const getPokemonId = (id: string) => id.padStart(3, '000');

const PokemonCard = ({ name, id }: PokemonCardTypes) => (
  <PokemonCardContainer
    key={id}
    data-testid="pokemon-item"
    to={`/pokemon-details/${id + 1}`}
  >
    <PokemonCardImg
      loading="lazy"
      alt="loading"
      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemonId(
        (id + 1).toString()
      )}.png`}
    />
    <PokemonCardName>{name.toUpperCase()}</PokemonCardName>
  </PokemonCardContainer>
);

export default PokemonCard;

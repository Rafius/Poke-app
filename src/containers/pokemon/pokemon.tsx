import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPokemonStart,
  pokemonSelector,
} from '../../redux/pokemon';
import {
  PokemonsContainer,
  PokemonContainer,
  Img,
  PokemonDetails,
} from './pokemon.styled';

const Pokemon = () => {
  const pokemons: any = useSelector(pokemonSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonStart({ count: 25 }));
  }, [dispatch]);

  return (
    <PokemonsContainer data-testid="pokemon-container">
      {pokemons?.map(({ height, name, sprites, id }: any) => (
        <PokemonContainer key={id} data-testid="pokemon-item">
          <Img alt="loading" src={sprites?.front_default}></Img>
          <PokemonDetails>
            <div>name: {name}</div>
            <div>height: {height}</div>
          </PokemonDetails>
        </PokemonContainer>
      ))}
    </PokemonsContainer>
  );
};

export default Pokemon;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/back-button';
import { isLoadingSelector } from '../../redux/loader/loader-selectors';
import {
  getPokemonByIdStart,
  pokemonsCurrentPokemonSelector
} from '../../redux/pokemons';
import {
  PokemonsDetailsContainer,
  PokemonTypes
} from './PokemonDetails.styled';

const PokemonDetails = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const pokemon: any = useSelector(pokemonsCurrentPokemonSelector);
  const isLoading: string = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(getPokemonByIdStart(id));
  }, [dispatch, id]);

  if (isLoading) return null;
  const { height, types, sprites, name } = pokemon;

  return (
    <PokemonsDetailsContainer data-testid="pokemon-details-container">
      <BackButton />
      <div>
        Types:
        {types?.map(({ type }: any) => (
          <PokemonTypes>{type.name}</PokemonTypes>
        ))}
      </div>
      <div>name: {name}</div>
      <div>height: {height}</div>
      <img alt="loading" src={sprites?.front_default}></img>
      <img alt="loading" src={sprites?.back_default}></img>
    </PokemonsDetailsContainer>
  );
};

export default PokemonDetails;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isLoadingSelector } from '../../redux/loader/loader-selectors';
import {
  getPokemonByIdStart,
  pokemonsCurrentPokemonSelector
} from '../../redux/pokemons';
import {
  PokemonDetailsContainer,
  PokemonDetailsBox,
  PokemonDetailsName,
  PokemonDetailsDescription,
  PokemonDetailsHeight,
  PokemonDetailsWeight,
  PokemonDetailsId,
  PokemonDetailsImagesContainer,
  PokemonDetailsImage,
  PokemonDetailsTypesContainer,
  PokemonDetailsType
} from './PokemonDetails.styled';
import PokemonDetailsButtons from './PokemonDetailsButtons';

const PokemonTypeDictionary: any = {
  normal: '#A8A77A',
  fire: '#ee8130',
  water: '#6390f0',
  electric: '#f7d02c',
  grass: '#7ac74c',
  ice: '#96d9d6',
  fighting: '#c22e28',
  poison: '#a33ea1',
  ground: '#e2bf65',
  flying: '#a98ff3',
  psychic: '#f95587',
  bug: '#a6b91a',
  rock: '#b6a136',
  ghost: '#735797',
  dragon: '#6f35fc',
  dark: '#705746',
  steel: '#b7b7ce',
  fairy: '#d685ad'
};
const PokemonDetails = () => {
  const params: any = useParams();
  const id = parseInt(params.id);
  const dispatch = useDispatch();
  const pokemon: any = useSelector(pokemonsCurrentPokemonSelector);
  const isLoading: string = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(getPokemonByIdStart(id));
  }, [dispatch, id]);

  if (isLoading) return null;
  const { weight, height, sprites, name, types } = pokemon;

  return (
    <PokemonDetailsContainer>
      <PokemonDetailsButtons id={id} />
      <PokemonDetailsBox data-testid="pokemon-details-container">
        <PokemonDetailsName>{name}</PokemonDetailsName>
        <PokemonDetailsDescription>
          <PokemonDetailsId>Id: {id}</PokemonDetailsId>
          <PokemonDetailsHeight>
            Height: {height}
          </PokemonDetailsHeight>
          <PokemonDetailsWeight>
            Weight: {weight}
          </PokemonDetailsWeight>
          <PokemonDetailsImagesContainer>
            <PokemonDetailsImage
              loading="lazy"
              alt="loading"
              src={sprites?.front_default}
            ></PokemonDetailsImage>
            <PokemonDetailsImage
              loading="lazy"
              alt="loading"
              src={sprites?.back_default}
            ></PokemonDetailsImage>
          </PokemonDetailsImagesContainer>

          <PokemonDetailsTypesContainer>
            {types?.map(({ type, slot }: any) => (
              <PokemonDetailsType
                color={PokemonTypeDictionary[type.name]}
                key={slot}
              >
                {type.name}
              </PokemonDetailsType>
            ))}
          </PokemonDetailsTypesContainer>
        </PokemonDetailsDescription>
      </PokemonDetailsBox>
    </PokemonDetailsContainer>
  );
};

export default PokemonDetails;

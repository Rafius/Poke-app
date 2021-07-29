import React from 'react';
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
import usePokemonDetails from './PokemonDetailsHooks';

const PokemonDetails = () => {
  const { id, name, height, weight, sprites, types, isLoading } =
    usePokemonDetails();

  if (isLoading) return null;

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
              <PokemonDetailsType color={type.name} key={slot}>
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

import React from 'react';

import Loader from '../../components/Loader';
import getColor from '../../utils/get-color';
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
  PokemonDetailsType,
  PokemonTypeDictionary
} from './PokemonDetails.styled';
import PokemonDetailsButtons from './PokemonDetailsButtons';
import usePokemonDetails from './PokemonDetailsHooks';

const PokemonDetails = () => {
  const { id, name, height, weight, sprites, types, isLoading } =
    usePokemonDetails();

  if (isLoading) return <Loader isLoading={isLoading} />;

  const handleGetTextColor = (name: string) => {
    if (name) return getColor(PokemonTypeDictionary[name]);
  };

  const getFirstType = types?.length && types[0].type.name;
  return (
    <PokemonDetailsContainer>
      <PokemonDetailsButtons id={id} />
      <PokemonDetailsBox data-testid="pokemon-details-container">
        <PokemonDetailsName
          backgroundColor={getFirstType}
          color={handleGetTextColor(getFirstType)}
        >
          {name?.toUpperCase()}
        </PokemonDetailsName>
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
                backgroundColor={type.name}
                color={handleGetTextColor(type.name)}
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

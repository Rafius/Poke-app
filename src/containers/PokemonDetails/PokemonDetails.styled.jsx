import styled from 'styled-components';

const PokemonTypeDictionary = {
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

export const PokemonDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
`;

export const PokemonDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  border: 1px solid grey;
  border-radius: 3px;
  margin: 0 auto;
  margin-top: 20px;
`;

export const PokemonDetailsName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: #dbbfd1;
  border-bottom: 1px solid grey;
`;
export const PokemonDetailsDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const PokemonDetailsTypesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PokemonDetailsType = styled.div`
  background-color: ${({ color }) => PokemonTypeDictionary[color]};
  border-radius: 3px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  text-align: center;
  text-transform: none;
  width: 45%;
  margin: 0 5px;
`;

export const PokemonDetailsHeight = styled.div``;
export const PokemonDetailsWeight = styled.div``;
export const PokemonDetailsId = styled.div``;
export const PokemonDetailsImagesContainer = styled.div``;
export const PokemonDetailsImage = styled.img`
  width: 100px;
  height: 100px;
`;

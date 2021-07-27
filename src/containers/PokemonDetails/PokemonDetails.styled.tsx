import styled from 'styled-components';

export const PokemonDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-color: ${({ color }) => color};
  border-radius: 3px;
  padding: 10px;
  color: white;
`;

export const PokemonDetailsHeight = styled.div``;
export const PokemonDetailsWeight = styled.div``;
export const PokemonDetailsId = styled.div``;
export const PokemonDetailsImagesContainer = styled.div``;
export const PokemonDetailsImage = styled.img``;

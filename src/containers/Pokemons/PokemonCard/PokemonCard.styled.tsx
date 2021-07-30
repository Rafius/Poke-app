import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PokemonCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid grey;
  border-radius: 5px;
  margin: 20px;
  width: 300px;
  height: 350px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: inherit;
`;

export const PokemonCardImg = styled.img`
  width: 100%;
  background-color: #ebecf0;
`;

export const PokemonCardName = styled.div`
  margin: 15px;
`;

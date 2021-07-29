import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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

export const PokemonCardImg = styled(LazyLoadImage)`
  width: 100%;
  background-color: #ebecf0;
`;

export const PokemonCardName = styled.div`
  margin: 15px;
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const PokemonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const PokemonContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid grey;
  border-radius: 5px;
  margin: 20px;
  width: 300px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: inherit;
`;

export const Img = styled(LazyLoadImage)`
  width: 100%;
  background-color: #ebecf0;
`;

export const PokemonName = styled.div`
  margin: 15px;
`;

import styled from 'styled-components';
import { Link } from "react-router-dom"

export const PokemonsContainer = styled.div`
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
  width: 20%;
  border: 2px solid grey;
  border-radius: 5px;
  margin: 20px;
  height: 200px;
  cursor: pointer;
  text-decoration: none;
`;

export const Img = styled.img`
  width: 100%;
  background-color: #ebecf0;
`;

export const PokemonDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

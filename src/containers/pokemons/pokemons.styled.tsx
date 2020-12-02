import styled from 'styled-components';
import { Link } from "react-router-dom"

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
`

export const PokemonContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid grey;
  border-radius: 5px;
  margin: 20px;
  max-width: 250px;
  max-height: 300px;
  cursor: pointer;
  text-decoration: none;
  color:black;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  background-color: #ebecf0;
`;


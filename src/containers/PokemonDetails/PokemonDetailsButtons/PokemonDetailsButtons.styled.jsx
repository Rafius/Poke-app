import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PokemonDetailsButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const commonButton = styled(Link)`
  text-decoration: none;
  margin-right: 10px;
  border: 1px solid grey;
  border-radius: 3px;
  background-color: #a4a4a4;
  cursor: pointer;
  text-decoration: none;
  color: white;
  padding: 10px;
  pointer-events: ${({ disabled }) => disabled && 'none'};
  background-color: ${({ disabled }) =>
    disabled ? '#a4a4a4' : 'lightblue'};
`;

export const PreviousPokemon = styled(commonButton)``;
export const NextPokemon = styled(commonButton)``;

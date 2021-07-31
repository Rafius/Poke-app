import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PokemonDetailsButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface Test {
  disabled: boolean;
}
const commonButton: Test = styled(Link)`
  text-decoration: none;
  border: 1px solid grey;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  padding: 10px;
  pointer-events: ${({ disabled }) => disabled && 'none'};
  background-color: ${({ disabled }) => disabled && '#a4a4a4'};
  width: 30px;
  text-align: center;
`;

export const PreviousPokemon = styled(commonButton)``;
export const NextPokemon = styled(commonButton)``;

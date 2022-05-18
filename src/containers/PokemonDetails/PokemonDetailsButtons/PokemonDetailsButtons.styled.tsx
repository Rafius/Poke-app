import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PokemonDetailsButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const commonButton = styled(Link)`
  text-decoration: none;
  border: 1px solid grey;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  padding: 10px;
  pointer-events: ${({ disabled }: any) => disabled && 'none'};
  background-color: ${({ disabled }: any) => disabled && '#a4a4a4'};
  width: 30px;
  text-align: center;
`;

export const PreviousPokemon: any = styled(commonButton)``;
export const NextPokemon: any = styled(commonButton)``;

import styled from 'styled-components';
import pokeballGif from './pokeball.gif';

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 769px) {
    align-items: center;
  }
`;

export const HomeButton = styled.img`
  height: 100px;
  vertical-align: top;

  &:hover {
    content: url(${pokeballGif});
  }
`;

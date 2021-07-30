import styled from 'styled-components';
import pokeballGif from './pokeball.gif';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeButton = styled.img`
  height: 100px;
  vertical-align: top;

  &:hover {
    content: url(${pokeballGif});
  }
`;

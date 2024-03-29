import React from 'react';
import Header from '../../components/Header/Header';

import { Main } from './MainContainer.styled';

const MainContainer = ({ children }: any) => {
  return (
    <Main data-testid="main-container">
      <Header />
      {children}
    </Main>
  );
};

export default MainContainer;

import React from 'react';
import { Link } from 'react-router-dom';

import { Main, HomeButton } from './MainContainer.styled';
import pokeball from './pokeball.png';

const MainContainer = ({ children }: any) => {
  return (
    <Main>
      <Link to="/">
        <HomeButton src={pokeball} loading="lazy" alt="loading..." />
      </Link>
      {children}
    </Main>
  );
};

export default MainContainer;

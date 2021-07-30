import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, HomeButton } from './Header.styled';
import pokeball from './pokeball.png';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <HomeButton src={pokeball} loading="lazy" alt="loading..." />
      </Link>
    </HeaderContainer>
  );
};

export default Header;

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { light, dark, GlobalStyles } from './themes.js';

const MainContainer = ({ children }: any) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const themeToggler = () => setDarkTheme(!darkTheme);

  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyles />
      <button onClick={themeToggler}>Change Theme</button>
      {children}
    </ThemeProvider>
  );
};

export default MainContainer;

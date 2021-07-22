import { createGlobalStyle } from 'styled-components';

export const light = {
  backgroundColor: '#fff',
  color: '#000'
};

export const dark = {
  backgroundColor: '#000',
  color: '#fff'
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
	}
`;

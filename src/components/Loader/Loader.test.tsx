import React from 'react';
import Loader from './Loader';
import { renderWithState } from '../../utils/render-test-utils';
import { screen } from '@testing-library/react';

jest.mock('../../redux/pokemons/pokemons-selectors.ts', () => ({
  isLoadingSelector: jest.fn()
}));

describe('Loader container', () => {
  it('Should render null', () => {
    const { container } = renderWithState(
      <Loader isLoading={false} />
    );

    expect(container.firstChild).toBeNull();
  });
  it('Should render the loader', () => {
    const { getByTestId } = renderWithState(
      <Loader isLoading={true} />
    );
    expect(getByTestId('loader-container')).toBeDefined();
  });
});

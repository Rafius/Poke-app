import React from 'react';
import Header from './Header';
import { renderWithState } from '../../utils/render-test-utils';

describe('Header container', () => {
  it('Should render the header', () => {
    const { getByTestId } = renderWithState(<Header />);
    expect(getByTestId('header-container')).toBeDefined();
  });
});

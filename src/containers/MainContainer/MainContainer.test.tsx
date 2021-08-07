import React from 'react';
import MainContainer from './MainContainer';
import { renderWithState } from '../../utils/render-test-utils';

describe('Main Container', () => {
  it('Should Main Container', () => {
    const { getByTestId } = renderWithState(<MainContainer />);

    expect(getByTestId('main-container')).toBeDefined();
  });
});

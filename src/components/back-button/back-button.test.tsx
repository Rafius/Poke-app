import React from 'react';
import BackButton from './back-button';
import { renderWithState } from '../../utils/render-test-utils';

describe('Back button container', () => {
  it('Should render the back button', () => {
    const { getByTestId } = renderWithState(<BackButton />);
    expect(getByTestId('back-button')).toBeDefined();
  })
});

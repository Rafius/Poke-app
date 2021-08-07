import React from 'react';
import { fireEvent } from '@testing-library/react';

import BackButton from './BackButton';
import { renderWithState } from '../../utils/render-test-utils';

describe('Back button component', () => {
  it('Should render the back button', () => {
    const { getByTestId } = renderWithState(<BackButton />);
    const container = getByTestId('back-button-container');

    fireEvent.click(container);
    expect(container).toBeDefined();
  });
});

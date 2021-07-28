import React from 'react';
import Loader from './Loader';
import { renderWithState } from '../../utils/render-test-utils';
import { isLoadingSelector } from '../../redux/loader/loader-selectors';

jest.mock('../../redux/loader/loader-selectors.ts', () => ({
  isLoadingSelector: jest.fn()
}));

describe('Loader container', () => {
  it('Shouldn´t render the loader', () => {
    const { queryByText } = renderWithState(<Loader />);
    expect(queryByText('loader-container')).not.toBeInTheDocument();
  });

  it('Should render the loader', () => {
    isLoadingSelector.mockReturnValue({
      isLoading: true
    });

    const { queryAllByTestId } = renderWithState(<Loader />);
    expect(queryAllByTestId('loader-container').length).toBeDefined();
  });
});

import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Filter from './Filter';
import { renderWithState } from '../../utils/render-test-utils';

describe('Filter component', () => {
  it('Should render the filter', () => {
    const { getByTestId } = renderWithState(<Filter />);
    expect(getByTestId('filter-container')).toBeDefined();
  });

  it('Should clean the filter', () => {
    const { getByTestId } = renderWithState(<Filter />);
    const button = getByTestId('filter-button-clean');
    const input = getByTestId('filter-input');

    fireEvent.click(button);
    expect(input.value).toBe('');
  });

  it('Should update the filter text', () => {
    const { getByTestId } = renderWithState(<Filter />);

    const input = getByTestId('filter-input');

    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
  });
});

import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Filter from './Filter';
import { renderWithState } from '../../utils/render-test-utils';

describe('Filter component', () => {
  it('Should render the filter', () => {
    renderWithState(<Filter />);
    expect(screen.getByTestId('filter-container')).toBeDefined();
  });

  it('Should clean the filter', () => {
    renderWithState(<Filter />);
    const button = screen.getByTestId('filter-button-clean');
    const input = screen.getByTestId(
      'filter-input'
    ) as HTMLInputElement;

    fireEvent.click(button);
    expect(input.value).toBe('');
  });

  it('Should update the filter text', () => {
    renderWithState(<Filter />);

    const input = screen.getByTestId(
      'filter-input'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
  });
});

import React from 'react';

import useFilterHooks from './FilterHooks';
import { FilterContainer, Input, CleanFilter } from './Filter.styled';

const Filter = () => {
  const { handleCleanFilter, filterValue, handleChange } =
    useFilterHooks();

  return (
    <FilterContainer data-testid="filter-container">
      <Input
        type="text"
        data-testid="filter-input"
        onChange={handleChange}
        value={filterValue}
      />
      <CleanFilter
        onClick={handleCleanFilter}
        data-testid="filter-button-clean"
      >
        Clean Filter
      </CleanFilter>
    </FilterContainer>
  );
};

export default Filter;

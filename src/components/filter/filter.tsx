import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  pokemonsFilterSelector,
  cleanFilterPokemonsByName,
  filterPokemonsByName
} from '../../redux/pokemons';

import { FilterContainer, Input, CleanFilter } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const handleCleanFilter = () =>
    dispatch(cleanFilterPokemonsByName());
  const filterValue: string = useSelector(pokemonsFilterSelector);

  const handleChange = (e: any) => {
    const { value } = e.target;
    dispatch(filterPokemonsByName(value));
  };

  return (
    <FilterContainer>
      <Input
        type="text"
        onChange={handleChange}
        value={filterValue}
      />
      <CleanFilter onClick={handleCleanFilter}>
        Clean Filter
      </CleanFilter>
    </FilterContainer>
  );
};

export default Filter;

import { useDispatch, useSelector } from 'react-redux';
import {
  cleanFilterPokemonsByName,
  pokemonsFilterSelector,
  filterPokemonsByName
} from '../../redux/pokemons';

const useFilterHooks = () => {
  const dispatch = useDispatch();
  const handleCleanFilter = () =>
    dispatch(cleanFilterPokemonsByName());
  const filterValue: string = useSelector(pokemonsFilterSelector);

  const handleChange = (e: any) => {
    const { value } = e.target;
    dispatch(filterPokemonsByName(value));
  };

  return { handleCleanFilter, filterValue, handleChange };
};

export default useFilterHooks;

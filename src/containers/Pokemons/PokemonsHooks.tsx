import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPokemons,
  pokemonsDataSelector,
  pokemonsFilterSelector,
  pokemonsIsLoadingSelector
} from '../../redux/pokemons';

const usePokemons = () => {
  const pokemons: any[] = useSelector(pokemonsDataSelector);

  const filter: string = useSelector(pokemonsFilterSelector);

  const isLoading: boolean = useSelector(pokemonsIsLoadingSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!(pokemons.length || filter)) dispatch(getPokemons());
  }, [dispatch, pokemons, filter]);

  return { pokemons, isLoading };
};

export default usePokemons;

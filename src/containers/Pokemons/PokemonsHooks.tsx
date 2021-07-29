import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPokemonsStart,
  pokemonsDataSelector
} from '../../redux/pokemons';
import { PokemonsReqPayload } from '../../redux/pokemons/pokemons-types';

const usePokemons = () => {
  const pokemons: PokemonsReqPayload[] = useSelector(
    pokemonsDataSelector
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemons.length) dispatch(getPokemonsStart());
  }, [dispatch, pokemons]);

  return { pokemons };
};

export default usePokemons;

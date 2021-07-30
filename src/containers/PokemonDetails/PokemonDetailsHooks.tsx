import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isLoadingSelector } from '../../redux/loader/loader-selectors';
import {
  getPokemonById,
  pokemonsCurrentPokemonSelector
} from '../../redux/pokemons';

const usePokemonDetails = () => {
  const params: any = useParams();
  const id = parseInt(params.id);
  const dispatch = useDispatch();
  const pokemon: any = useSelector(pokemonsCurrentPokemonSelector);
  const isLoading: string = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [dispatch, id]);

  return { ...pokemon, isLoading, id };
};

export default usePokemonDetails;

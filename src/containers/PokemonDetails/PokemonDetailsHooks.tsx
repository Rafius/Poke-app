import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getPokemonById,
  pokemonsCurrentPokemonSelector,
  pokemonsIsLoadingSelector,
  getPokemonEvolutionsById,
  pokemonsEvolutionsSelector
} from '../../redux/pokemons';
import {
  PokemonReqPayload,
  PokemonsEvolutions
} from '../../redux/pokemons/pokemons-types';

const usePokemonDetails = () => {
  const params: any = useParams();
  const id = parseInt(params.id);
  const dispatch = useDispatch();

  const pokemon: PokemonReqPayload = useSelector(
    pokemonsCurrentPokemonSelector
  );

  const evolutions: PokemonsEvolutions[] = useSelector(
    pokemonsEvolutionsSelector
  );

  const isLoading: boolean = useSelector(pokemonsIsLoadingSelector);

  useEffect(() => {
    dispatch(getPokemonById(id));
    dispatch(getPokemonEvolutionsById(id));
  }, [dispatch, id]);

  return { ...pokemon, isLoading, id, evolutions };
};

export default usePokemonDetails;

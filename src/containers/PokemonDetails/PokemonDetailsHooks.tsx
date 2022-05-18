import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getPokemonById,
  pokemonsCurrentPokemonSelector,
  pokemonsIsLoadingSelector,
  pokemonsEvolutionsSelector
} from '../../redux/pokemons';
import {
  Pokemon,
  PokemonEvolutions
} from '../../redux/pokemons/pokemons-types';

const usePokemonDetails = () => {
  const params: any = useParams();
  const id = parseInt(params.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [dispatch, id]);

  const pokemon: Pokemon = useSelector(
    pokemonsCurrentPokemonSelector
  );

  const evolutions: PokemonEvolutions = useSelector(
    pokemonsEvolutionsSelector
  );

  const isLoading: boolean = useSelector(pokemonsIsLoadingSelector);

  const getFirstType: string | 0 =
    pokemon.types?.length && pokemon.types[0].type.name;

  return {
    ...pokemon,
    isLoading,
    id,
    evolutions,
    getFirstType
  };
};

export default usePokemonDetails;

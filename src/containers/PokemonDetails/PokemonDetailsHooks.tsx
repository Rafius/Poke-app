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
import { PokemonTypeDictionary } from './PokemonDetails.styled';
import getColor from '../../utils/get-color';

const usePokemonDetails = () => {
  const params: any = useParams();
  const id = parseInt(params.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonById(id));
    dispatch(getPokemonEvolutionsById(id));
  }, [dispatch, id]);

  const pokemon: PokemonReqPayload = useSelector(
    pokemonsCurrentPokemonSelector
  );

  const evolutions: PokemonsEvolutions[] = useSelector(
    pokemonsEvolutionsSelector
  );

  const isLoading: boolean = useSelector(pokemonsIsLoadingSelector);

  const textColor = (name: string) => {
    console.log(name);
    if (name) return getColor(PokemonTypeDictionary[name]);
  };

  const getFirstType: string =
    pokemon.types?.length && pokemon.types[0].type.name;

  return {
    ...pokemon,
    isLoading,
    id,
    evolutions,
    textColor,
    getFirstType
  };
};

export default usePokemonDetails;

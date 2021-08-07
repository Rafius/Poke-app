import { call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from '../../utils/fetch-api';
import {
  getPokemonByIdFail,
  getPokemonByIdSuccess,
  getPokemonsFail,
  getPokemonsSuccess,
  getPokemonEvolutionsByIdSuccess,
  GET_POKEMONS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_EVOLUTIONS_BY_ID
} from './pokemons-actions';
import {
  Chain,
  Pokemon,
  PokemonEvolution,
  PokemonsList
} from './pokemons-types';

function* getPokemons() {
  try {
    const response: PokemonsList = yield call(fetchApi, {
      url: 'https://pokeapi.co/api/v2/pokemon?limit=898',
      method: 'GET'
    });
    yield put(getPokemonsSuccess(response));
  } catch (e) {
    yield put(getPokemonsFail(e));
  }
}

function* getPokemonById({ id }: Pokemon) {
  try {
    const response: Pokemon = yield call(fetchApi, {
      url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      method: 'GET'
    });
    yield put(getPokemonByIdSuccess(response));
  } catch (e) {
    yield put(getPokemonByIdFail(e));
  }
}
const parseEvolutionResponse = (chain: Chain) => {
  const evoChain = [];
  let evoData = chain;

  do {
    const evoDetails = evoData.evolution_details[0];

    evoChain.push({
      name: evoData.species.name,
      url: evoData.species.url,
      min_level: !evoDetails ? 1 : evoDetails.min_level
    });

    evoData = evoData['evolves_to'][0];
  } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
  return evoChain;
};

function* getPokemonEvolutionsById({ id }: PokemonEvolution) {
  try {
    const response: PokemonEvolution = yield call(fetchApi, {
      url: `https://pokeapi.co/api/v2/evolution-chain/${id}`,
      method: 'GET'
    });

    const parsedResponse = parseEvolutionResponse(response.chain);

    yield put(getPokemonEvolutionsByIdSuccess(parsedResponse));
  } catch (e) {}
}

export default function* pokemonSaga() {
  yield takeLatest(GET_POKEMONS, getPokemons);
  yield takeLatest(GET_POKEMON_BY_ID, getPokemonById);
  yield takeLatest(
    GET_POKEMON_EVOLUTIONS_BY_ID,
    getPokemonEvolutionsById
  );
}

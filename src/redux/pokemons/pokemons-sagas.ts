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
import { PokemonsReqPayload } from './pokemons-types';

export interface PokemonSagaPayload {
  id: number;
}
function* getPokemons() {
  try {
    const response: PokemonsReqPayload = yield call(
      fetchApi,
      'https://pokeapi.co/api/v2/pokemon?limit=898',
      {
        method: 'GET'
      }
    );
    yield put(getPokemonsSuccess(response));
  } catch (e) {
    yield put(getPokemonsFail(e));
  }
}

function* getPokemonById({ id }: PokemonSagaPayload) {
  try {
    const response: PokemonsReqPayload = yield call(
      fetchApi,
      `https://pokeapi.co/api/v2/pokemon/${id}`,
      {
        method: 'GET'
      }
    );
    yield put(getPokemonByIdSuccess(response));
  } catch (e) {
    yield put(getPokemonByIdFail(e));
  }
}
const parseEvolutionResponse = (chain: any) => {
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

function* getPokemonEvolutionsById({ id }: PokemonSagaPayload) {
  try {
    const response: any = yield call(
      fetchApi,
      `https://pokeapi.co/api/v2/evolution-chain/${id}`,
      {
        method: 'GET'
      }
    );

    const parsedResponse = parseEvolutionResponse(response.chain);

    yield put(getPokemonEvolutionsByIdSuccess(parsedResponse));
  } catch (e) {}
}

export default function* pokemonSaga() {
  // @ts-ignore
  yield takeLatest(GET_POKEMONS, getPokemons);
  // @ts-ignore
  yield takeLatest(GET_POKEMON_BY_ID, getPokemonById);
  // @ts-ignore
  yield takeLatest(
    GET_POKEMON_EVOLUTIONS_BY_ID,
    getPokemonEvolutionsById
  );
}

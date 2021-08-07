import {
  cleanFilterPokemonsByName,
  CLEAN_FILTER_POKEMONS_BY_NAME,
  filterPokemonsByName,
  FILTER_POKEMONS_BY_NAME,
  getPokemonById,
  getPokemonByIdFail,
  getPokemonByIdSuccess,
  getPokemonEvolutionsById,
  getPokemonEvolutionsByIdSuccess,
  getPokemons,
  getPokemonsFail,
  getPokemonsSuccess,
  GET_POKEMONS,
  GET_POKEMONS_FAIL,
  GET_POKEMONS_SUCCESS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_ID_FAIL,
  GET_POKEMON_BY_ID_SUCCESS,
  GET_POKEMON_EVOLUTIONS_BY_ID,
  GET_POKEMON_EVOLUTIONS_BY_ID_SUCCESS
} from '.';

describe('Pokemons actions', () => {
  it('getPokemons action', () => {
    expect(getPokemons().type).toEqual(GET_POKEMONS);
  });

  it('getPokemonsSuccess action', () => {
    expect(getPokemonsSuccess('success')).toEqual({
      type: GET_POKEMONS_SUCCESS,
      payload: 'success'
    });
  });

  it('getPokemonsFail action', () => {
    expect(getPokemonsFail('fail')).toEqual({
      type: GET_POKEMONS_FAIL,
      payload: 'fail'
    });
  });

  it('getPokemonById action', () => {
    expect(getPokemonById(12)).toEqual({
      type: GET_POKEMON_BY_ID,
      id: 12
    });
  });

  it('getPokemonByIdSuccess action', () => {
    expect(getPokemonByIdSuccess('pokemon by id')).toEqual({
      type: GET_POKEMON_BY_ID_SUCCESS,
      payload: 'pokemon by id'
    });
  });

  it('getPokemonByIdFail action', () => {
    expect(getPokemonByIdFail('pokemon by id fail')).toEqual({
      type: GET_POKEMON_BY_ID_FAIL,
      payload: 'pokemon by id fail'
    });
  });

  it('filterPokemonsByName action', () => {
    expect(filterPokemonsByName('filter pokemons by name')).toEqual({
      type: FILTER_POKEMONS_BY_NAME,
      payload: 'filter pokemons by name'
    });
  });

  it('cleanFilterPokemonsByName action', () => {
    expect(cleanFilterPokemonsByName()).toEqual({
      type: CLEAN_FILTER_POKEMONS_BY_NAME
    });
  });

  it('getPokemonEvolutionsById action', () => {
    expect(getPokemonEvolutionsById(1)).toEqual({
      type: GET_POKEMON_EVOLUTIONS_BY_ID,
      id: 1
    });
  });

  it('getPokemonEvolutionsByIdSuccess action', () => {
    expect(
      getPokemonEvolutionsByIdSuccess(
        'get pokemon evolutions id success'
      )
    ).toEqual({
      type: GET_POKEMON_EVOLUTIONS_BY_ID_SUCCESS,
      payload: 'get pokemon evolutions id success'
    });
  });
});

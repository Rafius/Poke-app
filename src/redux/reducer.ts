import { combineReducers, Reducer } from 'redux';
import { reducer as pokemons } from './pokemons';
export interface ApplicationState {
  pokemons: Reducer;
}

export const createRootReducer: Function = (): Reducer =>
  combineReducers<ApplicationState>({
    pokemons
  });

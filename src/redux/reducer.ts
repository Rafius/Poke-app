import { combineReducers, Reducer } from 'redux';
import { reducer as pokemons } from './pokemons';
export interface ApplicationState {
  pokemons: any;
}

export const createRootReducer: Function = (): Reducer =>
  combineReducers<ApplicationState>({
    pokemons
  });

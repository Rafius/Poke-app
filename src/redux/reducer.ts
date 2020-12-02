import {combineReducers, Reducer} from 'redux';
import {reducer as pokemons} from './pokemons';
import {reducer as loader} from './loader';
export interface ApplicationState {
  pokemons: any;
  loader: any;
}

export const createRootReducer: Function = (): Reducer =>
  combineReducers<ApplicationState>({
    pokemons,
    loader
  });

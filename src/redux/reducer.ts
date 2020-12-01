import {combineReducers, Reducer} from 'redux';
import {reducer as pokemon} from './pokemon';
import {reducer as loader} from './loader';
export interface ApplicationState {
  pokemon: any;
  loader: any;
}

export const createRootReducer: Function = (): Reducer =>
  combineReducers<ApplicationState>({
    pokemon,
    loader
  });

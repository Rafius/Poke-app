import { combineReducers, Reducer } from "redux"
import { reducer as home } from "./home"

export interface ApplicationState {
  home: any;
}

export const createRootReducer: Function = (): Reducer => 
  combineReducers<ApplicationState>({
    home
  })

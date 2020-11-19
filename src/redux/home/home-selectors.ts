import { ApplicationState } from "../reducer";

export const homeSelector = (state: ApplicationState) => 
  state && state.home
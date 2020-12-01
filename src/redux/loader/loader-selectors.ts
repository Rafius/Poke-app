import { createSelector } from 'reselect';
import { ApplicationState } from '../reducer';

export const loaderSelector = (state: ApplicationState) =>
  state && state.loader;

export const isLoadingSelector = createSelector(
  [loaderSelector],
  (loader: any) => loader.isLoading
);

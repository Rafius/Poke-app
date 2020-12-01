import { SHOW_LOADER, HIDE_LOADER } from './loader-actions';

const initialState: object = {
  isLoading: false
};

export const loaderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

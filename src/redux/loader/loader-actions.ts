export const SHOW_LOADER: string = 'SHOW_LOADER';
export const HIDE_LOADER: string = 'HIDE_LOADER';

export const showLoader = () => ({
  type: SHOW_LOADER
});

export const hideLoader = () => ({
  type: HIDE_LOADER
});

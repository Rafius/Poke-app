import produce from 'immer';

export const reducerFactory = (initialState, handlers) => {
  return (state = initialState, action) =>
    produce(state, (draft) => {
      const handler = handlers[action.type];
      if (handler) return handler(draft, action);
      return state;
    });
};

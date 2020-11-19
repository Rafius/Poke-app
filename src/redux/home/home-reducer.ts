import { HOME_START } from "./home-actions"

import { HomeTypes } from "./home-types"

const initialState = {}

export const homeReducer = (
  state: object = initialState,
  action: HomeTypes
) => {
  switch (action.type) {
    case HOME_START:
      return {
        ...state,
        ...action.payload
       }
    default:
      return state
  }
}

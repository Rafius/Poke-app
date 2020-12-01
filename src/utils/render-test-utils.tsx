import { render } from "@testing-library/react"
import React from "react"
import { Provider } from "react-redux"
import { createStore, Store } from "redux"
import { createRootReducer } from "../redux/reducer"

const initialState = {}
const initReactApp = () => document.body.setAttribute("id", "root")

const renderComponent = (
  Component: any,
  store: Store,
) => {
  initReactApp()
  return(
    <Provider store={store}>
      {Component}
    </Provider>
  )
}

export const composableRender = (customStartApp?: Function) => (
  Component: any,
  providedState = initialState,
  providedLocation = window.location
) => {
    const store = createStore(
      createRootReducer()
    );
    return {
      store,
      ...render(renderComponent(Component, store))
    }
  }


export const renderWithState = composableRender()
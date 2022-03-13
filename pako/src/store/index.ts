import { createStore, compose, applyMiddleware } from "redux"
import { reducer } from "./reducers/settingsReducers"

export const store = createStore(reducer)
import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import { settingsReducers } from "./reducers/settingsReducers"
import { newsReducers } from "./reducers/newsReducers"

const rootReducer = combineReducers({
    settingsReducers,
    newsReducers
})
export const store = createStore(rootReducer)
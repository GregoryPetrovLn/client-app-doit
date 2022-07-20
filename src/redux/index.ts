import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {reducer as users} from '../views/users/redux/reducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        users,
    }
})

export type RootState = ReturnType<typeof store.getState>
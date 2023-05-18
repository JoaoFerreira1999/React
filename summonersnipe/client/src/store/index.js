import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import  statusReducer from './statusSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        status: statusReducer
    }
});
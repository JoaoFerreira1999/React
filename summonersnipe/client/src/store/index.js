import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import statusReducer from './statusSlice'
import championsReducer from './championMasterySlice'
import matchHistoryReducer from './matchHistorySlice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        status: statusReducer,
        champions: championsReducer,
        matchHistory: matchHistoryReducer
    }
});
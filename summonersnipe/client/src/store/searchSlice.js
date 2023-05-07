import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSearchDetails: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { addSearchDetails } = searchSlice.actions;

export default searchSlice.reducer;
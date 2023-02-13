import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: ""
    },
    reducers: {
        change: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { change } = searchSlice.actions;
export default searchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataFields: []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSearchDetails: (state, action) => {
            state.dataFields.push(action.payload);
        }
    }
});


export const { addSearchDetails } = searchSlice.actions;

export default searchSlice.reducer;
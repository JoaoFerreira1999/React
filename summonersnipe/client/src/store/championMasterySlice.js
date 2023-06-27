import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    champions: []
};

export const championMasterySlice = createSlice({
    name: 'championMastery',
    initialState,
    reducers: {
        addChampions: (state, action) => {
            if (state.champions.length === 0) {
                state.champions.push(action.payload);   
            }
        },
    }
});

export const { addChampions } = championMasterySlice.actions;

export default championMasterySlice.reducer;
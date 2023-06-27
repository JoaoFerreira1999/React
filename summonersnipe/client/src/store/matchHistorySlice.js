const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    matchDetails: [],
};

const matchHistorySlice = createSlice({
    name: "matchHistory",
    initialState,
    reducers: {
        addMatch: (state, action) => {
            state.matchDetails.push(action.payload);
        }
    }
})

export const { addMatch } = matchHistorySlice.actions;

export default matchHistorySlice.reducer;
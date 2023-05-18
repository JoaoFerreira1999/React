import { createSlice } from "@reduxjs/toolkit";

const initialStatus = {
    status: false,
}

export const statusSlice = createSlice({
    name: 'status',
    initialState: initialStatus,
    reducers: {
        dataIsSet(state){
            state.status = true;
        }
    }
});

export const { dataIsSet } = statusSlice.actions;


export default statusSlice.reducer;
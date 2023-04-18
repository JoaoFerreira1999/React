import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loginProcess: false,
        loggedIn: false,
        userDetails: []
    },
    reducers: {
        loginProcessStart(state){
            if(state.loginProcess ===  false && state.loggedIn === false){
                state.loginProcess = true;
            }
        },
        loginProcessEnd(state){
            if(state.loginProcess ===  true && state.loggedIn === false){
                state.loginProcess = false;
            }
        },
        login(state){
            if(state.loggedIn === false) {
                state.loggedIn = true;
            }
        },
        logout(state){
            if(state.loggedIn === true){
                state.loggedIn = false;
            }
        },
        setUser(state, action){
            const newUser = action.payload;
            if(state.userDetails.length !== 0){
                return;
            }
            else {
                state.userDetails.push({
                    username: newUser.username,
                    email: newUser.email
                });
            }
        }
    }
})

export const loginActions = loginSlice.actions;

export default loginSlice;
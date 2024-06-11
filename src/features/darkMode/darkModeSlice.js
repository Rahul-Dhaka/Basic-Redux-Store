import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: localStorage.getItem("DarkMode") != undefined ? JSON.parse(localStorage.getItem("DarkMode")): false,//light mode is the default
};

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode : (state)=>{ 
            state.darkMode =!state.darkMode;
            localStorage.setItem('DarkMode', state.darkMode);
        },
    }
});

export const {toggleDarkMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;
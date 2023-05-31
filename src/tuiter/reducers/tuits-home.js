import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits-home.json'

const tuitSlice = createSlice({
    name: 'tuitsHome',
    initialState: {tuitsHome:tuits}
});

export default tuitSlice.reducer;
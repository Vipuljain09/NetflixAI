import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
       
    }
})

export const {addNowPlayingMovies,addTrailerDetails} = movieSlice.actions;
export default movieSlice.reducer;
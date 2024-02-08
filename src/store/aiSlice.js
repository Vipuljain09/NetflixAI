import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
    name:'aiSlice',
    initialState:{
        showShimmer:false,
        searchMovieList:null
    },
    reducers:{
        toggleShowShimmer:(state)=>{
            state.showShimmer = !state.showShimmer;
        },
        addSearchMovieList:(state,action)=>{
            state.searchMovieList=action.payload;
        }
    }
});

export const {addSearchMovieList,toggleShowShimmer} = aiSlice.actions;
export default aiSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";
import aiSlice from "./aiSlice";

const store = configureStore({
    reducer:{
        user:userReducer,
        movies:movieSlice,
        aiSlice:aiSlice,
    }
})
export default store;
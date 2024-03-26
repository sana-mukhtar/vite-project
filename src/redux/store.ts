import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import { myReducer } from "./reducer";

export const store = configureStore({
    reducer:{
        myApi:myApi.reducer,
        myReducer : myReducer.reducer,
    },

})
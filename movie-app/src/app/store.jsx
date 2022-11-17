import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./features/homeSlice";
import loginReducer from "./features/loginSlice";
import pagesSlice from "./features/pagesSlice";



export const store= configureStore({
    reducer:{
            login:  loginReducer,
            home: homeSlice,
            pages: pagesSlice,
    }


})



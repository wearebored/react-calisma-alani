import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./features/homeSlice";
import loginSlice from "./features/loginSlice";


export const store= configureStore({
    reducer:{
            login: loginSlice,
            home: homeSlice,
    }


})



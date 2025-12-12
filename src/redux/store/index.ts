import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./../slice/index.tsx"
const store=configureStore({
    reducer:{
        blogs:blogReducer
    }
})
export default store
import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cardSlice"
import reducer from "./cardSlice";

const AppStore =configureStore({
reducer:{
    cart: cartReducer,
   },
});

export default AppStore; 
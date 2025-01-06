import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer.js";

const Store = configureStore({
    reducer: {
        cart: CartReducer, 
    },
});

export default Store;

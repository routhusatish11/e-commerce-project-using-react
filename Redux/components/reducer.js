import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartvalues: [],
    totalprice: 0
};

const CartReducer = createSlice({
    name: "cartvalue",
    initialState,
    reducers: {
        addtocart: (state, action) => {
           
            state.cartvalues.push(action.payload);
            const newProductPrice = parseFloat(action.payload.productPrice) || 0;

            
            state.totalprice += newProductPrice;
        },
        remove: (state, action) => {
            
            state.cartvalues = state.cartvalues.filter(
                (item) => item.productName !== action.payload.productName
            );
            
            state.totalprice = state.cartvalues.reduce((total, item) => total + item.productPrice, 0);
        },
      

    }
});

export const { addtocart ,remove} = CartReducer.actions;
export default CartReducer.reducer;

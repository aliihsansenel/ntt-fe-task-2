import { createSlice } from "@reduxjs/toolkit";

import { fetchProducts } from "./productActions";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: []
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
        }
    }
});

export * from './productActions';
export default productSlice.reducer;

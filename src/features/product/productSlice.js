import { createSlice } from "@reduxjs/toolkit";

import { fetchProducts } from "./productActions";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: []
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload;
        }
    }
});

export * from './productActions';
export default productSlice.reducer;

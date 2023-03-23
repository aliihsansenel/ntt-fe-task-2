import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../services/fetcher";

export const fetchProducts = createAsyncThunk(
    'product/fetchAll',
    async (params = {}) => {
        const response = await axiosInstance.get('products', params);
        return response.data;
    }
);
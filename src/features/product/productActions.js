import { createAsyncThunk } from "@reduxjs/toolkit";

import Client from "../../services/BaseService";

const client = new Client(import.meta.env.VITE_BASE_URL);

export const fetchProducts = createAsyncThunk(
    'product/fetchAll',
    async (params = {}) => {
        const response = await client.get('products', params);
        return response.data;
    }
);
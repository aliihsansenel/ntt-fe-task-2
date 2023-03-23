import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "@features/product/productActions";
import ProductCard from "./ProductCard";
import { Grid, useTheme } from "@mui/material";

const ProductCardArea = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.items);

    const { breakpoints } = useTheme();

    React.useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    const height = {
        [breakpoints.only("mobile")]: "120px",
        [breakpoints.only("tablet")]: "150px",
        [breakpoints.only("desktop")]: "180px",
    };

    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item mobile={12} tablet={3} key={product.id} height={height}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductCardArea;

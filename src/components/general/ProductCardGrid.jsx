import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "@features/product/productActions";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

const ProductCardGrid = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.items);

    React.useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (products.length === 0) {
        return <div>Loading...</div>;
    }
    
    const minHeight = { 
        mobile: "170px",
        tablet: "111px",
        desktop: "190px",
    };

    return (
        <Grid container spacing={'12px'}>
            {products.map((product) => (
                <Grid item mobile={12} tablet={3} desktop={3} key={product.id} sx={{ '& .MuiCardMedia-root': { minHeight: minHeight } }}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductCardGrid;

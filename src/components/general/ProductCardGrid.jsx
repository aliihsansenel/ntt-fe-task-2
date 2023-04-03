import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "@features/product/productActions";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
import { FavFilterContext } from "./ProductCardArea";

const ProductCardGrid = () => {
    const { isFilterOn, likedProductIds, setLikedProductIds } = useContext(FavFilterContext);

    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.items);

    function toggleById(id) {
        if (likedProductIds.includes(id))
            setLikedProductIds(prevState => [...prevState].filter(i => i !== id));
        else
            setLikedProductIds(prevState => [...prevState, id]);
    }

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

    const filtered = isFilterOn ? products.filter(item => likedProductIds.includes(item.id)) : products;

    return (
        <Grid container spacing={"12px"}>
            {filtered.map((product) => (
                <Grid
                    item
                    mobile={12}
                    tablet={3}
                    desktop={3}
                    key={product.id}
                    sx={{ "& .MuiCardMedia-root": { minHeight: minHeight } }}
                >
                    <ProductCard product={product} favHandler={toggleById} isLiked={likedProductIds.includes(product.id)}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductCardGrid;

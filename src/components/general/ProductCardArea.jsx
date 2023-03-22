import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "@features/product/productActions";
import ProductCard from "./ProductCard";

const ProductCardArea = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.items);

    React.useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductCardArea;

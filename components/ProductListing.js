"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/shopify";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductData
            = async () => {
                try {
                    const data = await getProducts();
                    setProducts(data);
                } catch (error) {
                    console.error('Error fetching products:',
                        error);
                }
            };

        fetchProductData();
    }, []);
    // console.log(products);
    // console.log(process.env.SHOPIFY_STORE_URL);

    return (
        <>
            {/* {products.map((product) => (
                <ProductCard key={product.id} />
            ))} */}
            {/* <getProducts /> */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </>
    )
}

export default Home
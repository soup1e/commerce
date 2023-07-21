"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import getProducts from "@/utils/getProducts";

function ItemList({ itemType }) {
  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { products, prices } = await getProducts();
      setProducts(products);
      setPrices(prices);
    };
    fetchProducts();
  }, []);

  const filteredProducts = itemType
    ? products.filter((product) => product.unit_label === itemType)
    : products;

  return (
    <div className="flex flex-wrap justify-center bg-dark">
      {filteredProducts.map((product) => {
        const price = prices.find(
          (price) => price.id === product.default_price
        );
        return <ItemCard key={product.id} product={product} price={price} />;
      })}
    </div>
  );
}

export default ItemList;

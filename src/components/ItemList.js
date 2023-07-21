"use client";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ItemList({ itemType }) {
  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch(`/api/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setPrices(data.prices);
      })
      .catch((error) => {
        console.error("Product not Found", error);
      });
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

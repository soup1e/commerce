"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ItemList() {
  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
      setPrices(response.data.prices);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center bg-dark">
      {products.map((product) => (
        <ItemCard key={product.id} product={product} prices={prices} />
      ))}
    </div>
  );
}

export default ItemList;

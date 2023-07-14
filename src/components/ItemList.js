"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center bg-dark">
      {products &&
        products.map((item) => <ItemCard key={item.id} item={item} />)}
    </div>
  );
}

export default ItemList;

// <ItemCard key={item.id} item={item} />

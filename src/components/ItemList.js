"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import getProducts from "@/utils/getProducts";

function ItemList({ itemType }) {
  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { products, prices } = await getProducts();
      setProducts(products);
      setPrices(prices);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredProducts(filteredProducts);
  }, [searchQuery, products]);

  return (
    <section className="bg-dark">
      <section className="form-control p-4 w-[25%]">
        <input
          type="text"
          placeholder="Search by product name..."
          className="input input-bordered"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>
      <section className="flex flex-wrap justify-center">
        {filteredProducts.map((product) => {
          const price = prices.find((price) => price.product === product.id);
          return <ItemCard key={product.id} product={product} price={price} />;
        })}
      </section>
    </section>
  );
}

export default ItemList;

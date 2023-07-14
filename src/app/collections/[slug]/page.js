"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const unformattedUrl = params.slug.toUpperCase().replace(/_/g, " ");
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        const data = response.data;
        const matchedProduct = data.products.find(
          (product) => product.name.toUpperCase() === unformattedUrl
        );
        setProduct(matchedProduct);

        const matchedPrice = data.prices.find(
          (price) => price.product === matchedProduct.id
        );
        const unitAmountFormat = (
          matchedPrice.unit_amount / 100
        ).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
        setPrice(unitAmountFormat);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [params.slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-lightDark text-white">
      <div className="flex max-w-3xl mx-auto p-8">
        <div className="w-1/2">
          <Image
            src="/placehold.jpg"
            width={2000}
            height={2000}
            alt="Product Image"
            className="rounded-lg shadow-lg mb-4"
          />
        </div>

        <div className="w-1/2 ml-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <span className="text-lg font-semibold">{price}</span>
          </div>
          <h2 className="text-xl font-bold mb-4">Description</h2>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <button className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

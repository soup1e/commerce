"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCartContext } from "@/components/CartContext";

function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(null);
  const { addToCart } = useCartContext();

  useEffect(() => {
    const unformattedUrl = params.slug.toUpperCase().replace(/_/g, " ");
    fetch(`/api/products`)
      .then((response) => response.json())
      .then((data) => {
        const { products, prices } = data;

        const findProduct = products.find(
          (product) => product.name.toUpperCase() === unformattedUrl
        );

        setProduct(findProduct);

        const findPrice = prices.find(
          (price) => price.id === findProduct.default_price
        );

        const unitAmountFormat = (findPrice.unit_amount / 100).toLocaleString(
          "en-US",
          {
            style: "currency",
            currency: "USD",
          }
        );
        setPrice(unitAmountFormat);
      })
      .catch((error) => {
        console.error("Product not Found", error);
      });
  }, [params.slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-lightDark text-white">Loading...</div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

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
          <button
            className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

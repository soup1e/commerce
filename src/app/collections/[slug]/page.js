"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h1>{product.name}</h1>
      <h1>{price}</h1>
    </div>
  );
}

export default ProductPage;

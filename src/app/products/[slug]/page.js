"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCartContext } from "@/components/CartContext";
import getProducts from "@/utils/getProducts";
import Link from "next/link";

function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(null);
  const { addToCart } = useCartContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { products, prices } = await getProducts();

        const unformattedUrl = params.slug.toUpperCase().replace(/_/g, " ");
        const findProduct = products.find(
          (product) => product.name.toUpperCase() === unformattedUrl
        );

        if (!findProduct) {
          throw new Error("Product not found");
        }

        setProduct(findProduct);

        const findPrice = prices.find(
          (price) => price.id === findProduct.default_price
        );

        if (!findPrice) {
          throw new Error("Price not found for the product");
        }

        const unitAmountFormat = (findPrice.unit_amount / 100).toLocaleString(
          "en-US",
          {
            style: "currency",
            currency: "USD",
          }
        );
        setPrice(unitAmountFormat);
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };

    fetchData();
  }, [params.slug]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    product && (
      <div className="min-h-screen bg-lightDark text-white">
        <div className="md:flex hidden px-8 py-4 text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/collections/all">Collections</Link>
            </li>
            <li>{product.name}</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-8">
          <div className="w-full md:w-2/3 md:mr-8">
            <Image
              className="w-full h-full"
              src={product.images[0]}
              width={1024}
              height={1024}
              alt="Product Image"
            />
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <span className="text-lg font-semibold">{price}</span>
            </div>
            <h2 className="text-lg text-gray-200 font-bold mb-2">
              Description
            </h2>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <button
              className="btn btn-square btn-accent w-full"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductPage;

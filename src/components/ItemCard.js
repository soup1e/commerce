import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemCard({ prices, product }) {
  const formattedURL = product.name.toLowerCase().replace(/\s+/g, "_");

  const price = prices.find((price) => price.product === product.id);

  const unitAmount = (price.unit_amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="card w-96">
      <div className="rounded-lg shadow-xl text-white bg-lightDark m-3">
        <Link href={`/products/${formattedURL}`}>
          <Image
            className="rounded-t-lg w-full"
            src="/placehold.jpg"
            width={500}
            height={500}
            alt="Product Image"
          />
          <div className="card-body">
            <h1 className="card-title">{product.name}</h1>
            <p className="font-medium">{unitAmount}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ItemCard;

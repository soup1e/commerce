import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemCard({ price, product }) {
  const formattedURL = product.name.toLowerCase().replace(/\s+/g, "_");

  const unitAmount = (price.unit_amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="card w-full md:w-1/2 lg:w-1/4 p-4 h-full">
      <div className="rounded-lg shadow-xl text-white bg-lightDark">
        <Link href={`/products/${formattedURL}`}>
          <div className="relative rounded-t-lg overflow-hidden pb-[56.25%]">
            <Image
              className="responsive absolute top-0 left-0 w-full h-full"
              src={product.images[0]}
              width={1024}
              height={1024}
              priority
              alt="Product Image"
            />
          </div>
          <div className="card-body p-4 h-2/5">
            <h1 className="card-title">{product.name}</h1>
            <p className="font-medium">{unitAmount}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ItemCard;

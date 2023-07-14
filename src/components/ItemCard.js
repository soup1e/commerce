import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemCard({ item }) {
  const { permalink, product, price, thumbnail } = item;

  return (
    <div className="card w-96">
      <div className="rounded-lg shadow-xl text-white bg-lightDark m-3">
        <Link href={`/products/${permalink}`}>
          <Image
            className="rounded-t-lg w-full"
            src={thumbnail}
            width={500}
            height={500}
            alt="Product Image"
          />
          <div className="card-body">
            <h1 className="card-title">{product}</h1>
            <p className="font-medium">${price}</p>
          </div>
        </Link>
      </div>
      {/* <div className="alert max-w-full m-4 flex justify-center">
        <span className="text-white">Out of Stock</span>
      </div> */}
    </div>
  );
}

export default ItemCard;

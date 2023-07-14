import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemCard({ item }) {
  const { permalink, product, price, image } = item;

  return (
    <React.Fragment>
      <div className="card w-96 rounded-lg shadow-xl bg-lightDark m-3">
        <Link href={`/products/${permalink}`}>
          <Image
            className="rounded-t-lg w-full"
            src="/keyboard.jpg"
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
    </React.Fragment>
  );
}

export default ItemCard;

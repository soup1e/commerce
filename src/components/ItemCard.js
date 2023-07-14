import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemCard() {
  return (
    <React.Fragment>
      <div className="card w-96 rounded-lg shadow-xl bg-lightDark m-3">
        <Link href="/products/id">
          <Image
            className="rounded-t-lg w-full h-full"
            src="/keyboard.jpg"
            width="500"
            height="500"
            alt="Product Image"
          />
          <div className="card-body">
            <h1 className="card-title">KBD67 LITE R3</h1>
            <p className="font-medium">$199</p>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default ItemCard;

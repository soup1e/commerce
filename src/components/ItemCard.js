import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemCard() {
  return (
    <React.Fragment>
      <Link href="/products/id">
        <div class="w-full max-w-sm rounded-lg shadow bg-gray-800 border-gray-700">
          <Image
            src="/keyboard.jpg"
            width="500"
            height="500"
            alt="Product Image"
          />
          <div class="px-5 pb-5">
            <h1 class="text-xl font-semibold text-white">KBD67 LITE R3</h1>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-white">$199</span>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default ItemCard;

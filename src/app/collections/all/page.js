import ItemList from "@/components/ItemList";
import React from "react";

export default function page() {
  return (
    <React.Fragment>
      <section className="hero min-h-16 bg-dark">
        <h1 className="text-3xl font-bold">All Products</h1>
      </section>
      <ItemList />
    </React.Fragment>
  );
}

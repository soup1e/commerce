import ItemList from "@/components/ItemList";
import React from "react";

export default function Page({ params }) {
  return (
    <React.Fragment>
      <section className="hero min-h-16 bg-dark">
        <h1 className="text-3xl font-bold">
          {params
            ? params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
            : "All"}
        </h1>
      </section>
      {params.slug === "all" ? (
        <ItemList />
      ) : (
        <ItemList itemType={params.slug} />
      )}
    </React.Fragment>
  );
}

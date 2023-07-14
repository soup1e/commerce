import React from "react";
import ItemCard from "./ItemCard";
// import items from "../../items.json";

function ItemList() {
  return (
    <div className="flex flex-wrap justify-center bg-dark">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;

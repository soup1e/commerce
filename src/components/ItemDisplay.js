import React from "react";

export default function ItemDisplay() {
  const items = [
    {
      name: "Gateron Pinks",
      description: "Gateron Pinks",
      isInStock: true,
      price: 4.99,
    },
    {
      name: "Gateron Yellows",
      description: "Gateron Yellows",
      isInStock: true,
      price: 4.5,
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="w-full p-4 hover:bg-gray-600 border-b-2 border-gray-600 flex flex-col justify-between"
        >
          <div className="flex flex-row items-center justify-between mb-2">
            <h1 className="text-lg font-bold text-white">{item.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";

export default function ItemDisplay() {
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

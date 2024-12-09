import React from "react";
import { external } from "/src/components/teaminfo.jsx";

export function External() {
  const reorderedExecutives = [
    ...external.filter((item) => item.name === "Jerick Nucums"),
    ...external.filter((item) => item.name !== "Jerick Nucums"),
  ];

  return (
    <div
      className="flex flex-col justify-center items-center py-8 min-h-screen bg-[url('/backgroundimage.png')] bg-cover bg-fixed"
    >
      <h1 className="text-3xl font-bold mb-8 text-white">Our External Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-4">
        {reorderedExecutives.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 bg-transparent rounded-lg shadow-md ${
              item.name === "Jerick Nucums" ? "border-2 border-blue-800" : ""
            }`}
          >
            <img
              src={`/${item.img}`} // Ensure this path matches your project structure
              alt={item.name}
              className="rounded-lg w-48 h-48 object-cover mb-4"
            />
            <h1 className="text-lg font-semibold text-white">{item.name}</h1>
            <p className="text-sm text-gray-200">{item.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

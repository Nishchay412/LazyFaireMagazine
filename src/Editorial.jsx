import React from "react";
import { editorial } from "./components/teaminfo"; // Ensure this file and data are correct

export function Editorial() {
  // Reorder the executives array
  const reorderededitorial = [
    ...editorial.filter((item) => item.name === "Zoë Kemppi"),
    ...editorial.filter((item) => item.name !== "Zoë Kemppi"),
  ];

  return (
    <div
      className="flex flex-col justify-center items-center py-8 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/backgroundimage.png')", // Your background image
        backgroundAttachment: "fixed", // Ensure it stays fixed
      }}
    >
      <h1 className="text-3xl text-white font-bold mb-8">Our Editorial Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-7xl px-4">
        {reorderededitorial.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 bg-gradient-to-br from-white-400 text via-gray-500 to-gray-700 rounded-lg shadow-md ${
              item.name === "Zoë Kemppi"
                ? "border-2 border-blue-800 items-center justify-center py-2"
                : ""
            }`}
          >
            {/* Image */}
            <img
              src={"/" + item.img || "/default-profile.png"} // Fallback image if `item.img` is missing
              alt={item.name}
              className="rounded-lg w-48 h-48 object-cover mb-4"
            />
            {/* Name */}
            <h1 className="text-lg font-semibold text-white">{item.name}</h1>
            {/* Position */}
            <p className="text-sm text-gray-200">{item.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

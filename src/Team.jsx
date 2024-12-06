import React from "react";
import { team } from "./components/teaminfo"; // Assuming 'team' is the array holding team data

export function Team() {
  return (
    <div className="flex flex-col bg-[url('/background.png')] bg-cover bg-center">
      <h1 className="font-bold text-3xl text-center text-white py-8 shadow-md">
        LAZY FAIRE MAGAZINE TEAM
      </h1>
      <div className="flex flex-col gap-6">
        {team.map((item, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}  px-4`}
          >
            {/* Container for the image and button */}
            <div className="relative w-full max-w-4xl">
              {/* Image */}
              <img
                src={item.image}
                alt={item.role}
                className="w-full h-[350px] sm:h-[250px] md:h-[400px] object-cover rounded-lg shadow-lg"
              />
              {/* Gradient Overlay */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
              {/* Role Text */}
              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg sm:text-xl bg-black bg-opacity-50 px-3 py-1 rounded-md">
                {item.role}
              </h3>
              {/* Button */}
              <button className="absolute right-4 top-4 transform bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all">
                CLICK
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

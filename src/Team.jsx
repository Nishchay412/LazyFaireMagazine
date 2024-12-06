import React from "react";
import { team } from "./components/teaminfo"; // Assuming 'team' is the array holding team data
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
              
              {/* Role Text and Button */}
              <div className="absolute bottom-4 right-4 flex flex-col items-center space-y-2">
                {/* Arrow Image */}
               
                {/* Role Button */}
                <button className="text-white font-semibold text-lg sm:text-xl bg-black bg-opacity-50 px-3 py-1 rounded-md">
                  {item.role}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

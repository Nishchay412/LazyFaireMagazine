import React from "react";
import { team } from "./components/teaminfo"; // Assuming 'team' is the array holding team data
import { Header } from "./components/Header";
import { useNavigate } from "react-router-dom";

export function Team() {
  const navigate = useNavigate();

  // Navigation function
  function handleNavigation(path) {
    navigate(`/${path}`);
  }

  return (
    <div className="flex flex-col bg-[url('/backgroundimage.png')] bg-cover bg-fixed bg-center min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 px-6 sm:px-8 md:px-12">
        {team.map((item, index) => (
          // Wrap the entire card with an onClick
          <div
            key={index}
            className="relative w-full max-w-full shadow-xl rounded-lg overflow-hidden hover:cursor-pointer"
            onClick={() => handleNavigation(`Team/${item.role}`)} // Click anywhere triggers navigation
          >
            {/* Team Member Image */}
            <img
              src={item.image}
              alt={item.role}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Role Text and Button */}
            <div className="absolute bottom-6 left-6 flex flex-col items-start space-y-3">
              <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                {item.name}
              </span>
              <button
                className="text-white font-medium text-sm sm:text-base bg-black bg-opacity-70 px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                {item.role}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { Header } from "./components/Header";
import { magazines } from "./components/teaminfo";
import { useNavigate } from "react-router-dom";

export function Issues() {
  const navigate = useNavigate();

  function handleNavigation(index) {
    navigate(`/Magazineread/${index}`);
  }

  return (
    <div className="relative bg-[url('/backgroundimage.png')] bg-cover bg-fixed bg-center min-h-screen">
      <Header />
      <div className="flex flex-col items-start justify-center gap-10 pt-32 px-10">
        {magazines.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-8 w-full"
          >
            {/* Left Column: Image */}
            <div className="w-1/3">
              <img
                src={item.image}
                alt={`Issue ${index}`}
                className="w-full h-auto object-cover rounded-md hover:cursor-pointer shadow-lg"
                onClick={() => handleNavigation(index)}
              />
            </div>

            {/* Right Column: Text */}
            <div className="w-2/3 text-white">
             
              <p className="text-sm mt-2">{item.date}</p>
             
              <button
                className="mt-3 underline hover:text-gray-400"
                onClick={() => handleNavigation(index)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

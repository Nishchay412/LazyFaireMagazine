
import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
export function Header() {
    const [selectedPage, setSelected] = useState("");
    const navigate = useNavigate();
  
    function handleNavigation(page) {
      setSelected(page); // Update the selected page
      navigate(`/${page}`); // Navigate to the selected page
    }
  
    return (
      <div className="relative w-full">
        <div className="absolute flex justify-between w-full p-4">
          <div>
            <img src="/download.png" className="w-36 h-auto" alt="Logo" />
          </div>
          <div className="flex gap-5">
            <div
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-300 font-bold hover:shadow-lg hover:cursor-pointer hover:shadow-indigo-300 hover:rounded-lg transition-all duration-300"
              onClick={() => handleNavigation("Home")}
            >
              HOME
            </div>
            <div
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-300 font-bold hover:shadow-lg hover:cursor-pointer hover:shadow-indigo-300 hover:rounded-lg transition-all duration-300"
              onClick={() => handleNavigation("Team")}
            >
              OUR TEAM
            </div>
            <div
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-300 font-bold hover:shadow-lg hover:cursor-pointer hover:shadow-indigo-300 hover:rounded-lg transition-all duration-300"
              onClick={() => handleNavigation("Contact")}
            >
              CONTACT US
            </div>
            <div
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-300 font-bold hover:shadow-lg hover:cursor-pointer hover:shadow-indigo-300 hover:rounded-lg transition-all duration-300"
              onClick={() => handleNavigation("Magazine")}
            >
              MAGAZINE
            </div>
          </div>
        </div>
      </div>
    );
  }
  
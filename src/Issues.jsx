import React from "react";
import { Header } from './components/Header';
import { magazines } from "./components/teaminfo";
import { useNavigate } from "react-router-dom";

export function Issues() {
    const navigate = useNavigate();

    function handleNavigation() {
      navigate(`/Magazineread`); // Navigate to the selected page
    }
  
  return (
    <div className="relative flex flex-col bg-[url('/backgroundimage.png')] bg-cover bg-fixed bg-center min-h-screen">
      <Header />
      <div className="flex items-center justify-center pt-32">
        <div className="flex flex-row flex-wrap gap-5 w-full px-10">
          {magazines.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 h-full shadow-xl rounded-sm overflow-hidden "
            >
              <img
                src={item.image}
                alt={`Issue ${index}`}
                className="w-full h-56 object-cover hover:cursor-pointer"
                onClick={() => {
                    console.log("Read Button Clicked");
                    handleNavigation();
                  }}
              />
              <div className="text-gray-200 text-center p-2">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

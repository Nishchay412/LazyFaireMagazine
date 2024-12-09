import React from "react";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/Magazineread`); // Navigate to the selected page
  }

  return (
    <div>
      {/* Background Section */}
      <div className="bg-[url('/backgroundimage.png')] h-screen bg-cover bg-center">
        {/* Centered Front Page Magazine and Button */}
        <div></div>
        <div className="flex flex-col items-center justify-center h-full">
          {/* Magazine Cover */}
          <motion.div
            className="w-auto h-auto max-w-xs max-h-[75vh] object-contain rounded-lg shadow-lg py-2 mt-10" // Added `mt-10` for spacing
            initial={{ boxShadow: "0px 0px 0px rgba(255, 255, 255, 0)" }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(255, 255, 255, 1)",
                "0px 0px 20px rgba(255, 255, 255, 1)",
                "0px 0px 0px rgba(255, 255, 255, 1)",
                "0px 0px 0px rgba(255, 255, 255, 1)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <img
              src="/frontpage_magazine.png"
              className="w-auto h-auto max-w-xs max-h-[75vh] object-contain"
              alt="Front page magazine"
            />
          </motion.div>

          {/* Button Section */}
          <button
            className="mt-4 bg-transparent text-white font-bold text-xl px-6 py-2 rounded-lg shadow-md hover:bg-white hover:text-black duration-300 transition relative overflow-hidden"
            onClick={() => {
              console.log("Read Button Clicked");
              handleNavigation();
            }}
          >
            CLICK TO READ
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}

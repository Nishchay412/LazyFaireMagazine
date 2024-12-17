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
        <div className="flex flex-col items-center justify-center h-full">
          {/* Magazine Cover Animation */}
          <motion.div
            className="w-auto h-auto max-w-xs max-h-[75vh] object-contain rounded-lg shadow-lg py-2 mt-10"
            initial={{ opacity: 0, y: 200 }} // Start fully transparent and 200px below
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and natural position
            transition={{
              duration: 1, // 1 second duration
              ease: "easeOut", // Smooth easing
            }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(255, 255, 255, 1)",
                  "0px 0px 20px rgba(255, 255, 255, 1)",
                  "0px 0px 0px rgba(255, 255, 255, 1)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="rounded-lg"
            >
              <img
                src="/frontpage_magazine.png"
                className="w-auto h-auto max-w-xs max-h-[75vh] object-contain hover:cursor-pointer rounded-lg"
                alt="Front page magazine"
                onClick={() => {
                  console.log("Read Button Clicked");
                  handleNavigation();
                }}
              />
            </motion.div>
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

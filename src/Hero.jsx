import React from "react";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/Magazineread3`); // Navigate to the selected page
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
            initial={{ opacity: 0, y: 200 }} // Starts below its position
            animate={{ opacity: 1, y: 0 }} // Slides up to natural position
            transition={{
              duration: 1,
              ease: "easeOut",
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
                src="/AprilIssue.png"
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

      {/* Footer Section with Animation */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 50 }} // Starts below its position
        whileInView={{ opacity: 1, y: 0 }} // Animates to its natural position
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }} // Animates only once when it enters the viewport
      >
        <Footer />
      </motion.div>
    </div>
  );
}

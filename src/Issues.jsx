import React from "react";
import { Header } from "./components/Header";
import { magazines } from "./components/teaminfo";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

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
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }} // Start hidden and off-screen left
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible and in position
            transition={{ duration: 0.8, delay: index * 0.2 }} // Smooth staggered animation
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of card is visible
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
              <h2 className="text-4xl font-bold uppercase">
                {`Edition ${index + 1}`}
              </h2>
              <p className="text-sm mt-2">{item.date}</p>

              <button
                className="mt-3 underline hover:text-gray-400"
                onClick={() => handleNavigation(index)}
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { Header } from "./components/Header";
import { magazines } from "./components/teaminfo";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Issues() {
  const navigate = useNavigate();

  function handleNavigation(link) {
    navigate(link);
  }

  return (
    <div className="relative bg-[url('/backgroundimage.png')] bg-cover bg-fixed bg-center min-h-screen">
      <Header />
      <div className="flex flex-col items-start justify-center gap-10 pt-20 px-4 sm:px-6 md:px-8 lg:px-10">
        {magazines.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full"
          >
            {/* Left Column: Image */}
            <div className="w-full md:w-1/3 ">
              <img
                src={item.image}
                alt={`Issue ${index}`}
                className="w-full h-auto max-h-[400px] object-cover rounded-md hover:cursor-pointer shadow-lg"
                onClick={() => handleNavigation(item.link)}
              />
            </div>

            {/* Right Column: Text */}
            <div className="w-full md:w-2/3 text-white text-center md:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase">
                {`Edition ${index + 1}`}
              </h2>
              <p className="text-sm sm:text-base mt-2">{item.date}</p>

              <button
                className="mt-3 underline hover:text-gray-400 text-sm sm:text-base"
                onClick={() => handleNavigation(item.link)}
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

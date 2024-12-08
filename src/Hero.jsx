import React from "react";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div>
      {/* Background Section */}
      <div className="bg-[url('/backgroundimage.png')] h-screen bg-cover bg-center">
        {/* Centered Front Page Magazine */}
        <div className="flex items-center justify-center h-full">
          <motion.div
            className="w-auto h-auto max-w-xs max-h-[75vh] object-contain rounded-lg shadow-lg py-2 mt-6"
            initial={{ boxShadow: "0px 0px 0px rgba(255, 255, 255, 0)" }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(255, 255, 255, 0)",
                "0px 0px 20px rgba(255, 255, 255, 1)",
                "0px 0px 0px rgba(255, 255, 255, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <img
              src="/frontpage_magazine.png"
              className="-auto h-auto max-w-xs max-h-[75vh] object-contain"
              alt="Front page magazine"
            />
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}

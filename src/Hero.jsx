import React from "react";
import { Footer } from "./Footer";

export function Hero() {
  return (
    <div>
      {/* Background Section */}
      <div className="bg-[url('/backgroundimage.png')] h-screen bg-cover bg-center">
        {/* Centered Front Page Magazine */}
        <div className="flex items-center justify-center h-full">
        <img
  src="/frontpage_magazine.png"
  className="w-auto h-auto max-w-xs max-h-[75vh] object-contain shadow-lg py-2 mt-6"
  alt="Front page magazine"
/>

        </div>
      </div>

      {/* Footer Section */}
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}

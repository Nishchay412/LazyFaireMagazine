import React from "react";

export function Footer() {
  return (
    <div className="relative bg-purple-500 rounded-md py-8">
      <div className="flex flex-col items-center absolute top-1/4 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col bg-purple-900 p-6 rounded-lg">
          <h1 className="text-white font-bold text-center mb-4">
            SIGN UP FOR OUR NEWSLETTER AND NEVER MISS AN UPDATE
          </h1>
          <div className="flex flex-col items-center gap-4">
            <form className="flex flex-col items-center">
              <label className="text-white mb-2">ENTER YOUR EMAIL</label>
              <input
                type="email"
                className="px-4 py-2 rounded-md text-black"
                placeholder="Your Email"
              />
            </form>
            <button className="bg-purple-400 text-white px-6 py-2 rounded-md hover:bg-purple-500 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

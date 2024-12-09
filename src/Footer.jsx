import React from "react";

export function Footer() {
  return (
    <div className="bg-purple-900 text-white py-8 sm:py-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 grid items-center gap-8 relative">
        {/* Newsletter Section */}
        <div className="bg-purple-700 mx-auto mt-10 sm:absolute sm:top-1/4 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-[50%] p-6 rounded-lg">
          <h2 className="font-semibold text-lg mb-4 text-center sm:text-left">
            Sign up for our newsletter and never miss an update!
          </h2>
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-black w-full sm:w-auto mb-4 sm:mb-0"
            />
            <button className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none font-bold text-white w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 sm:my-12 border-t border-purple-600"></div>

      {/* Bottom Section */}
      
     

      {/* Social Media */}
      <div className="flex justify-center mt-8 space-x-6 text-purple-300">
        <a href="#" className="hover:text-white">
          <i className="fab fa-discord text-2xl"></i>
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-facebook text-2xl"></i>
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold opacity-10 text-purple-200">
          EMAIL ME
        </h1>
        <p className="mt-4 text-sm text-purple-400">
          &copy; 2024 Lazy Faire Magazine. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="text-purple-400 hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-purple-400 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

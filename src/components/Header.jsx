import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  function handleNavigation(page) {
    setSidebarOpen(false); // Close the sidebar when a link is clicked
    navigate(`/${page}`); // Navigate to the selected page
  }

  return (
    <div className="relative w-full">
      {/* Header Container */}
      <div className="absolute flex items-center justify-between w-full p-4 bg-transparent">
        {/* Logo Section */}
        <div>
          <img src="/download.png" className="w-36 h-auto" alt="Logo" />
        </div>

        {/* Hamburger Button for Small Screens */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-5">
          {["Home", "Team", "Magazine"].map((page) => (
            <div
              key={page}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-300 font-bold hover:shadow-lg hover:cursor-pointer hover:shadow-indigo-300 hover:rounded-lg transition-all duration-300"
              onClick={() => handleNavigation(page)}
            >
              {page.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white text-gray-800 z-50 shadow-lg transition-transform transform">
          <button
            className="absolute top-4 right-4 text-gray-200 focus:outline-none"
            onClick={() => setSidebarOpen(false)}
          >
            {/* Close Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Sidebar Navigation Links */}
          <div className="flex flex-col gap-5 mt-20 p-4">
            {["Home", "Team", "Magazine"].map((page) => (
              <div
                key={page}
                className="text-lg font-bold hover:bg-gray- p-2 rounded-lg cursor-pointer"
                onClick={() => handleNavigation(page)}
              >
                {page.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

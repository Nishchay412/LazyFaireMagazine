import React from "react";
import { Header } from "./components/Header";

export function About_us() {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/backgroundimage.png')]">
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow text-white">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="block">FOR</span>
            <span className="block">STUDENTS,</span>
            <span className="block">BY</span>
            <span className="block">STUDENTS</span>
          </h1>
          <p className="text-sm md:text-base mt-8 leading-relaxed max-w-md">
          Lazy Faire Magazine is the voice of the Alberta School of Business community at the University of Alberta. Run for students, by students, we are committed to promoting business communication through semesterly issues that explore engaging and relevant business-related topics. Our mission is to provide opportunities for involvement, leadership, and professional growth, while celebrating the diverse achievements of students, faculty, and alumni. At Lazy Faire, we aim to foster a learning environment where creativity, collaboration, and inclusivity thrive both on and off campus.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="LF-executive.png"
            alt="Verse Magazine Team"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

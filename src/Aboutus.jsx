import React from "react";
import { Header } from "./components/Header";

export function About_us() {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/backgroundimage.png')] bg-cover bg-center text-white">
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow p-6 md:p-12">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-xl md:text-6xl font-bold  mt-8  leading-tight relative shining-text">
            <span className="block shining-text text-8xl mt-6">FOR</span>
            <span className="block shining-text text-8xl mt-6 ">STUDENTS,</span>
            <span className="block shining-text text-8xl mt-6 ">BY</span>
            <span className="block shining-text text-8xl mt-6">STUDENTS</span>
          </h1>
          <p className="text-sm md:text-base mt-6 leading-relaxed">
            Lazy Faire Magazine is the voice of the Alberta School of Business
            community at the University of Alberta. Run for students, by
            students, we are committed to promoting business communication
            through semesterly issues that explore engaging and relevant
            business-related topics. Our mission is to provide opportunities
            for involvement, leadership, and professional growth, while
            celebrating the diverse achievements of students, faculty, and
            alumni. At Lazy Faire, we aim to foster a learning environment where
            creativity, collaboration, and inclusivity thrive both on and off
            campus.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="LF-executive.png"
            alt="Lazy Faire Magazine Team"
            className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

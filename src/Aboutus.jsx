import React from "react";
import { motion } from "framer-motion";
import { Header } from "./components/Header";

export function About_us() {
  return (
    <div className="relative min-h-screen flex flex-col text-white">
      {/* Fixed Background Layer */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/backgroundimage.png')" }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header Section */}
        <Header />

        {/* Mission Statement Section */}
        <section className="flex flex-col justify-center items-center py-12 mt-9 px-4 md:px-12">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            OUR MISSION STATEMENT
          </motion.h1>
          <motion.p
            className="text-base md:text-xl text-center leading-relaxed max-w-4xl font-medium sm:font-semibold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Lazy Faire Magazine is the voice of the Alberta School of Business
            community at the University of Alberta. Run for students, by
            students, we are committed to promoting business communication
            through semesterly issues that explore engaging and relevant
            business related topics. Our mission is to provide opportunities
            for involvement, leadership, and professional growth, while
            celebrating the diverse achievements of students, faculty, and
            alumni. At Lazy Faire, we aim to foster a learning environment where
            creativity, collaboration, and inclusivity thrive both on and off
            campus.
          </motion.p>
        </section>

        {/* Values Section */}
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-12 py-6">
          {/* Left Side: Text */}
          <motion.div
            className="md:w-1/2 md:pr-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
              Our Values
            </h2>
            <p className="text-sm md:text-lg leading-relaxed text-center font-medium sm:font-semibold">
              Lazy Faire is a student-run magazine dedicated to fostering
              connection within the Alberta School of Business community. Our
              mission is to deliver content that is engaging, insightful, and
              relevant to students, faculty, and alumni alike. Our diverse team
              of writers, designers, and photographers brings a wealth of
              perspectives and expertise from various backgrounds and
              disciplines, uniting their talents to create a platform that
              celebrates collaboration and creativity. Lazy Faire is committed
              to showcasing the achievements, experiences, and efforts of our
              community  and alumni—while promoting a culture
              of diversity, equity, and inclusion. By sharing these stories, we
              aim to inspire learning and understanding, both on and off campus.
            </p>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="md:w-1/2 flex justify-center mt-6 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <img
              src="LF-executive.png"
              alt="Lazy Faire Magazine Team"
              className="w-full max-w-sm md:max-w-md h-auto object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
}

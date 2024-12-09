import React from "react";

export function Read_Magazine() {
  return (
    <div className="h-screen bg-[url('/backgroundimage.png')] bg-cover bg-center p-4 overflow-x-hidden">
      <h1 className="text-center text-xl md:text-2xl font-semibold text-white mb-4">
        LazyFaire Magazine
      </h1>

      {/* Responsive Iframe Container */}
      <div className="overflow-hidden border shadow-lg mx-auto w-full max-w-full bg-white rounded-md">
        <iframe
          src="/Finalmagazine.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full h-full"
          style={{ height: "70vh", border: "none" }}
          title="LazyFaire Magazine"
        />
      </div>

      <footer className="text-center text-white text-sm mt-4">
        © 2024 LazyFaire Magazine
      </footer>
    </div>
  );
}
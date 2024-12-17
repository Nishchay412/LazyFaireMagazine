import React from "react";

export function Read_Magazine() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div className="h-screen bg-[url('/backgroundimage.png')] bg-cover bg-center p-4 overflow-x-hidden">
      <h1 className="text-center text-xl md:text-2xl font-semibold text-white mb-4">
        LazyFaire Magazine
      </h1>

      {isMobile ? (
        <div className="text-center">
          <a
            href="https://online.fliphtml5.com/dsamo/hekz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline text-lg"
          >
            Open LazyFaire Magazine
          </a>
        </div>
      ) : (
        <div className="relative overflow-hidden border shadow-lg mx-auto w-full max-w-5xl bg-white rounded-md">
          <iframe
            src="https://online.fliphtml5.com/dsamo/hekz/"
            title="LazyFaire Magazine Flipbook"
            style={{
              width: "100%", // Full width of the container
              height: "90vh", // Adjust height for better readability
              border: "none",
            }}
          ></iframe>
        </div>
      )}

      <footer className="text-center text-white text-sm mt-4">
        © 2024 LazyFaire Magazine
      </footer>
    </div>
  );
}

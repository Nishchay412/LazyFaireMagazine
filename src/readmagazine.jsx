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
            href="/Finalmagazine.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline text-lg"
          >
            Open LazyFaire Magazine
          </a>
        </div>
      ) : (
        <div className="relative overflow-hidden border shadow-lg mx-auto w-full bg-white rounded-md">
          <iframe
            src="/Finalmagazine.pdf#toolbar=0&navpanes=0&scrollbar=0"
            className="w-full"
            style={{
              height: "70vh",
              border: "none",
              overflow: "hidden",
              zoom: "0.8",
              maxWidth: "100%",
            }}
            title="LazyFaire Magazine"
          />
        </div>
      )}

      <footer className="text-center text-white text-sm mt-4">
        © 2024 LazyFaire Magazine
      </footer>
    </div>
  );
}

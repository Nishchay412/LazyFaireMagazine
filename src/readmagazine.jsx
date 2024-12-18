import React, { useEffect } from "react";

export function Read_Magazine() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    // Dynamically inject the Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script if the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen bg-[url('/backgroundimage.png')] bg-cover bg-center p-4 overflow-x-hidden">
      <h1 className="text-center text-xl md:text-2xl font-semibold text-white mb-4">
        LazyFaire Magazine
      </h1>

      {isMobile ? (
        <div className="text-center">
          <a
            href="https://online.flippingbook.com/view/675970383/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline text-lg"
          >
            Open LazyFaire Magazine
          </a>
        </div>
      ) : (
        <div className="relative mx-auto w-full max-w-5xl">
          {/* Elfsight Flipbook Embed */}
          <div
            className="elfsight-app-5683c14c-70f5-4f1b-9558-1191f164aef3"
            data-elfsight-app-lazy
          ></div>
        </div>
      )}

      <footer className="text-center text-white text-sm mt-4">
        © 2024 LazyFaire Magazine
      </footer>
    </div>
  );
}

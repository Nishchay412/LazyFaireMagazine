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
            href="https://online.flippingbook.com/view/675970383/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline text-lg"
          >
            Open LazyFaire Magazine
          </a>
        </div>
      ) : (
        <div
          className="relative mx-auto w-full max-w-5xl"
          style={{ height: "80vh" }}
        >
          {/* Publuu Flipbook Embed */}
          <iframe
            src="https://publuu.com/flip-book/754362/1672950/page/1?embed"
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="0"
            allow="clipboard-write; autoplay; fullscreen"
            className="publuuflip"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
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

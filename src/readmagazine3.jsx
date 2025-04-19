
import React from "react";
import { Header } from "./components/Header";
export function Read_Magazine3() {
  return (

    <div className="h-screen bg-[url('/backgroundimage.png')] bg-cover bg-center p-4 overflow-x-hidden">
     <Header/>

      <div
        className="relative mx-auto w-full mt-14 max-w-5xl"
        style={{ height: "80vh" }}
      >
        {/* Heyzine Flipbook Embed */}
        <iframe
            allowFullScreen
            scrolling="no"
            className="fp-iframe"
            style={{
              border: "1px solid lightgray",
              width: "100%",
              height: "100%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            src="https://heyzine.com/flip-book/51466d3a0c.html"
          ></iframe>
      </div>

      <footer className="text-center text-white text-sm mt-4">
        © 2024 LazyFaire Magazine
      </footer>
    </div>
  );
}

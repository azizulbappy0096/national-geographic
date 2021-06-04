import React from "react";

function Podcast() {
  return (
    <div className="background-image__promo text-white relative p-8 grid place-content-center">
      <div className="relative z-10 space-y-8 text-center">
        <h1 className="uppercase font-bold tracking-widest text-3xl md:text-5xl">
          {" "}
          GIRAFFES ON A BOAT{" "}
        </h1>
        <p className="text-lg font-base">
          {" "}
          A scientist attempts the impossible: moving eight giraffes off an
          island on a boat.
        </p>
        <a
          href="#"
          className="nav__button inline-block px-6 py-4 text-black uppercase"
        >
          <span className="base absolute inset-0 bg-custom-yellow"></span>
          <span
            className="bg inset-0"
            style={{
              backgroundColor: "#fff",
            }}
          ></span>
          <span className="relative z-10 font-medium tracking-widest text-base">
            Listen on Apple Podcasts
          </span>
        </a>
      </div>

      <div className="absolute inset-0 z-0">
        <span
          className="background-image block h-full"
          style={{
            backgroundImage: "url(/images/podcast-bg.webp)",
            backgroundPosition: "left center",
            opacity: 0.7,
          }}
        ></span>
      </div>
    </div>
  );
}

export default Podcast;

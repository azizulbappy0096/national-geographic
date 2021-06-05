import React from "react";

function Photography() {
  return (
    <div className="relative background-image__promo flex flex-col justify-end">
      <div
      className="relative z-10 h-full flex-auto flex items-end"
        style={{
          backgroundImage: "linear-gradient(-179deg,transparent,#fff)",
          opacity: 0.99,
        }}
      >
        <div className="px-2 md:px-6 pb-8  h-full space-y-4 flex flex-col justify-end">
          <a href="#" className="block w-max">
            <span className="capitalize font-semibold text-xl tracking-widest">
              {" "}
              Photography{" "}
            </span>
          </a>
          <h2 className="text-4xl uppercase tracking-widest font-bold">
            {" "}
            Koko's Kitten{" "}
          </h2>
          <p className="text-lg font-base">
            Koko the gorilla hugs her pet kitten, All Ball, in this image from
            our photography archives.
          </p>

          <a
            href="#"
            title="See The Photo"
            className="nav__button inline-block px-4 py-2 text-black hover:text-white uppercase font-bold tracking-widest max-w-max"
          >
            <span className="base absolute inset-0 border-2 border-black"></span>
            <span className="bg inset-0 bg-black"></span>
            <span className="relative z-10 uppercase font-medium tracking-widest text-sm">
              See The Photo
            </span>
          </a>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <span
          className="background-image block h-full"
          style={{
            backgroundImage: "url(/images/photography-bg.webp)",
            backgroundPosition: "left center",
            opacity: 1,
          }}
        ></span>
      </div>
    </div>
  );
}

export default Photography;

import React from "react";
import SectionTitle from "./SectionTitle";

function Mission() {
  return (
    <div className="bg-white px-4 pb-20">
      <SectionTitle
        title="THE NATIONAL GEOGRAPHIC SOCIETY MISSION"
        text="text-black"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center mx-4 lg:mx-20">
        <div >
          <figure>
            <img src="/images/mission-img.webp" />
          </figure>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl capitalize font-semibold">
            {" "}
            National Geographic’s nonprofit work{" "}
          </h2>
          <p className="">
            {" "}
            The National Geographic Society invests in innovative leaders in
            science, exploration, education and storytelling to illuminate and
            protect the wonder of our world.
          </p>

          <a
            href="#"
            title="See The Photo"
            className="nav__button inline-block px-4 py-2 text-black hover:text-white uppercase font-bold tracking-widest max-w-max"
          >
            <span className="base absolute inset-0 border-2 border-black"></span>
            <span className="bg inset-0 bg-black"></span>
            <span className="relative z-10 uppercase font-medium tracking-widest text-sm">
              Learn More
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mission;

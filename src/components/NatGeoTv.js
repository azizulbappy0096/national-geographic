import React from "react";
import Carousel from "./Carousel";
import SectionTitle from "./SectionTitle";

const natGeoShows = [
  {
    image: "/images/tv/activate.webp",
    link: "#",
  },
  {
    image: "/images/tv/alaska.webp",
    link: "#",
  },
  {
    image: "/images/tv/aretha.webp",
    link: "#",
  },
  {
    image: "/images/tv/drPol.webp",
    link: "#",
  },
  {
    image: "/images/tv/impact.webp",
    link: "#",
  },
  {
    image: "/images/tv/lifeBelow.webp",
    link: "#",
  },
  {
    image: "/images/tv/oakley.webp",
    link: "#",
  },
  {
    image: "/images/tv/photo-ark.webp",
    link: "#",
  },
  {
    image: "/images/tv/pristine.webp",
    link: "#",
  },
  {
    image: "/images/tv/raceEarth.webp",
    link: "#",
  },
  {
    image: "/images/tv/sos.webp",
    link: "#",
  },
  {
    image: "/images/tv/storyOfUs.webp",
    link: "#",
  },
  {
    image: "/images/tv/wicked.webp",
    link: "#",
  },
  {
    image: "/images/tv/zero.webp",
    link: "#",
  },
];

function NatGeoTv() {
  return (
    <div className="pt-40 relative mb-16">
      <SectionTitle
        title="Nat Geo TV"
        subtitle="RUNNING WILD WITH BEAR GRYLLS"
        bottom={true}
      >
        <div>
          <p className="text-lg">
            In an all-new season of Running Wild, high-octane celebrity guests
            face tough challenges, sending them to the very edge of what they
            can handle.
          </p>

          <a
            href="#"
            className="fitt-tracker border-custom-yellow capitalize border-b-4 inline-block tracking-wider text-lg font-medium hover:text-black mt-6"
          >
            Watch now
          </a>
        </div>
      </SectionTitle>

      <div className="geoTv__discover relative z-10 text-white w-full md:w-10/12 mx-auto px-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl tracking-widest font-bold ">
            <a href="#">Discover More Nat Geo TV</a>
          </h3>
          <a
            href="#"
            className="fitt-tracker border-custom-yellow capitalize border-b-4 tracking-wider text-lg font-medium hover:text-black hidden md:block"
          >
            see more
          </a>
        </div>
        <Carousel items={natGeoShows} />
        <a
            href="#"
            className="fitt-tracker border-custom-yellow capitalize border-b-4 tracking-wider text-lg font-medium hover:text-black ml-auto w-max block md:hidden"
          >
            see more
          </a>
      </div>
    
      <div className="absolute inset-0 z-0 geoTv__video">
        <video poster="/images/tv/poster.jpg"  loop autoPlay controls={false} style={{objectFit: "cover", height: "90%", width: "100%"}}>
          <source src="/images/tv/bg-video.mp4" type="video/mp4"></source>
          
        </video>

      </div>
    </div>
  );
}

export default NatGeoTv;

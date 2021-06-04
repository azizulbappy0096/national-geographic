import React, { useRef } from "react";

const RenderList = ({ data }) => {
  const promoItem = useRef(null);
  const handleHover = (e) => {
    e.preventDefault();
    promoItem.current.classList.add("underline");
  };

  const handleOut = (e) => {
    e.preventDefault();
    promoItem.current.classList.remove("underline");
  };
  return (
    <li className="relative flex items-start text-white space-x-6">
      <img
        className="h-24 ml-0"
        src={data.image}
        alt={data.title.text}
        style={{maxWidth: "96px"}}
      />
      <div className="space-y-1 relative z-10">
        {data.partner && (
          <h4 className="bg-white text-black w-auto inline-block px-2">
            {" "}
            PARTNER CONTENT{" "}
          </h4>
        )}
        {data.subject.text && (
          <a
            href={data.subject.link}
            className="capitalize block hover:underline"
          >
            <h5 className="text-sm font-bold tracking-widest ">
              {data.subject.text}{" "}
            </h5>
          </a>
        )}

        {data.subtitle.text && (
          <a href={data.subtitle.link} className="block hover:underline">
            <h5 className="text-sm font-light tracking-widest ">
              {" "}
              {data.subtitle.text}{" "}
            </h5>
          </a>
        )}
        <a
          ref={promoItem}
          href={data.title.link}
          className="block hover:underline"
        >
          <h4 className="promo-item text-base font-bold">
            {" "}
            {data.title.text}{" "}
          </h4>
        </a>
      </div>
      <a
        href={data.title.link}
        className="promo-link absolute inset-0 z-0"
        onMouseOver={handleHover}
        onMouseOut={handleOut}
      ></a>
    </li>
  );
};

const Promo = ({ data }) => {
  const promoItem = useRef(null);
  const handleHover = (e) => {
    e.preventDefault();
    promoItem.current.classList.add("underline");
  };

  const handleOut = (e) => {
    e.preventDefault();
    promoItem.current.classList.remove("underline");
  };

  return (
    <ul className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-1 gap-8">
      {data.map((data, index) => (
        <RenderList key={index} data={data} />
      ))}

      <div className="text-center xl:text-left col-span-full">
        <a
          href="#"
          className="fitt-tracker border-custom-yellow inline-block text-white capitalize font-bold border-b-2 hover:text-black"
        >
          {" "}
          See more{" "}
        </a>
      </div>
    </ul>
  );
};

export default Promo;

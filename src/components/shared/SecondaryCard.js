import React from "react";

function SecondaryCard({ data }) {
  return (
    <div className="relative bg-white inline-block w-full">
      <div className="flex flex-col overflow-hidden h-full secondaryCard">
        <header className="relative hero__card-border overflow-hidden block">
          <div
            style={{
              paddingTop: "66.67%",
            }}
          ></div>
          <a href="#" className="absolute inset-0 z-10"></a>
          <div
            className="absolute inset-0 background-image background-image-gradient"
            style={{
              backgroundImage: `url(${data.image})`,
            }}
          ></div>
        </header>
        <footer className="block px-4 py-3 flex-grow relative">
          <div className="flex flex-col h-full">
            <h5 className="text-base uppercase font-normal text-gray-500 hover:underline">
              <a href={data.subject.link}> {data.subject.text} </a>
            </h5>
            <h1 className="text-2xl lg:text-3xl font-semibold lg:font-bold mt-4">
              {" "}
              {data.title}{" "}
            </h1>

            <a href="#" className="flex space-x-2 text-sm items-center mt-auto pt-6 max-w-max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="uppercase font-bold tracking-widest">
                {" "}
                See more!{" "}
              </span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SecondaryCard;

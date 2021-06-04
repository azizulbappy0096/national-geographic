import React from "react";

function SectionTitle({ title, subtitle, bottom, children, text }) {
  return (
    <div className={`flex flex-col items-center space-y-6 text-center py-14 w-11/12 lg:w-7/12 mx-auto relative z-10 ${!text && "text-white"}`}>
      <h1 className="uppercase text-3xl md:text-5xl  font-extrabold tracking-wider"> {title} </h1>
      {subtitle && <h3 className="uppercase text-xl md:text-2xl font-semibold tracking-widest pt-10"> {subtitle} </h3>}
       
        {children}
       
        {!bottom && (
            <div className="w-20 border-b-4 border-custom-yellow"></div>
        )}
      
    </div>
  );
}

export default SectionTitle;

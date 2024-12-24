import React from "react";

const Heading = ({ number, text }) => {
  return (
    <div className="flex flex-col">
      {/* Number on the left */}
      <div className="text-subtext_color/50 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold -mb-3 ">
        {number}
      </div>
      {/* Heading text */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold -mr-2">
        {text}
      </h2>
    </div>
  );
};

export default Heading;

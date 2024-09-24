import React from "react";
import HeadingText from "./shared/HeadingText";

const Section3 = () => {
  const buttons = [
    "Rahul Gandhi In Manipur",
    "Meta",
    "E-commerce",
    "Fashion",
    "Live Cricket Score",
    "Adipurush",
    "Sushant Singh Rajput death case",
    "Myntra launches ",
    "E-commerce",
    "Live Cricket Score",
  ];

  return (
    <div className="container mx-auto">
      <div className="px-4">
        <HeadingText>Trending</HeadingText>
      </div>
      <div className="flex overflow-x-auto p-4 whitespace-nowrap">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="bg-white text-[#666666] text-[11px] px-[10px] py-[8px] rounded border-[1px] hover:bg-slate-900 hover:text-white mx-2"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Section3;

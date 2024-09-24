import React from "react";

const HeadingText = ({ children, customColor }) => {
  return (
    <a className="flex flex-col mb-2 cursor-pointer">
      <h2
        className="text-[20px] font-semibold"
        style={{ color: customColor }} // Apply inline style for color
      >
        {children}
      </h2>
      <img className="w-[15px] h-full" src="pseudo.png" alt="pseudo-icon" />
    </a>
  );
};

export default HeadingText;

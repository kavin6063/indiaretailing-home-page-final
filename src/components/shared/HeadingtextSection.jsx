import React from "react";
import HeadingText from "./HeadingText";

const HeadingtextSection = ({ title, color }) => (
  <div className="flex flex-row items-center justify-between">
    <HeadingText customColor={color}>{title}</HeadingText>
    <div className="flex flex-row items-center justify-between gap-1">
      <p className="text-[12px] text-[#666]">See More</p>
      <img src="/sec4/arrow.svg" alt="arrow" />
    </div>
  </div>
);

export default HeadingtextSection;

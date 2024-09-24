import React from "react";
import HeadingText from "./shared/HeadingText";

const Section14 = () => {
  const posts = [
    {
      description: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China",
      hastag: "#Lifestyle",
      image: "/sec7/img1.png",
    },
    {
      description: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China",
      hastag: "#Lifestyle",
      image: "/sec7/img2.png",
    },
    {
      description: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China",
      hastag: "#Lifestyle",
      image: "/sec7/img3.png",
    },
    {
      description: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China",
      hastag: "#Lifestyle",
      image: "/sec7/img4.png",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-6 gap-4 p-4">
        {/* First Division - 4/5 space */}
        <div className=" col-span-6 lg:col-span-4  p-4 rounded-md">
          <HeadingText> Reconnect</HeadingText>
          <div className="container mx-auto">
            <div className="flex  overflow-x-auto gap-4 p-4">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="border border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal w-[230px] transition-transform hover:scale-105 flex-shrink-0" // prevent shrinking
                >
                  <img
                    src={post.image}
                    className="rounded-t-lg w-full mb-3"
                    alt={post.title}
                  />
                  <div className="p-2 pt-1">
                    <div>
                      <p className="text-gray-700 text-[11px]">
                        {post.description}
                      </p>
                      <p className="font-bold text-[#1a1919] text-[10px]">
                        {post.hastag}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add your main content here */}
        </div>

        {/* Second Division - 1/5 space */}
        <div className="col-span-6 lg:col-span-2 p-4 rounded-md">
          <div className="flex flex-row justify-center items-center">
            <img src="/sec14/lastimg.png" alt="" />
          </div>
        </div>
      </div>
      <div className=" m-14 flex flex-row items-center justify-center container mx-auto">
        <img src="/sec10/head-img.png" alt="" />
      </div>
    </div>
  );
};

export default Section14;

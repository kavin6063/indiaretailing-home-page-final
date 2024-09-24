import React from "react";
import HeadingtextSection from "./shared/HeadingtextSection";

const Section7 = () => {
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
    {
      description: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China",
      hastag: "#Lifestyle",
      image: "/sec7/img5.png",
    },
  ];

  return (
    <div>
      <div className="container mx-auto mb-2  mt-10 px-4">
        <HeadingtextSection title="Food & Beverage" color="black" />
      </div>
      <div className="container mx-auto overflow-hidden">
        <div className="flex space-x-4 overflow-x-auto">
          {posts.map((post, index) => (
            <div
              key={index}
              className="border border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal transition-transform hover:scale-105 w-[250px] flex-shrink-0" // fixed width for cards, flex-shrink-0 prevents shrinking
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
    </div>
  );
};

export default Section7;

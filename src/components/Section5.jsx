import React from "react";
import HeadingtextSection from "./shared/HeadingtextSection";
import HeadingText from "./shared/HeadingText";

const Section5 = () => {
  const post1 = [
    {
      image: "/sec5/img1.png",
      description: "Senco Gold IPO subscribed 69% on first day of subscription",
    },
    {
      image: "/sec5/img1_1.png",
      description:
        "India D2C Summit & Awards 2023  Trailblazing Brands and Professionals",
    },
  ];

  const post2 = [
    {
      image: "/sec5/img2.png",
      description: "Fastrack Smart onboards Ranveer Singh as brand ambassador",
    },
    {
      image: "/sec5/img2_2.png",
      description: "Planet Fashion by ABFRL opens 2 outlets in Mumbai",
    },
  ];

  const post3 = [
    {
      image: "/sec5/img3.png",
      description: "Zoca Cafe launches outlet in Bengaluru",
    },
    {
      image: "/sec5/img3_3.png",
      description: "Unwrapping the Archies’ reinvention plan",
    },
  ];

  return (
    <div className="bg-[#282828] mt-12 p-4">
      <HeadingtextSection color="#ffffff" title="IR Video Hall" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* First Division - Takes 1/4 space on desktop */}
        <div className="col-span-1 md:col-span-2 p-4">
          <div className="transition-transform hover:scale-105">
            <img className="w-full" src="/sec5/img.png" alt="" />
          </div>
        </div>

        {/* Second Division - Takes 3/4 space on desktop */}
        <div className="col-span-1 md:col-span-3 p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="container w-full md:w-[205px]">
              <HeadingText customColor="white">Retail With Rasul</HeadingText>
              {post1.map((post, index) => (
                <div key={index}>
                  <div className="m-2 transition-transform hover:scale-105">
                    <img className="w-full" src={post.image} alt="" />
                  </div>
                  <p className="text-[11px] m-1 text-white">
                    {post.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="container w-full md:w-[205px]">
              <HeadingText customColor="white">The Store</HeadingText>
              {post2.map((post, index) => (
                <div key={index}>
                  <div className="m-2 transition-transform hover:scale-105">
                    <img className="w-full" src={post.image} alt="" />
                  </div>
                  <p className="text-[11px] m-1 text-white">
                    {post.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="container w-full md:w-[205px]">
              <HeadingText customColor="white">IR Studio</HeadingText>
              {post3.map((post, index) => (
                <div key={index}>
                  <div className="m-2 transition-transform hover:scale-105">
                    <img className="w-full" src={post.image} alt="" />
                  </div>
                  <p className="text-[11px] m-1 text-white">
                    {post.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;

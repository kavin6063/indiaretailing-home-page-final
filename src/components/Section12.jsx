import React from "react";
import HeadingtextSection from "./shared/HeadingtextSection";

const Section12 = () => {
  const posts = [
    {
      headLine: "Unwrapping the Archies reinvention plan",
      description:
        "The singer-songwriter has been spotted in the hybrid garment...",
      image: "/sec12/col1-1.png",
      hashtags: "Register Now >",
    },
    {
      headLine: "Phygital Retail Convention",
      description: "The Gucci loafer has been a signature style for 70 years.",
      image: "/sec12/col1-2.png",
      hashtags: "Register Now >",
    },
    {
      headLine: "India Fashion Forum",
      description: "BTS attended the 2022 Grammy Awards in complementary ...",
      image: "/sec12/col1-3.png",
      hashtags: "Register Now >",
    },
  ];
  const posts1 = [
    {
      headLine: "India Food Forum",
      description:
        "The singer-songwriter has been spotted in the hybrid garment...",
      image: "/sec12/col2-1.png",
      hashtags: "Register Now >",
    },
    {
      headLine: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      description: "The Gucci loafer has been a signature style for 70 years.",
      image: "/sec12/col2-2.png",
      hashtags: "Register Now >",
    },
    {
      headLine: "Shopping Centres Next",
      description: "BTS attended the 2022 Grammy Awards in complementary ...",
      image: "/sec12/col2-3.png",
      hashtags: "Register Now >",
    },
  ];
  return (
    <div>
      <div className="mx-auto container p-4">
        <HeadingtextSection title="Events" />
      </div>
      <div className="grid grid-cols-5 gap-4 p-4">
        {/* First Division - 2/5 space */}
        <div className=" col-span-5 lg:col-span-2  p-4 rounded-md">
          <div className="w-[430px]">
            <img className="w-full" src="/sec12/img1.png" alt="" />
          </div>
          <div>
            <p className="text-xs font-bold text-red-500 m-2">TECHNOLOGY</p>
            <div className="flex items-center gap-6 space-x-1 text-[#8b8b8b]">
              <h1 className=" text-black font-bold">D2C India</h1>
              <div className="flex gap-2 items-center text-xs">
                <img src="/sec12/date.png" alt="" />
                <span>
                  Wed, 09 Aug 2023 {""} | {""}
                </span>
                <img src="/sec12/location.png" alt="" />
                <span>Barkha Dutt</span>
              </div>
            </div>
            <p className="mt-2 text-[14px] text-[#666]">
              get inspired Building Brands for the next decade of consumption
            </p>
          </div>
        </div>

        {/* Second Division - 3/5 space */}
        <div className=" col-span-5 lg:col-span-3   rounded-md">
          {/* Grid inside the second division with two equal columns */}
          <div className="grid grid-cols-2 gap-4 ">
            <div className=" col-span-2 lg:col-span-1 p-4 rounded-md">
              <div>
                {posts.map((post, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex flex-col my-1  items-center w-[370px] bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="w-[135px]">
                      <img
                        className="object-cover w-full rounded-lg  h-full  md:w-48  md:rounded-lg"
                        src={post.image}
                        alt={post.title}
                      />
                    </div>
                    <div className="flex flex-col justify-between p-2 leading-normal">
                      <p className="text-base font-medium">{post.headLine}</p>
                      <p className="mb-3 font-normal text-[12px] text-gray-700 dark:text-gray-400">
                        {post.description}
                      </p>
                      <div className="flex gap-2 items-center text-xs">
                        <img src="/sec12/date.png" alt="" />
                        <span>
                          Wed, 09 Aug 2023 {""} | {""}
                        </span>
                        <img src="/sec12/location.png" alt="" />
                        <span>Barkha Dutt</span>
                      </div>
                      <div className="flex flex-wrap mt-2">
                        <span className="text-xs text-[#da1010] mr-2">
                          {post.hashtags}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className=" col-span-2   lg:col-span-1 p-4 rounded-md">
              <div>
                {posts1.map((post, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex flex-col my-1  items-center w-[370px] bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="w-[135px]">
                      <img
                        className="object-cover w-full rounded-lg  h-full  md:w-48  md:rounded-lg"
                        src={post.image}
                        alt={post.title}
                      />
                    </div>
                    <div className="flex flex-col justify-between p-2 leading-normal">
                      <p className="text-base font-medium">{post.headLine}</p>
                      <p className="mb-3 font-normal text-[12px] text-gray-700 dark:text-gray-400">
                        {post.description}
                      </p>
                      <div className="flex gap-2 items-center text-xs">
                        <img src="/sec12/date.png" alt="" />
                        <span>
                          Wed, 09 Aug 2023 {""} | {""}
                        </span>
                        <img src="/sec12/location.png" alt="" />
                        <span>Barkha Dutt</span>
                      </div>
                      <div className="flex flex-wrap mt-2">
                        <span className="text-xs text-[#da1010] mr-2">
                          {post.hashtags}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section12;

import React from "react";
import HeadingtextSection from "./shared/HeadingtextSection";

const Section4 = () => {
  const posts = [
    {
      title: "Top 5 iconic Apple stores across the world by design",
      description: "From a total of around 522 Apple stores across the world..",
      author: "Arundhati",
      avatar: "/sec4/avatar1.png",
      image: "/sec4/img1.png",
    },
    {
      title: "Rollercoaster ride of four retail industry IPOs",
      description:
        "These companies created a lot of hype when they listed on the...",
      author: "Vikram Seth",
      avatar: "/sec4/avatar2.png",
      image: "/sec4/img2.png",
    },
    {
      title: "Uniqlo India’s Success Mantra: Making headway...",
      description:
        "Uniqlo, Asia’s largest fashion retailer has managed to hit..",
      author: "Jhumpa Lahiri",
      avatar: "/sec4/avatar3.png",
      image: "/sec4/img3.png",
    },
  ];

  const post2 = [
    {
      description: "Human touchpoint is extremely important for us,",
      tag: "Fashion",
      image: "/sec4/img4.png",
      buttonText: "FASHION",
    },
    {
      description: "Human touchpoint is extremely important for us,",
      tag: "Beauty",
      image: "/sec4/img5.png",
      buttonText: "BEAUTY",
    },
  ];

  return (
    <div className="mt-5 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* First Division - 3/4 space */}
        <div className="col-span-1 md:col-span-3">
          <div className="px-4">
            <HeadingtextSection color={"black"} title={"Leaders Ink"} />
          </div>
          <div className="flex flex-col justify-between items-center gap-8">
            <div className="max-w-screen-xl mx-auto p-3 sm:p-10 md:p-4 rounded">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {posts.map((post, index) => (
                  <div
                    key={index}
                    className="border border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal max-w-[270px] transition-transform hover:scale-105" // max width 270px
                  >
                    <img
                      src={post.image}
                      className="rounded-t-lg w-full mb-3"
                      alt={post.title}
                    />
                    <div className="p-2 pt-1">
                      <div>
                        <div className="flex items-center justify-between gap-1">
                          <a href="#">
                            <img
                              className="w-[35px] h-[35px] rounded-full inline-block mr-5"
                              src={post.avatar}
                              alt={`Avatar of ${post.author}`}
                            />
                          </a>
                          <div>
                            <a
                              href="#"
                              className="text-gray-900 font-bold text-[11px] mb-2 hover:text-red-700 inline-block"
                            >
                              {post.title}
                            </a>
                          </div>
                        </div>
                        <p className="text-gray-700 text-[11px]">
                          {post.description}
                        </p>
                        <p className="font-bold text-[#1a1919] text-[10px]">
                          {post.author}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/sec4/slider.png" alt="" />
            </div>
          </div>
        </div>

        {/* Second Division - 1/4 space */}
        <div className="col-span-1 md:col-span-2">
          <div className="px-4">
            <HeadingtextSection color={"black"} title={"Research"} />
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="grid p-4 grid-cols-1 sm:grid-cols-2 gap-1">
              {post2.map((post, index) => (
                <div
                  key={index}
                  className="max-w-[260px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg w-full"
                      src={post.image}
                      alt={post.buttonText}
                    />
                  </a>
                  <div className="p-5">
                    <p className="mb-3 font-normal text-[13px] text-gray-700 dark:text-gray-400">
                      {post.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-700 hover:bg-red-600 hover:text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      {post.buttonText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img src="/sec4/slider.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;

import React from "react";
import HeadingtextSection from "./shared/HeadingtextSection";

const Section9 = () => {
  const posts = [
    {
      title: "FASHION",
      subTitle: "FOOD",
      headLine: "Select Citywalk opens 4 new stores in June.",
      description:
        "The new stores opened at Select Citywalk include Choko la, Raymond, Looks Salon and Home Stop.",
      image: "/sec9/11.png",
      hashtags: "#reel stories podcast",
    },
    {
      title: "SHAILESH",
      subTitle: "FOOD",
      headLine: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      description: "The Gucci loafer has been a signature style for 70 years.",
      image: "/sec9/22.png",
      hashtags: "#Fashion",
    },
    {
      title: "LIFESTYLE",
      subTitle: "FASHION",
      headLine: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      description: "BTS attended the 2022 Grammy Awards in complementary ...",
      image: "/sec9/33.png",
      hashtags: "#Fashion",
    },
  ];
  const posts1 = [
    {
      title: "Simplifying Retai Industry Compliance Management",
      subTitle: "TV & Film:Film Interviews",
      image: "/sec9/r-1.png",
    },
    {
      title: "Simplifying Retai Industry Compliance Management",
      subTitle: "TV & Film:Film Interviews",
      image: "/sec9/r-2.png",
    },
  ];
  return (
    <div>
      <div className="grid md:grid-rows-1 lg:grid-cols-5 gap-4 p-4">
        {/* First Division - 3/5 space */}
        <div className="col-span-3 rounded-md">
          <div className="p-4">
            <HeadingtextSection title="Shopping Centers" />
          </div>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="w-[335px] h-auto">
                  <img
                    className="object-cover w-[335px] h-[220px] rounded-lg"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal w-full">
                  <h5 className="mb-2 text-sm font-medium tracking-tight text-gray-900 dark:text-white">
                    <span className="text-red-700">{post.title}</span> |{" "}
                    <span className="text-zinc-700">{post.subTitle}</span>
                  </h5>
                  <p className="text-base font-medium">{post.headLine}</p>
                  <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap mt-2">
                    <span className="text-xs text-[#121212] mr-2">
                      {post.hashtags}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Second Division - 2/5 space */}
        <div className="col-span-2  p-4 rounded-md">
          <div className="p-4">
            <HeadingtextSection title="Privelege Members Corner" />
          </div>
          <div>
            <div className="w-full md:w-[345px]">
              <img
                className="object-cover w-full  h-full rounded-lg"
                src="/sec9/r-img.png"
                alt="image"
              />
            </div>
            <p className="text-base font-medium m-3">
              India D2C Summit & Awards 2023 Trailblazing Brands and
              Professionals
            </p>
          </div>
          <div className="mx-auto">
            <div className="p-4 mt-36">
              <HeadingtextSection title="Podcast" />
            </div>
            {posts1.map((post, index) => (
              <a
                key={index}
                href="#"
                className="flex  h-32 items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="md:w-[71px] md:h-[71px]">
                  <img
                    className="object-cover w-full rounded-lg h-full md:h-auto md:w-48 md:rounded-lg"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h5>
                  <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                    {post.subTitle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;

import React from "react";
import HeadingtextSection from "./shared/HeadingtextSection";

const Section10 = () => {
  const posts = [
    {
      title: "FASHION",
      subTitle: "FOOD",
      headLine: "What makes Fila unique is its attitude and...",
      description:
        "The singer-songwriter has been spotted in the hybrid garment...",
      image: "/sec10/col1-1.png",
      hashtags: ["#Fashion"],
    },
    {
      title: "SHAILESH",
      subTitle: "FOOD",
      headLine: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      description: "The Gucci loafer has been a signature style for 70 years.",
      image: "/sec10/col1-2.png",
      hashtags: ["#Fashion"],
    },
    {
      title: "LIFESTYLE",
      subTitle: "FASHION",
      headLine: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      description: "BTS attended the 2022 Grammy Awards in complementary ...",
      image: "/sec10/col1-3.png",
      hashtags: ["#Fashion"],
    },
  ];
  const posts2 = [
    {
      title: "SIDDHANT",
      subTitle: "FASHION",
      headLine: "French Connection announces Siddhant Chaturvedi as ..",
      description:
        "The singer-songwriter has been spotted in the hybrid garment...",
      image: "/sec10/col2-1.png",
      hashtags: ["#Fashion"],
    },
    {
      title: "FASHION",
      subTitle: "RETAILERS",
      headLine: "Indian fashion retailers to witness revenue ...",
      description: "The Gucci loafer has been a signature style for 70 years.",
      image: "/sec10/col2-2.png",
      hashtags: ["#Fashion"],
    },
    {
      title: "FASHION",
      subTitle: "ZOUK",
      headLine: "Zouk marries heritage with functionality",
      description: "BTS attended the 2022 Grammy Awards in complementary ...",
      image: "/sec10/col2-3.png",
      hashtags: ["#Fashion"],
    },
  ];
  const posts3 = [
    {
      title: "WELLNESS",
      subTitle: "NEWS",
      headLine: "Athiya Shetty becomes the face of Just Herbs’...",
      image: "/sec10/r-1.png",
    },
    {
      title: "WELLNESS",
      subTitle: "NEWS",
      headLine: "Indian stars dazzle at Cannes 2023",
      image: "/sec10/r-2.png",
    },
    {
      title: "BEAUTY",
      subTitle: "NEWS",
      headLine: "Recode Studios to expand footprint with 5 store...",
      image: "/sec10/r-3.png",
    },
    {
      title: "BEAUTY",
      subTitle: "NEWS",
      headLine: "Recode Studios to expand footprint with 5 store...",
      image: "/sec10/r-4.png",
    },
  ];
  return (
    <div className="mt-11">
      <div className="w-full flex justify-center">
        <img
          className="m-8 w-auto max-w-full"
          src="/sec10/head-img.png"
          alt=""
        />
      </div>
      <div className="grid  lg:grid-cols-6 gap-4">
        {/* First Division - 3/4 space (3 out of 4 columns) */}
        <div className=" col-span-6 lg:col-span-4  p-4">
          <div className="flex flex-col lg:flex-row justify-between gap-1">
            <div className="space-y-1">
              <div className="mx-auto px-4">
                <HeadingtextSection color={"black"} title={"Supply Chain"} />
              </div>
              {posts.map((post, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex flex-col mx-auto items-center lg:w-[450px] md:w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-lg  h-full  md:w-48  md:rounded-lg"
                    src={post.image}
                    alt={post.title}
                  />
                  <div className="flex flex-col justify-between p-2 leading-normal">
                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                      <span className="text-red-700">{post.title} </span> |{" "}
                      <span className="text-zinc-700"> {post.subTitle}</span>
                    </h5>
                    <p className="text-base font-medium">{post.headLine}</p>
                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap mt-2">
                      {post.hashtags.map((hashtag, idx) => (
                        <span key={idx} className="text-xs text-[#121212] mr-2">
                          {hashtag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="space-y-1 ">
              <div className="px-2 mx-auto">
                <HeadingtextSection color={"black"} title={"Marketing"} />
              </div>
              {posts2.map((post, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex flex-col mx-auto items-center lg:w-[450px] md:w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-lg  h-full  md:w-48  md:rounded-lg"
                    src={post.image}
                    alt={post.title}
                  />
                  <div className="flex flex-col justify-between p-2 leading-normal">
                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                      <span className="text-red-700">{post.title} </span> |{" "}
                      <span className="text-zinc-700"> {post.subTitle}</span>
                    </h5>
                    <p className="text-base font-medium">{post.headLine}</p>
                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap mt-2">
                      {post.hashtags.map((hashtag, idx) => (
                        <span key={idx} className="text-xs text-[#121212] mr-2">
                          {hashtag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Second Division - 1/4 space (1 out of 4 columns) */}
        <div className=" col-span-6 lg:col-span-2 mx-auto p-4">
          <HeadingtextSection color={"black"} title={"Technology"} />
          <div className="space-y-10">
            {posts3.map((post, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center w-full lg:w-[335px] rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col justify-between p-1 ">
                  <h5 className="mb-1 flex items-center gap-x-1 text-sm font-bold text-gray-900 dark:text-white">
                    <span className="text-red-700">{post.title} </span> |
                    <span className="text-zinc-700"> {post.subTitle}</span>
                  </h5>
                  <img
                    className="object-cover w-[100px]  rounded-lg  h-[70px]  md:rounded-lg"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
                <div className="flex flex-col justify-between p-1 leading-normal">
                  <p className="text-base font-medium">{post.headLine}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section10;

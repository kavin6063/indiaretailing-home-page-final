import React from "react";
import HeadingtextSection from "./shared/HeadingtextSection";

const Section6 = () => {
  const posts = [
    {
      title: "FASHION",
      subTitle: "FOOD",
      headLine: "What makes Fila unique is its attitude and...",
      description:
        "The singer-songwriter has been spotted in the hybrid garment...",
      image: "/sec6/row1_1.png",
      hashtags: ["#Fashion"],
    },
    {
      title: "SHAILESH",
      subTitle: "FOOD",
      headLine: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      description: "The Gucci loafer has been a signature style for 70 years.",
      image: "/sec6/row1_2.png",
      hashtags: ["#Fashion"],
    },
    {
      title: "LIFESTYLE",
      subTitle: "FASHION",
      headLine: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      description: "BTS attended the 2022 Grammy Awards in complementary ...",
      image: "/sec6/row1_3.png",
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
      image: "/sec6/row2_1.png",
      hashtags: ["#Fashion"],
    },
    {
      title: "FASHION",
      subTitle: "RETAILERS",
      headLine: "Indian fashion retailers to witness revenue ...",
      description: "The Gucci loafer has been a signature style for 70 years.",
      image: "/sec6/row2_2.png",
      hashtags: ["#Fashion"],
    },
    {
      title: "FASHION",
      subTitle: "ZOUK",
      headLine: "Zouk marries heritage with functionality",
      description: "BTS attended the 2022 Grammy Awards in complementary ...",
      image: "/sec6/row2_3.png",
      hashtags: ["#Fashion"],
    },
  ];
  const posts3 = [
    {
      title: "BEAUTY",
      subTitle: "NEWS",
      headLine: "Sugar Cosmetics unveils its 200th brand-owned store",
      image: "/sec6/row3_1.png",
    },
    {
      title: "WELLNESS",
      subTitle: "NEWS",
      headLine: "Athiya Shetty becomes the face of Just Herbs’...",
      image: "/sec6/row3_2.png",
    },
    {
      title: "WELLNESS",
      subTitle: "NEWS",
      headLine: "Indian stars dazzle at Cannes 2023",
      image: "/sec6/row3_3.png",
    },
    {
      title: "BEAUTY",
      subTitle: "NEWS",
      headLine: "Recode Studios to expand footprint with 5 store...",
      image: "/sec6/row3_4.png",
    },
    {
      title: "BEAUTY",
      subTitle: "NEWS",
      headLine: "Recode Studios to expand footprint with 5 store...",
      image: "/sec6/row3_5.png",
    },
  ];
  return (
    <div className="mt-11">
      <div className="w-full mx-auto flex justify-center">
        <img className="w-auto max-w-full" src="/sec6/headImg.png" alt="" />
      </div>

      <div className="grid grid-cols-6 gap-4">
        {/* First Division - 3/4 space (3 out of 4 columns) */}
        <div className="md:col-span-4 col-span-6 p-4">
          <div className="px-4 mx-auto">
            <HeadingtextSection color={"black"} title={"Fashion & Lifestyle"} />
          </div>
          <div className="grid grid-cols-4 gap-12">
            <div className="md:col-span-2  col-span-4">
              <div className="space-y-1">
                {posts.map((post, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex flex-col items-center md:w-[450px] w-[300px] mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <img
                      className="object-cover  rounded-lg  h-full  md:w-48  md:rounded-lg"
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
                          <span
                            key={idx}
                            className="text-xs text-[#121212] mr-2"
                          >
                            {hashtag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="md:col-span-2  col-span-4 ">
              <div className="space-y-1">
                {posts2.map((post, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex flex-col items-center md:w-[450px] w-[300px] mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <img
                      className="object-cover  rounded-lg  h-full  md:w-48  md:rounded-lg"
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
                          <span
                            key={idx}
                            className="text-xs text-[#121212] mr-2"
                          >
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
        </div>

        {/* Second Division - 1/4 space (1 out of 4 columns) */}
        <div className="md:col-span-2 col-span-6 mx-auto p-4">
          <HeadingtextSection color={"black"} title={"Beauty & Wellness"} />
          <div>
            {posts3.map((post, index) => (
              <a
                key={index}
                href="#"
                className="flex mx-auto flex-col items-center w-[335px] rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col justify-between p-1 ">
                  <h5 className="mb-1 flex items-center gap-x-1 text-sm font-bold text-gray-900 dark:text-white">
                    <span className="text-red-700">{post.title} </span> |
                    <span className="text-zinc-700"> {post.subTitle}</span>
                  </h5>
                  <img
                    className="object-cover md:w-[100px]  w-full rounded-lg  h-[70px]  md:rounded-lg"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
                <div className="flex flex-col justify-between p-1 leading-normal">
                  <p className="text-base text-center md:text-left font-medium">
                    {post.headLine}
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

export default Section6;

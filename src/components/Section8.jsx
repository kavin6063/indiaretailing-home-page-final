import React from "react";
import HeadingtextSection from "./shared/HeadingtextSection";

const Section8 = () => {
  const posts = [
    {
      title: "FASHION",
      subTitle: "TAYLOR SWIFT",
      headLine: "Why retailers can’t afford to ignore composable",
      description:
        "Composable commerce opens new avenues for brands to thrive...",
      hashtags: "#Fashion",
      image: "/sec8/col1_1.png",
    },
    {
      title: "FASHION",
      subTitle: "TAYLOR SWIFT",
      headLine: "ONDC has completely automated grievance ",
      description:
        "ONDC is also enabling an online resolution mechanism apart...",
      hashtags: "#Lifestyle",
      image: "/sec8/col1_2.png",
    },
    {
      title: "FASHION",
      subTitle: "TAYLOR SWIFT",
      headLine: "Shiprocket seller app integrates with ONDC ",
      description: "Shiprocket app has been integrated with ONDC, which is...",
      hashtags: "#Lifestyle",
      image: "/sec8/col1_3.png",
    },
  ];

  const posts1 = [
    {
      title: "SHAILESH",
      subTitle: "FOOD",
      headLine: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      description: "The Gucci loafer has been a signature style for 70 years.",
      image: "/sec8/col2_1.png",
      hashtags: "#Fashion",
    },
    {
      title: "FASHION",
      subTitle: "ZOUK",
      headLine: "Zouk marries heritage with functionality",
      description: "BTS attended the 2022 Grammy Awards in complementary ...",
      image: "/sec8/col2_2.png",
      hashtags: "#Fashion",
    },
    {
      title: "WELLNESS",
      subTitle: "NEWS",
      headLine: "Indian stars dazzle at Cannes 2023",
      description: "The Gucci loafer has been a signature style for 70 years.",
      image: "/sec8/col1_1.png",
      hashtags: "#Fashion",
    },
  ];

  const posts2 = [
    {
      title: "SHAILESH",
      subTitle: "FOOD",
      headLine: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      description: "The Gucci loafer has been a signature style for 70 years.",
      image: "/sec8/col3_1.png",
      hashtags: "#Fashion",
    },
    {
      title: "FASHION",
      subTitle: "ZOUK",
      headLine: "Zouk marries heritage with functionality",
      description: "BTS attended the 2022 Grammy Awards in complementary ...",
      image: "/sec8/col3_2.png",
      hashtags: "#Fashion",
    },
    {
      title: "WELLNESS",
      subTitle: "NEWS",
      headLine: "Indian stars dazzle at Cannes 2023",
      description: "The Gucci loafer has been a signature style for 70 years.",
      image: "/sec8/col3_3.png",
      hashtags: "#Fashion",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        {/* Column 1 */}
        <div className="p-4 rounded-md">
          <HeadingtextSection title="E-Commerce" color="black" />
          <div className="space-y-1">
            {posts.map((post, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full rounded-lg h-full md:w-48 md:rounded-lg"
                  src={post.image}
                  alt={post.title}
                />
                <div className="flex flex-col justify-between p-2 leading-normal">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    <span className="text-red-700">{post.title}</span> |{" "}
                    <span className="text-zinc-700"> {post.subTitle}</span>
                  </h5>
                  <p className="text-base font-medium">{post.headLine}</p>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
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

        {/* Column 2 */}
        <div className="p-4 rounded-md">
          <HeadingtextSection title="People" color="black" />
          <div className="space-y-1">
            {posts1.map((post, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full rounded-lg h-full md:w-48 md:rounded-lg"
                  src={post.image}
                  alt={post.title}
                />
                <div className="flex flex-col justify-between p-2 leading-normal">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    <span className="text-red-700">{post.title}</span> |{" "}
                    <span className="text-zinc-700"> {post.subTitle}</span>
                  </h5>
                  <p className="text-base font-medium">{post.headLine}</p>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
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

        {/* Column 3 */}
        <div className="p-4 rounded-md">
          <HeadingtextSection title="D2C Remove Buzz" color="black" />
          <div className="space-y-1">
            {posts2.map((post, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-row mx-auto items-center w-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-1/3 h-full rounded-l-lg"
                  src={post.image}
                  alt={post.title}
                />
                <div className="flex flex-col w-2/3 justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    <span className="text-red-700">{post.title}</span> |{" "}
                    <span className="text-zinc-700">{post.subTitle}</span>
                  </h5>
                  <p className="text-base font-medium">{post.headLine}</p>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
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
      </div>
    </div>
  );
};

export default Section8;

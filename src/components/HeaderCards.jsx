import React from "react";

const HeaderCards = () => {
  const items = [
    {
      id: 1,
      imgSrc: "head1.png",
      title: "HOTSPOTS",
      description: "Luxury hotspots: 5 most expensive high streets in the...",
    },
    {
      id: 2,
      imgSrc: "head2.png",
      title: "AI",
      description: "5 ways to leverage the power of ChatGPT in retail",
    },
    {
      id: 3,
      imgSrc: "head3.png",
      title: "SHIPPING",
      description: "Reliance to open 250 Azorte stores in 2-3 years",
    },
  ];

  return (
    <div className="mx-8 my-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.id}
          href="#"
          className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all"
        >
          {/* Image Section */}
          <img
            className="w-full md:w-1/4 md:h-fit h-2/3  object-cover rounded-lg  md:rounded-lg"
            src={item.imgSrc}
            alt={item.title}
          />

          {/* Text Section */}
          <div className="flex flex-col justify-center  md:w-3/4 p-4">
            <h5 className=" text-lg font-bold text-red-700 dark:text-white ">
              {item.title}
            </h5>
            <p className="mb-1 text-sm text-gray-700 dark:text-gray-400 ">
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default HeaderCards;

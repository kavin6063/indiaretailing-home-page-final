import React from "react";
import HeadingText from "./shared/HeadingText";

const Section2 = () => {
  const listItems = [
    "Cinema industry welcomes lowering GST rates",
    "Patanjali Ayurved to sell 7% stake in Patanjali",
    "Select Citywalk opens 4 new stores in June",
    "Cinema industry welcomes lowering GST rates",
    "Cinema industry welcomes lowering GST rates",
  ];

  const listItems1 = [
    "B2B managed marketplace The Yarn",
    "Sequoia Capital exits Go Fashion",
    "B2B managed marketplace The Yarn",
    "Sequoia Capital exits Go Fashion",
  ];

  const items = [
    {
      id: 1,
      imgSrc: "/sec2/img1.png",
      title: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
    },
    {
      id: 2,
      imgSrc: "/sec2/img2.png",
      title:
        "DLF creating new retail space in Delhi for France’s Galeries Lafayette",
    },
    {
      id: 3,
      imgSrc: "/sec2/img3.png",
      title:
        "PE firm Carlyle offloads entire, Carlyle through its special-purpose ",
    },
    {
      id: 4,
      imgSrc: "/sec2/img4.png",
      title: "How AI is enhancing stores, How AI is enhancing stores",
    },
    {
      id: 5,
      imgSrc: "/sec2/img5.png",
      title: "How AI is enhancing stores, How AI is enhancing stores",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="px-4  ">
        <HeadingText>Web Specials</HeadingText>
      </div>
      <div className="container mx-auto my-8 px-4">
        {/* Outer Grid - Two Half Rows */}
        <div className="grid grid-cols-1 lg:grid-rows-2 gap-4">
          {/* First Half Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Column 1 */}
            <div className="text-white p-4 flex items-center justify-center">
              <img
                className="h-auto w-full md:w-[508px]"
                src="webSpcl1.png"
                alt="Web Special"
              />
            </div>
            {/* Column 2 */}
            <div className="text-black p-4 flex items-center justify-center">
              <ul>
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row py-3 font-semibold border-b-2"
                  >
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 3 */}
            <div className="text-white p-4 flex items-center justify-center">
              <img
                className="w-full h-auto md:w-[335px] rounded-lg"
                src="webSpcl2.png"
                alt="Web Special"
              />
            </div>
          </div>

          {/* Second Half Row */}
          <div className="flex flex-row justify-center items-center p-2">
            <ul className="flex flex-col md:flex-row gap-8 m-0 p-0">
              {listItems1.map((item, index) => (
                <li
                  key={index}
                  className="flex py-3 h-14 border-b-2 md:border-b-0 md:border-r-2"
                >
                  <a href="#" className="flex items-start gap-2 text-left">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Horizontal Card Row */}
        <div className="flex flex-row items-center mx-auto gap-4 overflow-x-auto mt-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[230px] transition-transform transform hover:scale-105"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-auto"
              />
              <h2 className="text-[13px] font-semibold mt-2 text-center">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;

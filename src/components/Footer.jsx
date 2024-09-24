import React from "react";

const Footer = () => {
  const footerData = [
    {
      title: "About Us",
      links: [
        "About IndiaRetailing.com",
        "Meet the team",
        "Advertise with us",
        "Contact us",
      ],
    },
    {
      title: "Categories",
      links: [
        "Fashion & Lifestyle ",
        "Beauty & Wellness",
        "Food & Beverage",
        "Consumer Durables & IT ",
        "Entertainment",
        "Home Décor & Furnishing",
        "Specialty Retail",
      ],
    },
    {
      title: "Features",
      links: [
        "Leaders Ink",
        "People",
        "Finance & Funding ",
        "D2C",
        "Shopping Centers",
        "Results ",
        "Research",
        "Case Studies",
      ],
    },
    {
      title: "Events",
      links: [
        "India Food Forum",
        "Shopping Centre Next",
        "Phygital Retail Convention",
        "India D2C Summit & Awards",
        "Internet Commerce Summit ",
      ],
    },
  ];

  const footerData1 = [
    {
      title: "BookStore",
      links: [
        "About IndiaRetailing.com",
        "Meet the team",
        "Advertise with us",
        "Contact us",
      ],
    },
    {
      title: "Videos",
      links: ["Retail with Rasul Bailay", "The Store", "IR Studio "],
    },
    {
      title: "IR Prime Subscription box",
      links: ["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"],
    },
    {
      title: "Retail Functions",
      links: [
        "Marketing",
        "Technology ",
        "Operations ",
        "HR ",
        "Supply Chain ",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
        <div className="col-span-1 md:col-span-2 p-10 text-center md:text-left">
          <img src="logo1.png" alt="Logo" className="mb-6" />
          <div className="text-[#77808B] text-sm">
            <p className="my-6 font-bold">New Delhi</p>
            <p>
              Images Multimedia Ltd. S-61 A, Pocket S, Okhla Phase II, Okhla
              Industrial Estate, New Delhi, Delhi 110020 Images Multimedia Ltd.
            </p>
          </div>
          <div className="text-[#77808B] text-sm">
            <p className="my-6 font-bold">Mumbai</p>
            <p>
              E 519, Floral Deck Plaza Central MIDC Road, Opp. SEEPZ. Andheri
              East Mumbai 400093.
            </p>
          </div>
          <div>
            <h4 className="my-6 font-bold text-[#77808B] text-sm">
              Contact Us
            </h4>
            <div className="text-[#77808B]">
              <div className="my-6 flex gap-3 justify-center md:justify-start">
                <img
                  className="h-[14px] w-[14px]"
                  src="/Footer/Call.png"
                  alt=""
                />
                <p className="text-xs">+91-9867355551</p>
              </div>
              <div className="flex my-2 gap-3 justify-center md:justify-start">
                <img
                  className="h-[14px] w-[14px]"
                  src="/Footer/sms.png"
                  alt=""
                />
                <p className="text-xs">editor@indiaretailing.com</p>
              </div>

              <div className="my-6 text-sm font-bold">
                <p className="mb-4">Our Social Media</p>
                <img src="/Footer/social.png" alt="Social Media" />
              </div>

              <div className="my-6 text-sm font-bold">
                <p className="mb-4">Download IndiaRetailing App</p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <img src="/Footer/appstore.png" alt="App Store" />
                  <img src="/Footer/gpay.png" alt="Google Play" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-4 bg-gray-200">
          <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl">
              <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                {footerData.map((section, index) => (
                  <div key={index}>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center md:text-left">
                      {section.title}
                    </h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium text-center md:text-left">
                      {section.links.map((link, idx) => (
                        <li key={idx} className="mb-4">
                          <a href="#" className="hover:underline">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                {footerData1.map((section, index) => (
                  <div key={index}>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center md:text-left">
                      {section.title}
                    </h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium text-center md:text-left">
                      {section.links.map((link, idx) => (
                        <li key={idx} className="mb-4">
                          <a href="#" className="hover:underline">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="my-8 flex justify-center items-center">
        <img src="/Footer/line.png" alt="Line" />
      </div>
      <div className="my-5 flex justify-center items-center text-base text-[#77808B]">
        <p className="text-center">
          Copyright © 2023 Indiaretailing.com. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

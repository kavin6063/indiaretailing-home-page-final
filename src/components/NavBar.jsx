import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for menu toggle

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize active index
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const handleClick = (index) => {
    setActiveIndex(index); // Update active index on click
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <div>
      <nav className="m-4 flex flex-row justify-between items-center">
        {/* Logo Section */}
        <div>
          <img
            src="/searchBarImg-2.png"
            alt="Logo"
            className="w-auto hidden md:flex "
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex flex-row gap-6 lg:gap-10">
          {[
            "Home",
            "Categories",
            "IR Prime",
            "Events",
            "BookStore",
            "NewsLetter",
            "Video",
          ].map((item, index) => (
            <li key={index} onClick={() => handleClick(index)}>
              <a
                href="#"
                className={`cursor-pointer font-bold ${
                  activeIndex === index ? "text-red-500" : "text-black"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Additional Info */}
        <div className="hidden md:flex flex-row items-center justify-center gap-3">
          <img src="/searchBarImg-1.png" alt="Icon" className="w-[40px]" />
          <p>Friday, 30 June 2023</p>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white text-black flex flex-col gap-3 p-4">
          {[
            "Home",
            "Categories",
            "IR Prime",
            "Events",
            "BookStore",
            "NewsLetter",
            "Video",
          ].map((item, index) => (
            <li key={index} onClick={() => handleClick(index)}>
              <a
                href="#"
                className={`cursor-pointer font-bold ${
                  activeIndex === index ? "text-red-500" : "text-black"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Sub-Menu Links */}
      <ul className="mt-6 hidden text-sm pb-5 text-gray-500 md:flex justify-between items-center container mx-auto">
        {[
          "Fashion & Lifestyle",
          "Beauty & Wellness",
          "Food & Beverage",
          "Consumer Durables & IT",
          "Entertainment",
          "Home Decor & Furnishing",
          "Speciality Retail",
        ].map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;

import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const [isMenu, setMenu] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevTheme) => {
      const newTheme = prevTheme ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return !prevTheme;
    });
  };

  const menuHandleChange = () => {
    setMenu(!isMenu);
  };

  return (
    <nav className="sm:container sm:mx-auto">
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto flex justify-between items-center py-4 sm:px-0">
        <div>
          <Link
            to={"/"}
            className="logo text-gray-900 dark:text-white hover:text-blue-500 mx-4 text-4xl"
          >
            Sulabh
          </Link>
        </div>

        <div className="hidden sm:flex text-xl space-x-6 px-5 gap-5 mx-4">
          <Link
            to={"projects"}
            className="font-bold text-gray-900 dark:text-gray-300 hover:text-blue-500"
          >
            Projects
          </Link>
          <Link
            to={"about"}
            className="font-bold text-gray-900 dark:text-gray-300 hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to={"contact"}
            className="font-bold text-gray-900 dark:text-gray-300 hover:text-blue-500"
          >
            Contact
          </Link>
        </div>

        <div className="flex justify-center items-center mx-4 gap-6">
          <button className="hidden sm:block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Hire Me
          </button>

          <div
            className="p-3 bg-gray-200 dark:bg-darkk rounded-2xl cursor-pointer"
            onClick={toggleTheme}
          >
            {!isDarkMode ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-gray-200 hover:text-gray-50 text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </div>
          <div className="sm:hidden text-3xl" onClick={menuHandleChange}>
            {isMenu ? (
              <IoMdMenu className="text-black dark:text-white" />
            ) : (
              <IoCloseSharp className="text-black dark:text-white" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {!isMenu && (
        <div class="block sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none ">
          <a
            class="block text-left text-lg text-primary-dark dark:text-white hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
            href="/projects"
          >
            Projects
          </a>
          <a
            class="block text-left text-lg text-primary-dark dark:text-white hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="About Me"
            href="/about"
          >
            About Me
          </a>
          <a
            class="block text-left text-lg text-primary-dark dark:text-white hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Contact"
            href="/contact"
          >
            Contact
          </a>
          <div class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <span
              class="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
              aria-label="Hire Me Button"
            >
              <button>Hire Me</button>
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import Projects from "../Projects/Projects";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="text-black dark:text-white container mx-auto">
      <section className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
        <div class="w-full md:w-1/3 text-left">
          <h1 class="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
            Hi, Iam Sulabh
          </h1>
          <p class="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">
            A Full-Stack Developer &amp; CP Enthusiast
          </p>
          <div class="flex justify-center sm:block">
            <a
              download="Sulabh-Resume.pdf"
              href="../../files/SulabhAmbule_Resume.pdf"
              class="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
              aria-label="Download Resume"
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
              </svg>
              <span class="text-sm sm:text-lg font-general-medium duration-100">
                Download CV
              </span>
            </a>
          </div>
        </div>

        <div
          className={`w-full sm:w-1/2 lg:w-2/3 text-center mt-8 sm:mt-0 transform transition-transform duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-40 opacity-0"
          }`}
        >
          <img
            className="max-w-full h-auto"
            src="https://react-tailwindcss-portfolio.netlify.app/static/media/developer.ef097afb.svg"
            alt="Developer"
          />
        </div>
      </section>

      <Projects/>
    </div>
  );
};

export default Home;

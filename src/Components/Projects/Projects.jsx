import React from 'react'

const Projects = () => {
  return (
    <div className="text-black dark:text-white container mx-auto">
      <section className="py-5 sm:py-10 mt-5 sm:mt-10">
        <div class="text-center">
          <p class="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Projects portfolio
          </p>
        </div>

        <div class="mt-10 sm:mt-16">
          <h3 class="font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ">
            Search projects by title or filter by category
          </h3>
          <div class=" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ">
            <div class="flex justify-between gap-2">
              <span class=" hidden sm:block bg-gray-200 dark:bg-darkk p-2.5 shadow-sm rounded-xl cursor-pointer ">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-ternary-dark dark:text-ternary-light w-5 h-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>

              <input
                class="font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:bg-darkk rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light "
                id="name"
                name="name"
                type="search"
                placeholder="Search Projects"
                aria-label="Name"
              />
            </div>
            <select class="font-general-medium  px-4 sm:px-6 py-2 border dark:bg-darkk rounded-lg text-sm sm:text-md dark:font-medium dark:text-white bg-secondary-light  text-primary-dark dark:text-ternary-light ">
              <option class="text-sm sm:text-md " value="">
                All Projects
              </option>
              <option class="text-normal sm:text-md dark:text-white">
                Web Application
              </option>
              <option class="text-normal sm:text-md dark:text-white">
                Mobile Application
              </option>
              <option class="text-normal sm:text-md dark:text-white">
                UI/UX Design
              </option>
              <option class="text-normal sm:text-md dark:text-white">
                Branding
              </option>
            </select>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

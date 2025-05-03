import React from "react";
import image from "../../files/Sulabh-Image.jpeg";
import CodeforcesCard from "../Platforms/Codeforces";

const About = () => {
  return (
    <div class="container mx-auto">
      <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <div class="px-10 sm:p-0 w-full sm:w-1/4 mb-7 sm:mb-0">
          <img src={image} class="rounded-lg w-96" alt="" />
        </div>
        <div class=" px-10 sm:p-0 font-general-regular w-full sm:w-3/4 text-left">
          <p class="mb-4 text-ternary-dark dark:text-white text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel
            illum asperiores dignissimos cumque quibusdam et fugiat voluptatem
            nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi
            corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Incidunt totam dolorum, ducimus
            obcaecati, voluptas facilis molestias nobis ut quam natus similique
            inventore excepturi optio ipsa deleniti fugit illo. Unde, amet!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo
            necessitatibus perspiciatis! Aperiam perferendis labore temporibus,
            eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit
            libero tenetur neque consequatur ea.
          </p>
          <p class="mb-4 text-ternary-dark dark:text-white text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel
            illum asperiores dignissimos cumque quibusdam et fugiat voluptatem
            nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi
            corporis laudantium adipisci soluta?
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-5 p-4 bg-gray-100 dark:bg-slate-500 rounded-lg shadow-lg">
        <CodeforcesCard />
        <CodeforcesCard />
        <CodeforcesCard />
        <CodeforcesCard />
        <CodeforcesCard />
        <CodeforcesCard />
        <CodeforcesCard />
      </div>
    </div>
  );
};

export default About;

import React, { useEffect, useState } from "react";

const CodeforcesCard = () => {
  const [profile, setProfile] = useState({
    currentRating: 0,
    maxRating: 0,
    maxRank: "",
  });

  useEffect(() => {
    fetch("https://codeforces.com/api/user.info?handles=sulabhambule")
      .then((response) => response.json())
      .then((data) => {
        const user = data.result[0];
        setProfile({
          currentRating: user.rating,
          maxRating: user.maxRating,
          maxRank: user.maxRank,
        });
      })
      .catch((error) =>
        console.error("Error fetching Codeforces data:", error)
      );
  }, []);

  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-4 m-4 rounded-lg">
      <a href="https://codeforces.com/profile/sulabhambule">
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center text-gray-900 dark:text-white">
          Codeforces Profile
        </div>
        <ul className="text-gray-700 dark:text-gray-300 text-center">
          <li>
            <span className="font-semibold">Current Rating:</span>{" "}
            {profile.currentRating}
          </li>
          <li>
            <span className="font-semibold">Max Rating:</span>{" "}
            {profile.maxRating}
          </li>
          <li>
            <span className="font-semibold">Max Rank:</span> {profile.maxRank}
          </li>
        </ul>
      </div>
      </a>
      
    </div>
  );
};

export default CodeforcesCard;

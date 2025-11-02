import React from "react";

// ✅ Define helper function
const getInitials = (fullName) => {
  if (!fullName) return "?";
  const words = fullName.trim().split(" ");
  const initials = words.map((w) => w[0]?.toUpperCase()).join("");
  return initials.slice(0, 2); // show max 2 letters
};

const CharAvatar = ({ fullName, width, height, style }) => {
  return (
    <div
      className={`${width || "w-12"} ${height || "h-12"} ${style || ""} flex items-center justify-center rounded-full text-gray-900 font-medium bg-gray-100 dark:bg-gray-700 dark:text-gray-200`}
    >
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar;

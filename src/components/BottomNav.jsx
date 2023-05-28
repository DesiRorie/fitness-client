import React from "react";

const BottomNav = () => {
  return (
    <div className="navbarContainer">
      <div className="navInput">
        {" "}
        <input type="text" placeholder="Search for a food" />
      </div>

      <ul>
        <li>Dashboard</li>
        <li>Diary</li>
        <li>Newsfeed</li>
        <li>Plans</li>
        <li>More</li>
      </ul>
    </div>
  );
};

export default BottomNav;

import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="navbarContainer">
      <div className="navInput">
        {" "}
        <input type="text" placeholder="Search for a food" />
      </div>

      <ul>
        <Link id="link" className="linkStyle" to="/">
          <li>Dashboard</li>
        </Link>

        <Link id="link" className="linkStyle" to="diary">
          <li>Diary</li>
        </Link>
        <li>Newsfeed</li>
        <li>Plans</li>
        <li>More</li>
      </ul>
    </div>
  );
};

export default BottomNav;

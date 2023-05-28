import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const HomeNav = () => {
  return (
    <div className="homeNav">
      <PersonOutlineOutlinedIcon
        style={{
          backgroundColor: " rgb(50, 50, 50)",
          borderRadius: "50%",
          padding: "10px",
        }}
      />
      <div className="homeNavMiddle" style={{ textAlign: "center" }}>
        <h2>fitness</h2>
        <button>Start Free Trial</button>
      </div>
      <NotificationsNoneOutlinedIcon />
    </div>
  );
};

export default HomeNav;
